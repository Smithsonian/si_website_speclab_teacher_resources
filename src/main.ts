import './assets/speclab_teacher_resources_theme.scss';
import { ViteSSG } from 'vite-ssg/single-page';
import App from './App.vue';
import { createBootstrap } from 'bootstrap-vue-next';

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(createBootstrap());
});
