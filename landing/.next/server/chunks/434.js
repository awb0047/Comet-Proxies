"use strict";
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 3434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7505);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);



const Faq = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "faq",
        className: "mx-auto w-full max-w-6xl px-4 pt-32",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-center text-3xl font-medium text-primary-default",
                            children: "FAQ"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-center text-5xl font-semibold text-white",
                            children: "Frequently Asked Questions"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "border-gradient-b-faq mx-auto mt-10 w-full space-y-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                            defaultOpen: "true",
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": "100",
                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                            className: `font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${open ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white" : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "When are plans delivered?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronDown, {
                                                    className: `${open ? "trans rotate-180 transform fill-[#8497AE]" : "fill-[#8497AE]"} h-5 w-5 min-w-[1.25rem] max-w-[1.25rem] `
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                            show: open,
                                            enter: "transition duration-100 ease-in-out",
                                            enterFrom: "transform scale-95 opacity-0",
                                            enterTo: "transform scale-100 opacity-100",
                                            leave: "transition duration-100 ease-in-out",
                                            leaveFrom: "transform scale-100 opacity-100",
                                            leaveTo: "transform scale-95 opacity-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                                className: "text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "Plans are usually delivered immediately after purchase, but may take up to 1 hour during busy periods. If you have not received your plan, please join our",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://discord.gg/KJnHtqfZHD",
                                                            target: "_blank",
                                                            className: "trans text-primary-light hover:text-primary-default hover:underline",
                                                            rel: "noopener noreferrer",
                                                            children: "Discord"
                                                        }),
                                                        " ",
                                                        "and create a ticket, so we can get the issue sorted."
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": "100",
                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                            className: `font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${open ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white" : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "How long does residential data last?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronDown, {
                                                    className: `${open ? "trans rotate-180 transform fill-[#8497AE]" : "fill-[#8497AE]"} h-5 w-5 min-w-[1.25rem] max-w-[1.25rem]`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                            show: open,
                                            enter: "transition duration-100 ease-in-out",
                                            enterFrom: "transform scale-95 opacity-0",
                                            enterTo: "transform scale-100 opacity-100",
                                            leave: "transition duration-100 ease-in-out",
                                            leaveFrom: "transform scale-100 opacity-100",
                                            leaveTo: "transform scale-95 opacity-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                                className: "text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "You have up to 60 days from purchase to use your data."
                                                })
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": "200",
                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                            className: `font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${open ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white" : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "What sites do you support?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronDown, {
                                                    className: `${open ? "trans rotate-180 transform fill-[#8497AE]" : "fill-[#8497AE]"} h-5 w-5 min-w-[1.25rem] max-w-[1.25rem] `
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                            show: open,
                                            enter: "transition duration-100 ease-in-out",
                                            enterFrom: "transform scale-95 opacity-0",
                                            enterTo: "transform scale-100 opacity-100",
                                            leave: "transition duration-100 ease-in-out",
                                            leaveFrom: "transform scale-100 opacity-100",
                                            leaveTo: "transform scale-95 opacity-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                                className: "text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Although we cannot guarantee supported sites due to the nature of proxy protection, our proxies should work on sites such as Yeezy Supply, Nike, Shopify, Footsites, Walmart, Target, etc."
                                                })
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": "300",
                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                            className: `font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${open ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white" : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "How do I receive a refund?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronDown, {
                                                    className: `${open ? "trans rotate-180 transform fill-[#8497AE]" : "fill-[#8497AE]"} h-5 w-5 min-w-[1.25rem] max-w-[1.25rem]`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                            show: open,
                                            enter: "transition duration-100 ease-in-out",
                                            enterFrom: "transform scale-95 opacity-0",
                                            enterTo: "transform scale-100 opacity-100",
                                            leave: "transition duration-100 ease-in-out",
                                            leaveFrom: "transform scale-100 opacity-100",
                                            leaveTo: "transform scale-95 opacity-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                                className: "text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "As per our",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://discord.gg/KJnHtqfZHD",
                                                            target: "_blank",
                                                            className: "trans text-primary-light hover:text-primary-default hover:underline",
                                                            rel: "noopener noreferrer",
                                                            children: "Terms of Service"
                                                        }),
                                                        " ",
                                                        ", all sales are final. However, if you have an issue with the proxies, please join our",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://discord.gg/KJnHtqfZHD",
                                                            target: "_blank",
                                                            className: "trans text-primary-light hover:text-primary-default hover:underline",
                                                            rel: "noopener noreferrer",
                                                            children: "Discord"
                                                        }),
                                                        " ",
                                                        "and create a ticket. We'll help you out."
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": "400",
                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                            className: `font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${open ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white" : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Where can I find a more detailed FAQ for each product?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronDown, {
                                                    className: `${open ? "trans rotate-180 transform fill-[#8497AE]" : "fill-[#8497AE]"}  h-5 w-5 min-w-[1.25rem] max-w-[1.25rem]`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                            show: open,
                                            enter: "transition duration-100 ease-in-out",
                                            enterFrom: "transform scale-95 opacity-0",
                                            enterTo: "transform scale-100 opacity-100",
                                            leave: "transition duration-100 ease-in-out",
                                            leaveFrom: "transform scale-100 opacity-100",
                                            leaveTo: "transform scale-95 opacity-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                                className: "text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "That can be found in our",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://discord.gg/KJnHtqfZHD",
                                                            target: "_blank",
                                                            className: "trans text-primary-light hover:text-primary-default hover:underline",
                                                            rel: "noopener noreferrer",
                                                            children: "Discord"
                                                        }),
                                                        " ",
                                                        "under #residential-info and #isp-info."
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": "500",
                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                            className: `font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${open ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white" : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "My question isn't listed. How do I get further help?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronDown, {
                                                    className: `${open ? "trans rotate-180 transform fill-[#8497AE]" : "fill-[#8497AE]"} h-5 w-5 min-w-min min-w-[1.25rem] max-w-[1.25rem] `
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                            show: open,
                                            enter: "transition duration-100 ease-in-out",
                                            enterFrom: "transform scale-95 opacity-0",
                                            enterTo: "transform scale-100 opacity-100",
                                            leave: "transition duration-100 ease-in-out",
                                            leaveFrom: "transform scale-100 opacity-100",
                                            leaveTo: "transform scale-95 opacity-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                                className: "text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "Please join our",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://discord.gg/KJnHtqfZHD",
                                                            target: "_blank",
                                                            className: "trans text-primary-light hover:text-primary-default hover:underline",
                                                            rel: "noopener noreferrer",
                                                            children: "Discord"
                                                        }),
                                                        " ",
                                                        "and create a ticket. Our dedicated staff team will help you right away."
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faq);


/***/ })

};
;