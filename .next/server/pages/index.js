(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 726:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "Article_grid__2WPYc",
	"card": "Article_card__2DgoW",
	"logo": "Article_logo__p8cMG"
};


/***/ }),

/***/ 577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./config/index.js
const dev = 'production' !== "production";
const server = dev ? "http://localhost:3000" : "https://yourwebsite.com";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(726);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/ArticleItem.js




const ArticleItem = ({ article  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/article/[id]",
        as: `/article/${article.id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: (Article_module_default()).card,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    children: [
                        article.title,
                        " →"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: article.body
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/ArticleList.js




const ArticleList = ({ articles  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Article_module_default()).grid,
        children: articles.map((article, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ArticleItem, {
                article: article
            }, index)
        )
    }));
};

;// CONCATENATED MODULE: ./pages/index.js



function Home({ articles  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(ArticleList, {
            articles: articles
        })
    }));
};
const getStaticProps = async ()=>{
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();
    return {
        props: {
            articles
        }
    };
}; // export const getStaticProps = async () => {
 //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
 //   const articles = await res.json();
 //   return {
 //     props: {
 //       articles,
 //     },
 //   };
 // };


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(577)));
module.exports = __webpack_exports__;

})();