// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> (<%= playCount %>)</td><td><span class="glyphicon glyphicon-thumbs-up">(<%= upCount %>)</span></td><td>  </td><td><span class="glyphicon glyphicon-thumbs-down">(<%= downCount %>)</span></td>'),

  events: {
    'click': function(ev) {
      var cl = ev.target.classList[1];
      if(cl && cl.indexOf('thumbs-up') > -1){
        this.model.incrUpCount();
      }
      else if(cl && cl.indexOf('thumbs-down') > -1){
        this.model.incrDownCount();
        }
      else{
        this.model.addQueue();
      }
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
