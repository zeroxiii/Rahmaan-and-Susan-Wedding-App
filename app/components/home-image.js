import Ember from 'ember';
import moment from 'moment';
import numeral from 'numeral';

export default Ember.Component.extend({
  classNames: ['ui', 'vertical', 'center', 'aligned', 'basic', 'segment', 'home-image'],
  clock: Ember.inject.service(),
  'wedding-clock': Ember.inject.service(),
  weddingDate: moment("2017-10-13 19:30 EST", "YYYY-MM-DD HH:mm Z"),

  timeTillWedding: Ember.computed('wedding-clock.date', 'weddingDate', function() {
    console.log(this.get('clock'));
    let currentDate = this.get('wedding-clock.date');
    let weddingDate = this.get('weddingDate');

    let truncRegEx = /(^\d*)\.?\d*/;

    let timeDuration = moment.duration(weddingDate.diff(currentDate));
    console.log(timeDuration.asDays().toString().match(truncRegEx)[1]);

    let result = {
      days: numeral(timeDuration.asDays().toString().match(truncRegEx)[1]).format('000'),
      hours: numeral(timeDuration.hours().toString().match(truncRegEx)[1]).format('00'),
      minutes: numeral(timeDuration.minutes().toString().match(truncRegEx)[1]).format('00'),
    };

    return result;
  }),
});
