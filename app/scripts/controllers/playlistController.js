'use strict';

/**
 * @ngdoc function
 * @name angularTopSongsApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the angularTopSongsApp
 */
angular.module('angularTopSongsApp')
  .controller('PlaylistController', function (playlistService, currentPlaylist, $mdDialog) {

    var playlist = this;
    playlist.tracks = currentPlaylist.tracks;

    playlist.deleteTrack = function(index) {
      playlist.tracks.splice(index,1);
    };

    playlist.name = currentPlaylist.name;


    playlist.showPrompt = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.prompt()
        .title('Rename the playlist?')
        .textContent('Bowser is a common name.')
        .placeholder('playlist name')
        .ariaLabel('playlist name')
        .initialValue(playlist.name)
        .targetEvent(ev)
        .ok('ok')
        .cancel('cancel');

      $mdDialog.show(confirm).then(function(result) {
        playlist.name = result;
        currentPlaylist.name = result;
      }, function() {
        //close the modal;
      });
    };
  });
