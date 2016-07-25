
var expect = require('chai').expect;

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("Run tests", function () {
    beforeEach(function () {
      console.log("------------------------ Begin tests ------------------------");
    });
    importTest("Python Tests", './repl-test-python');
    // importTest("Java Tests", './repl-test-java');
    after(function () {
      console.log("------------------------- End tests -------------------------");
    });
});