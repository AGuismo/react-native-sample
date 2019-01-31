import { findSequenceTerm } from './Math'

it('should return the correct value X = 1 (3)', () => {
  const res = findSequenceTerm(1)
  expect(res).toEqual(3)
})

it('should return the correct value for X = 2 (5)', () => {
  const res = findSequenceTerm(2)
  expect(res).toEqual(5)
})

it('should return empty string for X = NaN', () => {
  const res = findSequenceTerm('qwerty')
  expect(res).toEqual('')
})