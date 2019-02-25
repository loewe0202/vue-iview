/*
 * @Author: loewe0202
 * @Date:   2019-02-22 14:54:18
 * @Last Modified by:   loewe0202
 * @Last Modified time: 2019-02-22 18:28:42
 */

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: true // 自动打开浏览器
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("router", resolve("src/router"))
      .set("store", resolve("src/store"))
      .set("views", resolve("src/views"))
      .set("utils", resolve("src/utils"))
  }
};
