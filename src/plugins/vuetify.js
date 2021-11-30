import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas, faSearchMinus, faSearchPlus, faSignOutAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(
  fas,
  faSignOutAlt,
  faSearchMinus,
  faSearchPlus,
  faPencilAlt
);

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'faSvg'
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#3A6073',
        secondary: '#3A6073'
      },
      dark: {
        primary: '#whitesmoke',
        secondary: '#272727'
      }
    }
  }
});
