// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> (<%= playCount %>)</td>'),

  events: {
    'click': function() {
      this.model.addQueue();
      this.render();
    }
  },

  initialize: function(){
    this.model.on('change', function(){
        this.render();
      },this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
