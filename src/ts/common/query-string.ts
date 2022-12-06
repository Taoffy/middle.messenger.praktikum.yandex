import { Indexed } from "../../types/common-types";

import { isPlainObject } from "../utils/is-plain-object";
import { isArrayOrObject } from "../utils/is-array-or-object";

function getKey(key: string, parentKey?: string) {
  return parentKey ? `${parentKey}[${key}]` : key;
}

function getParams(data: Indexed | [], parentKey?: string) {
  const result: [string, string][] = [];

  for(const [key, value] of Object.entries(data)) {
    if (isArrayOrObject(value)) {
      result.push(...getParams(value, getKey(key, parentKey)));
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
    }
  }

  return result;
}

export function queryStringify(data: Indexed) {
  if (!isPlainObject(data)) {
    throw new Error('input must be an object');
  }

  return getParams(data).map(arr => arr.join('=')).join('&');
}
