import { useEffect } from "react";

export function ContentScript() {
  useEffect(() => {
    console.log("INJECTED");
  }, []);
  return null;
}
