import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('details/directions-details', 'Integration | Component | details/directions details', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{details/directions-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#details/directions-details}}
      template block text
    {{/details/directions-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
