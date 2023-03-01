import uuid from "uuid";

export function newGuid() {
  return uuid.v4();
}

export const Empty = uuid.NIL;