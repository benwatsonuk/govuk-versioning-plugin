import { VersionToCreate, ModifyFileVariables } from "../types";

export default function createVariables(
  versionToCreate: VersionToCreate
): ModifyFileVariables {
    return {
        newVersion: versionToCreate.newVersion,
        newPhase: versionToCreate.newPhase,
        oldVersion: versionToCreate.oldVersion,
        oldPhase: versionToCreate.oldPhase,
    }
}