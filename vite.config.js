import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'ru/*', dest: 'ru' },
        { src: 'en/*', dest: 'en' },
        { src: 'kz/*', dest: 'kz' }
      ]
    })
  ]
});
