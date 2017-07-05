'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Header = require('./Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _Backend = require('./Backend.js');

var _Backend2 = _interopRequireDefault(_Backend);

var _Loading = require('./Loading.js');

var _Loading2 = _interopRequireDefault(_Loading);

var _GlobalStore = require('./GlobalStore.js');

var _Animation = require('./Animation.js');

var _mobxReact = require('mobx-react');

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