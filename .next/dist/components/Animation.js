"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fadeOut = exports.fadeIn = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

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