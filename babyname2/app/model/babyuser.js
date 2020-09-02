
'use strict';

module.exports = (app) => {
  const {
    INTEGER,
    DATE,
    STRING,
  } = app.Sequelize;

  const Babyuser = app.model.define('baby_user', {
    name: STRING(128),
    sex: INTEGER,
    score: STRING(128),
    score2: STRING(128),
    created_at: DATE,
    updated_at: DATE,
  });

  return Babyuser;
};
