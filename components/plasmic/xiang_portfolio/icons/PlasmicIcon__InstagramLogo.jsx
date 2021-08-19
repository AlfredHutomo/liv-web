// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InstagramLogoIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 31"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 19.7a4.69 4.69 0 004.688-4.69A4.69 4.69 0 0015 10.32a4.69 4.69 0 00-4.688 4.69A4.69 4.69 0 0015 19.7z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M20.156 4.222H9.844A5.627 5.627 0 004.219 9.85v10.32a5.627 5.627 0 005.625 5.629h10.312a5.627 5.627 0 005.625-5.629V9.85a5.627 5.627 0 00-5.625-5.628z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M21.094 10.32a1.407 1.407 0 10-.001-2.814 1.407 1.407 0 000 2.813z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InstagramLogoIcon;
/* prettier-ignore-end */
