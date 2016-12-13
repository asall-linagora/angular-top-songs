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
        url: '/playlist',
        templateUrl: 'views/playlist.html',
        controller: 'PlaylistController',
        controllerAs: 'playlist'
      });
  });
