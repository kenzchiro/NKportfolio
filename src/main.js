
import Vue from 'vue'
import App from './App'
import vueSmoothScroll from 'vue2-smooth-scroll'
import 'vue-blu/dist/css/vue-blu.min.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import VueBlu from 'vue-blu'
import VueAnime from 'vue-animejs';
import Vuetify from 'vuetify'

Vue.use(VueAnime)
Vue.use(Vuetify, {
 iconfont: 'fa'
})
Vue.use(VueBlu)
Vue.use(Vuetify)
Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}
new Vue({
  render: h => h(App),
}).$mount('#app')
