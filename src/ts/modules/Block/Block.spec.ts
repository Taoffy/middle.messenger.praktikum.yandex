import { assert } from "chai";
import { Block } from "./Block";

class MockClass extends Block<any> {
    constructor(tagName = "div", props: {text: string}) {
        super(tagName, props);
    }

    public render(): DocumentFragment {
        return this._compile("{{text}}", this.props);
    }
}

const mockBlock = new MockClass("div", {text: ""});

describe("Block tests", () => {
    it("Should block rerender", () => {
        mockBlock.setProps({text: "test"});

        assert.equal(mockBlock.getContent().textContent, "test");
    });

    it("Should change props", () => {
        const oldProps = {...mockBlock.props};
        mockBlock.setProps({text: "another string"});
        assert.notEqual(mockBlock.props, oldProps);
    });
});
