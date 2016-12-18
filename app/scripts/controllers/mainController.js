'use strict';

/**
 * @ngdoc function
 * @name angularTopSongsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTopSongsApp
 */
angular.module('angularTopSongsApp')
  .controller('MainController', function ($scope,playlistService) {
    var main = this;

    main.listPlaylists = playlistService.getListOfPlaylist();

  })

.controller('SearchTrackController', function($scope, Spotify, $log, playlistService, $mdDialog) {
  var track = this;

  track.selectedTracks = [];
  $scope.selectedTracks = track.selectedTracks;

  track.searchType = 'track';

  track.onSearchChange = function() {
    Spotify.search(track.input, [track.searchType]).then(function(data) {
      track.songs = data.tracks.items;
      $log.debug('multiple search', data);
    });
  };

  //playlist

  track.defaultPlaylist = {name: 'top 10', tracks: []};
  $scope.listPlaylists = playlistService.getListOfPlaylist();
  track.listPlaylists = playlistService.getListOfPlaylist();
  $scope.getSelectedPlaylist = function() {
    if ($scope.selectedPlaylist !== undefined) {
      return $scope.selectedPlaylist.name;
    } else {
      return "Please select a playlist";
    }
  };

  track.search = function() {

  };

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/playlistModal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: false
    })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
        track.selectedTracks = [];
        $('tr').removeClass('info');
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.listPlaylists = playlistService.getListOfPlaylist();

    $scope.getSelectedPlaylist = function() {
      if ($scope.selectedPlaylist !== undefined) {
        return $scope.selectedPlaylist.name;
      } else {
        return "Please select a playlist";
      }
    };
    $scope.addTracks = function(answer) {
      playlistService.addTracks($scope.selectedPlaylist, track.selectedTracks);
      $mdDialog.hide(answer);
    };
  }

});
