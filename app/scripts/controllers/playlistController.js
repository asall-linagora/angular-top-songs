'use strict';

/**
 * @ngdoc function
 * @name angularTopSongsApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the angularTopSongsApp
 */
angular.module('angularTopSongsApp')
  .controller('PlaylistController', function (playlistService) {

    var pl = this;

    pl.create = playlistService.create();

    pl.rename = playlistService.rename();

    pl.delete = playlistService.delete();

    pl.clear = playlistService.clear();

    pl.exportJson = playlistService.export();

  });
