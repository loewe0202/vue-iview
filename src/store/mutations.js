/*
 * @Author: loewe0202
 * @Date:   2019-02-22 16:03:16
 * @Last Modified by:   loewe0202
 * @Last Modified time: 2019-03-05 10:52:49
 */

import * as type from "./mutation-types";

const mutations = {
  [type.SET_MPVUEINFO](state, mpvueInfo) {
    state.mpvueInfo = mpvueInfo;
  },
  [type.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo;
  }
};

export default mutations;
