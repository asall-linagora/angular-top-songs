/**
 * @author Alpha Sall
 */

'use strict';

angular.module('angularTopSongsApp')
  .directive('topSongSidebar', topSongSidebar);

function topSongSidebar() {
  return {
    restrict: 'E',
    templateUrl: 'views/leftSidebar.html'
  }
}
