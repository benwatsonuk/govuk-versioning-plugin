import Ajv from "ajv"
import schema from "./schema.json"
import { Config, Versions, VersionToCreate } from "./types"

const ajv = new Ajv({ allErrors: true, strict: false })

const validate = ajv.compile(schema)

export function validateConfig(config: Config): Config {
  if (!validate(config)) {
    const message = validate.errors
      ?.map(err => `${err.instancePath || "Config"} ${err.message}`)
      .join("\n")

    throw new Error(
      `Invalid config passed to govuk-versioning-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected:\n${message}`
    )
  }

  return config as Config
}

export function validateVersionsArray(versions: Versions): Versions {
  if (!validate(versions)) {
    const message = validate.errors
      ?.map(err => `${err.instancePath || "Versions"} ${err.message}`)
      .join("\n")

    throw new Error(
      `Invalid array of VERSIONS passed to govuk-versioning-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected:\n${message}`
    )
  }

  return versions as Versions
}


export function validateVersionToCreate(versionToCreate: VersionToCreate): VersionToCreate {
  if (!validate(versionToCreate)) {
    const message = validate.errors
      ?.map(err => `${err.instancePath || "VersionToCreate"} ${err.message}`)
      .join("\n")

    throw new Error(
      `Invalid VersionToCreate passed to govuk-versioning-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected:\n${message}`
    )
  }

  return versionToCreate as VersionToCreate
}
