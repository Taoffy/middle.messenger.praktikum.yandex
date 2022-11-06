import { Block } from "../../ts/modules/Block/Block";

import "./change-password.css";

import { changePasswordTemplate } from "./change-password.template";
import { TChangePasswordPage } from "./types";

export class ChangePasswordPage extends Block<TChangePasswordPage> {
      constructor(tagName = "div", props: TChangePasswordPage) {
          super(tagName, props);
      }
      
      render(): DocumentFragment {
          return this._compile(changePasswordTemplate, this.props);
      }
}
