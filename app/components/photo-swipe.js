import PhotoSwipe from 'ember-cli-photoswipe/components/photo-swipe';

export default PhotoSwipe.extend({

  // OVERWRITE CAUSE APPARENTLY THESE GUYS DON'T UNDERSTAND
  // RELATIVE POSITIONING!!!
  _getBounds: function(i) {
    var img      = this.$('img').get(i),
        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
        position = this.$(img).offset(),
        width    = this.$(img).width();
    return {x: position.left, y: position.top + pageYScroll, w: width};
  },

});
