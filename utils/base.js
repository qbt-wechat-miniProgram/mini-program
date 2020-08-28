const {
  Config
} = require("./config");

class Base {
  constructor() {
    this.baseRequestUrl = Config.resUrl;
  }

  request(params) {
    var url = this.baseRequestUrl + params.url;
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: function (res) {
        // if(params.sCallback){
        //   params.sCallback(res);
        // }
        params.sCallback && params.sCallback(res.data);
      },
      fail: function (err) {
        console.log(err);
      }
    })
  }
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  };
}
export {
  Base
}