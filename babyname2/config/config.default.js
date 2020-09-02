/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598875736578_8981';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

    /** prod **/
    config.sequelize = {
      dialect: 'mysql',
      host: 'localhost',
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
      username: 'root',
      password: '12345678',
      port: 3306,
      database: 'babyname',
      define: {
        underscored: true, // 注意需要加上这个，
        // egg-sequelize只是简单的使用Object.assign对配置和默认配置做了merge, 如果不加这个 update_at会被转变成 updateAt故报错
        // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
        // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
        freezeTableName: true,
      },
    };

  return {
    ...config,
    ...userConfig,
  };
};
