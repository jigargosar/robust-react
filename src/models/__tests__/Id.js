import {IdGenerator} from '../Id'

describe('IdGenerator', () => {
  it('should return nextId', () => {
    const idGen = IdGenerator(id => `test(${id})`)
    expect(idGen.nextId()).toEqual('test(1)')
  })
})
