import { isObject } from "../utils"
import { ModelMetadata, modelMetadataKey } from "./metadata"
import { ModelClass } from "./Model"

interface ModelInfo {
  name: string
  class: ModelClass
}

/**
 * @ignore
 */
export const modelInfoByName: {
  [name: string]: ModelInfo
} = {}

/**
 * @ignore
 */
export const modelInfoByClass = new Map<any, ModelInfo>()

/**
 * @ignore
 */
export function getModelInfoForName(name: string): ModelInfo | undefined {
  return modelInfoByName[name]
}

/**
 * @ignore
 */
export function getModelInfoForObject(obj: any): ModelInfo | undefined {
  if (!isObject(obj) || !obj[modelMetadataKey]) {
    return undefined
  }
  return getModelInfoForName((obj[modelMetadataKey] as ModelMetadata).type)
}