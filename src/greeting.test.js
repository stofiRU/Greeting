//greeting.test.js
const greeting = require('./greeting.js');

test("returns greeting with custom name", () => { 
    expect(greeting("Bei")).toBe("Hello, Bei!");
});