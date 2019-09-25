import leftNav from './home/left-nav'
import leftHead from './home/left-head'
import breadCrumb from './common/bread-crumb'
export default {
  install: function (Vue) {
    Vue.component('left-nav', leftNav)
    Vue.component('left-head', leftHead)
    Vue.component('bread-crumb', breadCrumb)
  }
}
