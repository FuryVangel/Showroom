$(function() {
  new Progressive({
    el: '#primary-content',
    lazyClass: 'lazy',
    removePreview: true,
    scale: true
  }).fire()
});
