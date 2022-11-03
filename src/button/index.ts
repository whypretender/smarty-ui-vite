import SButton from "./Button";
import { App } from "vue";

export { SButton };

export default {
  install(app: App) {
    app.component(SButton.name, SButton);
  }
};
