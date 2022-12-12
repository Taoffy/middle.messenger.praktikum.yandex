const { JSDOM } = require("jsdom");

const register = require("@babel/register").default;

register({ extensions: [".ts", ".tsx", ".js", ".jsx"] });

const mockDom = new JSDOM('<div id="root"><div>', { url: "http://localhost" });
global.window = mockDom.window;
global.document = mockDom.window.document;
