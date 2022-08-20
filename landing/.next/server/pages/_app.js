"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./next-seo.config.js
const SEO = {
    canonical: "https://www.cometproxies.com/",
    title: "Comet Proxies — Reliable performance for botters big and small.",
    titleTemplate: "%s - Comet Proxies",
    description: "Comet is on a mission to deliver high-quality proxies for when speed and consistency matter most.",
    openGraph: {
        title: "Comet Proxies — Reliable performance for botters big and small.",
        description: "Comet is on a mission to deliver high-quality proxies for when speed and consistency matter most.",
        type: "website",
        locale: "en_IE",
        url: "https://www.cometproxies.com/",
        site_name: "Comet Proxies — Reliable performance for botters big and small.",
        images: [
            {
                url: "/banner.png",
                width: 1500,
                height: 500,
                alt: "Comet Proxies Showcase"
            }, 
        ]
    },
    twitter: {
        handle: "@Comet Proxies",
        site: "@Comet Proxies",
        cardType: "summary_large_image"
    }
};
/* harmony default export */ const next_seo_config = (SEO);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: external "react-helmet"
const external_react_helmet_namespaceObject = require("react-helmet");
;// CONCATENATED MODULE: ./pages/_app.jsx






function App({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_helmet_namespaceObject.Helmet, {
                htmlAttributes: {
                    lang: "en"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                className: "scroll-smooth",
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    content: "width=device-width, initial-scale=1",
                    name: "viewport"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: "scroll-smooth bg-background",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                        ...next_seo_config
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1685));
module.exports = __webpack_exports__;

})();