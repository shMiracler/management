declare module "*.vue" {
    import type { DefineComponent } from 'vue'
    const vueComponent: DefineComponent<{}, {}, any>
    export default vueComponent
};

declare module 'vanta/src/vanta.birds.js';
