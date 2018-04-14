const {create, env} = require('sanctuary')

const checkTypes = process.env.NODE_ENV !== 'production'

export default create({checkTypes, env})
