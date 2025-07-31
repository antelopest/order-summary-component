import {defineConfig} from 'vite';

export default defineConfig({
    base: '/order-summary-component/',
    server: {
        port: 3000,
        host: true
    },
    css: {
        postcss: './postcss.config.js'
    }
});