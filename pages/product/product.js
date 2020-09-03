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
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    productCount: 1,
    currentTabsIndex: 0
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
  },
  bindPickerChange: function (event) {
    var index = event.detail.value;
    var selectedCount = this.data.countsArray[index];
    this.setData({
      productCount: selectedCount
    })
  },
  onTabsItemTap: function (event) {
    var index = product.getDataSet(event, 'index');
    this.setData({
      currentTabsIndex: index
    })
  }
})