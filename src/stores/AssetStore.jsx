/**
 * @jsx React.DOM
 */
'use strict';

var API = 'http://damn.csproject.org:8081/assets';
var _assets = {};
var _changeListeners = [];
var _initCalled = false;

function getJSON(url, cb) {
  var req = new XMLHttpRequest();
  req.overrideMimeType("application/json");
  req.onload = function() {
    if (req.status === 404) {
      cb(new Error('not found'));
    } else {
      cb(null, JSON.parse(req.response));
    }
  };
  req.open('GET', url);
  req.setRequestHeader('Accept', 'application/json');
  req.send();
}

var AssetStore = module.exports = {

  init: function () {
    if (_initCalled) {
      return;
    }

    _initCalled = true;

    getJSON(API, function (err, res) {
      res.results.forEach(function (asset) {
        _assets[asset.id] = asset;
      });

      AssetStore.notifyChange();
    });
  },

  getAssets: function () {
    var array = [];

    for (var id in _assets) {
      if (true) {
        array.push(_assets[id]);
      }
    }
    console.log(array);

    return array;
  },

  getAsset: function (id) {
    return _assets[id];
  },

  notifyChange: function () {
    _changeListeners.forEach(function (listener) {
      listener();
    });
  },

  addChangeListener: function (listener) {
    _changeListeners.push(listener);
  },

  removeChangeListener: function (listener) {
    _changeListeners = _changeListeners.filter(function (l) {
      return listener !== l;
    });
  }
};
