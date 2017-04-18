import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('details/venue-details', 'Integration | Component | details/venue details', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{details/venue-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#details/venue-details}}
      template block text
    {{/details/venue-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
