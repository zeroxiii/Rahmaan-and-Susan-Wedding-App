import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'raised', 'segment'],

  weddingParty: Ember.computed(function() {
    let result = [
      {
        name: "Bride's Side",
        party: this.get('brideParty'),
      },
      {
        name: "Groom's Side",
        party: this.get('groomParty'),
      }
    ];

    return result;
  }),

  groomParty: [
    {
      name: "Chris Ghiathi",
      url: "/assets/images/party/chris_card.jpg",
      position: "Best Man",
      description: "Chris is an ok guy."
    },
    {
      name: "Troy Lewis",
      url: "/assets/images/party/troy_card.jpg",
      position: "Groomsman",
      description: "Troy Lewis is an ok guy."
    },
    {
      name: "Lee Stokes",
      url: "/assets/images/party/lee_card.jpg",
      position: "Groomsman",
      description: "Lee Stokes is an ok guy."
    },
    {
      name: "Ryan Krepps",
      url: "/assets/images/party/ryan_card.jpg",
      position: "Groomsman",
      description: "Ryan Krepps is an ok guy."
    },
    {
      name: "Dan Rosmus",
      url: "/assets/images/party/dan_card.jpg",
      position: "Groomsman",
      description: "Dan Rosmus is an ok guy."
    },
    {
      name: "Clay Anderson",
      url: "/assets/images/party/clay_card.jpg",
      position: "Groomsman",
      description: "Clay Anderson is an ok guy."
    },
    {
      name: "Jessica Lee",
      url: "/assets/images/party/jessica_card.jpg",
      position: "Groomsgal",
      description: "Jessica Lee is an cool kid."
    },
    {
      name: "Anne Harkleroad",
      url: "/assets/images/party/anne_card.jpg",
      position: "Groomsgal",
      description: "Anne Harkleroad is a cool kid."
    },
  ],

  brideParty: [
    {
      name: "Raissa Lim",
      url: "/assets/images/party/raissa_card.jpg",
      position: "Maid of Honor",
      description: "Raissa is a cool kid."
    },
    {
      name: "Gwendelyn Queen",
      url: "http://semantic-ui.com/images/avatar/large/stevie.jpg",
      position: "Bridesmaid",
      description: "Gwendelyn Queen is a cool kid."
    },
    {
      name: "Sherilyn Queen",
      url: "/assets/images/party/sherilyn_card.jpg",
      position: "Bridesmaid",
      description: "Sherilyn Queen is a cool kid."
    },
    {
      name: "Shardaya Weems",
      url: "http://semantic-ui.com/images/avatar/large/stevie.jpg",
      position: "Bridesmaid",
      description: "Shardaya Weems is a cool kid."
    },
    {
      name: "Kimberly Wong",
      url: "http://semantic-ui.com/images/avatar/large/stevie.jpg",
      position: "Bridesmaid",
      description: "Kimberly Wong is a cool kid."
    },
    {
      name: "Lauren Yutko",
      url: "http://semantic-ui.com/images/avatar/large/stevie.jpg",
      position: "Bridesmaid",
      description: "Lauren Yutko is a cool kid."
    },
    {
      name: "Jonathan Kuo",
      url: "/assets/images/party/kuo_card.jpg",
      position: "Bridesdude",
      description: "Jonathan Kuo is an ok guy."
    },
    {
      name: "Travis Harkleroad",
      url: "/assets/images/party/travis_card.jpg",
      position: "Bridesbro",
      description: "Travis Harkleroad is an ok guy."
    },
  ]
});
