/**
 * @author Alpha Sall
 */

'use strict';

angular.module('angularTopSongsApp')
  .directive('topSongHeader', topSongHeader);

function topSongHeader() {
  return {
    restrict: 'E',
    templateUrl: 'views/header.html'
  };
}
