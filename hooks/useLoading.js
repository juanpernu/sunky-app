import { useCallback, useState } from "react";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const startLoading = useCallback(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
  }, [setIsLoading]);
  const stopLoading = useCallback(() => setIsLoading(false), [setIsLoading]);

  return {
    stopLoading,
    startLoading,
    isLoading,
  };
}
