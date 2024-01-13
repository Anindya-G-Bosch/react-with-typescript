//Chapter - 108

import { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); //null! is called not null assertion, which is used to tell typescript that
  //we are sure that this inputRef will never be null.

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
