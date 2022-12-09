/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '广东',
  CITY: '惠州',

  USERS: [
   {"APP_ID":"wx97b4344a3b21559e","APP_SECRET":"f7e7778b2da65534265d75925a3c011f","IS_SHOW_COLOR":true,"CALLBACK_TEMPLATE_ID":"","CALLBACK_USERS":[{"name":"自己","id":""}],"USERS":[{"name":"小宝贝","id":"oyGxd5oTWdvJeeL7i4CYY8CcG43k","useTemplateId":"1hiflJl5tQau01YoIhfyL5ejDmXpplAlXA7dmR-CBKE","province":"河南","city":"开封","horoscopeDate":"07-10","horoscopeDateType":"今日","openUrl":"是","festivals":[{"type":"*生日","name":"距离宝贝生日","date":"07-10","year":"1998"},{"type":"节日","name":"我们已经相爱","date":"11-01","year":"2020"},{"type":"*生日","name":"距哥哥生日","date":"11-26","year":"1998"}],"customizedDateList":[]},{"name":"我的","id":"oyGxd5nfwoXdJi2nt-lTqqCMOzBw","useTemplateId":"1hiflJl5tQau01YoIhfyL5ejDmXpplAlXA7dmR-CBKE","province":"浙江","city":"湖州","horoscopeDate":"11-26","horoscopeDateType":"今日","openUrl":"看","festivals":[{"type":"节日","name":"距离我们相爱","date":"11-01","year":"2020"},{"type":"*生日","name":"距离宝贝生日","date":"07-10","year":"1998"},{"type":"*生日","name":"距离哥哥生日","date":"11-26","year":"1998"},{"type":"节日","name":"距离我们相爱","date":"10-01","year":"2020"}],"customizedDateList":[]}],"SWITCH":{"weather":true,"holidaytts":true,"CIBA":true,"oneTalk":false,"earthyLoveWords":true,"momentCopyrighting":true,"poisonChickenSoup":false,"poetry":false,"horoscope":false,"birthdayMessage":true}}
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

