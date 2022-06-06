const functionOne = require('./functions');
const { getTracker } = require('knex-mock-client');


describe('List of tests', () => {
  let tracker;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    // tracker.reset();
  });

  test('Test 1 ', async () => {
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
