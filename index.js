'use strict';

var path   = require('path');
var fs     = require('fs');
var esNext = require('broccoli-traceur');

function TraceurPlugin(options) {
  this.name = 'ember-cli-traceur';
  this.ext = 'js';
  this.options = options || {};
}

TraceurPlugin.prototype.toTree = function(tree) {
  return esNext(tree, this.options);
};

function EmberTraceur(project) {
  this.project = project;
  this.name    = 'Ember CLI Traceur';
}

EmberTraceur.prototype.treeFor = function treeFor() {
};

EmberTraceur.prototype.included = function included(app) {
  var registry = app.registry;
  this.app = app;

  var plugin = new TraceurPlugin(this.app.options.esnextOptions);

  registry.add('js', plugin);
};

module.exports = EmberTraceur;
