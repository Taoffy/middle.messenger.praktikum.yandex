import { Indexed } from "../../types/common-types";

import { isArray } from "./is-array";
import { isPlainObject } from "./is-plain-object";

export function isArrayOrObject(value: unknown): value is [] | Indexed {
  return isPlainObject(value) || isArray(value);
}
