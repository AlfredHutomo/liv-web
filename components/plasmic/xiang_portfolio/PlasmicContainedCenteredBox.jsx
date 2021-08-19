// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9exzG1GT62JcZadLz4owTA
// Component: sEatx_evem
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: odSb3nMDUr/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_xiang_portfolio.module.css"; // plasmic-import: 9exzG1GT62JcZadLz4owTA/projectcss
import * as sty from "./PlasmicContainedCenteredBox.module.css"; // plasmic-import: sEatx_evem/css
import Line4Icon from "./icons/PlasmicIcon__Line4"; // plasmic-import: JewPDaOGdxG/icon

export const PlasmicContainedCenteredBox__VariantProps = new Array();

export const PlasmicContainedCenteredBox__ArgProps = new Array();

function PlasmicContainedCenteredBox__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"bigText"}
        data-plasmic-override={overrides.bigText}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.bigText
        )}
      >
        {"PHOTOGRAPHY"}
      </div>

      <div
        data-plasmic-name={"smallText"}
        data-plasmic-override={overrides.smallText}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.smallText
        )}
      >
        {
          "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate eros leo, sit amet condimentum dui malesuada sed. Phasellus at turpis feugiat, iaculis metus ac, imperdiet elit. Donec at ornare tellus. Vestibulum eu gravida tortor, nec tempus nibh. Donec luctus nunc hendrerit varius egestas. Morbi vel tempor lorem. In hac habitasse platea dictumst. Suspendisse quis dictum tellus. Cras quis turpis velit. Fusce non ullamcorper lorem. Etiam sagittis, orci eu hendrerit commodo, dui dui ullamcorper mauris, sit amet mollis orci sem ac justo."
        }
      </div>

      <Line4Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg)}
        role={"img"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "bigText", "smallText", "svg"],
  bigText: ["bigText"],
  smallText: ["smallText"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicContainedCenteredBox__ArgProps,
      internalVariantPropNames: PlasmicContainedCenteredBox__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicContainedCenteredBox__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContainedCenteredBox";
  } else {
    func.displayName = `PlasmicContainedCenteredBox.${nodeName}`;
  }
  return func;
}

export const PlasmicContainedCenteredBox = Object.assign(
  // Top-level PlasmicContainedCenteredBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    bigText: makeNodeComponent("bigText"),
    smallText: makeNodeComponent("smallText"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicContainedCenteredBox
    internalVariantProps: PlasmicContainedCenteredBox__VariantProps,
    internalArgProps: PlasmicContainedCenteredBox__ArgProps
  }
);

export default PlasmicContainedCenteredBox;
/* prettier-ignore-end */