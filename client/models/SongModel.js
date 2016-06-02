// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    var obj = JSON.parse(localStorage.getItem(this.get('url')));
    this.set('playCount', obj ? Number(obj['playCount']): 0);
    this.set('upCount', obj ? Number(obj['upCount']): 0);
    this.set('downCount', obj ? Number(obj['downCount']): 0);
  },

  incrUpCount : function(){
    this.set('upCount', this.get('upCount')+1);
    this.writeLocalStorage();
  },

  incrDownCount : function(){
    this.set('downCount', this.get('downCount')+1);
    this.writeLocalStorage();    
  },

  writeLocalStorage: function(){
    var obj ={};
    obj["playCount"]= this.get('playCount');
    obj["upCount"]= this.get('upCount');
    obj["downCount"] = this.get('downCount');

    localStorage.setItem(this.get("url"), JSON.stringify(obj));

  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    var playCount = this.get("playCount");
    playCount+=1;
    this.set('playCount',playCount);
    this.writeLocalStorage();

  },
  end: function(){
    this.trigger('removeQueue', this);
  },
  addQueue: function(){
    this.trigger('addQueue', this);
  }

});
