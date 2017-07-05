"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadingRelative = undefined;

var _react = require("react");

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