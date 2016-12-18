/**
 * @author Alpha Sall
 */

'use strict';

angular.module('angularTopSongsApp')
  .directive('topSongSidebar', topSongSidebar);

function topSongSidebar() {
  return {
    restrict: 'E',
    templateUrl: 'views/leftSidebar.html',
    controller: function ($scope, $mdDialog, playlistService) {
      $scope.initial = "";
      $scope.createPlaylist = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.prompt()
          .title('Add a new playlist')
          .placeholder('new playlist name')
          .ariaLabel('playlist name')
          .initialValue($scope.initial)
          .targetEvent(ev)
          .ok('ok')
          .cancel('cancel');

        $mdDialog.show(confirm).then(function(result) {
          $scope.initial = result;
          playlistService.create($scope.initial);
        }, function() {
          //close the modal;
        });
      };
    }
  };
}
