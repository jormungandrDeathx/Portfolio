import React, { useEffect } from "react";
import {motion,useAnimation} from "motion/react"

function AlertBox({ message, onclose, duration = 3000 }) {
    const controls = useAnimation()
  useEffect(() => {
    if (!message) return;
    controls.start({
        width:"0%",
        transition:{duration: duration/1000, ease:"linear"}
    })
    const timer = setTimeout(() => {
      onclose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, onclose, duration]);

  return (
    <div className="fixed top-16 max-w-75 md:max-w-100 w-full">
      <div className="p-5 rounded-b-md bg-gray-200 flex flex-col gap-2 [&>h1]:text-lg [&>h1]:font-semibold [&>button]:text-sm [&>button]:bg-red-500 [&>button]:text-gray-200 [&>button]:font-medium [&>button]:py-1 [&>button]:px-2 [&>button]:rounded [&>button]:self-end z-99">
        <h1>{message}</h1>
        <button>close</button>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-400/70 overflow-hidden rounded-b-md">
          <motion.div
            initial={{ width: "100%" }}
            animate={controls}
            className="h-full bg-linear-to-r from-pink-700 via-blue-700 to-blue-900"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default AlertBox;
