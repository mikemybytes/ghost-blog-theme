import $ from 'cash-dom' // #mikemybytes custom
import fitvids from 'fitvids'
import mediumZoom from 'medium-zoom'
import {
  adjustImageGallery,
  managePostImages,
  makeImagesZoomable
} from './helpers'

$(document).ready(() => {
  fitvids('.js-post-content')

  adjustImageGallery()
  managePostImages($)
  makeImagesZoomable($, mediumZoom)
})
