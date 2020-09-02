'use strict';

const { Controller } = require('egg');

const ErrorObjEN = require('../error/en.js');
const ErrorObjCN = require('../error/cn.js');

class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  // 成功方法封装
  success(data) {
    let result = {};
    if (data) result = data;
    this.ctx.body = {
      code: 200,
      msg: 'success',
      data: result,
    };
  }

  // 异常返回封装
  fail(key, language) {
    if (language) {
      const code = ErrorObjCN[key][0];
      const msg = ErrorObjCN[key][1];
      this.ctx.body = {
        code,
        msg,
      };
    } else {
      const code = ErrorObjEN[key][0];
      const msg = ErrorObjEN[key][1];
      this.ctx.body = {
        code,
        msg,
      };
    }
  }

  notFound(msg) {
    const message = msg || 'not found';
    this.ctx.throw(404, message);
  }
}
module.exports = BaseController;
