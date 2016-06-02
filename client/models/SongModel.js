// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    var playCnt = Number(localStorage.getItem(this.get("url"))) || 0;
    this.set('playCount', playCnt);
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    var playCount = this.get("playCount");
    playCount+=1;
    this.set('playCount',playCount);

    localStorage.setItem(this.get("url"),this.get('playCount'))  ;
  },
  end: function(){
    this.trigger('removeQueue', this);
  },
  addQueue: function(){
    this.trigger('addQueue', this);
  }

});
