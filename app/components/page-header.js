import Ember from 'ember';

export default Ember.Component.extend(Ember.Evented, {

  actions: {
    toggle: function() {
      $('.ui.sidebar').sidebar('toggle');
    }
  }
});
