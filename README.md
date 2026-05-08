# govuk-versioning-plugin
A plugin for GOVUK Prototype Kit that allows authors to programmatically create new versions (iterations) within the prototype based upon a specified series of source directories.

You'll be able to duplicate specified files and directories and update necessary parts of them e.g directory names, file names, variables or strings within the files themselves.

You'll be able to do this all from the terminal.

## Install the plugin: 

`npm install --save @benwatsonuk/govuk-versioning-plugin`

## Create a 'versions.js' file

You will need to set up a file in the root directory named `versions.js`, this will contain the different versions within the prototype (and be automatically updated in future) and also contain the configuration details for the plugin. 

The plugin itself will validate these before executing the update, but it is important that the settings are correct

See the types file to see what is required... https://github.com/benwatsonuk/govuk-versioning-plugin/blob/main/src/types.ts

Or take a look at the sample file and copy and paste this... https://github.com/benwatsonuk/govuk-versioning-plugin/blob/main/stest/example-versions.js 

### Versions array

This is an array of current versions, each version must have the following structure:

```
export type Version = {
  iteration: number;
  version: string;
  phase?: string;
  name?: string;
  notes?: string | null;
  createdOn: string;
}
```

### Config object

This in an object with the following structure:

```
export type Config = {
  phase?: string;
  version: string;
  itemsToClone: ItemToClone[];
  itemsToUpdate?: ItemToUpdate[];
}
```

For reference, here are the objects for the `itemsToClone` and `itemsToUpdate` arrays:

```
export type ItemToClone = {
  type: "file" | "directory";
  path: string;
}

export type ItemToUpdate = {
  path: string;
  find: string;
  type: "add" | "replace";
  value: string;
}
```

The `phase` and `version` are the current/most recent versions and phase and this is automatically updated by the plugin after setup.

`itemsToClone` specify the files and directories that the plugin will duplicate for the next version.

`itemsToUpdate` specify the items that need to be modified and details the rules that are to be applied. Target items use `find` to identify a point in a file and use the `type` to identify whether to replace the string or add the `value` after the target.

Here is an example of the full file (version.js):

```
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
```

## Add the script to execute the plugin

You will need to a script to your project, which you will call in the next steps.

See https://github.com/benwatsonuk/govuk-versioning-plugin/blob/main/test/example-version-plugin.js for the file to copy.

Place this somewhere that suits you, for example `scripts/version-plugin.js` and make sure that you are correctly referencing your `versions.js` file.

Here is what the example file uses:

```
const versionPlugin = require('@benwatsonuk/govuk-versioning-plugin').default
const { config, versions } = require('../versions')

async function main () {
  const tool = versionPlugin(config, versions)

  await tool.run()
}

main().catch(console.error)
```


## Add a command to package.json to run the script

Add something similar to the following to your `package.json`, what you call the script is up to you and you must reference the correct path to the script in your project.

`"scripts": {
    "plugin:version": "node scripts/version-plugin.js"
}`

## Run the script

Then you run:

`npm run plugin:version` 

Or whatever you have named the script.

The plugin will validate the `versions.js` file before anything is executed.

Then you will be prompted to enter a number of values, the plugin will make suggestions which you can except or alter.

That's it... once it is running, it should save you some time when bumping prototype versions.


# Using the components to dynamicallty display an index

You can use a provided component to display the versions for example on the protoype index page. The index component has three flavours, `list`, `table` and `accordion`.

The `hrefPrefix` informs the component of the path to use for links.

`versions` must provide the verions object from your `versions.js` file.

`type` is a list by default, but can be configured `accordion` and `table` also.

You can use it as follows:

```
    {% from "govuk-versioning-plugin/components/version-list/macro.njk" import versionList %}

    {{ versionList({
        type: 'table',
        hrefPrefix: '/${phase}/${version}/',
        versions: versions.versions
    }) }}
```