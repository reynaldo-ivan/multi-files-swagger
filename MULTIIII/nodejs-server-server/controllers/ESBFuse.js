'use strict';

var url = require('url');

var ESBFuse = require('./ESBFuseService');

module.exports.bEOConsultaDatosBasicosPOST = function bEOConsultaDatosBasicosPOST (req, res, next) {
  ESBFuse.bEOConsultaDatosBasicosPOST(req.swagger.params, res, next);
};

module.exports.bEOConsultaServiciosContratadosPOST = function bEOConsultaServiciosContratadosPOST (req, res, next) {
  ESBFuse.bEOConsultaServiciosContratadosPOST(req.swagger.params, res, next);
};
