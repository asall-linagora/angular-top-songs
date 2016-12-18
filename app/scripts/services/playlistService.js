/**
 * @author Alpha Sall
 */

'use strict';

angular.module('angularTopSongsApp')
  .factory('playlistService', function($log, $mdDialog) {
    var listOfPlaylist = [{name: 'Top 10', tracks: []}];

    return {
      create: function(name) {
        listOfPlaylist.push({name: name, tracks: []});
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
        if(!angular.isArray(tracks)) {
          tracks = [tracks];
        }
        angular.forEach(tracks, function(elm) {
          playlist.tracks.push(elm);
          $log.debug(playlist);
        });
      }
    };
  });
