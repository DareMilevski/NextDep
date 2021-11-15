(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 998:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Header_title__1vi4d",
	"description": "Header_description__1lhe1"
};


/***/ }),

/***/ 448:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__1SPwL",
	"main": "Layout_main__cgm7e"
};


/***/ }),

/***/ 262:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Nav_nav__3Zjf-"
};


/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(448);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./styles/Nav.module.css
var Nav_module = __webpack_require__(262);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./components/Nav.js



const Nav = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (Nav_module_default()).nav,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/about",
                        children: "About"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Nav = (Nav);

// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(998);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header.js



const Header = ()=>{
    //   const x = 5;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).title,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "WebDev"
                    }),
                    "News"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Header_module_default()).description,
                children: "Keep up to date"
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(549);
;// CONCATENATED MODULE: ./components/Layout.js






const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    className: (Layout_module_default()).main,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                        }),
                        children
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,549], () => (__webpack_exec__(57)));
module.exports = __webpack_exports__;

})();