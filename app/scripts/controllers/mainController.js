'use strict';

/**
 * @ngdoc function
 * @name angularTopSongsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTopSongsApp
 */
angular.module('angularTopSongsApp')
  .controller('MainController', function () {
    var main = this;

    main.defaultPlaylist = {name: 'top 10', tracks: []};

    main.listPlaylists = [main.defaultPlaylist];

  })

.controller('SongListController', function($scope, Spotify, $log) {
  var track = this;

  Spotify.search('Nirvana', 'artist').then(function (data) {
    $log.debug('search', data);
  });

  $scope.$watch('track.input', function(n, o) {
    if(n) {
      Spotify.search(n, ['track']).then(function(data) {
        track.songs = data.tracks.items;
        $log.debug('multiple search', data);
      })
    }
  });

  track.search = function() {

  };

})

.controller('DetailsController', function() {
  var dt = this;

  dt.addNote = function() {

  };

  dt.addImage = function() {

  };
});
