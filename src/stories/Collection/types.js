// @flow
/* eslint-disable valid-typeof,no-negated-condition */

type Model = {|
  id: string | number,
  name: string,
|}

type Collection = {|
  ...Model,
  items: Array<Model>,
|}

type CollectionOrModel = Collection | Model

// noinspection FunctionWithMultipleReturnPointsJS
const displayName = (val: CollectionOrModel): string => {
  // noinspection NegatedIfStatementJS
  if (!val.items) {
    return val.name
  } else {
    return `${val.name} (${val.items.length})`
  }
}
export type {Collection, Model, CollectionOrModel}
export {displayName}
