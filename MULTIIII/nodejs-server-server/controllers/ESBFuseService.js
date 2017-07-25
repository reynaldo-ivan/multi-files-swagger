'use strict';

exports.bEOConsultaDatosBasicosPOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operacion /consultaDatosBasicos del servicio /cliente requerida para la integración de Multivanet con T24
   *
   * consultaDatosBasicos, ConsultaDatosBasicos_1 Consumidor  que dibuja encabezado con datos de cliente
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "listaDirecciones" : [ {
    "tipoDireccion" : "String",
    "estado" : "String",
    "ciudad" : "String",
    "direccion" : "String",
    "poblacion" : "String",
    "cp" : "String"
  } ],
  "listaEmails" : [ {
    "mail" : "String",
    "tipoEmail" : "String",
    "activo" : false
  } ],
  "tipoPersona" : "String",
  "estatus" : "String",
  "responseError" : "String",
  "sucursal" : "String",
  "listaTelefonos" : [ {
    "tipoTelefono" : "String",
    "cvePais" : "integer",
    "codArea" : "integer",
    "telefono" : "String"
  } ],
  "vip" : "String",
  "responseStatus" : "long",
  "numCliente" : "Long",
  "nombre" : "String",
  "rfc" : "String"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.bEOConsultaServiciosContratadosPOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operacion /consultaServiciosContratados del servicio /cliente requerida para la integración de Multivanet con T24
   *
   * consultaServiciosContratados ConsultaServiciosContratados_1 Devuelve un listado de los servicios existentes para personas morales, indicando cuales de ellos han sido contratados por la persona proporcionada
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "listaServicios" : [ {
    "contratado" : false,
    "nombre" : "String"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

