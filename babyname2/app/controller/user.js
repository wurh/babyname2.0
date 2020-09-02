'use strict';

const Controller = require('../core/base_controller');

/**
 * @Controller Account
 */
class UserController extends Controller {

    async queryUserList() {
        const { ctx, app } = this;
        const { Sequelize } = app.config.sequelize;
        try {
            console.log(ctx.model.Babyuser)
            const res = await ctx.model.Babyuser.findAndCountAll({});
            this.success(res);
        } catch (error) {
            this.fail('API_ERROR');
            ctx.logger.error('queryUserList error:', error);
        }
    }

    async fetchUserName() {
        try {
            await this.ctx.service.user.fetchNameScroe()
            this.success({
                "txt":111
            })
        } catch (error) {
            this.fail('API_ERROR');
            this.ctx.logger.error('fetchUserName error:', error);
        }
    }
}

module.exports = UserController;
