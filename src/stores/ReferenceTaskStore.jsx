/**
 * @jsx React.DOM
 */
'use strict';

var Reflux = require('reflux');


var API = 'http://localhost:8000/referencetasks';
var _tasks = {};
var _changeListeners = [];
var _initCalled = false;

function getJSON(url, cb) {
  var req = new XMLHttpRequest();
  req.overrideMimeType('application/json');
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

var ReferenceTaskStore = module.exports = Reflux.createStore({

  init: function () {
    if (_initCalled) {
      return;
    }

    _initCalled = true;

    getJSON(API, function (err, res) {
      res.results.forEach(function (task) {
        _tasks[task.id] = task;
      });

      ReferenceTaskStore.trigger(ReferenceTaskStore.getAll());
    });
  },

  getAll: function () {
    var array = [];

    for (var id in _tasks) {
      if (true) {
        array.push(_tasks[id]);
      }
    }
    console.log(array);

    return array;
  },

  get: function (id) {
    return _tasks[id];
  }
});
