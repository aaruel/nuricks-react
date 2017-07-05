webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41NDJlMDZhYzVlYjRjNDg0N2M1My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkLmpzPzAxZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGVudC5qcyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cC5qcyc7XG5pbXBvcnQgU291bmRDbG91ZCBmcm9tICdyZWFjdC1zb3VuZGNsb3VkLXdpZGdldCc7XG5pbXBvcnQgQmFja2VuZCBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tlbmQuanMnO1xuXG5pbXBvcnQgeyBMb2FkaW5nUmVsYXRpdmUgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcuanMnO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IHsgYXV0b3J1biB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9VdGlscy5qcyc7XG5cbi8vIEVESVRPUiBQQU5FTFxuQGluamVjdCgnc3RvcmUnKSBAb2JzZXJ2ZXJcbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZWRpdGluZzogZmFsc2UsXG4gICAgICAgICAgICBiaW9saW5rczogW1xuICAgICAgICAgICAgICAgIHtjbHM6IFwiZmEgZmEtaW5zdGFncmFtXCJ9LFxuICAgICAgICAgICAgICAgIHtjbHM6IFwiZmEgZmEtZmFjZWJvb2tcIn0sXG4gICAgICAgICAgICAgICAge2NsczogXCJmYSBmYS15b3V0dWJlLXBsYXlcIn0sXG4gICAgICAgICAgICAgICAge2NsczogXCJmYSBmYS1zb3VuZGNsb3VkXCJ9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlvRWRpdExpbmtzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJpbnN0YWdyYW0tdXJsXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkluc3RhZ3JhbVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWw6ICgpID0+ICh0aGlzLnByb3BzLnN0b3JlLnVzZXIuaW5zdGFncmFtTGluaylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmFjZWJvb2stdXJsXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkZhY2Vib29rXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbDogKCkgPT4gKHRoaXMucHJvcHMuc3RvcmUudXNlci5mYWNlYm9va0xpbmspXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInlvdXR1YmUtdXJsXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIllvdXR1YmVcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsOiAoKSA9PiAodGhpcy5wcm9wcy5zdG9yZS51c2VyLnlvdXR1YmVMaW5rKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJzb3VuZGNsb3VkLXVybFwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTb3VuZGNsb3VkXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbDogKCkgPT4gKHRoaXMucHJvcHMuc3RvcmUudXNlci5zb3VuZGNsb3VkTGluaylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZmlsZS11cmxcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZmlsZSBQaWN0dXJlIFVSTFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWw6ICgpID0+ICh0aGlzLnByb3BzLnN0b3JlLnVzZXIucGljdHVyZV91cmwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGFuZWwgZWRpdCB0b2dnbGVcbiAgICB0b2dnbGVFZGl0aW5nKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lZGl0aW5nKSB7XG4gICAgICAgICAgICBQb3B1cC50cmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZzogIXRoaXMuc3RhdGUuZWRpdGluZ30pO1xuICAgIH1cblxuICAgIC8vIEVkaXRvciByZW5kZXJcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJhbm5lclN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiL3N0YXRpYy9iYW5uZXIuanBnXCIpYFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJhbm5lclBmUCA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7dGhpcy5wcm9wcy5zdG9yZS51c2VyLnBpY3R1cmVfdXJsfVwiKWBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vcm1hbCBiYW5uZXIgc3RhdGVcbiAgICAgICAgdmFyIGJhbm5lciA9IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Jhbm5lclN0eWxlfSBjbGFzc05hbWU9XCJiaW9CYW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJQZlB9IGNsYXNzTmFtZT1cImJpb1BpY1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiaW9MaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5iaW9saW5rcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtsLmNsc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtsLmNsc30+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdGluZy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJlZGl0XCI+RURJVCA8aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG5cbiAgICAgICAgLy8gRWRpdGluZyBiYW5uZXIgc3RhdGVcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdGluZykge1xuICAgICAgICAgICAgYmFubmVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Jhbm5lclN0eWxlfSBjbGFzc05hbWU9XCJiaW9CYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFubmVyUGZQfSBjbGFzc05hbWU9XCJiaW9QaWNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVFZGl0aW5nLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlNBVkUgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9ja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiaW9FZGl0TGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJpb0VkaXRMaW5rcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e2wudmFsKCl9IGtleT17bC5wbGFjZWhvbGRlcn0gdHlwZT1cInRleHRcIiBpZD17bC5pZH0gcGxhY2Vob2xkZXI9e2wucGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXBsb2FkQmFubmVyXCI+VVBMT0FEIEJBTk5FUiA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYW1lcmFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFpbiBiYW5uZXIgcmVuZGVyXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQb3B1cCB0eXBlPVwiZWRpdFN1Y2Nlc3NcIiAvPlxuICAgICAgICAgICAgICAgIHtiYW5uZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8vIE1VU0lDSUFOIElORk8gUEFORUxcbkBpbmplY3QoJ3N0b3JlJykgQG9ic2VydmVyXG5jbGFzcyBJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7cGxheVVybDogW119XG4gICAgfVxuXG4gICAgLy8gRXh0cmFjdCBzb3VuZHRyYWNrIGxpbmsgZnJvbSBiaW9cbiAgICBzb3VuZGNsb3VkUGFyc2VyKGNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC8oW1xcU10rKT8oc291bmRjbG91ZFxcLmNvbVteXFxzXSspL2cpO1xuICAgICAgICBjb25zdCB0aG90ID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzZShjYXB0dXJlKSB7XG4gICAgICAgICAgICBpZiAoY2FwdHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291bmRjbG91ZExpbmsgPSBcImh0dHBzOi8vXCIgKyBjYXB0dXJlWzJdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291bmRjbG91ZExpbms7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlY3Vyc2UocmVnZXguZXhlYyhjb250ZW50KSk7XG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSB3aXRoIGJpbyBsb2FkXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHB1ID0gdGhpcy5zdGF0ZS5wbGF5VXJsO1xuICAgICAgICBjb25zdCBiaW8gPSBcImhleSBodHRwczovL3NvdW5kY2xvdWQuY29tL3JlbWkxMTIvaG93ZHktYml0Y2gtcmV1cGxvYWRcIjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheVVybDogcHUuY29uY2F0KHRoaXMuc291bmRjbG91ZFBhcnNlcihiaW8pKX0pO1xuICAgIH1cblxuICAgIC8vIE11c2ljaWFuIHBhbmVsIHJlbmRlclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMuc3RvcmUudXNlcjtcblxuICAgICAgICB2YXIgZW1haWwgPSBudWxsO1xuICAgICAgICB2YXIgcGhvbmVOdW1iZXIgPSBudWxsO1xuXG4gICAgICAgIGlmICh1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICBlbWFpbCA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhcnRpc3RFbWFpbFwiPnt1c2VyLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VyLnBob25lTnVtYmVyKSB7XG4gICAgICAgICAgICBwaG9uZU51bWJlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmUgTnVtYmVyOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXJ0aXN0UGhvbmVcIj57dXNlci5waG9uZU51bWJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoYWxmIGJpb1wiPlxuICAgICAgICAgICAgICAgIDxoMj5TaGFyZSB5b3VyIHByb2ZpbGUgd2l0aCBmYW5zOjwvaDI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tdXNpY2lhbi8ke3VzZXIudXJsVmFsdWV9YH0+PGE+aHR0cDovL3d3dy5ucnNob3dzLmNvbS9tdXNpY2lhbi97dXNlci51cmxWYWx1ZX08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIHtlbWFpbH1cbiAgICAgICAgICAgICAgICB7cGhvbmVOdW1iZXJ9XG4gICAgICAgICAgICAgICAgPGgxIGlkPVwic3RhZ2UtbmFtZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+e3VzZXIuc3RhZ2VOYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJpb1wiIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJwcmUtd3JhcFwifX0+e3VzZXIuYmlvfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wbGF5VXJsLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvdW5kQ2xvdWQga2V5PXt1cmx9IHVybD17dXJsfSBvcHRzPXt7dmlzdWFsOiB0cnVlLCBhdXRvX3BsYXk6IGZhbHNlfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLy8gU0hPVyBQQU5FTFxuQGluamVjdCgnc3RvcmUnKSBAb2JzZXJ2ZXJcbmNsYXNzIFNob3dzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWdlOiB0cnVlLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICBzaG93czogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG15U2hvd3NQYWdlKCkge1xuICAgICAgICBhZGRDbGFzcygnLm15U2hvd3MnLCAnYWN0aXZlVGFiJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhZ2U6IHRydWV9KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJy5hdmFpbGFibGVTaG93cycsICdhY3RpdmVUYWInKTtcbiAgICB9XG5cbiAgICBhdmFpbGFibGVTaG93c1BhZ2UoKSB7XG4gICAgICAgIGFkZENsYXNzKCcuYXZhaWxhYmxlU2hvd3MnLCAnYWN0aXZlVGFiJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhZ2U6IGZhbHNlfSk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCcubXlTaG93cycsICdhY3RpdmVUYWInKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gb24gc3RvcmUgY2hhbmdlIGZpcmVcbiAgICAgICAgYXV0b3J1bigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmYmlkID0gdGhpcy5wcm9wcy5zdG9yZS51c2VyLmZiaWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nICYmIGZiaWQpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgIEJhY2tlbmQuZ2V0UG9zc2libGVFdmVudHMoKSxcbiAgICAgICAgICAgICAgICAgICAgQmFja2VuZC5nZXRNdXNpY2lhblRpY2tldHMoZmJpZClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIC50aGVuKChbZXZlbnRzLCB0aWNrZXRzXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRzLnN0YXR1cyA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRzOiBldmVudHMuZXZlbnRzfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpY2tldHMuc3RhdHVzID09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgZXZlbnRzIGZyb20gdGlja2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodGlja2V0cy50aWNrZXRzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0+IEJhY2tlbmQuZ2V0RXZlbnRJbmZvRnJvbUlEKHQuRXZlbnRJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZXZlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IG15IHNob3dzIHBsdXMgbWFwIG51bWJlciBzb2xkIGluIGVhY2ggdGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dzOiBldmVudHMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHMsIGkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucy5ldmVudF9pbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclNvbGQ6IHRpY2tldHMudGlja2V0c1tpXS5udW1iZXJTb2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnN0b3JlLnVzZXI7XG4gICAgICAgIHZhciBwYWdlID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICAvLyBMb2FkaW5nIHBhZ2VcbiAgICAgICAgICAgIHBhZ2UgPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93TGlzdFwiIHN0eWxlPXt7aGVpZ2h0OiBcIjQwMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdSZWxhdGl2ZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUucGFnZSkge1xuICAgICAgICAgICAgLy8gTXkgU2hvd3MgcGFnZVxuICAgICAgICAgICAgdmFyIGRpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93TGlzdCBteVNob3dzTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd3MubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cy5jcmVhdGVkQXR9IGNsYXNzTmFtZT1cInNob3dCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3MuaW1hZ2VfdXJsfVwiKWB9fSBjbGFzc05hbWU9XCJzaG93SW1nXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93RGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5IZWFkbGluZXI6IHtzLmhlYWRsaW5lcn08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BZGRyZXNzOiB7cy5zdHJlZXRfbmFtZX0sIHtzLmNpdHl9LCB7cy5zdGF0ZX0ge3MuemlwX2NvZGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VmVudWU6IHtzLnZlbnVlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7cy5leHRyYUF0RG9vcn0gYXQgZG9vcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCI+QnV5IFRpY2tldDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIj5CdXlvdXQgVGlja2V0czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29sZDogPHNwYW4gY2xhc3NOYW1lPVwic29sZFwiPntzLm51bWJlclNvbGR9L3tzLm51bWJlck5lZWRlZFRvU2VsbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5ID0gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dMaXN0IG15U2hvd3NMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PllvdSBhcmUgY3VycmVudGx5IG5vdCBhcGFydCBvZiBhbnkgc2hvd3MuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFnZSA9IGRpc3BsYXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBBdmFpbGFibGUgU2hvd3MgcGFnZVxuXG4gICAgICAgICAgICB2YXIgbXNncyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXIuZW1haWwpIHtcbiAgICAgICAgICAgICAgICBtc2dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwibm9lYW5kcFwiPllvdSBtdXN0IGVudGVyIHlvdXIgZW1haWwgYW5kIHBob25lIG51bWJlciB0byBiZSBlbGlnaWJsZSBmb3Igc2hvd3MuPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdXNlci52ZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIG1zZ3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJub3Rlcm1zXCI+UGxlYXNlIGFjY2VwdCB0aGUgdGVybXMgb2Ygc2VydmljZSBiZWZvcmUgY29udGludWluZy48L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbXNncy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIm5vdGltZVwiPllvdSBjYW4gb25seSBiZSBhIHBhcnQgb2Ygb25lIHNob3cgYXQgYSB0aW1lLjwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5ldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbXNncy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIm5vc2hvd1wiPlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gcG9zc2libGUgc2hvd3MuPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFtc2dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1zZ3MucHVzaCguLi50aGlzLnN0YXRlLmV2ZW50cy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIHMgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3MuY3JlYXRlZEF0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybChcIiR7cy5pbWFnZV91cmx9XCIpYH19IGNsYXNzTmFtZT1cInNob3dJbWdcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93RGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkhlYWRsaW5lcjoge3MuaGVhZGxpbmVyfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BZGRyZXNzOiB7cy5zdHJlZXRfbmFtZX0sIHtzLmNpdHl9LCB7cy5zdGF0ZX0ge3MuemlwX2NvZGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlZlbnVlOiB7cy52ZW51ZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JHtzLmV4dHJhQXREb29yfSBhdCBkb29yPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCI+Sm9pbiBTaG93PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFnZSA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dMaXN0IGF2YWlsYWJsZVNob3dzTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7bXNncy5tYXAobSA9PiBtKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGhhbGYgc2hvd3NcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNob3dUYWJzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5teVNob3dzUGFnZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJ0YWIgbXlTaG93cyBhY3RpdmVUYWJcIj5NeSBTaG93czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmF2YWlsYWJsZVNob3dzUGFnZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJ0YWIgYXZhaWxhYmxlU2hvd3NcIj5BdmFpbGFibGUgU2hvd3M8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICB7cGFnZX1cblxuICAgICAgICAgICAgPC9zcGFuPlxuXG5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuLy8gREFTSEJPQVJEIE1BSU5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge31cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRlbnQgd3JhcHBlcj1cIm1haW5XcmFwcGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11c2ljaWFuV3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdXNpY2lhblRpdGxlXCI+TXVzaWNpYW4gRGFzaGJvYXJkPC9oMT5cblxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIC8+XG5cbiAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5mbyAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvd3MgLz5cblxuICAgICAgICAgICAgXHRcdDwvZGl2PlxuXG4gICAgICAgICAgICBcdDwvZGl2PlxuXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9kYXNoYm9hcmQuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBOztBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQTdCQTtBQW1DQTtBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFHQTtBQUZBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFKQTs7O0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUhBOztBQUtBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBSUE7Ozs7O0FBdEdBO0FBQ0E7QUF3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7O0FBdkVBO0FBQ0E7QUF5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFLQTs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBSUE7QUFQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBSkE7QUFVQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUF4QkE7QUEyQkE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQXJDQTtBQXlDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7O0FBcktBO0FBQ0E7QUE2S0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQVFBO0FBUkE7QUFBQTs7Ozs7QUFwQkE7QUFDQTtBQStCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9