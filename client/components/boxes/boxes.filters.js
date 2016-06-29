'use strict';

/* Filters */

var app = angular.module('myApp.boxes.filters', []);

app.filter('toString', ['gettextCatalog', function(gettextCatalog) {
  return function(input) {
    if (input === '' || input === undefined || input === null || !input.length) {
      return gettextCatalog.getString('Not available');
    } else {
      return input.toString();
    }
  };
}]);

app.filter('bandSelection', ['gettextCatalog', function(gettextCatalog) {
  return function(input) {
    if (input === '' || input === undefined || input === null) {
      return gettextCatalog.getString('All available bands');
    } else if ( input === 'two' ) {
      return gettextCatalog.getString('2.4Ghz only');
    } else if ( input === 'five' ) {
      return gettextCatalog.getString('5Ghz only');
    }
  };
}]);

app.filter('filterUptime', ['gettextCatalog', function(gettextCatalog) {
  return function(input) {
    if (input === '' || input === undefined || input === null) {
      return gettextCatalog.getString('N/A');
    } else {
      return (input.split(',')[0].split('up')[1]);
    }
  };
}]);

app.filter('ssidFilter', function() {
  return function(ssids) {
    if (ssids === undefined || ssids === null || ssids === '') {
      return 'N/A';
    } else {
      var formatted = ssids.join(',');
      return formatted;
    }
  };
});

app.filter('kbps', function() {
  return function(bytes) {
    if (bytes === undefined || bytes === null || bytes === '') {
      return 0;
    } else {
      return (bytes / 1024).toFixed(1);
    }
  };
});

app.filter('deviceStatus',['gettextCatalog', function(gettextCatalog) {
  return function(state) {
    if (state === '' || state === undefined || state === null || !state.length) {
      return gettextCatalog.getString('State Unavailable');
    } else {
      switch(state) {
        case 'online':
          return gettextCatalog.getString('Device online');
          break;
        case 'processing':
          return gettextCatalog.getString('Waiting for configs');
          break;
        case 'offline':
          return gettextCatalog.getString('Device offline');
          break;
        case 'upgrading':
          return gettextCatalog.getString('Device upgrading');
          break;
        case 'new':
          return gettextCatalog.getString('New device');
          break;
        default:
          // default
      }}
  };
}]);

app.filter('statusColour', function() {
  return function(state) {
    if (state === '' || state === undefined || state === null || !state.length) {
      return '#607D8B';
    } else {
      switch(state) {
        case 'online':
          return '#97bf0d';
          break;
        case 'rebooting':
          return 'Device rebooting';
        case 'offline':
          return '#d8462e';
          break;
        case 'splash_only':
          return '#009688';
        default:
          return '#6c7479';
          // default

      }}
  };
});

