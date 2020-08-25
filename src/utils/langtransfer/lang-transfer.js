/**
 * @overview 简繁体切换
 * @author Reborn
 * 导出规则
 * import {} from "@/common/tools/lang-transfer.js";
 */

import langObj from './lang-char'

export default {
  /**
   * @description 转换成繁体
   * @param {String} cc 转换的字符串
   */
  traditionalized: function(cc) {
    var str = ''
    for (var i = 0; i < cc.length; i++) {
      if (langObj.simpPYStr.indexOf(cc.charAt(i)) !== -1) {
        str += langObj.ftPYStr.charAt(langObj.simpPYStr.indexOf(cc.charAt(i)))
      } else {
        str += cc.charAt(i)
      }
    }
    return str
  },
  /**
   * @description 转换成简体
   * @param {String} cc 转换的字符串
   */

  simplized: function(cc) {
    var str = ''
    for (var i = 0; i < cc.length; i++) {
      if (langObj.ftPYStr.indexOf(cc.charAt(i)) !== -1) {
        str += langObj.simpPYStr.charAt(langObj.ftPYStr.indexOf(cc.charAt(i)))
      } else {
        str += cc.charAt(i)
      }
    }
    return str
  }
}
