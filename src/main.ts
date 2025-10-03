import './assets/speclab_teacher_resources_theme.scss';
import 'video.js/dist/video-js.css';
import { ViteSSG } from 'vite-ssg/single-page';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import { useAuthStore } from './store/auth';

library.add(faChevronUp, faChevronDown);

export const createApp = ViteSSG(App, ({ app, initialState }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
  const pinia = createPinia();
  app.use(pinia);

  if (import.meta.env.SSR) {
    initialState.pinia = pinia.state.value;
  } else {
    pinia.state.value = initialState.pinia || {};
    const auth = useAuthStore(pinia);
    // Don't wait for response, just fire it off
    auth.fetchLoggedIn().catch((error) => console.error(error));
  }
});
