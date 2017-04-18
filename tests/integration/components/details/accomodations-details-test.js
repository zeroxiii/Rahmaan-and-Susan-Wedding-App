import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('details/accomodations-details', 'Integration | Component | details/accomodations details', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{details/accomodations-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#details/accomodations-details}}
      template block text
    {{/details/accomodations-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
