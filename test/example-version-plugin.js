const versionPlugin = require('@benwatsonuk/govuk-versioning-plugin').default
const { config, versions } = require('../versions')

async function main () {
  const tool = versionPlugin(config, versions)

  await tool.run()
}

main().catch(console.error)
