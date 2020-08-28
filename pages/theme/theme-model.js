import {
  Base
} from '../../utils/base';
class Theme extends Base {
  constructor() {
    super();
  }
  getProductsData(id,callback){
    var params = {
      url:'theme/'+id,
      sCallback:function(data){
        callback && callback(data);
      }
    };
    this.request(params)
  }
}
export {Theme}