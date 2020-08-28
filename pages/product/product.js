// pages/product/product.js
import {
  Product
} from 'product-model.js';
var product = new Product();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  onLoad: function (option) {
    var id = option.id;
    this.data.id = id;
    this._loadData();
  },

  _loadData: function () {
    product.getDetailInfo(this.data.id, (data) => {
      this.setData({
        "product": data
      })
    })
  }
})