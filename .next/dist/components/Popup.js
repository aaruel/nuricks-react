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

var _Animation = require('./Animation.js');

var _mobxReact = require('mobx-react');

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