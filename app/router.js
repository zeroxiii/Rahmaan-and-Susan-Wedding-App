import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('story');
  this.route('details');
  this.route('travel');
  this.route('registry');
  this.route('contact');
});

export default Router;
