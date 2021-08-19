// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9exzG1GT62JcZadLz4owTA
// Component: MOY-0ywah5
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavTop from "../../NavTop"; // plasmic-import: eCdmC84KTs/component
import Footer from "../../Footer"; // plasmic-import: qmi9gzc5EPV/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: odSb3nMDUr/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_xiang_portfolio.module.css"; // plasmic-import: 9exzG1GT62JcZadLz4owTA/projectcss
import * as sty from "./PlasmicAbout.module.css"; // plasmic-import: MOY-0ywah5/css

export const PlasmicAbout__VariantProps = new Array();

export const PlasmicAbout__ArgProps = new Array();

function PlasmicAbout__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <NavTop
            data-plasmic-name={"navTop"}
            data-plasmic-override={overrides.navTop}
            className={classNames("__wab_instance", sty.navTop)}
          />

          <div
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(defaultcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"wrapper"}
              data-plasmic-override={overrides.wrapper}
              hasGap={true}
              className={classNames(defaultcss.all, sty.wrapper)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__tqMlp)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__a7GxE
                  )}
                >
                  {"LIV AUDREY"}
                </div>

                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : false
                ) ? (
                  <img
                    data-plasmic-name={"mobileProfile"}
                    data-plasmic-override={overrides.mobileProfile}
                    alt={""}
                    className={classNames(defaultcss.img, sty.mobileProfile)}
                    role={"img"}
                    src={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "/plasmic/xiang_portfolio/images/img53071.jpeg"
                        : undefined
                    }
                  />
                ) : null}

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__yxV2B
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus est, bibendum quam id. Arcu ut bibendum tellus dolor sed sit lobortis. Nibh enim semper elementum nec habitant. Pellentesque ornare bibendum non a, tortor. Dis at mi at vestibulum. Pharetra, velit in vitae a at ut lobortis ultrices. Enim est adipiscing lorem penatibus odio vestibulum. Velit elementum sapien aliquam posuere vitae. Pellentesque quis consectetur in proin cras dignissim. Mi elit viverra non semper vestibulum aliquet."
                  }
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__stDf4)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__fgk9
                    )}
                  >
                    {"Sincerly,"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__gISaw
                    )}
                  >
                    {"Liv"}
                  </div>
                </p.Stack>
              </p.Stack>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  data-plasmic-name={"img53071"}
                  data-plasmic-override={overrides.img53071}
                  className={classNames(defaultcss.all, sty.img53071)}
                />
              ) : null}
            </p.Stack>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navTop",
    "section",
    "wrapper",
    "mobileProfile",
    "img53071",
    "footer"
  ],

  navTop: ["navTop"],
  section: ["section", "wrapper", "mobileProfile", "img53071"],
  wrapper: ["wrapper", "mobileProfile", "img53071"],
  mobileProfile: ["mobileProfile"],
  img53071: ["img53071"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAbout__ArgProps,
      internalVariantPropNames: PlasmicAbout__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navTop: makeNodeComponent("navTop"),
    section: makeNodeComponent("section"),
    wrapper: makeNodeComponent("wrapper"),
    mobileProfile: makeNodeComponent("mobileProfile"),
    img53071: makeNodeComponent("img53071"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */
