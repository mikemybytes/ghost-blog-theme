(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return o})),n.d(t,"isMobile",(function(){return a})),n.d(t,"isDarkMode",(function(){return i})),n.d(t,"formatDate",(function(){return s})),n.d(t,"getParameterByName",(function(){return r})),n.d(t,"adjustImageGallery",(function(){return c})),n.d(t,"managePostImages",(function(){return l})),n.d(t,"makeImagesZoomable",(function(){return d}));var o=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},i=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},s=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},r=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},c=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var o=e[t].closest(".kg-gallery-image"),a=e[t].attributes.width.value/e[t].attributes.height.value;o.style.flex="".concat(a," 1 0%")}},l=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable");var t=e(this).parent().find("figcaption");t?e(this).attr("alt",t.text()):e(this).attr("alt","")}))},d=function(e,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=e(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}},12:function(e,t,n){e.exports=n(13)},13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(8),s=n.n(i),r=n(2),c=n(6),l=n(3),d=n(10),u=n.n(d),m=(n(15),n(1));a()(document).ready((function(){Object(m.isRTL)()&&a()("html").attr("dir","rtl").addClass("rtl");var e,t,n=a()("body"),o=a()(".js-header"),i=a()(".js-open-menu"),d=a()(".js-close-menu"),h=a()(".js-menu"),f=a()(".js-toggle-submenu"),g=a()(".js-submenu-option")[0],p=a()(".js-submenu"),v=a()(".js-recent-slider"),w=a()(".js-open-secondary-menu"),b=a()(".js-open-search"),j=a()(".js-close-search"),k=a()(".js-search"),C=a()(".js-input-search"),y=a()(".js-search-results"),T=a()(".js-no-results"),O=a()(".js-toggle-darkmode"),M=a()(".js-notification-close"),S=a()(".js-main-nav"),x=a()(".js-main-nav-left"),I=localStorage.getItem("theme"),L=!1,D=null,A=function(){o.removeClass("submenu-is-active"),f.removeClass("active"),p.removeClass("opened").addClass("closed")},B=function(){n.toggleClass("no-scroll-y")},E=function(e){var t=a()('.js-alert[data-notification="'.concat(e,'"]'));t.addClass("opened"),setTimeout((function(){R(t)}),5e3)},R=function(e){e.removeClass("opened");var t=window.location.toString();if(t.indexOf("?")>0){var n=t.substring(0,t.indexOf("?"));window.history.replaceState({},document.title,n)}},V=function(e){Object(m.isMobile)()||(e?(S.addClass("toggle-overflow"),x.addClass("toggle-overflow")):(S.removeClass("toggle-overflow"),x.removeClass("toggle-overflow")))};(i.click((function(){o.addClass("mobile-menu-opened"),h.addClass("opened"),B()})),d.click((function(){o.removeClass("mobile-menu-opened"),h.removeClass("opened"),B()})),f.click((function(){(L=!L)?(o.addClass("submenu-is-active"),f.addClass("active"),p.removeClass("closed").addClass("opened")):A()})),b.click((function(){k.addClass("opened"),setTimeout((function(){C.focus()}),400),B()})),j.click((function(){C.blur(),k.removeClass("opened"),B()})),C.keyup((function(){C.val().length,y.html(""),y.hide(),T.hide()})),O.change((function(){O.is(":checked")?(a()("html").attr("data-theme","dark"),localStorage.setItem("theme","dark")):(a()("html").attr("data-theme","light"),localStorage.setItem("theme","light"))})),O.hover((function(){V(!0)}),(function(){V(!1)})),M.click((function(){R(a()(this).parent())})),a()(window).click((function(e){L&&g&&!g.contains(e.target)&&(L=!1,A())})),a()(document).keyup((function(e){"Escape"===e.key&&k.hasClass("opened")&&j.click()})),I?(a()("html").attr("data-theme",I),"dark"===I&&O.attr("checked",!0)):Object(m.isDarkMode)()&&O.attr("checked",!0),o.length>0)&&new s.a(o[0],{tolerance:{down:10,up:20},offset:15,onUnpin:function(){if(!Object(m.isMobile)()&&D){var e=D[0];e&&e.state.isVisible&&e.hide()}}}).init();if(v.length>0){var H=new r.d(".js-recent-slider",{type:"slider",rewind:!1,perView:4,swipeThreshold:!1,dragThreshold:!1,gap:0,direction:Object(m.isRTL)()?"rtl":"ltr",breakpoints:{1024:{perView:3,swipeThreshold:80,dragThreshold:120},768:{perView:2,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}},568:{perView:1,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}}}});H.on("mount.after",(function(){Object(l.a)(".js-recent-article-title",50)})),H.mount({Swipe:r.c,Breakpoints:r.a})}if("undefined"!=typeof disableFadeAnimation&&disableFadeAnimation?a()("[data-aos]").addClass("no-aos-animation"):u.a.init({once:!0,startEvent:"DOMContentLoaded"}),w.length>0){var P=document.getElementById("secondary-navigation-template");D=Object(c.a)(".js-open-secondary-menu",{content:P.innerHTML,allowHTML:!0,arrow:!0,trigger:"click",interactive:!0,onShow:function(){V(!0)},onHidden:function(){V(!1)}})}Object(c.a)(".js-tooltip"),Object(l.a)(".js-article-card-title",100),Object(l.a)(".js-article-card-title-no-image",250),e=Object(m.getParameterByName)("action"),t=Object(m.getParameterByName)("stripe"),"subscribe"===e&&E("subscribe"),"signup"===e&&(window.location="".concat(ghostHost,"/signup/?action=checkout")),"checkout"===e&&E("signup"),"signin"===e&&E("signin"),"success"===t&&E("checkout"),"undefined"!=typeof ghostSearchApiKey||(b.css("visibility","hidden"),j.remove(),k.remove())}))}},[[12,0,1]]]);