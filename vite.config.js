import {defineConfig} from 'vite';

export default defineConfig({
    base: '/3-column-preview-card-component',
    server: {
        port: 3000,
        host: true
    },
    css: {
        postcss: './postcss.config.js'
    }
});