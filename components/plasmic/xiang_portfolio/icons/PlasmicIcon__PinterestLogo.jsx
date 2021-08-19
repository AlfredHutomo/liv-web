// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PinterestLogoIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 28"}
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
          "M12.188 9.625L8.938 24.5M6.25 17.123a9.172 9.172 0 01-1.313-3.79 9.383 9.383 0 01.41-4.02A8.844 8.844 0 017.39 5.918a8.017 8.017 0 013.244-2.04 7.568 7.568 0 013.749-.251 7.837 7.837 0 013.453 1.592 8.624 8.624 0 012.42 3.094c.57 1.221.868 2.57.868 3.936 0 4.832-3.25 7.875-6.5 7.875s-4.228-2.304-4.228-2.304"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PinterestLogoIcon;
/* prettier-ignore-end */
