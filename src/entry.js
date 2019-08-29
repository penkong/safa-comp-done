// packaging-sfc-for-npm with webpack this run all rollup
// vue-cli-service build--target lib --name myLib [entry]
import SafaGridView from './components/SafaGridView.vue';
import Sth from './components/Sth.vue';

const Components = {
    Sth,
    SafaGridView,
};

function install(Vue) {
    if (install.installed) return
    install.installed = true;
    for (const comp in Components) {
        Vue.component(comp, Components[comp]);
    }
}

const plugin = {
    install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.vue
}

if (GlobalVue) {
    GlobalVue.use(plugin)
}

Components.install = install;
export default Components;