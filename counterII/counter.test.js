const createCounter = require('./counter.js');

test('increment should increase the counter', () => {
    const counter = createCounter(5);
    counter.increment();
    expect(counter.value()).toBe(6);
});
  
test('decrement should decrease the counter', () => {
    const counter = createCounter(5);
    counter.decrement();
    expect(counter.value()).toBe(4);
});
  
test('reset should set the counter to the original value', () => {
    const counter = createCounter(5);
    counter.increment();
    counter.reset();
    expect(counter.value()).toBe(5);
});
