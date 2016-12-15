/**
 * @author Alpha Sall
 */

'use strict';

angular.module('angularTopSongsApp')
.directive('selectTrack', function($log) {
  return {
    restrict: 'A',
    scope: {
      selectedTracks: '=',
      currentTrack: '='
    },
    link: function(scope, element) {
      element.bind('click', function() {
        element.toggleClass('info');
        $log.debug('selected', scope.selectedTracks);
        $log.debug('current', scope.currentTrack);
        var isSelected = element.hasClass('info');

        if(isSelected) {
          $log.debug('selecting a track :', scope.currentTrack.name);
          scope.$apply(function() {
            scope.selectedTracks.push(scope.currentTrack);
          });
          $log.debug('length of selected track', scope.selectedTracks.length);
        } else {
          $log.debug('unselect a track : ', scope.currentTrack.name );
          var index = scope.selectedTracks.indexOf(scope.currentTrack);
          $log.debug('current', scope.currentTrack);
          scope.$apply(function() {
            scope.selectedTracks.splice(index, 1);
          });
          $log.debug('length of selected track', scope.selectedTracks.length);

        }
      });
    }
  };

});
