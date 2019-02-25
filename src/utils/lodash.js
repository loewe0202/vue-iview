/*
 * @Author: loewe0202
 * @Date:   2019-02-22 18:29:16
 * @Last Modified by:   loewe0202
 * @Last Modified time: 2019-02-25 09:30:48
 */

import * as lodash from "lodash";

export default {
  install(Vue, options) {
    console.log(options);
    Object.defineProperty(Vue.prototype, "_", {
      value: lodash
    });
  }
};
