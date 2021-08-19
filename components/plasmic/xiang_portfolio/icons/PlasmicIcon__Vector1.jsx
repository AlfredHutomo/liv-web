// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 298 140"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M149.555 1c-7.743 33.55-24.145 66.613-47.666 91.943-16.915 18.216-44.875 29.226-68.15 36.005-9.398 2.738-20.633 9.297-30.49 9.297-6.541 0 3.132-13.965 4.49-15.757 8.842-11.655 25.117-8.036 37.976-8.036 6.2 0 12.653-.539 18.83.079 5.37.537 9.748 4.707 14.89 6.302 7.887 2.448 15.849 4.935 23.793 7.17 3.35.942 6.777.199 10.085 1.261 30.512 9.786 62.61-2.934 82.41-27.26 2.788-3.425 16.125-25.993 6.303-19.855-3.03 1.894-3.828 9.32-4.176 12.449-.744 6.699 4.186 17.051 8.431 21.902 6.787 7.757 10.021 22.06 22.847 22.06 13.952 0 30.9-8.134 41.757-17.017 5.922-4.846 12.692-6.389 18.357-12.055 6.066-6.066 7.8-13.763 7.8-21.981"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector1Icon;
/* prettier-ignore-end */
