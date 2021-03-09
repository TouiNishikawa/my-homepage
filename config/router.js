"use strict";

module.exports = function(){
  const router = require('koa-router')();

  router
    .get('/', function* (){
      yield this.render('./index')
    })
    .get('/evening', function* (){
      this.body = 'good evening';
    });

  return router.routes();
}
