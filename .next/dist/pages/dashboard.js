'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Content = require('../components/Content.js');

var _Content2 = _interopRequireDefault(_Content);

var _Popup = require('../components/Popup.js');

var _Popup2 = _interopRequireDefault(_Popup);

var _reactSoundcloudWidget = require('react-soundcloud-widget');

var _reactSoundcloudWidget2 = _interopRequireDefault(_reactSoundcloudWidget);

var _Backend = require('../components/Backend.js');

var _Backend2 = _interopRequireDefault(_Backend);

var _Loading = require('../components/Loading.js');

var _mobxReact = require('mobx-react');

var _mobx = require('mobx');

var _Utils = require('../components/Utils.js');

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