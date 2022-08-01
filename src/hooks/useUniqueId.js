import { useState } from "react";

let last = 0;

function uniqueId() {
  return (++last).toString();
}

export function useUniqueId() {
  const [id] = useState(() => uniqueId());
  return id;
}
