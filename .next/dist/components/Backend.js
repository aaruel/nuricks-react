'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

require('isomorphic-fetch');

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