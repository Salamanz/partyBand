var app = angular.module('partyBand', ['ui.bootstrap', 'ui.router']);

// Draws from UI Router example http://plnkr.co/edit/u18KQc?p=preview
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })
    .state('links', {
      url: '/links',
      templateUrl: 'templates/links.html',
      controller: 'LinksCtrl'
    })
    .state('shows', {
      url: '/shows',
      templateUrl: 'templates/shows.html',
      controller: 'ShowsCtrl'
    });
});

angular.module('partyBand').controller('LinksCtrl', function ($scope) {
  $scope.links = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/results?search_query=the+party+band+lowell'
    },
    { 
      name: 'FaceBook',
      url: 'https://www.facebook.com/RiverhawkPartyBand'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/partybaaand'
    },
    {
      name: 'Nice Bass Productions',
      url: 'http://www.nicebassproductions.com/party-band/'
    }
  ];
});

angular.module('partyBand').controller('ShowsCtrl', function ($scope) {
  $scope.shows = [
    {
      name: 'Madsummer Meltdown',
      date: 'June 18 2014'
    },
    {
      name: 'Trombone Shorty',
      date: 'July 10 2014'
    }
  ];
});
