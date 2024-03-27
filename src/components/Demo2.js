import { useRef, useState } from "react";

const Demo2 = () => {
  // Normal Variable
  let x = 0;

  // State Varibale
  const [y, setY] = useState(0);

  // Ref variable
  const ref = useRef(0);

  //   console.log("Rendering...");

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <div>
        <button
          className="p-2 m-4 bg-green-100"
          onClick={() => {
            x = x + 1;
            console.log("x =", x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="p-2 m-4 bg-green-100"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className="p-2 m-4 bg-green-100"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref =", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
