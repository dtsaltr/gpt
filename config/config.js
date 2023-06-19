const NodeCache = require('node-cache')

const config = {
    prefix: '',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config