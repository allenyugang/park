import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import './common/app.css'
// import Vconsole from 'vconsole'

Vue.use(Vant);
Vue.config.productionTip = false
window.rootFont = (function () {
  var doc = document
  var win = window
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = doc.body.clientWidth
    // clientWidth = $(window).width()
    if (!clientWidth) return
    docEl.style.fontSize = 40 * (clientWidth / 750) + 'px'
    if (docEl.style.fontSize) {
      doc.getElementById('app').style.display = 'block'
    } else {
      doc.getElementById('app').style.display = 'block'
    }
  }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}())
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
