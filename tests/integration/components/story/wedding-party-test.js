import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('story/wedding-party', 'Integration | Component | story/wedding party', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{story/wedding-party}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#story/wedding-party}}
      template block text
    {{/story/wedding-party}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
