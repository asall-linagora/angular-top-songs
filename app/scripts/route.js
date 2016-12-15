/**
 * @author Alpha Sall
 */

'use strict';

angular.module('angularTopSongsApp')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'SearchTrackController',
        controllerAs: 'track'
      })
      .state('playlist', {
        url: '/playlist/:id',
        params: {
          id: null
        },
        templateUrl: 'views/playlist.html',
        controller: 'PlaylistController',
        controllerAs: 'playlist',
        resolve: {
          currentPlaylist: function($stateParams, playlistService) {
            var list = playlistService.getListOfPlaylist();
            return list[$stateParams.id];
          }
        }
      })
      .state('playlist.detail', {
        url: '/detail/:trackId',
        params: {
          trackId: null
        },
        templateUrl: 'views/trackDetails.html',
        controller: 'TrackDetailController',
        controllerAs: 'tdetail',
        resolve: {
          currentTrack: function(Spotify, $stateParams) {
            return Spotify.getTrack($stateParams.trackId);
          }
        }
      });
  });
