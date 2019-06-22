(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./images/Pet-Services-Cat.jpg */ "./src/images/Pet-Services-Cat.jpg"));

// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n\n  background-color: white;\n}\n\n.App {\n\n}\n.facts {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 80%;\n  margin: 50px auto;\n}\n\n.fact {\n  width: 47%;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  background-color: rgba(0,0,0,0.1);\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.line {\n  width: 100%;\n  height: 2px;\n  background-color: #3f51b5;\n  margin-top: 20px;\n}\n\nfooter {\n  height: 400px;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: bottom center;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer.js */ "./src/components/Footer.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header.js */ "./src/components/Header.js");
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Router.js */ "./src/Router.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Daria/Desktop/cat_api/src/App.js";
 // import {BrowserRouter as Router, Route, Link}  from 'react-router-dom';






function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

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

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Daria/Desktop/cat_api/src/components/About.js";


const About = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Welcome to our info page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Our website is wack but we`re working on it!"));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Contacts.js":
/*!************************************!*\
  !*** ./src/components/Contacts.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Daria/Desktop/cat_api/src/components/Contacts.js";


const Contacts = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Welcome to our info page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Our website is wack but we`re working on it!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./src/components/Fact.js":
/*!********************************!*\
  !*** ./src/components/Fact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Daria/Desktop/cat_api/src/components/Fact.js";
// import React from 'react';
//
//
// const Fact = ({match}) => {
//   axios.get('https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/'+ {match.params.id})
//   .then(response => {
//     console.log(response.data)
//     let cats = response.data.all.map(cat =>
//       <div key ={cat._id} className= "fact">
//         <div className= "line"></div>
//         <h2> Cat fact</h2>
//         <p>{cat.text}</p>
//         <p>{cat.upvotes}</p>
//         <Link to = {{pathname:`/${cat._id}/`}}>View</Link>
//       </div>
//     )
//  return (
//    <div>
//     <h2>Definition: {match.params.id}</h2>
//    </div>
//  )
// }
//
// export default Fact;
// import React from 'react';
// import axios from 'axios';
// // import {Link} from 'react-router-dom'
//
// class Fact extends React.Component  {
//   constructor({match}) {
//     super ();
//     this.state = {cats:[], onLoad: true};
//   }
//
//   componentDidMount() {
//     axios.get('https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/'+ {this.props.match.params.id})
//     .then(response => {
//       console.log(response.data)
//       let cats = response.data.all.map(cat =>
//         <div key ={cat._id} className= "fact">
//           <div className= "line"></div>
//           <h2> Cat fact</h2>
//           <p>{cat.text}</p>
//           <p>{cat.upvotes}</p>
//         </div>
//       )
//       this.setState({onLoad:false})
//       this.setState({cats:cats})
//     })
//   }
//
//   render() {
//     if (this.state.onLoad) {
//       return (
//       <div>Loading...</div>
//       )
//     }else {
//       return (
//         <div className= "fact">{this.state.cats} ...props</div>
//       )
//     }
//   }
// }
// export default Fact;


const Fact = ({
  match
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Definition: ", match.params.id));
};

/* harmony default export */ __webpack_exports__["default"] = (Fact);

/***/ }),

/***/ "./src/components/Facts.js":
/*!*********************************!*\
  !*** ./src/components/Facts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/Daria/Desktop/cat_api/src/components/Facts.js";




class Facts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      onLoad: true
    };
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts').then(response => {
      console.log(response.data.all);
      let cats = response.data.all.slice(0, 8).map(cat => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: cat._id,
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, " Cat fact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, cat.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, cat.upvotes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: {
          pathname: "/".concat(cat._id, "/")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "View")));
      this.setState({
        onLoad: false
      });
      this.setState({
        cats: cats
      });
    });
  }

  render() {
    if (this.state.onLoad) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Loading...");
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "facts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.state.cats);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Facts);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Daria/Desktop/cat_api/src/components/Footer.js";


const Footer = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Call us for more cat facts"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleBottomNavigation; });
/* harmony import */ var _Users_Daria_Desktop_cat_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "./node_modules/@material-ui/core/esm/BottomNavigation/index.js");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "./node_modules/@material-ui/core/esm/BottomNavigationAction/index.js");

var _jsxFileName = "/Users/Daria/Desktop/cat_api/src/components/Header.js";





 // import HomeIcon from '@material-ui/icons/Home';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PublicIcon from '@material-ui/icons/Public';

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    width: '100%',
    backgroundColor: 'transparent'
  },
  btn: {},
  title: {
    paddingTop: 25,
    color: '#3f51b5'
  }
});
function SimpleBottomNavigation() {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
        _React$useState2 = Object(_Users_Daria_Desktop_cat_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        value = _React$useState2[0],
        setValue = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.title,
    variant: "h2",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Cat facts")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: value,
    onChange: (event, newValue) => {
      setValue(newValue);
    },
    showLabels: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.btn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Home"), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.btn,
    label: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.btn,
    label: "Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./src/images/Pet-Services-Cat.jpg":
/*!*****************************************!*\
  !*** ./src/images/Pet-Services-Cat.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Pet-Services-Cat.5a6d8ea9.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/Daria/Desktop/cat_api/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Daria/Desktop/cat_api/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Daria/Desktop/cat_api/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map