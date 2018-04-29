import {IdGenerator} from '../Id'

describe('IdGenerator', () => {
  it('should return nextId', () => {
    const idGen = IdGenerator('Test')
    expect(idGen.nextId()).toEqual('Test-Id:1')
  })
})
