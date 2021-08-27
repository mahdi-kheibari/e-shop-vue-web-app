const fs = require('fs')
fs.writeFileSync('./.env', `AUTH0_CLIENT_ID=${process.env.AUTH0_CLIENT_ID}\n`)