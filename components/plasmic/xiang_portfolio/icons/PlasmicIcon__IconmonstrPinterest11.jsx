// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconmonstrPinterest11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15 0C6.716 0 0 6.715 0 15c0 6.355 3.954 11.782 9.534 13.968-.132-1.187-.25-3.007.052-4.302.273-1.171 1.759-7.456 1.759-7.456s-.449-.899-.449-2.228c0-2.084 1.209-3.642 2.714-3.642 1.279 0 1.898.961 1.898 2.113 0 1.286-.82 3.21-1.243 4.993-.354 1.493.749 2.711 2.221 2.711 2.666 0 4.715-2.81 4.715-6.868 0-3.591-2.58-6.103-6.265-6.103-4.267 0-6.772 3.201-6.772 6.509 0 1.289.496 2.672 1.116 3.422.123.15.14.28.104.432l-.417 1.7c-.066.275-.217.334-.502.201-1.874-.872-3.045-3.611-3.045-5.811 0-4.731 3.438-9.078 9.911-9.078 5.204 0 9.248 3.709 9.248 8.664 0 5.17-3.259 9.33-7.784 9.33-1.52 0-2.949-.789-3.438-1.723l-.934 3.567c-.34 1.303-1.253 2.937-1.866 3.932A15.03 15.03 0 0015 30c8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconmonstrPinterest11Icon;
/* prettier-ignore-end */
