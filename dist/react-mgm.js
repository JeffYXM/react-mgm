(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("underscore"), require("classnames"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "underscore", "classnames", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactMGM"] = factory(require("react"), require("underscore"), require("classnames"), require("react-dom"));
	else
		root["ReactMGM"] = factory(root["react"], root["underscore"], root["classnames"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _flex = __webpack_require__(4);

	var _flex2 = _interopRequireDefault(_flex);

	var _gmUtil = __webpack_require__(11);

	var _gmUtil2 = _interopRequireDefault(_gmUtil);

	var _textarea = __webpack_require__(21);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _nprogress = __webpack_require__(17);

	var _nprogress2 = _interopRequireDefault(_nprogress);

	var _mask = __webpack_require__(10);

	var _mask2 = _interopRequireDefault(_mask);

	var _toast = __webpack_require__(22);

	var _toast2 = _interopRequireDefault(_toast);

	var _loading = __webpack_require__(5);

	var _loading2 = _interopRequireDefault(_loading);

	var _page = __webpack_require__(18);

	var _page2 = _interopRequireDefault(_page);

	var _infinite = __webpack_require__(16);

	var _infinite2 = _interopRequireDefault(_infinite);

	var _header = __webpack_require__(15);

	var _header2 = _interopRequireDefault(_header);

	var _storage = __webpack_require__(20);

	var _storage2 = _interopRequireDefault(_storage);

	var _slider = __webpack_require__(19);

	var _slider2 = _interopRequireDefault(_slider);

	__webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactGMM = {
	    Flex: _flex2.default,
	    Infinite: _infinite2.default,
	    Textarea: _textarea2.default,
	    NProgress: _nprogress2.default,
	    Mask: _mask2.default,
	    Toast: _toast2.default,
	    Loading: _loading2.default,
	    Page: _page2.default,
	    Header: _header2.default,
	    Storage: _storage2.default,
	    Slider: _slider2.default,
	    Util: _gmUtil2.default
	};

	module.exports = ReactGMM;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Flex = _react2.default.createClass({
	    displayName: 'Flex',

	    propTypes: {
	        flex: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	        auto: _react2.default.PropTypes.bool,
	        width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	        height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	        row: _react2.default.PropTypes.bool,
	        column: _react2.default.PropTypes.bool,
	        wrap: _react2.default.PropTypes.bool,
	        nowrap: _react2.default.PropTypes.bool,
	        justifyStart: _react2.default.PropTypes.bool,
	        justifyEnd: _react2.default.PropTypes.bool,
	        justifyCenter: _react2.default.PropTypes.bool,
	        justifyBetween: _react2.default.PropTypes.bool,
	        justifyAround: _react2.default.PropTypes.bool,
	        alignStart: _react2.default.PropTypes.bool,
	        alignEnd: _react2.default.PropTypes.bool,
	        alignCenter: _react2.default.PropTypes.bool,
	        alignBaseline: _react2.default.PropTypes.bool,
	        alignStretch: _react2.default.PropTypes.bool
	    },
	    render: function render() {
	        var cn = (0, _classnames2.default)({
	            'flex': true,

	            'flex-auto': this.props.auto,
	            'flex-none': this.props.width || this.props.height,

	            'flex-row': this.props.row,
	            'flex-column': this.props.column,

	            'flex-wrap': this.props.wrap,
	            'flex-nowrap': this.props.nowrap,

	            'flex-justify-start': this.props.justifyStart,
	            'flex-justify-end': this.props.justifyEnd,
	            'flex-justify-center': this.props.justifyCenter,
	            'flex-justify-between': this.props.justifyBetween,
	            'flex-justify-around': this.props.justifyAround,

	            'flex-align-start': this.props.alignStart,
	            'flex-align-end': this.props.alignEnd,
	            'flex-align-center': this.props.alignCenter,
	            'flex-align-baseline': this.props.alignBaseline,
	            'flex-align-stretch': this.props.alignStretch
	        }, this.props.className);

	        var style = _underscore2.default.extend({}, this.props.style);
	        if (this.props.flex) {
	            style.flex = typeof this.props.flex === 'boolean' ? 1 : this.props.flex;
	        }
	        if (this.props.height) {
	            style.height = this.props.height;
	        }
	        if (this.props.width) {
	            style.width = this.props.width;
	        }

	        return _react2.default.createElement(
	            'div',
	            _extends({}, this.props, { className: cn, style: style }),
	            this.props.children
	        );
	    }
	});

	exports.default = Flex;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Loading = _react2.default.createClass({
	    displayName: "Loading",
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            _extends({}, this.props, { className: "loading" }),
	            _react2.default.createElement(
	                "div",
	                { className: "loading-inner" },
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_0" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_1" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_2" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_3" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_4" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_5" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_6" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_7" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_8" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_9" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_10" }),
	                _react2.default.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_11" })
	            )
	        );
	    }
	});

	exports.default = Loading;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var format = function format(str, data) {
	    var result = str;
	    if (arguments.length < 2) {
	        return result;
	    }

	    result = result.replace(/\{([\d\w\.]+)\}/g, function (key) {
	        var keys = arguments[1].split('.');
	        var r = null;
	        _underscore2.default.each(keys, function (value, index) {
	            if (index) {
	                r = r[value];
	            } else {
	                r = data[value];
	            }
	        });
	        return r;
	    });
	    return result;
	};

	exports.default = format;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var param = function param(obj) {
	    // encodeURIComponent
	    return _underscore2.default.map(obj, function (v, k) {
	        return [encodeURIComponent(k), '=', encodeURIComponent(v)].join('');
	    }).join('&').replace(/%20/g, "+");
	};

	exports.default = param;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RequestInterceptor = function () {
	    var interceptors = []; // [{request: function(){}, response: function(){}, responseError: function(){}}]
	    var id = 0;

	    return {
	        add: function add(interceptor) {
	            interceptor.__id = id++;
	            interceptors.push(interceptor);
	            return interceptor.__id;
	        },
	        remove: function remove(interceptorId) {
	            interceptors = _underscore2.default.filter(interceptors, function (value) {
	                return value.__id !== interceptorId;
	            });
	        },

	        // 私有方法,谁用谁死
	        interceptor: {
	            request: function request(config) {
	                var promise = Promise.resolve(config);
	                _underscore2.default.each(interceptors, function (value) {
	                    if (value.request) {
	                        promise = promise.then(function (_config) {
	                            // 如果request不按规范来,啥也不做. 则默认放回 config
	                            return value.request(_config) || config;
	                        });
	                    }
	                });

	                return promise;
	            },
	            response: function response(json, config) {
	                var promise = Promise.resolve(json);
	                _underscore2.default.each(interceptors, function (value) {
	                    if (value.response) {
	                        promise = promise.then(function (json) {
	                            // 如果response不按规范来,啥也不做. 则默认放回json
	                            return value.response(json, config) || json;
	                        });
	                    }
	                });
	                return promise;
	            },
	            responseError: function responseError(reason, config) {
	                var promise = Promise.reject(reason);
	                _underscore2.default.each(interceptors, function (value) {
	                    if (value.responseError) {
	                        promise = promise.catch(function (reason) {
	                            // 如果responseError不按规范来,啥也不做. reason
	                            return Promise.reject(value.responseError(reason, config) || reason);
	                        });
	                    }
	                });

	                return promise;
	            }
	        }
	    };
	}();

	exports.default = RequestInterceptor;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Mask = _react2.default.createClass({
	    displayName: 'Mask',

	    propTypes: {
	        transparent: _react2.default.PropTypes.bool,
	        show: _react2.default.PropTypes.bool,
	        opacity: _react2.default.PropTypes.number
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            transparent: false,
	            show: false
	        };
	    },
	    render: function render() {
	        var className = (0, _classnames2.default)({
	            'mask': !this.props.transparent,
	            'mask-transparent': this.props.transparent
	        });

	        var style = {
	            display: this.props.show ? 'block' : 'none',
	            opacity: this.props.opacity
	        };

	        return _react2.default.createElement('div', _extends({}, this.props, { className: className, style: style }));
	    }
	});

	exports.default = Mask;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _request = __webpack_require__(13);

	var _request2 = _interopRequireDefault(_request);

	var _requestInterceptor = __webpack_require__(9);

	var _requestInterceptor2 = _interopRequireDefault(_requestInterceptor);

	var _param = __webpack_require__(8);

	var _param2 = _interopRequireDefault(_param);

	var _format = __webpack_require__(7);

	var _format2 = _interopRequireDefault(_format);

	var _visibilitycheck = __webpack_require__(14);

	var _visibilitycheck2 = _interopRequireDefault(_visibilitycheck);

	var _is = __webpack_require__(12);

	var _is2 = _interopRequireDefault(_is);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    Request: _request2.default,
	    RequestInterceptor: _requestInterceptor2.default,
	    format: _format2.default,
	    param: _param2.default,
	    visibility: _visibilitycheck2.default,
	    is: _is2.default
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var is = {};

	is.weixin = function () {
	    return (/MicroMessenger/i.test(navigator.userAgent)
	    );
	};

	exports.default = is;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _param = __webpack_require__(8);

	var _param2 = _interopRequireDefault(_param);

	var _format = __webpack_require__(7);

	var _format2 = _interopRequireDefault(_format);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _request = __webpack_require__(9);

	var _request2 = _interopRequireDefault(_request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var processRequest = function processRequest(config) {
	    return _request2.default.interceptor.request(config);
	};

	var processResponse = function processResponse(promise, url, sucCode, config) {
	    var color = 'color: #8a6d3b;';

	    return promise.then(function (res) {
	        if (res.ok) {
	            var ct = res.headers.get('content-type');
	            // 后台可能会有登录拦截，返回登录页面
	            if (ct.indexOf('text/html') > -1) {
	                return res.text().then(function (html) {
	                    if (html.indexOf('title>登陆</title') > -1) {
	                        return Promise.reject('请登录!');
	                    }
	                    return Promise.reject('未知错误！！！！！');
	                });
	            } else {
	                return res.json();
	            }
	        }
	        return Promise.reject((0, _format2.default)('服务器错误 {status} {statusText}', res));
	    }).then(function (json) {
	        return _request2.default.interceptor.response(json, config);
	    }, function (reason) {
	        return Promise.reject(_request2.default.interceptor.responseError(reason, config));
	    }).then(function (json) {
	        if (sucCode.indexOf(json.code) > -1) {
	            return json;
	        } else {
	            console.log('%c*** Request url: %s、code: %s、msg: %s', color, url, json.code, json.msg);
	            return Promise.reject(json.msg || '未知错误');
	        }
	    }).catch(function (reason) {
	        console.log('%c*** Request catch %s', color, reason);
	        // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
	        return Promise.reject('' + reason);
	    });
	};

	var Request = function Request(url, options) {
	    this._data = {};
	    this.url = url;
	    this.sucCode = [0];
	    this.options = Object.assign({
	        method: 'get',
	        headers: {
	            'Accept': 'application/json'
	        },
	        credentials: 'include' // 需要设置才能获取cookie
	    }, options);
	};
	Request.prototype = {
	    code: function code(codes) {
	        if (_underscore2.default.isArray(codes)) {
	            this.sucCode = this.sucCode.concat(codes);
	        } else {
	            this.sucCode.push(codes);
	        }
	        return this;
	    },
	    data: function data(_data) {
	        // 过滤null  undefined 只Object 类型。
	        this._data = Object.assign({}, _data);
	        if (toString.call(this._data) === '[object Object]') {
	            this._data = _underscore2.default.pick(this._data, function (value) {
	                return value !== null && value !== undefined;
	            });
	        }
	        return this;
	    },
	    json: function json(_data) {
	        this._data = JSON.stringify(_data);
	        return this;
	    },
	    _getConfig: function _getConfig() {
	        var t = this;
	        return {
	            url: t.url,
	            data: t._data,
	            sucCode: t.sucCode,
	            options: t.options
	        };
	    },
	    _setConfig: function _setConfig(d) {
	        var t = this;
	        t.url = d.url;
	        t._data = d.data;
	        t.sucCode = d.sucCode;
	        t.options = d.options;
	    },
	    _beforeRequest: function _beforeRequest() {
	        var t = this;
	        return processRequest(t._getConfig()).then(t._setConfig.bind(t));
	    },
	    get: function get() {
	        var t = this;

	        return t._beforeRequest().then(function () {
	            var p = (0, _param2.default)(t._data);
	            var newUrl = t.url + (t.url.indexOf('?') > -1 ? '&' : '?') + p;
	            return processResponse(fetch(newUrl, t.options), t.url, t.sucCode, t._getConfig());
	        });
	    },
	    post: function post() {
	        var t = this;
	        var data = t._data;
	        var body;
	        t.options.method = 'post';

	        return t._beforeRequest().then(function () {
	            // 兼容传[json string] [formData] 的情况,暂时这两种. 其他的看情况
	            if (toString.call(data) === '[object Object]') {
	                body = new FormData();
	                for (var e in data) {
	                    body.append(e, data[e]);
	                }
	            } else {
	                body = data;
	            }
	            t.options.body = body;
	            return processResponse(fetch(t.url, t.options), t.url, t.sucCode, t._getConfig());
	        });
	    }
	};

	var RequestFactory = function RequestFactory(url, options) {
	    return new Request(url, options);
	};

	exports.default = RequestFactory;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (dom) {

	    var topInRange = false;
	    var leftInRange = false;

	    // dom各边距离 窗口顶边、左边的距离
	    var BCR = dom.getBoundingClientRect();

	    if (BCR.top < window.innerHeight && BCR.bottom > 0) topInRange = true;

	    if (BCR.left < window.innerHeight && BCR.right > 0) leftInRange = true;

	    return topInRange && leftInRange;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = _react2.default.createClass({
	    displayName: "Header",
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            { className: "header" },
	            this.props.left ? this.props.left : _react2.default.createElement(
	                "a",
	                { href: "", className: "button button-link pull-left header-left" },
	                _react2.default.createElement("i", { className: "icon-angle-left" }),
	                "返回"
	            ),
	            this.props.right ? this.props.right : null,
	            _react2.default.createElement(
	                "h1",
	                { className: "header-title" },
	                this.props.title
	            )
	        );
	    },
	    handleBack: function handleBack(event) {
	        event.stopPropagation();
	        event.preventDefault();

	        if (this.props.history) {
	            this.props.history.go(-1);
	        }
	    }
	});

	exports.default = Header;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _loading = __webpack_require__(5);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Infinite = _react2.default.createClass({
	    displayName: 'Infinite',
	    getInitialState: function getInitialState() {
	        return {
	            loading: false
	        };
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            onBottom: function onBottom() {},
	            bottomOffset: 50 + 50
	        };
	    },
	    render: function render() {
	        var cn = (0, _classnames2.default)('infinite', this.props.className);
	        return _react2.default.createElement(
	            'div',
	            _extends({ ref: 'infinite' }, this.props, { className: cn, onScroll: this.handleScroll }),
	            this.props.children,
	            _react2.default.createElement(
	                'div',
	                { className: 'infinite-loading' },
	                this.state.loading && _react2.default.createElement(_loading2.default, null)
	            )
	        );
	    },

	    timer: null,
	    handleBottom: function handleBottom() {
	        var _this = this;

	        clearTimeout(this.timer);
	        this.setState({
	            loading: true
	        });

	        var result = this.props.onBottom();
	        // 简单判断是否promise
	        if (result && result.then) {
	            result.then(function () {
	                _this.setState({
	                    loading: false
	                });
	            }, function () {
	                _this.setState({
	                    loading: false
	                });
	            });
	        } else {
	            // 假设要点时间
	            this.timer = setTimeout(function () {
	                _this.setState({
	                    loading: false
	                });
	            }, 500);
	        }
	    },

	    scrollTop: 0,
	    handleScroll: function handleScroll(event) {
	        // 向下滚动才触发
	        if (event.target.scrollTop > this.scrollTop) {
	            if (!this.state.loading) {
	                // 一定阈值才触发
	                if (event.target.clientHeight + event.target.scrollTop + this.props.bottomOffset >= event.target.scrollHeight) {
	                    this.handleBottom();
	                }
	            }
	        }
	        this.scrollTop = event.target.scrollTop;
	    }
	});

	exports.default = Infinite;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var containerId = '_mgm_nprogress_container' + (Math.random() + '').slice(2);
	var container = document.getElementById(containerId);
	if (!container) {
	    container = document.createElement('div');
	    container.className = 'nprogress-container';
	    container.id = containerId;
	    document.body.appendChild(container);
	}

	var NProgressStatics = {
	    start: function start() {
	        _reactDom2.default.unmountComponentAtNode(container);
	        _reactDom2.default.render(_react2.default.createElement(NProgress, null), container);
	    },
	    done: function done() {
	        _reactDom2.default.render(_react2.default.createElement(NProgress, { precent: 100 }), container);
	        setTimeout(function () {
	            _reactDom2.default.unmountComponentAtNode(container);
	        }, 250);
	    }
	};

	var NProgress = _react2.default.createClass({
	    displayName: 'NProgress',

	    statics: NProgressStatics,
	    getInitialState: function getInitialState() {
	        return {
	            precent: 0
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.precent) {
	            clearTimeout(this.timer);
	            this.setState({
	                precent: nextProps.precent
	            });
	        }
	    },
	    render: function render() {
	        var percent = 100 - this.state.precent;
	        return _react2.default.createElement(
	            'div',
	            { className: 'nprogress', style: { transform: "translate3d(-" + percent + "%, 0px, 0px)" } },
	            _react2.default.createElement('div', { className: 'nprogress-head' })
	        );
	    },
	    componentDidMount: function componentDidMount() {
	        this.doInc();
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        clearTimeout(this.timer);
	    },
	    doInc: function doInc() {
	        var t = this;
	        t.timer = setTimeout(function () {
	            t.setState({
	                precent: t.state.precent + (100 - t.state.precent) * 0.2
	            });
	            if (t.state.precent < 90) {
	                t.doInc();
	            }
	        }, 150);
	    }
	});

	exports.default = NProgress;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _flex = __webpack_require__(4);

	var _flex2 = _interopRequireDefault(_flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Page = _react2.default.createClass({
	    displayName: 'Page',

	    propTypes: {
	        children: _react.PropTypes.node,
	        className: _react.PropTypes.string,
	        white: _react.PropTypes.bool,
	        header: _react.PropTypes.node,
	        tabbar: _react.PropTypes.node
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {};
	    },
	    render: function render() {
	        var classes = (0, _classnames2.default)({
	            'page': true,
	            'page-white': this.props.white
	        }, this.props.className);
	        // 如果没有header tabbar 就简化html结构
	        if (this.props.header || this.props.tabbar) {
	            return _react2.default.createElement(
	                _flex2.default,
	                _extends({ column: true }, this.props, { className: classes }),
	                this.props.header && _react2.default.createElement(
	                    _flex2.default,
	                    { column: true },
	                    this.props.header
	                ),
	                _react2.default.createElement(
	                    _flex2.default,
	                    { flex: true, column: true, className: 'page-content block' },
	                    this.props.children
	                ),
	                this.props.tabbar && _react2.default.createElement(
	                    _flex2.default,
	                    { column: true, className: 'page-tabbar' },
	                    this.props.tabbar
	                )
	            );
	        } else {
	            return _react2.default.createElement(
	                'div',
	                { className: classes },
	                this.props.children
	            );
	        }
	    }
	});

	exports.default = Page;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _flex = __webpack_require__(4);

	var _flex2 = _interopRequireDefault(_flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Slider = _react2.default.createClass({
	    displayName: 'Slider',
	    getInitialState: function getInitialState() {
	        return {
	            count: 1,
	            sliderWidth: 0,
	            touchObject: null,
	            dragging: false,
	            transition: false,
	            x: 0
	        };
	    },
	    render: function render() {
	        var to = this.state.touchObject;
	        var offset = to ? to.x - to.startX + this.state.x : this.state.x;

	        var cn = (0, _classnames2.default)({
	            'slider-transition': this.state.transition
	        }, this.props.className);

	        var style = {
	            WebkitTransform: 'translate3d(' + offset + 'px, 0, 0)',
	            transform: 'translate3d(' + offset + 'px, 0, 0)'
	        };

	        return _react2.default.createElement(
	            'div',
	            { className: 'slider' },
	            _react2.default.createElement(
	                _flex2.default,
	                _extends({}, this.props, {
	                    ref: 'slider',
	                    className: cn,
	                    onMouseDown: this.swipeStart,
	                    onMouseMove: this.state.dragging ? this.swipeMove : null,
	                    onMouseUp: this.swipeEnd,
	                    onMouseLeave: this.state.dragging ? this.swipeEnd : null,
	                    onTouchStart: this.swipeStart,
	                    onTouchMove: this.state.dragging ? this.swipeMove : null,
	                    onTouchEnd: this.swipeEnd,
	                    onTouchCancel: this.state.dragging ? this.swipeEnd : null,
	                    style: style
	                }),
	                this.renderChild()
	            ),
	            this.renderFlag()
	        );
	    },
	    renderChild: function renderChild() {
	        if (toString.call(this.props.children) === '[object Array]') {
	            return _underscore2.default.map(this.props.children, function (value, i) {
	                return _react2.default.cloneElement(value, {
	                    style: _underscore2.default.extend({}, value.props.style, { width: '100%' }),
	                    className: (0, _classnames2.default)('slider-cell flex flex-none', value.className),
	                    key: i
	                });
	            });
	        } else {
	            return this.props.children;
	        }
	    },
	    renderFlag: function renderFlag() {
	        var _this = this;

	        //
	        return _react2.default.createElement(
	            _flex2.default,
	            { justifyCenter: true, className: 'slider-flag' },
	            _underscore2.default.map(_underscore2.default.range(this.state.count), function (value, i) {
	                return _react2.default.createElement('span', {
	                    className: (0, _classnames2.default)({ active: Math.abs(_this.state.x / _this.state.sliderWidth) === i }),
	                    key: i });
	            })
	        );
	    },
	    componentDidMount: function componentDidMount() {
	        this.setSliderWidth();
	        this.setState({
	            count: toString.call(this.props.children) === '[object Array]' ? this.props.children.length : 1
	        });
	        window.addEventListener('resize', this.setSliderWidth);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        window.removeEventListener('resize', this.setSliderWidth);
	    },
	    setSliderWidth: function setSliderWidth() {
	        var slider = _reactDom2.default.findDOMNode(this.refs.slider);
	        this.setState({
	            sliderWidth: slider.offsetWidth
	        });
	    },
	    getX: function getX(event) {
	        return event.touches !== undefined ? event.touches[0].pageX : event.clientX;
	    },
	    swipeStart: function swipeStart(event) {
	        this.setState({
	            dragging: true,
	            transition: false,
	            touchObject: {
	                startX: this.getX(event),
	                x: this.getX(event)
	            }
	        });
	    },
	    swipeMove: function swipeMove(event) {
	        this.setState({
	            dragging: true,
	            transition: false,
	            touchObject: _underscore2.default.extend({}, this.state.touchObject, {
	                x: this.getX(event)
	            })
	        });
	    },
	    swipeEnd: function swipeEnd() {
	        if (!this.state.dragging) {
	            return;
	        }
	        var to = this.state.touchObject;
	        var diff = to.x - to.startX;
	        var x = this.state.x;
	        if (to && Math.abs(diff) > 50) {
	            if (diff > 0) {
	                x += this.state.sliderWidth;
	            } else {
	                x -= this.state.sliderWidth;
	            }
	            if (x > 0) {
	                x = 0;
	            }
	            if (x < -(this.state.sliderWidth * (this.state.count - 1))) {
	                x = -(this.state.sliderWidth * (this.state.count - 1));
	            }
	            this.setState({
	                transition: true,
	                dragging: false,
	                touchObject: null,
	                x: x
	            });
	        } else {
	            this.setState({
	                transition: true,
	                dragging: false,
	                touchObject: null
	            });
	        }
	    }
	});

	exports.default = Slider;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropTypes = _react2.default.PropTypes;

	var prefix = '_react-gmm_';

	var Storage = _react2.default.createClass({
	    displayName: 'Storage',

	    statics: {
	        set: function set(key, value) {
	            localStorage.setItem(prefix + key, JSON.stringify(value));
	        },
	        get: function get(key) {
	            var v = localStorage.getItem(prefix + key);
	            return v ? JSON.parse(v) : v;
	        },
	        remove: function remove(key) {
	            localStorage.removeItem(prefix + key);
	        },
	        clear: function clear() {
	            localStorage.clear();
	        },
	        getAll: function getAll() {
	            var result = {};
	            var key;
	            for (var i = 0; i < localStorage.length; i++) {
	                key = localStorage.key(i);
	                if (key.startsWith(prefix)) {
	                    key = key.slice(prefix.length);
	                    result[key] = Storage.get(key);
	                }
	            }
	            return _underscore2.default.keys(result) ? result : null;
	        }
	    },
	    propTypes: {
	        name: PropTypes.string.isRequired,
	        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	        autoSave: PropTypes.bool
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            autoSave: true
	        };
	    },
	    save: function save() {
	        Storage.set(this.props.name, value);
	    },
	    componentWillUpdate: function componentWillUpdate() {
	        if (this.props.autoSave) {
	            this.save();
	        }
	    },
	    componentWillMount: function componentWillMount() {
	        this.save();
	    },
	    render: function render() {
	        return null;
	    }
	});

	exports.default = Storage;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Textarea = _react2.default.createClass({
	    displayName: 'Textarea',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            wrapProps: {}
	        };
	    },
	    render: function render() {
	        var cn = (0, _classnames2.default)('textarea-adapter', this.props.wrapProps.className);
	        return _react2.default.createElement(
	            'div',
	            _extends({}, this.props.wrapProps, { className: cn }),
	            _react2.default.createElement(
	                'pre',
	                null,
	                this.props.value
	            ),
	            _react2.default.createElement('textarea', _extends({}, this.props, { className: (0, _classnames2.default)("weui_textarea", this.props.className) }))
	        );
	    }
	});

	exports.default = Textarea;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _mask = __webpack_require__(10);

	var _mask2 = _interopRequireDefault(_mask);

	var _loading = __webpack_require__(5);

	var _loading2 = _interopRequireDefault(_loading);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var toastsContainerId = '_mgm_toasts_container' + (Math.random() + '').slice(2);
	var toastsContainer = document.getElementById(toastsContainerId);

	if (!toastsContainer) {
	    toastsContainer = document.createElement('div');
	    toastsContainer.className = 'mgm-toasts';
	    toastsContainer.id = toastsContainerId;
	    document.body.appendChild(toastsContainer);
	}

	var ToastStatics = {};
	ToastStatics = {
	    _queue: [],
	    _ing: false,
	    _render: function _render() {
	        if (ToastStatics._ing) {
	            return;
	        }

	        var options = ToastStatics._queue.shift();
	        if (options === undefined) {
	            return;
	        }

	        ToastStatics._ing = true;
	        var _b_onFinish = options.onFinish;

	        var div = document.createElement('div');
	        div.className = 'mgm-toasts-cell';
	        toastsContainer.appendChild(div);

	        options.onFinish = function () {
	            if (_b_onFinish) {
	                _b_onFinish();
	            }
	            toastsContainer.removeChild(div);
	            ToastStatics._ing = false;
	            if (ToastStatics._queue.length > 0) {
	                setTimeout(function () {
	                    ToastStatics._render();
	                }, 500);
	            }
	        };

	        _reactDom2.default.render(_react2.default.createElement(
	            Toast,
	            options,
	            options.children
	        ), div);
	        return div;
	    },
	    clear: function clear(div) {
	        _reactDom2.default.unmountComponentAtNode(div);
	        // 上一步就会把div给移除. 估不需要了
	        //toastsContainer.removeChild(div);
	    },
	    tip: function tip(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        options = _underscore2.default.extend({ show: true }, options);
	        ToastStatics._queue.push(options);
	        return ToastStatics._render();
	    },
	    success: function success(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ success: true }, options));
	    },
	    info: function info(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ info: true }, options));
	    },
	    warning: function warning(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ warning: true }, options));
	    },
	    danger: function danger(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ danger: true }, options));
	    },
	    loading: function loading(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ loading: true }, options));
	    }
	};

	// 请记得要在文档的末尾增加Toast
	var Toast = _react2.default.createClass({
	    displayName: 'Toast',

	    statics: ToastStatics,
	    propTypes: {
	        onClick: _react2.default.PropTypes.func,
	        onFinish: _react2.default.PropTypes.func,
	        show: _react2.default.PropTypes.bool,
	        time: _react2.default.PropTypes.any,
	        loading: _react2.default.PropTypes.bool,
	        icon: _react2.default.PropTypes.any,
	        success: _react2.default.PropTypes.bool,
	        info: _react2.default.PropTypes.bool,
	        warning: _react2.default.PropTypes.bool,
	        danger: _react2.default.PropTypes.bool
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            show: false,
	            time: 2000,
	            loading: false,
	            icon: null,
	            onClick: function onClick() {},
	            onFinish: function onFinish() {}
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            show: this.props.show
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.show !== undefined) {
	            this.setState({
	                show: nextProps.show
	            });
	        }
	    },
	    render: function render() {
	        var icon = this.props.icon;
	        var children = this.props.children;

	        if (this.props.loading) {
	            icon = _react2.default.createElement(_loading2.default, null);
	            children = children || '加载中...';
	        } else if (this.props.success) {
	            icon = _react2.default.createElement('i', { className: 'ifont ifont-success' });
	        } else if (this.props.info) {
	            icon = _react2.default.createElement('i', { className: 'ifont ifont-info-circle' });
	        } else if (this.props.warning) {
	            icon = _react2.default.createElement('i', { className: 'ifont ifont-warning' });
	        } else if (this.props.danger) {
	            icon = _react2.default.createElement('i', { className: 'ifont ifont-close' });
	        }

	        return _react2.default.createElement(
	            'div',
	            { style: { display: this.state.show ? 'block' : 'none' } },
	            _react2.default.createElement(_mask2.default, { show: this.state.show, opacity: 0.1 }),
	            _react2.default.createElement(
	                'div',
	                { className: 'toast-container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'toast', onClick: this.handleClick },
	                    icon,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'toast-content' },
	                        children
	                    )
	                )
	            )
	        );
	    },

	    timer: null,
	    componentDidMount: function componentDidMount() {
	        var t = this;
	        if (t.props.time) {
	            t.timer = setTimeout(function () {
	                t.setState({
	                    show: false
	                });
	                t.handleFinish();
	            }, t.props.time);
	        }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        var t = this;
	        clearTimeout(t.timer);
	        t.setState({
	            show: false
	        });
	        t.handleFinish();
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        if (this.state.show === false) {
	            this.handleFinish();
	        }
	    },
	    handleClick: function handleClick() {
	        this.props.onClick();
	    },

	    isFinished: false,
	    handleFinish: function handleFinish() {
	        if (!this.isFinished) {
	            this.isFinished = true;
	            this.props.onFinish();
	        }
	    }
	});

	exports.default = Toast;

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;