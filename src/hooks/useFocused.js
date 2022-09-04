import { useState } from "react";

export function useFocused() {
  const [isFocused, setIsFocused] = useState(false);
  const focus = () => setIsFocused(!isFocused);
  const focusedClass =
    isFocused &&
    "focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-1 focus:ring-offset-gray-100";

  return { isFocused, focus, focusedClass };
}
