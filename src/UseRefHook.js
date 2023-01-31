import { useState, useRef, useEffect } from "react";

export const UseRefHook = () => {
  const [input, setInput] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      renders: {count.current}
    </div>
  );
};
