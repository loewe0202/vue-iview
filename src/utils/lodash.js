/*
 * @Author: loewe0202
 * @Date:   2019-02-22 18:29:16
 * @Last Modified by:   loewe0202
 * @Last Modified time: 2019-03-05 11:22:43
 */

import * as lodash from "lodash";

export default {
  install(Vue, options) {
    console.log("lodash: ", options);
    Object.defineProperty(Vue.prototype, "_", {
      value: lodash
    });
  }
};
