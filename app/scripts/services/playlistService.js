/**
 * @author Alpha Sall
 */

'use strict';

angular.module('angularTopSongsApp')
  .factory('playlistService', function() {

    var listOfPlaylist = ['top 10'];
    return {
      create: function(name) {
        listOfPlaylist.push(name);
      },
      rename: function(index, newName) {
        listOfPlaylist[index] = newName;
      },
      delete: function(index) {
        listOfPlaylist.splice(index, 1);
      },
      clear: function() {

      },
      export: function() {

      }
    };
  });
