import { useState } from "react";

export const useLtrRtl = () => {
  const [text, setText] = useState<"ltr" | "rtl">("rtl");

  const changeRTLorLTR = () => {
    if (text === "ltr") {
      setText("rtl");
    } else {
      setText("ltr");
    }

    document.getElementsByTagName("main")[0].setAttribute("dir", text);
  };

  return { changeRTLorLTR };
};
