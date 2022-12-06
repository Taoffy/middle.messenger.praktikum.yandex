import { Block } from "../modules/Block/Block";
import { Indexed } from "../../types/common-types";

import { store, STORE_EVENTS } from "../../store/Store";
import { isEqual } from "../utils/is-equal";

export function connect(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
    return class extends Component<Indexed> {
        constructor(tagName: string, props: Indexed) {
            let state = mapStateToProps(store.getState());
            super(tagName, {...props, ...state});

            store.on(STORE_EVENTS.Updated, () => {
                const newState = mapStateToProps(store.getState());
                
                if (!isEqual(state, newState)) {
                    this.setProps({...newState});
                }

                state = newState;
            });
        }
    } 
}
