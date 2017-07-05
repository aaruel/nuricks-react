
          window.__NEXT_REGISTER_PAGE('/dashboard', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fadeOut = exports.fadeIn = undefined;

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(38);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var extractElement = function extractElement(element) {
    return document.querySelector(element);
};

var fadeIn = exports.fadeIn = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_element) {
        var element, op, pro;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        element = extractElement(_element);
                        op = 0.1; // initial opacity

                        if (!(element.style.opacity <= 0.1)) {
                            _context.next = 9;
                            break;
                        }

                        pro = new _promise2.default(function (resolve, reject) {
                            var timer = setInterval(function () {
                                if (op >= 1) {
                                    clearInterval(timer);
                                    resolve("ok");
                                }
                                element.style.opacity = op;
                                op += 0.025;
                            }, 10);
                        });
                        _context.next = 6;
                        return pro;

                    case 6:
                        return _context.abrupt("return", _context.sent);

                    case 9:
                        return _context.abrupt("return");

                    case 10:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function fadeIn(_x) {
        return _ref.apply(this, arguments);
    };
}();

var fadeOut = exports.fadeOut = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_element) {
        var element, op, pro;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        element = extractElement(_element);
                        op = 1; // initial opacity

                        if (!(element.style.opacity >= 1)) {
                            _context2.next = 9;
                            break;
                        }

                        pro = new _promise2.default(function (resolve, reject) {
                            var timer = setInterval(function () {
                                if (op <= 0.1) {
                                    clearInterval(timer);
                                    resolve("ok");
                                }
                                element.style.opacity = op;
                                op -= 0.1;
                            }, 10);
                        });
                        _context2.next = 6;
                        return pro;

                    case 6:
                        return _context2.abrupt("return", _context2.sent);

                    case 9:
                        return _context2.abrupt("return");

                    case 10:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    }));

    return function fadeOut(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/aaronruel/Documents/nuricks-react/components/Animation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aaronruel/Documents/nuricks-react/components/Animation.js"); } } })();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(549);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BACKEND_URL = 'http://localhost:3000/api';
var withCreds = {
    credentials: 'include'
};

var Backend = function () {
    function Backend() {
        (0, _classCallCheck3.default)(this, Backend);
    }

    (0, _createClass3.default)(Backend, null, [{
        key: 'request',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(url, options) {
                var _r;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch(url, options);

                            case 2:
                                _r = _context.sent;
                                _context.next = 5;
                                return _r.json();

                            case 5:
                                return _context.abrupt('return', _context.sent);

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function request(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return request;
        }()
    }, {
        key: 'getAuth',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return Backend.request(BACKEND_URL + '/auth/', withCreds);

                            case 2:
                                return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getAuth() {
                return _ref2.apply(this, arguments);
            }

            return getAuth;
        }()
    }, {
        key: 'logout',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return Backend.request(BACKEND_URL + '/auth/logout', withCreds);

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function logout() {
                return _ref3.apply(this, arguments);
            }

            return logout;
        }()
    }, {
        key: 'getPossibleEvents',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return Backend.request(BACKEND_URL + '/events/queryPossibleEvents');

                            case 2:
                                return _context4.abrupt('return', _context4.sent);

                            case 3:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getPossibleEvents() {
                return _ref4.apply(this, arguments);
            }

            return getPossibleEvents;
        }()
    }, {
        key: 'getMusicianTickets',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(fbid) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return Backend.request(BACKEND_URL + '/tickets/queryTicketByMusician/' + fbid);

                            case 2:
                                return _context5.abrupt('return', _context5.sent);

                            case 3:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getMusicianTickets(_x3) {
                return _ref5.apply(this, arguments);
            }

            return getMusicianTickets;
        }()
    }, {
        key: 'getEventInfoFromID',
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(id) {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return Backend.request(BACKEND_URL + '/events/getEventInfoFromID/' + id);

                            case 2:
                                return _context6.abrupt('return', _context6.sent);

                            case 3:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getEventInfoFromID(_x4) {
                return _ref6.apply(this, arguments);
            }

            return getEventInfoFromID;
        }()
    }]);

    return Backend;
}();

exports.default = Backend;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/aaronruel/Documents/nuricks-react/components/Backend.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aaronruel/Documents/nuricks-react/components/Backend.js"); } } })();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadingRelative = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/aaronruel/Documents/nuricks-react/components/Loading.js";

exports.default = function () {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("img", { style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            width: "100px",
            height: "100px"
        }, src: "/static/loading.svg", __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }));
};

var LoadingRelative = exports.LoadingRelative = function LoadingRelative() {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement("img", { style: {
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-50%; -50%)",
            width: "100px",
            height: "100px"
        }, src: "/static/loading.svg", __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/aaronruel/Documents/nuricks-react/components/Loading.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aaronruel/Documents/nuricks-react/components/Loading.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(96);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(38);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(542);

var _link2 = _interopRequireDefault(_link);

var _Content = __webpack_require__(551);

var _Content2 = _interopRequireDefault(_Content);

var _Popup = __webpack_require__(554);

var _Popup2 = _interopRequireDefault(_Popup);

var _reactSoundcloudWidget = __webpack_require__(556);

var _reactSoundcloudWidget2 = _interopRequireDefault(_reactSoundcloudWidget);

var _Backend = __webpack_require__(544);

var _Backend2 = _interopRequireDefault(_Backend);

var _Loading = __webpack_require__(545);

var _mobxReact = __webpack_require__(540);

var _mobx = __webpack_require__(541);

var _Utils = __webpack_require__(555);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _jsxFileName = '/Users/aaronruel/Documents/nuricks-react/pages/dashboard.js?entry',
    _dec2,
    _class2,
    _dec3,
    _class3;

// EDITOR PANEL
var Editor = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(Editor, _React$Component);

    function Editor(props) {
        (0, _classCallCheck3.default)(this, Editor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Editor.__proto__ || (0, _getPrototypeOf2.default)(Editor)).call(this, props));

        _this.state = {
            editing: false,
            biolinks: [{ cls: "fa fa-instagram" }, { cls: "fa fa-facebook" }, { cls: "fa fa-youtube-play" }, { cls: "fa fa-soundcloud" }],
            bioEditLinks: [{
                id: "instagram-url",
                placeholder: "Instagram",
                val: function val() {
                    return _this.props.store.user.instagramLink;
                }
            }, {
                id: "facebook-url",
                placeholder: "Facebook",
                val: function val() {
                    return _this.props.store.user.facebookLink;
                }
            }, {
                id: "youtube-url",
                placeholder: "Youtube",
                val: function val() {
                    return _this.props.store.user.youtubeLink;
                }
            }, {
                id: "soundcloud-url",
                placeholder: "Soundcloud",
                val: function val() {
                    return _this.props.store.user.soundcloudLink;
                }
            }, {
                id: "profile-url",
                placeholder: "Profile Picture URL",
                val: function val() {
                    return _this.props.store.user.picture_url;
                }
            }]
        };
        return _this;
    }

    // Panel edit toggle


    (0, _createClass3.default)(Editor, [{
        key: 'toggleEditing',
        value: function toggleEditing() {
            if (this.state.editing) {
                _Popup2.default.trigger();
            }
            this.setState({ editing: !this.state.editing });
        }

        // Editor render

    }, {
        key: 'render',
        value: function render() {
            var bannerStyle = {
                backgroundImage: 'url("/static/banner.jpg")'
            };
            var bannerPfP = {
                backgroundImage: 'url("' + this.props.store.user.picture_url + '")'

                // Normal banner state
            };var banner = _react2.default.createElement('div', { style: bannerStyle, className: 'bioBanner', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('div', { style: bannerPfP, className: 'bioPic', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }), _react2.default.createElement('ul', { className: 'bioLinks', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, this.state.biolinks.map(function (l) {
                return _react2.default.createElement('li', { key: l.cls, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                    }
                }, _react2.default.createElement('i', { className: l.cls, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    }
                })));
            })), _react2.default.createElement('span', { onClick: this.toggleEditing.bind(this), className: 'edit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, 'EDIT ', _react2.default.createElement('i', { className: 'fa fa-edit', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            })));

            // Editing banner state
            if (this.state.editing) {
                banner = _react2.default.createElement('div', { style: bannerStyle, className: 'bioBanner', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 96
                    }
                }, _react2.default.createElement('div', { style: bannerPfP, className: 'bioPic', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                    }
                }), _react2.default.createElement('span', { onClick: this.toggleEditing.bind(this), className: 'submit', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 98
                    }
                }, 'SAVE ', _react2.default.createElement('i', { className: 'fa fa-lock', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 98
                    }
                })), _react2.default.createElement('ul', { className: 'bioEditLinks', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99
                    }
                }, this.state.bioEditLinks.map(function (l) {
                    return _react2.default.createElement('input', { defaultValue: l.val(), key: l.placeholder, type: 'text', id: l.id, placeholder: l.placeholder, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 102
                        }
                    });
                })), _react2.default.createElement('span', { className: 'uploadBanner', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                    }
                }, 'UPLOAD BANNER ', _react2.default.createElement('i', { className: 'fa fa-camera', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                    }
                })));
            }

            // Main banner render
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement(_Popup2.default, { type: 'editSuccess', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }), banner);
        }
    }]);

    return Editor;
}(_react2.default.Component)) || _class) || _class);

// MUSICIAN INFO PANEL

var Info = (_dec2 = (0, _mobxReact.inject)('store'), _dec2(_class2 = (0, _mobxReact.observer)(_class2 = function (_React$Component2) {
    (0, _inherits3.default)(Info, _React$Component2);

    function Info(props) {
        (0, _classCallCheck3.default)(this, Info);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Info.__proto__ || (0, _getPrototypeOf2.default)(Info)).call(this, props));

        _this2.state = { playUrl: [] };
        return _this2;
    }

    // Extract soundtrack link from bio


    (0, _createClass3.default)(Info, [{
        key: 'soundcloudParser',
        value: function soundcloudParser(content) {
            var regex = new RegExp(/([\S]+)?(soundcloud\.com[^\s]+)/g);
            var thot = this;
            function recurse(capture) {
                if (capture != null) {
                    if (capture[2]) {
                        var soundcloudLink = "https://" + capture[2];
                        return soundcloudLink;
                    }
                } else {
                    return content;
                }
            }
            return recurse(regex.exec(content));
        }

        // replace with bio load

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var pu = this.state.playUrl;
            var bio = "hey https://soundcloud.com/remi112/howdy-bitch-reupload";
            this.setState({ playUrl: pu.concat(this.soundcloudParser(bio)) });
        }

        // Musician panel render

    }, {
        key: 'render',
        value: function render() {
            var user = this.props.store.user;

            var email = null;
            var phoneNumber = null;

            if (user.email) {
                email = _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 163
                    }
                }, _react2.default.createElement('label', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                    }
                }, 'Email: '), _react2.default.createElement('div', { id: 'artistEmail', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                    }
                }, user.email));
            }
            if (user.phoneNumber) {
                phoneNumber = _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171
                    }
                }, _react2.default.createElement('label', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                    }
                }, 'Phone Number: '), _react2.default.createElement('div', { id: 'artistPhone', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 173
                    }
                }, user.phoneNumber));
            }

            return _react2.default.createElement('div', { className: 'container half bio', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, 'Share your profile with fans:'), _react2.default.createElement(_link2.default, { href: '/musician/' + user.urlValue, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, 'http://www.nrshows.com/musician/', user.urlValue)), email, phoneNumber, _react2.default.createElement('h1', { id: 'stage-name', className: 'title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, user.stageName), _react2.default.createElement('div', { id: 'bio', style: { whiteSpace: "pre-wrap" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, user.bio, this.state.playUrl.map(function (url) {
                return _react2.default.createElement(_reactSoundcloudWidget2.default, { key: url, url: url, opts: { visual: true, auto_play: false }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 188
                    }
                });
            })));
        }
    }]);

    return Info;
}(_react2.default.Component)) || _class2) || _class2);

// SHOW PANEL

var Shows = (_dec3 = (0, _mobxReact.inject)('store'), _dec3(_class3 = (0, _mobxReact.observer)(_class3 = function (_React$Component3) {
    (0, _inherits3.default)(Shows, _React$Component3);

    function Shows(props) {
        (0, _classCallCheck3.default)(this, Shows);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (Shows.__proto__ || (0, _getPrototypeOf2.default)(Shows)).call(this, props));

        _this3.state = {
            page: true,
            loading: true,
            events: [],
            shows: []
        };
        return _this3;
    }

    (0, _createClass3.default)(Shows, [{
        key: 'myShowsPage',
        value: function myShowsPage() {
            (0, _Utils.addClass)('.myShows', 'activeTab');
            this.setState({ page: true });
            (0, _Utils.removeClass)('.availableShows', 'activeTab');
        }
    }, {
        key: 'availableShowsPage',
        value: function availableShowsPage() {
            (0, _Utils.addClass)('.availableShows', 'activeTab');
            this.setState({ page: false });
            (0, _Utils.removeClass)('.myShows', 'activeTab');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            // on store change fire
            (0, _mobx.autorun)(function () {
                var fbid = _this4.props.store.user.fbid;
                if (_this4.state.loading && fbid) {
                    _promise2.default.all([_Backend2.default.getPossibleEvents(), _Backend2.default.getMusicianTickets(fbid)]).then(function (_ref) {
                        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                            events = _ref2[0],
                            tickets = _ref2[1];

                        _this4.setState({ loading: false });
                        if (events.status == "1") {
                            _this4.setState({ events: events.events });
                        }
                        if (tickets.status == "1") {
                            // get events from tickets
                            _promise2.default.all(tickets.tickets.map(function (t) {
                                return _Backend2.default.getEventInfoFromID(t.EventId);
                            })).then(function (events) {
                                // set my shows plus map number sold in each ticket
                                _this4.setState({
                                    shows: events.map(function (s, i) {
                                        return (0, _extends3.default)({}, s.event_info, {
                                            numberSold: tickets.tickets[i].numberSold
                                        });
                                    })
                                });
                            });
                        }
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.props.store.user;
            var page = null;

            if (this.state.loading) {
                // Loading page
                page = _react2.default.createElement('div', { className: 'showList', style: { height: "400px" }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 265
                    }
                }, _react2.default.createElement(_Loading.LoadingRelative, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 266
                    }
                }));
            } else if (this.state.page) {
                // My Shows page
                var display = null;
                if (this.state.shows.length) {
                    display = _react2.default.createElement('div', { className: 'showList myShowsList', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 275
                        }
                    }, this.state.shows.map(function (s) {
                        return _react2.default.createElement('div', { key: s.createdAt, className: 'showBlock', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 278
                            }
                        }, _react2.default.createElement('a', { style: { backgroundImage: 'url("' + s.image_url + '")' }, className: 'showImg', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 279
                            }
                        }), _react2.default.createElement('div', { className: 'showDetails', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 280
                            }
                        }, _react2.default.createElement('h1', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 281
                            }
                        }), _react2.default.createElement('h2', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 282
                            }
                        }, 'Headliner: ', s.headliner), _react2.default.createElement('h3', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 283
                            }
                        }, 'Address: ', s.street_name, ', ', s.city, ', ', s.state, ' ', s.zip_code), _react2.default.createElement('h3', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 284
                            }
                        }, 'Venue: ', s.venue), _react2.default.createElement('h3', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 285
                            }
                        }, '$', s.extraAtDoor, ' at door'), _react2.default.createElement('a', { className: 'btn', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 286
                            }
                        }, 'Buy Ticket'), _react2.default.createElement('a', { className: 'btn', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 287
                            }
                        }, 'Buyout Tickets'), _react2.default.createElement('h3', { className: 'progress', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 288
                            }
                        }, 'Sold: ', _react2.default.createElement('span', { className: 'sold', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 289
                            }
                        }, s.numberSold, '/', s.numberNeededToSell))));
                    }));
                } else {
                    display = _react2.default.createElement('div', { className: 'showList myShowsList', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 300
                        }
                    }, _react2.default.createElement('div', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 301
                        }
                    }, 'You are currently not apart of any shows.'));
                }

                page = display;
            } else {
                // Available Shows page

                var msgs = [];

                if (!user.email) {
                    msgs.push(_react2.default.createElement('div', { key: 'noeandp', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 315
                        }
                    }, 'You must enter your email and phone number to be eligible for shows.'));
                }
                if (!user.verified) {
                    msgs.push(_react2.default.createElement('div', { key: 'noterms', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 320
                        }
                    }, 'Please accept the terms of service before continuing.'));
                }
                if (this.state.shows.length) {
                    msgs.push(_react2.default.createElement('div', { key: 'notime', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 325
                        }
                    }, 'You can only be a part of one show at a time.'));
                }
                if (!this.state.events.length) {
                    msgs.push(_react2.default.createElement('div', { key: 'noshow', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 330
                        }
                    }, 'There are currently no possible shows.'));
                }
                if (!msgs.length) {
                    msgs.push.apply(msgs, (0, _toConsumableArray3.default)(this.state.events.map(function (s) {
                        return _react2.default.createElement('div', { key: s.createdAt, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 336
                            }
                        }, _react2.default.createElement('a', { style: { backgroundImage: 'url("' + s.image_url + '")' }, className: 'showImg', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 337
                            }
                        }), _react2.default.createElement('div', { className: 'showDetails', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 338
                            }
                        }, _react2.default.createElement('h1', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 339
                            }
                        }), _react2.default.createElement('h2', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 340
                            }
                        }, 'Headliner: ', s.headliner), _react2.default.createElement('h3', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 341
                            }
                        }, 'Address: ', s.street_name, ', ', s.city, ', ', s.state, ' ', s.zip_code), _react2.default.createElement('h3', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 342
                            }
                        }, 'Venue: ', s.venue), _react2.default.createElement('h3', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 343
                            }
                        }, '$', s.extraAtDoor, ' at door'), _react2.default.createElement('a', { className: 'btn', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 344
                            }
                        }, 'Join Show')));
                    })));
                }

                page = _react2.default.createElement('div', { className: 'showList availableShowsList', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 352
                    }
                }, msgs.map(function (m) {
                    return m;
                }));
            }

            return _react2.default.createElement('div', { className: 'container half shows', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 359
                }
            }, _react2.default.createElement('span', { className: 'showTabs', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 360
                }
            }, _react2.default.createElement('span', { onClick: this.myShowsPage.bind(this), className: 'tab myShows activeTab', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 361
                }
            }, 'My Shows'), _react2.default.createElement('span', { onClick: this.availableShowsPage.bind(this), className: 'tab availableShows', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 362
                }
            }, 'Available Shows'), page));
        }
    }]);

    return Shows;
}(_react2.default.Component)) || _class3) || _class3);

// DASHBOARD MAIN

var Dashboard = function (_React$Component4) {
    (0, _inherits3.default)(Dashboard, _React$Component4);

    function Dashboard(props) {
        (0, _classCallCheck3.default)(this, Dashboard);

        var _this5 = (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).call(this, props));

        _this5.state = {};
        return _this5;
    }

    (0, _createClass3.default)(Dashboard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Content2.default, { wrapper: 'mainWrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 382
                }
            }, _react2.default.createElement('div', { className: 'musicianWrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 384
                }
            }, _react2.default.createElement('h1', { className: 'musicianTitle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 386
                }
            }, 'Musician Dashboard'), _react2.default.createElement(Editor, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 388
                }
            }), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 390
                }
            }, _react2.default.createElement(Info, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 392
                }
            }), _react2.default.createElement(Shows, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 394
                }
            }))));
        }
    }]);

    return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/aaronruel/Documents/nuricks-react/pages/dashboard.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aaronruel/Documents/nuricks-react/pages/dashboard.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/dashboard")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(542);

var _link2 = _interopRequireDefault(_link);

var _Header = __webpack_require__(553);

var _Header2 = _interopRequireDefault(_Header);

var _Backend = __webpack_require__(544);

var _Backend2 = _interopRequireDefault(_Backend);

var _Loading = __webpack_require__(545);

var _Loading2 = _interopRequireDefault(_Loading);

var _GlobalStore = __webpack_require__(552);

var _Animation = __webpack_require__(543);

var _mobxReact = __webpack_require__(540);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _jsxFileName = '/Users/aaronruel/Documents/nuricks-react/components/Content.js';

// Injects global store for user
var NavBar = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(NavBar, _React$Component);

    function NavBar(props) {
        (0, _classCallCheck3.default)(this, NavBar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NavBar.__proto__ || (0, _getPrototypeOf2.default)(NavBar)).call(this, props));

        _this.state = {
            logoText: "NR",
            user: null,
            loading: true
        };
        return _this;
    }

    // mouse hover logic


    (0, _createClass3.default)(NavBar, [{
        key: 'logoHover',
        value: function logoHover(mouseIn) {
            if (mouseIn) {
                return this.setState({ logoText: "Nu-Ricks" });
            } else {
                return this.setState({ logoText: "NR" });
            }
        }

        // logout on click

    }, {
        key: 'logoutEvent',
        value: function logoutEvent() {
            _Backend2.default.logout().then(function () {
                window.reload();
            });
        }

        // clientside request to bundle JWT with request to get back correct auth info

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _Backend2.default.getAuth().then(function (response) {
                _this2.setState({ loading: false });
                _this2.props.loaded();
                if (response.musician_info) {
                    console.log("musician");
                    return _this2.props.store.setUser(response.musician_info, true);
                } else if (response.user_info) {
                    console.log("user");
                    return _this2.props.store.setUser(response.user_info, false);
                }
                return console.log("no one");
            });

            // attach listener to fade out nav bar
            window.addEventListener('scroll', function (e) {
                if (window.scrollY == 0) {
                    (0, _Animation.fadeIn)("#mainNav");
                } else {
                    (0, _Animation.fadeOut)("#mainNav");
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var bar = null;

            // Loading state -> Musician Nav / User Nav / Logged Out Nav
            if (this.state.loading) {
                bar = _react2.default.createElement('ul', { className: 'pages', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, 'Loading...');
            }
            // Musician Nav
            else if (this.props.store.user.isMusician) {
                    bar = _react2.default.createElement('ul', { className: 'pages', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    }, _react2.default.createElement('li', { style: { fontWeight: 900 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    }, this.props.store.user.firstName)), _react2.default.createElement('li', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    }, 'Account')), _react2.default.createElement('li', { style: { fontWeight: 100 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                        }
                    }, _react2.default.createElement(_link2.default, { href: '/dashboard', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                        }
                    }, 'Musician Dashboard'))), _react2.default.createElement('li', { style: { fontWeight: 100 }, onClick: this.logoutEvent, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        }
                    }, 'logout')));
                }
                // User Nav
                else if (this.props.store.user.isUser) {
                        bar = _react2.default.createElement('ul', { className: 'pages', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 94
                            }
                        }, _react2.default.createElement('li', { style: { fontWeight: 900 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 95
                            }
                        }, _react2.default.createElement('a', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 95
                            }
                        }, this.props.store.user.firstName)), _react2.default.createElement('li', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        }, _react2.default.createElement('a', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        }, 'Account')), _react2.default.createElement('li', { onClick: this.logoutEvent, style: { fontWeight: 100 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        }, _react2.default.createElement('a', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        }, 'logout')));
                    }
                    // Logged Out Nav
                    else {
                            bar = _react2.default.createElement('ul', { className: 'pages', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 104
                                }
                            }, _react2.default.createElement('li', { style: { fontWeight: 900 }, onClick: this.props.login, id: 'mLogin', className: 'login', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 105
                                }
                            }, _react2.default.createElement('a', {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 105
                                }
                            }, 'Login')));
                        }

            // Nav Structure
            return _react2.default.createElement('nav', { id: 'mainNav', style: { top: 0, opacity: 1 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement('div', { className: 'navbar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }), _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement('a', { className: 'logo', onMouseEnter: function onMouseEnter() {
                    return _this3.logoHover(true);
                }, onMouseLeave: function onMouseLeave() {
                    return _this3.logoHover(false);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, this.state.logoText)), bar);
        }
    }]);

    return NavBar;
}(_react2.default.Component)) || _class) || _class);

var Content = function (_React$Component2) {
    (0, _inherits3.default)(Content, _React$Component2);

    function Content(props) {
        (0, _classCallCheck3.default)(this, Content);

        var _this4 = (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).call(this, props));

        _this4.state = {
            bodyClasses: "",
            login: false,
            loading: true
        };
        _this4.store = (0, _GlobalStore.initStore)();
        return _this4;
    }

    // called on load


    (0, _createClass3.default)(Content, [{
        key: 'loaded',
        value: function loaded() {
            this.setState({ loading: false });
        }

        // called on login click

    }, {
        key: 'loginDropdown',
        value: function loginDropdown() {
            var _this5 = this;

            if (!this.state.bodyClasses) {
                this.setState({ bodyClasses: "drop", login: true }, function () {
                    (0, _Animation.fadeIn)('.loginOverlay');
                });
            } else {
                (0, _Animation.fadeOut)('.loginOverlay').then(function () {
                    _this5.setState({ bodyClasses: "", login: false });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // Login popup triggered by NavBar callback
            var login = null;
            if (this.state.login) {
                login = _react2.default.createElement('div', { className: 'loginOverlay', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                    }
                }, _react2.default.createElement('div', { className: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                    }
                }, _react2.default.createElement('a', { className: 'visitorLogin', href: 'http://localhost:3000/api/users/auth/facebook', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 166
                    }
                }, _react2.default.createElement('h1', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 167
                    }
                }, 'Visitor Access'), _react2.default.createElement('span', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 168
                    }
                }, _react2.default.createElement('i', { className: 'fa fa-facebook', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 168
                    }
                }), 'Facebook Login')), _react2.default.createElement('a', { className: 'musicianLogin', href: 'http://localhost:3000/api/musicians/auth/facebook', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 170
                    }
                }, _react2.default.createElement('h1', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171
                    }
                }, 'Musician Access'), _react2.default.createElement('span', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                    }
                }, _react2.default.createElement('i', { className: 'fa fa-facebook', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                    }
                }), 'Facebook Login'))));
            }

            // Main page structure after loading
            var main = _react2.default.createElement('div', { className: this.state.bodyClasses, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, _react2.default.createElement(_Header2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }), _react2.default.createElement(NavBar, { login: this.loginDropdown.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }), login, _react2.default.createElement('div', { className: this.props.wrapper, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, this.props.children));

            // Loading stage
            if (this.state.loading) {
                main = _react2.default.createElement('div', { className: this.state.bodyClasses, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 194
                    }
                }, _react2.default.createElement(_Header2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 195
                    }
                }), _react2.default.createElement(NavBar, { loaded: this.loaded.bind(this), login: this.loginDropdown.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 196
                    }
                }), _react2.default.createElement(_Loading2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 197
                    }
                }));
            }

            // Render structure
            return _react2.default.createElement(_mobxReact.Provider, { store: this.store, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            }, main));
        }
    }]);

    return Content;
}(_react2.default.Component);

exports.default = Content;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/aaronruel/Documents/nuricks-react/components/Content.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aaronruel/Documents/nuricks-react/components/Content.js"); } } })();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initStore = initStore;

var _defineProperty = __webpack_require__(146);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _mobx = __webpack_require__(541);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _desc, _value, _class, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;

    (0, _defineProperty2.default)(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var store = null;

var GlobalStore = (_class = function GlobalStore() {
    (0, _classCallCheck3.default)(this, GlobalStore);

    _initDefineProp(this, 'user', _descriptor, this);

    _initDefineProp(this, 'setUser', _descriptor2, this);

    this.user = {
        isMusician: false,
        isUser: false
    };
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'user', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'setUser', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this = this;

        return function (user, isMusician) {
            if (isMusician) {
                _this.user = (0, _extends3.default)({}, _this.user, { isMusician: true });
            } else {
                _this.user = (0, _extends3.default)({}, _this.user, { isUser: true });
            }
            _this.user = (0, _extends3.default)({}, _this.user, user);
        };
    }
})), _class);

function initStore() {
    if (typeof window === 'undefined') {
        return new GlobalStore();
    } else {
        if (store == null) {
            store = new GlobalStore();
        }
        return store;
    }
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/aaronruel/Documents/nuricks-react/components/GlobalStore.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aaronruel/Documents/nuricks-react/components/GlobalStore.js"); } } })();

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aaronruel/Documents/nuricks-react/components/Header.js';

exports.default = function () {
    return _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('link', { href: '/static/font-awesome.min.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), _react2.default.createElement('link', { href: '/static/app.min.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/aaronruel/Documents/nuricks-react/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aaronruel/Documents/nuricks-react/components/Header.js"); } } })();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Animation = __webpack_require__(543);

var _mobxReact = __webpack_require__(540);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _jsxFileName = '/Users/aaronruel/Documents/nuricks-react/components/Popup.js';

var Popup = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(Popup, _React$Component);

    function Popup(props) {
        (0, _classCallCheck3.default)(this, Popup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Popup, [{
        key: 'render',
        value: function render() {
            var cont = null;
            if (this.props.type == "emailSent") {
                cont = _react2.default.createElement('div', { className: 'popup puSuccess', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, 'Purchase complete!', _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }), 'Ticket sent to ', this.props.store.user.email);
            }
            if (this.props.type == "editSuccess") {
                cont = _react2.default.createElement('div', { className: 'popup puSuccess', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, 'Edit Successful');
            }
            return _react2.default.createElement('div', { className: 'popupWrapper', style: { opacity: 0, pointerEvents: "none" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, cont);
        }
    }], [{
        key: 'trigger',
        value: function trigger() {
            (0, _Animation.fadeIn)(".popupWrapper");
            setTimeout(function () {
                (0, _Animation.fadeOut)(".popupWrapper");
            }, 5000);
        }
    }]);

    return Popup;
}(_react2.default.Component)) || _class) || _class);
exports.default = Popup;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/aaronruel/Documents/nuricks-react/components/Popup.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aaronruel/Documents/nuricks-react/components/Popup.js"); } } })();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var extractElement = function extractElement(element) {
    return document.querySelector(element);
};

var addClass = exports.addClass = function addClass(_element, name) {
    var element = extractElement(_element);
    if (!element) return;
    if (element.classList) {
        element.classList.add(name);
    } else {
        element.className += ' ' + name;
    }
};

var removeClass = exports.removeClass = function removeClass(_element, name) {
    var element = extractElement(_element);
    if (!element) return;
    if (element.classList) {
        element.classList.remove(name);
    } else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/aaronruel/Documents/nuricks-react/components/Utils.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aaronruel/Documents/nuricks-react/components/Utils.js"); } } })();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ })

},[559]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FuaW1hdGlvbi5qcz9mOTVmMDk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFja2VuZC5qcz9mOTVmMDk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGluZy5qcz9mOTVmMDk0Iiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC5qcz9mOTVmMDk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGVudC5qcz9mOTVmMDk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2xvYmFsU3RvcmUuanM/Zjk1ZjA5NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz9mOTVmMDk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9wdXAuanM/Zjk1ZjA5NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1V0aWxzLmpzP2Y5NWYwOTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXh0cmFjdEVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xufVxuXG5leHBvcnQgY29uc3QgZmFkZUluID0gYXN5bmMgKF9lbGVtZW50KSA9PiB7XG4gICAgdmFyIGVsZW1lbnQgPSBleHRyYWN0RWxlbWVudChfZWxlbWVudCk7XG4gICAgdmFyIG9wID0gMC4xOyAgLy8gaW5pdGlhbCBvcGFjaXR5XG4gICAgaWYgKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA8PSAwLjEpIHtcbiAgICAgICAgdmFyIHBybyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAob3AgPj0gMSl7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFwib2tcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xuICAgICAgICAgICAgICAgIG9wICs9IDAuMDI1O1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHBybztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBmYWRlT3V0ID0gYXN5bmMgKF9lbGVtZW50KSA9PiB7XG4gICAgdmFyIGVsZW1lbnQgPSBleHRyYWN0RWxlbWVudChfZWxlbWVudCk7XG4gICAgdmFyIG9wID0gMTsgIC8vIGluaXRpYWwgb3BhY2l0eVxuICAgIGlmIChlbGVtZW50LnN0eWxlLm9wYWNpdHkgPj0gMSkge1xuICAgICAgICB2YXIgcHJvID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChvcCA8PSAwLjEpe1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcIm9rXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcbiAgICAgICAgICAgICAgICBvcCAtPSAwLjE7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhd2FpdCBwcm87XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BbmltYXRpb24uanMiLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCBCQUNLRU5EX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJztcbmNvbnN0IHdpdGhDcmVkcyA9IHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZW5kIHtcbiAgICBzdGF0aWMgYXN5bmMgcmVxdWVzdCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgX3IgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgX3IuanNvbigpO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZ2V0QXV0aCgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IEJhY2tlbmQucmVxdWVzdChgJHtCQUNLRU5EX1VSTH0vYXV0aC9gLCB3aXRoQ3JlZHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBsb2dvdXQoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBCYWNrZW5kLnJlcXVlc3QoYCR7QkFDS0VORF9VUkx9L2F1dGgvbG9nb3V0YCwgd2l0aENyZWRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0UG9zc2libGVFdmVudHMoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBCYWNrZW5kLnJlcXVlc3QoYCR7QkFDS0VORF9VUkx9L2V2ZW50cy9xdWVyeVBvc3NpYmxlRXZlbnRzYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldE11c2ljaWFuVGlja2V0cyhmYmlkKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBCYWNrZW5kLnJlcXVlc3QoYCR7QkFDS0VORF9VUkx9L3RpY2tldHMvcXVlcnlUaWNrZXRCeU11c2ljaWFuLyR7ZmJpZH1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0RXZlbnRJbmZvRnJvbUlEKGlkKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBCYWNrZW5kLnJlcXVlc3QoYCR7QkFDS0VORF9VUkx9L2V2ZW50cy9nZXRFdmVudEluZm9Gcm9tSUQvJHtpZH1gKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQmFja2VuZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8aW1nIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIlxuICAgICAgICB9fSBzcmM9XCIvc3RhdGljL2xvYWRpbmcuc3ZnXCIgLz5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGNvbnN0IExvYWRpbmdSZWxhdGl2ZSA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8aW1nIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJTsgLTUwJSlcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIlxuICAgICAgICB9fSBzcmM9XCIvc3RhdGljL2xvYWRpbmcuc3ZnXCIgLz5cbiAgICA8L2Rpdj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRlbnQuanMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXAuanMnO1xuaW1wb3J0IFNvdW5kQ2xvdWQgZnJvbSAncmVhY3Qtc291bmRjbG91ZC13aWRnZXQnO1xuaW1wb3J0IEJhY2tlbmQgZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrZW5kLmpzJztcblxuaW1wb3J0IHsgTG9hZGluZ1JlbGF0aXZlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nLmpzJztcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCB7IGF1dG9ydW4gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXRpbHMuanMnO1xuXG4vLyBFRElUT1IgUEFORUxcbkBpbmplY3QoJ3N0b3JlJykgQG9ic2VydmVyXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgYmlvbGlua3M6IFtcbiAgICAgICAgICAgICAgICB7Y2xzOiBcImZhIGZhLWluc3RhZ3JhbVwifSxcbiAgICAgICAgICAgICAgICB7Y2xzOiBcImZhIGZhLWZhY2Vib29rXCJ9LFxuICAgICAgICAgICAgICAgIHtjbHM6IFwiZmEgZmEteW91dHViZS1wbGF5XCJ9LFxuICAgICAgICAgICAgICAgIHtjbHM6IFwiZmEgZmEtc291bmRjbG91ZFwifVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpb0VkaXRMaW5rczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5zdGFncmFtLXVybFwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnN0YWdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgdmFsOiAoKSA9PiAodGhpcy5wcm9wcy5zdG9yZS51c2VyLmluc3RhZ3JhbUxpbmspXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImZhY2Vib29rLXVybFwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJGYWNlYm9va1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWw6ICgpID0+ICh0aGlzLnByb3BzLnN0b3JlLnVzZXIuZmFjZWJvb2tMaW5rKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJ5b3V0dWJlLXVybFwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJZb3V0dWJlXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbDogKCkgPT4gKHRoaXMucHJvcHMuc3RvcmUudXNlci55b3V0dWJlTGluaylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwic291bmRjbG91ZC11cmxcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU291bmRjbG91ZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWw6ICgpID0+ICh0aGlzLnByb3BzLnN0b3JlLnVzZXIuc291bmRjbG91ZExpbmspXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInByb2ZpbGUtdXJsXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2ZpbGUgUGljdHVyZSBVUkxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsOiAoKSA9PiAodGhpcy5wcm9wcy5zdG9yZS51c2VyLnBpY3R1cmVfdXJsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBhbmVsIGVkaXQgdG9nZ2xlXG4gICAgdG9nZ2xlRWRpdGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdGluZykge1xuICAgICAgICAgICAgUG9wdXAudHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmc6ICF0aGlzLnN0YXRlLmVkaXRpbmd9KTtcbiAgICB9XG5cbiAgICAvLyBFZGl0b3IgcmVuZGVyXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBiYW5uZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIi9zdGF0aWMvYmFubmVyLmpwZ1wiKWBcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYW5uZXJQZlAgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3RoaXMucHJvcHMuc3RvcmUudXNlci5waWN0dXJlX3VybH1cIilgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3JtYWwgYmFubmVyIHN0YXRlXG4gICAgICAgIHZhciBiYW5uZXIgPSAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJTdHlsZX0gY2xhc3NOYW1lPVwiYmlvQmFubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFubmVyUGZQfSBjbGFzc05hbWU9XCJiaW9QaWNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmlvTGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYmlvbGlua3MubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bC5jbHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17bC5jbHN9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXRpbmcuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiZWRpdFwiPkVESVQgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG4gICAgICAgIC8vIEVkaXRpbmcgYmFubmVyIHN0YXRlXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRpbmcpIHtcbiAgICAgICAgICAgIGJhbm5lciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJTdHlsZX0gY2xhc3NOYW1lPVwiYmlvQmFubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Jhbm5lclBmUH0gY2xhc3NOYW1lPVwiYmlvUGljXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdGluZy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJzdWJtaXRcIj5TQVZFIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmlvRWRpdExpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5iaW9FZGl0TGlua3MubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtsLnZhbCgpfSBrZXk9e2wucGxhY2Vob2xkZXJ9IHR5cGU9XCJ0ZXh0XCIgaWQ9e2wuaWR9IHBsYWNlaG9sZGVyPXtsLnBsYWNlaG9sZGVyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVwbG9hZEJhbm5lclwiPlVQTE9BRCBCQU5ORVIgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FtZXJhXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1haW4gYmFubmVyIHJlbmRlclxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UG9wdXAgdHlwZT1cImVkaXRTdWNjZXNzXCIgLz5cbiAgICAgICAgICAgICAgICB7YmFubmVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vLyBNVVNJQ0lBTiBJTkZPIFBBTkVMXG5AaW5qZWN0KCdzdG9yZScpIEBvYnNlcnZlclxuY2xhc3MgSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge3BsYXlVcmw6IFtdfVxuICAgIH1cblxuICAgIC8vIEV4dHJhY3Qgc291bmR0cmFjayBsaW5rIGZyb20gYmlvXG4gICAgc291bmRjbG91ZFBhcnNlcihjb250ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvKFtcXFNdKyk/KHNvdW5kY2xvdWRcXC5jb21bXlxcc10rKS9nKTtcbiAgICAgICAgY29uc3QgdGhvdCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2UoY2FwdHVyZSkge1xuICAgICAgICAgICAgaWYgKGNhcHR1cmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdW5kY2xvdWRMaW5rID0gXCJodHRwczovL1wiICsgY2FwdHVyZVsyXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdW5kY2xvdWRMaW5rO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWN1cnNlKHJlZ2V4LmV4ZWMoY29udGVudCkpO1xuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugd2l0aCBiaW8gbG9hZFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBwdSA9IHRoaXMuc3RhdGUucGxheVVybDtcbiAgICAgICAgY29uc3QgYmlvID0gXCJoZXkgaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9yZW1pMTEyL2hvd2R5LWJpdGNoLXJldXBsb2FkXCI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXlVcmw6IHB1LmNvbmNhdCh0aGlzLnNvdW5kY2xvdWRQYXJzZXIoYmlvKSl9KTtcbiAgICB9XG5cbiAgICAvLyBNdXNpY2lhbiBwYW5lbCByZW5kZXJcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnN0b3JlLnVzZXI7XG5cbiAgICAgICAgdmFyIGVtYWlsID0gbnVsbDtcbiAgICAgICAgdmFyIHBob25lTnVtYmVyID0gbnVsbDtcblxuICAgICAgICBpZiAodXNlci5lbWFpbCkge1xuICAgICAgICAgICAgZW1haWwgPSAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXJ0aXN0RW1haWxcIj57dXNlci5lbWFpbH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlci5waG9uZU51bWJlcikge1xuICAgICAgICAgICAgcGhvbmVOdW1iZXIgPSAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lIE51bWJlcjogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFydGlzdFBob25lXCI+e3VzZXIucGhvbmVOdW1iZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaGFsZiBiaW9cIj5cbiAgICAgICAgICAgICAgICA8aDI+U2hhcmUgeW91ciBwcm9maWxlIHdpdGggZmFuczo8L2gyPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbXVzaWNpYW4vJHt1c2VyLnVybFZhbHVlfWB9PjxhPmh0dHA6Ly93d3cubnJzaG93cy5jb20vbXVzaWNpYW4ve3VzZXIudXJsVmFsdWV9PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICB7ZW1haWx9XG4gICAgICAgICAgICAgICAge3Bob25lTnVtYmVyfVxuICAgICAgICAgICAgICAgIDxoMSBpZD1cInN0YWdlLW5hbWVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt1c2VyLnN0YWdlTmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJiaW9cIiBzdHlsZT17e3doaXRlU3BhY2U6IFwicHJlLXdyYXBcIn19Pnt1c2VyLmJpb31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGxheVVybC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb3VuZENsb3VkIGtleT17dXJsfSB1cmw9e3VybH0gb3B0cz17e3Zpc3VhbDogdHJ1ZSwgYXV0b19wbGF5OiBmYWxzZX19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8vIFNIT1cgUEFORUxcbkBpbmplY3QoJ3N0b3JlJykgQG9ic2VydmVyXG5jbGFzcyBTaG93cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFnZTogdHJ1ZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgICAgc2hvd3M6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBteVNob3dzUGFnZSgpIHtcbiAgICAgICAgYWRkQ2xhc3MoJy5teVNob3dzJywgJ2FjdGl2ZVRhYicpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlOiB0cnVlfSk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCcuYXZhaWxhYmxlU2hvd3MnLCAnYWN0aXZlVGFiJyk7XG4gICAgfVxuXG4gICAgYXZhaWxhYmxlU2hvd3NQYWdlKCkge1xuICAgICAgICBhZGRDbGFzcygnLmF2YWlsYWJsZVNob3dzJywgJ2FjdGl2ZVRhYicpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlOiBmYWxzZX0pO1xuICAgICAgICByZW1vdmVDbGFzcygnLm15U2hvd3MnLCAnYWN0aXZlVGFiJyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIG9uIHN0b3JlIGNoYW5nZSBmaXJlXG4gICAgICAgIGF1dG9ydW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmJpZCA9IHRoaXMucHJvcHMuc3RvcmUudXNlci5mYmlkO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyAmJiBmYmlkKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICBCYWNrZW5kLmdldFBvc3NpYmxlRXZlbnRzKCksXG4gICAgICAgICAgICAgICAgICAgIEJhY2tlbmQuZ2V0TXVzaWNpYW5UaWNrZXRzKGZiaWQpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAudGhlbigoW2V2ZW50cywgdGlja2V0c10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50cy5zdGF0dXMgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50czogZXZlbnRzLmV2ZW50c30pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWNrZXRzLnN0YXR1cyA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IGV2ZW50cyBmcm9tIHRpY2tldHNcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHRpY2tldHMudGlja2V0cy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9PiBCYWNrZW5kLmdldEV2ZW50SW5mb0Zyb21JRCh0LkV2ZW50SWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGV2ZW50cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBteSBzaG93cyBwbHVzIG1hcCBudW1iZXIgc29sZCBpbiBlYWNoIHRpY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93czogZXZlbnRzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzLCBpKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnMuZXZlbnRfaW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJTb2xkOiB0aWNrZXRzLnRpY2tldHNbaV0ubnVtYmVyU29sZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy5zdG9yZS51c2VyO1xuICAgICAgICB2YXIgcGFnZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgLy8gTG9hZGluZyBwYWdlXG4gICAgICAgICAgICBwYWdlID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0xpc3RcIiBzdHlsZT17e2hlaWdodDogXCI0MDBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nUmVsYXRpdmUgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnBhZ2UpIHtcbiAgICAgICAgICAgIC8vIE15IFNob3dzIHBhZ2VcbiAgICAgICAgICAgIHZhciBkaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0xpc3QgbXlTaG93c0xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3MuY3JlYXRlZEF0fSBjbGFzc05hbWU9XCJzaG93QmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtzLmltYWdlX3VybH1cIilgfX0gY2xhc3NOYW1lPVwic2hvd0ltZ1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+SGVhZGxpbmVyOiB7cy5oZWFkbGluZXJ9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWRkcmVzczoge3Muc3RyZWV0X25hbWV9LCB7cy5jaXR5fSwge3Muc3RhdGV9IHtzLnppcF9jb2RlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlZlbnVlOiB7cy52ZW51ZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke3MuZXh0cmFBdERvb3J9IGF0IGRvb3I8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPkJ1eSBUaWNrZXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCI+QnV5b3V0IFRpY2tldHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbGQ6IDxzcGFuIGNsYXNzTmFtZT1cInNvbGRcIj57cy5udW1iZXJTb2xkfS97cy5udW1iZXJOZWVkZWRUb1NlbGx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93TGlzdCBteVNob3dzTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Zb3UgYXJlIGN1cnJlbnRseSBub3QgYXBhcnQgb2YgYW55IHNob3dzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhZ2UgPSBkaXNwbGF5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQXZhaWxhYmxlIFNob3dzIHBhZ2VcblxuICAgICAgICAgICAgdmFyIG1zZ3MgPSBbXTtcblxuICAgICAgICAgICAgaWYgKCF1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICAgICAgbXNncy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIm5vZWFuZHBcIj5Zb3UgbXVzdCBlbnRlciB5b3VyIGVtYWlsIGFuZCBwaG9uZSBudW1iZXIgdG8gYmUgZWxpZ2libGUgZm9yIHNob3dzLjwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXVzZXIudmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICBtc2dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwibm90ZXJtc1wiPlBsZWFzZSBhY2NlcHQgdGhlIHRlcm1zIG9mIHNlcnZpY2UgYmVmb3JlIGNvbnRpbnVpbmcuPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1zZ3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJub3RpbWVcIj5Zb3UgY2FuIG9ubHkgYmUgYSBwYXJ0IG9mIG9uZSBzaG93IGF0IGEgdGltZS48L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1zZ3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJub3Nob3dcIj5UaGVyZSBhcmUgY3VycmVudGx5IG5vIHBvc3NpYmxlIHNob3dzLjwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbXNncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtc2dzLnB1c2goLi4udGhpcy5zdGF0ZS5ldmVudHMubWFwKFxuICAgICAgICAgICAgICAgICAgICBzID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzLmNyZWF0ZWRBdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3MuaW1hZ2VfdXJsfVwiKWB9fSBjbGFzc05hbWU9XCJzaG93SW1nXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5IZWFkbGluZXI6IHtzLmhlYWRsaW5lcn08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWRkcmVzczoge3Muc3RyZWV0X25hbWV9LCB7cy5jaXR5fSwge3Muc3RhdGV9IHtzLnppcF9jb2RlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5WZW51ZToge3MudmVudWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7cy5leHRyYUF0RG9vcn0gYXQgZG9vcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPkpvaW4gU2hvdzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhZ2UgPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93TGlzdCBhdmFpbGFibGVTaG93c0xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge21zZ3MubWFwKG0gPT4gbSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoYWxmIHNob3dzXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG93VGFic1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMubXlTaG93c1BhZ2UuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidGFiIG15U2hvd3MgYWN0aXZlVGFiXCI+TXkgU2hvd3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5hdmFpbGFibGVTaG93c1BhZ2UuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidGFiIGF2YWlsYWJsZVNob3dzXCI+QXZhaWxhYmxlIFNob3dzPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAge3BhZ2V9XG5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbi8vIERBU0hCT0FSRCBNQUlOXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb250ZW50IHdyYXBwZXI9XCJtYWluV3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdXNpY2lhbldyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXVzaWNpYW5UaXRsZVwiPk11c2ljaWFuIERhc2hib2FyZDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPEVkaXRvciAvPlxuXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZm8gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dzIC8+XG5cbiAgICAgICAgICAgIFx0XHQ8L2Rpdj5cblxuICAgICAgICAgICAgXHQ8L2Rpdj5cblxuICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGFzaGJvYXJkLmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIuanMnO1xuaW1wb3J0IEJhY2tlbmQgZnJvbSAnLi9CYWNrZW5kLmpzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZy5qcyc7XG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICcuL0dsb2JhbFN0b3JlLmpzJztcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gJy4vQW5pbWF0aW9uLmpzJztcbmltcG9ydCB7IFByb3ZpZGVyLCBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5cbi8vIEluamVjdHMgZ2xvYmFsIHN0b3JlIGZvciB1c2VyXG5AaW5qZWN0KCdzdG9yZScpIEBvYnNlcnZlclxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2dvVGV4dDogXCJOUlwiLFxuICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vdXNlIGhvdmVyIGxvZ2ljXG4gICAgbG9nb0hvdmVyKG1vdXNlSW4pIHtcbiAgICAgICAgaWYgKG1vdXNlSW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtsb2dvVGV4dDogXCJOdS1SaWNrc1wifSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7bG9nb1RleHQ6IFwiTlJcIn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbG9nb3V0IG9uIGNsaWNrXG4gICAgbG9nb3V0RXZlbnQoKSB7XG4gICAgICAgIEJhY2tlbmQubG9nb3V0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjbGllbnRzaWRlIHJlcXVlc3QgdG8gYnVuZGxlIEpXVCB3aXRoIHJlcXVlc3QgdG8gZ2V0IGJhY2sgY29ycmVjdCBhdXRoIGluZm9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgQmFja2VuZC5nZXRBdXRoKClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2FkZWQoKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5tdXNpY2lhbl9pbmZvKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtdXNpY2lhblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zdG9yZS5zZXRVc2VyKHJlc3BvbnNlLm11c2ljaWFuX2luZm8sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UudXNlcl9pbmZvKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnN0b3JlLnNldFVzZXIocmVzcG9uc2UudXNlcl9pbmZvLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJubyBvbmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGF0dGFjaCBsaXN0ZW5lciB0byBmYWRlIG91dCBuYXYgYmFyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGZhZGVJbihcIiNtYWluTmF2XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmFkZU91dChcIiNtYWluTmF2XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGJhciA9IG51bGw7XG5cbiAgICAgICAgLy8gTG9hZGluZyBzdGF0ZSAtPiBNdXNpY2lhbiBOYXYgLyBVc2VyIE5hdiAvIExvZ2dlZCBPdXQgTmF2XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIGJhciA9IChcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgLy8gTXVzaWNpYW4gTmF2XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuc3RvcmUudXNlci5pc011c2ljaWFuKSB7XG4gICAgICAgICAgICBiYXIgPSAoXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2ZvbnRXZWlnaHQ6IDkwMH19PjxhPnt0aGlzLnByb3BzLnN0b3JlLnVzZXIuZmlyc3ROYW1lfTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGE+QWNjb3VudDwvYT48L2xpPlxuICAgICAgICAgICAgXHRcdDxsaSBzdHlsZT17e2ZvbnRXZWlnaHQ6IDEwMH19PjxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGE+TXVzaWNpYW4gRGFzaGJvYXJkPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tmb250V2VpZ2h0OiAxMDB9fSBvbkNsaWNrPXt0aGlzLmxvZ291dEV2ZW50fT48YT5sb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIC8vIFVzZXIgTmF2XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuc3RvcmUudXNlci5pc1VzZXIpIHtcbiAgICAgICAgICAgIGJhciA9IChcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7Zm9udFdlaWdodDogOTAwfX0+PGE+e3RoaXMucHJvcHMuc3RvcmUudXNlci5maXJzdE5hbWV9PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT5BY2NvdW50PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLmxvZ291dEV2ZW50fSBzdHlsZT17e2ZvbnRXZWlnaHQ6IDEwMH19PjxhPmxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9nZ2VkIE91dCBOYXZcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiYXIgPSAoXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2ZvbnRXZWlnaHQ6IDkwMH19IG9uQ2xpY2s9e3RoaXMucHJvcHMubG9naW59IGlkPVwibUxvZ2luXCIgY2xhc3NOYW1lPVwibG9naW5cIj48YT5Mb2dpbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOYXYgU3RydWN0dXJlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgaWQ9XCJtYWluTmF2XCIgc3R5bGU9e3t0b3A6IDAsIG9wYWNpdHk6IDF9fT5cbiAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIFx0PGEgY2xhc3NOYW1lPVwibG9nb1wiIG9uTW91c2VFbnRlcj17KCk9PnRoaXMubG9nb0hvdmVyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpPT50aGlzLmxvZ29Ib3ZlcihmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2dvVGV4dH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIFx0e2Jhcn1cbiAgICAgICAgPC9uYXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9keUNsYXNzZXM6IFwiXCIsXG4gICAgICAgICAgICBsb2dpbjogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9yZSA9IGluaXRTdG9yZSgpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBvbiBsb2FkXG4gICAgbG9hZGVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pXG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIG9uIGxvZ2luIGNsaWNrXG4gICAgbG9naW5Ecm9wZG93bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmJvZHlDbGFzc2VzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtib2R5Q2xhc3NlczogXCJkcm9wXCIsIGxvZ2luOiB0cnVlfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZhZGVJbignLmxvZ2luT3ZlcmxheScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmYWRlT3V0KCcubG9naW5PdmVybGF5JylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtib2R5Q2xhc3NlczogXCJcIiwgbG9naW46IGZhbHNlfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gTG9naW4gcG9wdXAgdHJpZ2dlcmVkIGJ5IE5hdkJhciBjYWxsYmFja1xuICAgICAgICB2YXIgbG9naW4gPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2dpbikge1xuICAgICAgICAgICAgbG9naW4gPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbk92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgXHRcdDxhIGNsYXNzTmFtZT1cInZpc2l0b3JMb2dpblwiIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzL2F1dGgvZmFjZWJvb2tcIj5cbiAgICAgICAgICAgICAgICBcdFx0XHQ8aDE+VmlzaXRvciBBY2Nlc3M8L2gxPlxuICAgICAgICAgICAgICAgIFx0XHRcdDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCI+PC9pPkZhY2Vib29rIExvZ2luPC9zcGFuPlxuICAgICAgICAgICAgICAgIFx0XHQ8L2E+XG4gICAgICAgICAgICAgICAgXHRcdDxhIGNsYXNzTmFtZT1cIm11c2ljaWFuTG9naW5cIiBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9tdXNpY2lhbnMvYXV0aC9mYWNlYm9va1wiPlxuICAgICAgICAgICAgICAgIFx0XHRcdDxoMT5NdXNpY2lhbiBBY2Nlc3M8L2gxPlxuICAgICAgICAgICAgICAgIFx0XHRcdDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCI+PC9pPkZhY2Vib29rIExvZ2luPC9zcGFuPlxuICAgICAgICAgICAgICAgIFx0XHQ8L2E+XG4gICAgICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1haW4gcGFnZSBzdHJ1Y3R1cmUgYWZ0ZXIgbG9hZGluZ1xuICAgICAgICB2YXIgbWFpbiA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJvZHlDbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPE5hdkJhciBsb2dpbj17dGhpcy5sb2dpbkRyb3Bkb3duLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAge2xvZ2lufVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIC8vIExvYWRpbmcgc3RhZ2VcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgbWFpbiA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5ib2R5Q2xhc3Nlc30+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhciBsb2FkZWQ9e3RoaXMubG9hZGVkLmJpbmQodGhpcyl9IGxvZ2luPXt0aGlzLmxvZ2luRHJvcGRvd24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgc3RydWN0dXJlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3RoaXMuc3RvcmV9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHttYWlufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29udGVudC5qcyIsImltcG9ydCB7IGFjdGlvbiwgb2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuXG5sZXQgc3RvcmUgPSBudWxsO1xuXG5jbGFzcyBHbG9iYWxTdG9yZSB7XG4gICAgQG9ic2VydmFibGUgdXNlciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgICBpc011c2ljaWFuOiBmYWxzZSxcbiAgICAgICAgICAgIGlzVXNlcjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBhY3Rpb24gc2V0VXNlciA9ICh1c2VyLCBpc011c2ljaWFuKSA9PiB7XG4gICAgICAgIGlmIChpc011c2ljaWFuKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB7Li4udGhpcy51c2VyLCBpc011c2ljaWFuOiB0cnVlfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHsuLi50aGlzLnVzZXIsIGlzVXNlcjogdHJ1ZX07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgICAgICAgLi4udXNlclxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV3IEdsb2JhbFN0b3JlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoc3RvcmUgPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RvcmUgPSBuZXcgR2xvYmFsU3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9HbG9iYWxTdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2FwcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgPC9IZWFkPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSAnLi9BbmltYXRpb24uanMnO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuXG5AaW5qZWN0KCdzdG9yZScpIEBvYnNlcnZlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIHN0YXRpYyB0cmlnZ2VyKCkge1xuICAgICAgICBmYWRlSW4oXCIucG9wdXBXcmFwcGVyXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZhZGVPdXQoXCIucG9wdXBXcmFwcGVyXCIpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBjb250ID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PSBcImVtYWlsU2VudFwiKSB7XG4gICAgICAgICAgICBjb250ID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAgcHVTdWNjZXNzXCI+XG4gICAgICAgICAgICBcdFx0UHVyY2hhc2UgY29tcGxldGUhXG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICBcdFx0VGlja2V0IHNlbnQgdG8ge3RoaXMucHJvcHMuc3RvcmUudXNlci5lbWFpbH1cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PSBcImVkaXRTdWNjZXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnQgPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cCBwdVN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIFx0XHRFZGl0IFN1Y2Nlc3NmdWxcbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBXcmFwcGVyXCIgc3R5bGU9e3tvcGFjaXR5OiAwLCBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIn19PlxuICAgICAgICAgICAgXHR7Y29udH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9wdXAuanMiLCJjb25zdCBleHRyYWN0RWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRDbGFzcyA9IChfZWxlbWVudCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBleHRyYWN0RWxlbWVudChfZWxlbWVudCk7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIG5hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoX2VsZW1lbnQsIG5hbWUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXh0cmFjdEVsZW1lbnQoX2VsZW1lbnQpO1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIG5hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9VdGlscy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBQUE7QUFJQTtBQUNBO0FBTEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQVBBO0FBREE7QUFKQTtBQWNBO0FBQ0E7QUFmQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUFBO0FBSUE7QUFDQTtBQUxBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFQQTtBQURBO0FBSkE7QUFjQTtBQUNBO0FBZkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXZCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7QUFEQTtBQUFBO0FBQUE7O0FBYUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQURBO0FBQUE7QUFBQTs7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7O0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBN0JBO0FBbUNBO0FBRUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUdBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUpBOzs7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTs7Ozs7QUF0R0E7QUFDQTtBQXdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7QUF2RUE7QUFDQTtBQXlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUtBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQVBBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7QUFKQTtBQVVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQXhCQTtBQTJCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBckNBO0FBeUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7QUFyS0E7QUFDQTtBQTZLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBUUE7QUFSQTtBQUFBOzs7OztBQXBCQTtBQUNBO0FBK0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RaQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBSUE7QUFFQTtBQUNBOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFFQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQVBBO0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQVZBO0FBQUE7QUFhQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBVEE7QUFBQTtBQVlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUF4R0E7QUFDQTtBQStHQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRUE7QUFKQTtBQUlBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBR0E7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFFQTtBQVBBO0FBU0E7QUFFQTtBQUVBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQWhGQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQTdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBSEE7QUFKQTs7O0FBQUE7O0FBU0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQUE7OztBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFVQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUF6QkE7QUFDQTtBQUFBO0FBRUE7QUFGQTs7Ozs7QUFSQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBR0E7QUFWQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        