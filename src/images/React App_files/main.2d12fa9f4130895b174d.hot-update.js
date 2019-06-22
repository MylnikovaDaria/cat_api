webpackHotUpdate("main",{

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkRouter; });
/* harmony import */ var _components_About_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/About.js */ "./src/components/About.js");
/* harmony import */ var _components_Fact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Fact.js */ "./src/components/Fact.js");
/* harmony import */ var _components_Facts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Facts.js */ "./src/components/Facts.js");
/* harmony import */ var _components_Contacts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Contacts.js */ "./src/components/Contacts.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
var _jsxFileName = "/Users/Daria/Desktop/cat_api/src/Router.js";
// import React from 'react';
// import {BrowserRouter as Router, Route, Link}  from 'react-router-dom';
//
// import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//



 //
//
// const useStyles = {
//   root: {
//     width: '100%',
//     backgroundColor: 'transparent',
//   },
//   btn: {
//     color: 'black'
//   },
//   title: {
//     paddingTop: 25,
//     color : '#3f51b5',
//   }
// }
//
//
// class AppRouter extends React.Component  {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//
//     const {classes} =this.props;
//   return (
//     <header>
//     <nav>
//       <BottomNavigation
//         // value={value}
//         // onChange={(event, newValue) => {
//         //   setValue(newValue);
//         // }}
//         showLabels
//         className={classes.root}
//       >
//         <BottomNavigationAction className={classes.btn} label="Home" ><Link to='/'></Link> </BottomNavigationAction>
//         <BottomNavigationAction className={classes.btn} label="About"> <Link to='/about'></Link></BottomNavigationAction>
//         <BottomNavigationAction className={classes.btn} label="Contact"><Link to='/contact'></Link></BottomNavigationAction>
//       </BottomNavigation>
//       </nav>
//
//     <div className={classes.root}>
//       <Typography className={classes.title} variant="h2" component="h2" gutterBottom>
//         Cat facts
//       </Typography>
//     </div>
//
//     <hr/>
//
//     <Router>
//       <Route path ='/' exact component={Facts}/>
//       <Route path ='/:id/' component={Fact}/>
//       <Route path ='/about' component={About}/>
//       <Route path ='/contacts' component={Contacts}/>
//     </Router>
//
//     </header>
//     )
//   }
// }
//
// AppRouter.propTypes = {
//   classes: PropTypes.object.isRequired};
//
//
// export default withStyles(useStyles)(AppRouter);

 // import { MemoryRouter as Router } from 'react-router';



 // required for react-router-dom < 6.0.0
// see https://github.com/ReactTraining/react-router/issues/6056#issuecomment-435524678

const HomeLink = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef((props, ref) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], Object.assign({
  innerRef: ref,
  to: "/facts"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
})));
const AboutLink = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef((props, ref) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], Object.assign({
  innerRef: ref,
  to: "/about"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
})));
const ContactsLink = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef((props, ref) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], Object.assign({
  innerRef: ref,
  to: "/contacts"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
})));
function LinkRouter() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: HomeLink,
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: AboutLink,
    to: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: ContactsLink,
    to: "/contacts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Contacts"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/",
    exact: true,
    component: _components_Facts_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/:id/",
    component: _components_Fact_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/about",
    component: _components_About_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/contacts",
    component: _components_Contacts_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=main.2d12fa9f4130895b174d.hot-update.js.map