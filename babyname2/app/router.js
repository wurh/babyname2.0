'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/users', controller.user.queryUserList);
  router.get('/api/fetchuser', controller.user.fetchUserName);

};
