'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router(props) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      if (nextState.location === _this.state.location) {
        return false;
      } else {
        return true;
      }
    };

    _this.updateLocation = function (location) {
      console.log('location update');
      _this.setState({ location: location.pathname });
    };

    _this.state = {
      location: _this.props.history.location.pathname
    };
    return _this;
  }

  _createClass(Router, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.history.listen(function (location, action) {
        _this2.updateLocation(location);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var children = _react2.default.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, {
          location: _this3.state.location
        });
      });
      return _react2.default.createElement(
        'div',
        { className: this.props.styles },
        children
      );
    }
  }]);

  return Router;
}(_react2.default.Component);

exports.default = Router;


Router.propTypes = {
  history: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.array
};