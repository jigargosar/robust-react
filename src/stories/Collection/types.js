type Model = {
  id: string | number,
  name: string,
}

type Collection = {
  items: Model,
} & Model

export {Model, Collection}
