/**
 * @author Alpha Sall
 */

'use strict';

angular.module('angularTopSongsApp')
  .factory('playlistService', function($q) {
    var defer = $q.defer();
    var listOfPlaylist = [{name: 'Top 10', tracks: []}];

    return {
      create: function(name) {
        listOfPlaylist.push({name: name, track: []});
      },
      rename: function(index, newName) {
        listOfPlaylist[index].name = newName;
      },
      delete: function(index) {
        listOfPlaylist.splice(index, 1);
      },
      clear: function(index) {
        listOfPlaylist[index].tracks = [];
      },
      export: function() {

      },
      getListOfPlaylist: function() {
        return listOfPlaylist;
      },
      addTracks: function (playlist, tracks) {
        console.log('qsdklfj', playlist);
        console.log('tracks', tracks);
        if(!angular.isArray(tracks)) {
          tracks = [tracks];
        }
        angular.forEach(tracks, function(elm) {
          playlist.tracks.push(elm);
          console.log(playlist);
        });
      }
    };
  });
