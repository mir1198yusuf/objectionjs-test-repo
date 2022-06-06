const functionOne = require("./functions");
const { getTracker } = require("knex-mock-client");

let tracker;

beforeEach(() => {
  tracker = getTracker();
});

afterEach(() => {
  // tracker.reset();
});

describe("List of tests", () => {
  test("Test 1 ", async () => {
    tracker.on
      .any(({ method, sql, bindings }) => {
        console.log(sql, bindings);
        return true;
      })
      .response(() => {
        return [];
      });

    await functionOne();
  });
});
