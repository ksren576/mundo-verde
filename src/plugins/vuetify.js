import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.green.darken3,
                secondary: colors.green.lighten1,
                accent: colors.amber.lighten1,
            },
        },
    },
})