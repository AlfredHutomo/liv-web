// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9exzG1GT62JcZadLz4owTA
// Component: 4XVncLvLu9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ContainedCenteredBox from "../../ContainedCenteredBox"; // plasmic-import: sEatx_evem/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_xiang_portfolio.module.css"; // plasmic-import: 9exzG1GT62JcZadLz4owTA/projectcss
import * as sty from "./PlasmicTwoRowLayout.module.css"; // plasmic-import: 4XVncLvLu9/css

export const PlasmicTwoRowLayout__VariantProps = new Array();

export const PlasmicTwoRowLayout__ArgProps = new Array("children");

function PlasmicTwoRowLayout__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <ContainedCenteredBox
        data-plasmic-name={"containedCenteredBox"}
        data-plasmic-override={overrides.containedCenteredBox}
        className={classNames("__wab_instance", sty.containedCenteredBox)}
      />

      {p.renderPlasmicSlot({
        defaultContents: (
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__fHk5D)}
            role={"img"}
            src={"/plasmic/xiang_portfolio/images/img53021BWpng.png"}
          />
        ),

        value: args.children
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "containedCenteredBox"],
  containedCenteredBox: ["containedCenteredBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTwoRowLayout__ArgProps,
      internalVariantPropNames: PlasmicTwoRowLayout__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTwoRowLayout__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTwoRowLayout";
  } else {
    func.displayName = `PlasmicTwoRowLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicTwoRowLayout = Object.assign(
  // Top-level PlasmicTwoRowLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    containedCenteredBox: makeNodeComponent("containedCenteredBox"),
    // Metadata about props expected for PlasmicTwoRowLayout
    internalVariantProps: PlasmicTwoRowLayout__VariantProps,
    internalArgProps: PlasmicTwoRowLayout__ArgProps
  }
);

export default PlasmicTwoRowLayout;
/* prettier-ignore-end */