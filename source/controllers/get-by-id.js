'use strict';
var services = require('../services');
var logger = require('../logger');

module.exports = function(request, response) {
  var id = request.params.id;

  services.getById(id, function(err, res) {
    if (err) {
      response.status(500).send();
    } else {
      response.send(res);
    }
  });
};
