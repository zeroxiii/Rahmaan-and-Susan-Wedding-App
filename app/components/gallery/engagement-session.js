import Ember from 'ember';

export default Ember.Component.extend({

  myGallery: [
    {
      src: "/assets/images/gallery1.jpg",
      w: 600,
      h: 404,
      title: 'whoa',
    },
    {
      src: "/assets/images/gallery2.jpg",
      w: 600,
      h: 404,
      title: 'whoa',
    }
  ]
});
