import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: true,
  },
  themes: {
    dark: {
      primary: colors.grey.darken3,
      secondary: colors.yellow.darken1,
      accent: colors.grey.lighten2,
      error: colors.red.accent3,
      },
    light: {
      primary: colors.purple,
      secondary: colors.grey.darken1,
      accent: colors.shades.black,
      error: colors.red.accent3,
    },
  },
});