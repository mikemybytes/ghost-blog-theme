import $ from 'cash-dom' // #mikemybytes custom
import mediumZoom from 'medium-zoom'
import fitvids from 'fitvids'
import shave from 'shave'
import Glide, {
  Controls,
  Swipe,
  Breakpoints
} from '@glidejs/glide/dist/glide.modular.esm'
import {
  isRTL,
  isMobile,
  adjustImageGallery,
  managePostImages,
  makeImagesZoomable
} from './helpers'

let $aosWrapper = null
let $progressCircle = null
let lastScrollingY = window.pageYOffset
let lastWindowHeight = 0
let lastDocumentHeight = 0
let circumference = 0
let isTicking = false

const onScrolling = () => {
  lastScrollingY = window.pageYOffset
  requestTicking()
}

const adjustShare = (timeout) => {
  if (!isMobile('1023px')) {
    $('body').removeClass('share-menu-displayed')
  } else {
    $('body').addClass('share-menu-displayed')
    setTimeout(() => {
      $aosWrapper.removeAttr('data-aos')
    }, timeout)
  }
}

const onResizing = () => {
  setHeights()
  adjustShare(100)

  setTimeout(() => {
    setCircleStyles()
    requestTicking()
  }, 200)
}

const requestTicking = () => {
  if (!isTicking) {
    requestAnimationFrame(updating)
  }

  isTicking = true
}

const updating = () => {
  const progressMax = lastDocumentHeight - lastWindowHeight
  const percent = Math.ceil((lastScrollingY / progressMax) * 100)

  if (percent <= 100) {
    setProgress(percent)
  }

  isTicking = false
}

const setHeights = () => {
  lastWindowHeight = window.innerHeight
  lastDocumentHeight = $(document).height()
}

const setCircleStyles = () => {
  const svgWidth = $progressCircle.parent().width();
  const radiusCircle = svgWidth / 2
  const borderWidth = isMobile() ? 2 : 3

  $progressCircle.parent().attr('viewBox', `0 0 ${svgWidth} ${svgWidth}`)
  $progressCircle.attr('stroke-width', borderWidth)
  $progressCircle.attr('r', radiusCircle - (borderWidth - 1))
  $progressCircle.attr('cx', radiusCircle)
  $progressCircle.attr('cy', radiusCircle)

  circumference = radiusCircle * 2 * Math.PI

  $progressCircle[0].style.strokeDasharray = `${circumference} ${circumference}`
  $progressCircle[0].style.strokeDashoffset = circumference
}

const setProgress = (percent) => {
  if (percent <= 100) {
    const offset = circumference - percent / 100 * circumference
    $progressCircle[0].style.strokeDashoffset = offset
  }
}

const prepareProgressCircle = () => {
  $progressCircle = $('.js-progress')

  setHeights()
  setCircleStyles()
  updating()

  setTimeout(() => {
    $progressCircle.parent().css('opacity', 1)
  }, 300)
}

$(document).ready(() => {
  $aosWrapper = $('.js-aos-wrapper')
  const $scrollButton = $('.js-scrolltop')
  const $recommendedSlider = $('.js-recommended-slider')

  fitvids('.js-post-content')

  adjustImageGallery()
  adjustShare(1000)

  if ($recommendedSlider.length > 0) {
    const recommendedSlider = new Glide('.js-recommended-slider', {
      type: 'slider',
      rewind: false,
      perView: 3,
      swipeThreshold: false,
      dragThreshold: false,
      gap: 0,
      direction: isRTL() ? 'rtl' : 'ltr',
      breakpoints: {
        1023: {
          type: 'carousel',
          perView: 2,
          swipeThreshold: 80,
          dragThreshold: 120
        },
        720: {
          type: 'carousel',
          perView: 2,
          swipeThreshold: 80,
          dragThreshold: 120
        },
        568: {
          type: 'carousel',
          perView: 1,
          swipeThreshold: 80,
          dragThreshold: 120
        }
      }
    })

    const Length = (Glide, Components, Events) => {
      return {
        mount() {
          Events.emit('length.change', Components.Sizes.length)
        }
      }
    }

    recommendedSlider.on('mount.after', () => {
      shave('.js-article-card-title', 100)
      shave('.js-article-card-title-no-image', 250)
    })

    recommendedSlider.on('length.change', (length) => {
      if (length === 1) {
        recommendedSlider.update({ type: 'slider' })
        $recommendedSlider.find('.js-controls').remove()
      }
    })

    recommendedSlider.mount({ Controls, Swipe, Breakpoints, Length })
  }

  shave('.js-article-card-title', 100)
  shave('.js-article-card-title-no-image', 250)

  $scrollButton.on('click', () => { // #mikemybytes custom
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  })

  managePostImages($)
  makeImagesZoomable($, mediumZoom)

  window.addEventListener('scroll', onScrolling, { passive: true })
  window.addEventListener('resize', onResizing, { passive: true })
})

$(window).on('load', () => { // #mikemybytes custom
  prepareProgressCircle()
})

// #mikemybytes custom
$(window).on('load', () => { // #mikemybytes custom
  // load Disqus comments lazily
  // https://jross.me/lazy-loading-disqus-comments-with-intersectionobserver/

  let disqusLoaded = false;
  let loadComments = () => {
    if (!disqusLoaded) {
      disqusLoaded = true;
      let d = document, s = d.createElement('script');
      s.src = 'https://blog-michal-kowalski.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    }
  }

  // load comments for search engines to index
  if (/bot|google|baidu|bing|msn|duckduckgo|slurp|yandex/i.test(navigator.userAgent)) {
    loadComments();
  }
  // load comments if URL hash contains #comment
  if (location && location.hash && location.hash.includes('comment')) {
    loadComments();
  }

  // load comments when author data enter viewport
  if (!!window.IntersectionObserver) {
    const box = document.querySelector('.m-author__content');
    const intersectionObserver = new IntersectionObserver(function (entries, observer) {
      if (entries && entries[0] && entries[0].isIntersecting) {
        loadComments();
        observer.unobserve(box);
      }
    });
    intersectionObserver.observe(box);
  }
});
// #mikemybytes custom
