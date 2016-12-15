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
        controller: 'SongListController',
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
          tracks: function($stateParams, playlistService) {
            var list = playlistService.getListOfPlaylist();
            console.log('list', playlistService.getListOfPlaylist());
            return list[$stateParams.id].tracks;
          }
        }
      });
  });
