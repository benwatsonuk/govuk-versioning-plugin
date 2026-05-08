// This file is used by the govuk-versioning-plugin
// Do not delete or modify this file unless you know what you are doing! Read the plugin's ReadMe for more information

export const versions = [
  {
    iteration: 0,
    phase: 'private-beta',
    version: 'v0',
    name: 'Baseline Version',
    notes: 'The initial version of the service, scrape of the production interfaces as of December 2025.',
    createdOn: '2025-12-10T00:00:00.000Z'
  }
]

export const config = {
  phase: 'private-beta',
  version: 'v0',
  itemsToClone: [
    {
      type: 'directory',
      path: 'app/views/${oldPhase}/${oldVersion}/'
    },
    {
      type: 'file',
      path: 'app/routes/${oldPhase}/${oldVersion}.js'
    }
  ],
  itemsToUpdate: [
    {
      path: 'app/routes.js',
      type: 'add',
      find: "router.use('/', ${oldVersion}Routes)",
      value: "router.use('/', ${newVersion}Routes)"
    },
    {
      path: 'app/routes/${newPhase}/${newVersion}.js',
      type: 'replace',
      find: "const verNum = ${oldVersion.replace('v', '')}",
      value: "const verNum = ${newVersion.replace('v', '')}"
    }
  ]
}
