'use strict';

const { Service } = require('egg');
const request = require('superagent')
const cheerio = require('cheerio')
const PURL = 'https://m.threetong.com/ceming/baziceming/xingmingceshi.php'
const boy = require('../datas/boydata')

/**
 * UserbaseService Object
 */
class UserService extends Service {

    async fetchNameScroe() {
        try {
            let isClose = true
            let num = 0;
            while (isClose) {
                const name = await this.getName();
                const scroe = await this.fetchName('吴', name)
                if (parseInt(scroe) > 99) {
                    console.log('吴' + name)
                    num++;
                }
                if(num>19){
                    isClose = false;
                }
            }
        } catch (error) {

        }
    }

    // 获取姓名分数服务方法
    async fetchName(name, name2,) {
        try {
            const res = await request
                .post(PURL)
                .type('form')
                .send({
                    "name": name || '吴'
                })
                .send({
                    "name2": name2
                })
                .send({
                    "sex": 1
                })
                .send({
                    "year": 2020
                })
                .send({
                    "day": 26
                })
                .send({
                    "hour": '12-午时'
                })
                .send({
                    "minute": 46
                })
                .send({
                    "zty": 0
                })
            const txt = res.text;
            const $ = cheerio.load(txt)
            const scroe = $($('.sm_pingfen').find('span')[0]).html().split(':')[1];
            return scroe
        } catch (error) {
            this.fail('API_ERROR');
            this.ctx.logger.error('fetchName error:', error);
        }
    }

    async getName() {
        try {
            var indexNum = Math.floor(Math.random() * boy.wood.length);
            var indexNum2 = Math.floor(Math.random() * boy.fire.length);
            var mingzi = boy.wood.substring(indexNum - 1, indexNum) + boy.fire.substring(indexNum2 - 1, indexNum2);
            return mingzi
        } catch (error) {

        }
    }

}

module.exports = UserService;
