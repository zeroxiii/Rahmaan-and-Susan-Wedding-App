import Ember from 'ember';

export default Ember.Component.extend({

  photoWidth: 1200,
  photoHeight: 800,

  myGallery: Ember.computed(function() {
    let result = [
      {
        src: "/assets/images/gallery/engagement_gallery_01.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_02.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_03.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_04.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_05.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_06.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_07.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_08.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_09.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_10.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_11.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_12.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_13.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_14.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
      {
        src: "/assets/images/gallery/engagement_gallery_15.jpg",
        w: this.get('photoWidth'),
        h: this.get('photoHeight'),
        title: '',
      },
    ];

    return result;
  }),
});
