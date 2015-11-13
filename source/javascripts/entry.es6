var React = require('react');
var ReactDom = require('react-dom')
// var AppRootComponent = require('./components/app_root_component');

var mountnode = document.getElementById('app');


var run = function(){
  // ReactDom.render(
  //   <AppRootComponent /> , mountnode
  // );

};


if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
