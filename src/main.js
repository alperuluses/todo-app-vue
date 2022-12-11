import { createApp } from "vue";
import App from "./App.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import PrimeVue from "primevue/config";
import Message from "primevue/message";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
/* import font awesome icon component */
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPhone, faCheck, faTrash, faBan);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("message-use", Message);
app.component("toast-use", Toast);

app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");
