import Reflux from 'reflux'

import GlobalActions from '../actions/GlobalActions'

var NotificationStore = module.exports =  Reflux.createStore({
  listenables: [GlobalActions],

  init: function(){
    this.count = 10;
  },

  onTick: function(){
    console.log('Application ticked');
    this.trigger();
    this.count++;
  },

  getUnreadNotifications: function () {
    return this.count;
  }
});
