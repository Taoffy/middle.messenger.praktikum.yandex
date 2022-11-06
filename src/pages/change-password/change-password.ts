import { Block } from "../../ts/modules/Block/Block";

import { changePasswordTemplate } from "./change-password.template";
import { TChangePasswordPage } from "./types";

import { formSubmit } from "../../ts/components/form-submit";

export class ChangePasswordPage extends Block<TChangePasswordPage> {
      constructor(tagName = "div", props: TChangePasswordPage) {
          super(tagName, props);
      }
      
      render(): DocumentFragment {
          return this._compile(changePasswordTemplate, this.props);
      }

      protected _addEventListeners(): void {
          this._element.querySelector('form')?.addEventListener('submit', formSubmit);

          super._addEventListeners();
      }
}
