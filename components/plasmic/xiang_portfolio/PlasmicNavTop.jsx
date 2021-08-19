// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9exzG1GT62JcZadLz4owTA
// Component: eCdmC84KTs
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Nav from "../../Nav"; // plasmic-import: 2H0V71C99l/component
import MenuButton from "../../MenuButton"; // plasmic-import: qxH2iITxwI/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: odSb3nMDUr/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_xiang_portfolio.module.css"; // plasmic-import: 9exzG1GT62JcZadLz4owTA/projectcss
import * as sty from "./PlasmicNavTop.module.css"; // plasmic-import: eCdmC84KTs/css

export const PlasmicNavTop__VariantProps = new Array("darkBg");

export const PlasmicNavTop__ArgProps = new Array();

function PlasmicNavTop__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__darkBg]: hasVariant(variants, "darkBg", "darkBg")
      })}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox, {
          [sty.freeBox__darkBg]: hasVariant(variants, "darkBg", "darkBg")
        })}
      >
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <Nav
            data-plasmic-name={"nav"}
            data-plasmic-override={overrides.nav}
            className={classNames("__wab_instance", sty.nav, {
              [sty.nav__darkBg]: hasVariant(variants, "darkBg", "darkBg")
            })}
            darkText={
              hasVariant(variants, "darkBg", "darkBg") ? undefined : "darkText"
            }
          />
        ) : null}
        {(
          hasVariant(variants, "darkBg", "darkBg") &&
          hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : false
        ) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton, {
              [sty.menuButton__darkBg]: hasVariant(variants, "darkBg", "darkBg")
            })}
            darkBg={
              hasVariant(variants, "darkBg", "darkBg") &&
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? "darkBg"
                : hasVariant(variants, "darkBg", "darkBg")
                ? "darkBg"
                : undefined
            }
          />
        ) : null}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "nav", "menuButton"],
  freeBox: ["freeBox", "nav", "menuButton"],
  nav: ["nav"],
  menuButton: ["menuButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavTop__ArgProps,
      internalVariantPropNames: PlasmicNavTop__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavTop__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavTop";
  } else {
    func.displayName = `PlasmicNavTop.${nodeName}`;
  }
  return func;
}

export const PlasmicNavTop = Object.assign(
  // Top-level PlasmicNavTop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    nav: makeNodeComponent("nav"),
    menuButton: makeNodeComponent("menuButton"),
    // Metadata about props expected for PlasmicNavTop
    internalVariantProps: PlasmicNavTop__VariantProps,
    internalArgProps: PlasmicNavTop__ArgProps
  }
);

export default PlasmicNavTop;
/* prettier-ignore-end */
