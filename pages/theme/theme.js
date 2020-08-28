// pages/theme/theme.js
import {
  Theme
} from 'theme-model.js';
var theme = new Theme;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (option) {
    var id = option.id;
    var name = option.name;
    this.data.id = id;
    this.data.name = name;
    
    this._loadData();
  },
  onReady:function(){
    wx.setNavigationBarTitle({
      title: this.data.name,
    })
  },
  _loadData: function () {
    theme.getProductsData(this.data.id, (data) => {
      this.setData({
        themeInfo: data
      })
    })
  }
})