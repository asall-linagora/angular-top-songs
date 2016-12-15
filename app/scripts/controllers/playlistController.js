'use strict';

/**
 * @ngdoc function
 * @name angularTopSongsApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the angularTopSongsApp
 */
angular.module('angularTopSongsApp')
  .controller('PlaylistController', function (playlistService, tracks) {


    var pl = this;
    pl.tracks = tracks;

    pl.deleteTrack = function(index) {
      tracks.splice(index,1);
    };

    // pl.create = playlistService.create();
    //
    // pl.rename = playlistService.rename();
    //
    // pl.delete = playlistService.delete();
    //
    // pl.clear = playlistService.clear();
    //
    // pl.exportJson = playlistService.export();

  });
