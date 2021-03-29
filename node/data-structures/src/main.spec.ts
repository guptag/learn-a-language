import { greeter } from './main';

describe('greeter function', () => {
  // Read more about fake timers: http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();

  const name: string = 'John';

  let hello: string;

  // Act before assertions
  beforeAll(async () => {
    const p: Promise<string> = greeter(name);
    jest.runOnlyPendingTimers();
    hello = await p;
  });

  // Assert greeter result
  it('greets a user with `Hello, {name}` message', () => {
    expect(hello).toBe(`Hello, ${name}`);
  });
});
