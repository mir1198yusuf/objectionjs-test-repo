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
    tracker.on.select(({
      sql,
      bindings
    }) => sql.includes('from "abc" where "abc"."id" in ($1)') && bindings.includes(1)).responseOnce([{
      id: 1,
      name: 'bla'
    }]);

    tracker.on.insert(({
      sql,
      bindings
    }) => sql.includes('insert into "abc"') && bindings.includes(1)).responseOnce([{
      id: 1,
      name: 'bla'
    }]);

    tracker.on.update(({
      sql,
      bindings
    }) => sql.includes('update "abc" set "x"') && bindings.includes(1)).responseOnce([{
      id: 1,
      name: 'bla'
    }]);

    await functionOne();

    expect(tracker.history.select).toHaveLength(1);
    expect(tracker.history.insert).toHaveLength(1);
    expect(tracker.history.update).toHaveLength(1);
  });
});
