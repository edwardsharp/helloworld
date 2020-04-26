const express = require("express")
const app = express()

const APP_VERSION = `v${
  process.env.npm_package_version || require('../package.json').version
}`

const hello = `
(•_•) 
( •_•)>⌐■-■ 
(⌐■_■) 

hello world! 
${process.env.HELLO}
${APP_VERSION}
`

app.get("/", (request, response) => {
  response.send(hello)
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`HELLOWORLD ${APP_VERSION} listening on port ${listener.address().port}`)
})
