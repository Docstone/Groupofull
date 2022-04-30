"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

var _App = _interopRequireDefault(require("./App.jsx"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = document.getElementById('root');

const root = _client.default.createRoot(container);

root.render(_react.default.createElement(_App.default, null));