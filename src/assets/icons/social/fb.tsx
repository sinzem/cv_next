import * as React from "react";
import { SVGProps } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // xmlns="http://www.w3.org/2000/svg"
    // width="1em"
    // height="1em"
    // transform="rotate(-90deg)"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#000"
      d="M0 2.93v14.14A2.933 2.933 0 0 0 2.93 20h14.14A2.933 2.933 0 0 0 20 17.07v-5.898h-7.07v2.344H9.414v-2.344H7.031a3.52 3.52 0 0 1-3.515-3.516V4.102H7.03v3.554h2.383V4.102l3.516.585v2.97H20V2.93A2.933 2.933 0 0 0 17.07 0H2.93A2.933 2.933 0 0 0 0 2.93Z"
    />
  </svg>
)
export default FacebookIcon;