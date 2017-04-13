import Ember from 'ember';

export default Ember.Component.extend(Ember.Evented, {
  classNames: ['page-header'],
  
  actions: {
    toggle: function() {
      Ember.$('.ui.sidebar').sidebar('toggle');
    }
  }
});
