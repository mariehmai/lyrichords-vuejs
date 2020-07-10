import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas, faSearchMinus, faSearchPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(
  fas,
  faSignOutAlt,
  faSearchMinus,
  faSearchPlus
);

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'faSvg'
  },
  theme: {
    themes: {
      light: {
        primary: '#f7797d',
        secondary: '#f7797d'
      }
    }
  }
});
