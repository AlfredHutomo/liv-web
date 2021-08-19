// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 31"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 2.583A2.588 2.588 0 012.593 0h29.814A2.588 2.588 0 0135 2.583a2.588 2.588 0 01-2.593 2.584H2.593A2.588 2.588 0 010 2.583zM0 15.5a2.588 2.588 0 012.593-2.583h29.814A2.588 2.588 0 0135 15.5a2.588 2.588 0 01-2.593 2.583H2.593A2.588 2.588 0 010 15.5zm0 12.917a2.588 2.588 0 012.593-2.584h29.814A2.588 2.588 0 0135 28.417 2.588 2.588 0 0132.407 31H2.593A2.588 2.588 0 010 28.417z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
