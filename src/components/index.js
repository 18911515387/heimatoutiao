import leftNav from './home/left-nav'
import leftHead from './home/left-head'
export default {
  install: function (Vue) {
    Vue.component('left-nav', leftNav)
    Vue.component('left-head', leftHead)
  }
}
