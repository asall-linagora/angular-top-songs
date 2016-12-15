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

.controller('SongListController', function($scope, Spotify, $log, playlistService, $mdDialog) {
  var track = this;

  track.selectedTracks = [];
  $scope.selectedTracks = track.selectedTracks;

  Spotify.search('Nirvana', 'artist').then(function (data) {
    $log.debug('search', data);
  });

  track.searchType = 'track';

  $scope.$watch('track.input', function(n) {
    if(n) {
      Spotify.search(n, [track.searchType]).then(function(data) {
        track.songs = data.tracks.items;
        $log.debug('multiple search', data);
      });
    }
  });

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
  // $scope.addTracks = function() {
  //   playlistService.addTracks($scope.selectedPlaylist, track.selectedTracks);
  // };

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
      console.log('test', $scope.test);
      playlistService.addTracks($scope.selectedPlaylist, track.selectedTracks);
      $mdDialog.hide(answer);
    };
  }

})

.controller('DetailsController', function() {
  var dt = this;

  dt.addNote = function() {

  };

  dt.addImage = function() {

  };
})

  .controller('AppCtrl', function($scope, $mdDialog, playlistService) {



/*
    $scope.items = [1,2,3,4,5];
    $scope.selected = [];

    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };

    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };*/


 /*   $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: 'AppCtrl',
        templateUrl: 'views/playlistModal.html',
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false
      })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };*/
  });
