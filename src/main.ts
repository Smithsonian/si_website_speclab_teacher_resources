import './assets/speclab_teacher_resources_theme.scss';
import { ViteSSG } from 'vite-ssg/single-page';
import App from './App.vue';
import { createBootstrap } from 'bootstrap-vue-next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronUp, faChevronDown);

export const createApp = ViteSSG(App, ({ app }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
  app.use(createBootstrap());
});
