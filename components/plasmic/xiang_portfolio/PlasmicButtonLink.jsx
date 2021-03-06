// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9exzG1GT62JcZadLz4owTA
// Component: S0p9CCVZas
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_xiang_portfolio.module.css"; // plasmic-import: 9exzG1GT62JcZadLz4owTA/projectcss
import * as sty from "./PlasmicButtonLink.module.css"; // plasmic-import: S0p9CCVZas/css

export const PlasmicButtonLink__VariantProps = new Array("darkText");

export const PlasmicButtonLink__ArgProps = new Array("label", "linkTo");

function PlasmicButtonLink__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__darkText]: hasVariant(variants, "darkText", "darkText")
      })}
      component={Link}
      href={args.linkTo}
      platform={"nextjs"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Text",
        value: args.label,
        className: classNames(sty.slotLabel, {
          [sty.slotLabel__darkText]: hasVariant(
            variants,
            "darkText",
            "darkText"
          )
        })
      })}
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonLink__ArgProps,
      internalVariantPropNames: PlasmicButtonLink__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonLink";
  } else {
    func.displayName = `PlasmicButtonLink.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonLink = Object.assign(
  // Top-level PlasmicButtonLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButtonLink
    internalVariantProps: PlasmicButtonLink__VariantProps,
    internalArgProps: PlasmicButtonLink__ArgProps
  }
);

export default PlasmicButtonLink;
/* prettier-ignore-end */
