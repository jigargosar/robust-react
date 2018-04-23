type Model = {
  id: string | number,
  name: string,
}

type Collection = {
  items: Array<Model>,
} & Model

export {Model, Collection}
