// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.playFirst, this);
    this.on('remove', this.removeSong, this);
  },

  playFirst : function(song){
    if (this.models.length === 1) {
      song.play();
    }
  },

  removeSong: function(){
    if (this.models.length > 0) {
      this.models[0].play();
    }
  }


});
