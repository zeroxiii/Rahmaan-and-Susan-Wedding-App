import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('details/schedule-details', 'Integration | Component | details/schedule details', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{details/schedule-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#details/schedule-details}}
      template block text
    {{/details/schedule-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
