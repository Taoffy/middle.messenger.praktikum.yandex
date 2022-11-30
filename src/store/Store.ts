import { EventBus } from "../ts/modules/EventBus/EventBus";

import { Indexed } from "../types/common-types";
import { STORE_EVENTS } from "./types";

import { set } from "../ts/utils/set";

import { initialState } from "./initial-state";

class Store extends EventBus {
    private state: Indexed = {};

    constructor(initialState: Indexed) {
        super();

        this.state = initialState;
    }

    public getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        set(this.state, path, value);
        this.emit(STORE_EVENTS.Updated);
    }
}

const store = new Store(initialState);

export { store, STORE_EVENTS };
