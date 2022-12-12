import { expect } from "chai";
import { HTTPTransport } from "./HTTPTransport";

describe("HTTPTransport test", () => {
    it("Should return good response", async () => {
        const httpInstance = new HTTPTransport("https://jsonplaceholder.typicode.com/");

        const response = await httpInstance.get('posts', {});

        expect(response).to.have.property("status").and.equal(200);
        expect(response).to.have.property("response");
    });
});
