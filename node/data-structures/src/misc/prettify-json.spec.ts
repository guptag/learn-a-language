import { prettifyJSON } from './prettify-json';

describe('prettifyJSON', () => {
    it('simple json', () => {
      expect(prettifyJSON('{a:{b:[10,5]}}')).toBe(`
{
  a:
  {
    b:
    [
      10,
      5
    ]
  }
}`
    );
  });

    it('simple json 2', () => {
      expect(prettifyJSON('{a:{b:[10,5],c:20}}')).toBe(`
{
  a:
  {
    b:
    [
      10,
      5
    ],
    c:20
  }
}`
   );
 });

    it('simple json 3', () => {
      expect(prettifyJSON('{a:{b:{d:10,e:20},c:20}}')).toBe(`
{
  a:
  {
    b:
    {
      d:10,
      e:20
    },
    c:20
  }
}`
   );
 });
});
