const {create, env} = require('sanctuary')

const checkTypes = process.env.NODE_ENV !== 'production'

export const S = create({checkTypes, env})

