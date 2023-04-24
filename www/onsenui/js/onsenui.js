/* onsenui v2.12.0 - 2022-04-10 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ons = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  // Save HTMLElement object before Custom Elements polyfill patch global HTMLElement.
  var NativeHTMLElement = window.HTMLElement;
  /**
   * @object ons.platform
   * @category util
   * @description
   *   [en]Utility methods to detect current platform.[/en]
   *   [ja]現在実行されているプラットフォームを検知するためのユーティリティメソッドを収めたオブジェクトです。[/ja]
   */

  var Platform = /*#__PURE__*/function () {
    /**
     * All elements will be rendered as if the app was running on this platform.
     * @type {String}
     */
    function Platform() {
      _classCallCheck(this, Platform);

      this._selectedPlatform = null;
      this._ignorePlatformSelect = false;
    }
    /**
     * @method select
     * @signature select(platform)
     * @param  {string} platform Name of the platform.
     *   [en]Possible values are: "opera", "firefox", "safari", "chrome", "ie", "android", "blackberry", "ios" or "wp".[/en]
     *   [ja]"opera", "firefox", "safari", "chrome", "ie", "android", "blackberry", "ios", "wp"のいずれかを指定します。[/ja]
     * @description
     *   [en]Sets the platform used to render the elements. Useful for testing.[/en]
     *   [ja]要素を描画するために利用するプラットフォーム名を設定します。テストに便利です。[/ja]
     */


    _createClass(Platform, [{
      key: "select",
      value: function select(platform) {
        if (typeof platform === 'string') {
          this._selectedPlatform = platform.trim().toLowerCase();
        }
      }
    }, {
      key: "_getSelectedPlatform",
      value: function _getSelectedPlatform() {
        return this._ignorePlatformSelect ? null : this._selectedPlatform;
      }
    }, {
      key: "_runOnActualPlatform",
      value: function _runOnActualPlatform(fn) {
        this._ignorePlatformSelect = true;
        var result = fn();
        this._ignorePlatformSelect = false;
        return result;
      } //----------------
      // General
      //----------------

      /**
       * @method isWebView
       * @signature isWebView()
       * @description
       *   [en]Returns whether app is running in Cordova.[/en]
       *   [ja]Cordova内で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isWebView",
      value: function isWebView() {
        if (document.readyState === 'loading' || document.readyState == 'uninitialized') {
          throw new Error('isWebView() method is available after dom contents loaded.');
        }

        return !!(window.cordova || window.phonegap || window.PhoneGap);
      } //----------------
      // iOS devices
      //----------------

      /**
       * @method isIPhone
       * @signature isIPhone()
       * @description
       *   [en]Returns whether the device is iPhone.[/en]
       *   [ja]iPhone上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isIPhone",
      value: function isIPhone() {
        return /iPhone/i.test(navigator.userAgent);
      }
      /**
       * @method isIPhoneX
       * @signature isIPhoneX()
       * @description
       *   [en]Returns whether the device is iPhone X, XS, XS Max, XR, 11, 11 Pro, 11 Pro Max, 12 Mini, 12, 12 Pro or 12 Pro Max.[/en]
       *   [ja]iPhone X や XS、XS Max、XR、11、11 Pro、11 Pro Max、12 Mini、12、12 Pro、または12 Pro Max上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isIPhoneX",
      value: function isIPhoneX() {
        // iOS WebViews on the same iOS version have the same user agent.
        // We cannot avoid using window.screen.
        // We also cannot use cordova-plugin-device since its behavior is different between simulators and real devices.
        // This works well both in iOS Safari and (UI|WK)WebView of iPhone X.
        return this.isIPhone() && ( // X, XS, 11 Pro, 12 Mini
        window.screen.width === 375 && window.screen.height === 812 || // portrait
        window.screen.width === 812 && window.screen.height === 375 || // landscape
        // XS Max, XR, 11, 11 Pro Max
        window.screen.width === 414 && window.screen.height === 896 || // portrait
        window.screen.width === 896 && window.screen.height === 414 || // landscape
        // 12, 12 Pro
        window.screen.width === 390 && window.screen.height === 844 || // portrait
        window.screen.width === 844 && window.screen.height === 390 || // landscape
        // 12 Pro Max
        window.screen.width === 428 && window.screen.height === 926 || // portrait
        window.screen.width === 926 && window.screen.height === 428 // landscape
        );
      }
      /**
       * @method isIPad
       * @signature isIPad()
       * @description
       *   [en]Returns whether the device is iPad.[/en]
       *   [ja]iPad上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isIPad",
      value: function isIPad() {
        return /iPad/i.test(navigator.userAgent) || this.isIPadOS();
      }
      /**
       * @return {Boolean}
       */

    }, {
      key: "isIPod",
      value: function isIPod() {
        return /iPod/i.test(navigator.userAgent);
      } //----------------
      // iOS versions
      //----------------

      /**
       * @method isIOS
       * @signature isIOS([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the OS is iOS. By default will return manually selected platform if it is set.[/en]
       *   [ja]iOS上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isIOS",
      value: function isIOS(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'ios';
        }

        if ((typeof device === "undefined" ? "undefined" : _typeof(device)) === 'object' && !/browser/i.test(device.platform)) {
          return /iOS/i.test(device.platform);
        } else {
          return /iPhone|iPad|iPod/i.test(navigator.userAgent) || this.isIPadOS();
        }
      }
      /**
       * @method isIOS7above
       * @signature isIOS7above()
       * @description
       *   [en]Returns whether the iOS version is 7 or above.[/en]
       *   [ja]iOS7以上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isIOS7above",
      value: function isIOS7above() {
        if ((typeof device === "undefined" ? "undefined" : _typeof(device)) === 'object' && !/browser/i.test(device.platform)) {
          return /iOS/i.test(device.platform) && parseInt(device.version.split('.')[0]) >= 7;
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          var ver = (navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/) || [''])[0].replace(/_/g, '.');
          return parseInt(ver.split('.')[0]) >= 7;
        }

        return false;
      }
      /**
       * @method isIPadOS
       * @signature isIPadOS()
       * @description
       *   [en]Returns whether the OS is iPadOS.[/en]
       *   [ja][/ja]
       * @return {Boolean}
       */

    }, {
      key: "isIPadOS",
      value: function isIPadOS() {
        // The iPadOS User Agent string is the same as MacOS so as a
        // workaround we test the max touch points, which is 5 for
        // iPads and 0 for desktop browsers.
        return !!(/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints === 5);
      } //----------------
      // iOS browsers
      //----------------

      /**
       * @method isIOSSafari
       * @signature isIOSSafari()
       * @description
       *   [en]Returns whether app is running in iOS Safari.[/en]
       *   [ja]iOS Safariで実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isIOSSafari",
      value: function isIOSSafari() {
        var navigator = window.navigator;
        var ua = navigator.userAgent;
        return !!(this.isIOS() && ua.indexOf('Safari') !== -1 && ua.indexOf('Version') !== -1 && !navigator.standalone);
      }
      /**
       * @method isWKWebView
       * @signature isWKWebView()
       * @description
       *   [en]Returns whether app is running in WKWebView.[/en]
       *   [ja]WKWebViewで実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isWKWebView",
      value: function isWKWebView() {
        var lte9 = /constructor/i.test(NativeHTMLElement);
        return !!(this.isIOS() && window.webkit && window.webkit.messageHandlers && window.indexedDB && !lte9);
      } //----------------
      // Android devices
      //----------------

      /**
       * @method isAndroidPhone
       * @signature isAndroidPhone()
       * @description
       *   [en]Returns whether the device is Android phone.[/en]
       *   [ja]Android携帯上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isAndroidPhone",
      value: function isAndroidPhone() {
        return /Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent);
      }
      /**
       * @method isAndroidTablet
       * @signature isAndroidTablet()
       * @description
       *   [en]Returns whether the device is Android tablet.[/en]
       *   [ja]Androidタブレット上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isAndroidTablet",
      value: function isAndroidTablet() {
        return /Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent);
      } //----------------
      // Android versions
      //----------------

      /**
       * @method isAndroid
       * @signature isAndroid([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the OS is Android. By default will return manually selected platform if it is set.[/en]
       *   [ja]Android上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isAndroid",
      value: function isAndroid(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'android';
        }

        if ((typeof device === "undefined" ? "undefined" : _typeof(device)) === 'object' && !/browser/i.test(device.platform)) {
          return /Android/i.test(device.platform);
        } else {
          return /Android/i.test(navigator.userAgent);
        }
      } //----------------
      // Other devices
      //----------------

      /**
       * @method isWP
       * @signature isWP([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the OS is Windows phone. By default will return manually selected platform if it is set.[/en]
       *   [ja][/ja]
       * @return {Boolean}
       */

    }, {
      key: "isWP",
      value: function isWP(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'wp';
        }

        if ((typeof device === "undefined" ? "undefined" : _typeof(device)) === 'object' && !/browser/i.test(device.platform)) {
          return /Win32NT|WinCE/i.test(device.platform);
        } else {
          return /Windows Phone|IEMobile|WPDesktop/i.test(navigator.userAgent);
        }
      }
      /**
       * @method isBlackBerry
       * @signature isBlackBerry([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the device is BlackBerry. By default will return manually selected platform if it is set.[/en]
       *   [ja]BlackBerry上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isBlackBerry",
      value: function isBlackBerry(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'blackberry';
        }

        if ((typeof device === "undefined" ? "undefined" : _typeof(device)) === 'object' && !/browser/i.test(device.platform)) {
          return /BlackBerry/i.test(device.platform);
        } else {
          return /BlackBerry|RIM Tablet OS|BB10/i.test(navigator.userAgent);
        }
      } //----------------
      // Other browsers
      //----------------

      /**
       * @method isOpera
       * @signature isOpera([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the browser is Opera. By default will return manually selected platform if it is set.[/en]
       *   [ja]Opera上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isOpera",
      value: function isOpera(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'opera';
        }

        return !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      }
      /**
       * @method isFirefox
       * @signature isFirefox([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the browser is Firefox. By default will return manually selected platform if it is set.[/en]
       *   [ja]Firefox上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isFirefox",
      value: function isFirefox(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'firefox';
        }

        return typeof InstallTrigger !== 'undefined';
      }
      /**
       * @method isSafari
       * @signature isSafari([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the browser is Safari. By default will return manually selected platform if it is set.[/en]
       *   [ja]Safari上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isSafari",
      value: function isSafari(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'safari';
        }

        return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || function (p) {
          return p.toString() === '[object SafariRemoteNotification]';
        }(!window['safari'] || safari.pushNotification);
      }
      /**
       * @method isChrome
       * @signature isChrome([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the browser is Chrome. By default will return manually selected platform if it is set.[/en]
       *   [ja]Chrome上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isChrome",
      value: function isChrome(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'chrome';
        }

        return !!window.chrome && !(!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) && !(navigator.userAgent.indexOf(' Edge/') >= 0);
      }
      /**
       * @method isIE
       * @signature isIE([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the browser is Internet Explorer. By default will return manually selected platform if it is set.[/en]
       *   [ja]Internet Explorer上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isIE",
      value: function isIE(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'ie';
        }

        return !!document.documentMode;
      }
      /**
       * @method isEdge
       * @signature isEdge([forceActualPlatform])
       * @param {Boolean} forceActualPlatform
       *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns whether the browser is Edge. By default will return manually selected platform if it is set.[/en]
       *   [ja]Edge上で実行されているかどうかを返します。[/ja]
       * @return {Boolean}
       */

    }, {
      key: "isEdge",
      value: function isEdge(forceActualPlatform) {
        if (!forceActualPlatform && this._getSelectedPlatform()) {
          return this._getSelectedPlatform() === 'edge';
        }

        return navigator.userAgent.indexOf(' Edge/') >= 0;
      } //----------------
      // Utility functions
      //----------------

      /**
       * @return {String}
       */

    }, {
      key: "getMobileOS",
      value: function getMobileOS() {
        if (this.isAndroid()) {
          return 'android';
        } else if (this.isIOS()) {
          return 'ios';
        } else if (this.isWP()) {
          return 'wp';
        } else {
          return 'other';
        }
      }
      /**
       * @return {String}
       */

    }, {
      key: "getIOSDevice",
      value: function getIOSDevice() {
        if (this.isIPhone()) {
          return 'iphone';
        } else if (this.isIPad()) {
          return 'ipad';
        } else if (this.isIPod()) {
          return 'ipod';
        } else {
          return 'na';
        }
      }
    }]);

    return Platform;
  }();

  var platform = new Platform();

  // For @onsenui/custom-elements
  if (window.customElements) {
    // even if native CE1 impl exists, use polyfill
    window.customElements.forcePolyfill = true;
  }

  (function () {

    var g = new function () {}();
    var aa = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));

    function k(b) {
      var a = aa.has(b);
      b = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);
      return !a && b;
    }

    function l(b) {
      var a = b.isConnected;
      if (void 0 !== a) return a;

      for (; b && !(b.__CE_isImportDocument || b instanceof Document);) {
        b = b.parentNode || (window.ShadowRoot && b instanceof ShadowRoot ? b.host : void 0);
      }

      return !(!b || !(b.__CE_isImportDocument || b instanceof Document));
    }

    function m(b, a) {
      for (; a && a !== b && !a.nextSibling;) {
        a = a.parentNode;
      }

      return a && a !== b ? a.nextSibling : null;
    }

    function n(b, a, e) {
      e = e ? e : new Set();

      for (var c = b; c;) {
        if (c.nodeType === Node.ELEMENT_NODE) {
          var d = c;
          a(d);
          var h = d.localName;

          if ("link" === h && "import" === d.getAttribute("rel")) {
            c = d.import;
            if (c instanceof Node && !e.has(c)) for (e.add(c), c = c.firstChild; c; c = c.nextSibling) {
              n(c, a, e);
            }
            c = m(b, d);
            continue;
          } else if ("template" === h) {
            c = m(b, d);
            continue;
          }

          if (d = d.__CE_shadowRoot) for (d = d.firstChild; d; d = d.nextSibling) {
            n(d, a, e);
          }
        }

        c = c.firstChild ? c.firstChild : m(b, c);
      }
    }

    function q(b, a, e) {
      b[a] = e;
    }

    function r() {
      this.a = new Map();
      this.f = new Map();
      this.c = [];
      this.b = !1;
    }

    function ba(b, a, e) {
      b.a.set(a, e);
      b.f.set(e.constructor, e);
    }

    function t(b, a) {
      b.b = !0;
      b.c.push(a);
    }

    function v(b, a) {
      b.b && n(a, function (a) {
        return w(b, a);
      });
    }

    function w(b, a) {
      if (b.b && !a.__CE_patched) {
        a.__CE_patched = !0;

        for (var e = 0; e < b.c.length; e++) {
          b.c[e](a);
        }
      }
    }

    function x(b, a) {
      var e = [];
      n(a, function (b) {
        return e.push(b);
      });

      for (a = 0; a < e.length; a++) {
        var c = e[a];
        1 === c.__CE_state ? l(c) && b.connectedCallback(c) : y(b, c);
      }
    }

    function z(b, a) {
      var e = [];
      n(a, function (b) {
        return e.push(b);
      });

      for (a = 0; a < e.length; a++) {
        var c = e[a];
        1 === c.__CE_state && b.disconnectedCallback(c);
      }
    }

    function A(b, a, e) {
      e = e ? e : new Set();
      var c = [];
      n(a, function (d) {
        if ("link" === d.localName && "import" === d.getAttribute("rel")) {
          var a = d.import;
          a instanceof Node && "complete" === a.readyState ? (a.__CE_isImportDocument = !0, a.__CE_hasRegistry = !0) : d.addEventListener("load", function () {
            var a = d.import;
            a.__CE_documentLoadHandled || (a.__CE_documentLoadHandled = !0, a.__CE_isImportDocument = !0, a.__CE_hasRegistry = !0, e.delete(a), A(b, a, e));
          });
        } else c.push(d);
      }, e);
      if (b.b) for (a = 0; a < c.length; a++) {
        w(b, c[a]);
      }

      for (a = 0; a < c.length; a++) {
        y(b, c[a]);
      }
    }

    function y(b, a) {
      if (void 0 === a.__CE_state) {
        var e = b.a.get(a.localName);

        if (e) {
          e.constructionStack.push(a);
          var c = e.constructor;

          try {
            try {
              if (new c() !== a) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              e.constructionStack.pop();
            }
          } catch (f) {
            throw a.__CE_state = 2, f;
          }

          a.__CE_state = 1;
          a.__CE_definition = e;
          if (e.attributeChangedCallback) for (e = e.observedAttributes, c = 0; c < e.length; c++) {
            var d = e[c],
                h = a.getAttribute(d);
            null !== h && b.attributeChangedCallback(a, d, null, h, null);
          }
          l(a) && b.connectedCallback(a);
        }
      }
    }

    r.prototype.connectedCallback = function (b) {
      var a = b.__CE_definition;
      a.connectedCallback && a.connectedCallback.call(b);
      b.i = !0;
    };

    r.prototype.disconnectedCallback = function (b) {
      b.i || this.connectedCallback(b);
      var a = b.__CE_definition;
      a.disconnectedCallback && a.disconnectedCallback.call(b);
      b.i = void 0;
    };

    r.prototype.attributeChangedCallback = function (b, a, e, c, d) {
      var h = b.__CE_definition;
      h.attributeChangedCallback && -1 < h.observedAttributes.indexOf(a) && h.attributeChangedCallback.call(b, a, e, c, d);
    };

    function B(b, a) {
      this.c = b;
      this.a = a;
      this.b = void 0;
      A(this.c, this.a);
      "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
        childList: !0,
        subtree: !0
      }));
    }

    function C(b) {
      b.b && b.b.disconnect();
    }

    B.prototype.f = function (b) {
      var a = this.a.readyState;
      "interactive" !== a && "complete" !== a || C(this);

      for (a = 0; a < b.length; a++) {
        for (var e = b[a].addedNodes, c = 0; c < e.length; c++) {
          A(this.c, e[c]);
        }
      }
    };

    function ca() {
      var b = this;
      this.b = this.a = void 0;
      this.c = new Promise(function (a) {
        b.b = a;
        b.a && a(b.a);
      });
    }

    function D(b) {
      if (b.a) throw Error("Already resolved.");
      b.a = void 0;
      b.b && b.b(void 0);
    }

    function E(b) {
      this.f = !1;
      this.a = b;
      this.h = new Map();

      this.g = function (b) {
        return b();
      };

      this.b = !1;
      this.c = [];
      this.l = new B(b, document);
    }

    E.prototype.m = function (b, a) {
      var e = this;
      if (!(a instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
      if (!k(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
      if (this.a.a.get(b)) throw Error("A custom element with name '" + b + "' has already been defined.");
      if (this.f) throw Error("A custom element is already being defined.");
      this.f = !0;
      var c, d, h, f, u;

      try {
        var p = function p(b) {
          var a = P[b];
          if (void 0 !== a && !(a instanceof Function)) throw Error("The '" + b + "' callback must be a function.");
          return a;
        },
            P = a.prototype;

        if (!(P instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
        c = p("connectedCallback");
        d = p("disconnectedCallback");
        h = p("adoptedCallback");
        f = p("attributeChangedCallback");
        u = a.observedAttributes || [];
      } catch (va) {
        return;
      } finally {
        this.f = !1;
      }

      ba(this.a, b, {
        localName: b,
        constructor: a,
        connectedCallback: c,
        disconnectedCallback: d,
        adoptedCallback: h,
        attributeChangedCallback: f,
        observedAttributes: u,
        constructionStack: []
      });
      this.c.push(b);
      this.b || (this.b = !0, this.g(function () {
        if (!1 !== e.b) for (e.b = !1, A(e.a, document); 0 < e.c.length;) {
          var b = e.c.shift();
          (b = e.h.get(b)) && D(b);
        }
      }));
    };

    E.prototype.get = function (b) {
      if (b = this.a.a.get(b)) return b.constructor;
    };

    E.prototype.s = function (b) {
      if (!k(b)) return Promise.reject(new SyntaxError("'" + b + "' is not a valid custom element name."));
      var a = this.h.get(b);
      if (a) return a.c;
      a = new ca();
      this.h.set(b, a);
      this.a.a.get(b) && -1 === this.c.indexOf(b) && D(a);
      return a.c;
    };

    E.prototype.o = function (b) {
      C(this.l);
      var a = this.g;

      this.g = function (e) {
        return b(function () {
          return a(e);
        });
      };
    };

    window.CustomElementRegistry = E;
    E.prototype.define = E.prototype.m;
    E.prototype.get = E.prototype.get;
    E.prototype.whenDefined = E.prototype.s;
    E.prototype.polyfillWrapFlushCallback = E.prototype.o;
    var F = window.Document.prototype.createElement,
        da = window.Document.prototype.createElementNS,
        ea = window.Document.prototype.importNode,
        fa = window.Document.prototype.prepend,
        ga = window.Document.prototype.append,
        G = window.Node.prototype.cloneNode,
        H = window.Node.prototype.appendChild,
        I = window.Node.prototype.insertBefore,
        J = window.Node.prototype.removeChild,
        K = window.Node.prototype.replaceChild,
        L = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
        M = window.Element.prototype.attachShadow,
        N = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        O = window.Element.prototype.getAttribute,
        Q = window.Element.prototype.setAttribute,
        R = window.Element.prototype.removeAttribute,
        S = window.Element.prototype.getAttributeNS,
        T = window.Element.prototype.setAttributeNS,
        U = window.Element.prototype.removeAttributeNS,
        V = window.Element.prototype.insertAdjacentElement,
        ha = window.Element.prototype.prepend,
        ia = window.Element.prototype.append,
        ja = window.Element.prototype.before,
        ka = window.Element.prototype.after,
        la = window.Element.prototype.replaceWith,
        ma = window.Element.prototype.remove,
        na = window.HTMLElement,
        W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        X = window.HTMLElement.prototype.insertAdjacentElement;

    function oa() {
      var b = Y;

      window.HTMLElement = function () {
        function a() {
          var a = this.constructor,
              c = b.f.get(a);
          if (!c) throw Error("The custom element being constructed was not registered with `customElements`.");
          var d = c.constructionStack;
          if (!d.length) return d = F.call(document, c.localName), Object.setPrototypeOf(d, a.prototype), d.__CE_state = 1, d.__CE_definition = c, w(b, d), d;
          var c = d.length - 1,
              h = d[c];
          if (h === g) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
          d[c] = g;
          Object.setPrototypeOf(h, a.prototype);
          w(b, h);
          return h;
        }

        a.prototype = na.prototype;
        return a;
      }();
    }

    function pa(b, a, e) {
      a.prepend = function (a) {
        for (var d = [], c = 0; c < arguments.length; ++c) {
          d[c - 0] = arguments[c];
        }

        c = d.filter(function (b) {
          return b instanceof Node && l(b);
        });
        e.j.apply(this, d);

        for (var f = 0; f < c.length; f++) {
          z(b, c[f]);
        }

        if (l(this)) for (c = 0; c < d.length; c++) {
          f = d[c], f instanceof Element && x(b, f);
        }
      };

      a.append = function (a) {
        for (var d = [], c = 0; c < arguments.length; ++c) {
          d[c - 0] = arguments[c];
        }

        c = d.filter(function (b) {
          return b instanceof Node && l(b);
        });
        e.append.apply(this, d);

        for (var f = 0; f < c.length; f++) {
          z(b, c[f]);
        }

        if (l(this)) for (c = 0; c < d.length; c++) {
          f = d[c], f instanceof Element && x(b, f);
        }
      };
    }

    function qa() {
      var b = Y;
      q(Document.prototype, "createElement", function (a) {
        if (this.__CE_hasRegistry) {
          var e = b.a.get(a);
          if (e) return new e.constructor();
        }

        a = F.call(this, a);
        w(b, a);
        return a;
      });
      q(Document.prototype, "importNode", function (a, e) {
        a = ea.call(this, a, e);
        this.__CE_hasRegistry ? A(b, a) : v(b, a);
        return a;
      });
      q(Document.prototype, "createElementNS", function (a, e) {
        if (this.__CE_hasRegistry && (null === a || "http://www.w3.org/1999/xhtml" === a)) {
          var c = b.a.get(e);
          if (c) return new c.constructor();
        }

        a = da.call(this, a, e);
        w(b, a);
        return a;
      });
      pa(b, Document.prototype, {
        j: fa,
        append: ga
      });
    }

    function ra() {
      var b = Y;

      function a(a, c) {
        Object.defineProperty(a, "textContent", {
          enumerable: c.enumerable,
          configurable: !0,
          get: c.get,
          set: function set(a) {
            if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a);else {
              var d = void 0;

              if (this.firstChild) {
                var e = this.childNodes,
                    u = e.length;
                if (0 < u && l(this)) for (var d = Array(u), p = 0; p < u; p++) {
                  d[p] = e[p];
                }
              }

              c.set.call(this, a);
              if (d) for (a = 0; a < d.length; a++) {
                z(b, d[a]);
              }
            }
          }
        });
      }

      q(Node.prototype, "insertBefore", function (a, c) {
        if (a instanceof DocumentFragment) {
          var d = Array.prototype.slice.apply(a.childNodes);
          a = I.call(this, a, c);
          if (l(this)) for (c = 0; c < d.length; c++) {
            x(b, d[c]);
          }
          return a;
        }

        d = l(a);
        c = I.call(this, a, c);
        d && z(b, a);
        l(this) && x(b, a);
        return c;
      });
      q(Node.prototype, "appendChild", function (a) {
        if (a instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(a.childNodes);
          a = H.call(this, a);
          if (l(this)) for (var d = 0; d < c.length; d++) {
            x(b, c[d]);
          }
          return a;
        }

        c = l(a);
        d = H.call(this, a);
        c && z(b, a);
        l(this) && x(b, a);
        return d;
      });
      q(Node.prototype, "cloneNode", function (a) {
        a = G.call(this, a);
        this.ownerDocument.__CE_hasRegistry ? A(b, a) : v(b, a);
        return a;
      });
      q(Node.prototype, "removeChild", function (a) {
        var c = l(a),
            d = J.call(this, a);
        c && z(b, a);
        return d;
      });
      q(Node.prototype, "replaceChild", function (a, c) {
        if (a instanceof DocumentFragment) {
          var d = Array.prototype.slice.apply(a.childNodes);
          a = K.call(this, a, c);
          if (l(this)) for (z(b, c), c = 0; c < d.length; c++) {
            x(b, d[c]);
          }
          return a;
        }

        var d = l(a),
            e = K.call(this, a, c),
            f = l(this);
        f && z(b, c);
        d && z(b, a);
        f && x(b, a);
        return e;
      });
      L && L.get ? a(Node.prototype, L) : t(b, function (b) {
        a(b, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            for (var a = [], b = 0; b < this.childNodes.length; b++) {
              a.push(this.childNodes[b].textContent);
            }

            return a.join("");
          },
          set: function set(a) {
            for (; this.firstChild;) {
              J.call(this, this.firstChild);
            }

            H.call(this, document.createTextNode(a));
          }
        });
      });
    }

    function sa(b) {
      var a = Element.prototype;

      a.before = function (a) {
        for (var c = [], d = 0; d < arguments.length; ++d) {
          c[d - 0] = arguments[d];
        }

        d = c.filter(function (a) {
          return a instanceof Node && l(a);
        });
        ja.apply(this, c);

        for (var e = 0; e < d.length; e++) {
          z(b, d[e]);
        }

        if (l(this)) for (d = 0; d < c.length; d++) {
          e = c[d], e instanceof Element && x(b, e);
        }
      };

      a.after = function (a) {
        for (var c = [], d = 0; d < arguments.length; ++d) {
          c[d - 0] = arguments[d];
        }

        d = c.filter(function (a) {
          return a instanceof Node && l(a);
        });
        ka.apply(this, c);

        for (var e = 0; e < d.length; e++) {
          z(b, d[e]);
        }

        if (l(this)) for (d = 0; d < c.length; d++) {
          e = c[d], e instanceof Element && x(b, e);
        }
      };

      a.replaceWith = function (a) {
        for (var c = [], d = 0; d < arguments.length; ++d) {
          c[d - 0] = arguments[d];
        }

        var d = c.filter(function (a) {
          return a instanceof Node && l(a);
        }),
            e = l(this);
        la.apply(this, c);

        for (var f = 0; f < d.length; f++) {
          z(b, d[f]);
        }

        if (e) for (z(b, this), d = 0; d < c.length; d++) {
          e = c[d], e instanceof Element && x(b, e);
        }
      };

      a.remove = function () {
        var a = l(this);
        ma.call(this);
        a && z(b, this);
      };
    }

    function ta() {
      var b = Y;

      function a(a, c) {
        Object.defineProperty(a, "innerHTML", {
          enumerable: c.enumerable,
          configurable: !0,
          get: c.get,
          set: function set(a) {
            var d = this,
                e = void 0;
            l(this) && (e = [], n(this, function (a) {
              a !== d && e.push(a);
            }));
            c.set.call(this, a);
            if (e) for (var f = 0; f < e.length; f++) {
              var h = e[f];
              1 === h.__CE_state && b.disconnectedCallback(h);
            }
            this.ownerDocument.__CE_hasRegistry ? A(b, this) : v(b, this);
            return a;
          }
        });
      }

      function e(a, c) {
        q(a, "insertAdjacentElement", function (a, d) {
          var e = l(d);
          a = c.call(this, a, d);
          e && z(b, d);
          l(a) && x(b, d);
          return a;
        });
      }

      M ? q(Element.prototype, "attachShadow", function (a) {
        return this.__CE_shadowRoot = a = M.call(this, a);
      }) : console.warn("Custom Elements: `Element#attachShadow` was not patched.");
      if (N && N.get) a(Element.prototype, N);else if (W && W.get) a(HTMLElement.prototype, W);else {
        var c = F.call(document, "div");
        t(b, function (b) {
          a(b, {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return G.call(this, !0).innerHTML;
            },
            set: function set(a) {
              var b = "template" === this.localName ? this.content : this;

              for (c.innerHTML = a; 0 < b.childNodes.length;) {
                J.call(b, b.childNodes[0]);
              }

              for (; 0 < c.childNodes.length;) {
                H.call(b, c.childNodes[0]);
              }
            }
          });
        });
      }
      q(Element.prototype, "setAttribute", function (a, c) {
        if (1 !== this.__CE_state) return Q.call(this, a, c);
        var d = O.call(this, a);
        Q.call(this, a, c);
        c = O.call(this, a);
        b.attributeChangedCallback(this, a, d, c, null);
      });
      q(Element.prototype, "setAttributeNS", function (a, c, e) {
        if (1 !== this.__CE_state) return T.call(this, a, c, e);
        var d = S.call(this, a, c);
        T.call(this, a, c, e);
        e = S.call(this, a, c);
        b.attributeChangedCallback(this, c, d, e, a);
      });
      q(Element.prototype, "removeAttribute", function (a) {
        if (1 !== this.__CE_state) return R.call(this, a);
        var c = O.call(this, a);
        R.call(this, a);
        null !== c && b.attributeChangedCallback(this, a, c, null, null);
      });
      q(Element.prototype, "removeAttributeNS", function (a, c) {
        if (1 !== this.__CE_state) return U.call(this, a, c);
        var d = S.call(this, a, c);
        U.call(this, a, c);
        var e = S.call(this, a, c);
        d !== e && b.attributeChangedCallback(this, c, d, e, a);
      });
      X ? e(HTMLElement.prototype, X) : V ? e(Element.prototype, V) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
      pa(b, Element.prototype, {
        j: ha,
        append: ia
      });
      sa(b);
    }
    /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    var Z = window.customElements;

    if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
      var Y = new r();
      oa();
      qa();
      ra();
      ta();
      document.__CE_hasRegistry = !0;
      var ua = new E(Y);
      Object.defineProperty(window, "customElements", {
        configurable: !0,
        enumerable: !0,
        value: ua
      });
    }
  }).call(self);

  /**
   * @license
   * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  // @version 0.7.22
  (function (global) {
    if (global.JsMutationObserver) {
      return;
    }

    var registrationsTable = new WeakMap();
    var setImmediate;

    if (/Trident|Edge/.test(navigator.userAgent)) {
      setImmediate = setTimeout;
    } else if (window.setImmediate) {
      setImmediate = window.setImmediate;
    } else {
      var setImmediateQueue = [];
      var sentinel = String(Math.random());
      window.addEventListener("message", function (e) {
        if (e.data === sentinel) {
          var queue = setImmediateQueue;
          setImmediateQueue = [];
          queue.forEach(function (func) {
            func();
          });
        }
      });

      setImmediate = function setImmediate(func) {
        setImmediateQueue.push(func);
        window.postMessage(sentinel, "*");
      };
    }

    var isScheduled = false;
    var scheduledObservers = [];

    function scheduleCallback(observer) {
      scheduledObservers.push(observer);

      if (!isScheduled) {
        isScheduled = true;
        setImmediate(dispatchCallbacks);
      }
    }

    function wrapIfNeeded(node) {
      return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node) || node;
    }

    function dispatchCallbacks() {
      isScheduled = false;
      var observers = scheduledObservers;
      scheduledObservers = [];
      observers.sort(function (o1, o2) {
        return o1.uid_ - o2.uid_;
      });
      var anyNonEmpty = false;
      observers.forEach(function (observer) {
        var queue = observer.takeRecords();
        removeTransientObserversFor(observer);

        if (queue.length) {
          observer.callback_(queue, observer);
          anyNonEmpty = true;
        }
      });
      if (anyNonEmpty) dispatchCallbacks();
    }

    function removeTransientObserversFor(observer) {
      observer.nodes_.forEach(function (node) {
        var registrations = registrationsTable.get(node);
        if (!registrations) return;
        registrations.forEach(function (registration) {
          if (registration.observer === observer) registration.removeTransientObservers();
        });
      });
    }

    function forEachAncestorAndObserverEnqueueRecord(target, callback) {
      for (var node = target; node; node = node.parentNode) {
        var registrations = registrationsTable.get(node);

        if (registrations) {
          for (var j = 0; j < registrations.length; j++) {
            var registration = registrations[j];
            var options = registration.options;
            if (node !== target && !options.subtree) continue;
            var record = callback(options);
            if (record) registration.enqueue(record);
          }
        }
      }
    }

    var uidCounter = 0;

    function JsMutationObserver(callback) {
      this.callback_ = callback;
      this.nodes_ = [];
      this.records_ = [];
      this.uid_ = ++uidCounter;
    }

    JsMutationObserver.prototype = {
      observe: function observe(target, options) {
        target = wrapIfNeeded(target);

        if (!options.childList && !options.attributes && !options.characterData || options.attributeOldValue && !options.attributes || options.attributeFilter && options.attributeFilter.length && !options.attributes || options.characterDataOldValue && !options.characterData) {
          throw new SyntaxError();
        }

        var registrations = registrationsTable.get(target);
        if (!registrations) registrationsTable.set(target, registrations = []);
        var registration;

        for (var i = 0; i < registrations.length; i++) {
          if (registrations[i].observer === this) {
            registration = registrations[i];
            registration.removeListeners();
            registration.options = options;
            break;
          }
        }

        if (!registration) {
          registration = new Registration(this, target, options);
          registrations.push(registration);
          this.nodes_.push(target);
        }

        registration.addListeners();
      },
      disconnect: function disconnect() {
        this.nodes_.forEach(function (node) {
          var registrations = registrationsTable.get(node);

          for (var i = 0; i < registrations.length; i++) {
            var registration = registrations[i];

            if (registration.observer === this) {
              registration.removeListeners();
              registrations.splice(i, 1);
              break;
            }
          }
        }, this);
        this.records_ = [];
      },
      takeRecords: function takeRecords() {
        var copyOfRecords = this.records_;
        this.records_ = [];
        return copyOfRecords;
      }
    };

    function MutationRecord(type, target) {
      this.type = type;
      this.target = target;
      this.addedNodes = [];
      this.removedNodes = [];
      this.previousSibling = null;
      this.nextSibling = null;
      this.attributeName = null;
      this.attributeNamespace = null;
      this.oldValue = null;
    }

    function copyMutationRecord(original) {
      var record = new MutationRecord(original.type, original.target);
      record.addedNodes = original.addedNodes.slice();
      record.removedNodes = original.removedNodes.slice();
      record.previousSibling = original.previousSibling;
      record.nextSibling = original.nextSibling;
      record.attributeName = original.attributeName;
      record.attributeNamespace = original.attributeNamespace;
      record.oldValue = original.oldValue;
      return record;
    }

    var currentRecord, recordWithOldValue;

    function getRecord(type, target) {
      return currentRecord = new MutationRecord(type, target);
    }

    function getRecordWithOldValue(oldValue) {
      if (recordWithOldValue) return recordWithOldValue;
      recordWithOldValue = copyMutationRecord(currentRecord);
      recordWithOldValue.oldValue = oldValue;
      return recordWithOldValue;
    }

    function clearRecords() {
      currentRecord = recordWithOldValue = undefined;
    }

    function recordRepresentsCurrentMutation(record) {
      return record === recordWithOldValue || record === currentRecord;
    }

    function selectRecord(lastRecord, newRecord) {
      if (lastRecord === newRecord) return lastRecord;
      if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord)) return recordWithOldValue;
      return null;
    }

    function Registration(observer, target, options) {
      this.observer = observer;
      this.target = target;
      this.options = options;
      this.transientObservedNodes = [];
    }

    Registration.prototype = {
      enqueue: function enqueue(record) {
        var records = this.observer.records_;
        var length = records.length;

        if (records.length > 0) {
          var lastRecord = records[length - 1];
          var recordToReplaceLast = selectRecord(lastRecord, record);

          if (recordToReplaceLast) {
            records[length - 1] = recordToReplaceLast;
            return;
          }
        } else {
          scheduleCallback(this.observer);
        }

        records[length] = record;
      },
      addListeners: function addListeners() {
        this.addListeners_(this.target);
      },
      addListeners_: function addListeners_(node) {
        var options = this.options;
        if (options.attributes) node.addEventListener("DOMAttrModified", this, true);
        if (options.characterData) node.addEventListener("DOMCharacterDataModified", this, true);
        if (options.childList) node.addEventListener("DOMNodeInserted", this, true);
        if (options.childList || options.subtree) node.addEventListener("DOMNodeRemoved", this, true);
      },
      removeListeners: function removeListeners() {
        this.removeListeners_(this.target);
      },
      removeListeners_: function removeListeners_(node) {
        var options = this.options;
        if (options.attributes) node.removeEventListener("DOMAttrModified", this, true);
        if (options.characterData) node.removeEventListener("DOMCharacterDataModified", this, true);
        if (options.childList) node.removeEventListener("DOMNodeInserted", this, true);
        if (options.childList || options.subtree) node.removeEventListener("DOMNodeRemoved", this, true);
      },
      addTransientObserver: function addTransientObserver(node) {
        if (node === this.target) return;
        this.addListeners_(node);
        this.transientObservedNodes.push(node);
        var registrations = registrationsTable.get(node);
        if (!registrations) registrationsTable.set(node, registrations = []);
        registrations.push(this);
      },
      removeTransientObservers: function removeTransientObservers() {
        var transientObservedNodes = this.transientObservedNodes;
        this.transientObservedNodes = [];
        transientObservedNodes.forEach(function (node) {
          this.removeListeners_(node);
          var registrations = registrationsTable.get(node);

          for (var i = 0; i < registrations.length; i++) {
            if (registrations[i] === this) {
              registrations.splice(i, 1);
              break;
            }
          }
        }, this);
      },
      handleEvent: function handleEvent(e) {
        e.stopImmediatePropagation();

        switch (e.type) {
          case "DOMAttrModified":
            var name = e.attrName;
            var namespace = e.relatedNode.namespaceURI;
            var target = e.target;
            var record = new getRecord("attributes", target);
            record.attributeName = name;
            record.attributeNamespace = namespace;
            var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
            forEachAncestorAndObserverEnqueueRecord(target, function (options) {
              if (!options.attributes) return;

              if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
                return;
              }

              if (options.attributeOldValue) return getRecordWithOldValue(oldValue);
              return record;
            });
            break;

          case "DOMCharacterDataModified":
            var target = e.target;
            var record = getRecord("characterData", target);
            var oldValue = e.prevValue;
            forEachAncestorAndObserverEnqueueRecord(target, function (options) {
              if (!options.characterData) return;
              if (options.characterDataOldValue) return getRecordWithOldValue(oldValue);
              return record;
            });
            break;

          case "DOMNodeRemoved":
            this.addTransientObserver(e.target);

          case "DOMNodeInserted":
            var changedNode = e.target;
            var addedNodes, removedNodes;

            if (e.type === "DOMNodeInserted") {
              addedNodes = [changedNode];
              removedNodes = [];
            } else {
              addedNodes = [];
              removedNodes = [changedNode];
            }

            var previousSibling = changedNode.previousSibling;
            var nextSibling = changedNode.nextSibling;
            var record = getRecord("childList", e.target.parentNode);
            record.addedNodes = addedNodes;
            record.removedNodes = removedNodes;
            record.previousSibling = previousSibling;
            record.nextSibling = nextSibling;
            forEachAncestorAndObserverEnqueueRecord(e.relatedNode, function (options) {
              if (!options.childList) return;
              return record;
            });
        }

        clearRecords();
      }
    };
    global.JsMutationObserver = JsMutationObserver;

    if (!global.MutationObserver) {
      global.MutationObserver = JsMutationObserver;
      JsMutationObserver._isPolyfilled = true;
    }
  })(self);

  /*
  Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  */
  (function (global, undefined$1) {

    if (global.setImmediate) {
      return;
    }

    var nextHandle = 1; // Spec says greater than zero

    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var setImmediate;

    function addFromSetImmediateArguments(args) {
      tasksByHandle[nextHandle] = partiallyApplied.apply(undefined$1, args);
      return nextHandle++;
    } // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.


    function partiallyApplied(handler) {
      var args = [].slice.call(arguments, 1);
      return function () {
        if (typeof handler === "function") {
          handler.apply(undefined$1, args);
        } else {
          new Function("" + handler)();
        }
      };
    }

    function runIfPresent(handle) {
      // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
      // So if we're currently running a task, we'll need to delay this invocation.
      if (currentlyRunningATask) {
        // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
        // "too much recursion" error.
        setTimeout(partiallyApplied(runIfPresent, handle), 0);
      } else {
        var task = tasksByHandle[handle];

        if (task) {
          currentlyRunningATask = true;

          try {
            task();
          } finally {
            clearImmediate(handle);
            currentlyRunningATask = false;
          }
        }
      }
    }

    function clearImmediate(handle) {
      delete tasksByHandle[handle];
    }

    function installNextTickImplementation() {
      setImmediate = function setImmediate() {
        var handle = addFromSetImmediateArguments(arguments);
        process.nextTick(partiallyApplied(runIfPresent, handle));
        return handle;
      };
    }

    function canUsePostMessage() {
      // The test against `importScripts` prevents this implementation from being installed inside a web worker,
      // where `global.postMessage` means something completely different and can't be used for this purpose.
      if (global.postMessage && !global.importScripts) {
        var postMessageIsAsynchronous = true;
        var oldOnMessage = global.onmessage;

        global.onmessage = function () {
          postMessageIsAsynchronous = false;
        };

        global.postMessage("", "*");
        global.onmessage = oldOnMessage;
        return postMessageIsAsynchronous;
      }
    }

    function installPostMessageImplementation() {
      // Installs an event handler on `global` for the `message` event: see
      // * https://developer.mozilla.org/en/DOM/window.postMessage
      // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
      var messagePrefix = "setImmediate$" + Math.random() + "$";

      var onGlobalMessage = function onGlobalMessage(event) {
        if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
          runIfPresent(+event.data.slice(messagePrefix.length));
        }
      };

      if (global.addEventListener) {
        global.addEventListener("message", onGlobalMessage, false);
      } else {
        global.attachEvent("onmessage", onGlobalMessage);
      }

      setImmediate = function setImmediate() {
        var handle = addFromSetImmediateArguments(arguments);
        global.postMessage(messagePrefix + handle, "*");
        return handle;
      };
    }

    function installMessageChannelImplementation() {
      var channel = new MessageChannel();

      channel.port1.onmessage = function (event) {
        var handle = event.data;
        runIfPresent(handle);
      };

      setImmediate = function setImmediate() {
        var handle = addFromSetImmediateArguments(arguments);
        channel.port2.postMessage(handle);
        return handle;
      };
    }

    function installReadyStateChangeImplementation() {
      var html = doc.documentElement;

      setImmediate = function setImmediate() {
        var handle = addFromSetImmediateArguments(arguments); // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.

        var script = doc.createElement("script");

        script.onreadystatechange = function () {
          runIfPresent(handle);
          script.onreadystatechange = null;
          html.removeChild(script);
          script = null;
        };

        html.appendChild(script);
        return handle;
      };
    }

    function installSetTimeoutImplementation() {
      setImmediate = function setImmediate() {
        var handle = addFromSetImmediateArguments(arguments);
        setTimeout(partiallyApplied(runIfPresent, handle), 0);
        return handle;
      };
    } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

    if ({}.toString.call(global.process) === "[object process]") {
      // For Node.js before 0.9
      installNextTickImplementation();
    } else if (canUsePostMessage()) {
      // For non-IE10 modern browsers
      installPostMessageImplementation();
    } else if (global.MessageChannel) {
      // For web workers, where supported
      installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
      // For IE 6–8
      installReadyStateChangeImplementation();
    } else {
      // For older browsers
      installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
  })(self);

  (function () {
    var DEFAULT_VIEWPORT = 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no';
    var Viewport = {
      ensureViewportElement: function ensureViewportElement() {
        var viewportElement = document.querySelector('meta[name=viewport]');

        if (!viewportElement) {
          viewportElement = document.createElement('meta');
          viewportElement.name = 'viewport';
          document.head.appendChild(viewportElement);
        }

        return viewportElement;
      },
      setup: function setup() {
        var viewportElement = Viewport.ensureViewportElement();

        if (!viewportElement) {
          return;
        }

        if (!viewportElement.hasAttribute('content')) {
          viewportElement.setAttribute('content', DEFAULT_VIEWPORT);
        }
      }
    };
    window.Viewport = Viewport;
  })();

  /**
   * MicroEvent - to make any js object an event emitter (server or browser)
   *
   * - pure javascript - server compatible, browser compatible
   * - dont rely on the browser doms
   * - super simple - you get it immediately, no mystery, no magic involved
   *
   * - create a MicroEventDebug with goodies to debug
   *   - make it safer to use
  */

  /** NOTE: This library is customized for Onsen UI. */
  var MicroEvent = function MicroEvent() {};

  MicroEvent.prototype = {
    on: function on(event, fct) {
      this._events = this._events || {};
      this._events[event] = this._events[event] || [];

      this._events[event].push(fct);
    },
    once: function once(event, fct) {
      var self = this;

      var wrapper = function wrapper() {
        self.off(event, wrapper);
        return fct.apply(null, arguments);
      };

      this.on(event, wrapper);
    },
    off: function off(event, fct) {
      this._events = this._events || {};

      if (event in this._events === false) {
        return;
      }

      this._events[event] = this._events[event].filter(function (_fct) {
        if (fct) {
          return fct !== _fct;
        } else {
          return false;
        }
      });
    },
    emit: function emit(event
    /* , args... */
    ) {
      this._events = this._events || {};

      if (event in this._events === false) {
        return;
      }

      for (var i = 0; i < this._events[event].length; i++) {
        this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
      }
    }
  };
  /**
   * mixin will delegate all MicroEvent.js function in the destination object
   *
   * - require('MicroEvent').mixin(Foobar) will make Foobar able to use MicroEvent
   *
   * @param {Object} the object which will support MicroEvent
  */

  MicroEvent.mixin = function (destObject) {
    var props = ['on', 'once', 'off', 'emit'];

    for (var i = 0; i < props.length; i++) {
      if (typeof destObject === 'function') {
        destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
      } else {
        destObject[props[i]] = MicroEvent.prototype[props[i]];
      }
    }
  };

  window.MicroEvent = MicroEvent;

  var onsElements = {};

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  /**
   * Add vendor prefix.
   *
   * @param {String} name
   * @return {String}
   */

  var prefix = function () {
    var styles = window.getComputedStyle(document.documentElement, '');
    var prefix = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];
    return function (name) {
      return '-' + prefix + '-' + util$4.hyphenate(name);
    };
  }();
  /**
   * Minimal utility library for manipulating element's style.
   * Set element's style.
   *
   * @param {Element} element
   * @param {Object} styles
   * @return {Element}
   */


  var styler = function styler(element, style) {
    Object.keys(style).forEach(function (key) {
      if (key in element.style) {
        element.style[key] = style[key];
      } else if (prefix(key) in element.style) {
        element.style[prefix(key)] = style[key];
      } else {
        util$4.warn('No such style property: ' + key);
      }
    });
    return element;
  };
  /**
   * @param {Element} element
   * @param {String} styles Space-separated CSS properties to remove
   */


  styler.clear = function (element) {
    var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var clearlist = styles.split(/\s+/).reduce(function (r, s) {
      return r.concat([util$4.hyphenate(s), prefix(s)]);
    }, []),
        keys = [];

    var _loop = function _loop(i) {
      var key = element.style[i];

      if (clearlist.length === 0 || clearlist.some(function (s) {
        return key.indexOf(s) === 0;
      })) {
        keys.push(key); // Store the key to fix Safari style indexes
      }
    };

    for (var i = element.style.length - 1; i >= 0; i--) {
      _loop(i);
    }

    keys.forEach(function (key) {
      return element.style[key] = '';
    });
    element.getAttribute('style') === '' && element.removeAttribute('style');
  };

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  var autoStyleEnabled = true; // Modifiers

  var modifiersMap = {
    'quiet': 'material--flat',
    'light': 'material--flat',
    'outline': 'material--flat',
    'cta': '',
    'large--quiet': 'material--flat large',
    'large--cta': 'large',
    'noborder': '',
    'tappable': ''
  };
  var platforms = {};

  platforms.android = function (element) {
    var elementName = element.tagName.toLowerCase();

    if (!util$4.hasModifier(element, 'material')) {
      var oldModifier = element.getAttribute('modifier') || '';
      var newModifier = oldModifier.trim().split(/\s+/).map(function (e) {
        return Object.prototype.hasOwnProperty.call(modifiersMap, e) ? modifiersMap[e] : e;
      });
      newModifier.unshift('material');
      element.setAttribute('modifier', newModifier.join(' ').trim());
    }

    var elements = ['ons-alert-dialog-button', 'ons-toolbar-button', 'ons-back-button', 'ons-button', 'ons-list-item', 'ons-fab', 'ons-speed-dial', 'ons-speed-dial-item', 'ons-tab']; // Effects

    if (elements.indexOf(elementName) !== -1 && !element.hasAttribute('ripple') && !element.querySelector('ons-ripple')) {
      if (elementName === 'ons-list-item') {
        if (element.hasAttribute('tappable')) {
          element.setAttribute('ripple', '');
          element.removeAttribute('tappable');
        }
      } else {
        element.setAttribute('ripple', '');
      }
    }
  };

  platforms.ios = function (element) {
    // Modifiers
    if (util$4.removeModifier(element, 'material')) {
      if (util$4.removeModifier(element, 'material--flat')) {
        util$4.addModifier(element, util$4.removeModifier(element, 'large') ? 'large--quiet' : 'quiet');
      }

      if (!element.getAttribute('modifier')) {
        element.removeAttribute('modifier');
      }
    } // Effects


    if (element.hasAttribute('ripple')) {
      if (element.tagName.toLowerCase() === 'ons-list-item') {
        element.setAttribute('tappable', '');
      }

      element.removeAttribute('ripple');
    }
  };

  var unlocked = {
    android: true
  };

  var getPlatform = function getPlatform(element, force) {
    if (autoStyleEnabled && !element.hasAttribute('disable-auto-styling')) {
      var mobileOS = platform.getMobileOS();

      if (Object.prototype.hasOwnProperty.call(platforms, mobileOS) && (Object.prototype.hasOwnProperty.call(unlocked, mobileOS) || force)) {
        return mobileOS;
      }
    }

    return null;
  };

  var prepare = function prepare(element, force) {
    var p = getPlatform(element, force);
    p && platforms[p](element);
  };

  var mapModifier = function mapModifier(modifier, element, force) {
    if (getPlatform(element, force)) {
      return modifier.split(/\s+/).map(function (m) {
        return Object.prototype.hasOwnProperty.call(modifiersMap, m) ? modifiersMap[m] : m;
      }).join(' ');
    }

    return modifier;
  };

  var restoreModifier = function restoreModifier(element) {
    if (getPlatform(element) === 'android') {
      var modifier = element.getAttribute('modifier') || '';
      var newModifier = mapModifier(modifier, element);

      if (!/(^|\s+)material($|\s+)/i.test(modifier)) {
        newModifier = 'material ' + newModifier;
      }

      if (newModifier !== modifier) {
        element.setAttribute('modifier', newModifier.trim());
        return true;
      }
    }

    return false;
  };

  var autoStyle = {
    isEnabled: function isEnabled() {
      return autoStyleEnabled;
    },
    enable: function enable() {
      return autoStyleEnabled = true;
    },
    disable: function disable() {
      return autoStyleEnabled = false;
    },
    prepare: prepare,
    mapModifier: mapModifier,
    getPlatform: getPlatform,
    restoreModifier: restoreModifier
  };

  var ModifierUtil = /*#__PURE__*/function () {
    function ModifierUtil() {
      _classCallCheck(this, ModifierUtil);
    }

    _createClass(ModifierUtil, null, [{
      key: "diff",
      value:
      /**
       * @param {String} last
       * @param {String} current
       */
      function diff(last, current) {
        last = makeDict(('' + last).trim());
        current = makeDict(('' + current).trim());
        var removed = Object.keys(last).reduce(function (result, token) {
          if (!current[token]) {
            result.push(token);
          }

          return result;
        }, []);
        var added = Object.keys(current).reduce(function (result, token) {
          if (!last[token]) {
            result.push(token);
          }

          return result;
        }, []);
        return {
          added: added,
          removed: removed
        };

        function makeDict(modifier) {
          var dict = {};
          ModifierUtil.split(modifier).forEach(function (token) {
            return dict[token] = token;
          });
          return dict;
        }
      }
      /**
       * @param {Object} diff
       * @param {Array} diff.removed
       * @param {Array} diff.added
       * @param {Object} classList
       * @param {String} template
       */

    }, {
      key: "applyDiffToClassList",
      value: function applyDiffToClassList(diff, classList, template) {
        diff.added.map(function (modifier) {
          return template.replace(/\*/g, modifier);
        }).forEach(function (klass) {
          return klass.split(/\s+/).forEach(function (k) {
            return classList.add(k);
          });
        });
        diff.removed.map(function (modifier) {
          return template.replace(/\*/g, modifier);
        }).forEach(function (klass) {
          return klass.split(/\s+/).forEach(function (k) {
            return classList.remove(k);
          });
        });
      }
      /**
       * @param {Object} diff
       * @param {Array} diff.removed
       * @param {Array} diff.added
       * @param {HTMLElement} element
       * @param {Object} scheme
       */

    }, {
      key: "applyDiffToElement",
      value: function applyDiffToElement(diff, element, scheme) {
        Object.keys(scheme).forEach(function (selector) {
          var targetElements = !selector || util$4.match(element, selector) ? [element] : Array.prototype.filter.call(element.querySelectorAll(selector), function (targetElement) {
            return !util$4.findParent(targetElement, element.tagName, function (parent) {
              return parent === element;
            });
          });

          for (var i = 0; i < targetElements.length; i++) {
            ModifierUtil.applyDiffToClassList(diff, targetElements[i].classList, scheme[selector]);
          }
        });
      }
      /**
       * @param {String} last
       * @param {String} current
       * @param {HTMLElement} element
       * @param {Object} scheme
       */

    }, {
      key: "onModifierChanged",
      value: function onModifierChanged(last, current, element, scheme) {
        ModifierUtil.applyDiffToElement(ModifierUtil.diff(last, current), element, scheme);
        autoStyle.restoreModifier(element);
      }
    }, {
      key: "refresh",
      value: function refresh(element, scheme) {
        ModifierUtil.applyDiffToElement(ModifierUtil.diff('', element.getAttribute('modifier') || ''), element, scheme);
      }
      /**
       * @param {HTMLElement} element
       * @param {Object} scheme
       */

    }, {
      key: "initModifier",
      value: function initModifier(element, scheme) {
        var modifier = element.getAttribute('modifier');

        if (typeof modifier !== 'string') {
          return;
        }

        ModifierUtil.applyDiffToElement({
          removed: [],
          added: ModifierUtil.split(modifier)
        }, element, scheme);
      }
    }, {
      key: "split",
      value: function split(modifier) {
        if (typeof modifier !== 'string') {
          return [];
        }

        return modifier.trim().split(/ +/).filter(function (token) {
          return token !== '';
        });
      }
      /**
       * Add modifier token to an element.
       */

    }, {
      key: "addModifier",
      value: function addModifier(element, modifierToken) {
        if (!element.hasAttribute('modifier')) {
          element.setAttribute('modifier', modifierToken);
        } else {
          var tokens = ModifierUtil.split(element.getAttribute('modifier'));

          if (tokens.indexOf(modifierToken) == -1) {
            tokens.push(modifierToken);
            element.setAttribute('modifier', tokens.join(' '));
          }
        }
      }
      /**
       * Remove modifier token from an element.
       */

    }, {
      key: "removeModifier",
      value: function removeModifier(element, modifierToken) {
        if (element.hasAttribute('modifier')) {
          var tokens = ModifierUtil.split(element.getAttribute('modifier'));
          var index = tokens.indexOf(modifierToken);

          if (index !== -1) {
            tokens.splice(index, 1);
            element.setAttribute('modifier', tokens.join(' '));
          }
        }
      }
    }]);

    return ModifierUtil;
  }();

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */

  var startsWith = function startsWith(s, c) {
    return s.substr(0, c.length) === c;
  };

  var endsWith = function endsWith(s, c) {
    return s.substr(s.length - c.length, c.length) === c;
  };

  var unwrap = function unwrap(s) {
    return s.slice(1, -1);
  };

  var isObjectString = function isObjectString(s) {
    return startsWith(s, '{') && endsWith(s, '}');
  };

  var isArrayString = function isArrayString(s) {
    return startsWith(s, '[') && endsWith(s, ']');
  };

  var isQuotedString = function isQuotedString(s) {
    return startsWith(s, '\'') && endsWith(s, '\'') || startsWith(s, '"') && endsWith(s, '"');
  };

  var error$1 = function error(token, string, originalString) {
    throw new Error('Unexpected token \'' + token + '\' at position ' + (originalString.length - string.length - 1) + ' in string: \'' + originalString + '\'');
  };

  var processToken = function processToken(token, string, originalString) {
    if (token === 'true' || token === 'false') {
      return token === 'true';
    } else if (isQuotedString(token)) {
      return unwrap(token);
    } else if (!isNaN(token)) {
      return +token;
    } else if (isObjectString(token)) {
      return parseObject(unwrap(token));
    } else if (isArrayString(token)) {
      return parseArray(unwrap(token));
    } else {
      error$1(token, string, originalString);
    }
  };

  var nextToken = function nextToken(string) {
    string = string.trim();
    var limit = string.length;

    if (string[0] === ':' || string[0] === ',') {
      limit = 1;
    } else if (string[0] === '{' || string[0] === '[') {
      var c = string.charCodeAt(0);
      var nestedObject = 1;

      for (var i = 1; i < string.length; i++) {
        if (string.charCodeAt(i) === c) {
          nestedObject++;
        } else if (string.charCodeAt(i) === c + 2) {
          nestedObject--;

          if (nestedObject === 0) {
            limit = i + 1;
            break;
          }
        }
      }
    } else if (string[0] === '\'' || string[0] === '"') {
      for (var _i = 1; _i < string.length; _i++) {
        if (string[_i] === string[0]) {
          limit = _i + 1;
          break;
        }
      }
    } else {
      for (var _i2 = 1; _i2 < string.length; _i2++) {
        if ([' ', ',', ':'].indexOf(string[_i2]) !== -1) {
          limit = _i2;
          break;
        }
      }
    }

    return string.slice(0, limit);
  };

  var parseObject = function parseObject(string) {
    var isValidKey = function isValidKey(key) {
      return /^[A-Z_$][A-Z0-9_$]*$/i.test(key);
    };

    string = string.trim();
    var originalString = string;
    var object = {};
    var readingKey = true,
        key,
        previousToken,
        token;

    while (string.length > 0) {
      previousToken = token;
      token = nextToken(string);
      string = string.slice(token.length, string.length).trim();

      if (token === ':' && (!readingKey || !previousToken || previousToken === ',') || token === ',' && readingKey || token !== ':' && token !== ',' && previousToken && previousToken !== ',' && previousToken !== ':') {
        error$1(token, string, originalString);
      } else if (token === ':' && readingKey && previousToken) {
        previousToken = isQuotedString(previousToken) ? unwrap(previousToken) : previousToken;

        if (isValidKey(previousToken)) {
          key = previousToken;
          readingKey = false;
        } else {
          throw new Error('Invalid key token \'' + previousToken + '\' at position 0 in string: \'' + originalString + '\'');
        }
      } else if (token === ',' && !readingKey && previousToken) {
        object[key] = processToken(previousToken, string, originalString);
        readingKey = true;
      }
    }

    if (token) {
      object[key] = processToken(token, string, originalString);
    }

    return object;
  };

  var parseArray = function parseArray(string) {
    string = string.trim();
    var originalString = string;
    var array = [];
    var previousToken, token;

    while (string.length > 0) {
      previousToken = token;
      token = nextToken(string);
      string = string.slice(token.length, string.length).trim();

      if (token === ',' && (!previousToken || previousToken === ',')) {
        error$1(token, string, originalString);
      } else if (token === ',') {
        array.push(processToken(previousToken, string, originalString));
      }
    }

    if (token) {
      if (token !== ',') {
        array.push(processToken(token, string, originalString));
      } else {
        error$1(token, string, originalString);
      }
    }

    return array;
  };

  var parse = function parse(string) {
    string = string.trim();

    if (isObjectString(string)) {
      return parseObject(unwrap(string));
    } else if (isArrayString(string)) {
      return parseArray(unwrap(string));
    } else {
      throw new Error('Provided string must be object or array like: ' + string);
    }
  };

  var util$3 = {};
  var errorPrefix = '[Onsen UI]';
  util$3.globals = {
    fabOffset: 0,
    errorPrefix: errorPrefix,
    supportsPassive: false
  };

  platform._runOnActualPlatform(function () {
    util$3.globals.actualMobileOS = platform.getMobileOS();
    util$3.globals.isWKWebView = platform.isWKWebView();
  });

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        util$3.globals.supportsPassive = true;
      }
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {
  }
  /**
   * @param {Element} el Target
   * @param {String} name Event name
   * @param {Function} handler Event handler
   * @param {Object} [opt] Event options (passive, capture...)
   * @param {Boolean} [isGD] If comes from GestureDetector. Just for testing.
   */


  util$3.addEventListener = function (el, name, handler, opt, isGD) {
    el.addEventListener(name, handler, util$3.globals.supportsPassive ? opt : (opt || {}).capture);
  };

  util$3.removeEventListener = function (el, name, handler, opt, isGD) {
    el.removeEventListener(name, handler, util$3.globals.supportsPassive ? opt : (opt || {}).capture);
  };
  /**
   * @param {String/Function} query dot class name or node name or matcher function.
   * @return {Function}
   */


  util$3.prepareQuery = function (query) {
    return query instanceof Function ? query : function (element) {
      return util$3.match(element, query);
    };
  };
  /**
   * @param {Element} e
   * @param {String/Function} s CSS Selector.
   * @return {Boolean}
   */


  util$3.match = function (e, s) {
    return (e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector).call(e, s);
  };
  /**
   * @param {Element} element
   * @param {String/Function} query dot class name or node name or matcher function.
   * @return {HTMLElement/null}
   */


  util$3.findChild = function (element, query) {
    var match = util$3.prepareQuery(query); // Caution: `element.children` is `undefined` in some environments if `element` is `svg`

    for (var i = 0; i < element.childNodes.length; i++) {
      var node = element.childNodes[i];

      if (node.nodeType !== Node.ELEMENT_NODE) {
        // process only element nodes
        continue;
      }

      if (match(node)) {
        return node;
      }
    }

    return null;
  };
  /**
   * @param {Element} element
   * @param {String/Function} query dot class name or node name or matcher function.
   * @return {HTMLElement/null}
   */


  util$3.findParent = function (element, query, until) {
    var match = util$3.prepareQuery(query);
    var parent = element.parentNode;

    for (;;) {
      if (!parent || parent === document || parent instanceof DocumentFragment || until && until(parent)) {
        return null;
      } else if (match(parent)) {
        return parent;
      }

      parent = parent.parentNode;
    }
  };
  /**
   * @param {Element} element
   * @return {boolean}
   */


  util$3.isAttached = function (element) {
    return document.body.contains(element);
  };
  /**
   * @param {Element} element
   * @return {boolean}
   */


  util$3.hasAnyComponentAsParent = function (element) {
    while (element && document.documentElement !== element) {
      element = element.parentNode;

      if (element && element.nodeName.toLowerCase().match(/(ons-navigator|ons-tabbar|ons-modal)/)) {
        return true;
      }
    }

    return false;
  };
  /**
   * @param {Object} element
   * @return {Array}
   */


  util$3.getAllChildNodes = function (element) {
    var _ref;

    return (_ref = [element]).concat.apply(_ref, _toConsumableArray(Array.from(element.children).map(function (childEl) {
      return util$3.getAllChildNodes(childEl);
    })));
  };
  /**
   * @param {Element} element
   * @return {boolean}
   */


  util$3.isPageControl = function (element) {
    return element.nodeName.match(/^ons-(navigator|splitter|tabbar|page)$/i);
  };
  /**
   * @param {Element} element
   * @param {String} action to propagate
   */


  util$3.propagateAction = function (element, action) {
    for (var i = 0; i < element.childNodes.length; i++) {
      var child = element.childNodes[i];

      if (child[action] instanceof Function) {
        child[action]();
      } else {
        util$3.propagateAction(child, action);
      }
    }
  };
  /**
   * @param {String} string - string to be camelized
   * @return {String} Camelized string
   */


  util$3.camelize = function (string) {
    return string.toLowerCase().replace(/-([a-z])/g, function (m, l) {
      return l.toUpperCase();
    });
  };
  /**
   * @param {String} string - string to be hyphenated
   * @return {String} Hyphenated string
   */


  util$3.hyphenate = function (string) {
    return string.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
  };
  /**
   * @param {String} selector - tag and class only
   * @param {Object} style
   * @param {Element}
   */


  util$3.create = function () {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var classList = selector.split('.');
    var element = document.createElement(classList.shift() || 'div');

    if (classList.length) {
      element.className = classList.join(' ');
    }

    styler(element, style);
    return element;
  };
  /**
   * @param {String} html
   * @return {Element}
   */


  util$3.createElement = function (html) {
    var wrapper = document.createElement('div');

    if (html instanceof DocumentFragment) {
      wrapper.appendChild(document.importNode(html, true));
    } else {
      wrapper.innerHTML = html.trim();
    }

    if (wrapper.children.length > 1) {
      util$3.throw('HTML template must contain a single root element');
    }

    var element = wrapper.children[0];
    wrapper.children[0].remove();
    return element;
  };
  /**
   * @param {String} html
   * @return {HTMLFragment}
   */


  util$3.createFragment = function (html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return document.importNode(template.content, true);
  };
  /*
   * @param {Object} dst Destination object.
   * @param {...Object} src Source object(s).
   * @returns {Object} Reference to `dst`.
   */


  util$3.extend = function (dst) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < args.length; i++) {
      if (args[i]) {
        var keys = Object.keys(args[i]);

        for (var j = 0; j < keys.length; j++) {
          var key = keys[j];
          dst[key] = args[i][key];
        }
      }
    }

    return dst;
  };
  /**
   * @param {Object} arrayLike
   * @return {Array}
   */


  util$3.arrayFrom = function (arrayLike) {
    return Array.prototype.slice.apply(arrayLike);
  };
  /**
   * @param {String} jsonString
   * @param {Object} [failSafe]
   * @return {Object}
   */


  util$3.parseJSONObjectSafely = function (jsonString) {
    var failSafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    try {
      var result = JSON.parse('' + jsonString);

      if (_typeof(result) === 'object' && result !== null) {
        return result;
      }
    } catch (e) {
      return failSafe;
    }

    return failSafe;
  };
  /**
   * @param {String} path - path such as 'myApp.controllers.data.loadData'
   * @return {Any} - whatever is located at that path
   */


  util$3.findFromPath = function (path) {
    path = path.split('.');
    var el = window,
        key;

    while (key = path.shift()) {
      // eslint-disable-line no-cond-assign
      el = el[key];
    }

    return el;
  };
  /**
   * @param {HTMLElement} container - Page or page-container that implements 'topPage'
   * @return {HTMLElement|null} - Visible page element or null if not found.
   */


  util$3.getTopPage = function (container) {
    return container && (container.tagName.toLowerCase() === 'ons-page' ? container : container.topPage) || null;
  };
  /**
   * @param {HTMLElement} container - Element where the search begins
   * @return {HTMLElement|null} - Page element that contains the visible toolbar or null.
   */


  util$3.findToolbarPage = function (container) {
    var page = util$3.getTopPage(container);

    if (page) {
      if (page._canAnimateToolbar()) {
        return page;
      }

      for (var i = 0; i < page._contentElement.children.length; i++) {
        var nextPage = util$3.getTopPage(page._contentElement.children[i]);

        if (nextPage && !/ons-tabbar/i.test(page._contentElement.children[i].tagName)) {
          return util$3.findToolbarPage(nextPage);
        }
      }
    }

    return null;
  };
  /**
   * @param {Element} element
   * @param {String} eventName
   * @param {Object} [detail]
   * @return {CustomEvent}
   */


  util$3.triggerElementEvent = function (target, eventName) {
    var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var event = new CustomEvent(eventName, {
      bubbles: true,
      cancelable: true,
      detail: detail
    });
    Object.keys(detail).forEach(function (key) {
      event[key] = detail[key];
    });
    target.dispatchEvent(event);
    return event;
  };
  /**
   * @param {Element} target
   * @param {String} modifierName
   * @return {Boolean}
   */


  util$3.hasModifier = function (target, modifierName) {
    if (!target.hasAttribute('modifier')) {
      return false;
    }

    return RegExp("(^|\\s+)".concat(modifierName, "($|\\s+)"), 'i').test(target.getAttribute('modifier'));
  };
  /**
   * @param {Element} target
   * @param {String} modifierName
   * @param {Object} options.autoStyle Maps the modifierName to the corresponding styled modifier.
   * @param {Object} options.forceAutoStyle Ignores platform limitation.
   * @return {Boolean} Whether it was added or not.
   */


  util$3.addModifier = function (target, modifierName) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (options.autoStyle) {
      modifierName = autoStyle.mapModifier(modifierName, target, options.forceAutoStyle);
    }

    if (util$3.hasModifier(target, modifierName)) {
      return false;
    }

    target.setAttribute('modifier', ((target.getAttribute('modifier') || '') + ' ' + modifierName).trim());
    return true;
  };
  /**
   * @param {Element} target
   * @param {String} modifierName
   * @param {Object} options.autoStyle Maps the modifierName to the corresponding styled modifier.
   * @param {Object} options.forceAutoStyle Ignores platform limitation.
   * @return {Boolean} Whether it was found or not.
   */


  util$3.removeModifier = function (target, modifierName) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (options.autoStyle) {
      modifierName = autoStyle.mapModifier(modifierName, target, options.forceAutoStyle);
    }

    if (!target.getAttribute('modifier') || !util$3.hasModifier(target, modifierName)) {
      return false;
    }

    var newModifiers = target.getAttribute('modifier').split(/\s+/).filter(function (m) {
      return m && m !== modifierName;
    });
    newModifiers.length ? target.setAttribute('modifier', newModifiers.join(' ')) : target.removeAttribute('modifier');
    return true;
  };
  /**
   * @param {Element} target
   * @param {String} modifierName
   * @param {Boolean} options.force Forces modifier to be added or removed.
   * @param {Object} options.autoStyle Maps the modifierName to the corresponding styled modifier.
   * @param {Boolean} options.forceAutoStyle Ignores platform limitation.
   * @return {Boolean} Whether it was found or not.
   */


  util$3.toggleModifier = function () {
    var options = arguments.length > 2 ? arguments.length <= 2 ? undefined : arguments[2] : {};
    var force = typeof options === 'boolean' ? options : options.force;
    var toggle = typeof force === 'boolean' ? force : !util$3.hasModifier.apply(util$3, arguments);
    toggle ? util$3.addModifier.apply(util$3, arguments) : util$3.removeModifier.apply(util$3, arguments);
  };
  /**
   * @param {Element} el
   * @param {String} defaultClass
   * @param {Object} scheme
   */


  util$3.restoreClass = function (el, defaultClass, scheme) {
    defaultClass.split(/\s+/).forEach(function (c) {
      return c !== '' && !el.classList.contains(c) && el.classList.add(c);
    });
    el.hasAttribute('modifier') && ModifierUtil.refresh(el, scheme);
  }; // TODO: FIX


  util$3.updateParentPosition = function (el) {
    if (!el._parentUpdated && el.parentElement) {
      if (window.getComputedStyle(el.parentElement).getPropertyValue('position') === 'static') {
        el.parentElement.style.position = 'relative';
      }

      el._parentUpdated = true;
    }
  };

  util$3.toggleAttribute = function (element, name, value) {
    if (value) {
      element.setAttribute(name, typeof value === 'boolean' ? '' : value);
    } else {
      element.removeAttribute(name);
    }
  };

  util$3.bindListeners = function (element, listenerNames) {
    listenerNames.forEach(function (name) {
      var boundName = name.replace(/^_[a-z]/, '_bound' + name[1].toUpperCase());
      element[boundName] = element[boundName] || element[name].bind(element);
    });
  };

  util$3.each = function (obj, f) {
    return Object.keys(obj).forEach(function (key) {
      return f(key, obj[key]);
    });
  };
  /**
   * @param {Element} target
   * @param {boolean} hasRipple
   * @param {Object} attrs
   */


  util$3.updateRipple = function (target, hasRipple) {
    var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (hasRipple === undefined) {
      hasRipple = target.hasAttribute('ripple');
    }

    var rippleElement = util$3.findChild(target, 'ons-ripple');

    if (hasRipple) {
      if (!rippleElement) {
        var element = document.createElement('ons-ripple');
        Object.keys(attrs).forEach(function (key) {
          return element.setAttribute(key, attrs[key]);
        });
        target.insertBefore(element, target.firstChild);
      }
    } else if (rippleElement) {
      rippleElement.remove();
    }
  };
  /**
   * @param {String}
   * @return {Object}
   */


  util$3.animationOptionsParse = parse;
  /**
   * @param {*} value
   */

  util$3.isInteger = function (value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  };
  /**
   * @return {Object} Deferred promise.
   */


  util$3.defer = function () {
    var deferred = {};
    deferred.promise = new Promise(function (resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  };
  /**
   * Show warnings when they are enabled.
   *
   * @param {*} arguments to console.warn
   */


  util$3.warn = function () {
    if (!internal$1.config.warningsDisabled) {
      var _console;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_console = console).warn.apply(_console, [errorPrefix].concat(args));
    }
  };

  util$3.throw = function (message) {
    throw new Error("".concat(errorPrefix, " ").concat(message));
  };

  util$3.throwAbstract = function () {
    return util$3.throw('Cannot instantiate abstract class');
  };

  util$3.throwMember = function () {
    return util$3.throw('Class member must be implemented');
  };

  util$3.throwPageLoader = function () {
    return util$3.throw('First parameter should be an instance of PageLoader');
  };

  util$3.throwAnimator = function (el) {
    return util$3.throw("\"Animator\" param must inherit ".concat(el, "Animator"));
  };

  var prevent = function prevent(e) {
    return e.cancelable && e.preventDefault();
  };
  /**
   * Prevent scrolling while draging horizontally on iOS.
   *
   * @param {gd} GestureDetector instance
   */


  util$3.iosPreventScroll = function (gd) {
    if (util$3.globals.actualMobileOS === 'ios') {
      var clean = function clean(e) {
        gd.off('touchmove', prevent);
        gd.off('dragend', clean);
      };

      gd.on('touchmove', prevent);
      gd.on('dragend', clean);
    }
  };
  /**
   * Prevents scroll in underlying pages on iOS. See #2220 #2274 #1949
   *
   * @param {el} HTMLElement that prevents the events
   * @param {add} Boolean Add or remove event listeners
   */


  util$3.iosPageScrollFix = function (add) {
    // Full fix - May cause issues with UIWebView's momentum scroll
    if (util$3.globals.actualMobileOS === 'ios') {
      document.body.classList.toggle('ons-ios-scroll', add); // Allows custom and localized fixes (#2274)

      document.body.classList.toggle('ons-ios-scroll-fix', add);
    }
  };
  /**
   * Distance and deltaTime filter some weird dragstart events that are not fired immediately.
   *
   * @param {event}
   */


  util$3.isValidGesture = function (event) {
    return event.gesture !== undefined && (event.gesture.distance <= 15 || event.gesture.deltaTime <= 100);
  };

  util$3.checkMissingImport = function () {
    for (var _len3 = arguments.length, elementNames = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      elementNames[_key3] = arguments[_key3];
    }

    elementNames.forEach(function (name) {
      if (!onsElements[name]) {
        util$3.throw("Ons".concat(name, " is required but was not imported (Custom Elements)"));
      }
    });
  };
  /**
   * On a given object, defines a boolean property that reflects an attribute of the same name.
   */


  util$3.defineBooleanProperty = function (object, propertyName) {
    Object.defineProperty(object, propertyName, {
      get: function get() {
        return this.hasAttribute(propertyName);
      },
      set: function set(value) {
        if (value) {
          this.setAttribute(propertyName, '');
        } else {
          this.removeAttribute(propertyName);
        }
      },
      configurable: true
    });
  };
  /**
   * Makes a property for a listener e.g. onClick.
   *
   * Returns `onConnected` function which should be called in the element's
   * connectedCallback, and `onDisconnected` function which should be called in
   * the element's disconnectedCallback.
   */


  util$3.defineListenerProperty = function (element, eventName) {
    var camelized = util$3.camelize(eventName);
    var propertyName = 'on' + camelized.charAt(0).toUpperCase() + camelized.slice(1);
    var handler;
    Object.defineProperty(element, propertyName, {
      get: function get() {
        return handler;
      },
      set: function set(newHandler) {
        if (element.isConnected) {
          if (handler) {
            element.removeEventListener(eventName, handler);
          }

          element.addEventListener(eventName, newHandler);
        }

        handler = newHandler;
      },
      configurable: true
    });
    return {
      onConnected: function onConnected() {
        if (element[propertyName]) {
          element.addEventListener(eventName, element[propertyName]);
        }
      },
      onDisconnected: function onDisconnected() {
        if (element[propertyName]) {
          element.removeEventListener(eventName, element[propertyName]);
        }
      }
    };
  };

  var util$4 = util$3;

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */

  var error = function error(message) {
    return util$4.throw("In PageAttributeExpression: ".concat(message));
  };

  var pageAttributeExpression = {
    _variables: {},

    /**
     * Define a variable.
     *
     * @param {String} name Name of the variable
     * @param {String|Function} value Value of the variable. Can be a string or a function. The function must return a string.
     * @param {Boolean} overwrite If this value is false, an error will be thrown when trying to define a variable that has already been defined.
     */
    defineVariable: function defineVariable(name, value) {
      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (typeof name !== 'string') {
        error('Variable name must be a string');
      } else if (typeof value !== 'string' && typeof value !== 'function') {
        error('Variable value must be a string or a function');
      } else if (Object.prototype.hasOwnProperty.call(this._variables, name) && !overwrite) {
        error("\"".concat(name, "\" is already defined"));
      }

      this._variables[name] = value;
    },

    /**
     * Get a variable.
     *
     * @param {String} name Name of the variable.
     * @return {String|Function|null}
     */
    getVariable: function getVariable(name) {
      if (!Object.prototype.hasOwnProperty.call(this._variables, name)) {
        return null;
      }

      return this._variables[name];
    },

    /**
     * Remove a variable.
     *
     * @param {String} name Name of the varaible.
     */
    removeVariable: function removeVariable(name) {
      delete this._variables[name];
    },

    /**
     * Get all variables.
     *
     * @return {Object}
     */
    getAllVariables: function getAllVariables() {
      return this._variables;
    },
    _parsePart: function _parsePart(part) {
      var c,
          inInterpolation = false,
          currentIndex = 0;
      var tokens = [];

      if (part.length === 0) {
        error('Unable to parse empty string');
      }

      for (var i = 0; i < part.length; i++) {
        c = part.charAt(i);

        if (c === '$' && part.charAt(i + 1) === '{') {
          if (inInterpolation) {
            error('Nested interpolation not supported');
          }

          var token = part.substring(currentIndex, i);

          if (token.length > 0) {
            tokens.push(part.substring(currentIndex, i));
          }

          currentIndex = i;
          inInterpolation = true;
        } else if (c === '}') {
          if (!inInterpolation) {
            error('} must be preceeded by ${');
          }

          var _token = part.substring(currentIndex, i + 1);

          if (_token.length > 0) {
            tokens.push(part.substring(currentIndex, i + 1));
          }

          currentIndex = i + 1;
          inInterpolation = false;
        }
      }

      if (inInterpolation) {
        error('Unterminated interpolation');
      }

      tokens.push(part.substring(currentIndex, part.length));
      return tokens;
    },
    _replaceToken: function _replaceToken(token) {
      var re = /^\${(.*?)}$/,
          match = token.match(re);

      if (match) {
        var name = match[1].trim();
        var variable = this.getVariable(name);

        if (variable === null) {
          error("Variable \"".concat(name, "\" does not exist"));
        } else if (typeof variable === 'string') {
          return variable;
        } else {
          var rv = variable();

          if (typeof rv !== 'string') {
            error('Must return a string');
          }

          return rv;
        }
      } else {
        return token;
      }
    },
    _replaceTokens: function _replaceTokens(tokens) {
      return tokens.map(this._replaceToken.bind(this));
    },
    _parseExpression: function _parseExpression(expression) {
      return expression.split(',').map(function (part) {
        return part.trim();
      }).map(this._parsePart.bind(this)).map(this._replaceTokens.bind(this)).map(function (part) {
        return part.join('');
      });
    },

    /**
     * Evaluate an expression.
     *
     * @param {String} expression An page attribute expression.
     * @return {Array}
     */
    evaluate: function evaluate(expression) {
      if (!expression) {
        return [];
      }

      return this._parseExpression(expression);
    }
  }; // Define default variables.

  pageAttributeExpression.defineVariable('mobileOS', platform.getMobileOS());
  pageAttributeExpression.defineVariable('iOSDevice', platform.getIOSDevice());
  pageAttributeExpression.defineVariable('runtime', function () {
    return platform.isWebView() ? 'cordova' : 'browser';
  });

  var internal = {};
  internal.config = {
    autoStatusBarFill: true,
    animationsDisabled: false,
    warningsDisabled: false
  };
  internal.nullElement = window.document.createElement('div');
  /**
   * @return {Boolean}
   */

  internal.isEnabledAutoStatusBarFill = function () {
    return !!internal.config.autoStatusBarFill;
  };
  /**
   * @param {String} html
   * @return {String}
   */


  internal.normalizePageHTML = function (html) {
    return ('' + html).trim();
  };

  internal.waitDOMContentLoaded = function (callback) {
    if (window.document.readyState === 'loading' || window.document.readyState == 'uninitialized') {
      var wrappedCallback = function wrappedCallback() {
        callback();
        window.document.removeEventListener('DOMContentLoaded', wrappedCallback);
      };

      window.document.addEventListener('DOMContentLoaded', wrappedCallback);
    } else {
      setImmediate(callback);
    }
  };

  internal.autoStatusBarFill = function (action) {
    var onReady = function onReady() {
      if (internal.shouldFillStatusBar()) {
        action();
      }

      document.removeEventListener('deviceready', onReady);
    };

    if ((typeof device === "undefined" ? "undefined" : _typeof(device)) === 'object') {
      document.addEventListener('deviceready', onReady);
    } else if (['complete', 'interactive'].indexOf(document.readyState) === -1) {
      internal.waitDOMContentLoaded(onReady);
    } else {
      onReady();
    }
  };

  internal.shouldFillStatusBar = function () {
    return internal.isEnabledAutoStatusBarFill() && (platform.isWebView() && (platform.isIOS7above() || platform.isIPadOS()) && !platform.isIPhoneX() || document.body.querySelector('.ons-status-bar-mock.ios'));
  };

  internal.templateStore = {
    _storage: {},

    /**
     * @param {String} key
     * @return {String/null} template
     */
    get: function get(key) {
      return internal.templateStore._storage[key] || null;
    },

    /**
     * @param {String} key
     * @param {String} template
     */
    set: function set(key, template) {
      internal.templateStore._storage[key] = template;
    }
  };
  /**
   * @param {String} page
   * @return {Promise}
   */

  internal.getTemplateHTMLAsync = function (page) {
    return new Promise(function (resolve, reject) {
      internal.waitDOMContentLoaded(function () {
        var cache = internal.templateStore.get(page);

        if (cache) {
          if (cache instanceof DocumentFragment) {
            return resolve(cache);
          }

          var html = typeof cache === 'string' ? cache : cache[1];
          return resolve(internal.normalizePageHTML(html));
        }

        var local = window.document.getElementById(page);

        if (local) {
          var _html = local.textContent || local.content;

          return resolve(_html);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('GET', page, true);

        xhr.onload = function () {
          var html = xhr.responseText;

          if (xhr.status >= 400 && xhr.status < 600) {
            reject(html);
          } else {
            // Refresh script tags
            var fragment = util$4.createFragment(html);
            util$4.arrayFrom(fragment.querySelectorAll('script')).forEach(function (el) {
              var script = document.createElement('script');
              script.type = el.type || 'text/javascript';
              script.appendChild(document.createTextNode(el.text || el.textContent || el.innerHTML));
              el.parentNode.replaceChild(script, el);
            });
            internal.templateStore.set(page, fragment);
            resolve(fragment);
          }
        };

        xhr.onerror = function () {
          util$4.throw("Page template not found: ".concat(page));
        };

        xhr.send(null);
      });
    });
  };
  /**
   * @param {String} page
   * @return {Promise}
   */


  internal.getPageHTMLAsync = function (page) {
    var pages = pageAttributeExpression.evaluate(page);

    var getPage = function getPage(page) {
      if (typeof page !== 'string') {
        return Promise.reject('Must specify a page.');
      }

      return internal.getTemplateHTMLAsync(page).catch(function (error) {
        if (pages.length === 0) {
          return Promise.reject(error);
        }

        return getPage(pages.shift());
      });
    };

    return getPage(pages.shift());
  };

  var internal$1 = internal;

  var AnimatorFactory = /*#__PURE__*/function () {
    /**
     * @param {Object} opts
     * @param {Object} opts.animators The dictionary for animator classes
     * @param {Function} opts.baseClass The base class of animators
     * @param {String} [opts.baseClassName] The name of the base class of animators
     * @param {String} [opts.defaultAnimation] The default animation name
     * @param {Object} [opts.defaultAnimationOptions] The default animation options
     */
    function AnimatorFactory(opts) {
      _classCallCheck(this, AnimatorFactory);

      this._animators = opts.animators;
      this._baseClass = opts.baseClass;
      this._baseClassName = opts.baseClassName || opts.baseClass.name;
      this._animation = opts.defaultAnimation || 'default';
      this._animationOptions = opts.defaultAnimationOptions || {};

      if (!this._animators[this._animation]) {
        util$4.throw('No such animation: ' + this._animation);
      }
    }
    /**
     * @param {String} jsonString
     * @return {Object/null}
     */


    _createClass(AnimatorFactory, [{
      key: "setAnimationOptions",
      value:
      /**
       * @param {Object} options
       */
      function setAnimationOptions(options) {
        this._animationOptions = options;
      }
      /**
       * @param {Object} options
       * @param {String} [options.animation] The animation name
       * @param {Object} [options.animationOptions] The animation options
       * @param {Object} defaultAnimator The default animator instance
       * @return {Object} An animator instance
       */

    }, {
      key: "newAnimator",
      value: function newAnimator() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var defaultAnimator = arguments.length > 1 ? arguments[1] : undefined;
        var animator = null;

        if (options.animation instanceof this._baseClass) {
          return options.animation;
        }

        var Animator = null;

        if (typeof options.animation === 'string') {
          Animator = this._animators[options.animation];
        }

        if (!Animator && defaultAnimator) {
          animator = defaultAnimator;
        } else {
          Animator = Animator || this._animators[this._animation];
          var animationOpts = util$4.extend({}, this._animationOptions, options.animationOptions || {}, internal$1.config.animationsDisabled ? {
            duration: 0,
            delay: 0
          } : {});
          animator = new Animator(animationOpts);

          if (typeof animator === 'function') {
            animator = new animator(animationOpts); // eslint-disable-line new-cap
          }
        }

        if (!(animator instanceof this._baseClass)) {
          util$4.throw("\"animator\" is not an instance of ".concat(this._baseClassName));
        }

        return animator;
      }
    }], [{
      key: "parseAnimationOptionsString",
      value: function parseAnimationOptionsString(jsonString) {
        try {
          if (typeof jsonString === 'string') {
            var result = util$4.animationOptionsParse(jsonString);

            if (_typeof(result) === 'object' && result !== null) {
              return result;
            } else {
              console.error('"animation-options" attribute must be a JSON object string: ' + jsonString);
            }
          }

          return {};
        } catch (e) {
          console.error('"animation-options" attribute must be a JSON object string: ' + jsonString);
          return {};
        }
      }
    }]);

    return AnimatorFactory;
  }();

  var util$2 = {
    _ready: false,
    _domContentLoaded: false,
    _onDOMContentLoaded: function _onDOMContentLoaded() {
      util$2._domContentLoaded = true;

      if (platform.isWebView()) {
        window.document.addEventListener('deviceready', function () {
          util$2._ready = true;
        }, false);
      } else {
        util$2._ready = true;
      }
    },
    addBackButtonListener: function addBackButtonListener(fn) {
      if (!this._domContentLoaded) {
        throw new Error('This method is available after DOMContentLoaded');
      }

      if (this._ready) {
        window.document.addEventListener('backbutton', fn, false);
      } else {
        window.document.addEventListener('deviceready', function () {
          window.document.addEventListener('backbutton', fn, false);
        });
      }
    },
    removeBackButtonListener: function removeBackButtonListener(fn) {
      if (!this._domContentLoaded) {
        throw new Error('This method is available after DOMContentLoaded');
      }

      if (this._ready) {
        window.document.removeEventListener('backbutton', fn, false);
      } else {
        window.document.addEventListener('deviceready', function () {
          window.document.removeEventListener('backbutton', fn, false);
        });
      }
    }
  };
  window.addEventListener('DOMContentLoaded', function () {
    return util$2._onDOMContentLoaded();
  }, false);
  var HandlerRepository = {
    _store: {},
    _genId: function () {
      var i = 0;
      return function () {
        return i++;
      };
    }(),
    set: function set(element, handler) {
      if (element.dataset.deviceBackButtonHandlerId) {
        this.remove(element);
      }

      var id = element.dataset.deviceBackButtonHandlerId = HandlerRepository._genId();

      this._store[id] = handler;
    },
    remove: function remove(element) {
      if (element.dataset.deviceBackButtonHandlerId) {
        delete this._store[element.dataset.deviceBackButtonHandlerId];
        delete element.dataset.deviceBackButtonHandlerId;
      }
    },
    get: function get(element) {
      if (!element.dataset.deviceBackButtonHandlerId) {
        return undefined;
      }

      var id = element.dataset.deviceBackButtonHandlerId;

      if (!this._store[id]) {
        throw new Error();
      }

      return this._store[id];
    },
    has: function has(element) {
      if (!element.dataset) {
        return false;
      }

      var id = element.dataset.deviceBackButtonHandlerId;
      return !!this._store[id];
    }
  };

  var DeviceBackButtonDispatcher = /*#__PURE__*/function () {
    function DeviceBackButtonDispatcher() {
      _classCallCheck(this, DeviceBackButtonDispatcher);

      this._isEnabled = false;
      this._boundCallback = this._callback.bind(this);
    }
    /**
     * Enable to handle 'backbutton' events.
     */


    _createClass(DeviceBackButtonDispatcher, [{
      key: "enable",
      value: function enable() {
        if (!this._isEnabled) {
          util$2.addBackButtonListener(this._boundCallback);
          this._isEnabled = true;
        }
      }
      /**
       * Disable to handle 'backbutton' events.
       */

    }, {
      key: "disable",
      value: function disable() {
        if (this._isEnabled) {
          util$2.removeBackButtonListener(this._boundCallback);
          this._isEnabled = false;
        }
      }
      /**
       * Fire a 'backbutton' event manually.
       */

    }, {
      key: "fireDeviceBackButtonEvent",
      value: function fireDeviceBackButtonEvent() {
        var event = document.createEvent('Event');
        event.initEvent('backbutton', true, true);
        document.dispatchEvent(event);
      }
    }, {
      key: "_callback",
      value: function _callback() {
        this._dispatchDeviceBackButtonEvent();
      }
      /**
       * @param {HTMLElement} element
       * @param {Function} callback
       */

    }, {
      key: "createHandler",
      value: function createHandler(element, callback) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('element must be an instance of HTMLElement');
        }

        if (!(callback instanceof Function)) {
          throw new Error('callback must be an instance of Function');
        }

        var handler = {
          _callback: callback,
          _element: element,
          disable: function disable() {
            HandlerRepository.remove(element);
          },
          setListener: function setListener(callback) {
            this._callback = callback;
          },
          enable: function enable() {
            HandlerRepository.set(element, this);
          },
          isEnabled: function isEnabled() {
            return HandlerRepository.get(element) === this;
          },
          destroy: function destroy() {
            HandlerRepository.remove(element);
            this._callback = this._element = null;
          }
        };
        handler.enable();
        return handler;
      }
    }, {
      key: "_dispatchDeviceBackButtonEvent",
      value: function _dispatchDeviceBackButtonEvent() {
        var tree = this._captureTree();

        var element = this._findHandlerLeafElement(tree);

        var handler = HandlerRepository.get(element);

        handler._callback(createEvent(element));

        function createEvent(element) {
          return {
            _element: element,
            callParentHandler: function callParentHandler() {
              var parent = this._element.parentNode;

              while (parent) {
                handler = HandlerRepository.get(parent);

                if (handler) {
                  return handler._callback(createEvent(parent));
                }

                parent = parent.parentNode;
              }
            }
          };
        }
      }
      /**
       * @return {Object}
       */

    }, {
      key: "_captureTree",
      value: function _captureTree() {
        return createTree(document.body);

        function createTree(element) {
          var tree = {
            element: element,
            children: Array.prototype.concat.apply([], arrayOf(element.children).map(function (childElement) {
              if (childElement.style.display === 'none' || childElement._isShown === false) {
                return [];
              }

              if (childElement.children.length === 0 && !HandlerRepository.has(childElement)) {
                return [];
              }

              var result = createTree(childElement);

              if (result.children.length === 0 && !HandlerRepository.has(result.element)) {
                return [];
              }

              return [result];
            }))
          };

          if (!HandlerRepository.has(tree.element)) {
            for (var i = 0; i < tree.children.length; i++) {
              var subTree = tree.children[i];

              if (HandlerRepository.has(subTree.element)) {
                return subTree;
              }
            }
          }

          return tree;
        }

        function arrayOf(target) {
          var result = [];

          for (var i = 0; i < target.length; i++) {
            result.push(target[i]);
          }

          return result;
        }
      }
      /**
       * @param {Object} tree
       * @return {HTMLElement}
       */

    }, {
      key: "_findHandlerLeafElement",
      value: function _findHandlerLeafElement(tree) {
        return find(tree);

        function find(node) {
          if (node.children.length === 0) {
            return node.element;
          }

          if (node.children.length === 1) {
            return find(node.children[0]);
          }

          return node.children.map(function (childNode) {
            return childNode.element;
          }).reduce(function (left, right) {
            if (!left) {
              return right;
            }

            var leftZ = parseInt(window.getComputedStyle(left, '').zIndex, 10);
            var rightZ = parseInt(window.getComputedStyle(right, '').zIndex, 10);

            if (!isNaN(leftZ) && !isNaN(rightZ)) {
              return leftZ > rightZ ? left : right;
            }

            throw new Error('Capturing backbutton-handler is failure.');
          }, null);
        }
      }
    }]);

    return DeviceBackButtonDispatcher;
  }();

  var deviceBackButtonDispatcher = new DeviceBackButtonDispatcher();

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  internal$1.AnimatorFactory = AnimatorFactory;
  internal$1.ModifierUtil = ModifierUtil;
  internal$1.dbbDispatcher = deviceBackButtonDispatcher;

  function setup$1(ons) {
    internal$1.waitDOMContentLoaded(function () {
      register('script[type="text/template"]');
      register('script[type="text/ng-template"]');
      register('template');

      function register(query) {
        var templates = window.document.querySelectorAll(query);

        for (var i = 0; i < templates.length; i++) {
          internal$1.templateStore.set(templates[i].getAttribute('id'), templates[i].textContent || templates[i].content);
        }
      }
    });

    if (window._onsLoaded) {
      ons._util.warn('Onsen UI is loaded more than once.');
    }

    window._onsLoaded = true;
    ons.ready(function () {
      ons.enableDeviceBackButtonHandler();
      ons._defaultDeviceBackButtonHandler = ons._internal.dbbDispatcher.createHandler(window.document.body, function () {
        if (Object.hasOwnProperty.call(navigator, 'app')) {
          navigator.app.exitApp();
        } else {
          console.warn('Could not close the app. Is \'cordova.js\' included?\nError: \'window.navigator.app\' is undefined.');
        }
      });
      document.body._gestureDetector = new ons.GestureDetector(document.body, {
        passive: true
      }); // Simulate Device Back Button on ESC press

      if (!ons.platform.isWebView()) {
        document.body.addEventListener('keydown', function (event) {
          if (event.keyCode === 27) {
            ons.fireDeviceBackButtonEvent();
          }
        });
      } // setup loading placeholder


      ons._setupLoadingPlaceHolders();
    }); // viewport.js

    Viewport.setup();
  }

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */

  var TIMEOUT_RATIO = 1.4;
  var util$1 = {}; // capitalize string

  util$1.capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * @param {Object} params
   * @param {String} params.property
   * @param {Float} params.duration
   * @param {String} params.timing
   */


  util$1.buildTransitionValue = function (params) {
    params.property = params.property || 'all';
    params.duration = params.duration || 0.4;
    params.timing = params.timing || 'linear';
    var props = params.property.split(/ +/);
    return props.map(function (prop) {
      return prop + ' ' + params.duration + 's ' + params.timing;
    }).join(', ');
  };
  /**
   * Add an event handler on "transitionend" event.
   */


  util$1.onceOnTransitionEnd = function (element, callback) {
    if (!element) {
      return function () {};
    }

    var removeListeners = function removeListeners() {
      util$1._transitionEndEvents.forEach(function (eventName) {
        element.removeEventListener(eventName, fn, false);
      });
    };

    var fn = function fn(event) {
      if (element == event.target) {
        event.stopPropagation();
        removeListeners();
        callback();
      }
    };

    util$1._transitionEndEvents.forEach(function (eventName) {
      element.addEventListener(eventName, fn, false);
    });

    return removeListeners;
  };

  util$1._transitionEndEvents = function () {
    if ('ontransitionend' in window) {
      return ['transitionend'];
    }

    if ('onwebkittransitionend' in window) {
      return ['webkitTransitionEnd'];
    }

    if (util$1.vendorPrefix === 'webkit' || util$1.vendorPrefix === 'o' || util$1.vendorPrefix === 'moz' || util$1.vendorPrefix === 'ms') {
      return [util$1.vendorPrefix + 'TransitionEnd', 'transitionend'];
    }

    return [];
  }();

  util$1._cssPropertyDict = function () {
    var styles = window.getComputedStyle(document.documentElement, '');
    var dict = {};
    var a = 'A'.charCodeAt(0);
    var z = 'z'.charCodeAt(0);

    var upper = function upper(s) {
      return s.substr(1).toUpperCase();
    };

    for (var i = 0; i < styles.length; i++) {
      var key = styles[i].replace(/^[-]+/, '').replace(/[-][a-z]/g, upper).replace(/^moz/, 'Moz');

      if (a <= key.charCodeAt(0) && z >= key.charCodeAt(0)) {
        if (key !== 'cssText' && key !== 'parentText') {
          dict[key] = true;
        }
      }
    }

    return dict;
  }();

  util$1.hasCssProperty = function (name) {
    return name in util$1._cssPropertyDict;
  };
  /**
   * Vendor prefix for css property.
   */


  util$1.vendorPrefix = function () {
    var styles = window.getComputedStyle(document.documentElement, ''),
        pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];
    return pre;
  }();

  util$1.forceLayoutAtOnce = function (elements, callback) {
    this.batchImmediate(function () {
      elements.forEach(function (element) {
        // force layout
        element.offsetHeight;
      });
      callback();
    });
  };

  util$1.batchImmediate = function () {
    var callbacks = [];
    return function (callback) {
      if (callbacks.length === 0) {
        setImmediate(function () {
          var concreateCallbacks = callbacks.slice(0);
          callbacks = [];
          concreateCallbacks.forEach(function (callback) {
            callback();
          });
        });
      }

      callbacks.push(callback);
    };
  }();

  util$1.batchAnimationFrame = function () {
    var callbacks = [];

    var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      setTimeout(callback, 1000 / 60);
    };

    return function (callback) {
      if (callbacks.length === 0) {
        raf(function () {
          var concreateCallbacks = callbacks.slice(0);
          callbacks = [];
          concreateCallbacks.forEach(function (callback) {
            callback();
          });
        });
      }

      callbacks.push(callback);
    };
  }();

  util$1.transitionPropertyName = function () {
    if (util$1.hasCssProperty('transitionDuration')) {
      return 'transition';
    }

    if (util$1.hasCssProperty(util$1.vendorPrefix + 'TransitionDuration')) {
      return util$1.vendorPrefix + 'Transition';
    }

    throw new Error('Invalid state');
  }();
  /**
   * @param {HTMLElement} element
   */


  var Animit = function Animit(element, defaults) {
    if (!(this instanceof Animit)) {
      return new Animit(element, defaults);
    }

    if (element instanceof HTMLElement) {
      this.elements = [element];
    } else if (Object.prototype.toString.call(element) === '[object Array]') {
      this.elements = element;
    } else {
      throw new Error('First argument must be an array or an instance of HTMLElement.');
    }

    this.defaults = defaults;
    this.transitionQueue = [];
    this.lastStyleAttributeDict = [];
  };

  Animit.prototype = {
    /**
     * @property {Array}
     */
    transitionQueue: undefined,

    /**
     * @property {Array}
     */
    elements: undefined,

    /**
     * @property {Object}
     */
    defaults: undefined,

    /**
     * Start animation sequence with passed animations.
     *
     * @param {Function} callback
     */
    play: function play(callback) {
      if (typeof callback === 'function') {
        this.transitionQueue.push(function (done) {
          callback();
          done();
        });
      }

      this.startAnimation();
      return this;
    },

    /**
     * Most of the animations follow this default process.
     *
     * @param {from} css or options object containing css
     * @param {to} css or options object containing css
     * @param {delay} delay to wait
     */
    default: function _default(from, to, delay) {
      function step(params, duration, timing) {
        if (params.duration !== undefined) {
          duration = params.duration;
        }

        if (params.timing !== undefined) {
          timing = params.timing;
        }

        return {
          css: params.css || params,
          duration: duration,
          timing: timing
        };
      }

      return this.saveStyle().queue(step(from, 0, this.defaults.timing)).wait(delay === undefined ? this.defaults.delay : delay).queue(step(to, this.defaults.duration, this.defaults.timing)).restoreStyle();
    },

    /**
     * Queue transition animations or other function.
     *
     * e.g. animit(elt).queue({color: 'red'})
     * e.g. animit(elt).queue({color: 'red'}, {duration: 0.4})
     * e.g. animit(elt).queue({css: {color: 'red'}, duration: 0.2})
     *
     * @param {Object|Animit.Transition|Function} transition
     * @param {Object} [options]
     */
    queue: function queue(transition, options) {
      var queue = this.transitionQueue;

      if (transition && options) {
        options.css = transition;
        transition = new Animit.Transition(options);
      }

      if (!(transition instanceof Function || transition instanceof Animit.Transition)) {
        if (transition.css) {
          transition = new Animit.Transition(transition);
        } else {
          transition = new Animit.Transition({
            css: transition
          });
        }
      }

      if (transition instanceof Function) {
        queue.push(transition);
      } else if (transition instanceof Animit.Transition) {
        queue.push(transition.build());
      } else {
        throw new Error('Invalid arguments');
      }

      return this;
    },

    /**
     * Queue transition animations.
     *
     * @param {Float} seconds
     */
    wait: function wait(seconds) {
      if (seconds > 0) {
        this.transitionQueue.push(function (done) {
          setTimeout(done, 1000 * seconds);
        });
      }

      return this;
    },
    saveStyle: function saveStyle() {
      this.transitionQueue.push(function (done) {
        this.elements.forEach(function (element, index) {
          var css = this.lastStyleAttributeDict[index] = {};

          for (var i = 0; i < element.style.length; i++) {
            css[element.style[i]] = element.style[element.style[i]];
          }
        }.bind(this));
        done();
      }.bind(this));
      return this;
    },

    /**
     * Restore element's style.
     *
     * @param {Object} [options]
     * @param {Float} [options.duration]
     * @param {String} [options.timing]
     * @param {String} [options.transition]
     */
    restoreStyle: function restoreStyle(options) {
      options = options || {};
      var self = this;

      if (options.transition && !options.duration) {
        throw new Error('"options.duration" is required when "options.transition" is enabled.');
      }

      var transitionName = util$1.transitionPropertyName;

      if (options.transition || options.duration && options.duration > 0) {
        var transitionValue = options.transition || 'all ' + options.duration + 's ' + (options.timing || 'linear');
        this.transitionQueue.push(function (done) {
          var elements = this.elements;
          var timeoutId;

          var clearTransition = function clearTransition() {
            elements.forEach(function (element) {
              element.style[transitionName] = '';
            });
          }; // add "transitionend" event handler


          var removeListeners = util$1.onceOnTransitionEnd(elements[0], function () {
            clearTimeout(timeoutId);
            clearTransition();
            done();
          }); // for fail safe.

          timeoutId = setTimeout(function () {
            removeListeners();
            clearTransition();
            done();
          }, options.duration * 1000 * TIMEOUT_RATIO); // transition and style settings

          elements.forEach(function (element, index) {
            var css = self.lastStyleAttributeDict[index];

            if (!css) {
              throw new Error('restoreStyle(): The style is not saved. Invoke saveStyle() before.');
            }

            self.lastStyleAttributeDict[index] = undefined;
            var name;

            for (var i = 0, len = element.style.length; i < len; i++) {
              name = element.style[i];

              if (css[name] === undefined) {
                css[name] = '';
              }
            }

            element.style[transitionName] = transitionValue;
            Object.keys(css).forEach(function (key) {
              if (key !== transitionName) {
                element.style[key] = css[key];
              }
            });
            element.style[transitionName] = transitionValue;
          });
        });
      } else {
        this.transitionQueue.push(function (done) {
          reset();
          done();
        });
      }

      return this;

      function reset() {
        // Clear transition animation settings.
        self.elements.forEach(function (element, index) {
          element.style[transitionName] = 'none';
          var css = self.lastStyleAttributeDict[index];

          if (!css) {
            throw new Error('restoreStyle(): The style is not saved. Invoke saveStyle() before.');
          }

          self.lastStyleAttributeDict[index] = undefined;

          for (var i = 0; i < element.style.length; i++) {
            element.style[i];

            if (typeof css[element.style[i]] === 'undefined') {
              css[element.style[i]] = '';
            }
          }

          Object.keys(css).forEach(function (key) {
            element.style[key] = css[key];
          });
        });
      }
    },

    /**
     * Start animation sequence.
     */
    startAnimation: function startAnimation() {
      this._dequeueTransition();

      return this;
    },
    _dequeueTransition: function _dequeueTransition() {
      var transition = this.transitionQueue.shift();

      if (this._currentTransition) {
        throw new Error('Current transition exists.');
      }

      this._currentTransition = transition;
      var self = this;
      var called = false;

      var done = function done() {
        if (!called) {
          called = true;
          self._currentTransition = undefined;

          self._dequeueTransition();
        } else {
          throw new Error('Invalid state: This callback is called twice.');
        }
      };

      if (transition) {
        transition.call(this, done);
      }
    }
  };
  /**
   * @param {Animit} arguments
   */

  Animit.runAll = function
    /* arguments... */
  () {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].play();
    }
  };
  /**
   * @param {Object} options
   * @param {Float} [options.duration]
   * @param {String} [options.property]
   * @param {String} [options.timing]
   */


  Animit.Transition = function (options) {
    this.options = options || {};
    this.options.duration = this.options.duration || 0;
    this.options.timing = this.options.timing || 'linear';
    this.options.css = this.options.css || {};
    this.options.property = this.options.property || 'all';
  };

  Animit.Transition.prototype = {
    /**
     * @param {HTMLElement} element
     * @return {Function}
     */
    build: function build() {
      if (Object.keys(this.options.css).length === 0) {
        throw new Error('options.css is required.');
      }

      var css = createActualCssProps(this.options.css);

      if (this.options.duration > 0) {
        var transitionValue = util$1.buildTransitionValue(this.options);
        var self = this;
        return function (callback) {
          var elements = this.elements;
          var timeout = self.options.duration * 1000 * TIMEOUT_RATIO;
          var timeoutId;
          var removeListeners = util$1.onceOnTransitionEnd(elements[0], function () {
            clearTimeout(timeoutId);
            callback();
          });
          timeoutId = setTimeout(function () {
            removeListeners();
            callback();
          }, timeout);
          elements.forEach(function (element) {
            element.style[util$1.transitionPropertyName] = transitionValue;
            Object.keys(css).forEach(function (name) {
              element.style[name] = css[name];
            });
          });
        };
      }

      if (this.options.duration <= 0) {
        return function (callback) {
          var elements = this.elements;
          elements.forEach(function (element) {
            element.style[util$1.transitionPropertyName] = '';
            Object.keys(css).forEach(function (name) {
              element.style[name] = css[name];
            });
          });

          if (elements.length > 0) {
            util$1.forceLayoutAtOnce(elements, function () {
              util$1.batchAnimationFrame(callback);
            });
          } else {
            util$1.batchAnimationFrame(callback);
          }
        };
      }

      function createActualCssProps(css) {
        var result = {};
        Object.keys(css).forEach(function (name) {
          var value = css[name];

          if (util$1.hasCssProperty(name)) {
            result[name] = value;
            return;
          }

          var prefixed = util$1.vendorPrefix + util$1.capitalize(name);

          if (util$1.hasCssProperty(prefixed)) {
            result[prefixed] = value;
          } else {
            result[prefixed] = value;
            result[name] = value;
          }
        });
        return result;
      }
    }
  };

  /*
   * Gesture detector library that forked from github.com/EightMedia/hammer.js.
   */
  var Event$1, Utils, Detection, PointerEvent;
  /**
   * @object ons.GestureDetector
   * @category gesture
   * @description
   *   [en]Utility class for gesture detection.[/en]
   *   [ja]ジェスチャを検知するためのユーティリティクラスです。[/ja]
   */

  /**
   * @method constructor
   * @signature constructor(element[, options])
   * @description
   *  [en]Create a new GestureDetector instance.[/en]
   *  [ja]GestureDetectorのインスタンスを生成します。[/ja]
   * @param {Element} element
   *   [en]Name of the event.[/en]
   *   [ja]ジェスチャを検知するDOM要素を指定します。[/ja]
   * @param {Object} [options]
   *   [en]Options object.[/en]
   *   [ja]オプションを指定します。[/ja]
   * @return {ons.GestureDetector.Instance}
   */

  var GestureDetector = function GestureDetector(element, options) {
    return new GestureDetector.Instance(element, options || {});
  };
  /**
   * default settings.
   * more settings are defined per gesture at `/gestures`. Each gesture can be disabled/enabled
   * by setting it's name (like `swipe`) to false.
   * You can set the defaults for all instances by changing this object before creating an instance.
   * @example
   * ````
   *  GestureDetector.defaults.drag = false;
   *  GestureDetector.defaults.behavior.touchAction = 'pan-y';
   *  delete GestureDetector.defaults.behavior.userSelect;
   * ````
   * @property defaults
   * @type {Object}
   */


  GestureDetector.defaults = {
    behavior: {
      // userSelect: 'none', // Also disables selection in `input` children
      touchAction: 'pan-y',
      touchCallout: 'none',
      contentZooming: 'none',
      userDrag: 'none',
      tapHighlightColor: 'rgba(0,0,0,0)'
    }
  };
  /**
   * GestureDetector document where the base events are added at
   * @property DOCUMENT
   * @type {HTMLElement}
   * @default window.document
   */

  GestureDetector.DOCUMENT = document;
  /**
   * detect support for pointer events
   * @property HAS_POINTEREVENTS
   * @type {Boolean}
   */

  GestureDetector.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled;
  /**
   * detect support for touch events
   * @property HAS_TOUCHEVENTS
   * @type {Boolean}
   */

  GestureDetector.HAS_TOUCHEVENTS = 'ontouchstart' in window;
  /**
   * detect mobile browsers
   * @property IS_MOBILE
   * @type {Boolean}
   */

  GestureDetector.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent);
  /**
   * detect if we want to support mouseevents at all
   * @property NO_MOUSEEVENTS
   * @type {Boolean}
   */

  GestureDetector.NO_MOUSEEVENTS = GestureDetector.HAS_TOUCHEVENTS && GestureDetector.IS_MOBILE || GestureDetector.HAS_POINTEREVENTS;
  /**
   * interval in which GestureDetector recalculates current velocity/direction/angle in ms
   * @property CALCULATE_INTERVAL
   * @type {Number}
   * @default 25
   */

  GestureDetector.CALCULATE_INTERVAL = 25;
  /**
   * eventtypes per touchevent (start, move, end) are filled by `Event.determineEventTypes` on `setup`
   * the object contains the DOM event names per type (`EVENT_START`, `EVENT_MOVE`, `EVENT_END`)
   * @property EVENT_TYPES
   * @private
   * @writeOnce
   * @type {Object}
   */

  var EVENT_TYPES = {};
  /**
   * direction strings, for safe comparisons
   * @property DIRECTION_DOWN|LEFT|UP|RIGHT
   * @final
   * @type {String}
   * @default 'down' 'left' 'up' 'right'
   */

  var DIRECTION_DOWN = GestureDetector.DIRECTION_DOWN = 'down';
  var DIRECTION_LEFT = GestureDetector.DIRECTION_LEFT = 'left';
  var DIRECTION_UP = GestureDetector.DIRECTION_UP = 'up';
  var DIRECTION_RIGHT = GestureDetector.DIRECTION_RIGHT = 'right';
  /**
   * pointertype strings, for safe comparisons
   * @property POINTER_MOUSE|TOUCH|PEN
   * @final
   * @type {String}
   * @default 'mouse' 'touch' 'pen'
   */

  var POINTER_MOUSE = GestureDetector.POINTER_MOUSE = 'mouse';
  var POINTER_TOUCH = GestureDetector.POINTER_TOUCH = 'touch';
  var POINTER_PEN = GestureDetector.POINTER_PEN = 'pen';
  /**
   * eventtypes
   * @property EVENT_START|MOVE|END|RELEASE|TOUCH
   * @final
   * @type {String}
   * @default 'start' 'change' 'move' 'end' 'release' 'touch'
   */

  var EVENT_START = GestureDetector.EVENT_START = 'start';
  var EVENT_MOVE = GestureDetector.EVENT_MOVE = 'move';
  var EVENT_END = GestureDetector.EVENT_END = 'end';
  var EVENT_RELEASE = GestureDetector.EVENT_RELEASE = 'release';
  var EVENT_TOUCH = GestureDetector.EVENT_TOUCH = 'touch';
  /**
   * if the window events are set...
   * @property READY
   * @writeOnce
   * @type {Boolean}
   * @default false
   */

  GestureDetector.READY = false;
  /**
   * plugins namespace
   * @property plugins
   * @type {Object}
   */

  GestureDetector.plugins = GestureDetector.plugins || {};
  /**
   * gestures namespace
   * see `/gestures` for the definitions
   * @property gestures
   * @type {Object}
   */

  GestureDetector.gestures = GestureDetector.gestures || {};
  /**
   * setup events to detect gestures on the document
   * this function is called when creating an new instance
   * @private
   */

  function setup(opts) {
    if (GestureDetector.READY) {
      return;
    } // find what eventtypes we add listeners to


    Event$1.determineEventTypes(); // Register all gestures inside GestureDetector.gestures

    Utils.each(GestureDetector.gestures, function (gesture) {
      Detection.register(gesture);
    }); // Add touch events on the document

    Event$1.onTouch(GestureDetector.DOCUMENT, EVENT_MOVE, Detection.detect, opts);
    Event$1.onTouch(GestureDetector.DOCUMENT, EVENT_END, Detection.detect, opts); // GestureDetector is ready...!

    GestureDetector.READY = true;
  }
  /**
   * @module GestureDetector
   *
   * @class Utils
   * @static
   */


  Utils = GestureDetector.utils = {
    /**
     * extend method, could also be used for cloning when `dest` is an empty object.
     * changes the dest object
     * @param {Object} dest
     * @param {Object} src
     * @param {Boolean} [merge=false]  do a merge
     * @return {Object} dest
     */
    extend: function extend(dest, src, merge) {
      for (var key in src) {
        if (Object.prototype.hasOwnProperty.call(src, key) && (dest[key] === undefined || !merge)) {
          dest[key] = src[key];
        }
      }

      return dest;
    },

    /**
     * simple addEventListener wrapper
     * @param {HTMLElement} element
     * @param {String} type
     * @param {Function} handler
     */
    on: function on(element, type, handler, opt) {
      util$4.addEventListener(element, type, handler, opt, true);
    },

    /**
     * simple removeEventListener wrapper
     * @param {HTMLElement} element
     * @param {String} type
     * @param {Function} handler
     */
    off: function off(element, type, handler, opt) {
      util$4.removeEventListener(element, type, handler, opt, true);
    },

    /**
     * forEach over arrays and objects
     * @param {Object|Array} obj
     * @param {Function} iterator
     * @param {any} iterator.item
     * @param {Number} iterator.index
     * @param {Object|Array} iterator.obj the source object
     * @param {Object} context value to use as `this` in the iterator
     */
    each: function each(obj, iterator, context) {
      var i, len; // native forEach on arrays

      if ('forEach' in obj) {
        obj.forEach(iterator, context); // arrays
      } else if (obj.length !== undefined) {
        for (i = 0, len = obj.length; i < len; i++) {
          if (iterator.call(context, obj[i], i, obj) === false) {
            return;
          }
        } // objects

      } else {
        for (i in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, i) && iterator.call(context, obj[i], i, obj) === false) {
            return;
          }
        }
      }
    },

    /**
     * find if a string contains the string using indexOf
     * @param {String} src
     * @param {String} find
     * @return {Boolean} found
     */
    inStr: function inStr(src, find) {
      return src.indexOf(find) > -1;
    },

    /**
     * find if a array contains the object using indexOf or a simple polyfill
     * @param {String} src
     * @param {String} find
     * @return {Boolean|Number} false when not found, or the index
     */
    inArray: function inArray(src, find, deep) {
      if (deep) {
        for (var i = 0, len = src.length; i < len; i++) {
          // Array.findIndex
          if (Object.keys(find).every(function (key) {
            return src[i][key] === find[key];
          })) {
            return i;
          }
        }

        return -1;
      }

      if (src.indexOf) {
        return src.indexOf(find);
      } else {
        for (var i = 0, len = src.length; i < len; i++) {
          if (src[i] === find) {
            return i;
          }
        }

        return -1;
      }
    },

    /**
     * convert an array-like object (`arguments`, `touchlist`) to an array
     * @param {Object} obj
     * @return {Array}
     */
    toArray: function toArray(obj) {
      return Array.prototype.slice.call(obj, 0);
    },

    /**
     * find if a node is in the given parent
     * @param {HTMLElement} node
     * @param {HTMLElement} parent
     * @return {Boolean} found
     */
    hasParent: function hasParent(node, parent) {
      while (node) {
        if (node == parent) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    },

    /**
     * get the center of all the touches
     * @param {Array} touches
     * @return {Object} center contains `pageX`, `pageY`, `clientX` and `clientY` properties
     */
    getCenter: function getCenter(touches) {
      var pageX = [],
          pageY = [],
          clientX = [],
          clientY = [],
          min = Math.min,
          max = Math.max; // no need to loop when only one touch

      if (touches.length === 1) {
        return {
          pageX: touches[0].pageX,
          pageY: touches[0].pageY,
          clientX: touches[0].clientX,
          clientY: touches[0].clientY
        };
      }

      Utils.each(touches, function (touch) {
        pageX.push(touch.pageX);
        pageY.push(touch.pageY);
        clientX.push(touch.clientX);
        clientY.push(touch.clientY);
      });
      return {
        pageX: (min.apply(Math, pageX) + max.apply(Math, pageX)) / 2,
        pageY: (min.apply(Math, pageY) + max.apply(Math, pageY)) / 2,
        clientX: (min.apply(Math, clientX) + max.apply(Math, clientX)) / 2,
        clientY: (min.apply(Math, clientY) + max.apply(Math, clientY)) / 2
      };
    },

    /**
     * calculate the velocity between two points. unit is in px per ms.
     * @param {Number} deltaTime
     * @param {Number} deltaX
     * @param {Number} deltaY
     * @return {Object} velocity `x` and `y`
     */
    getVelocity: function getVelocity(deltaTime, deltaX, deltaY) {
      return {
        x: Math.abs(deltaX / deltaTime) || 0,
        y: Math.abs(deltaY / deltaTime) || 0
      };
    },

    /**
     * calculate the angle between two coordinates
     * @param {Touch} touch1
     * @param {Touch} touch2
     * @return {Number} angle
     */
    getAngle: function getAngle(touch1, touch2) {
      var x = touch2.clientX - touch1.clientX,
          y = touch2.clientY - touch1.clientY;
      return Math.atan2(y, x) * 180 / Math.PI;
    },

    /**
     * do a small comparison to get the direction between two touches.
     * @param {Touch} touch1
     * @param {Touch} touch2
     * @return {String} direction matches `DIRECTION_LEFT|RIGHT|UP|DOWN`
     */
    getDirection: function getDirection(touch1, touch2) {
      var x = Math.abs(touch1.clientX - touch2.clientX),
          y = Math.abs(touch1.clientY - touch2.clientY);

      if (x >= y) {
        return touch1.clientX - touch2.clientX > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return touch1.clientY - touch2.clientY > 0 ? DIRECTION_UP : DIRECTION_DOWN;
    },

    /**
     * calculate the distance between two touches
     * @param {Touch}touch1
     * @param {Touch} touch2
     * @return {Number} distance
     */
    getDistance: function getDistance(touch1, touch2) {
      var x = touch2.clientX - touch1.clientX,
          y = touch2.clientY - touch1.clientY;
      return Math.sqrt(x * x + y * y);
    },

    /**
     * calculate the scale factor between two touchLists
     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
     * @param {Array} start array of touches
     * @param {Array} end array of touches
     * @return {Number} scale
     */
    getScale: function getScale(start, end) {
      // need two fingers...
      if (start.length >= 2 && end.length >= 2) {
        return this.getDistance(end[0], end[1]) / this.getDistance(start[0], start[1]);
      }

      return 1;
    },

    /**
     * calculate the rotation degrees between two touchLists
     * @param {Array} start array of touches
     * @param {Array} end array of touches
     * @return {Number} rotation
     */
    getRotation: function getRotation(start, end) {
      // need two fingers
      if (start.length >= 2 && end.length >= 2) {
        return this.getAngle(end[1], end[0]) - this.getAngle(start[1], start[0]);
      }

      return 0;
    },

    /**
     * find out if the direction is vertical   *
     * @param {String} direction matches `DIRECTION_UP|DOWN`
     * @return {Boolean} is_vertical
     */
    isVertical: function isVertical(direction) {
      return direction == DIRECTION_UP || direction == DIRECTION_DOWN;
    },

    /**
     * set css properties with their prefixes
     * @param {HTMLElement} element
     * @param {String} prop
     * @param {String} value
     * @param {Boolean} [toggle=true]
     * @return {Boolean}
     */
    setPrefixedCss: function setPrefixedCss(element, prop, value, toggle) {
      var prefixes = ['', 'Webkit', 'Moz', 'O', 'ms'];
      prop = Utils.toCamelCase(prop);

      for (var i = 0; i < prefixes.length; i++) {
        var p = prop; // prefixes

        if (prefixes[i]) {
          p = prefixes[i] + p.slice(0, 1).toUpperCase() + p.slice(1);
        } // test the style


        if (p in element.style) {
          element.style[p] = (toggle === null || toggle) && value || '';
          break;
        }
      }
    },

    /**
     * toggle browser default behavior by setting css properties.
     * `userSelect='none'` also sets `element.onselectstart` to false
     * `userDrag='none'` also sets `element.ondragstart` to false
     *
     * @param {HtmlElement} element
     * @param {Object} props
     * @param {Boolean} [toggle=true]
     */
    toggleBehavior: function toggleBehavior(element, props, toggle) {
      if (!props || !element || !element.style) {
        return;
      } // set the css properties


      Utils.each(props, function (value, prop) {
        Utils.setPrefixedCss(element, prop, value, toggle);
      });

      var falseFn = toggle && function () {
        return false;
      }; // also the disable onselectstart


      if (props.userSelect == 'none') {
        element.onselectstart = falseFn;
      } // and disable ondragstart


      if (props.userDrag == 'none') {
        element.ondragstart = falseFn;
      }
    },

    /**
     * convert a string with underscores to camelCase
     * so prevent_default becomes preventDefault
     * @param {String} str
     * @return {String} camelCaseStr
     */
    toCamelCase: function toCamelCase(str) {
      return str.replace(/[_-]([a-z])/g, function (s) {
        return s[1].toUpperCase();
      });
    }
  };
  /**
   * @module GestureDetector
   */

  /**
   * @class Event
   * @static
   */

  Event$1 = GestureDetector.event = {
    /**
     * when touch events have been fired, this is true
     * this is used to stop mouse events
     * @property prevent_mouseevents
     * @private
     * @type {Boolean}
     */
    preventMouseEvents: false,

    /**
     * if EVENT_START has been fired
     * @property started
     * @private
     * @type {Boolean}
     */
    started: false,

    /**
     * when the mouse is hold down, this is true
     * @property should_detect
     * @private
     * @type {Boolean}
     */
    shouldDetect: false,

    /**
     * simple event binder with a hook and support for multiple types
     * @param {HTMLElement} element
     * @param {String} type
     * @param {Function} handler
     * @param {Object} [opt]
     * @param {Function} [hook]
     * @param {Object} hook.type
     */
    on: function on(element, type, handler, opt, hook) {
      var types = type.split(' ');
      Utils.each(types, function (type) {
        Utils.on(element, type, handler, opt);
        hook && hook(type);
      });
    },

    /**
     * simple event unbinder with a hook and support for multiple types
     * @param {HTMLElement} element
     * @param {String} type
     * @param {Function} handler
     * @param {Object} [opt]
     * @param {Function} [hook]
     * @param {Object} hook.type
     */
    off: function off(element, type, handler, opt, hook) {
      var types = type.split(' ');
      Utils.each(types, function (type) {
        Utils.off(element, type, handler, opt);
        hook && hook(type);
      });
    },

    /**
     * the core touch event handler.
     * this finds out if we should to detect gestures
     * @param {HTMLElement} element
     * @param {String} eventType matches `EVENT_START|MOVE|END`
     * @param {Function} handler
     * @return onTouchHandler {Function} the core event handler
     */
    onTouch: function onTouch(element, eventType, handler, opt) {
      var self = this;

      var onTouchHandler = function onTouchHandler(ev) {
        var srcType = ev.type.toLowerCase(),
            isPointer = GestureDetector.HAS_POINTEREVENTS,
            isMouse = Utils.inStr(srcType, 'mouse'),
            triggerType; // if we are in a mouseevent, but there has been a touchevent triggered in this session
        // we want to do nothing. simply break out of the event.

        if (isMouse && self.preventMouseEvents) {
          return; // mousebutton must be down
        } else if (isMouse && eventType == EVENT_START && ev.button === 0) {
          self.preventMouseEvents = false;
          self.shouldDetect = true;
        } else if (isPointer && eventType == EVENT_START) {
          self.shouldDetect = ev.buttons === 1 || PointerEvent.matchType(POINTER_TOUCH, ev); // just a valid start event, but no mouse
        } else if (!isMouse && eventType == EVENT_START) {
          self.preventMouseEvents = true;
          self.shouldDetect = true;
        } // update the pointer event before entering the detection


        if (isPointer && eventType != EVENT_END) {
          PointerEvent.updatePointer(eventType, ev);
        } // we are in a touch/down state, so allowed detection of gestures


        if (self.shouldDetect) {
          triggerType = self.doDetect.call(self, ev, eventType, element, handler);
        } // ...and we are done with the detection
        // so reset everything to start each detection totally fresh


        if (triggerType == EVENT_END) {
          self.preventMouseEvents = false;
          self.shouldDetect = false;
          PointerEvent.reset(); // update the pointerevent object after the detection
        }

        if (isPointer && eventType == EVENT_END) {
          PointerEvent.updatePointer(eventType, ev);
        }
      };

      this.on(element, EVENT_TYPES[eventType], onTouchHandler, opt);
      return onTouchHandler;
    },

    /**
     * the core detection method
     * this finds out what GestureDetector-touch-events to trigger
     * @param {Object} ev
     * @param {String} eventType matches `EVENT_START|MOVE|END`
     * @param {HTMLElement} element
     * @param {Function} handler
     * @return {String} triggerType matches `EVENT_START|MOVE|END`
     */
    doDetect: function doDetect(ev, eventType, element, handler) {
      var touchList = this.getTouchList(ev, eventType);
      var touchListLength = touchList.length;
      var triggerType = eventType;
      var triggerChange = touchList.trigger; // used by fakeMultitouch plugin

      var changedLength = touchListLength; // at each touchstart-like event we want also want to trigger a TOUCH event...

      if (eventType == EVENT_START) {
        triggerChange = EVENT_TOUCH; // ...the same for a touchend-like event
      } else if (eventType == EVENT_END) {
        triggerChange = EVENT_RELEASE; // keep track of how many touches have been removed

        changedLength = touchList.length - (ev.changedTouches ? ev.changedTouches.length : 1);
      } // after there are still touches on the screen,
      // we just want to trigger a MOVE event. so change the START or END to a MOVE
      // but only after detection has been started, the first time we actually want a START


      if (changedLength > 0 && this.started) {
        triggerType = EVENT_MOVE;
      } // detection has been started, we keep track of this, see above


      this.started = true; // generate some event data, some basic information

      var evData = this.collectEventData(element, triggerType, touchList, ev); // trigger the triggerType event before the change (TOUCH, RELEASE) events
      // but the END event should be at last

      if (eventType != EVENT_END) {
        handler.call(Detection, evData);
      } // trigger a change (TOUCH, RELEASE) event, this means the length of the touches changed


      if (triggerChange) {
        evData.changedLength = changedLength;
        evData.eventType = triggerChange;
        handler.call(Detection, evData);
        evData.eventType = triggerType;
        delete evData.changedLength;
      } // trigger the END event


      if (triggerType == EVENT_END) {
        handler.call(Detection, evData); // ...and we are done with the detection
        // so reset everything to start each detection totally fresh

        this.started = false;
      }

      return triggerType;
    },

    /**
     * we have different events for each device/browser
     * determine what we need and set them in the EVENT_TYPES constant
     * the `onTouch` method is bind to these properties.
     * @return {Object} events
     */
    determineEventTypes: function determineEventTypes() {
      var types;

      if (GestureDetector.HAS_POINTEREVENTS) {
        if (window.PointerEvent) {
          types = ['pointerdown', 'pointermove', 'pointerup pointercancel lostpointercapture'];
        } else {
          types = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp MSPointerCancel MSLostPointerCapture'];
        }
      } else if (GestureDetector.NO_MOUSEEVENTS) {
        types = ['touchstart', 'touchmove', 'touchend touchcancel'];
      } else {
        types = ['touchstart mousedown', 'touchmove mousemove', 'touchend touchcancel mouseup'];
      }

      EVENT_TYPES[EVENT_START] = types[0];
      EVENT_TYPES[EVENT_MOVE] = types[1];
      EVENT_TYPES[EVENT_END] = types[2];
      return EVENT_TYPES;
    },

    /**
     * create touchList depending on the event
     * @param {Object} ev
     * @param {String} eventType
     * @return {Array} touches
     */
    getTouchList: function getTouchList(ev, eventType) {
      // get the fake pointerEvent touchlist
      if (GestureDetector.HAS_POINTEREVENTS) {
        return PointerEvent.getTouchList();
      } // get the touchlist


      if (ev.touches) {
        if (eventType == EVENT_MOVE) {
          return ev.touches;
        }

        var identifiers = [];
        var concat = [].concat(Utils.toArray(ev.touches), Utils.toArray(ev.changedTouches));
        var touchList = [];
        Utils.each(concat, function (touch) {
          if (Utils.inArray(identifiers, touch.identifier) === -1) {
            touchList.push(touch);
          }

          identifiers.push(touch.identifier);
        });
        return touchList;
      } // make fake touchList from mouse position


      ev.identifier = 1;
      return [ev];
    },

    /**
     * collect basic event data
     * @param {HTMLElement} element
     * @param {String} eventType matches `EVENT_START|MOVE|END`
     * @param {Array} touches
     * @param {Object} ev
     * @return {Object} ev
     */
    collectEventData: function collectEventData(element, eventType, touches, ev) {
      // find out pointerType
      var pointerType = POINTER_TOUCH;

      if (Utils.inStr(ev.type, 'mouse') || PointerEvent.matchType(POINTER_MOUSE, ev)) {
        pointerType = POINTER_MOUSE;
      } else if (PointerEvent.matchType(POINTER_PEN, ev)) {
        pointerType = POINTER_PEN;
      }

      return {
        center: Utils.getCenter(touches),
        timeStamp: Date.now(),
        target: ev.target,
        touches: touches,
        eventType: eventType,
        pointerType: pointerType,
        srcEvent: ev,

        /**
         * prevent the browser default actions
         * mostly used to disable scrolling of the browser
         */
        preventDefault: function preventDefault() {
          var srcEvent = this.srcEvent;
          srcEvent.preventManipulation && srcEvent.preventManipulation();
          srcEvent.preventDefault && srcEvent.preventDefault();
        },

        /**
         * stop bubbling the event up to its parents
         */
        stopPropagation: function stopPropagation() {
          this.srcEvent.stopPropagation();
        },

        /**
         * immediately stop gesture detection
         * might be useful after a swipe was detected
         * @return {*}
         */
        stopDetect: function stopDetect() {
          return Detection.stopDetect();
        }
      };
    }
  };
  /**
   * @module GestureDetector
   *
   * @class PointerEvent
   * @static
   */

  PointerEvent = GestureDetector.PointerEvent = {
    /**
     * holds all pointers, by `identifier`
     * @property pointers
     * @type {Object}
     */
    pointers: {},

    /**
     * get the pointers as an array
     * @return {Array} touchlist
     */
    getTouchList: function getTouchList() {
      var touchlist = []; // we can use forEach since pointerEvents only is in IE10

      Utils.each(this.pointers, function (pointer) {
        touchlist.push(pointer);
      });
      return touchlist;
    },

    /**
     * update the position of a pointer
     * @param {String} eventType matches `EVENT_START|MOVE|END`
     * @param {Object} pointerEvent
     */
    updatePointer: function updatePointer(eventType, pointerEvent) {
      if (eventType == EVENT_END || eventType != EVENT_END && pointerEvent.buttons !== 1) {
        delete this.pointers[pointerEvent.pointerId];
      } else {
        pointerEvent.identifier = pointerEvent.pointerId;
        this.pointers[pointerEvent.pointerId] = pointerEvent;
      }
    },

    /**
     * check if ev matches pointertype
     * @param {String} pointerType matches `POINTER_MOUSE|TOUCH|PEN`
     * @param {PointerEvent} ev
     */
    matchType: function matchType(pointerType, ev) {
      if (!ev.pointerType) {
        return false;
      }

      var pt = ev.pointerType,
          types = {};
      types[POINTER_MOUSE] = pt === (ev.MSPOINTER_TYPE_MOUSE || POINTER_MOUSE);
      types[POINTER_TOUCH] = pt === (ev.MSPOINTER_TYPE_TOUCH || POINTER_TOUCH);
      types[POINTER_PEN] = pt === (ev.MSPOINTER_TYPE_PEN || POINTER_PEN);
      return types[pointerType];
    },

    /**
     * reset the stored pointers
     */
    reset: function resetList() {
      this.pointers = {};
    }
  };
  /**
   * @module GestureDetector
   *
   * @class Detection
   * @static
   */

  Detection = GestureDetector.detection = {
    // contains all registered GestureDetector.gestures in the correct order
    gestures: [],
    // data of the current GestureDetector.gesture detection session
    current: null,
    // the previous GestureDetector.gesture session data
    // is a full clone of the previous gesture.current object
    previous: null,
    // when this becomes true, no gestures are fired
    stopped: false,

    /**
     * start GestureDetector.gesture detection
     * @param {GestureDetector.Instance} inst
     * @param {Object} eventData
     */
    startDetect: function startDetect(inst, eventData) {
      // already busy with a GestureDetector.gesture detection on an element
      if (this.current) {
        return;
      }

      this.stopped = false; // holds current session

      this.current = {
        inst: inst,
        // reference to GestureDetectorInstance we're working for
        startEvent: Utils.extend({}, eventData),
        // start eventData for distances, timing etc
        lastEvent: false,
        // last eventData
        lastCalcEvent: false,
        // last eventData for calculations.
        futureCalcEvent: false,
        // last eventData for calculations.
        lastCalcData: {},
        // last lastCalcData
        name: '' // current gesture we're in/detected, can be 'tap', 'hold' etc

      };
      this.detect(eventData);
    },

    /**
     * GestureDetector.gesture detection
     * @param {Object} eventData
     * @return {any}
     */
    detect: function detect(eventData) {
      if (!this.current || this.stopped) {
        return;
      } // extend event data with calculations about scale, distance etc


      eventData = this.extendEventData(eventData); // GestureDetector instance and instance options

      var inst = this.current.inst,
          instOptions = inst.options; // call GestureDetector.gesture handlers

      Utils.each(this.gestures, function triggerGesture(gesture) {
        // only when the instance options have enabled this gesture
        if (!this.stopped && inst.enabled && instOptions[gesture.name]) {
          gesture.handler.call(gesture, eventData, inst);
        }
      }, this); // store as previous event event

      if (this.current) {
        this.current.lastEvent = eventData;
      }

      if (eventData.eventType == EVENT_END) {
        this.stopDetect();
      }

      return eventData; // eslint-disable-line consistent-return
    },

    /**
     * clear the GestureDetector.gesture vars
     * this is called on endDetect, but can also be used when a final GestureDetector.gesture has been detected
     * to stop other GestureDetector.gestures from being fired
     */
    stopDetect: function stopDetect() {
      // clone current data to the store as the previous gesture
      // used for the double tap gesture, since this is an other gesture detect session
      this.previous = Utils.extend({}, this.current); // reset the current

      this.current = null;
      this.stopped = true;
    },

    /**
     * calculate velocity, angle and direction
     * @param {Object} ev
     * @param {Object} center
     * @param {Number} deltaTime
     * @param {Number} deltaX
     * @param {Number} deltaY
     */
    getCalculatedData: function getCalculatedData(ev, center, deltaTime, deltaX, deltaY) {
      var cur = this.current,
          recalc = false,
          calcEv = cur.lastCalcEvent,
          calcData = cur.lastCalcData;

      if (calcEv && ev.timeStamp - calcEv.timeStamp > GestureDetector.CALCULATE_INTERVAL) {
        center = calcEv.center;
        deltaTime = ev.timeStamp - calcEv.timeStamp;
        deltaX = ev.center.clientX - calcEv.center.clientX;
        deltaY = ev.center.clientY - calcEv.center.clientY;
        recalc = true;
      }

      if (ev.eventType == EVENT_TOUCH || ev.eventType == EVENT_RELEASE) {
        cur.futureCalcEvent = ev;
      }

      if (!cur.lastCalcEvent || recalc) {
        calcData.velocity = Utils.getVelocity(deltaTime, deltaX, deltaY);
        calcData.angle = Utils.getAngle(center, ev.center);
        calcData.direction = Utils.getDirection(center, ev.center);
        cur.lastCalcEvent = cur.futureCalcEvent || ev;
        cur.futureCalcEvent = ev;
      }

      ev.velocityX = calcData.velocity.x;
      ev.velocityY = calcData.velocity.y;
      ev.interimAngle = calcData.angle;
      ev.interimDirection = calcData.direction;
    },

    /**
     * extend eventData for GestureDetector.gestures
     * @param {Object} ev
     * @return {Object} ev
     */
    extendEventData: function extendEventData(ev) {
      var cur = this.current,
          startEv = cur.startEvent,
          lastEv = cur.lastEvent || startEv; // update the start touchlist to calculate the scale/rotation

      if (ev.eventType == EVENT_TOUCH || ev.eventType == EVENT_RELEASE) {
        startEv.touches = [];
        Utils.each(ev.touches, function (touch) {
          startEv.touches.push({
            clientX: touch.clientX,
            clientY: touch.clientY
          });
        });
      }

      var deltaTime = ev.timeStamp - startEv.timeStamp,
          deltaX = ev.center.clientX - startEv.center.clientX,
          deltaY = ev.center.clientY - startEv.center.clientY;
      this.getCalculatedData(ev, lastEv.center, deltaTime, deltaX, deltaY);
      Utils.extend(ev, {
        startEvent: startEv,
        deltaTime: deltaTime,
        deltaX: deltaX,
        deltaY: deltaY,
        distance: Utils.getDistance(startEv.center, ev.center),
        angle: Utils.getAngle(startEv.center, ev.center),
        direction: Utils.getDirection(startEv.center, ev.center),
        scale: Utils.getScale(startEv.touches, ev.touches),
        rotation: Utils.getRotation(startEv.touches, ev.touches)
      });
      return ev;
    },

    /**
     * register new gesture
     * @param {Object} gesture object, see `gestures/` for documentation
     * @return {Array} gestures
     */
    register: function register(gesture) {
      // add an enable gesture options if there is no given
      var options = gesture.defaults || {};

      if (options[gesture.name] === undefined) {
        options[gesture.name] = true;
      } // extend GestureDetector default options with the GestureDetector.gesture options


      Utils.extend(GestureDetector.defaults, options, true); // set its index

      gesture.index = gesture.index || 1000; // add GestureDetector.gesture to the list

      this.gestures.push(gesture); // sort the list by index

      this.gestures.sort(function (a, b) {
        if (a.index < b.index) {
          return -1;
        }

        if (a.index > b.index) {
          return 1;
        }

        return 0;
      });
      return this.gestures;
    }
  };
  /**
   * @module GestureDetector
   */

  /**
   * create new GestureDetector instance
   * all methods should return the instance itself, so it is chainable.
   *
   * @class Instance
   * @constructor
   * @param {HTMLElement} element
   * @param {Object} [options={}] options are merged with `GestureDetector.defaults`
   * @return {GestureDetector.Instance}
   */

  GestureDetector.Instance = function (element, options) {
    var self = this;
    var listenerOptions = options && options.passive ? {
      passive: true
    } : undefined; // setup GestureDetectorJS window events and register all gestures
    // this also sets up the default options

    setup(listenerOptions);
    /**
     * @property element
     * @type {HTMLElement}
     */

    this.element = element;
    /**
     * @property enabled
     * @type {Boolean}
     * @protected
     */

    this.enabled = true;
    /**
     * options, merged with the defaults
     * options with an _ are converted to camelCase
     * @property options
     * @type {Object}
     */

    Utils.each(options, function (value, name) {
      delete options[name];
      options[Utils.toCamelCase(name)] = value;
    });
    this.options = Utils.extend(Utils.extend({}, GestureDetector.defaults), options || {});
    this.options.listenerOptions = listenerOptions; // add some css to the element to prevent the browser from doing its native behavior

    if (this.options.behavior) {
      Utils.toggleBehavior(this.element, this.options.behavior, true);
    }
    /**
     * event start handler on the element to start the detection
     * @property eventStartHandler
     * @type {Object}
     */


    this.eventStartHandler = Event$1.onTouch(element, EVENT_START, function (ev) {
      if (self.enabled && ev.eventType == EVENT_START) {
        Detection.startDetect(self, ev);
      } else if (ev.eventType == EVENT_TOUCH) {
        Detection.detect(ev);
      }
    }, listenerOptions);
    /**
     * keep a list of user event handlers which needs to be removed when calling 'dispose'
     * @property eventHandlers
     * @type {Array}
     */

    this.eventHandlers = [];
  };

  GestureDetector.Instance.prototype = {
    /**
     * @method on
     * @signature on(gestures, handler)
     * @description
     *  [en]Adds an event handler for a gesture. Available gestures are: drag, dragleft, dragright, dragup, dragdown, hold, release, swipe, swipeleft, swiperight, swipeup, swipedown, tap, doubletap, touch, transform, pinch, pinchin, pinchout and rotate. [/en]
     *  [ja]ジェスチャに対するイベントハンドラを追加します。指定できるジェスチャ名は、drag dragleft dragright dragup dragdown hold release swipe swipeleft swiperight swipeup swipedown tap doubletap touch transform pinch pinchin pinchout rotate です。[/ja]
     * @param {String} gestures
     *   [en]A space separated list of gestures.[/en]
     *   [ja]検知するジェスチャ名を指定します。スペースで複数指定することができます。[/ja]
     * @param {Function} handler
     *   [en]An event handling function.[/en]
     *   [ja]イベントハンドラとなる関数オブジェクトを指定します。[/ja]
     */
    on: function onEvent(gestures, handler, opt) {
      var self = this;
      Event$1.on(self.element, gestures, handler, util$4.extend({}, self.options.listenerOptions, opt), function (type) {
        self.eventHandlers.push({
          gesture: type,
          handler: handler
        });
      });
      return self;
    },

    /**
     * @method off
     * @signature off(gestures, handler)
     * @description
     *  [en]Remove an event listener.[/en]
     *  [ja]イベントリスナーを削除します。[/ja]
     * @param {String} gestures
     *   [en]A space separated list of gestures.[/en]
     *   [ja]ジェスチャ名を指定します。スペースで複数指定することができます。[/ja]
     * @param {Function} handler
     *   [en]An event handling function.[/en]
     *   [ja]イベントハンドラとなる関数オブジェクトを指定します。[/ja]
     */
    off: function offEvent(gestures, handler, opt) {
      var self = this;
      Event$1.off(self.element, gestures, handler, util$4.extend({}, self.options.listenerOptions, opt), function (type) {
        var index = Utils.inArray(self.eventHandlers, {
          gesture: type,
          handler: handler
        }, true);

        if (index >= 0) {
          self.eventHandlers.splice(index, 1);
        }
      });
      return self;
    },

    /**
     * trigger gesture event
     * @method trigger
     * @signature trigger(gesture, eventData)
     * @param {String} gesture
     * @param {Object} [eventData]
     */
    trigger: function triggerEvent(gesture, eventData) {
      // optional
      if (!eventData) {
        eventData = {};
      } // create DOM event


      var event = GestureDetector.DOCUMENT.createEvent('Event');
      event.initEvent(gesture, true, true);
      event.gesture = eventData; // trigger on the target if it is in the instance element,
      // this is for event delegation tricks

      var element = this.element;

      if (Utils.hasParent(eventData.target, element)) {
        element = eventData.target;
      }

      element.dispatchEvent(event);
      return this;
    },

    /**
     * @method enable
     * @signature enable(state)
     * @description
     *  [en]Enable or disable gesture detection.[/en]
     *  [ja]ジェスチャ検知を有効化/無効化します。[/ja]
     * @param {Boolean} state
     *   [en]Specify if it should be enabled or not.[/en]
     *   [ja]有効にするかどうかを指定します。[/ja]
     */
    enable: function enable(state) {
      this.enabled = state;
      return this;
    },

    /**
     * @method dispose
     * @signature dispose()
     * @description
     *  [en]Remove and destroy all event handlers for this instance.[/en]
     *  [ja]このインスタンスでのジェスチャの検知や、イベントハンドラを全て解除して廃棄します。[/ja]
     */
    dispose: function dispose() {
      var i, eh; // undo all changes made by stop_browser_behavior

      Utils.toggleBehavior(this.element, this.options.behavior, false); // unbind all custom event handlers

      for (i = -1; eh = this.eventHandlers[++i];) {
        // eslint-disable-line no-cond-assign
        Utils.off(this.element, eh.gesture, eh.handler);
      }

      this.eventHandlers = []; // unbind the start event listener

      Event$1.off(this.element, EVENT_TYPES[EVENT_START], this.eventStartHandler);
      return null;
    }
  };
  /**
   * @module gestures
   */

  /**
   * Move with x fingers (default 1) around on the page.
   * Preventing the default browser behavior is a good way to improve feel and working.
   * ````
   *  GestureDetectortime.on("drag", function(ev) {
   *    console.log(ev);
   *    ev.gesture.preventDefault();
   *  });
   * ````
   *
   * @class Drag
   * @static
   */

  /**
   * @event drag
   * @param {Object} ev
   */

  /**
   * @event dragstart
   * @param {Object} ev
   */

  /**
   * @event dragend
   * @param {Object} ev
   */

  /**
   * @event drapleft
   * @param {Object} ev
   */

  /**
   * @event dragright
   * @param {Object} ev
   */

  /**
   * @event dragup
   * @param {Object} ev
   */

  /**
   * @event dragdown
   * @param {Object} ev
   */

  /**
   * @param {String} name
   */

  (function (name) {
    var triggered = false;

    function dragGesture(ev, inst) {
      var cur = Detection.current; // max touches

      if (inst.options.dragMaxTouches > 0 && ev.touches.length > inst.options.dragMaxTouches) {
        return;
      }

      switch (ev.eventType) {
        case EVENT_START:
          triggered = false;
          break;

        case EVENT_MOVE:
          // when the distance we moved is too small we skip this gesture
          // or we can be already in dragging
          if (ev.distance < inst.options.dragMinDistance && cur.name != name) {
            return;
          }

          var startCenter = cur.startEvent.center; // we are dragging!

          if (cur.name != name) {
            cur.name = name;

            if (inst.options.dragDistanceCorrection && ev.distance > 0) {
              // When a drag is triggered, set the event center to dragMinDistance pixels from the original event center.
              // Without this correction, the dragged distance would jumpstart at dragMinDistance pixels instead of at 0.
              // It might be useful to save the original start point somewhere
              var factor = Math.abs(inst.options.dragMinDistance / ev.distance);
              startCenter.pageX += ev.deltaX * factor;
              startCenter.pageY += ev.deltaY * factor;
              startCenter.clientX += ev.deltaX * factor;
              startCenter.clientY += ev.deltaY * factor; // recalculate event data using new start point

              ev = Detection.extendEventData(ev);
            }
          } // lock drag to axis?


          if (cur.lastEvent.dragLockToAxis || inst.options.dragLockToAxis && inst.options.dragLockMinDistance <= ev.distance) {
            ev.dragLockToAxis = true;
          } // keep direction on the axis that the drag gesture started on


          var lastDirection = cur.lastEvent.direction;

          if (ev.dragLockToAxis && lastDirection !== ev.direction) {
            if (Utils.isVertical(lastDirection)) {
              ev.direction = ev.deltaY < 0 ? DIRECTION_UP : DIRECTION_DOWN;
            } else {
              ev.direction = ev.deltaX < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
            }
          } // first time, trigger dragstart event


          if (!triggered) {
            inst.trigger(name + 'start', ev);
            triggered = true;
          } // trigger events


          inst.trigger(name, ev);
          inst.trigger(name + ev.direction, ev);
          var isVertical = Utils.isVertical(ev.direction); // block the browser events

          if (inst.options.dragBlockVertical && isVertical || inst.options.dragBlockHorizontal && !isVertical) {
            ev.preventDefault();
          }

          break;

        case EVENT_RELEASE:
          if (triggered && ev.changedLength <= inst.options.dragMaxTouches) {
            inst.trigger(name + 'end', ev);
            triggered = false;
          }

          break;

        case EVENT_END:
          triggered = false;
          break;
      }
    }

    GestureDetector.gestures.Drag = {
      name: name,
      index: 50,
      handler: dragGesture,
      defaults: {
        /**
         * minimal movement that have to be made before the drag event gets triggered
         * @property dragMinDistance
         * @type {Number}
         * @default 10
         */
        dragMinDistance: 10,

        /**
         * Set dragDistanceCorrection to true to make the starting point of the drag
         * be calculated from where the drag was triggered, not from where the touch started.
         * Useful to avoid a jerk-starting drag, which can make fine-adjustments
         * through dragging difficult, and be visually unappealing.
         * @property dragDistanceCorrection
         * @type {Boolean}
         * @default true
         */
        dragDistanceCorrection: true,

        /**
         * set 0 for unlimited, but this can conflict with transform
         * @property dragMaxTouches
         * @type {Number}
         * @default 1
         */
        dragMaxTouches: 1,

        /**
         * prevent default browser behavior when dragging occurs
         * be careful with it, it makes the element a blocking element
         * when you are using the drag gesture, it is a good practice to set this true
         * @property dragBlockHorizontal
         * @type {Boolean}
         * @default false
         */
        dragBlockHorizontal: false,

        /**
         * same as `dragBlockHorizontal`, but for vertical movement
         * @property dragBlockVertical
         * @type {Boolean}
         * @default false
         */
        dragBlockVertical: false,

        /**
         * dragLockToAxis keeps the drag gesture on the axis that it started on,
         * It disallows vertical directions if the initial direction was horizontal, and vice versa.
         * @property dragLockToAxis
         * @type {Boolean}
         * @default false
         */
        dragLockToAxis: false,

        /**
         * drag lock only kicks in when distance > dragLockMinDistance
         * This way, locking occurs only when the distance has become large enough to reliably determine the direction
         * @property dragLockMinDistance
         * @type {Number}
         * @default 25
         */
        dragLockMinDistance: 25
      }
    };
  })('drag');
  /**
   * @module gestures
   */

  /**
   * trigger a simple gesture event, so you can do anything in your handler.
   * only usable if you know what your doing...
   *
   * @class Gesture
   * @static
   */

  /**
   * @event gesture
   * @param {Object} ev
   */


  GestureDetector.gestures.Gesture = {
    name: 'gesture',
    index: 1337,
    handler: function releaseGesture(ev, inst) {
      inst.trigger(this.name, ev);
    }
  };
  /**
   * @module gestures
   */

  /**
   * Touch stays at the same place for x time
   *
   * @class Hold
   * @static
   */

  /**
   * @event hold
   * @param {Object} ev
   */

  /**
   * @param {String} name
   */

  (function (name) {
    var timer;

    function holdGesture(ev, inst) {
      var options = inst.options,
          current = Detection.current;

      switch (ev.eventType) {
        case EVENT_START:
          clearTimeout(timer); // set the gesture so we can check in the timeout if it still is

          current.name = name; // set timer and if after the timeout it still is hold,
          // we trigger the hold event

          timer = setTimeout(function () {
            if (current && current.name == name) {
              inst.trigger(name, ev);
            }
          }, options.holdTimeout);
          break;

        case EVENT_MOVE:
          if (ev.distance > options.holdThreshold) {
            clearTimeout(timer);
          }

          break;

        case EVENT_RELEASE:
          clearTimeout(timer);
          break;
      }
    }

    GestureDetector.gestures.Hold = {
      name: name,
      index: 10,
      defaults: {
        /**
         * @property holdTimeout
         * @type {Number}
         * @default 500
         */
        holdTimeout: 500,

        /**
         * movement allowed while holding
         * @property holdThreshold
         * @type {Number}
         * @default 2
         */
        holdThreshold: 2
      },
      handler: holdGesture
    };
  })('hold');
  /**
   * @module gestures
   */

  /**
   * when a touch is being released from the page
   *
   * @class Release
   * @static
   */

  /**
   * @event release
   * @param {Object} ev
   */


  GestureDetector.gestures.Release = {
    name: 'release',
    index: Infinity,
    handler: function releaseGesture(ev, inst) {
      if (ev.eventType == EVENT_RELEASE) {
        inst.trigger(this.name, ev);
      }
    }
  };
  /**
   * @module gestures
   */

  /**
   * triggers swipe events when the end velocity is above the threshold
   * for best usage, set `preventDefault` (on the drag gesture) to `true`
   * ````
   *  GestureDetectortime.on("dragleft swipeleft", function(ev) {
   *    console.log(ev);
   *    ev.gesture.preventDefault();
   *  });
   * ````
   *
   * @class Swipe
   * @static
   */

  /**
   * @event swipe
   * @param {Object} ev
   */

  /**
   * @event swipeleft
   * @param {Object} ev
   */

  /**
   * @event swiperight
   * @param {Object} ev
   */

  /**
   * @event swipeup
   * @param {Object} ev
   */

  /**
   * @event swipedown
   * @param {Object} ev
   */

  GestureDetector.gestures.Swipe = {
    name: 'swipe',
    index: 40,
    defaults: {
      /**
       * @property swipeMinTouches
       * @type {Number}
       * @default 1
       */
      swipeMinTouches: 1,

      /**
       * @property swipeMaxTouches
       * @type {Number}
       * @default 1
       */
      swipeMaxTouches: 1,

      /**
       * horizontal swipe velocity
       * @property swipeVelocityX
       * @type {Number}
       * @default 0.6
       */
      swipeVelocityX: 0.6,

      /**
       * vertical swipe velocity
       * @property swipeVelocityY
       * @type {Number}
       * @default 0.6
       */
      swipeVelocityY: 0.6
    },
    handler: function swipeGesture(ev, inst) {
      if (ev.eventType == EVENT_RELEASE) {
        var touches = ev.touches.length,
            options = inst.options; // max touches

        if (touches < options.swipeMinTouches || touches > options.swipeMaxTouches) {
          return;
        } // when the distance we moved is too small we skip this gesture
        // or we can be already in dragging


        if (ev.velocityX > options.swipeVelocityX || ev.velocityY > options.swipeVelocityY) {
          // trigger swipe events
          inst.trigger(this.name, ev);
          inst.trigger(this.name + ev.direction, ev);
        }
      }
    }
  };
  /**
   * @module gestures
   */

  /**
   * Single tap and a double tap on a place
   *
   * @class Tap
   * @static
   */

  /**
   * @event tap
   * @param {Object} ev
   */

  /**
   * @event doubletap
   * @param {Object} ev
   */

  /**
   * @param {String} name
   */

  (function (name) {
    var hasMoved = false;

    function tapGesture(ev, inst) {
      var options = inst.options,
          current = Detection.current,
          prev = Detection.previous,
          sincePrev,
          didDoubleTap;

      switch (ev.eventType) {
        case EVENT_START:
          hasMoved = false;
          break;

        case EVENT_MOVE:
          hasMoved = hasMoved || ev.distance > options.tapMaxDistance;
          break;

        case EVENT_END:
          if (!Utils.inStr(ev.srcEvent.type, 'cancel') && ev.deltaTime < options.tapMaxTime && !hasMoved) {
            // previous gesture, for the double tap since these are two different gesture detections
            sincePrev = prev && prev.lastEvent && ev.timeStamp - prev.lastEvent.timeStamp;
            didDoubleTap = false; // check if double tap

            if (prev && prev.name == name && sincePrev && sincePrev < options.doubleTapInterval && ev.distance < options.doubleTapDistance) {
              inst.trigger('doubletap', ev);
              didDoubleTap = true;
            } // do a single tap


            if (!didDoubleTap || options.tapAlways) {
              current.name = name;
              inst.trigger(current.name, ev);
            }
          }

          break;
      }
    }

    GestureDetector.gestures.Tap = {
      name: name,
      index: 100,
      handler: tapGesture,
      defaults: {
        /**
         * max time of a tap, this is for the slow tappers
         * @property tapMaxTime
         * @type {Number}
         * @default 250
         */
        tapMaxTime: 250,

        /**
         * max distance of movement of a tap, this is for the slow tappers
         * @property tapMaxDistance
         * @type {Number}
         * @default 10
         */
        tapMaxDistance: 10,

        /**
         * always trigger the `tap` event, even while double-tapping
         * @property tapAlways
         * @type {Boolean}
         * @default true
         */
        tapAlways: true,

        /**
         * max distance between two taps
         * @property doubleTapDistance
         * @type {Number}
         * @default 20
         */
        doubleTapDistance: 20,

        /**
         * max time between two taps
         * @property doubleTapInterval
         * @type {Number}
         * @default 300
         */
        doubleTapInterval: 300
      }
    };
  })('tap');
  /**
   * @module gestures
   */

  /**
   * when a touch is being touched at the page
   *
   * @class Touch
   * @static
   */

  /**
   * @event touch
   * @param {Object} ev
   */


  GestureDetector.gestures.Touch = {
    name: 'touch',
    index: -Infinity,
    defaults: {
      /**
       * call preventDefault at touchstart, and makes the element blocking by disabling the scrolling of the page,
       * but it improves gestures like transforming and dragging.
       * be careful with using this, it can be very annoying for users to be stuck on the page
       * @property preventDefault
       * @type {Boolean}
       * @default false
       */
      preventDefault: false,

      /**
       * disable mouse events, so only touch (or pen!) input triggers events
       * @property preventMouse
       * @type {Boolean}
       * @default false
       */
      preventMouse: false
    },
    handler: function touchGesture(ev, inst) {
      if (inst.options.preventMouse && ev.pointerType == POINTER_MOUSE) {
        ev.stopDetect();
        return;
      }

      if (inst.options.preventDefault) {
        ev.preventDefault();
      }

      if (ev.eventType == EVENT_TOUCH) {
        inst.trigger('touch', ev);
      }
    }
  };
  /**
   * @module gestures
   */

  /**
   * User want to scale or rotate with 2 fingers
   * Preventing the default browser behavior is a good way to improve feel and working. This can be done with the
   * `preventDefault` option.
   *
   * @class Transform
   * @static
   */

  /**
   * @event transform
   * @param {Object} ev
   */

  /**
   * @event transformstart
   * @param {Object} ev
   */

  /**
   * @event transformend
   * @param {Object} ev
   */

  /**
   * @event pinchin
   * @param {Object} ev
   */

  /**
   * @event pinchout
   * @param {Object} ev
   */

  /**
   * @event rotate
   * @param {Object} ev
   */

  /**
   * @param {String} name
   */

  (function (name) {
    var triggered = false;

    function transformGesture(ev, inst) {
      switch (ev.eventType) {
        case EVENT_START:
          triggered = false;
          break;

        case EVENT_MOVE:
          // at least multitouch
          if (ev.touches.length < 2) {
            return;
          }

          var scaleThreshold = Math.abs(1 - ev.scale);
          var rotationThreshold = Math.abs(ev.rotation); // when the distance we moved is too small we skip this gesture
          // or we can be already in dragging

          if (scaleThreshold < inst.options.transformMinScale && rotationThreshold < inst.options.transformMinRotation) {
            return;
          } // we are transforming!


          Detection.current.name = name; // first time, trigger dragstart event

          if (!triggered) {
            inst.trigger(name + 'start', ev);
            triggered = true;
          }

          inst.trigger(name, ev); // basic transform event
          // trigger rotate event

          if (rotationThreshold > inst.options.transformMinRotation) {
            inst.trigger('rotate', ev);
          } // trigger pinch event


          if (scaleThreshold > inst.options.transformMinScale) {
            inst.trigger('pinch', ev);
            inst.trigger('pinch' + (ev.scale < 1 ? 'in' : 'out'), ev);
          }

          break;

        case EVENT_RELEASE:
          if (triggered && ev.changedLength < 2) {
            inst.trigger(name + 'end', ev);
            triggered = false;
          }

          break;
      }
    }

    GestureDetector.gestures.Transform = {
      name: name,
      index: 45,
      defaults: {
        /**
         * minimal scale factor, no scale is 1, zoomin is to 0 and zoomout until higher then 1
         * @property transformMinScale
         * @type {Number}
         * @default 0.01
         */
        transformMinScale: 0.01,

        /**
         * rotation in degrees
         * @property transformMinRotation
         * @type {Number}
         * @default 1
         */
        transformMinRotation: 1
      },
      handler: transformGesture
    };
  })('transform');

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  var readyMap, queueMap;

  function isContentReady(element) {
    if (element.childNodes.length > 0) {
      setContentReady(element);
    }

    return readyMap.has(element);
  }

  function setContentReady(element) {
    readyMap.set(element, true);
  }

  function addCallback(element, fn) {
    if (!queueMap.has(element)) {
      queueMap.set(element, []);
    }

    queueMap.get(element).push(fn);
  }

  function consumeQueue(element) {
    var callbacks = queueMap.get(element, []) || [];
    queueMap.delete(element);
    callbacks.forEach(function (callback) {
      return callback();
    });
  }

  function contentReady(element) {
    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    if (readyMap === undefined) {
      readyMap = new WeakMap();
      queueMap = new WeakMap();
    }

    addCallback(element, fn);

    if (isContentReady(element)) {
      consumeQueue(element);
      return;
    }

    var observer = new MutationObserver(function (changes) {
      setContentReady(element);
      consumeQueue(element);
    });
    observer.observe(element, {
      childList: true,
      characterData: true
    }); // failback for elements has empty content.

    setImmediate(function () {
      setContentReady(element);
      consumeQueue(element);
    });
  }

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  var ToastQueue = /*#__PURE__*/function () {
    function ToastQueue() {
      _classCallCheck(this, ToastQueue);

      this.queue = [];
    }

    _createClass(ToastQueue, [{
      key: "add",
      value: function add(fn, promise) {
        var _this = this;

        this.queue.push(fn);

        if (this.queue.length === 1) {
          setImmediate(this.queue[0]);
        }

        promise.then(function () {
          _this.queue.shift();

          if (_this.queue.length > 0) {
            setTimeout(_this.queue[0], 1000 / 30); // Apply some visual delay
          }
        });
      }
    }]);

    return ToastQueue;
  }();

  var ToastQueue$1 = new ToastQueue();

  var _setAttributes = function _setAttributes(element, options) {
    ['id', 'class', 'animation'].forEach(function (a) {
      return Object.prototype.hasOwnProperty.call(options, a) && element.setAttribute(a, options[a]);
    });

    if (options.modifier) {
      util$4.addModifier(element, options.modifier);
    }
  };

  var _normalizeArguments = function _normalizeArguments(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = _objectSpread2({}, options);
    typeof message === 'string' ? options.message = message : options = message;

    if (!options || !options.message && !options.messageHTML) {
      util$4.throw('Notifications must contain a message');
    }

    if (Object.prototype.hasOwnProperty.call(options, 'buttonLabels') || Object.prototype.hasOwnProperty.call(options, 'buttonLabel')) {
      options.buttonLabels = options.buttonLabels || options.buttonLabel;

      if (!Array.isArray(options.buttonLabels)) {
        options.buttonLabels = [options.buttonLabels || ''];
      }
    }

    return util$4.extend({
      compile: function compile(param) {
        return param;
      },
      callback: function callback(param) {
        return param;
      },
      animation: 'default',
      cancelable: false,
      primaryButtonIndex: (options.buttonLabels || defaults.buttonLabels || []).length - 1
    }, defaults, options);
  };
  /**
   * @object ons.notification
   * @category dialog
   * @tutorial vanilla/Reference/notification
   * @description
   *   [en]
   *     Utility methods to create different kinds of notifications. There are three methods available:
   *
   *     * `ons.notification.alert()`
   *     * `ons.notification.confirm()`
   *     * `ons.notification.prompt()`
   *     * `ons.notification.toast()`
   *
   *     It will automatically display a Material Design dialog on Android devices.
   *   [/en]
   *   [ja]いくつかの種類のアラートダイアログを作成するためのユーティリティメソッドを収めたオブジェクトです。[/ja]
   * @example
   * ons.notification.alert('Hello, world!');
   *
   * ons.notification.confirm('Are you ready?')
   *   .then(
   *     function(answer) {
   *       if (answer === 1) {
   *         ons.notification.alert('Let\'s go!');
   *       }
   *     }
   *   );
   *
   * ons.notification.prompt('How old are ?')
   *   .then(
   *     function(age) {
   *       ons.notification.alert('You are ' + age + ' years old.');
   *     }
   *   );
   */


  var notification = {};

  notification._createAlertDialog = function () {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return new Promise(function (resolve) {
      var options = _normalizeArguments.apply(void 0, params);

      util$4.checkMissingImport('AlertDialog', 'AlertDialogButton'); // Prompt input string

      var inputString = '';

      if (options.isPrompt) {
        inputString = "\n      <input\n        class=\"text-input text-input--underbar\"\n        type=\"".concat(options.inputType || 'text', "\"\n        placeholder=\"").concat(options.placeholder || '', "\"\n        value=\"").concat(options.defaultValue || '', "\"\n        style=\"width: 100%; margin-top: 10px;\"\n      />\n    ");
      } // Buttons string


      var buttons = '';
      options.buttonLabels.forEach(function (label, index) {
        buttons += "\n      <ons-alert-dialog-button\n        class=\"\n          ".concat(index === options.primaryButtonIndex ? ' alert-dialog-button--primal' : '', "\n          ").concat(options.buttonLabels.length <= 2 ? ' alert-dialog-button--rowfooter' : '', "\n        \"\n        style=\"position: relative;\">\n        ").concat(label, "\n      </ons-alert-dialog-button>\n    ");
      }); // Dialog Element

      var el = {};

      var _destroyDialog = function _destroyDialog() {
        if (el.dialog.onDialogCancel) {
          el.dialog.removeEventListener('dialogcancel', el.dialog.onDialogCancel);
        }

        Object.keys(el).forEach(function (key) {
          return delete el[key];
        });
        el = null;

        if (options.destroy instanceof Function) {
          options.destroy();
        }
      };

      el.dialog = document.createElement('ons-alert-dialog');
      el.dialog.innerHTML = "\n    <div class=\"alert-dialog-mask\"\n      style=\"\n        ".concat(options.maskColor ? 'background-color: ' + options.maskColor : '', "\n      \"></div>\n    <div class=\"alert-dialog\">\n      <div class=\"alert-dialog-container\">\n        <div class=\"alert-dialog-title\">\n          ").concat(options.title || '', "\n        </div>\n        <div class=\"alert-dialog-content\">\n          ").concat(options.message || options.messageHTML, "\n          ").concat(inputString, "\n        </div>\n        <div class=\"\n          alert-dialog-footer\n          ").concat(options.buttonLabels.length <= 2 ? ' alert-dialog-footer--rowfooter' : '', "\n        \">\n          ").concat(buttons, "\n        </div>\n      </div>\n    </div>\n  ");
      contentReady(el.dialog); // Set attributes

      _setAttributes(el.dialog, options); // Prompt events


      if (options.isPrompt) {
        el.input = el.dialog.querySelector('.text-input');

        if (options.submitOnEnter) {
          el.input.onkeypress = function (event) {
            if (event.keyCode === 13) {
              el.dialog.hide().then(function () {
                if (el) {
                  var resolveValue = el.input.value;

                  _destroyDialog();

                  options.callback(resolveValue);
                  resolve(resolveValue);
                }
              });
            }
          };
        }
      } // Button events


      el.footer = el.dialog.querySelector('.alert-dialog-footer');
      util$4.arrayFrom(el.dialog.querySelectorAll('.alert-dialog-button')).forEach(function (buttonElement, index) {
        buttonElement.onclick = function () {
          el.dialog.hide().then(function () {
            if (el) {
              var resolveValue = index;

              if (options.isPrompt) {
                resolveValue = index === options.primaryButtonIndex ? el.input.value : null;
              }

              el.dialog.remove();

              _destroyDialog();

              options.callback(resolveValue);
              resolve(resolveValue);
            }
          });
        };

        el.footer.appendChild(buttonElement);
      }); // Cancel events

      if (options.cancelable) {
        el.dialog.cancelable = true;

        el.dialog.onDialogCancel = function () {
          setImmediate(function () {
            el.dialog.remove();

            _destroyDialog();
          });
          var resolveValue = options.isPrompt ? null : -1;
          options.callback(resolveValue);
          resolve(resolveValue);
        };

        el.dialog.addEventListener('dialogcancel', el.dialog.onDialogCancel, false);
      } // Show dialog


      document.body.appendChild(el.dialog);
      options.compile(el.dialog);
      setImmediate(function () {
        el.dialog.show().then(function () {
          if (el.input && options.isPrompt && options.autofocus) {
            var strLength = el.input.value.length;
            el.input.focus();

            if (el.input.type && ['text', 'search', 'url', 'tel', 'password'].includes(el.input.type)) {
              el.input.setSelectionRange(strLength, strLength);
            }
          }
        });
      });
    });
  };
  /**
   * @method alert
   * @signature alert(message [, options] | options)
   * @return {Promise}
   *   [en]Will resolve to the index of the button that was pressed or `-1` when canceled.[/en]
   *   [ja][/ja]
   * @param {String} message
   *   [en]Notification message. This argument is optional but if it's not defined either `options.message` or `options.messageHTML` must be defined instead.[/en]
   *   [ja][/ja]
   * @param {Object} options
   *   [en]Parameter object.[/en]
   *   [ja]オプションを指定するオブジェクトです。[/ja]
   * @param {String} [options.message]
   *   [en]Notification message.[/en]
   *   [ja]アラートダイアログに表示する文字列を指定します。[/ja]
   * @param {String} [options.messageHTML]
   *   [en]Notification message in HTML.[/en]
   *   [ja]アラートダイアログに表示するHTMLを指定します。[/ja]
   * @param {String | Array} [options.buttonLabels]
   *   [en]Labels for the buttons. Default is `"OK"`.[/en]
   *   [ja]確認ボタンのラベルを指定します。"OK"がデフォルトです。[/ja]
   * @param {Number} [options.primaryButtonIndex]
   *   [en]Index of primary button. Default is the last one.[/en]
   *   [ja]プライマリボタンのインデックスを指定します。デフォルトは 0 です。[/ja]
   * @param {Boolean} [options.cancelable]
   *   [en]Whether the dialog is cancelable or not. Default is `false`. If the dialog is cancelable it can be closed by clicking the background or pressing the Android back button.[/en]
   *   [ja]ダイアログがキャンセル可能かどうかを指定します。[/ja]
   * @param {String} [options.animation]
   *   [en]Animation name. Available animations are `none` and `fade`. Default is `fade`.[/en]
   *   [ja]アラートダイアログを表示する際のアニメーション名を指定します。"none", "fade"のいずれかを指定できます。[/ja]
   * @param {String} [options.id]
   *   [en]The `<ons-alert-dialog>` element's ID.[/en]
   *   [ja]ons-alert-dialog要素のID。[/ja]
   * @param {String} [options.class]
   *   [en]The `<ons-alert-dialog>` element's class.[/en]
   *   [ja]ons-alert-dialog要素のclass。[/ja]
   * @param {String} [options.title]
   *   [en]Dialog title. Default is `"Alert"`.[/en]
   *   [ja]アラートダイアログの上部に表示するタイトルを指定します。"Alert"がデフォルトです。[/ja]
   * @param {String} [options.modifier]
   *   [en]Modifier for the dialog.[/en]
   *   [ja]アラートダイアログのmodifier属性の値を指定します。[/ja]
   * @param {String} [options.maskColor]
   *   [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)" ("rgba(0, 0, 0, 0.3)" for Material).[/en]
   *   [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
   * @param {Function} [options.callback]
   *   [en]Function that executes after dialog has been closed.[/en]
   *   [ja]アラートダイアログが閉じられた時に呼び出される関数オブジェクトを指定します。[/ja]
   * @description
   *   [en]
   *     Display an alert dialog to show the user a message.
   *
   *     The content of the message can be either simple text or HTML.
   *
   *     It can be called in the following ways:
   *
   *     ```
   *     ons.notification.alert(message, options);
   *     ons.notification.alert(options);
   *     ```
   *
   *     Must specify either `message` or `messageHTML`.
   *   [/en]
   *   [ja]
   *     ユーザーへメッセージを見せるためのアラートダイアログを表示します。
   *     表示するメッセージは、テキストかもしくはHTMLを指定できます。
   *     このメソッドの引数には、options.messageもしくはoptions.messageHTMLのどちらかを必ず指定する必要があります。
   *   [/ja]
   */


  notification.alert = function (message, options) {
    return notification._createAlertDialog(message, options, {
      buttonLabels: ['OK'],
      title: 'Alert'
    });
  };
  /**
   * @method confirm
   * @signature confirm(message [, options] | options)
   * @return {Promise}
   *   [en]Will resolve to the index of the button that was pressed or `-1` when canceled.[/en]
   *   [ja][/ja]
   * @param {String} message
   *   [en]Notification message. This argument is optional but if it's not defined either `options.message` or `options.messageHTML` must be defined instead.[/en]
   *   [ja][/ja]
   * @param {Object} options
   *   [en]Parameter object.[/en]
   * @param {Array} [options.buttonLabels]
   *   [en]Labels for the buttons. Default is `["Cancel", "OK"]`.[/en]
   *   [ja]ボタンのラベルの配列を指定します。["Cancel", "OK"]がデフォルトです。[/ja]
   * @param {Number} [options.primaryButtonIndex]
   *   [en]Index of primary button. Default is the last one.[/en]
   *   [ja]プライマリボタンのインデックスを指定します。デフォルトは 1 です。[/ja]
   * @description
   *   [en]
   *     Display a dialog to ask the user for confirmation. Extends `alert()` parameters.
   *     The default button labels are `"Cancel"` and `"OK"` but they can be customized.
   *
   *     It can be called in the following ways:
   *
   *     ```
   *     ons.notification.confirm(message, options);
   *     ons.notification.confirm(options);
   *     ```
   *
   *     Must specify either `message` or `messageHTML`.
   *   [/en]
   *   [ja]
   *     ユーザに確認を促すダイアログを表示します。
   *     デオルとのボタンラベルは、"Cancel"と"OK"ですが、これはこのメソッドの引数でカスタマイズできます。
   *     このメソッドの引数には、options.messageもしくはoptions.messageHTMLのどちらかを必ず指定する必要があります。
   *   [/ja]
   */


  notification.confirm = function (message, options) {
    return notification._createAlertDialog(message, options, {
      buttonLabels: ['Cancel', 'OK'],
      title: 'Confirm'
    });
  };
  /**
   * @method prompt
   * @signature prompt(message [, options] | options)
   * @param {String} message
   *   [en]Notification message. This argument is optional but if it's not defined either `options.message` or `options.messageHTML` must be defined instead.[/en]
   *   [ja][/ja]
   * @return {Promise}
   *   [en]Will resolve to the input value when the dialog is closed or `null` when canceled.[/en]
   *   [ja][/ja]
   * @param {Object} options
   *   [en]Parameter object.[/en]
   *   [ja]オプションを指定するオブジェクトです。[/ja]
   * @param {String | Array} [options.buttonLabels]
   *   [en]Labels for the buttons. Default is `"OK"`.[/en]
   *   [ja]確認ボタンのラベルを指定します。"OK"がデフォルトです。[/ja]
   * @param {Number} [options.primaryButtonIndex]
   *   [en]Index of primary button. Default is the last one.[/en]
   *   [ja]プライマリボタンのインデックスを指定します。デフォルトは 0 です。[/ja]
   * @param {String} [options.placeholder]
   *   [en]Placeholder for the text input.[/en]
   *   [ja]テキスト欄のプレースホルダに表示するテキストを指定します。[/ja]
   * @param {String} [options.defaultValue]
   *   [en]Default value for the text input.[/en]
   *   [ja]テキスト欄のデフォルトの値を指定します。[/ja]
   * @param {String} [options.inputType]
   *   [en]Type of the input element (`password`, `date`...). Default is `text`.[/en]
   *   [ja][/ja]
   * @param {Boolean} [options.autofocus]
   *   [en]Autofocus the input element. Default is `true`. In Cordova, `KeyboardDisplayRequiresUserAction` in `config.xml` must be `false` to activate this feature.[/en]
   *   [ja]input要素に自動的にフォーカスするかどうかを指定します。デフォルトはtrueです。Cordova環境では、この機能を有効にするためには `config.xml` で `KeyboardDisplayRequiresUserAction` を `false` に設定する必要があります。[/ja]
   * @param {Boolean} [options.submitOnEnter]
   *   [en]Submit automatically when enter is pressed. Default is `true`.[/en]
   *   [ja]Enterが押された際にそのformをsubmitするかどうかを指定します。デフォルトはtrueです。[/ja]
   * @description
   *   [en]
   *     Display a dialog with a prompt to ask the user a question. Extends `alert()` parameters.
   *
   *     It can be called in the following ways:
   *
   *     ```
   *     ons.notification.prompt(message, options);
   *     ons.notification.prompt(options);
   *     ```
   *
   *     Must specify either `message` or `messageHTML`.
   *   [/en]
   *   [ja]
   *     ユーザーに入力を促すダイアログを表示します。
   *     このメソッドの引数には、options.messageもしくはoptions.messageHTMLのどちらかを必ず指定する必要があります。
   *   [/ja]
   */


  notification.prompt = function (message, options) {
    return notification._createAlertDialog(message, options, {
      buttonLabels: ['OK'],
      title: 'Alert',
      isPrompt: true,
      autofocus: true,
      submitOnEnter: true
    });
  };
  /**
   * @method toast
   * @signature toast(message [, options] | options)
   * @return {Promise}
   *   [en]Will resolve when the toast is hidden.[/en]
   *   [ja][/ja]
   * @param {String} message
   *   [en]Toast message. This argument is optional but if it's not defined then `options.message` must be defined instead.[/en]
   *   [ja][/ja]
   * @param {Object} options
   *   [en]Parameter object.[/en]
   *   [ja]オプションを指定するオブジェクトです。[/ja]
   * @param {String} [options.message]
   *   [en]Notification message.[/en]
   *   [ja]トーストに表示する文字列を指定します。[/ja]
   * @param {String} [options.buttonLabel]
   *   [en]Label for the button.[/en]
   *   [ja]確認ボタンのラベルを指定します。[/ja]
   * @param {String} [options.animation]
   *   [en]Animation name. Available animations are `none`, `fade`, `ascend`, `lift` and `fall`. Default is `ascend` for Android and `lift` for iOS.[/en]
   *   [ja]トーストを表示する際のアニメーション名を指定します。"none", "fade", "ascend", "lift", "fall"のいずれかを指定できます。[/ja]
   * @param {Number} [options.timeout]
   *   [en]Number of miliseconds where the toast is visible before hiding automatically.[/en]
   *   [ja][/ja]
   * @param {Boolean} [options.force]
   *   [en]If `true`, the toast skips the notification queue and is shown immediately. Defaults to `false`.[/en]
   *   [ja][/ja]
   * @param {String} [options.id]
   *   [en]The `<ons-toast>` element's ID.[/en]
   *   [ja]ons-toast要素のID。[/ja]
   * @param {String} [options.class]
   *   [en]The `<ons-toast>` element's class.[/en]
   *   [ja]ons-toast要素のclass。[/ja]
   * @param {String} [options.modifier]
   *   [en]Modifier for the element.[/en]
   *   [ja]トーストのmodifier属性の値を指定します。[/ja]
   * @param {Function} [options.callback]
   *   [en]Function that executes after toast has been hidden.[/en]
   *   [ja]トーストが閉じられた時に呼び出される関数オブジェクトを指定します。[/ja]
   * @description
   *   [en]
   *     Display a simple notification toast with an optional button that can be used for simple actions.
   *
   *     It can be called in the following ways:
   *
   *     ```
   *     ons.notification.toast(message, options);
   *     ons.notification.toast(options);
   *     ```
   *   [/en]
   *   [ja][/ja]
   */


  notification.toast = function (message, options) {
    var promise = new Promise(function (resolve) {
      util$4.checkMissingImport('Toast'); // Throws error, must be inside promise

      options = _normalizeArguments(message, options, {
        timeout: 0,
        force: false
      });
      var toast = util$4.createElement("\n      <ons-toast>\n        ".concat(options.message, "\n        ").concat(options.buttonLabels ? "<button>".concat(options.buttonLabels[0], "</button>") : '', "\n      </ons-toast>\n    "));

      _setAttributes(toast, options);

      var originalHide = toast.hide.bind(toast);

      var finish = function finish(value) {
        if (toast) {
          originalHide().then(function () {
            if (toast) {
              toast.remove();
              toast = null;
              options.callback(value);
              resolve(value);
            }
          });
        }
      };

      if (options.buttonLabels) {
        util$4.findChild(toast._toast, 'button').onclick = function () {
          return finish(0);
        };
      } // overwrite so that ons.notification.hide resolves when toast.hide is called


      toast.hide = function () {
        return finish(-1);
      };

      document.body.appendChild(toast);
      options.compile(toast);

      var show = function show() {
        toast.parentElement && toast.show(options).then(function () {
          if (options.timeout) {
            setTimeout(function () {
              return finish(-1);
            }, options.timeout);
          }
        });
      };

      setImmediate(function () {
        return options.force ? show() : ToastQueue$1.add(show, promise);
      });
    });
    return promise;
  };

  var checkOptions = function checkOptions(options) {
    var err = function err(prop) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Function';
      return util$4.throw("\"options.".concat(prop, "\" must be an instance of ").concat(type));
    };

    var hasOwnProperty = function hasOwnProperty(prop) {
      return Object.hasOwnProperty.call(options, prop);
    };

    var instanceOf = function instanceOf(prop) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Function;
      return options[prop] instanceof type;
    };

    var b = 'buttons',
        cb = 'callback',
        c = 'compile',
        d = 'destroy';
    (!hasOwnProperty(b) || !instanceOf(b, Array)) && err(b, 'Array');
    hasOwnProperty(cb) && !instanceOf(cb) && err(cb);
    hasOwnProperty(c) && !instanceOf(c) && err(c);
    hasOwnProperty(d) && !instanceOf(d) && err(d);
  }; // Action Sheet


  var actionSheet = (function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve) {
      util$4.checkMissingImport('ActionSheet');
      checkOptions(options); // Main component

      var actionSheet = util$4.createElement("\n    <ons-action-sheet\n      ".concat(options.title ? "title=\"".concat(options.title, "\"") : '', "\n      ").concat(options.cancelable ? 'cancelable' : '', "\n      ").concat(options.modifier ? "modifier=\"".concat(options.modifier, "\"") : '', "\n      ").concat(options.maskColor ? "mask-color=\"".concat(options.maskColor, "\"") : '', "\n      ").concat(options.id ? "id=\"".concat(options.id, "\"") : '', "\n      ").concat(options.class ? "class=\"".concat(options.class, "\"") : '', "\n    >\n      <div class=\"action-sheet\"></div>\n    </ons-action-sheet>\n  ")); // Resolve action and clean up

      var finish = function finish(event) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

        if (actionSheet) {
          options.destroy && options.destroy(actionSheet);
          actionSheet.removeEventListener('dialogcancel', finish, false);
          actionSheet.remove();
          actionSheet = null;
          options.callback && options.callback(index);
          resolve(index);
        }
      }; // Link cancel handler


      actionSheet.addEventListener('dialogcancel', finish, false); // Create buttons and link action handler

      var buttons = document.createDocumentFragment();
      options.buttons.forEach(function (item, index) {
        var buttonOptions = typeof item === 'string' ? {
          label: item
        } : _objectSpread2({}, item);

        if (options.destructive === index) {
          buttonOptions.modifier = (buttonOptions.modifier || '') + ' destructive';
        }

        var button = util$4.createElement("\n      <ons-action-sheet-button\n        ".concat(buttonOptions.icon ? "icon=\"".concat(buttonOptions.icon, "\"") : '', "\n        ").concat(buttonOptions.modifier ? "modifier=\"".concat(buttonOptions.modifier, "\"") : '', "\n      >\n        ").concat(buttonOptions.label, "\n      </ons-action-sheet-button>\n    "));

        button.onclick = function (event) {
          return actionSheet.hide().then(function () {
            return finish(event, index);
          });
        };

        buttons.appendChild(button);
      }); // Finish component and attach

      util$4.findChild(actionSheet, '.action-sheet').appendChild(buttons);
      document.body.appendChild(actionSheet);
      options.compile && options.compile(el.dialog); // Show

      setImmediate(function () {
        return actionSheet.show({
          animation: options.animation,
          animationOptions: options.animationOptions
        });
      });
    });
  });

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */

  var create = function create() {
    /**
     * @object ons.orientation
     * @category util
     * @description
     *   [en]Utility methods for orientation detection.[/en]
     *   [ja]画面のオリエンテーション検知のためのユーティリティメソッドを収めているオブジェクトです。[/ja]
     */
    var obj = {
      /**
       * @event change
       * @description
       *   [en]Fired when the device orientation changes.[/en]
       *   [ja]デバイスのオリエンテーションが変化した際に発火します。[/ja]
       * @param {Object} event
       *   [en]Event object.[/en]
       *   [ja]イベントオブジェクトです。[/ja]
       * @param {Boolean} event.isPortrait
       *   [en]Will be true if the current orientation is portrait mode.[/en]
       *   [ja]現在のオリエンテーションがportraitの場合にtrueを返します。[/ja]
       */

      /**
       * @method on
       * @signature on(eventName, listener)
       * @description
       *   [en]Add an event listener.[/en]
       *   [ja]イベントリスナーを追加します。[/ja]
       * @param {String} eventName
       *   [en]Name of the event.[/en]
       *   [ja]イベント名を指定します。[/ja]
       * @param {Function} listener
       *   [en]Function to execute when the event is triggered.[/en]
       *   [ja]このイベントが発火された際に呼び出される関数オブジェクトを指定します。[/ja]
       */

      /**
       * @method once
       * @signature once(eventName, listener)
       * @description
       *  [en]Add an event listener that's only triggered once.[/en]
       *  [ja]一度だけ呼び出されるイベントリスナーを追加します。[/ja]
       * @param {String} eventName
       *   [en]Name of the event.[/en]
       *   [ja]イベント名を指定します。[/ja]
       * @param {Function} listener
       *   [en]Function to execute when the event is triggered.[/en]
       *   [ja]イベントが発火した際に呼び出される関数オブジェクトを指定します。[/ja]
       */

      /**
       * @method off
       * @signature off(eventName, [listener])
       * @description
       *  [en]Remove an event listener. If the listener is not specified all listeners for the event type will be removed.[/en]
       *  [ja]イベントリスナーを削除します。もしイベントリスナーを指定しなかった場合には、そのイベントに紐づく全てのイベントリスナーが削除されます。[/ja]
       * @param {String} eventName
       *   [en]Name of the event.[/en]
       *   [ja]イベント名を指定します。[/ja]
       * @param {Function} listener
       *   [en]Function to execute when the event is triggered.[/en]
       *   [ja]削除するイベントリスナーを指定します。[/ja]
       */
      // actual implementation to detect if whether current screen is portrait or not
      _isPortrait: false,

      /**
       * @method isPortrait
       * @signature isPortrait()
       * @return {Boolean}
       *   [en]Will be true if the current orientation is portrait mode.[/en]
       *   [ja]オリエンテーションがportraitモードの場合にtrueになります。[/ja]
       * @description
       *   [en]Returns whether the current screen orientation is portrait or not.[/en]
       *   [ja]オリエンテーションがportraitモードかどうかを返します。[/ja]
       */
      isPortrait: function isPortrait() {
        return this._isPortrait();
      },

      /**
       * @method isLandscape
       * @signature isLandscape()
       * @return {Boolean}
       *   [en]Will be true if the current orientation is landscape mode.[/en]
       *   [ja]オリエンテーションがlandscapeモードの場合にtrueになります。[/ja]
       * @description
       *   [en]Returns whether the current screen orientation is landscape or not.[/en]
       *   [ja]オリエンテーションがlandscapeモードかどうかを返します。[/ja]
       */
      isLandscape: function isLandscape() {
        return !this.isPortrait();
      },
      _init: function _init() {
        document.addEventListener('DOMContentLoaded', this._onDOMContentLoaded.bind(this), false);

        if ('orientation' in window) {
          window.addEventListener('orientationchange', this._onOrientationChange.bind(this), false);
        } else {
          window.addEventListener('resize', this._onResize.bind(this), false);
        }

        this._isPortrait = function () {
          return window.innerHeight > window.innerWidth;
        };

        return this;
      },
      _onDOMContentLoaded: function _onDOMContentLoaded() {
        this._installIsPortraitImplementation();

        this.emit('change', {
          isPortrait: this.isPortrait()
        });
      },
      _installIsPortraitImplementation: function _installIsPortraitImplementation() {
        var isPortrait = window.innerWidth < window.innerHeight;

        if (!('orientation' in window)) {
          this._isPortrait = function () {
            return window.innerHeight > window.innerWidth;
          };
        } else if (window.orientation % 180 === 0) {
          this._isPortrait = function () {
            return Math.abs(window.orientation % 180) === 0 ? isPortrait : !isPortrait;
          };
        } else {
          this._isPortrait = function () {
            return Math.abs(window.orientation % 180) === 90 ? isPortrait : !isPortrait;
          };
        }
      },
      _onOrientationChange: function _onOrientationChange() {
        var _this = this;

        var isPortrait = this._isPortrait(); // Wait for the dimensions to change because
        // of Android inconsistency.


        var nIter = 0;
        var interval = setInterval(function () {
          nIter++;
          var w = window.innerWidth;
          var h = window.innerHeight;

          if (isPortrait && w <= h || !isPortrait && w >= h) {
            _this.emit('change', {
              isPortrait: isPortrait
            });

            clearInterval(interval);
          } else if (nIter === 50) {
            _this.emit('change', {
              isPortrait: isPortrait
            });

            clearInterval(interval);
          }
        }, 20);
      },
      // Run on not mobile browser.
      _onResize: function _onResize() {
        this.emit('change', {
          isPortrait: this.isPortrait()
        });
      }
    };
    MicroEvent.mixin(obj);
    return obj;
  };

  var orientation = create()._init();

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  /**
   * @object ons.modifier
   * @category visual
   * @description
   *   [en]
   *     Utility methods to change modifier attributes of Onsen UI elements..
   *   [/en]
   *   [ja][/ja]
   * @example
   * ons.modifier.add(myOnsInputElement, 'underbar');
   * ons.modifier.toggle(myOnsToastElement, 'custom-modifier');
   *
   */

  var modifier = {
    /**
     * @method add
     * @signature add(element, modifier [, modifier])
     * @description
     *   [en]Add the specified modifiers to the element if they are not already included.[/en]
     *   [ja][/ja]
     * @param {HTMLElement} element
     *   [en]Target element.[/en]
     *   [ja][/ja]
     * @param {String} modifier
     *   [en]Name of the modifier.[/en]
     *   [ja][/ja]
     */
    add: function add(element) {
      for (var _len = arguments.length, modifiers = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        modifiers[_key - 1] = arguments[_key];
      }

      return modifiers.forEach(function (modifier) {
        return util$4.addModifier(element, modifier);
      });
    },

    /**
     * @method remove
     * @signature remove(element, modifier [, modifier])
     * @description
     *   [en]Remove the specified modifiers from the element if they are included.[/en]
     *   [ja][/ja]
     * @param {HTMLElement} element
     *   [en]Target element.[/en]
     *   [ja][/ja]
     * @param {String} modifier
     *   [en]Name of the modifier.[/en]
     *   [ja][/ja]
     */
    remove: function remove(element) {
      for (var _len2 = arguments.length, modifiers = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        modifiers[_key2 - 1] = arguments[_key2];
      }

      return modifiers.forEach(function (modifier) {
        return util$4.removeModifier(element, modifier);
      });
    },

    /**
     * @method contains
     * @signature contains(element, modifier)
     * @description
     *   [en]Check whether the specified modifier is included in the element.[/en]
     *   [ja][/ja]
     * @param {HTMLElement} element
     *   [en]Target element.[/en]
     *   [ja][/ja]
     * @param {String} modifier
     *   [en]Name of the modifier.[/en]
     *   [ja][/ja]
     * @return {Boolean}
     *   [en]`true` when the specified modifier is found in the element's `modifier` attribute. `false` otherwise.[/en]
     *   [ja][/ja]
     */
    contains: util$4.hasModifier,

    /**
     * @method toggle
     * @signature toggle(element, modifier [, force])
     * @description
     *   [en]Toggle the specified modifier.[/en]
     *   [ja][/ja]
     * @param {HTMLElement} element
     *   [en]Target element.[/en]
     *   [ja][/ja]
     * @param {String} modifier
     *   [en]Name of the modifier.[/en]
     *   [ja][/ja]
     * @param {String} force
     *   [en]If it evaluates to true, add specified modifier value, and if it evaluates to false, remove it.[/en]
     *   [ja][/ja]
     */
    toggle: util$4.toggleModifier
  };

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  var softwareKeyboard = new MicroEvent();
  softwareKeyboard._visible = false;

  var onShow = function onShow() {
    softwareKeyboard._visible = true;
    softwareKeyboard.emit('show');
  };

  var onHide = function onHide() {
    softwareKeyboard._visible = false;
    softwareKeyboard.emit('hide');
  };

  var bindEvents = function bindEvents() {
    if (typeof Keyboard !== 'undefined') {
      // https://github.com/martinmose/cordova-keyboard/blob/95f3da3a38d8f8e1fa41fbf40145352c13535a00/README.md
      Keyboard.onshow = onShow;
      Keyboard.onhide = onHide;
      softwareKeyboard.emit('init', {
        visible: Keyboard.isVisible
      });
      return true;
    } else if (typeof cordova.plugins !== 'undefined' && typeof cordova.plugins.Keyboard !== 'undefined') {
      // https://github.com/driftyco/ionic-plugins-keyboard/blob/ca27ecf/README.md
      window.addEventListener('native.keyboardshow', onShow);
      window.addEventListener('native.keyboardhide', onHide);
      softwareKeyboard.emit('init', {
        visible: cordova.plugins.Keyboard.isVisible
      });
      return true;
    }

    return false;
  };

  var noPluginError = function noPluginError() {
    util$4.warn('ons-keyboard: Cordova Keyboard plugin is not present.');
  };

  document.addEventListener('deviceready', function () {
    if (!bindEvents()) {
      if (document.querySelector('[ons-keyboard-active]') || document.querySelector('[ons-keyboard-inactive]')) {
        noPluginError();
      }

      softwareKeyboard.on = noPluginError;
    }
  });

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  var generateId$1 = function () {
    var i = 0;
    return function () {
      return i++;
    };
  }();
  /**
   * Door locking system.
   *
   * @param {Object} [options]
   * @param {Function} [options.log]
   */


  var DoorLock = /*#__PURE__*/function () {
    function DoorLock() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DoorLock);

      this._lockList = [];
      this._waitList = [];

      this._log = options.log || function () {};
    }
    /**
     * Register a lock.
     *
     * @return {Function} Callback for unlocking.
     */


    _createClass(DoorLock, [{
      key: "lock",
      value: function lock() {
        var _this = this;

        var unlock = function unlock() {
          _this._unlock(unlock);
        };

        unlock.id = generateId$1();

        this._lockList.push(unlock);

        this._log('lock: ' + unlock.id);

        return unlock;
      }
    }, {
      key: "_unlock",
      value: function _unlock(fn) {
        var index = this._lockList.indexOf(fn);

        if (index === -1) {
          throw new Error('This function is not registered in the lock list.');
        }

        this._lockList.splice(index, 1);

        this._log('unlock: ' + fn.id);

        this._tryToFreeWaitList();
      }
    }, {
      key: "_tryToFreeWaitList",
      value: function _tryToFreeWaitList() {
        while (!this.isLocked() && this._waitList.length > 0) {
          this._waitList.shift()();
        }
      }
      /**
       * Register a callback for waiting unlocked door.
       *
       * @params {Function} callback Callback on unlocking the door completely.
       */

    }, {
      key: "waitUnlock",
      value: function waitUnlock(callback) {
        if (!(callback instanceof Function)) {
          throw new Error('The callback param must be a function.');
        }

        if (this.isLocked()) {
          this._waitList.push(callback);
        } else {
          callback();
        }
      }
      /**
       * @return {Boolean}
       */

    }, {
      key: "isLocked",
      value: function isLocked() {
        return this._lockList.length > 0;
      }
    }]);

    return DoorLock;
  }();

  function loadPage(_ref, done, error) {
    var page = _ref.page,
        parent = _ref.parent;
        _ref.params;
    internal$1.getPageHTMLAsync(page).then(function (html) {
      var pageElement = util$4.createElement(html);
      parent.appendChild(pageElement);
      done(pageElement);
    }).catch(function (e) {
      return error(e);
    });
  }

  function unloadPage(element) {
    if (element._destroy instanceof Function) {
      element._destroy();
    } else {
      element.remove();
    }
  }

  var PageLoader = /*#__PURE__*/function () {
    /**
     * @param {Function} [fn] Returns an object that has "element" property and "unload" function.
     */
    function PageLoader(loader, unloader) {
      _classCallCheck(this, PageLoader);

      this._loader = loader instanceof Function ? loader : loadPage;
      this._unloader = unloader instanceof Function ? unloader : unloadPage;
    }
    /**
     * Set internal loader implementation.
     */


    _createClass(PageLoader, [{
      key: "internalLoader",
      get: function get() {
        return this._loader;
      }
      /**
       * @param {any} options.page
       * @param {Element} options.parent A location to load page.
       * @param {Object} [options.params] Extra parameters for ons-page.
       * @param {Function} done Take an object that has "element" property and "unload" function.
       * @param {Function} error Function called when there is an error.
       */
      ,
      set: function set(fn) {
        if (!(fn instanceof Function)) {
          throw Error('First parameter must be an instance of Function');
        }

        this._loader = fn;
      }
    }, {
      key: "load",
      value: function load(_ref2, done, error) {
        var page = _ref2.page,
            parent = _ref2.parent,
            _ref2$params = _ref2.params,
            params = _ref2$params === void 0 ? {} : _ref2$params;

        this._loader({
          page: page,
          parent: parent,
          params: params
        }, function (pageElement) {
          if (!(pageElement instanceof Element)) {
            throw Error('pageElement must be an instance of Element.');
          }

          done(pageElement);
        }, error);
      }
    }, {
      key: "unload",
      value: function unload(pageElement) {
        if (!(pageElement instanceof Element)) {
          throw Error('pageElement must be an instance of Element.');
        }

        this._unloader(pageElement);
      }
    }]);

    return PageLoader;
  }();
  var defaultPageLoader = new PageLoader();
  var instantPageLoader = new PageLoader(function (_ref3, done) {
    var page = _ref3.page,
        parent = _ref3.parent;
        _ref3.params;
    var element = util$4.createElement(page.trim());
    parent.appendChild(element);
    done(element);
  }, unloadPage);

  /**
   * @object ons
   * @category util
   * @description
   *   [ja]Onsen UIで利用できるグローバルなオブジェクトです。[/ja]
   *   [en]A global object that's used in Onsen UI. [/en]
   */

  var ons = {
    animit: Animit,
    defaultPageLoader: defaultPageLoader,
    elements: onsElements,
    GestureDetector: GestureDetector,
    modifier: modifier,
    notification: notification,
    orientation: orientation,
    pageAttributeExpression: pageAttributeExpression,
    PageLoader: PageLoader,
    platform: platform,
    softwareKeyboard: softwareKeyboard,
    _autoStyle: autoStyle,
    _internal: internal$1,
    _readyLock: new DoorLock(),
    _util: util$4
  };
  ons.platform.select((window.location.search.match(/platform=([\w-]+)/) || [])[1]);
  waitDeviceReady();

  var readyError = function readyError(after) {
    return util$4.throw("This method must be called ".concat(after ? 'after' : 'before', " ons.isReady() is true"));
  };
  /**
   * @method isReady
   * @signature isReady()
   * @return {Boolean}
   *   [en]Will be true if Onsen UI is initialized.[/en]
   *   [ja]初期化されているかどうかを返します。[/ja]
   * @description
   *   [en]Returns true if Onsen UI is initialized.[/en]
   *   [ja]Onsen UIがすでに初期化されているかどうかを返すメソッドです。[/ja]
   */


  ons.isReady = function () {
    return !ons._readyLock.isLocked();
  };
  /**
   * @method isWebView
   * @signature isWebView()
   * @return {Boolean}
   *   [en]Will be true if the app is running in Cordova.[/en]
   *   [ja]Cordovaで実行されている場合にtrueになります。[/ja]
   * @description
   *   [en]Returns true if running inside Cordova.[/en]
   *   [ja]Cordovaで実行されているかどうかを返すメソッドです。[/ja]
   */


  ons.isWebView = ons.platform.isWebView;
  /**
   * @method ready
   * @signature ready(callback)
   * @description
   *   [ja]アプリの初期化に利用するメソッドです。渡された関数は、Onsen UIの初期化が終了している時点で必ず呼ばれます。[/ja]
   *   [en]Method used to wait for app initialization. Waits for `DOMContentLoaded` and `deviceready`, when necessary, before executing the callback.[/en]
   * @param {Function} callback
   *   [en]Function that executes after Onsen UI has been initialized.[/en]
   *   [ja]Onsen UIが初期化が完了した後に呼び出される関数オブジェクトを指定します。[/ja]
   */

  ons.ready = function (callback) {
    if (ons.isReady()) {
      callback();
    } else {
      ons._readyLock.waitUnlock(callback);
    }
  };
  /**
   * @method setDefaultDeviceBackButtonListener
   * @signature setDefaultDeviceBackButtonListener(listener)
   * @param {Function} listener
   *   [en]Function that executes when device back button is pressed. Must be called on `ons.ready`.[/en]
   *   [ja]デバイスのバックボタンが押された時に実行される関数オブジェクトを指定します。[/ja]
   * @description
   *   [en]Set default handler for device back button.[/en]
   *   [ja]デバイスのバックボタンのためのデフォルトのハンドラを設定します。[/ja]
   */


  ons.setDefaultDeviceBackButtonListener = function (listener) {
    if (!ons.isReady()) {
      readyError(true);
    }

    ons._defaultDeviceBackButtonHandler.setListener(listener);
  };
  /**
   * @method disableDeviceBackButtonHandler
   * @signature disableDeviceBackButtonHandler()
   * @description
   * [en]Disable device back button event handler. Must be called on `ons.ready`.[/en]
   * [ja]デバイスのバックボタンのイベントを受け付けないようにします。[/ja]
   */


  ons.disableDeviceBackButtonHandler = function () {
    if (!ons.isReady()) {
      readyError(true);
    }

    internal$1.dbbDispatcher.disable();
  };
  /**
   * @method enableDeviceBackButtonHandler
   * @signature enableDeviceBackButtonHandler()
   * @description
   * [en]Enable device back button event handler. Must be called on `ons.ready`.[/en]
   * [ja]デバイスのバックボタンのイベントを受け付けるようにします。[/ja]
   */


  ons.enableDeviceBackButtonHandler = function () {
    if (!ons.isReady()) {
      readyError(true);
    }

    internal$1.dbbDispatcher.enable();
  };

  ons.fireDeviceBackButtonEvent = function () {
    internal$1.dbbDispatcher.fireDeviceBackButtonEvent();
  };
  /**
   * @method enableAutoStatusBarFill
   * @signature enableAutoStatusBarFill()
   * @description
   *   [en]Enable status bar fill feature on iOS7 and above (except for iPhone X). Must be called before `ons.ready`.[/en]
   *   [ja]iOS7以上（iPhone Xは除く）で、ステータスバー部分の高さを自動的に埋める処理を有効にします。[/ja]
   */


  ons.enableAutoStatusBarFill = function () {
    if (ons.isReady()) {
      readyError(false);
    }

    internal$1.config.autoStatusBarFill = true;
  };
  /**
   * @method disableAutoStatusBarFill
   * @signature disableAutoStatusBarFill()
   * @description
   *   [en]Disable status bar fill feature on iOS7 and above (except for iPhone X). Must be called before `ons.ready`.[/en]
   *   [ja]iOS7以上（iPhone Xは除く）で、ステータスバー部分の高さを自動的に埋める処理を無効にします。[/ja]
   */


  ons.disableAutoStatusBarFill = function () {
    if (ons.isReady()) {
      readyError(false);
    }

    internal$1.config.autoStatusBarFill = false;
  };
  /**
   * @method mockStatusBar
   * @signature mockStatusBar()
   * @description
   *   [en]Creates a static element similar to iOS status bar. Only useful for browser testing. Must be called before `ons.ready`.[/en]
   *   [ja][/ja]
   */


  ons.mockStatusBar = function () {
    if (ons.isReady()) {
      readyError(false);
    }

    var mock = function mock() {
      if (!document.body.children[0] || !document.body.children[0].classList.contains('ons-status-bar-mock')) {
        var android = platform.isAndroid(),
            i = function i(_i) {
          return "<i class=\"".concat(_i.split('-')[0], " ").concat(_i, "\"></i>");
        };

        var left = android ? "".concat(i('zmdi-twitter'), " ").concat(i('zmdi-google-play')) : "No SIM ".concat(i('fa-wifi')),
            center = android ? '' : '12:28 PM',
            right = android ? "".concat(i('zmdi-network'), " ").concat(i('zmdi-wifi'), " ").concat(i('zmdi-battery'), " 12:28 PM") : "80% ".concat(i('fa-battery-three-quarters'));
        document.body.insertBefore(util$4.createElement("<div class=\"ons-status-bar-mock ".concat(android ? 'android' : 'ios', "\">") + "<div>".concat(left, "</div><div>").concat(center, "</div><div>").concat(right, "</div>") + "</div>"), document.body.firstChild);
      }
    };

    document.body ? mock() : internal$1.waitDOMContentLoaded(mock);
  };
  /**
   * @method disableAnimations
   * @signature disableAnimations()
   * @description
   *   [en]Disable all animations. Could be handy for testing and older devices.[/en]
   *   [ja]アニメーションを全て無効にします。テストの際に便利です。[/ja]
   */


  ons.disableAnimations = function () {
    internal$1.config.animationsDisabled = true;
  };
  /**
   * @method enableAnimations
   * @signature enableAnimations()
   * @description
   *   [en]Enable animations (default).[/en]
   *   [ja]アニメーションを有効にします。[/ja]
   */


  ons.enableAnimations = function () {
    internal$1.config.animationsDisabled = false;
  };

  ons._disableWarnings = function () {
    internal$1.config.warningsDisabled = true;
  };

  ons._enableWarnings = function () {
    internal$1.config.warningsDisabled = false;
  };
  /**
   * @method disableAutoStyling
   * @signature disableAutoStyling()
   * @description
   *   [en]Disable automatic styling.[/en]
   *   [ja][/ja]
   */


  ons.disableAutoStyling = autoStyle.disable;
  /**
   * @method enableAutoStyling
   * @signature enableAutoStyling()
   * @description
   *   [en]Enable automatic styling based on OS (default).[/en]
   *   [ja][/ja]
   */

  ons.enableAutoStyling = autoStyle.enable;
  /**
   * @method disableIconAutoPrefix
   * @signature disableIconAutoPrefix()
   * @description
   *   [en]Disable adding `fa-` prefix automatically to `ons-icon` classes. Useful when including custom icon packs.[/en]
   *   [ja][/ja]
   */

  ons.disableIconAutoPrefix = function () {
    util$4.checkMissingImport('Icon');
    onsElements.Icon.setAutoPrefix(false);
  };
  /**
   * @method forcePlatformStyling
   * @signature forcePlatformStyling(platform)
   * @description
   *   [en]Refresh styling for the given platform. Only useful for demos. Use `ons.platform.select(...)` instead for development and production.[/en]
   *   [ja][/ja]
   * @param {string} platform New platform to style the elements.
   */


  ons.forcePlatformStyling = function (newPlatform) {
    ons.enableAutoStyling();
    ons.platform.select(newPlatform || 'ios');

    ons._util.arrayFrom(document.querySelectorAll('*')).forEach(function (element) {
      if (element.tagName.toLowerCase() === 'ons-if') {
        element._platformUpdate();
      } else if (element.tagName.match(/^ons-/i)) {
        autoStyle.prepare(element, true);

        if (element.tagName.toLowerCase() === 'ons-tabbar') {
          element._updatePosition();
        }
      }
    });
  };
  /**
   * @method preload
   * @signature preload(templatePaths)
   * @param {String|Array} templatePaths
   *   [en]Set of HTML file paths containing 'ons-page' elements.[/en]
   *   [ja][/ja]
   * @return {Promise}
   *   [en]Promise that resolves when all the templates are cached.[/en]
   *   [ja][/ja]
   * @description
   *   [en]Separated files need to be requested on demand and this can slightly delay pushing new pages. This method requests and caches templates for later use.[/en]
   *   [ja][/ja]
   */


  ons.preload = function () {
    var templates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return Promise.all((templates instanceof Array ? templates : [templates]).map(function (template) {
      if (typeof template !== 'string') {
        util$4.throw('Expected string arguments but got ' + _typeof(template));
      }

      return internal$1.getTemplateHTMLAsync(template);
    }));
  };
  /**
   * @method createElement
   * @signature createElement(template, options)
   * @param {String} template
   *   [en]Either an HTML file path, a `<template>` id or an HTML string such as `'<div id="foo">hoge</div>'`.[/en]
   *   [ja][/ja]
   * @param {Object} [options]
   *   [en]Parameter object.[/en]
   *   [ja]オプションを指定するオブジェクト。[/ja]
   * @param {Boolean|HTMLElement} [options.append]
   *   [en]Whether or not the element should be automatically appended to the DOM.  Defaults to `false`. If `true` value is given, `document.body` will be used as the target.[/en]
   *   [ja][/ja]
   * @param {HTMLElement} [options.insertBefore]
   *   [en]Reference node that becomes the next sibling of the new node (`options.append` element).[/en]
   *   [ja][/ja]
   * @return {HTMLElement|Promise}
   *   [en]If the provided template was an inline HTML string, it returns the new element. Otherwise, it returns a promise that resolves to the new element.[/en]
   *   [ja][/ja]
   * @description
   *   [en]Create a new element from a template. Both inline HTML and external files are supported although the return value differs.[/en]
   *   [ja][/ja]
   */


  ons.createElement = function (template) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    template = template.trim();

    var create = function create(html) {
      var element = ons._util.createElement(html);

      element.remove();

      if (options.append) {
        var target = options.append instanceof HTMLElement ? options.append : document.body;
        target.insertBefore(element, options.insertBefore || null);
        options.link instanceof Function && options.link(element);
      }

      return element;
    };

    return template.charAt(0) === '<' ? create(template) : internal$1.getPageHTMLAsync(template).then(create);
  };
  /**
   * @method createPopover
   * @signature createPopover(page, [options])
   * @param {String} page
   *   [en]Page name. Can be either an HTML file or a <template> containing a <ons-dialog> component.[/en]
   *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
   * @param {Object} [options]
   *   [en]Parameter object.[/en]
   *   [ja]オプションを指定するオブジェクト。[/ja]
   * @param {Object} [options.parentScope]
   *   [en]Parent scope of the dialog. Used to bind models and access scope methods from the dialog.[/en]
   *   [ja]ダイアログ内で利用する親スコープを指定します。ダイアログからモデルやスコープのメソッドにアクセスするのに使います。このパラメータはAngularJSバインディングでのみ利用できます。[/ja]
   * @return {Promise}
   *   [en]Promise object that resolves to the popover component object.[/en]
   *   [ja]ポップオーバーのコンポーネントオブジェクトを解決するPromiseオブジェクトを返します。[/ja]
   * @description
   *   [en]Create a popover instance from a template.[/en]
   *   [ja]テンプレートからポップオーバーのインスタンスを生成します。[/ja]
   */

  /**
   * @method createDialog
   * @signature createDialog(page, [options])
   * @param {String} page
   *   [en]Page name. Can be either an HTML file or an `<template>` containing a <ons-dialog> component.[/en]
   *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
   * @param {Object} [options]
   *   [en]Parameter object.[/en]
   *   [ja]オプションを指定するオブジェクト。[/ja]
   * @return {Promise}
   *   [en]Promise object that resolves to the dialog component object.[/en]
   *   [ja]ダイアログのコンポーネントオブジェクトを解決するPromiseオブジェクトを返します。[/ja]
   * @description
   *   [en]Create a dialog instance from a template.[/en]
   *   [ja]テンプレートからダイアログのインスタンスを生成します。[/ja]
   */

  /**
   * @method createAlertDialog
   * @signature createAlertDialog(page, [options])
   * @param {String} page
   *   [en]Page name. Can be either an HTML file or an `<template>` containing a <ons-alert-dialog> component.[/en]
   *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
   * @param {Object} [options]
   *   [en]Parameter object.[/en]
   *   [ja]オプションを指定するオブジェクト。[/ja]
   * @return {Promise}
   *   [en]Promise object that resolves to the alert dialog component object.[/en]
   *   [ja]ダイアログのコンポーネントオブジェクトを解決するPromiseオブジェクトを返します。[/ja]
   * @description
   *   [en]Create a alert dialog instance from a template.[/en]
   *   [ja]テンプレートからアラートダイアログのインスタンスを生成します。[/ja]
   */


  ons.createPopover = ons.createDialog = ons.createAlertDialog = function (template) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return ons.createElement(template, _objectSpread2({
      append: true
    }, options));
  };
  /**
   * @method openActionSheet
   * @signature openActionSheet(options)
   * @description
   *   [en]Shows an instant Action Sheet and lets the user choose an action.[/en]
   *   [ja][/ja]
   * @param {Object} [options]
   *   [en]Parameter object.[/en]
   *   [ja]オプションを指定するオブジェクト。[/ja]
   * @param {Array} [options.buttons]
   *   [en]Represent each button of the action sheet following the specified order. Every item can be either a string label or an object containing `label`, `icon` and `modifier` properties.[/en]
   *   [ja][/ja]
   * @param {String} [options.title]
   *   [en]Optional title for the action sheet.[/en]
   *   [ja][/ja]
   * @param {Number} [options.destructive]
   *   [en]Optional index of the "destructive" button (only for iOS). It can be specified in the button array as well.[/en]
   *   [ja][/ja]
   * @param {Boolean} [options.cancelable]
   *   [en]Whether the action sheet can be canceled by tapping on the background mask or not.[/en]
   *   [ja][/ja]
   * @param {String} [options.modifier]
   *   [en]Modifier attribute of the action sheet. E.g. `'destructive'`.[/en]
   *   [ja][/ja]
   * @param {String} [options.maskColor]
   *   [en]Optionally change the background mask color.[/en]
   *   [ja][/ja]
   * @param {String} [options.id]
   *   [en]The element's id attribute.[/en]
   *   [ja][/ja]
   * @param {String} [options.class]
   *   [en]The element's class attribute.[/en]
   *   [ja][/ja]
   * @return {Promise}
   *   [en]Will resolve when the action sheet is closed. The resolve value is either the index of the tapped button or -1 when canceled.[/en]
   *   [ja][/ja]
   */


  ons.openActionSheet = actionSheet;
  /**
   * @method resolveLoadingPlaceholder
   * @signature resolveLoadingPlaceholder(page)
   * @param {String} page
   *   [en]Page name. Can be either an HTML file or a `<template>` id.[/en]
   *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
   * @description
   *   [en]If no page is defined for the `ons-loading-placeholder` attribute it will wait for this method being called before loading the page.[/en]
   *   [ja]ons-loading-placeholderの属性値としてページが指定されていない場合は、ページロード前に呼ばれるons.resolveLoadingPlaceholder処理が行われるまで表示されません。[/ja]
   */

  ons.resolveLoadingPlaceholder = function (page, link) {
    var elements = ons._util.arrayFrom(window.document.querySelectorAll('[ons-loading-placeholder]'));

    if (elements.length === 0) {
      util$4.throw('No ons-loading-placeholder exists');
    }

    elements.filter(function (element) {
      return !element.getAttribute('page');
    }).forEach(function (element) {
      element.setAttribute('ons-loading-placeholder', page);

      ons._resolveLoadingPlaceholder(element, page, link);
    });
  };

  ons._setupLoadingPlaceHolders = function () {
    ons.ready(function () {
      var elements = ons._util.arrayFrom(window.document.querySelectorAll('[ons-loading-placeholder]'));

      elements.forEach(function (element) {
        var page = element.getAttribute('ons-loading-placeholder');

        if (typeof page === 'string') {
          ons._resolveLoadingPlaceholder(element, page);
        }
      });
    });
  };

  ons._resolveLoadingPlaceholder = function (parent, page) {
    var link = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el, done) {
      return done();
    };
    page && ons.createElement(page).then(function (element) {
      element.style.display = 'none';
      parent.appendChild(element);
      link(element, function () {
        while (parent.firstChild && parent.firstChild !== element) {
          parent.removeChild(parent.firstChild);
        }

        element.style.display = '';
      });
    }).catch(function (error) {
      return Promise.reject('Unabled to resolve placeholder: ' + error);
    });
  };

  function waitDeviceReady() {
    var unlockDeviceReady = ons._readyLock.lock();

    window.addEventListener('DOMContentLoaded', function () {
      if (ons.isWebView()) {
        window.document.addEventListener('deviceready', unlockDeviceReady, {
          once: true
        });
      } else {
        unlockDeviceReady();
      }
    }, {
      once: true
    });
  }
  /**
   * @method getScriptPage
   * @signature getScriptPage()
   * @description
   *   [en]Access the last created page from the current `script` scope. Only works inside `<script></script>` tags that are direct children of `ons-page` element. Use this to add lifecycle hooks to a page.[/en]
   *   [ja][/ja]
   * @return {HTMLElement}
   *   [en]Returns the corresponding page element.[/en]
   *   [ja][/ja]
   */


  var getCS = 'currentScript' in document ? function () {
    return document.currentScript;
  } : function () {
    return document.scripts[document.scripts.length - 1];
  };

  ons.getScriptPage = function () {
    return getCS() && /ons-page/i.test(getCS().parentElement.tagName) && getCS().parentElement || null;
  };

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  function getElementClass() {
    if (typeof HTMLElement !== 'function') {
      // case of Safari
      var _BaseElement = function _BaseElement() {};

      _BaseElement.prototype = document.createElement('div');
      return _BaseElement;
    } else {
      return HTMLElement;
    }
  }

  var BaseElement = /*#__PURE__*/function (_getElementClass) {
    _inherits(BaseElement, _getElementClass);

    var _super = _createSuper(BaseElement);

    function BaseElement() {
      _classCallCheck(this, BaseElement);

      return _super.call(this);
    }

    return _createClass(BaseElement);
  }(getElementClass());

  /**
   * @element ons-if
   * @category conditional
   * @tutorial vanilla/Reference/if
   * @description
   *   [en]
   *     Conditionally display content depending on the platform, device orientation or both.
   *
   *     Sometimes it is useful to conditionally hide or show certain components based on platform. When running on iOS the `<ons-if>` element can be used to hide the `<ons-fab>` element.
   *   [/en]
   *   [ja][/ja]
   * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
   * @example
   * <ons-page>
   *   <ons-if orientation="landscape">
   *     Landscape view!
   *   </ons-if>
   *   <ons-if platform="android">
   *     This is Android.
   *   </ons-if>
   *   <ons-if platform="ios other">
   *     This is not Android.
   *   </ons-if>
   * </ons-page>
   */

  var IfElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(IfElement, _BaseElement);

    var _super = _createSuper(IfElement);

    /**
     * @attribute platform
     * @initonly
     * @type {string}
     * @description
     *  [en]Space-separated platform names. Possible values are `"ios"`, `"android"`, `"windows"` and `"other"`.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute orientation
     * @type {string}
     * @description
     *  [en]Either `"portrait"` or `"landscape"`.[/en]
     *  [ja]portraitもしくはlandscapeを指定します[/ja]
     */
    function IfElement() {
      var _this;

      _classCallCheck(this, IfElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        if (platform._getSelectedPlatform() !== null) {
          _this._platformUpdate();
        } else if (!_this._isAllowedPlatform()) {
          while (_this.childNodes[0]) {
            _this.childNodes[0].remove();
          }

          _this._platformUpdate();
        }
      });

      _this._onOrientationChange();

      return _this;
    }

    _createClass(IfElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        orientation.on('change', this._onOrientationChange.bind(this));
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name) {
        if (name === 'orientation') {
          this._onOrientationChange();
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        orientation.off('change', this._onOrientationChange);
      }
    }, {
      key: "_platformUpdate",
      value: function _platformUpdate() {
        this.style.display = this._isAllowedPlatform() ? '' : 'none';
      }
    }, {
      key: "_isAllowedPlatform",
      value: function _isAllowedPlatform() {
        return !this.getAttribute('platform') || this.getAttribute('platform').split(/\s+/).indexOf(platform.getMobileOS()) >= 0;
      }
    }, {
      key: "_onOrientationChange",
      value: function _onOrientationChange() {
        if (this.hasAttribute('orientation') && this._isAllowedPlatform()) {
          var conditionalOrientation = this.getAttribute('orientation').toLowerCase();
          var currentOrientation = orientation.isPortrait() ? 'portrait' : 'landscape';
          this.style.display = conditionalOrientation === currentOrientation ? '' : 'none';
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['orientation'];
      }
    }]);

    return IfElement;
  }(BaseElement);
  onsElements.If = IfElement;
  customElements.define('ons-if', IfElement);

  var BaseAnimator = /*#__PURE__*/function () {
    /**
     * @param {Object} options
     * @param {String} options.timing
     * @param {Number} options.duration
     * @param {Number} options.delay
     */
    function BaseAnimator() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, BaseAnimator);

      this.timing = options.timing || 'linear';
      this.duration = options.duration || 0;
      this.delay = options.delay || 0;
      this.def = {
        timing: this.timing,
        duration: this.duration,
        delay: this.delay
      };
    }

    _createClass(BaseAnimator, null, [{
      key: "extend",
      value: function extend() {
        var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var extendedAnimator = this;

        var newAnimator = function newAnimator() {
          extendedAnimator.apply(this, arguments);
          util$4.extend(this, properties);
        };

        newAnimator.prototype = this.prototype;
        return newAnimator;
      }
    }]);

    return BaseAnimator;
  }();

  /*
  Copyright 2013-2015 ASIAL CORPORATION

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
  // This object should not be exposed to users. Please keep this private.
  var iPhoneXPatch = {};

  iPhoneXPatch.isIPhoneXPortraitPatchActive = function () {
    return document.documentElement.getAttribute('onsflag-iphonex-portrait') != null && window.innerWidth < window.innerHeight;
  };

  iPhoneXPatch.isIPhoneXLandscapePatchActive = function () {
    // If width === height, treat it as landscape
    return document.documentElement.getAttribute('onsflag-iphonex-landscape') != null && window.innerWidth >= window.innerHeight;
  };
  /**
   * Returns the safe area lengths based on the current state of the safe areas.
   */


  iPhoneXPatch.getSafeAreaLengths = function () {
    var safeAreaLengths;

    if (iPhoneXPatch.isIPhoneXPortraitPatchActive()) {
      safeAreaLengths = {
        top: 44,
        right: 0,
        bottom: 34,
        left: 0
      };
    } else if (iPhoneXPatch.isIPhoneXLandscapePatchActive()) {
      safeAreaLengths = {
        top: 0,
        right: 44,
        bottom: 21,
        left: 44
      };
    } else {
      safeAreaLengths = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }

    return safeAreaLengths;
  };
  /**
   * Returns the safe area rect based on the current state of the safe areas.
   */


  iPhoneXPatch.getSafeAreaDOMRect = function () {
    var safeAreaRect;

    if (iPhoneXPatch.isIPhoneXPortraitPatchActive()) {
      safeAreaRect = {
        x: 0,
        y: 44,

        /* 0 + 44 (top safe area) */
        width: window.innerWidth,
        height: window.innerHeight - 78
        /* height - 44 (top safe area) - 34 (bottom safe area) */

      };
    } else if (iPhoneXPatch.isIPhoneXLandscapePatchActive()) {
      safeAreaRect = {
        x: 44,

        /* 0 + 44 (left safe area) */
        y: 0,
        width: window.innerWidth - 88,

        /* width - 44 (left safe area) - 34 (right safe area) */
        height: window.innerHeight - 21
        /* height - 21 (bottom safe area) */

      };
    } else {
      safeAreaRect = {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

    return _objectSpread2(_objectSpread2({}, safeAreaRect), {}, {
      left: safeAreaRect.x,
      top: safeAreaRect.y,
      right: safeAreaRect.x + safeAreaRect.width,
      bottom: safeAreaRect.y + safeAreaRect.height
    });
  };

  var ActionSheetAnimator = /*#__PURE__*/function (_BaseAnimator) {
    _inherits(ActionSheetAnimator, _BaseAnimator);

    var _super = _createSuper(ActionSheetAnimator);

    function ActionSheetAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'linear' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.2 : _ref$duration;

      _classCallCheck(this, ActionSheetAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {HTMLElement} dialog
     * @param {Function} done
     */


    _createClass(ActionSheetAnimator, [{
      key: "show",
      value: function show(dialog, done) {
        done();
      }
      /**
       * @param {HTMLElement} dialog
       * @param {Function} done
       */

    }, {
      key: "hide",
      value: function hide(dialog, done) {
        done();
      }
    }]);

    return ActionSheetAnimator;
  }(BaseAnimator);
  /**
   * Android style animator for Action Sheet.
   */

  var MDActionSheetAnimator = /*#__PURE__*/function (_ActionSheetAnimator) {
    _inherits(MDActionSheetAnimator, _ActionSheetAnimator);

    var _super2 = _createSuper(MDActionSheetAnimator);

    function MDActionSheetAnimator() {
      var _this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$timing = _ref2.timing,
          timing = _ref2$timing === void 0 ? 'ease' : _ref2$timing,
          _ref2$delay = _ref2.delay,
          delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
          _ref2$duration = _ref2.duration,
          duration = _ref2$duration === void 0 ? 0.4 : _ref2$duration;

      _classCallCheck(this, MDActionSheetAnimator);

      _this = _super2.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this.maskTiming = 'linear';
      _this.maskDuration = 0.2;
      return _this;
    }
    /**
     * @param {Object} dialog
     * @param {Function} callback
     */


    _createClass(MDActionSheetAnimator, [{
      key: "show",
      value: function show(dialog, callback) {
        Animit.runAll(Animit(dialog._mask).queue({
          opacity: 0
        }).wait(this.delay).queue({
          opacity: 1.0
        }, {
          duration: this.maskDuration,
          timing: this.maskTiming
        }), Animit(dialog._sheet, this.def).default({
          transform: "translate3d(0, 80%, 0)",
          opacity: 0
        }, {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }).queue(function (done) {
          callback && callback();
          done();
        }));
      }
      /**
       * @param {Object} dialog
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(dialog, callback) {
        Animit.runAll(Animit(dialog._mask).queue({
          opacity: 1
        }).wait(this.delay).queue({
          opacity: 0
        }, {
          duration: this.maskDuration,
          timing: this.maskTiming
        }), Animit(dialog._sheet, this.def).default({
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }, {
          transform: "translate3d(0, 80%, 0)",
          opacity: 0
        }).queue(function (done) {
          callback && callback();
          done();
        }));
      }
    }]);

    return MDActionSheetAnimator;
  }(ActionSheetAnimator);
  /**
   * iOS style animator for dialog.
   */

  var IOSActionSheetAnimator = /*#__PURE__*/function (_ActionSheetAnimator2) {
    _inherits(IOSActionSheetAnimator, _ActionSheetAnimator2);

    var _super3 = _createSuper(IOSActionSheetAnimator);

    function IOSActionSheetAnimator() {
      var _this2;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$timing = _ref3.timing,
          timing = _ref3$timing === void 0 ? 'ease' : _ref3$timing,
          _ref3$delay = _ref3.delay,
          delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
          _ref3$duration = _ref3.duration,
          duration = _ref3$duration === void 0 ? 0.3 : _ref3$duration;

      _classCallCheck(this, IOSActionSheetAnimator);

      _this2 = _super3.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this2.maskTiming = 'linear';
      _this2.maskDuration = 0.2;

      if (iPhoneXPatch.isIPhoneXPortraitPatchActive()) {
        _this2.liftAmount = 'calc(100% + 48px)';
      } else if (iPhoneXPatch.isIPhoneXLandscapePatchActive()) {
        _this2.liftAmount = 'calc(100% + 33px)';
      } else {
        _this2.liftAmount = document.body.clientHeight / 2.0 - 1 + 'px'; // avoid Forced Synchronous Layout
      }

      return _this2;
    }
    /**
     * @param {Object} dialog
     * @param {Function} callback
     */


    _createClass(IOSActionSheetAnimator, [{
      key: "show",
      value: function show(dialog, callback) {
        Animit.runAll(Animit(dialog._mask).queue({
          opacity: 0
        }).wait(this.delay).queue({
          opacity: 1
        }, {
          duration: this.maskDuration,
          timing: this.maskTiming
        }), Animit(dialog._sheet, this.def).default({
          transform: "translate3d(0, ".concat(this.liftAmount, ", 0)")
        }, {
          transform: 'translate3d(0, 0, 0)'
        }).queue(function (done) {
          callback && callback();
          done();
        }));
      }
      /**
       * @param {Object} dialog
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(dialog, callback) {
        Animit.runAll(Animit(dialog._mask).queue({
          opacity: 1
        }).wait(this.delay).queue({
          opacity: 0
        }, {
          duration: this.maskDuration,
          timing: this.maskTiming
        }), Animit(dialog._sheet, this.def).default({
          transform: 'translate3d(0, 0, 0)'
        }, {
          transform: "translate3d(0, ".concat(this.liftAmount, ", 0)")
        }).queue(function (done) {
          callback && callback();
          done();
        }));
      }
    }]);

    return IOSActionSheetAnimator;
  }(ActionSheetAnimator);

  var BaseDialogElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(BaseDialogElement, _BaseElement);

    var _super = _createSuper(BaseDialogElement);

    function BaseDialogElement() {
      var _this;

      _classCallCheck(this, BaseDialogElement);

      _this = _super.call(this);

      if (_this.constructor === BaseDialogElement) {
        util$4.throwAbstract();
      }

      _this._visible = false;
      _this._doorLock = new DoorLock();
      _this._cancel = _this._cancel.bind(_assertThisInitialized(_this));
      _this._selfCamelName = util$4.camelize(_this.tagName.slice(4));

      _this._defaultDBB = function (e) {
        return _this.cancelable ? _this._cancel() : e.callParentHandler();
      };

      _this._animatorFactory = _this._updateAnimatorFactory();
      return _this;
    }

    _createClass(BaseDialogElement, [{
      key: "_scheme",
      get: function get() {
        util$4.throwMember();
      }
    }, {
      key: "_updateAnimatorFactory",
      value: function _updateAnimatorFactory() {
        util$4.throwMember();
      }
    }, {
      key: "_toggleStyle",
      value: function _toggleStyle(shouldShow) {
        this.style.display = shouldShow ? 'block' : 'none';
      }
    }, {
      key: "onDeviceBackButton",
      get: function get() {
        return this._backButtonHandler;
      },
      set: function set(callback) {
        if (this._backButtonHandler) {
          this._backButtonHandler.destroy();
        }

        this._backButtonHandler = deviceBackButtonDispatcher.createHandler(this, callback);
      }
    }, {
      key: "_cancel",
      value: function _cancel() {
        var _this2 = this;

        if (this.cancelable && !this._running) {
          this._running = true;
          this.hide().then(function () {
            _this2._running = false;
            util$4.triggerElementEvent(_this2, 'dialogcancel');
            util$4.triggerElementEvent(_this2, 'dialog-cancel'); // dialog-cancel is deprecated but still emit to avoid breaking user code
          }, function () {
            return _this2._running = false;
          });
        }
      }
    }, {
      key: "show",
      value: function show() {
        var _this3 = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this._setVisible.apply(this, [true].concat(args)).then(function (dialog) {
          _this3.visible = true;
          return dialog;
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this4 = this;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this._setVisible.apply(this, [false].concat(args)).then(function (dialog) {
          _this4.visible = false;
          return dialog;
        });
      }
    }, {
      key: "toggle",
      value: function toggle() {
        var _this5 = this;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return this._setVisible.apply(this, [!this.visible].concat(args)).then(function (dialog) {
          _this5.visible = _this5._visible;
          return dialog;
        });
      }
    }, {
      key: "_setVisible",
      value: function _setVisible(shouldShow) {
        var _util$triggerElementE,
            _this6 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var action = shouldShow ? 'show' : 'hide';
        options = _objectSpread2({}, options);
        options.animationOptions = util$4.extend(options.animationOptions || {}, this.animationOptions);
        var canceled = false;
        util$4.triggerElementEvent(this, "pre".concat(action), (_util$triggerElementE = {}, _defineProperty(_util$triggerElementE, this._selfCamelName, this), _defineProperty(_util$triggerElementE, "cancel", function cancel() {
          return canceled = true;
        }), _util$triggerElementE));

        if (canceled) {
          return Promise.reject("Canceled in pre".concat(action, " event."));
        }

        return new Promise(function (resolve) {
          _this6._doorLock.waitUnlock(function () {
            var unlock = _this6._doorLock.lock();

            var animator = _this6._animatorFactory.newAnimator(options);

            shouldShow && _this6._toggleStyle(true, options);
            _this6._visible = shouldShow;
            util$4.iosPageScrollFix(shouldShow);
            contentReady(_this6, function () {
              animator[action](_this6, function () {
                !shouldShow && _this6._toggleStyle(false, options);
                unlock();
                util$4.propagateAction(_this6, '_' + action);
                util$4.triggerElementEvent(_this6, 'post' + action, _defineProperty({}, _this6._selfCamelName, _this6)); // postshow posthide

                if (options.callback instanceof Function) {
                  options.callback(_this6);
                }

                resolve(_this6);
              });
            });
          });
        });
      }
    }, {
      key: "visible",
      get: function get() {
        return this.hasAttribute('visible');
      },
      set: function set(value) {
        if (value) {
          this.setAttribute('visible', '');
        } else {
          this.removeAttribute('visible');
        }
      }
    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute('disabled');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'disabled', value);
      }
    }, {
      key: "cancelable",
      get: function get() {
        return this.hasAttribute('cancelable');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'cancelable', value);
      }
    }, {
      key: "maskColor",
      get: function get() {
        return this.getAttribute('mask-color');
      },
      set: function set(value) {
        if (value === null || value === undefined) {
          this.removeAttribute('mask-color');
        } else {
          this.setAttribute('mask-color', value);
        }
      }
    }, {
      key: "animationOptions",
      get: function get() {
        return AnimatorFactory.parseAnimationOptionsString(this.getAttribute('animation-options'));
      },
      set: function set(value) {
        if (value === undefined || value === null) {
          this.removeAttribute('animation-options');
        } else {
          this.setAttribute('animation-options', JSON.stringify(value));
        }
      }
    }, {
      key: "_updateMask",
      value: function _updateMask() {
        var _this7 = this;

        contentReady(this, function () {
          if (_this7._mask) {
            _this7._mask.style.backgroundColor = _this7.maskColor;
          }
        });
      }
    }, {
      key: "_updateAnimation",
      value: function _updateAnimation() {
        this._animatorFactory = this._updateAnimatorFactory();
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this8 = this;

        if (typeof this._defaultDBB === 'function') {
          this.onDeviceBackButton = this._defaultDBB.bind(this);
        }

        contentReady(this, function () {
          if (_this8._mask) {
            _this8._mask.addEventListener('click', _this8._cancel, false);
          }
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._backButtonHandler) {
          this._backButtonHandler.destroy();

          this._backButtonHandler = null;
        }

        if (this._mask) {
          this._mask.removeEventListener('click', this._cancel, false);
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this9 = this;

        switch (name) {
          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, this._scheme);
            break;

          case 'animation':
            this._updateAnimation();

            break;

          case 'mask-color':
            this._updateMask();

            break;

          case 'visible':
            if (this.visible !== this._visible) {
              // update the mask and animation early in case `visible` attribute
              // changed callback is called before `animation` or `mask-color`
              this._updateMask();

              this._updateAnimation();

              contentReady(this, function () {
                _this9._setVisible(_this9.visible);
              });
            }

            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'animation', 'mask-color', 'visible'];
      }
    }, {
      key: "events",
      get: function get() {
        return ['preshow', 'postshow', 'prehide', 'posthide', 'dialogcancel', 'dialog-cancel'];
      }
    }]);

    return BaseDialogElement;
  }(BaseElement);

  var scheme$v = {
    '.action-sheet': 'action-sheet--*',
    '.action-sheet-mask': 'action-sheet-mask--*',
    '.action-sheet-title': 'action-sheet-title--*'
  };
  var _animatorDict$8 = {
    'default': function _default() {
      return platform.isAndroid() ? MDActionSheetAnimator : IOSActionSheetAnimator;
    },
    'none': ActionSheetAnimator
  };
  /**
   * @element ons-action-sheet
   * @category dialog
   * @description
   *   [en]
   *     Action/bottom sheet that is displayed on top of current screen.
   *
   *     This element can either be attached directly to the `<body>` or dynamically created from a template using the `ons.createElement(template, { append: true })` utility function and the `<template>` tag.
   *
   *     The action sheet is useful for displaying a list of options and asking the user to make a decision. A `ons-action-sheet-button` is provided for this purpose, although it can contain any type of content.
   *
   *     It will automatically be displayed as Material Design (bottom sheet) when running on an Android device.
   *   [/en]
   *   [ja]
   *     アクションシート、もしくはボトムシートを現在のスクリーン上に表示します。
   *
   *     この要素は、`<body>`要素に直接アタッチされるか、もしくは`ons.createElement(template, { append: true })`と`<template>`タグを使ってテンプレートから動的に生成されます。
   *
   *     アクションシートは、選択肢のリストを表示してユーザーに尋ねるのに便利です。`ons-action-sheet-button`は、この要素の中に置くために提供されていますが、それ以外にも他のどのような要素を含むことができます。
   *
   *     Androidデバイスで実行されるときには、自動的にマテリアルデザイン(ボトムシート)として表示されます。
   *   [/ja]
   * @modifier material
   *   [en]Display a Material Design bottom sheet.[/en]
   *   [ja]マテリアルデザインのボトムシートを表示します。[/ja]
   * @tutorial vanilla/reference/action-sheet
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @seealso ons-popover
   *   [en]`<ons-popover>` component[/en]
   *   [ja]ons-popoverコンポーネント[/ja]
   * @seealso ons-modal
   *   [en]`<ons-modal>` component[/en]
   *   [ja]ons-modalコンポーネント[/ja]
   * @example
   * <ons-action-sheet id="sheet">
   *   <ons-action-sheet-button>Label</ons-action-sheet-button>
   *   <ons-action-sheet-button>Label</ons-action-sheet-button>
   * </ons-action-sheet>
   *
   * <script>
   *   document.getElementById('sheet').show();
   * </script>
   */

  var ActionSheetElement = /*#__PURE__*/function (_BaseDialogElement) {
    _inherits(ActionSheetElement, _BaseDialogElement);

    var _super = _createSuper(ActionSheetElement);

    /**
     * @event preshow
     * @description
     * [en]Fired just before the action sheet is displayed.[/en]
     * [ja]ダイアログが表示される直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.actionSheet
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute this function to stop the action sheet from being shown.[/en]
     *   [ja]この関数を実行すると、ダイアログの表示がキャンセルされます。[/ja]
     */

    /**
     * @event postshow
     * @description
     * [en]Fired just after the action sheet is displayed.[/en]
     * [ja]ダイアログが表示された直後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.actionSheet
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event prehide
     * @description
     * [en]Fired just before the action sheet is hidden.[/en]
     * [ja]ダイアログが隠れる直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.actionSheet
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute this function to stop the action sheet from being hidden.[/en]
     *   [ja]この関数を実行すると、ダイアログの非表示がキャンセルされます。[/ja]
     */

    /**
     * @event posthide
     * @description
     * [en]Fired just after the action sheet is hidden.[/en]
     * [ja]ダイアログが隠れた後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.actionSheet
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event dialogcancel
     * @description
     * [en]Fired when the action sheet is canceled.[/en]
     * [ja][/ja]
     */

    /**
     * @attribute title
     * @type {String}
     * @description
     *  [en]Optional title of the action sheet. A new element will be created containing this string.[/en]
     *  [ja]アクションシートのタイトルを指定します。ここで指定した文字列を含む新しい要素が作成されます。[/ja]
     */

    /**
     * @property title
     * @type {String}
     * @description
     *  [en]Optional title of the action sheet. A new element will be created containing this string.[/en]
     *  [ja]アクションシートのタイトルを指定します。ここで指定した文字列を含む新しい要素が作成されます。[/ja]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the action sheet.[/en]
     *  [ja]ダイアログの表現を指定します。[/ja]
     */

    /**
     * @attribute cancelable
     * @description
     *  [en]If this attribute is set the action sheet can be closed by tapping the background or by pressing the back button on Android devices.[/en]
     *  [ja]この属性が設定されると、アクションシートの背景やAndroidデバイスのバックボタンを推すことでアクションシートが閉じるようになります。[/ja]
     */

    /**
     * @attribute disabled
     * @description
     *  [en]If this attribute is set the action sheet is disabled.[/en]
     *  [ja]この属性がある時、ダイアログはdisabled状態になります。[/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @default default
     * @description
     *  [en]The animation used when showing and hiding the action sheet. Can be either `"none"` or `"default"`.[/en]
     *  [ja]ダイアログを表示する際のアニメーション名を指定します。"none"もしくは"default"を指定できます。[/ja]
     */

    /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`[/ja]
     */

    /**
     * @property animationOptions
     * @type {Object}
     * @description
     *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */

    /**
     * @attribute mask-color
     * @type {String}
     * @default rgba(0, 0, 0, 0.2)
     * @description
     *  [en]Color of the background mask. Default is `"rgba(0, 0, 0, 0.2)"`.[/en]
     *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
     */

    /**
     * @attribute visible
     * @type {Boolean}
     * @description
     *   [en]Whether the action sheet is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */
    function ActionSheetElement() {
      var _this;

      _classCallCheck(this, ActionSheetElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      return _this;
    }

    _createClass(ActionSheetElement, [{
      key: "_scheme",
      get: function get() {
        return scheme$v;
      }
    }, {
      key: "_mask",
      get: function get() {
        return util$4.findChild(this, '.action-sheet-mask');
      }
    }, {
      key: "_sheet",
      get: function get() {
        return util$4.findChild(this, '.action-sheet');
      }
    }, {
      key: "_title",
      get: function get() {
        return this.querySelector('.action-sheet-title');
      }
    }, {
      key: "_updateAnimatorFactory",
      value: function _updateAnimatorFactory() {
        return new AnimatorFactory({
          animators: _animatorDict$8,
          baseClass: ActionSheetAnimator,
          baseClassName: 'ActionSheetAnimator',
          defaultAnimation: this.getAttribute('animation')
        });
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.style.display = 'none';
        this.style.zIndex = 10001;
        /* Expected result:
         *   <ons-action-sheet>
         *     <div class="action-sheet-mask"></div>
         *     <div class="action-sheet">
         *       <div class="action-sheet-title></div>
         *       ...
         *     </div>
         *   </ons-action-sheet>
         */

        if (!this._sheet) {
          var sheet = document.createElement('div');
          sheet.classList.add('action-sheet');

          while (this.firstChild) {
            sheet.appendChild(this.firstChild);
          }

          this.appendChild(sheet);
        }

        if (!this._title && this.hasAttribute('title')) {
          var title = document.createElement('div');
          title.innerHTML = this.title;
          title.classList.add('action-sheet-title');

          this._sheet.insertBefore(title, this._sheet.firstChild);
        }

        if (!this._mask) {
          var mask = document.createElement('div');
          mask.classList.add('action-sheet-mask');
          this.insertBefore(mask, this.firstChild);
        }

        this._sheet.style.zIndex = 20001;
        this._mask.style.zIndex = 20000;
        ModifierUtil.initModifier(this, this._scheme);
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
        if (this._title) {
          if (!this.title) {
            this._title.hidden = true;
          } else {
            this._title.innerHTML = this.title;
            this._title.hidden = false;
          }
        }
      }
    }, {
      key: "title",
      get: function get() {
        return this.getAttribute('title');
      },
      set: function set(value) {
        if (value === null || value === undefined) {
          this.removeAttribute('title');
        } else {
          this.setAttribute('title', value);
        }
      }
      /**
       * @property onDeviceBackButton
       * @type {Object}
       * @description
       *   [en]Back-button handler.[/en]
       *   [ja]バックボタンハンドラ。[/ja]
       */

      /**
       * @property maskColor
       * @type {String}
       * @default rgba(0, 0, 0, 0.2)
       * @description
       *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)".[/en]
       *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
       */

      /**
       * @method show
       * @signature show([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"none"` and `"slide"`.[/en]
       *   [ja]アニメーション名を指定します。"none", "slide"のいずれかを指定します。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
       * @param {Function} [options.callback]
       *   [en]This function is called after the action sheet has been revealed.[/en]
       *   [ja]ダイアログが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *  [en]Show the action sheet.[/en]
       *  [ja]ダイアログを開きます。[/ja]
       * @return {Promise} Resolves to the displayed element.
       */

      /**
       * @method hide
       * @signature hide([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"none"` and `"slide"`.[/en]
       *   [ja]アニメーション名を指定します。"none", "slide"のいずれかを指定できます。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`[/ja]
       * @param {Function} [options.callback]
       *   [en]This functions is called after the action sheet has been hidden.[/en]
       *   [ja]ダイアログが隠れた後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *   [en]Hide the action sheet.[/en]
       *   [ja]ダイアログを閉じます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the hidden element[/en]
       *   [ja]隠れた要素を解決します。[/ja]
       */

      /**
       * @property visible
       * @type {Boolean}
       * @description
       *   [en]Whether the action sheet is visible or not.[/en]
       *   [ja]要素が見える場合に`true`。[/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the action sheet is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @property cancelable
       * @type {Boolean}
       * @description
       *   [en]Whether the action sheet is cancelable or not. A cancelable action sheet can be closed by tapping the background or by pressing the back button on Android devices.[/en]
       *   [ja]アクションシートがキャンセル可能かどうかを設定します。キャンセル可能なアクションシートは、背景をタップしたりAndroidデバイスのバックボタンを推すことで閉じるようになります。[/ja]
       */

    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'title') {
          this._updateTitle();
        } else {
          _get(_getPrototypeOf(ActionSheetElement.prototype), "attributeChangedCallback", this).call(this, name, last, current);
        }
      }
      /**
       * @param {String} name
       * @param {ActionSheetAnimator} Animator
       */

    }], [{
      key: "observedAttributes",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ActionSheetElement), "observedAttributes", this)), ['title']);
      }
    }, {
      key: "registerAnimator",
      value: function registerAnimator(name, Animator) {
        if (!(Animator.prototype instanceof ActionSheetAnimator)) {
          util$4.throwAnimator('ActionSheet');
        }

        _animatorDict$8[name] = Animator;
      }
    }, {
      key: "animators",
      get: function get() {
        return _animatorDict$8;
      }
    }, {
      key: "ActionSheetAnimator",
      get: function get() {
        return ActionSheetAnimator;
      }
    }]);

    return ActionSheetElement;
  }(BaseDialogElement);
  onsElements.ActionSheet = ActionSheetElement;
  customElements.define('ons-action-sheet', ActionSheetElement);

  /**
   * @class AnimatorCSS - implementation of Animator class using css transitions
   */

  var AnimatorCSS = /*#__PURE__*/function () {
    function AnimatorCSS() {
      _classCallCheck(this, AnimatorCSS);

      this._queue = [];
      this._index = 0;
    }

    _createClass(AnimatorCSS, [{
      key: "animate",
      value:
      /**
       * @method animate
       * @desc main animation function
       * @param {Element} element
       * @param {Object} finalCSS
       * @param {number} [duration=200] - duration in milliseconds
       * @return {Object} result
       * @return {Function} result.then(callback) - sets a callback to be executed after the animation has stopped
       * @return {Function} result.stop(options) - stops the animation; if options.stopNext is true then it doesn't call the callback
       * @return {Function} result.finish(ms) - finishes the animation in the specified time in milliseconds
       * @return {Function} result.speed(ms) - sets the animation speed so that it finishes as if the original duration was the one specified here
       * @example
       * ````
       *  var result = animator.animate(el, {opacity: 0.5}, 1000);
       *
       *  el.addEventListener('click', function(e){
       *    result.speed(200).then(function(){
       *      console.log('done');
       *    });
       *  }, 300);
       * ````
       */
      function animate(el, final) {
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
        var start = new Date().getTime(),
            initial = {},
            stopped = false,
            next = false,
            timeout = false,
            properties = Object.keys(final);

        var updateStyles = function updateStyles() {
          var s = window.getComputedStyle(el);
          properties.forEach(s.getPropertyValue.bind(s));
          s = el.offsetHeight;
        };

        var result = {
          stop: function stop() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            timeout && clearTimeout(timeout);
            var k = Math.min(1, (new Date().getTime() - start) / duration);
            properties.forEach(function (i) {
              el.style[i] = (1 - k) * initial[i] + k * final[i] + (i == 'opacity' ? '' : 'px');
            });
            el.style.transitionDuration = '0s';

            if (options.stopNext) {
              next = false;
            } else if (!stopped) {
              stopped = true;
              next && next();
            }

            return result;
          },
          then: function then(cb) {
            next = cb;

            if (stopped) {
              next && next();
            }

            return result;
          },
          speed: function speed(newDuration) {
            if (internal$1.config.animationsDisabled) {
              newDuration = 0;
            }

            if (!stopped) {
              timeout && clearTimeout(timeout);
              var passed = new Date().getTime() - start;
              var k = passed / duration;
              var remaining = newDuration * (1 - k);
              properties.forEach(function (i) {
                el.style[i] = (1 - k) * initial[i] + k * final[i] + (i == 'opacity' ? '' : 'px');
              });
              updateStyles();
              start = el.speedUpTime;
              duration = remaining;
              el.style.transitionDuration = duration / 1000 + 's';
              properties.forEach(function (i) {
                el.style[i] = final[i] + (i == 'opacity' ? '' : 'px');
              });
              timeout = setTimeout(result.stop, remaining);
            }

            return result;
          },
          finish: function finish() {
            var milliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
            var k = (new Date().getTime() - start) / duration;
            result.speed(milliseconds / (1 - k));
            return result;
          }
        };

        if (el.hasAttribute('disabled') || stopped || internal$1.config.animationsDisabled) {
          return result;
        }

        var style = window.getComputedStyle(el);
        properties.forEach(function (e) {
          var v = parseFloat(style.getPropertyValue(e));
          initial[e] = isNaN(v) ? 0 : v;
        });

        if (!stopped) {
          el.style.transitionProperty = properties.join(',');
          el.style.transitionDuration = duration / 1000 + 's';
          properties.forEach(function (e) {
            el.style[e] = final[e] + (e == 'opacity' ? '' : 'px');
          });
        }

        timeout = setTimeout(result.stop, duration);

        this._onStopAnimations(el, result.stop);

        return result;
      }
    }, {
      key: "_onStopAnimations",
      value: function _onStopAnimations(el, listener) {
        var queue = this._queue;
        var i = this._index++;
        queue[el] = queue[el] || [];

        queue[el][i] = function (options) {
          delete queue[el][i];

          if (queue[el] && queue[el].length == 0) {
            delete queue[el];
          }

          return listener(options);
        };
      }
      /**
      * @method stopAnimations
      * @desc stops active animations on a specified element
      * @param {Element|Array} element - element or array of elements
      * @param {Object} [options={}]
      * @param {Boolean} [options.stopNext] - the callbacks after the animations won't be called if this option is true
      */

    }, {
      key: "stopAnimations",
      value: function stopAnimations(el) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (Array.isArray(el)) {
          return el.forEach(function (el) {
            _this.stopAnimations(el, options);
          });
        }

        (this._queue[el] || []).forEach(function (e) {
          e(options || {});
        });
      }
      /**
      * @method stopAll
      * @desc stops all active animations
      * @param {Object} [options={}]
      * @param {Boolean} [options.stopNext] - the callbacks after the animations won't be called if this option is true
      */

    }, {
      key: "stopAll",
      value: function stopAll() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.stopAnimations(Object.keys(this._queue), options);
      }
      /**
      * @method fade
      * @desc fades the element (short version for animate(el, {opacity: 0}))
      * @param {Element} element
      * @param {number} [duration=200]
      */

    }, {
      key: "fade",
      value: function fade(el) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
        return this.animate(el, {
          opacity: 0
        }, duration);
      }
    }]);

    return AnimatorCSS;
  }();

  var defaultClassName$h = 'ripple';
  var scheme$u = {
    '': 'ripple--*',
    '.ripple__wave': 'ripple--*__wave',
    '.ripple__background': 'ripple--*__background'
  };
  /**
   * @element ons-ripple
   * @category visual
   * @description
   *   [en]
   *     Adds a Material Design "ripple" effect to an element. The ripple effect will spread from the position where the user taps.
   *
   *     Some elements such as `<ons-button>` and `<ons-fab>`  support a `ripple` attribute.
   *   [/en]
   *   [ja]マテリアルデザインのリップル効果をDOM要素に追加します。[/ja]
   * @codepen wKQWdZ
   * @tutorial vanilla/Reference/ripple
   * @modifier light-gray
   *   [en]Change the color of effects to light gray.[/en]
   *   [ja]エフェクトの色が明るい灰色になります。[/ja]
   * @guide theming.html#cross-platform-styling-autostyling
   *  [en]Cross platform styling[/en]
   *  [ja]Cross platform styling[/ja]
   * @example
   * <div class="my-div">
   *  <ons-ripple></ons-ripple>
   * </div>
   *
   * @example
   * <ons-button ripple>Click me!</ons-button>
   */

  var RippleElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(RippleElement, _BaseElement);

    var _super = _createSuper(RippleElement);

    /**
     * @attribute color
     * @type {String}
     * @description
     *   [en]Color of the ripple effect.[/en]
     *   [ja]リップルエフェクトの色を指定します。[/ja]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the ripple effect.[/en]
     *   [ja]エフェクトの表現を指定します。[/ja]
     */

    /**
     * @attribute background
     * @type {String}
     * @description
     *   [en]Color of the background.[/en]
     *   [ja]背景の色を設定します。[/ja]
     */

    /**
     * @attribute size
     * @type {String}
     * @description
     *   [en]Sizing of the wave on ripple effect. Set "cover" or "contain". Default is "cover".[/en]
     *   [ja]エフェクトのサイズを指定します。"cover"もしくは"contain"を指定します。デフォルトは"cover"です。[/ja]
     */

    /**
     * @attribute center
     * @type {Boolean}
     * @description
     *   [en]If this attribute presents, change the position of wave effect to center of the target element.[/en]
     *   [ja]この要素を設定すると、エフェクトの位置が要素の真ん中から始まります。[/ja]
     */

    /**
     * @attribute disabled
     * @description
     *   [en]If this attribute is set, the ripple effect will be disabled.[/en]
     *   [ja]この属性が設定された場合、リップルエフェクトは無効になります。[/ja]
     */
    function RippleElement() {
      var _this;

      _classCallCheck(this, RippleElement);

      _this = _super.call(this);
      _this._onTap = _this._onTap.bind(_assertThisInitialized(_this));
      _this._onHold = _this._onHold.bind(_assertThisInitialized(_this));
      _this._onDragStart = _this._onDragStart.bind(_assertThisInitialized(_this));
      _this._onRelease = _this._onRelease.bind(_assertThisInitialized(_this));
      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      _this._animator = new AnimatorCSS();
      ['color', 'center', 'start-radius', 'background', 'modifier'].forEach(function (e) {
        _this.attributeChangedCallback(e, null, _this.getAttribute(e));
      });
      return _this;
    }

    _createClass(RippleElement, [{
      key: "_compile",
      value: function _compile() {
        this.classList.add(defaultClassName$h);
        this._wave = this.getElementsByClassName('ripple__wave')[0];
        this._background = this.getElementsByClassName('ripple__background')[0];

        if (!(this._background && this._wave)) {
          this._wave = util$4.create('.ripple__wave');
          this._background = util$4.create('.ripple__background');
          this.appendChild(this._wave);
          this.appendChild(this._background);
        }

        ModifierUtil.initModifier(this, scheme$u);
      }
    }, {
      key: "_getEffectSize",
      value: function _getEffectSize() {
        var sizes = ['cover', 'contain'];

        if (this.hasAttribute('size')) {
          var size = this.getAttribute('size');

          if (sizes.indexOf(size) !== -1) {
            return size;
          }
        }

        return 'cover';
      }
    }, {
      key: "_calculateCoords",
      value: function _calculateCoords(e) {
        var x, y, h, w, r;
        var b = this.getBoundingClientRect();

        var size = this._getEffectSize();

        var error = function error() {
          return util$4.throw('Ripple invalid state');
        };

        if (this._center) {
          x = b.width / 2;
          y = b.height / 2;

          if (size === 'cover') {
            r = Math.sqrt(x * x + y * y);
          } else if (size === 'contain') {
            r = Math.min(x, y);
          } else {
            error();
          }
        } else {
          x = (typeof e.clientX === 'number' ? e.clientX : e.changedTouches[0].clientX) - b.left;
          y = (typeof e.clientY === 'number' ? e.clientY : e.changedTouches[0].clientY) - b.top;
          h = Math.max(y, b.height - y);
          w = Math.max(x, b.width - x);

          if (size === 'cover') {
            r = Math.sqrt(h * h + w * w);
          } else if (size === 'contain') {
            r = Math.min(Math.round(h / 2), Math.round(w / 2));
          } else {
            error();
          }
        }

        return {
          x: x,
          y: y,
          r: r
        };
      }
    }, {
      key: "_rippleAnimation",
      value: function _rippleAnimation(e) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
        var _animator = this._animator,
            _wave = this._wave,
            _background = this._background,
            _minR = this._minR;

        var _this$_calculateCoord = this._calculateCoords(e),
            x = _this$_calculateCoord.x,
            y = _this$_calculateCoord.y,
            r = _this$_calculateCoord.r;

        _animator.stopAll({
          stopNext: 1
        });

        _animator.animate(_background, {
          opacity: 1
        }, duration);

        util$4.extend(_wave.style, {
          opacity: 1,
          top: y - _minR + 'px',
          left: x - _minR + 'px',
          width: 2 * _minR + 'px',
          height: 2 * _minR + 'px'
        });
        return _animator.animate(_wave, {
          top: y - r,
          left: x - r,
          height: 2 * r,
          width: 2 * r
        }, duration);
      }
    }, {
      key: "_updateParent",
      value: function _updateParent() {
        if (!this._parentUpdated && this.parentNode) {
          var computedStyle = window.getComputedStyle(this.parentNode);

          if (computedStyle.getPropertyValue('position') === 'static') {
            this.parentNode.style.position = 'relative';
          }

          this._parentUpdated = true;
        }
      }
    }, {
      key: "_onTap",
      value: function _onTap(e) {
        var _this2 = this;

        if (!this.disabled && !e.ripple) {
          e.ripple = true;

          this._updateParent();

          this._rippleAnimation(e.gesture.srcEvent).then(function () {
            _this2._animator.fade(_this2._wave);

            _this2._animator.fade(_this2._background);
          });
        }
      }
    }, {
      key: "_onHold",
      value: function _onHold(e) {
        if (!this.disabled && !e.ripple) {
          e.ripple = true;

          this._updateParent();

          this._holding = this._rippleAnimation(e.gesture.srcEvent, 2000);
          document.addEventListener('release', this._onRelease);
        }
      }
    }, {
      key: "_onRelease",
      value: function _onRelease(e) {
        var _this3 = this;

        if (this._holding && !e.ripple) {
          e.ripple = true;

          this._holding.speed(300).then(function () {
            _this3._animator.stopAll({
              stopNext: true
            });

            _this3._animator.fade(_this3._wave);

            _this3._animator.fade(_this3._background);
          });

          this._holding = false;
        }

        document.removeEventListener('release', this._onRelease);
      }
    }, {
      key: "_onDragStart",
      value: function _onDragStart(e) {
        if (this._holding) {
          return this._onRelease(e);
        }

        if (['left', 'right'].indexOf(e.gesture.direction) != -1) {
          this._onTap(e);
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this._parentNode = this.parentNode;

        if (internal$1.config.animationsDisabled) {
          this.disabled = true;
        } else {
          this._parentNode.addEventListener('tap', this._onTap);

          this._parentNode.addEventListener('hold', this._onHold);

          this._parentNode.addEventListener('dragstart', this._onDragStart);
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var pn = this._parentNode || this.parentNode;
        pn.removeEventListener('tap', this._onTap);
        pn.removeEventListener('hold', this._onHold);
        pn.removeEventListener('dragstart', this._onDragStart);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this4 = this;

        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$h, scheme$u);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$u);
            break;

          case 'start-radius':
            this._minR = Math.max(0, parseFloat(current) || 0);
            break;

          case 'color':
            if (current) {
              contentReady(this, function () {
                _this4._wave.style.background = current;

                if (!_this4.hasAttribute('background')) {
                  _this4._background.style.background = current;
                }
              });
            }

            break;

          case 'background':
            if (current || last) {
              if (current === 'none') {
                contentReady(this, function () {
                  _this4._background.setAttribute('disabled', 'disabled');

                  _this4._background.style.background = 'transparent';
                });
              } else {
                contentReady(this, function () {
                  if (_this4._background.hasAttribute('disabled')) {
                    _this4._background.removeAttribute('disabled');
                  }

                  _this4._background.style.background = current;
                });
              }
            }

            break;

          case 'center':
            if (name === 'center') {
              this._center = current != null && current != 'false';
            }

            break;
        }
      }
      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute('disabled');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'disabled', value);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['start-radius', 'color', 'background', 'center', 'class', 'modifier'];
      }
    }]);

    return RippleElement;
  }(BaseElement);
  onsElements.Ripple = RippleElement;
  customElements.define('ons-ripple', RippleElement);

  var BaseButtonElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(BaseButtonElement, _BaseElement);

    var _super = _createSuper(BaseButtonElement);

    function BaseButtonElement() {
      var _this;

      _classCallCheck(this, BaseButtonElement);

      _this = _super.call(this);

      if (_this.constructor === BaseButtonElement) {
        util$4.throwAbstract();
      }

      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      return _this;
    }

    _createClass(BaseButtonElement, [{
      key: "_scheme",
      get: function get() {
        util$4.throwMember();
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        util$4.throwMember();
      }
    }, {
      key: "_rippleOpt",
      get: function get() {
        return [this];
      }
    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute('disabled');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'disabled', value);
      }
    }, {
      key: "ripple",
      get: function get() {
        return this.hasAttribute('ripple');
      },
      set: function set(value) {
        if (value) {
          this.setAttribute('ripple', '');
        } else {
          this.removeAttribute('ripple');
        }
      }
    }, {
      key: "_icon",
      get: function get() {
        return util$4.findChild(this, 'ons-icon');
      }
    }, {
      key: "_hiddenButton",
      get: function get() {
        return util$4.findChild(this, 'button');
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(this._defaultClassName);

        if (!this._icon && this.hasAttribute('icon')) {
          util$4.checkMissingImport('Icon');
          var icon = util$4.createElement("<ons-icon icon=\"".concat(this.getAttribute('icon'), "\"></ons-icon>"));
          icon.classList.add(this._defaultClassName.replace('button', 'icon'));
          this.insertBefore(icon, this.firstChild);
        } // Add hidden button to allow form submission


        if (!this._hiddenButton) {
          var button = util$4.createElement('<button hidden></button>');
          this.appendChild(button);
        }

        this._updateRipple();

        ModifierUtil.initModifier(this, this._scheme);
      }
    }, {
      key: "_updateIcon",
      value: function _updateIcon() {
        if (this._icon) {
          this._icon.setAttribute('icon', this.getAttribute('icon'));
        }
      }
    }, {
      key: "_updateRipple",
      value: function _updateRipple() {
        this._rippleOpt && util$4.updateRipple.apply(util$4, _toConsumableArray(this._rippleOpt));
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, this._defaultClassName, this._scheme);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, this._scheme);
            break;

          case 'icon':
            this._updateIcon();

            break;

          case 'ripple':
            this.classList.contains(this._defaultClassName) && this._updateRipple();
            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class', 'icon', 'ripple'];
      }
    }]);

    return BaseButtonElement;
  }(BaseElement);

  /**
   * @element ons-action-sheet-button
   * @category dialog
   * @modifier destructive
   *   [en]Shows a "destructive" button (only for iOS).[/en]
   *   [ja]"destructive"なボタンを表示します(iOSでのみ有効)。[/ja]
   * @description
   *   [en]Component that represent each button of the action sheet.[/en]
   *   [ja]アクションシートに表示される各ボタンを表現するコンポーネントです。[/ja]
   * @seealso ons-action-sheet
   *   [en]The `<ons-action-sheet>` component[/en]
   *   [ja]ons-action-sheetコンポーネント[/ja]
   * @seealso ons-list-item
   *   [en]The `<ons-list-item>` component[/en]
   *   [ja]ons-list-itemコンポーネント[/ja]
   * @seealso ons-icon
   *   [en]The `<ons-icon>` component[/en]
   *   [ja]ons-iconコンポーネント[/ja]
   * @tutorial vanilla/Reference/action-sheet
   * @guide appsize.html#removing-icon-packs [en]Removing icon packs.[/en][ja][/ja]
   * @guide faq.html#how-can-i-use-custom-icon-packs [en]Adding custom icon packs.[/en][ja][/ja]
   * @modifier material
   *   [en]Display a Material Design action sheet button.[/en]
   *   [ja]マテリアルデザインのアクションシート用のボタンを表示します。[/ja]
   * @example
   * <ons-action-sheet id="sheet">
   *   <ons-action-sheet-button>Label</ons-action-sheet-button>
   *   <ons-action-sheet-button>Label</ons-action-sheet-button>
   * </ons-action-sheet>
   *
   * <script>
   *   document.getElementById('sheet').show();
   * </script>
   */

  var ActionSheetButtonElement = /*#__PURE__*/function (_BaseButtonElement) {
    _inherits(ActionSheetButtonElement, _BaseButtonElement);

    var _super = _createSuper(ActionSheetButtonElement);

    function ActionSheetButtonElement() {
      _classCallCheck(this, ActionSheetButtonElement);

      return _super.apply(this, arguments);
    }

    _createClass(ActionSheetButtonElement, [{
      key: "_scheme",
      get:
      /**
       * @attribute icon
       * @type {String}
       * @description
       *  [en]Creates an `ons-icon` component with this string. Only visible on Android. Check [See also](#seealso) section for more information.[/en]
       *  [ja]`ons-icon`コンポーネントを悪性します。Androidでのみ表示されます。[/ja]
       */

      /**
       * @attribute modifier
       * @type {String}
       * @description
       *   [en]The appearance of the action sheet button.[/en]
       *   [ja]アクションシートボタンの見た目を設定します。[/ja]
       */
      function get() {
        return {
          '': 'action-sheet-button--*',
          '.action-sheet-icon': 'action-sheet-icon--*'
        };
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        return 'action-sheet-button';
      }
    }, {
      key: "_rippleOpt",
      get: function get() {
        return undefined;
      }
    }]);

    return ActionSheetButtonElement;
  }(BaseButtonElement);
  onsElements.ActionSheetButton = ActionSheetButtonElement;
  customElements.define('ons-action-sheet-button', ActionSheetButtonElement);

  var AlertDialogAnimator = /*#__PURE__*/function (_BaseAnimator) {
    _inherits(AlertDialogAnimator, _BaseAnimator);

    var _super = _createSuper(AlertDialogAnimator);

    function AlertDialogAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'linear' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.2 : _ref$duration;

      _classCallCheck(this, AlertDialogAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {HTMLElement} dialog
     * @param {Function} done
     */


    _createClass(AlertDialogAnimator, [{
      key: "show",
      value: function show(dialog, done) {
        done();
      }
      /**
       * @param {HTMLElement} dialog
       * @param {Function} done
       */

    }, {
      key: "hide",
      value: function hide(dialog, done) {
        done();
      }
    }]);

    return AlertDialogAnimator;
  }(BaseAnimator);
  /**
   * Android style animator for alert dialog.
   */

  var AndroidAlertDialogAnimator = /*#__PURE__*/function (_AlertDialogAnimator) {
    _inherits(AndroidAlertDialogAnimator, _AlertDialogAnimator);

    var _super2 = _createSuper(AndroidAlertDialogAnimator);

    function AndroidAlertDialogAnimator() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$timing = _ref2.timing,
          timing = _ref2$timing === void 0 ? 'cubic-bezier(.1, .7, .4, 1)' : _ref2$timing,
          _ref2$duration = _ref2.duration,
          duration = _ref2$duration === void 0 ? 0.2 : _ref2$duration,
          _ref2$delay = _ref2.delay,
          delay = _ref2$delay === void 0 ? 0 : _ref2$delay;

      _classCallCheck(this, AndroidAlertDialogAnimator);

      return _super2.call(this, {
        duration: duration,
        timing: timing,
        delay: delay
      });
    }
    /**
     * @param {Object} dialog
     * @param {Function} callback
     */


    _createClass(AndroidAlertDialogAnimator, [{
      key: "show",
      value: function show(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 0
        }, {
          opacity: 1
        }), Animit(dialog._dialog, this.def).default({
          transform: 'translate3d(-50%, -50%, 0) scale3d(.9, .9, 1)',
          opacity: 0
        }, {
          transform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',
          opacity: 1
        }).queue(function (done) {
          callback();
          done();
        }));
      }
      /**
       * @param {Object} dialog
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 1
        }, {
          opacity: 0
        }), Animit(dialog._dialog, this.def).default({
          transform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',
          opacity: 1
        }, {
          transform: 'translate3d(-50%, -50%, 0) scale3d(.9, .9, 1)',
          opacity: 0
        }).queue(function (done) {
          callback();
          done();
        }));
      }
    }]);

    return AndroidAlertDialogAnimator;
  }(AlertDialogAnimator);
  /**
   * iOS style animator for alert dialog.
   */

  var IOSAlertDialogAnimator = /*#__PURE__*/function (_AlertDialogAnimator2) {
    _inherits(IOSAlertDialogAnimator, _AlertDialogAnimator2);

    var _super3 = _createSuper(IOSAlertDialogAnimator);

    function IOSAlertDialogAnimator() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$timing = _ref3.timing,
          timing = _ref3$timing === void 0 ? 'cubic-bezier(.1, .7, .4, 1)' : _ref3$timing,
          _ref3$duration = _ref3.duration,
          duration = _ref3$duration === void 0 ? 0.2 : _ref3$duration,
          _ref3$delay = _ref3.delay,
          delay = _ref3$delay === void 0 ? 0 : _ref3$delay;

      _classCallCheck(this, IOSAlertDialogAnimator);

      return _super3.call(this, {
        duration: duration,
        timing: timing,
        delay: delay
      });
    }
    /*
     * @param {Object} dialog
     * @param {Function} callback
     */


    _createClass(IOSAlertDialogAnimator, [{
      key: "show",
      value: function show(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 0
        }, {
          opacity: 1
        }), Animit(dialog._dialog, this.def).default({
          transform: 'translate3d(-50%, -50%, 0) scale3d(1.3, 1.3, 1)',
          opacity: 0
        }, {
          transform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',
          opacity: 1
        }).queue(function (done) {
          callback();
          done();
        }));
      }
      /**
       * @param {Object} dialog
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 1
        }, {
          opacity: 0
        }), Animit(dialog._dialog, this.def).default({
          opacity: 1
        }, {
          opacity: 0
        }).queue(function (done) {
          callback();
          done();
        }));
      }
    }]);

    return IOSAlertDialogAnimator;
  }(AlertDialogAnimator);

  var scheme$t = {
    '.alert-dialog': 'alert-dialog--*',
    '.alert-dialog-container': 'alert-dialog-container--*',
    '.alert-dialog-title': 'alert-dialog-title--*',
    '.alert-dialog-content': 'alert-dialog-content--*',
    '.alert-dialog-footer': 'alert-dialog-footer--*',
    '.alert-dialog-footer--rowfooter': 'alert-dialog-footer--rowfooter--*',
    '.alert-dialog-button--rowfooter': 'alert-dialog-button--rowfooter--*',
    '.alert-dialog-button--primal': 'alert-dialog-button--primal--*',
    '.alert-dialog-button': 'alert-dialog-button--*',
    'ons-alert-dialog-button': 'alert-dialog-button--*',
    '.alert-dialog-mask': 'alert-dialog-mask--*',
    '.text-input': 'text-input--*'
  };
  var _animatorDict$7 = {
    'none': AlertDialogAnimator,
    'default': function _default() {
      return platform.isAndroid() ? AndroidAlertDialogAnimator : IOSAlertDialogAnimator;
    },
    'fade': function fade() {
      return platform.isAndroid() ? AndroidAlertDialogAnimator : IOSAlertDialogAnimator;
    }
  };
  /**
   * @element ons-alert-dialog
   * @category dialog
   * @description
   *   [en]
   *     Alert dialog that is displayed on top of the current screen. Useful for displaying questions, warnings or error messages to the user. The title, content and buttons can be easily customized and it will automatically switch style based on the platform.
   *
   *     To use the element it can either be attached directly to the `<body>` element or dynamically created from a template using the `ons.createAlertDialog(template)` utility function and the `<template>` tag.
   *   [/en]
   *   [ja]
   *     現在のスクリーンの上に表示するアラートダイアログです。ユーザに対する問いかけ、警告、エラーメッセージを表示するのに利用できます。タイトルやコンテンツやボタンは簡単にカスタマイズでき、実行しているプラットフォームに併せてスタイルが自動的に切り替わります。
   *   [/ja]
   * @codepen Qwwxyp
   * @tutorial vanilla/Reference/alert-dialog
   * @modifier material
   *   [en]Material Design style[/en]
   *   [ja]マテリアルデザインのスタイル[/ja]
   * @modifier rowfooter
   *   [en]Horizontally aligns the footer buttons.[/en]
   *   [ja]フッターの複数のボタンを水平に配置[/ja]
   * @seealso ons-dialog
   *   [en]ons-dialog component[/en]
   *   [ja]ons-dialogコンポーネント[/ja]
   * @seealso ons-popover
   *   [en]ons-popover component[/en]
   *   [ja]ons-dialogコンポーネント[/ja]
   * @seealso ons.notification
   *   [en]Using ons.notification utility functions.[/en]
   *   [ja]アラートダイアログを表示するには、ons.notificationオブジェクトのメソッドを使うこともできます。[/ja]
   * @example
   * <ons-alert-dialog id="alert-dialog">
   *   <div class="alert-dialog-title">Warning!</div>
   *   <div class="alert-dialog-content">
   *     An error has occurred!
   *   </div>
   *   <div class="alert-dialog-footer">
   *     <button id="alert-dialog-button" class="alert-dialog-button">OK</button>
   *   </div>
   * </ons-alert-dialog>
   * <script>
   *   document.getElementById('alert-dialog').show();
   * </script>
   */

  var AlertDialogElement = /*#__PURE__*/function (_BaseDialogElement) {
    _inherits(AlertDialogElement, _BaseDialogElement);

    var _super = _createSuper(AlertDialogElement);

    /**
     * @event preshow
     * @description
     *   [en]Fired just before the alert dialog is displayed.[/en]
     *   [ja]アラートダイアログが表示される直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.alertDialog
     *   [en]Alert dialog object.[/en]
     *   [ja]アラートダイアログのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute to stop the dialog from showing.[/en]
     *   [ja]この関数を実行すると、アラートダイアログの表示を止めます。[/ja]
     */

    /**
     * @event postshow
     * @description
     *   [en]Fired just after the alert dialog is displayed.[/en]
     *   [ja]アラートダイアログが表示された直後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.alertDialog
     *   [en]Alert dialog object.[/en]
     *   [ja]アラートダイアログのオブジェクト。[/ja]
     */

    /**
     * @event prehide
     * @description
     *   [en]Fired just before the alert dialog is hidden.[/en]
     *   [ja]アラートダイアログが隠れる直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.alertDialog
     *   [en]Alert dialog object.[/en]
     *   [ja]アラートダイアログのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute to stop the dialog from hiding.[/en]
     *   [ja]この関数を実行すると、アラートダイアログが閉じようとするのを止めます。[/ja]
     */

    /**
     * @event posthide
     * @description
     * [en]Fired just after the alert dialog is hidden.[/en]
     * [ja]アラートダイアログが隠れた後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.alertDialog
     *   [en]Alert dialog object.[/en]
     *   [ja]アラートダイアログのオブジェクト。[/ja]
     */

    /**
     * @event dialogcancel
     * @description
     * [en]Fired when the dialog is canceled.[/en]
     * [ja][/ja]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the dialog.[/en]
     *  [ja]ダイアログの見た目を指定します。[/ja]
     */

    /**
     * @attribute cancelable
     * @description
     *  [en]If this attribute is set the dialog can be closed by tapping the background or by pressing the back button on Android devices.[/en]
     *  [ja]この属性を設定すると、ダイアログの背景をタップしたりAndroidデバイスのバックボタンを押すとダイアログが閉じるようになります。[/ja]
     */

    /**
     * @attribute disabled
     * @description
     *  [en]If this attribute is set the dialog is disabled.[/en]
     *  [ja]この属性がある時、アラートダイアログはdisabled状態になります。[/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @default default
     * @description
     *  [en]The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.[/en]
     *  [ja]ダイアログを表示する際のアニメーション名を指定します。デフォルトでは"none"か"default"が指定できます。[/ja]
     */

    /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */

    /**
     * @attribute mask-color
     * @type {String}
     * @default rgba(0, 0, 0, 0.2)
     * @description
     *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)".[/en]
     *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
     */

    /**
     * @attribute visible
     * @type {Boolean}
     * @description
     *   [en]Whether the alert dialog is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */
    function AlertDialogElement() {
      var _this;

      _classCallCheck(this, AlertDialogElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      return _this;
    }

    _createClass(AlertDialogElement, [{
      key: "_scheme",
      get: function get() {
        return scheme$t;
      }
      /**
       * @return {Element}
       */

    }, {
      key: "_mask",
      get: function get() {
        return util$4.findChild(this, '.alert-dialog-mask');
      }
      /**
       * @return {Element}
       */

    }, {
      key: "_dialog",
      get: function get() {
        return util$4.findChild(this, '.alert-dialog');
      }
      /**
       * @return {Element}
       */

    }, {
      key: "_titleElement",
      get: function get() {
        return util$4.findChild(this._dialog.children[0], '.alert-dialog-title');
      }
      /**
       * @return {Element}
       */

    }, {
      key: "_contentElement",
      get: function get() {
        return util$4.findChild(this._dialog.children[0], '.alert-dialog-content');
      }
    }, {
      key: "_updateAnimatorFactory",
      value: function _updateAnimatorFactory() {
        return new AnimatorFactory({
          animators: _animatorDict$7,
          baseClass: AlertDialogAnimator,
          baseClassName: 'AlertDialogAnimator',
          defaultAnimation: this.getAttribute('animation')
        });
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.style.display = 'none';
        this.style.zIndex = 10001;
        /**
         * Expected result after compile:
         *
         * <ons-alert-dialog style="none">
         *   <div class="alert-dialog-mask"></div>
         *   <div class="alert-dialog">
         *     <div class="alert-dialog-container">...</div>
         *   </div>
         * </ons-alert-dialog>
         */

        var content = document.createDocumentFragment();

        if (!this._mask && !this._dialog) {
          while (this.firstChild) {
            content.appendChild(this.firstChild);
          }
        }

        if (!this._mask) {
          var mask = document.createElement('div');
          mask.classList.add('alert-dialog-mask');
          this.insertBefore(mask, this.children[0]);
        }

        if (!this._dialog) {
          var dialog = document.createElement('div');
          dialog.classList.add('alert-dialog');
          this.insertBefore(dialog, null);
        }

        if (!util$4.findChild(this._dialog, '.alert-dialog-container')) {
          var container = document.createElement('div');
          container.classList.add('alert-dialog-container');

          this._dialog.appendChild(container);
        }

        this._dialog.children[0].appendChild(content);

        this._dialog.style.zIndex = 20001;
        this._mask.style.zIndex = 20000;
        ModifierUtil.initModifier(this, this._scheme);
      }
      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @property cancelable
       * @type {Boolean}
       * @description
       *   [en]Whether the dialog is cancelable or not. A cancelable dialog can be closed by tapping the background or by pressing the back button on Android devices.[/en]
       *   [ja]そのダイアログがキャンセル可能かどうかを表します。キャンセル可能なダイアログは、背景をタップするかAndroidデバイスのバックボタンを押すことで閉じることが出来るようになります。[/ja]
       */

      /**
       * @property maskColor
       * @type {String}
       * @default rgba(0, 0, 0, 0.2)
       * @description
       *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)".[/en]
       *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
       */

      /**
       * @method show
       * @signature show([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクトです。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"fade"` and `"none"`.[/en]
       *   [ja]アニメーション名を指定します。指定できるのは、"fade", "none"のいずれかです。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. <code>{duration: 0.2, delay: 0.4, timing: 'ease-in'}</code> [/ja]
       * @param {Function} [options.callback]
       *   [en]Function to execute after the dialog has been revealed.[/en]
       *   [ja]ダイアログが表示され終わった時に呼び出されるコールバックを指定します。[/ja]
       * @description
       *   [en]Show the alert dialog.[/en]
       *   [ja]ダイアログを表示します。[/ja]
       * @return {Promise}
       *   [en]A `Promise` object that resolves to the displayed element.[/en]
       *   [ja]表示される要素を解決する`Promise`オブジェクトを返します。[/ja]
       */

      /**
       * @method hide
       * @signature hide([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"fade"` and `"none"`.[/en]
       *   [ja]アニメーション名を指定します。"fade", "none"のいずれかを指定します。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g.  <code>{duration: 0.2, delay: 0.4, timing: 'ease-in'}</code>[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. <code>{duration: 0.2, delay: 0.4, timing: 'ease-in'}</code> [/ja]
       * @param {Function} [options.callback]
       *   [en]Function to execute after the dialog has been hidden.[/en]
       *   [ja]このダイアログが閉じた時に呼び出されるコールバックを指定します。[/ja]
       * @description
       *   [en]Hide the alert dialog.[/en]
       *   [ja]ダイアログを閉じます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the hidden element[/en]
       *   [ja]隠れた要素を解決する`Promise`オブジェクトを返します。[/ja]
       */

      /**
       * @property visible
       * @type {Boolean}
       * @description
       *   [en]Whether the dialog is visible or not.[/en]
       *   [ja]要素が見える場合に`true`。[/ja]
       */

      /**
       * @property onDeviceBackButton
       * @type {Object}
       * @description
       *   [en]Back-button handler.[/en]
       *   [ja]バックボタンハンドラ。[/ja]
       */

      /**
       * @property animationOptions
       * @type {Object}
       * @description
       *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
       */

      /**
       * @param {String} name
       * @param {DialogAnimator} Animator
       */

    }], [{
      key: "registerAnimator",
      value: function registerAnimator(name, Animator) {
        if (!(Animator.prototype instanceof AlertDialogAnimator)) {
          util$4.throwAnimator('AlertDialog');
        }

        _animatorDict$7[name] = Animator;
      }
    }, {
      key: "animators",
      get: function get() {
        return _animatorDict$7;
      }
    }, {
      key: "AlertDialogAnimator",
      get: function get() {
        return AlertDialogAnimator;
      }
    }]);

    return AlertDialogElement;
  }(BaseDialogElement);
  onsElements.AlertDialog = AlertDialogElement;
  customElements.define('ons-alert-dialog', AlertDialogElement);

  /**
   * @element ons-alert-dialog-button
   * @modifier material
   *   [en]Material Design alert-dialog button.[/en]
   *   [ja]マテリアルデザインのボタンを表示します。[/ja]
   * @description
   *   [en][/en]
   *   [ja][/ja]
   * @seealso ons-alert-dialog
   *   [en]The `<ons-alert-dialog>` component displays a alert dialog.[/en]
   *   [ja]ons-alert-dialogコンポーネント[/ja]
   * @example
   *  <ons-alert-dialog>
   *    <div class="alert-dialog-title">Warning!</div>
   *    <div class="alert-dialog-content">
   *      An error has occurred!
   *    </div>
   *    <div class="alert-dialog-footer">
   *      <alert-dialog-button onclick="app.close()">Cancel</alert-dialog-button>
   *      <alert-dialog-button class="alert-dialog-button" onclick="app.close()">OK</alert-dialog-button>
   *    </div>
   *  </ons-alert-dialog>
   */

  var AlertDialogButtonElement = /*#__PURE__*/function (_BaseButtonElement) {
    _inherits(AlertDialogButtonElement, _BaseButtonElement);

    var _super = _createSuper(AlertDialogButtonElement);

    function AlertDialogButtonElement() {
      _classCallCheck(this, AlertDialogButtonElement);

      return _super.apply(this, arguments);
    }

    _createClass(AlertDialogButtonElement, [{
      key: "_scheme",
      get:
      /**
       * @attribute modifier
       * @type {String}
       * @description
       *   [en]The appearance of the button.[/en]
       *   [ja]ボタンの表現を指定します。[/ja]
       */

      /**
       * @attribute disabled
       * @description
       *   [en]Specify if button should be disabled.[/en]
       *   [ja]ボタンを無効化する場合は指定してください。[/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */
      function get() {
        return {
          '': 'alert-dialog-button--*'
        };
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        return 'alert-dialog-button';
      }
    }, {
      key: "_rippleOpt",
      get: function get() {
        return [this, undefined, {
          'modifier': 'light-gray'
        }];
      }
    }]);

    return AlertDialogButtonElement;
  }(BaseButtonElement);
  onsElements.AlertDialogButton = AlertDialogButtonElement;
  customElements.define('ons-alert-dialog-button', AlertDialogButtonElement);

  var defaultClassName$g = 'back-button';
  var scheme$s = {
    '': 'back-button--*',
    '.back-button__icon': 'back-button--*__icon',
    '.back-button__label': 'back-button--*__label'
  }; // original image file at misc/images/ios-back-button-icon.svg

  var iosBackButtonIcon = "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"13px\" height=\"21px\" viewBox=\"0 0 13 21\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>ios-back-button-icon</title>\n      <desc>Created with Sketch.</desc>\n      <defs></defs>\n      <g id=\"toolbar-back-button\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n          <g id=\"ios\" transform=\"translate(-34.000000, -30.000000)\">\n              <polygon id=\"ios-back-button-icon\" points=\"34 40.5 44.5 30 46.5 32 38 40.5 46.5 49 44.5 51\"></polygon>\n          </g>\n      </g>\n  </svg>\n"; // original image file at misc/images/md-back-button-icon.svg

  var mdBackButtonIcon = "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>md-back-button-icon</title>\n      <desc>Created with Sketch.</desc>\n      <defs></defs>\n      <g id=\"toolbar-back-button\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n          <g id=\"android\" transform=\"translate(-32.000000, -32.000000)\" fill-rule=\"nonzero\">\n              <polygon id=\"md-back-button-icon\" points=\"48 39 35.83 39 41.42 33.41 40 32 32 40 40 48 41.41 46.59 35.83 41 48 41\"></polygon>\n          </g>\n      </g>\n  </svg>\n";
  /**
   * @element ons-back-button
   * @category navigation
   * @description
   *   [en]
   *     Back button component for `<ons-toolbar>`. Put it in the left part of the `<ons-toolbar>`.
   *
   *     It will find the parent `<ons-navigator>` element and pop a page when clicked. This behavior can be overriden by specifying the `onClick` property and calling event.preventDefault in its callback.
   *   [/en]
   *   [ja][/ja]
   * @codepen aHmGL
   * @tutorial vanilla/Reference/back-button
   * @modifier material
   *   [en]Material Design style[/en]
   *   [ja][/ja]
   * @seealso ons-toolbar
   *   [en]ons-toolbar component[/en]
   *   [ja]ons-toolbarコンポーネント[/ja]
   * @seealso ons-navigator
   *   [en]ons-navigator component[/en]
   *   [ja]ons-navigatorコンポーネント[/ja]
   * @example
   * <ons-toolbar>
   *   <div class="left">
   *     <ons-back-button>Back</ons-back-button>
   *   </div>
   *   <div class="center">
   *     Title
   *   <div>
   * </ons-toolbar>
   */

  var BackButtonElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(BackButtonElement, _BaseElement);

    var _super = _createSuper(BackButtonElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the back button.[/en]
     *  [ja]バックボタンの見た目を指定します。[/ja]
     */
    function BackButtonElement() {
      var _this;

      _classCallCheck(this, BackButtonElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();
      });
      _this._options = {};
      _this._boundOnClick = _this._onClick.bind(_assertThisInitialized(_this));

      var _util$defineListenerP = util$4.defineListenerProperty(_assertThisInitialized(_this), 'click'),
          onConnected = _util$defineListenerP.onConnected,
          onDisconnected = _util$defineListenerP.onDisconnected;

      _this._connectOnClick = onConnected;
      _this._disconnectOnClick = onDisconnected;
      return _this;
    }

    _createClass(BackButtonElement, [{
      key: "_updateIcon",
      value: function _updateIcon() {
        var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : util$4.findChild(this, '.back-button__icon');
        icon.innerHTML = autoStyle.getPlatform(this) === 'android' || util$4.hasModifier(this, 'material') ? mdBackButtonIcon : iosBackButtonIcon;
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(defaultClassName$g);

        if (!util$4.findChild(this, '.back-button__label')) {
          var label = util$4.create('span.back-button__label');

          while (this.childNodes[0]) {
            label.appendChild(this.childNodes[0]);
          }

          this.appendChild(label);
        }

        if (!util$4.findChild(this, '.back-button__icon')) {
          var icon = util$4.create('span.back-button__icon');

          this._updateIcon(icon);

          this.insertBefore(icon, this.children[0]);
        }

        util$4.updateRipple(this, undefined, {
          center: '',
          'size': 'contain',
          'background': 'transparent'
        });
        ModifierUtil.initModifier(this, scheme$s);
      }
      /**
       * @property options
       * @type {Object}
       * @description
       *   [en]Options object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       */

      /**
       * @property options.animation
       * @type {String}
       * @description
       *   [en]Animation name. Available animations are "slide", "lift", "fade" and "none".
       *     These are platform based animations. For fixed animations, add "-ios" or "-md"
       *     suffix to the animation name. E.g. "lift-ios", "lift-md". Defaults values are "slide-ios" and "fade-md".
       *   [/en]
       *   [ja][/ja]
       */

      /**
       * @property options.animationOptions
       * @type {String}
       * @description
       *   [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
       */

      /**
       * @property options.callback
       * @type {String}
       * @description
       *   [en]Function that is called when the transition has ended.[/en]
       *   [ja]このメソッドによる画面遷移が終了した際に呼び出される関数オブジェクトを指定します。[/ja]
       */

    }, {
      key: "options",
      get: function get() {
        return this._options;
      },
      set: function set(object) {
        this._options = object;
      }
      /**
       * @property onClick
       * @type {Function}
       * @description
       *   [en]Used to override the default back button behavior.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "_onClick",
      value: function _onClick(event) {
        var _this2 = this;

        setTimeout(function () {
          if (!event.defaultPrevented) {
            var navigator = util$4.findParent(_this2, 'ons-navigator');

            if (navigator) {
              navigator.popPage(_this2.options);
            }
          }
        });
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.addEventListener('click', this._boundOnClick, false);

        this._connectOnClick();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$g, scheme$s);
            break;

          case 'modifier':
            {
              ModifierUtil.onModifierChanged(last, current, this, scheme$s) && this._updateIcon();
              break;
            }
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener('click', this._boundOnClick, false);

        this._disconnectOnClick();
      }
    }, {
      key: "show",
      value: function show() {
        this.style.display = 'inline-block';
      }
    }, {
      key: "hide",
      value: function hide() {
        this.style.display = 'none';
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class'];
      }
    }]);

    return BackButtonElement;
  }(BaseElement);
  onsElements.BackButton = BackButtonElement;
  customElements.define('ons-back-button', BackButtonElement);

  var defaultClassName$f = 'bottom-bar';
  var scheme$r = {
    '': 'bottom-bar--*'
  };
  /**
   * @element ons-bottom-toolbar
   * @category page
   * @description
   *   [en]Toolbar component that is positioned at the bottom of the page. Since bottom toolbars are very versatile elements, `ons-bottom-toolbar` does not provide any specific layout syntax for its children. Modifiers or custom CSS must be used.[/en]
   *   [ja]ページ下部に配置されるツールバー用コンポーネントです。[/ja]
   * @modifier transparent
   *   [en]Make the toolbar transparent.[/en]
   *   [ja]ツールバーの背景を透明にして表示します。[/ja]
   * @modifier aligned
   *   [en]Vertically aligns its children and applies flexbox for block elements. `justify-content` CSS rule can be used to change horizontal align.[/en]
   *   [ja]ツールバーの背景を透明にして表示します。[/ja]
   * @seealso ons-toolbar [en]ons-toolbar component[/en][ja]ons-toolbarコンポーネント[/ja]
   * @example
   * <ons-bottom-toolbar>
   *   Content
   * </ons-bottom-toolbar>
   */

  var BottomToolbarElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(BottomToolbarElement, _BaseElement);

    var _super = _createSuper(BottomToolbarElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the toolbar.[/en]
     *   [ja]ツールバーの見た目の表現を指定します。[/ja]
     */
    function BottomToolbarElement() {
      var _this;

      _classCallCheck(this, BottomToolbarElement);

      _this = _super.call(this);

      _this.classList.add(defaultClassName$f);

      ModifierUtil.initModifier(_assertThisInitialized(_this), scheme$r);
      return _this;
    }

    _createClass(BottomToolbarElement, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$f, scheme$r);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$r);
            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class'];
      }
    }]);

    return BottomToolbarElement;
  }(BaseElement);
  onsElements.BottomToolbar = BottomToolbarElement;
  customElements.define('ons-bottom-toolbar', BottomToolbarElement);

  /**
   * @element ons-button
   * @category form
   * @modifier outline
   *   [en]Button with outline and transparent background[/en]
   *   [ja]アウトラインを持ったボタンを表示します。[/ja]
   * @modifier light
   *   [en]Button that doesn't stand out.[/en]
   *   [ja]目立たないボタンを表示します。[/ja]
   * @modifier quiet
   *   [en]Button with no outline and or background..[/en]
   *   [ja]枠線や背景が無い文字だけのボタンを表示します。[/ja]
   * @modifier cta
   *   [en]Button that really stands out.[/en]
   *   [ja]目立つボタンを表示します。[/ja]
   * @modifier large
   *   [en]Large button that covers the width of the screen.[/en]
   *   [ja]横いっぱいに広がる大きなボタンを表示します。[/ja]
   * @modifier large--quiet
   *   [en]Large quiet button.[/en]
   *   [ja]横いっぱいに広がるquietボタンを表示します。[/ja]
   * @modifier large--cta
   *   [en]Large call to action button.[/en]
   *   [ja]横いっぱいに広がるctaボタンを表示します。[/ja]
   * @modifier material
   *   [en]Material Design button[/en]
   *   [ja]マテリアルデザインのボタン[/ja]
   * @modifier material--flat
   *   [en]Material Design flat button[/en]
   *   [ja]マテリアルデザインのフラットボタン[/ja]
   * @description
   *   [en]
   *     Button component. If you want to place a button in a toolbar, use `<ons-toolbar-button>` or `<ons-back-button>` instead.
   *
   *     Will automatically display as a Material Design button with a ripple effect on Android.
   *   [/en]
   *   [ja]ボタン用コンポーネント。ツールバーにボタンを設置する場合は、ons-toolbar-buttonもしくはons-back-buttonコンポーネントを使用します。[/ja]
   * @codepen hLayx
   * @tutorial vanilla/Reference/button
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
   * @example
   * <ons-button modifier="large--cta">
   *   Tap Me
   * </ons-button>
   */

  var ButtonElement = /*#__PURE__*/function (_BaseButtonElement) {
    _inherits(ButtonElement, _BaseButtonElement);

    var _super = _createSuper(ButtonElement);

    function ButtonElement() {
      _classCallCheck(this, ButtonElement);

      return _super.apply(this, arguments);
    }

    _createClass(ButtonElement, [{
      key: "_scheme",
      get:
      /**
       * @attribute modifier
       * @type {String}
       * @description
       *  [en]The appearance of the button.[/en]
       *  [ja]ボタンの表現を指定します。[/ja]
       */

      /**
       * @attribute ripple
       * @description
       *  [en]If this attribute is defined, the button will have a ripple effect.[/en]
       *  [ja][/ja]
       */

      /**
       * @property ripple
       * @type {Boolean}
       * @description
       *  [en]Whether the button has a ripple effect or not.[/en]
       *  [ja][/ja]
       */

      /**
       * @attribute disabled
       * @description
       *   [en]Specify if button should be disabled.[/en]
       *   [ja]ボタンを無効化する場合は指定します。[/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the button is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */
      function get() {
        return {
          '': 'button--*'
        };
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        return 'button';
      }
    }]);

    return ButtonElement;
  }(BaseButtonElement);
  onsElements.Button = ButtonElement;
  customElements.define('ons-button', ButtonElement);

  var defaultClassName$e = 'card';
  var scheme$q = {
    '': 'card--*',
    '.card__title': 'card--*__title',
    '.card__content': 'card--*__content'
  };
  /**
   * @element ons-card
   * @category visual
   * @modifier material
   *   [en]A card with material design.[/en]
   *   [ja]リストの上下のボーダーが無いリストを表示します。[/ja]
   * @description
   *   [en]
   *    Component to create a card that displays some information.
   *
   *    The card may be composed by divs with specially prepared classes `title` and/or `content`. You can also add your own content as you please.[/en]
   *   [ja][/ja]
   * @tutorial vanilla/Reference/card
   * @example
   * <ons-card>
   *   <p>Some content</p>
   * </ons-card>
   */

  var CardElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(CardElement, _BaseElement);

    var _super = _createSuper(CardElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the card.[/en]
     *   [ja]リストの表現を指定します。[/ja]
     */
    function CardElement() {
      var _this;

      _classCallCheck(this, CardElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();
      });
      return _this;
    }

    _createClass(CardElement, [{
      key: "_compile",
      value: function _compile() {

        for (var i = 0; i < this.children.length; i++) {
          var el = this.children[i];

          if (el.classList.contains('title')) {
            el.classList.add('card__title');
          } else if (el.classList.contains('content')) {
            el.classList.add('card__content');
          }
        }

        autoStyle.prepare(this);
        this.classList.add(defaultClassName$e);
        ModifierUtil.initModifier(this, scheme$q);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$e, scheme$q);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$q);
            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class'];
      }
    }]);

    return CardElement;
  }(BaseElement);
  onsElements.Card = CardElement;
  customElements.define('ons-card', CardElement);

  var scheme$p = {
    '': 'carousel-item--*'
  };
  /**
   * @element ons-carousel-item
   * @category carousel
   * @description
   *   [en]
   *     Carousel item component. Used as a child of the `<ons-carousel>` element.
   *   [/en]
   *   [ja][/ja]
   * @codepen xbbzOQ
   * @tutorial vanilla/Reference/carousel
   * @seealso ons-carousel
   *   [en]`<ons-carousel>` components[/en]
   *   [ja]<ons-carousel>コンポーネント[/ja]
   * @example
   * <ons-carousel style="width: 100%; height: 200px">
   *   <ons-carousel-item>
   *    ...
   *   </ons-carousel-item>
   *   <ons-carousel-item>
   *    ...
   *   </ons-carousel-item>
   * </ons-carousel>
   */

  var CarouselItemElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(CarouselItemElement, _BaseElement);

    var _super = _createSuper(CarouselItemElement);

    function CarouselItemElement() {
      var _this;

      _classCallCheck(this, CarouselItemElement);

      _this = _super.call(this);
      _this.style.width = '100%';
      ModifierUtil.initModifier(_assertThisInitialized(_this), scheme$p);
      return _this;
    }

    _createClass(CarouselItemElement, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'modifier') {
          return ModifierUtil.onModifierChanged(last, current, this, scheme$p);
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier'];
      }
    }]);

    return CarouselItemElement;
  }(BaseElement);
  onsElements.CarouselItem = CarouselItemElement;
  customElements.define('ons-carousel-item', CarouselItemElement);

  var directionMap = {
    vertical: {
      axis: 'Y',
      size: 'Height',
      dir: ['up', 'down'],
      t3d: ['0px, ', 'px, 0px']
    },
    horizontal: {
      axis: 'X',
      size: 'Width',
      dir: ['left', 'right'],
      t3d: ['', 'px, 0px, 0px']
    }
  };

  var Swiper = /*#__PURE__*/function () {
    function Swiper(params) {
      var _this = this;

      _classCallCheck(this, Swiper);

      // Parameters
      var FALSE = function FALSE() {
        return false;
      };

      "getInitialIndex getBubbleWidth isVertical isOverScrollable isCentered\n    isAutoScrollable refreshHook preChangeHook postChangeHook overScrollHook".split(/\s+/).forEach(function (key) {
        return _this[key] = params[key] || FALSE;
      });
      this.getElement = params.getElement; // Required

      this.scrollHook = params.scrollHook; // Optional

      this.itemSize = params.itemSize || '100%';

      this.getAutoScrollRatio = function () {
        var ratio = params.getAutoScrollRatio && params.getAutoScrollRatio.apply(params, arguments);
        ratio = typeof ratio === 'number' && ratio === ratio ? ratio : .5;

        if (ratio < 0.0 || ratio > 1.0) {
          util$4.throw('Invalid auto-scroll-ratio ' + ratio + '. Must be between 0 and 1');
        }

        return ratio;
      }; // Prevent clicks only on desktop


      this.shouldBlock = util$4.globals.actualMobileOS === 'other'; // Bind handlers

      this.onDragStart = this.onDragStart.bind(this);
      this.onDrag = this.onDrag.bind(this);
      this.onDragEnd = this.onDragEnd.bind(this);
      this.onResize = this.onResize.bind(this);
      this._shouldFixScroll = util$4.globals.actualMobileOS === 'ios';
    }

    _createClass(Swiper, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            swipeable = _ref.swipeable,
            autoRefresh = _ref.autoRefresh;

        this.initialized = true;
        this.target = this.getElement().children[0];
        this.blocker = this.getElement().children[1];

        if (!this.target || !this.blocker) {
          util$4.throw('Expected "target" and "blocker" elements to exist before initializing Swiper');
        }

        if (!this.shouldBlock) {
          this.blocker.style.display = 'none';
        } // Add classes


        this.getElement().classList.add('ons-swiper');
        this.target.classList.add('ons-swiper-target');
        this.blocker.classList.add('ons-swiper-blocker'); // Setup listeners

        this._gestureDetector = new GestureDetector(this.getElement(), {
          dragMinDistance: 1,
          dragLockToAxis: true,
          passive: !this._shouldFixScroll
        });
        this._mutationObserver = new MutationObserver(function () {
          return _this2.refresh();
        });
        this.updateSwipeable(swipeable);
        this.updateAutoRefresh(autoRefresh); // Setup initial layout

        this._scroll = this._offset = this._lastActiveIndex = 0;

        this._updateLayout();

        this._setupInitialIndex();

        setImmediate(function () {
          return _this2.initialized && _this2._setupInitialIndex();
        }); // Fix rendering glitch on Android 4.1
        // Fix for iframes where the width is inconsistent at the beginning

        if (window !== window.parent || this.offsetHeight === 0) {
          window.requestAnimationFrame(function () {
            return _this2.initialized && _this2.onResize();
          });
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.initialized = false;
        this.updateSwipeable(false);
        this.updateAutoRefresh(false);
        this._gestureDetector && this._gestureDetector.dispose();
        this.target = this.blocker = this._gestureDetector = this._mutationObserver = null;
        this.setupResize(false);
      }
    }, {
      key: "onResize",
      value: function onResize() {
        var i = this._scroll / this.itemNumSize;

        this._reset();

        this.setActiveIndex(i);
        this.refresh();
      }
    }, {
      key: "itemCount",
      get: function get() {
        return this.target.children.length;
      }
    }, {
      key: "itemNumSize",
      get: function get() {
        if (typeof this._itemNumSize !== 'number' || this._itemNumSize !== this._itemNumSize) {
          this._itemNumSize = this._calculateItemSize();
        }

        return this._itemNumSize;
      }
    }, {
      key: "maxScroll",
      get: function get() {
        var max = this.itemCount * this.itemNumSize - this.targetSize;
        return Math.ceil(max < 0 ? 0 : max); // Need to return an integer value.
      }
    }, {
      key: "_calculateItemSize",
      value: function _calculateItemSize() {
        var matches = this.itemSize.match(/^(\d+)(px|%)/);

        if (!matches) {
          util$4.throw("Invalid state: swiper's size unit must be '%' or 'px'");
        }

        var value = parseInt(matches[1], 10);
        return matches[2] === '%' ? Math.round(value / 100 * this.targetSize) : value;
      }
    }, {
      key: "_setupInitialIndex",
      value: function _setupInitialIndex() {
        this._reset();

        this._lastActiveIndex = Math.max(Math.min(Number(this.getInitialIndex()), this.itemCount), 0);
        this._scroll = this._offset + this.itemNumSize * this._lastActiveIndex;

        this._scrollTo(this._scroll);
      }
    }, {
      key: "_setSwiping",
      value: function _setSwiping(toggle) {
        this.target.classList.toggle('swiping', toggle); // Hides everything except shown pages
      }
    }, {
      key: "setActiveIndex",
      value: function setActiveIndex(index) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        this._setSwiping(true);

        index = Math.max(0, Math.min(index, this.itemCount - 1));
        var scroll = Math.max(0, Math.min(this.maxScroll, this._offset + this.itemNumSize * index));
        return this._changeTo(scroll, options);
      }
    }, {
      key: "getActiveIndex",
      value: function getActiveIndex() {
        var scroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._scroll;
        scroll -= this._offset;
        var count = this.itemCount,
            size = this.itemNumSize;

        if (this.itemNumSize === 0 || !util$4.isInteger(scroll)) {
          return this._lastActiveIndex;
        }

        if (scroll <= 0) {
          return 0;
        }

        for (var i = 0; i < count; i++) {
          if (size * i <= scroll && size * (i + 1) > scroll) {
            return i;
          }
        }

        return count - 1;
      }
    }, {
      key: "setupResize",
      value: function setupResize(add) {
        window[(add ? 'add' : 'remove') + 'EventListener']('resize', this.onResize, true);
      }
    }, {
      key: "show",
      value: function show() {
        var _this3 = this;

        this.setupResize(true);
        this.onResize();
        setTimeout(function () {
          return _this3.target && _this3.target.classList.add('active');
        }, 1000 / 60); // Hide elements after animations
      }
    }, {
      key: "hide",
      value: function hide() {
        this.setupResize(false);
        this.target.classList.remove('active'); // Show elements before animations
      }
    }, {
      key: "updateSwipeable",
      value: function updateSwipeable(shouldUpdate) {
        if (this._gestureDetector) {
          var action = shouldUpdate ? 'on' : 'off';

          this._gestureDetector[action]('drag', this.onDrag);

          this._gestureDetector[action]('dragstart', this.onDragStart);

          this._gestureDetector[action]('dragend', this.onDragEnd);
        }
      }
    }, {
      key: "updateAutoRefresh",
      value: function updateAutoRefresh(shouldWatch) {
        if (this._mutationObserver) {
          shouldWatch ? this._mutationObserver.observe(this.target, {
            childList: true
          }) : this._mutationObserver.disconnect();
        }
      }
    }, {
      key: "updateItemSize",
      value: function updateItemSize(newSize) {
        this.itemSize = newSize || '100%';
        this.refresh();
      }
    }, {
      key: "toggleBlocker",
      value: function toggleBlocker(block) {
        this.blocker.style.pointerEvents = block ? 'auto' : 'none';
      }
    }, {
      key: "_canConsumeGesture",
      value: function _canConsumeGesture(gesture) {
        var d = gesture.direction;
        var isFirst = this._scroll === 0 && !this.isOverScrollable();
        var isLast = this._scroll === this.maxScroll && !this.isOverScrollable();
        return this.isVertical() ? d === 'down' && !isFirst || d === 'up' && !isLast : d === 'right' && !isFirst || d === 'left' && !isLast;
      }
    }, {
      key: "onDragStart",
      value: function onDragStart(event) {
        var _this4 = this;

        this._ignoreDrag = event.consumed || !util$4.isValidGesture(event);

        if (!this._ignoreDrag) {
          var consume = event.consume;

          event.consume = function () {
            consume && consume();
            _this4._ignoreDrag = true;
          };

          if (this._canConsumeGesture(event.gesture)) {
            var startX = event.gesture.center && event.gesture.center.clientX || 0,
                distFromEdge = this.getBubbleWidth() || 0,
                start = function start() {
              consume && consume();
              event.consumed = true;
              _this4._started = true; // Avoid starting drag from outside

              _this4.shouldBlock && _this4.toggleBlocker(true);

              _this4._setSwiping(true);

              util$4.iosPreventScroll(_this4._gestureDetector);
            }; // Let parent elements consume the gesture or consume it right away


            startX < distFromEdge || startX > this.targetSize - distFromEdge ? setImmediate(function () {
              return !_this4._ignoreDrag && start();
            }) : start();
          }
        }
      }
    }, {
      key: "onDrag",
      value: function onDrag(event) {
        if (!event.gesture || this._ignoreDrag || !this._started) {
          return;
        }

        this._continued = true; // Fix for random 'dragend' without 'drag'

        event.stopPropagation();

        this._scrollTo(this._scroll - this._getDelta(event), {
          throttle: true
        });
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd(event) {
        this._started = false;

        if (!event.gesture || this._ignoreDrag || !this._continued) {
          this._ignoreDrag = true; // onDragEnd might fire before onDragStart's setImmediate

          return;
        }

        this._continued = false;
        event.stopPropagation();

        var scroll = this._scroll - this._getDelta(event);

        var normalizedScroll = this._normalizeScroll(scroll);

        scroll === normalizedScroll ? this._startMomentumScroll(scroll, event) : this._killOverScroll(normalizedScroll);
        this.shouldBlock && this.toggleBlocker(false);
      }
    }, {
      key: "_startMomentumScroll",
      value: function _startMomentumScroll(scroll, event) {
        var velocity = this._getVelocity(event),
            matchesDirection = event.gesture.interimDirection === this.dM.dir[this._getDelta(event) < 0 ? 0 : 1];

        var nextScroll = this._getAutoScroll(scroll, velocity, matchesDirection);

        var duration = Math.abs(nextScroll - scroll) / (velocity + 0.01) / 1000;
        duration = Math.min(.25, Math.max(.1, duration));

        this._changeTo(nextScroll, {
          swipe: true,
          animationOptions: {
            duration: duration,
            timing: 'cubic-bezier(.4, .7, .5, 1)'
          }
        });
      }
    }, {
      key: "_killOverScroll",
      value: function _killOverScroll(scroll) {
        var _this5 = this;

        this._scroll = scroll;
        var direction = this.dM.dir[Number(scroll > 0)];

        var killOverScroll = function killOverScroll() {
          return _this5._changeTo(scroll, {
            animationOptions: {
              duration: .4,
              timing: 'cubic-bezier(.1, .4, .1, 1)'
            }
          });
        };

        this.overScrollHook({
          direction: direction,
          killOverScroll: killOverScroll
        }) || killOverScroll();
      }
    }, {
      key: "_changeTo",
      value: function _changeTo(scroll) {
        var _this6 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var e = {
          activeIndex: this.getActiveIndex(scroll),
          lastActiveIndex: this._lastActiveIndex,
          swipe: options.swipe || false
        };
        var change = e.activeIndex !== e.lastActiveIndex;
        var canceled = change ? this.preChangeHook(e) : false;
        this._scroll = canceled ? this._offset + e.lastActiveIndex * this.itemNumSize : scroll;
        this._lastActiveIndex = canceled ? e.lastActiveIndex : e.activeIndex;
        return this._scrollTo(this._scroll, options).then(function () {
          if (scroll === _this6._scroll && !canceled) {
            _this6._setSwiping(false);

            change && _this6.postChangeHook(e);
          } else if (options.reject) {
            _this6._setSwiping(false);

            return Promise.reject('Canceled');
          }
        });
      }
    }, {
      key: "_scrollTo",
      value: function _scrollTo(scroll) {
        var _this7 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (options.throttle) {
          var ratio = 0.35;

          if (scroll < 0) {
            scroll = this.isOverScrollable() ? Math.round(scroll * ratio) : 0;
          } else {
            var maxScroll = this.maxScroll;

            if (maxScroll < scroll) {
              scroll = this.isOverScrollable() ? maxScroll + Math.round((scroll - maxScroll) * ratio) : maxScroll;
            }
          }
        }

        var opt = options.animation === 'none' ? {} : options.animationOptions;
        this.scrollHook && this.itemNumSize > 0 && this.scrollHook((scroll / this.itemNumSize).toFixed(2), options.animationOptions || {});
        return new Promise(function (resolve) {
          return Animit(_this7.target).queue({
            transform: _this7._getTransform(scroll)
          }, opt).play(resolve);
        });
      }
    }, {
      key: "_getAutoScroll",
      value: function _getAutoScroll(scroll, velocity, matchesDirection) {
        var max = this.maxScroll,
            offset = this._offset,
            size = this.itemNumSize;

        if (!this.isAutoScrollable()) {
          return Math.max(0, Math.min(max, scroll));
        }

        var arr = [];

        for (var s = offset; s < max; s += size) {
          arr.push(s);
        }

        arr.push(max);
        arr = arr.sort(function (left, right) {
          return Math.abs(left - scroll) - Math.abs(right - scroll);
        }).filter(function (item, pos) {
          return !pos || item !== arr[pos - 1];
        });
        var result = arr[0];
        var lastScroll = this._lastActiveIndex * size + offset;
        var scrollRatio = Math.abs(scroll - lastScroll) / size;

        if (scrollRatio <= this.getAutoScrollRatio(matchesDirection, velocity, size)) {
          result = lastScroll;
        } else {
          if (scrollRatio < 1.0 && arr[0] === lastScroll && arr.length > 1) {
            result = arr[1];
          }
        }

        return Math.max(0, Math.min(max, result));
      }
    }, {
      key: "_reset",
      value: function _reset() {
        this._targetSize = this._itemNumSize = undefined;
      }
    }, {
      key: "_normalizeScroll",
      value: function _normalizeScroll(scroll) {
        return Math.max(Math.min(scroll, this.maxScroll), 0);
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this._reset();

        this._updateLayout();

        if (util$4.isInteger(this._scroll)) {
          var scroll = this._normalizeScroll(this._scroll);

          scroll !== this._scroll ? this._killOverScroll(scroll) : this._changeTo(scroll);
        } else {
          this._setupInitialIndex();
        }

        this.refreshHook();
      }
    }, {
      key: "targetSize",
      get: function get() {
        if (!this._targetSize) {
          this._targetSize = this.target["offset".concat(this.dM.size)];
        }

        return this._targetSize;
      }
    }, {
      key: "_getDelta",
      value: function _getDelta(event) {
        return event.gesture["delta".concat(this.dM.axis)];
      }
    }, {
      key: "_getVelocity",
      value: function _getVelocity(event) {
        return event.gesture["velocity".concat(this.dM.axis)];
      }
    }, {
      key: "_getTransform",
      value: function _getTransform(scroll) {
        return "translate3d(".concat(this.dM.t3d[0]).concat(-scroll).concat(this.dM.t3d[1], ")");
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout() {
        this.dM = directionMap[this.isVertical() ? 'vertical' : 'horizontal'];
        this.target.classList.toggle('ons-swiper-target--vertical', this.isVertical());

        for (var c = this.target.children[0]; c; c = c.nextElementSibling) {
          c.style[this.dM.size.toLowerCase()] = this.itemSize;
        }

        if (this.isCentered()) {
          this._offset = (this.targetSize - this.itemNumSize) / -2 || 0;
        }
      }
    }]);

    return Swiper;
  }();

  /**
   * @element ons-carousel
   * @category carousel
   * @description
   *   [en]
   *     Carousel component. A carousel can be used to display several items in the same space.
   *
   *     The component supports displaying content both horizontally and vertically. The user can scroll through the items by dragging and it can also be controller programmatically.
   *   [/en]
   *   [ja][/ja]
   * @codepen xbbzOQ
   * @tutorial vanilla/Reference/carousel
   * @seealso ons-carousel-item
   *   [en]`<ons-carousel-item>` component[/en]
   *   [ja]ons-carousel-itemコンポーネント[/ja]
   * @example
   * <ons-carousel style="width: 100%; height: 200px">
   *   <ons-carousel-item>
   *    ...
   *   </ons-carousel-item>
   *   <ons-carousel-item>
   *    ...
   *   </ons-carousel-item>
   * </ons-carousel>
   */

  var CarouselElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(CarouselElement, _BaseElement);

    var _super = _createSuper(CarouselElement);

    /**
     * @event postchange
     * @description
     *   [en]Fired just after the current carousel item has changed.[/en]
     *   [ja]現在表示しているカルーセルの要素が変わった時に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Object} event.carousel
     *   [en]Carousel object.[/en]
     *   [ja]イベントが発火したCarouselオブジェクトです。[/ja]
     * @param {Number} event.activeIndex
     *   [en]Current active index.[/en]
     *   [ja]現在アクティブになっている要素のインデックス。[/ja]
     * @param {Number} event.lastActiveIndex
     *   [en]Previous active index.[/en]
     *   [ja]以前アクティブだった要素のインデックス。[/ja]
     */

    /**
     * @event prechange
     * @description
     *   [en]Fired just before the current carousel item changes.[/en]
     *   [ja][/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Object} event.carousel
     *   [en]Carousel object.[/en]
     *   [ja]イベントが発火したCarouselオブジェクトです。[/ja]
     * @param {Number} event.activeIndex
     *   [en]Current active index.[/en]
     *   [ja]現在アクティブになっている要素のインデックス。[/ja]
     * @param {Number} event.lastActiveIndex
     *   [en]Previous active index.[/en]
     *   [ja]以前アクティブだった要素のインデックス。[/ja]
     */

    /**
     * @event refresh
     * @description
     *   [en]Fired when the carousel has been refreshed.[/en]
     *   [ja]カルーセルが更新された時に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Object} event.carousel
     *   [en]Carousel object.[/en]
     *   [ja]イベントが発火したCarouselオブジェクトです。[/ja]
     */

    /**
     * @event overscroll
     * @description
     *   [en]Fired when the carousel has been overscrolled.[/en]
     *   [ja]カルーセルがオーバースクロールした時に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Object} event.carousel
     *   [en]Fired when the carousel has been refreshed.[/en]
     *   [ja]カルーセルが更新された時に発火します。[/ja]
     * @param {Number} event.activeIndex
     *   [en]Current active index.[/en]
     *   [ja]現在アクティブになっている要素のインデックス。[/ja]
     * @param {String} event.direction
     *   [en]Can be one of either "up", "down", "left" or "right".[/en]
     *   [ja]オーバースクロールされた方向が得られます。"up", "down", "left", "right"のいずれかの方向が渡されます。[/ja]
     * @param {Function} event.waitToReturn
     *   [en]Takes a <code>Promise</code> object as an argument. The carousel will not scroll back until the promise has been resolved or rejected.[/en]
     *   [ja]この関数はPromiseオブジェクトを引数として受け取ります。渡したPromiseオブジェクトがresolveされるかrejectされるまで、カルーセルはスクロールバックしません。[/ja]
     */

    /**
     * @event swipe
     * @description
     *   [en]Fires when the carousel swipes.[/en]
     *   [ja][/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクト。[/ja]
     * @param {Number} event.index
     *   [en]Current index.[/en]
     *   [ja]現在アクティブになっているons-carouselのインデックスを返します。[/ja]
     * @param {Object} event.options
     *   [en]Animation options object.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute direction
     * @type {String}
     * @description
     *   [en]The direction of the carousel. Can be either "horizontal" or "vertical". Default is "horizontal".[/en]
     *   [ja]カルーセルの方向を指定します。"horizontal"か"vertical"を指定できます。"horizontal"がデフォルト値です。[/ja]
     */

    /**
     * @attribute fullscreen
     * @description
     *   [en]If this attribute is set the carousel will cover the whole screen.[/en]
     *   [ja]この属性があると、absoluteポジションを使ってカルーセルが自動的に画面いっぱいに広がります。[/ja]
     */

    /**
     * @attribute overscrollable
     * @description
     *   [en]If this attribute is set the carousel will be scrollable over the edge. It will bounce back when released.[/en]
     *   [ja]この属性がある時、タッチやドラッグで端までスクロールした時に、バウンドするような効果が当たります。[/ja]
     */

    /**
     * @attribute centered
     * @description
     *   [en]If this attribute is set the carousel then the selected item will be in the center of the carousel instead of the beginning. Useful only when the items are smaller than the carousel. [/en]
     *   [ja]この属性がある時、選んでいるons-carousel-itemはカルーセルの真ん中へ行きます。項目がカルーセルよりも小さい場合にのみ、これは便利です。[/ja]
     */

    /**
     * @attribute item-width
     * @type {String}
     * @description
     *    [en]ons-carousel-item's width. Only works when the direction is set to "horizontal".[/en]
     *    [ja]ons-carousel-itemの幅を指定します。この属性は、direction属性に"horizontal"を指定した時のみ有効になります。[/ja]
     */

    /**
     * @attribute item-height
     * @type {String}
     * @description
     *   [en]ons-carousel-item's height. Only works when the direction is set to "vertical".[/en]
     *   [ja]ons-carousel-itemの高さを指定します。この属性は、direction属性に"vertical"を指定した時のみ有効になります。[/ja]
     */

    /**
     * @attribute auto-scroll
     * @description
     *   [en]If this attribute is set the carousel will be automatically scrolled to the closest item border when released.[/en]
     *   [ja]この属性がある時、一番近いcarousel-itemの境界まで自動的にスクロールするようになります。[/ja]
     */

    /**
     * @attribute auto-scroll-ratio
     * @type {Number}
     * @description
     *    [en]A number between 0.0 and 1.0 that specifies how much the user must drag the carousel in order for it to auto scroll to the next item.[/en]
     *    [ja]0.0から1.0までの値を指定します。カルーセルの要素をどれぐらいの割合までドラッグすると次の要素に自動的にスクロールするかを指定します。[/ja]
     */

    /**
     * @attribute swipeable
     * @description
     *   [en]If this attribute is set the carousel can be scrolled by drag or swipe.[/en]
     *   [ja]この属性がある時、カルーセルをスワイプやドラッグで移動できるようになります。[/ja]
     */

    /**
     * @attribute disabled
     * @description
     *   [en]If this attribute is set the carousel is disabled.[/en]
     *   [ja]この属性がある時、dragやtouchやswipeを受け付けなくなります。[/ja]
     */

    /**
     * @attribute initial-index
     * @initonly
     * @default 0
     * @type {Number}
     * @description
     *   [en]Specify the index of the ons-carousel-item to show initially. Default is 0. If active-index is set, initial-index is ignored.[/en]
     *   [ja]最初に表示するons-carousel-itemを0始まりのインデックスで指定します。デフォルト値は 0 です。[/ja]
     */

    /**
     * @attribute auto-refresh
     * @description
     *   [en]When this attribute is set the carousel will automatically refresh when the number of child nodes change.[/en]
     *   [ja]この属性がある時、子要素の数が変わるとカルーセルは自動的に更新されるようになります。[/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @description
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */
    function CarouselElement() {
      var _this;

      _classCallCheck(this, CarouselElement);

      _this = _super.call(this);

      var _util$defineListenerP = util$4.defineListenerProperty(_assertThisInitialized(_this), 'swipe'),
          onConnected = _util$defineListenerP.onConnected,
          onDisconnected = _util$defineListenerP.onDisconnected;

      _this._connectOnSwipe = onConnected;
      _this._disconnectOnSwipe = onDisconnected;
      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      return _this;
    }

    _createClass(CarouselElement, [{
      key: "_compile",
      value: function _compile() {
        var target = this.children[0] && this.children[0].tagName !== 'ONS-CAROUSEL-ITEM' && this.children[0] || document.createElement('div');

        if (!target.parentNode) {
          while (this.firstChild) {
            target.appendChild(this.firstChild);
          }

          this.appendChild(target);
        }

        !this.children[1] && this.appendChild(document.createElement('div'));
        this.appendChild = this.appendChild.bind(target);
        this.insertBefore = this.insertBefore.bind(target);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        if (!this._swiper) {
          this._swiper = new Swiper({
            getElement: function getElement() {
              return _this2;
            },
            getInitialIndex: function getInitialIndex() {
              return _this2.getAttribute('active-index') || _this2.getAttribute('initial-index');
            },
            getAutoScrollRatio: function getAutoScrollRatio() {
              return _this2.autoScrollRatio;
            },
            isVertical: function isVertical() {
              return _this2.vertical;
            },
            isOverScrollable: function isOverScrollable() {
              return _this2.overscrollable;
            },
            isCentered: function isCentered() {
              return _this2.centered;
            },
            isAutoScrollable: function isAutoScrollable() {
              return _this2.autoScroll;
            },
            itemSize: this.itemSize,
            overScrollHook: this._onOverScroll.bind(this),
            preChangeHook: this._onPreChange.bind(this),
            postChangeHook: this._onPostChange.bind(this),
            refreshHook: this._onRefresh.bind(this),
            scrollHook: function scrollHook(index, options) {
              return util$4.triggerElementEvent(_this2, 'swipe', {
                index: index,
                options: options
              });
            }
          });
          contentReady(this, function () {
            return _this2._swiper.init({
              swipeable: _this2.hasAttribute('swipeable'),
              autoRefresh: _this2.hasAttribute('auto-refresh')
            });
          });
        }

        this._connectOnSwipe();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._swiper && this._swiper.initialized) {
          this._swiper.dispose();

          this._swiper = null;
        }

        this._disconnectOnSwipe();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (!this._swiper) {
          return;
        }

        switch (name) {
          case 'swipeable':
            this._swiper.updateSwipeable(this.hasAttribute('swipeable'));

            break;

          case 'auto-refresh':
            this._swiper.updateAutoRefresh(this.hasAttribute('auto-refresh'));

            break;

          case 'item-height':
            this.vertical && this._swiper.updateItemSize(this.itemSize);
            break;

          case 'item-width':
            this.vertical || this._swiper.updateItemSize(this.itemSize);
            break;

          case 'direction':
            this._swiper.refresh();

            break;

          case 'active-index':
            if (this.getActiveIndex() !== this.activeIndex) {
              this.setActiveIndex(this.activeIndex);
            }

            break;
        }
      }
    }, {
      key: "_show",
      value: function _show() {
        this._swiper.show();
      }
    }, {
      key: "_hide",
      value: function _hide() {
        this._swiper.hide();
      }
    }, {
      key: "_onOverScroll",
      value: function _onOverScroll(_ref) {
        var direction = _ref.direction,
            killOverScroll = _ref.killOverScroll;
        var waitForAction = false;
        util$4.triggerElementEvent(this, 'overscroll', {
          carousel: this,
          activeIndex: this.getActiveIndex(),
          direction: direction,
          waitToReturn: function waitToReturn(promise) {
            waitForAction = true;
            promise.then(killOverScroll);
          }
        });
        return waitForAction;
      }
    }, {
      key: "_onPreChange",
      value: function _onPreChange(_ref2) {
        var activeIndex = _ref2.activeIndex,
            lastActiveIndex = _ref2.lastActiveIndex;
        util$4.triggerElementEvent(this, 'prechange', {
          carousel: this,
          activeIndex: activeIndex,
          lastActiveIndex: lastActiveIndex
        });
      }
    }, {
      key: "_onPostChange",
      value: function _onPostChange(_ref3) {
        var activeIndex = _ref3.activeIndex,
            lastActiveIndex = _ref3.lastActiveIndex;
        this.activeIndex = activeIndex;
        util$4.triggerElementEvent(this, 'postchange', {
          carousel: this,
          activeIndex: activeIndex,
          lastActiveIndex: lastActiveIndex
        });
      }
    }, {
      key: "_onRefresh",
      value: function _onRefresh() {
        util$4.triggerElementEvent(this, 'refresh', {
          carousel: this
        });
      }
      /**
       * @method setActiveIndex
       * @signature setActiveIndex(index, [options])
       * @param {Number} index
       *   [en]The index that the carousel should be set to.[/en]
       *   [ja]carousel要素のインデックスを指定します。[/ja]
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja][/ja]
       * @param {Function} [options.callback]
       *   [en]A function that will be called after the animation is finished.[/en]
       *   [ja][/ja]
       * @param {String} [options.animation]
       *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
       *   [ja][/ja]
       * @param {Object} [options.animationOptions]
       *   [en]An object that can be used to specify duration, delay and timing function of the animation.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Specify the index of the `<ons-carousel-item>` to show.[/en]
       *   [ja]表示するons-carousel-itemをindexで指定します。[/ja]
       * @return {Promise}
       *   [en]Resolves to the carousel element.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "setActiveIndex",
      value: function setActiveIndex(index) {
        var _this3 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        options = _objectSpread2({
          animation: this.getAttribute('animation'),
          animationOptions: this.animationOptions || {
            duration: .3,
            timing: 'cubic-bezier(.4, .7, .5, 1)'
          }
        }, options);
        return this._swiper.setActiveIndex(index, options).then(function () {
          options.callback instanceof Function && options.callback(_this3);
          return Promise.resolve(_this3);
        });
      }
      /**
       * @method getActiveIndex
       * @signature getActiveIndex()
       * @return {Number}
       *   [en]The current carousel item index.[/en]
       *   [ja]現在表示しているカルーセル要素のインデックスが返されます。[/ja]
       * @description
       *   [en]Returns the index of the currently visible `<ons-carousel-item>`.[/en]
       *   [ja]現在表示されているons-carousel-item要素のインデックスを返します。[/ja]
       */

    }, {
      key: "getActiveIndex",
      value: function getActiveIndex() {
        return this._swiper.getActiveIndex();
      }
      /**
       * @method next
       * @signature next([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja][/ja]
       * @param {Function} [options.callback]
       *   [en]A function that will be executed after the animation has finished.[/en]
       *   [ja][/ja]
       * @param {String} [options.animation]
       *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
       *   [ja][/ja]
       * @param {Object} [options.animationOptions]
       *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
       *   [ja][/ja]
       * @return {Promise}
       *   [en]Resolves to the carousel element[/en]
       *   [ja][/ja]
       * @description
       *   [en]Show next `<ons-carousel-item>`.[/en]
       *   [ja]次のons-carousel-itemを表示します。[/ja]
       */

    }, {
      key: "next",
      value: function next(options) {
        return this.setActiveIndex(this.getActiveIndex() + 1, options);
      }
      /**
       * @method prev
       * @signature prev([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja][/ja]
       * @param {Function} [options.callback]
       *   [en]A function that will be executed after the animation has finished.[/en]
       *   [ja][/ja]
       * @param {String} [options.animation]
       *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
       *   [ja][/ja]
       * @param {Object} [options.animationOptions]
       *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
       *   [ja][/ja]
       * @return {Promise}
       *   [en]Resolves to the carousel element[/en]
       *   [ja][/ja]
       * @description
       *   [en]Show previous `<ons-carousel-item>`.[/en]
       *   [ja]前のons-carousel-itemを表示します。[/ja]
       */

    }, {
      key: "prev",
      value: function prev(options) {
        return this.setActiveIndex(this.getActiveIndex() - 1, options);
      }
      /**
       * @method first
       * @signature first()
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja][/ja]
       * @param {Function} [options.callback]
       *   [en]A function that will be executed after the animation has finished.[/en]
       *   [ja][/ja]
       * @param {String} [options.animation]
       *   [en]If this is set to `"none"`, the transitions will not be animated.[/en]
       *   [ja][/ja]
       * @param {Object} [options.animationOptions]
       *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
       *   [ja][/ja]
       * @return {Promise}
       *   [en]Resolves to the carousel element[/en]
       *   [ja][/ja]
       * @description
       *   [en]Show first `<ons-carousel-item>`.[/en]
       *   [ja]最初のons-carousel-itemを表示します。[/ja]
       */

    }, {
      key: "first",
      value: function first(options) {
        return this.setActiveIndex(0, options);
      }
      /**
       * @method last
       * @signature last()
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja][/ja]
       * @param {Function} [options.callback]
       *   [en]A function that will be executed after the animation has finished.[/en]
       *   [ja][/ja]
       * @param {String} [options.animation]
       *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
       *   [ja][/ja]
       * @param {Object} [options.animationOptions]
       *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
       *   [ja][/ja]
       * @return {Promise}
       *   [en]Resolves to the carousel element[/en]
       *   [ja]Resolves to the carousel element[/ja]
       * @description
       *   [en]Show last ons-carousel item.[/en]
       *   [ja]最後のons-carousel-itemを表示します。[/ja]
       */

    }, {
      key: "last",
      value: function last(options) {
        this.setActiveIndex(Math.max(this.itemCount - 1, 0), options);
      }
      /**
       * @method refresh
       * @signature refresh()
       * @description
       *   [en]Update the layout of the carousel. Used when adding `<ons-carousel-items>` dynamically or to automatically adjust the size.[/en]
       *   [ja]レイアウトや内部の状態を最新のものに更新します。ons-carousel-itemを動的に増やしたり、ons-carouselの大きさを動的に変える際に利用します。[/ja]
       */

    }, {
      key: "refresh",
      value: function refresh() {
        this._swiper.refresh();
      }
      /**
       * @property itemCount
       * @readonly
       * @type {Number}
       * @description
       *   [en]The number of carousel items.[/en]
       *   [ja]カルーセル要素の数です。[/ja]
       */

    }, {
      key: "itemCount",
      get: function get() {
        return this._swiper.itemCount;
      }
      /**
       * @property swipeable
       * @type {Boolean}
       * @description
       *   [en]true if the carousel is swipeable.[/en]
       *   [ja]swipeableであればtrueを返します。[/ja]
       */

    }, {
      key: "swipeable",
      get: function get() {
        return this.hasAttribute('swipeable');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'swipeable', value);
      }
      /**
       * @property onSwipe
       * @type {Function}
       * @description
       *   [en]Hook called whenever the user slides the carousel. It gets a decimal index and an animationOptions object as arguments.[/en]
       *   [ja][/ja]
       */

      /**
       * @property autoScroll
       * @type {Boolean}
       * @description
       *   [en]true if auto scroll is enabled.[/en]
       *   [ja]オートスクロールが有効であればtrueを返します。[/ja]
       */

    }, {
      key: "autoScroll",
      get: function get() {
        return this.hasAttribute('auto-scroll');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'auto-scroll', value);
      }
    }, {
      key: "vertical",
      get: function get() {
        return this.getAttribute('direction') === 'vertical';
      }
    }, {
      key: "itemSize",
      get: function get() {
        var itemSizeAttr = (this.getAttribute("item-".concat(this.vertical ? 'height' : 'width')) || '').trim();
        return itemSizeAttr.match(/^\d+(px|%)$/) ? itemSizeAttr : '100%';
      }
      /**
       * @property autoScrollRatio
       * @type {Number}
       * @description
       *   [en]The current auto scroll ratio. [/en]
       *   [ja]現在のオートスクロールのratio値。[/ja]
       */

    }, {
      key: "autoScrollRatio",
      get: function get() {
        return parseFloat(this.getAttribute('auto-scroll-ratio'));
      },
      set: function set(ratio) {
        this.setAttribute('auto-scroll-ratio', ratio);
      }
      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the carousel is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute('disabled');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'disabled', value);
      }
      /**
       * @property overscrollable
       * @type {Boolean}
       * @description
       *   [en]Whether the carousel is overscrollable or not.[/en]
       *   [ja]overscrollできればtrueを返します。[/ja]
       */

    }, {
      key: "overscrollable",
      get: function get() {
        return this.hasAttribute('overscrollable');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'overscrollable', value);
      }
      /**
       * @property centered
       * @type {Boolean}
       * @description
       *   [en]Whether the carousel is centered or not.[/en]
       *   [ja]centered状態になっていればtrueを返します。[/ja]
       */

    }, {
      key: "centered",
      get: function get() {
        return this.hasAttribute('centered');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'centered', value);
      }
    }, {
      key: "animationOptions",
      get:
      /**
       * @property animationOptions
       * @type {Object}
       * @description
       *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
       */
      function get() {
        var attr = this.getAttribute('animation-options');

        if (attr) {
          return util$4.animationOptionsParse(attr);
        } else {
          return attr;
        }
      },
      set: function set(value) {
        if (value === undefined || value === null) {
          this.removeAttribute('animation-options');
        } else {
          this.setAttribute('animation-options', JSON.stringify(value));
        }
      }
      /**
       * @attribute active-index
       * @type {Number}
       * @description
       *   [en]Specify the index of the carousel item that should be shown.[/en]
       *   [ja][/ja]
       */

      /**
       * @property activeIndex
       * @type {Number}
       * @description
       *   [en]Specify the index of the carousel item that should be shown.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "activeIndex",
      get: function get() {
        return parseInt(this.getAttribute('active-index'));
      },
      set: function set(value) {
        if (value !== undefined && value !== null) {
          this.setAttribute('active-index', value);
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['swipeable', 'auto-refresh', 'direction', 'item-height', 'item-width', 'active-index'];
      }
    }, {
      key: "events",
      get: function get() {
        return ['postchange', 'refresh', 'overscroll'];
      }
    }]);

    return CarouselElement;
  }(BaseElement);
  onsElements.Carousel = CarouselElement;
  customElements.define('ons-carousel', CarouselElement);

  /**
   * @element ons-col
   * @category grid
   * @description
   *   [en]Represents a column in the grid system. Use with `<ons-row>` to layout components.[/en]
   *   [ja]グリッドシステムにて列を定義します。ons-rowとともに使用し、コンポーネントのレイアウトに利用します。[/ja]
   * @note
   *   [en]For Android 4.3 and earlier, and iOS6 and earlier, when using mixed alignment with ons-row and ons-column, they may not be displayed correctly. You can use only one alignment.[/en]
   *   [ja]Android 4.3以前、もしくはiOS 6以前のOSの場合、ons-rowとons-columnを組み合わせた場合に描画が崩れる場合があります。[/ja]
   * @codepen GgujC {wide}
   * @guide theming.html [en]Layouting guide[/en][ja]レイアウト機能[/ja]
   * @seealso ons-row
   *   [en]The `<ons-row>` component is the parent of `<ons-col>`.[/en]
   *   [ja]ons-rowコンポーネント[/ja]
   * @example
   * <ons-row>
   *   <ons-col width="50px"><ons-icon icon="fa-twitter"></ons-icon></ons-col>
   *   <ons-col>Text</ons-col>
   * </ons-row>
   */

  /**
   * @attribute vertical-align
   * @type {String}
   * @description
   *   [en]Vertical alignment of the column. Valid values are "top", "center", and "bottom".[/en]
   *   [ja]縦の配置を指定する。"top", "center", "bottom"のいずれかを指定します。[/ja]
   */

  /**
   * @attribute width
   * @type {String}
   * @description
   *   [en]The width of the column. Valid values are css width values ("10%", "50px").[/en]
   *   [ja]カラムの横幅を指定する。パーセントもしくはピクセルで指定します（10%や50px）。[/ja]
   */

  var ColElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(ColElement, _BaseElement);

    var _super = _createSuper(ColElement);

    function ColElement() {
      var _this;

      _classCallCheck(this, ColElement);

      _this = _super.call(this);

      if (_this.getAttribute('width')) {
        _this._updateWidth();
      }

      return _this;
    }

    _createClass(ColElement, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'width') {
          this._updateWidth();
        }
      }
    }, {
      key: "_updateWidth",
      value: function _updateWidth() {
        var width = this.getAttribute('width');

        if (!width) {
          styler.clear(this, 'flex maxWidth');
        } else {
          width = width.trim().match(/^\d+$/) ? width + '%' : width;
          styler(this, {
            flex: '0 0 ' + width,
            maxWidth: width
          });
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['width'];
      }
    }]);

    return ColElement;
  }(BaseElement);
  onsElements.Col = ColElement;
  customElements.define('ons-col', ColElement);

  var DialogAnimator = /*#__PURE__*/function (_BaseAnimator) {
    _inherits(DialogAnimator, _BaseAnimator);

    var _super = _createSuper(DialogAnimator);

    function DialogAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'linear' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.2 : _ref$duration;

      _classCallCheck(this, DialogAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {HTMLElement} dialog
     * @param {Function} done
     */


    _createClass(DialogAnimator, [{
      key: "show",
      value: function show(dialog, done) {
        done();
      }
      /**
       * @param {HTMLElement} dialog
       * @param {Function} done
       */

    }, {
      key: "hide",
      value: function hide(dialog, done) {
        done();
      }
    }]);

    return DialogAnimator;
  }(BaseAnimator);
  /**
   * Android style animator for dialog.
   */

  var AndroidDialogAnimator = /*#__PURE__*/function (_DialogAnimator) {
    _inherits(AndroidDialogAnimator, _DialogAnimator);

    var _super2 = _createSuper(AndroidDialogAnimator);

    function AndroidDialogAnimator() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$timing = _ref2.timing,
          timing = _ref2$timing === void 0 ? 'ease-in-out' : _ref2$timing,
          _ref2$delay = _ref2.delay,
          delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
          _ref2$duration = _ref2.duration,
          duration = _ref2$duration === void 0 ? 0.3 : _ref2$duration;

      _classCallCheck(this, AndroidDialogAnimator);

      return _super2.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {Object} dialog
     * @param {Function} callback
     */


    _createClass(AndroidDialogAnimator, [{
      key: "show",
      value: function show(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 0
        }, {
          opacity: 1
        }), Animit(dialog._dialog, this.def).default({
          transform: 'translate3d(-50%, -60%, 0)',
          opacity: 0
        }, {
          transform: 'translate3d(-50%, -50%, 0)',
          opacity: 1
        }).queue(function (done) {
          callback();
          done();
        }));
      }
      /**
       * @param {Object} dialog
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 1
        }, {
          opacity: 0
        }), Animit(dialog._dialog, this.def).default({
          transform: 'translate3d(-50%, -50%, 0)',
          opacity: 1
        }, {
          transform: 'translate3d(-50%, -60%, 0)',
          opacity: 0
        }).queue(function (done) {
          callback();
          done();
        }));
      }
    }]);

    return AndroidDialogAnimator;
  }(DialogAnimator);
  /**
   * iOS style animator for dialog.
   */

  var IOSDialogAnimator = /*#__PURE__*/function (_DialogAnimator2) {
    _inherits(IOSDialogAnimator, _DialogAnimator2);

    var _super3 = _createSuper(IOSDialogAnimator);

    function IOSDialogAnimator() {
      var _this;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$timing = _ref3.timing,
          timing = _ref3$timing === void 0 ? 'ease-in-out' : _ref3$timing,
          _ref3$delay = _ref3.delay,
          delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
          _ref3$duration = _ref3.duration,
          duration = _ref3$duration === void 0 ? 0.2 : _ref3$duration;

      _classCallCheck(this, IOSDialogAnimator);

      _this = _super3.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this.bodyHeight = document.body.clientHeight; // avoid Forced Synchronous Layout

      return _this;
    }
    /**
     * @param {Object} dialog
     * @param {Function} callback
     */


    _createClass(IOSDialogAnimator, [{
      key: "show",
      value: function show(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 0
        }, {
          opacity: 1
        }), Animit(dialog._dialog, this.def).default({
          transform: "translate3d(-50%, ".concat(this.bodyHeight / 2.0 - 1, "px, 0)")
        }, {
          transform: 'translate3d(-50%, -50%, 0)'
        }).queue(function (done) {
          callback();
          done();
        }));
      }
      /**
       * @param {Object} dialog
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 1
        }, {
          opacity: 0
        }), Animit(dialog._dialog, this.def).default({
          transform: 'translate3d(-50%, -50%, 0)'
        }, {
          transform: "translate3d(-50%, ".concat(this.bodyHeight / 2.0 - 1, "px, 0)")
        }).queue(function (done) {
          callback();
          done();
        }));
      }
    }]);

    return IOSDialogAnimator;
  }(DialogAnimator);
  /**
   * Slide animator for dialog.
   */

  var SlideDialogAnimator = /*#__PURE__*/function (_DialogAnimator3) {
    _inherits(SlideDialogAnimator, _DialogAnimator3);

    var _super4 = _createSuper(SlideDialogAnimator);

    function SlideDialogAnimator() {
      var _this2;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$timing = _ref4.timing,
          timing = _ref4$timing === void 0 ? 'cubic-bezier(.1, .7, .4, 1)' : _ref4$timing,
          _ref4$delay = _ref4.delay,
          delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
          _ref4$duration = _ref4.duration,
          duration = _ref4$duration === void 0 ? 0.2 : _ref4$duration;

      _classCallCheck(this, SlideDialogAnimator);

      _this2 = _super4.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this2.bodyHeight = document.body.clientHeight; // avoid Forced Synchronous Layout

      return _this2;
    }
    /**
     * @param {Object} dialog
     * @param {Function} callback
     */


    _createClass(SlideDialogAnimator, [{
      key: "show",
      value: function show(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 0
        }, {
          opacity: 1
        }), Animit(dialog._dialog, this.def).default( // FIXME: This should avoid Forced Synchronous Layout. Otherwise, fade animation of mask will be broken.
        {
          transform: "translate3d(-50%, ".concat(-(this.bodyHeight / 2.0) + 1 - dialog._dialog.clientHeight, "px, 0)")
        }, {
          transform: 'translate3d(-50%, -50%, 0)'
        }).queue(function (done) {
          callback();
          done();
        }));
      }
      /**
       * @param {Object} dialog
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(dialog, callback) {
        callback = callback ? callback : function () {};
        Animit.runAll(Animit(dialog._mask, this.def).default({
          opacity: 1
        }, {
          opacity: 0
        }), Animit(dialog._dialog, this.def).default({
          transform: 'translate3d(-50%, -50%, 0)'
        }, // FIXME: This should avoid Forced Synchronous Layout. Otherwise, fade animation of mask will be broken.
        {
          transform: "translate3d(-50%, ".concat(-(this.bodyHeight / 2.0) + 1 - dialog._dialog.clientHeight, "px, 0)")
        }).queue(function (done) {
          callback();
          done();
        }));
      }
    }]);

    return SlideDialogAnimator;
  }(DialogAnimator);

  var scheme$o = {
    '.dialog': 'dialog--*',
    '.dialog-container': 'dialog-container--*',
    '.dialog-mask': 'dialog-mask--*'
  };
  var _animatorDict$6 = {
    'default': function _default() {
      return platform.isAndroid() ? AndroidDialogAnimator : IOSDialogAnimator;
    },
    'slide': SlideDialogAnimator,
    'none': DialogAnimator
  };
  /**
   * @element ons-dialog
   * @category dialog
   * @description
   *   [en]
   *     Dialog that is displayed on top of current screen. As opposed to the `<ons-alert-dialog>` element, this component can contain any kind of content.
   *
   *     To use the element it can either be attached directly to the `<body>` element or dynamically created from a template using the `ons.createDialog(template)` utility function and the `<template>` tag.
   *
   *     The dialog is useful for displaying menus, additional information or to ask the user to make a decision.
   *
   *     It will automatically be displayed as Material Design when running on an Android device.
   *   [/en]
   *   [ja][/ja]
   * @modifier material
   *   [en]Display a Material Design dialog.[/en]
   *   [ja]マテリアルデザインのダイアログを表示します。[/ja]
   * @codepen zxxaGa
   * @tutorial vanilla/Reference/dialog
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @seealso ons-alert-dialog
   *   [en]`<ons-alert-dialog>` component[/en]
   *   [ja]ons-alert-dialogコンポーネント[/ja]
   * @seealso ons-popover
   *   [en]`<ons-popover>` component[/en]
   *   [ja]ons-popoverコンポーネント[/ja]
   * @seealso ons-modal
   *   [en]`<ons-modal>` component[/en]
   *   [ja]ons-modalコンポーネント[/ja]
   * @example
   * <ons-dialog id="dialog">
   *   <p>This is a dialog!</p>
   * </ons-dialog>
   *
   * <script>
   *   document.getElementById('dialog').show();
   * </script>
   */

  var DialogElement = /*#__PURE__*/function (_BaseDialogElement) {
    _inherits(DialogElement, _BaseDialogElement);

    var _super = _createSuper(DialogElement);

    /**
     * @event preshow
     * @description
     * [en]Fired just before the dialog is displayed.[/en]
     * [ja]ダイアログが表示される直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.dialog
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute this function to stop the dialog from being shown.[/en]
     *   [ja]この関数を実行すると、ダイアログの表示がキャンセルされます。[/ja]
     */

    /**
     * @event postshow
     * @description
     * [en]Fired just after the dialog is displayed.[/en]
     * [ja]ダイアログが表示された直後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.dialog
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event prehide
     * @description
     * [en]Fired just before the dialog is hidden.[/en]
     * [ja]ダイアログが隠れる直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.dialog
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute this function to stop the dialog from being hidden.[/en]
     *   [ja]この関数を実行すると、ダイアログの非表示がキャンセルされます。[/ja]
     */

    /**
     * @event posthide
     * @description
     * [en]Fired just after the dialog is hidden.[/en]
     * [ja]ダイアログが隠れた後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.dialog
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event dialogcancel
     * @description
     * [en]Fired when the dialog is canceled.[/en]
     * [ja][/ja]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the dialog.[/en]
     *  [ja]ダイアログの表現を指定します。[/ja]
     */

    /**
     * @attribute cancelable
     * @description
     *  [en]If this attribute is set the dialog can be closed by tapping the background or by pressing the back button on Android devices.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute disabled
     * @description
     *  [en]If this attribute is set the dialog is disabled.[/en]
     *  [ja]この属性がある時、ダイアログはdisabled状態になります。[/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @default default
     * @description
     *  [en]The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.[/en]
     *  [ja]ダイアログを表示する際のアニメーション名を指定します。"none"もしくは"default"を指定できます。[/ja]
     */

    /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`[/ja]
     */

    /**
     * @property animationOptions
     * @type {Object}
     * @description
     *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */

    /**
     * @attribute mask-color
     * @type {String}
     * @default rgba(0, 0, 0, 0.2)
     * @description
     *  [en]Color of the background mask. Default is `"rgba(0, 0, 0, 0.2)"`.[/en]
     *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
     */

    /**
     * @attribute visible
     * @type {Boolean}
     * @description
     *   [en]Whether the dialog is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */
    function DialogElement() {
      var _this;

      _classCallCheck(this, DialogElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      return _this;
    }

    _createClass(DialogElement, [{
      key: "_scheme",
      get: function get() {
        return scheme$o;
      }
    }, {
      key: "_mask",
      get: function get() {
        return util$4.findChild(this, '.dialog-mask');
      }
    }, {
      key: "_dialog",
      get: function get() {
        return util$4.findChild(this, '.dialog');
      }
    }, {
      key: "_updateAnimatorFactory",
      value: function _updateAnimatorFactory() {
        return new AnimatorFactory({
          animators: _animatorDict$6,
          baseClass: DialogAnimator,
          baseClassName: 'DialogAnimator',
          defaultAnimation: this.getAttribute('animation')
        });
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.style.display = 'none';
        this.style.zIndex = 10001;
        /* Expected result:
         *   <ons-dialog>
         *     <div class="dialog-mask"></div>
         *     <div class="dialog">
         *       <div class="dialog-container">...</div>
         *     </div>
         *   </ons-dialog>
         */

        if (!this._dialog) {
          var dialog = document.createElement('div');
          dialog.classList.add('dialog');
          var container = document.createElement('div');
          container.classList.add('dialog-container');

          while (this.firstChild) {
            container.appendChild(this.firstChild);
          }

          dialog.appendChild(container);
          this.appendChild(dialog);
        }

        if (!this._mask) {
          var mask = document.createElement('div');
          mask.classList.add('dialog-mask');
          this.insertBefore(mask, this.firstChild);
        }

        this._dialog.style.zIndex = 20001;
        this._mask.style.zIndex = 20000;
        this.setAttribute('status-bar-fill', '');
        ModifierUtil.initModifier(this, this._scheme);
      }
      /**
       * @property onDeviceBackButton
       * @type {Object}
       * @description
       *   [en]Back-button handler.[/en]
       *   [ja]バックボタンハンドラ。[/ja]
       */

      /**
       * @method show
       * @signature show([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"none"` and `"slide"`.[/en]
       *   [ja]アニメーション名を指定します。"none", "slide"のいずれかを指定します。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
       * @param {Function} [options.callback]
       *   [en]This function is called after the dialog has been revealed.[/en]
       *   [ja]ダイアログが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *  [en]Show the dialog.[/en]
       *  [ja]ダイアログを開きます。[/ja]
       * @return {Promise} Resolves to the displayed element.
       */

      /**
       * @method hide
       * @signature hide([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"none"` and `"slide"`.[/en]
       *   [ja]アニメーション名を指定します。"none", "slide"のいずれかを指定できます。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`[/ja]
       * @param {Function} [options.callback]
       *   [en]This functions is called after the dialog has been hidden.[/en]
       *   [ja]ダイアログが隠れた後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *   [en]Hide the dialog.[/en]
       *   [ja]ダイアログを閉じます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the hidden element[/en]
       *   [ja][/ja]
       */

      /**
       * @property visible
       * @type {Boolean}
       * @description
       *   [en]Whether the dialog is visible or not.[/en]
       *   [ja]要素が見える場合に`true`。[/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the dialog is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @property cancelable
       * @type {Boolean}
       * @description
       *   [en]Whether the dialog is cancelable or not. A cancelable dialog can be closed by tapping the background or by pressing the back button on Android devices.[/en]
       *   [ja][/ja]
       */

      /**
       * @property maskColor
       * @type {String}
       * @default rgba(0, 0, 0, 0.2)
       * @description
       *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)".[/en]
       *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
       */

      /**
       * @param {String} name
       * @param {DialogAnimator} Animator
       */

    }], [{
      key: "registerAnimator",
      value: function registerAnimator(name, Animator) {
        if (!(Animator.prototype instanceof DialogAnimator)) {
          util$4.throwAnimator('Dialog');
        }

        _animatorDict$6[name] = Animator;
      }
    }, {
      key: "animators",
      get: function get() {
        return _animatorDict$6;
      }
    }, {
      key: "DialogAnimator",
      get: function get() {
        return DialogAnimator;
      }
    }]);

    return DialogElement;
  }(BaseDialogElement);
  onsElements.Dialog = DialogElement;
  customElements.define('ons-dialog', DialogElement);

  var defaultClassName$d = 'fab';
  var scheme$n = {
    '': 'fab--*',
    '.fab__icon': 'fab--*__icon'
  };
  /**
   * @element ons-fab
   * @category form
   * @description
   *   [en]
   *     The Floating action button is a circular button defined in the [Material Design specification](https://www.google.com/design/spec/components/buttons-floating-action-button.html). They are often used to promote the primary action of the app.
   *
   *     It can be displayed either as an inline element or in one of the corners. Normally it will be positioned in the lower right corner of the screen.
   *   [/en]
   *   [ja][/ja]
   * @tutorial vanilla/Reference/fab
   * @modifier mini
   *   [en]Makes the `ons-fab` smaller.[/en]
   *   [ja][/ja]
   * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
   * @seealso ons-speed-dial
   *   [en]The `<ons-speed-dial>` component is a Floating action button that displays a menu when tapped.[/en]
   *   [ja][/ja]
   */

  var FabElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(FabElement, _BaseElement);

    var _super = _createSuper(FabElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the button.[/en]
     *  [ja]ボタンの表現を指定します。[/ja]
     */

    /**
     * @attribute ripple
     * @description
     *  [en]If this attribute is defined, the button will have a ripple effect when tapped.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute position
     * @type {String}
     * @description
     *  [en]The position of the button. Should be a string like `"bottom right"` or `"top left"`. If this attribute is not defined it will be displayed as an inline element.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute disabled
     * @description
     *   [en]Specify if button should be disabled.[/en]
     *   [ja]ボタンを無効化する場合は指定します。[/ja]
     */
    function FabElement() {
      var _this;

      _classCallCheck(this, FabElement);

      _this = _super.call(this); // The following statements can be executed before contentReady
      // since these do not access the children

      _this._hide();

      _this.classList.add(defaultClassName$d);

      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();
      });
      return _this;
    }

    _createClass(FabElement, [{
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);

        if (!util$4.findChild(this, '.fab__icon')) {
          var content = document.createElement('span');
          content.classList.add('fab__icon');
          util$4.arrayFrom(this.childNodes).forEach(function (element) {
            if (!element.tagName || element.tagName.toLowerCase() !== 'ons-ripple') {
              content.appendChild(element);
            }
          });
          this.appendChild(content);
        }

        this._updateRipple();

        ModifierUtil.initModifier(this, scheme$n);

        this._updatePosition();
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        setImmediate(function () {
          return _this2._show();
        });
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$d, scheme$n);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$n);
            break;

          case 'ripple':
            this._updateRipple();

            break;

          case 'position':
            this._updatePosition();

            break;
        }
      }
    }, {
      key: "_show",
      value: function _show() {
        if (!this._manuallyHidden) {
          // if user has not called ons-fab.hide()
          this._toggle(true);
        }
      }
    }, {
      key: "_hide",
      value: function _hide() {
        var _this3 = this;

        setImmediate(function () {
          return _this3._toggle(false);
        });
      }
    }, {
      key: "_updateRipple",
      value: function _updateRipple() {
        util$4.updateRipple(this);
      }
    }, {
      key: "_updatePosition",
      value: function _updatePosition() {
        var position = this.getAttribute('position');
        this.classList.remove('fab--top__left', 'fab--bottom__right', 'fab--bottom__left', 'fab--top__right', 'fab--top__center', 'fab--bottom__center');

        switch (position) {
          case 'top right':
          case 'right top':
            this.classList.add('fab--top__right');
            break;

          case 'top left':
          case 'left top':
            this.classList.add('fab--top__left');
            break;

          case 'bottom right':
          case 'right bottom':
            this.classList.add('fab--bottom__right');
            break;

          case 'bottom left':
          case 'left bottom':
            this.classList.add('fab--bottom__left');
            break;

          case 'center top':
          case 'top center':
            this.classList.add('fab--top__center');
            break;

          case 'center bottom':
          case 'bottom center':
            this.classList.add('fab--bottom__center');
            break;
        }
      }
      /**
       * @method show
       * @signature show()
       * @description
       *  [en]Show the floating action button.[/en]
       *  [ja][/ja]
       */

    }, {
      key: "show",
      value: function show() {
        this.toggle(true);
      }
      /**
       * @method hide
       * @signature hide()
       * @description
       *  [en]Hide the floating action button.[/en]
       *  [ja][/ja]
       */

    }, {
      key: "hide",
      value: function hide() {
        this.toggle(false);
      }
      /**
       * @method toggle
       * @signature toggle()
       * @description
       *   [en]Toggle the visibility of the button.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "toggle",
      value: function toggle() {
        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.visible;
        this._manuallyHidden = !action;

        this._toggle(action);
      }
    }, {
      key: "_toggle",
      value: function _toggle() {
        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.visible;
        var isBottom = (this.getAttribute('position') || '').indexOf('bottom') >= 0;
        var translate = isBottom ? "translate3d(0px, -".concat(util$4.globals.fabOffset || 0, "px, 0px)") : '';
        styler(this, {
          transform: "".concat(translate, " scale(").concat(Number(action), ")")
        });
      }
      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute('disabled');
      }
      /**
       * @property visible
       * @readonly
       * @type {Boolean}
       * @description
       *   [en]Whether the element is visible or not.[/en]
       *   [ja]要素が見える場合に`true`。[/ja]
       */
      ,
      set: function set(value) {
        return util$4.toggleAttribute(this, 'disabled', value);
      }
    }, {
      key: "visible",
      get: function get() {
        return this.style.transform.indexOf('scale(0)') === -1 && this.style.display !== 'none';
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'ripple', 'position', 'class'];
      }
    }]);

    return FabElement;
  }(BaseElement);
  onsElements.Fab = FabElement;
  customElements.define('ons-fab', FabElement);

  /**
   * @element ons-gesture-detector
   * @category gesture
   * @description
   *   [en]
   *     Component to detect finger gestures within the wrapped element. Following gestures are supported:
   *     - Drag gestures: `drag`, `dragleft`, `dragright`, `dragup`, `dragdown`
   *     - Hold gestures: `hold`, `release`
   *     - Swipe gestures: `swipe`, `swipeleft`, `swiperight`, `swipeup`, `swipedown`
   *     - Tap gestures: `tap`, `doubletap`
   *     - Pinch gestures: `pinch`, `pinchin`, `pinchout`
   *     - Other gestures: `touch`, `transform`, `rotate`
   *   [/en]
   *   [ja]要素内のジェスチャー操作を検知します。詳しくはガイドを参照してください。[/ja]
   * @guide features.html#gesture-detection
   *   [en]Detecting finger gestures[/en]
   *   [ja]ジェスチャー操作の検知[/ja]
   * @example
   * <ons-gesture-detector>
   *   <div id="detect-area" style="width: 100px; height: 100px;">
   *     Swipe Here
   *   </div>
   * </ons-gesture-detector>
   *
   * <script>
   *   document.addEventListener('swipeleft', function(event) {
   *     if (event.target.matches('#detect-area')) {
   *       console.log('Swipe left is detected.');
   *     }
   *   });
   * </script>
   */

  var GestureDetectorElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(GestureDetectorElement, _BaseElement);

    var _super = _createSuper(GestureDetectorElement);

    function GestureDetectorElement() {
      var _this;

      _classCallCheck(this, GestureDetectorElement);

      _this = _super.call(this);
      _this._gestureDetector = new GestureDetector(_assertThisInitialized(_this), {
        passive: true
      });
      return _this;
    }

    return _createClass(GestureDetectorElement);
  }(BaseElement);
  onsElements.GestureDetector = GestureDetectorElement;
  customElements.define('ons-gesture-detector', GestureDetectorElement);

  var autoPrefix = 'fa'; // FIXME: To be removed in v3

  /**
   * @element ons-icon
   * @category visual
   * @description
   *   [en]
   *     Displays an icon. The following icon suites are available:
   *
   *     * [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
   *     * [Ionicons](http://ionicons.com/)
   *     * [Material Design Iconic Font](http://zavoloklom.github.io/material-design-iconic-font/)
   *   [/en]
   *   [ja][/ja]
   * @codepen xAhvg
   * @tutorial vanilla/Reference/icon
   * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja][/ja]
   * @guide appsize.html#removing-icon-packs [en]Removing icon packs.[/en][ja][/ja]
   * @guide faq.html#how-can-i-use-custom-icon-packs [en]Adding custom icon packs.[/en][ja][/ja]
   * @example
   * <ons-icon
   *   icon="md-car"
   *   size="20px"
   *   style="color: red">
   * </ons-icon>
   *
   * <ons-button>
   *   <ons-icon icon="md-car"></ons-icon>
   *   Car
   * </ons-button>
   */

  var IconElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(IconElement, _BaseElement);

    var _super = _createSuper(IconElement);

    /**
     * @attribute icon
     * @type {String}
     * @description
     *   [en]
     *     The icon name. `"md-"` prefix for Material Icons, `"fa-"` for Font Awesome and `"ion-"` prefix for Ionicons.
     *
     *     See all available icons on the element description (at the top).
     *
     *     Icons can also be styled based on modifier presence. Add comma-separated icons with `"modifierName:"` prefix.
     *
     *     The code `<ons-icon icon="ion-edit, material:md-edit"></ons-icon>` will display `"md-edit"` for Material Design and `"ion-edit"` as the default icon.
     *
     *     `fa-` prefix is added automatically if none is provided. Check [See also](#seealso) section for more information.
     *   [/en]
     *   [ja][/ja]
     */

    /**
     * @attribute size
     * @type {String}
     * @description
     *   [en]
     *     The sizes of the icon. Valid values are lg, 2x, 3x, 4x, 5x, or in the size in pixels.
     *     Icons can also be styled based on modifier presence. Add comma-separated icons with `"modifierName:"` prefix.
     *
     *     The code:
     *
     *     ```
     *     <ons-icon
     *       icon="ion-edit"
     *       size="32px, material:24px">
     *     </ons-icon>
     *     ```
     *
     *     will render as a `24px` icon if the `"material"` modifier is present and `32px` otherwise.
     *   [/en]
     *   [ja][/ja]
     */

    /**
     * @attribute rotate
     * @type {Number}
     * @description
     *   [en]Number of degrees to rotate the icon. Valid values are 90, 180 and 270.[/en]
     *   [ja]アイコンを回転して表示します。90, 180, 270から指定できます。[/ja]
     */

    /**
     * @attribute fixed-width
     * @type {Boolean}
     * @default false
     * @description
     *  [en]When used in a list, you want the icons to have the same width so that they align vertically by defining this attribute.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute spin
     * @description
     *   [en]Specify whether the icon should be spinning.[/en]
     *   [ja]アイコンを回転するかどうかを指定します。[/ja]
     */
    function IconElement() {
      var _this;

      _classCallCheck(this, IconElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();
      });
      return _this;
    }

    _createClass(IconElement, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        this._cleanClassAttribute(name === 'icon' ? last : this.getAttribute('icon'), name === 'modifier' ? last : undefined);

        this._update();
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);

        this._update();
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this2 = this;

        var _this$_buildClassAndS = this._buildClassAndStyle(this._parseAttr('icon'), this._parseAttr('size')),
            classList = _this$_buildClassAndS.classList,
            style = _this$_buildClassAndS.style;

        util$4.extend(this.style, style);
        classList.forEach(function (className) {
          return _this2.classList.add(className);
        });
      }
    }, {
      key: "_parseAttr",
      value: function _parseAttr(attrName) {
        var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getAttribute('modifier') || '';
        var attr = this.getAttribute(attrName) || attrName || '';
        var parts = attr.split(/\s*,\s*/);
        var def = parts[0];
        var md = parts[1];
        md = (md || '').split(/\s*:\s*/);
        return (modifier && RegExp("(^|\\s+)".concat(md[0], "($|\\s+)"), 'i').test(modifier) ? md[1] : def) || '';
      }
      /**
       * Remove unneeded class value.
       */

    }, {
      key: "_cleanClassAttribute",
      value: function _cleanClassAttribute(lastIcon, lastModifier) {
        var _this3 = this;

        var _this$_prefixIcon = this._prefixIcon(this._parseAttr(lastIcon, lastModifier)),
            className = _this$_prefixIcon.className,
            prefix = _this$_prefixIcon.prefix;

        var customPrefixRE = className !== prefix ? "|".concat(prefix, "$|").concat(prefix, "-") : "|".concat(className, "$") || '';
        var re = new RegExp("^(fa$|fa-|ion-|zmdi$|zmdi-|ons-icon--".concat(customPrefixRE, ")"));
        util$4.arrayFrom(this.classList).filter(function (className) {
          return re.test(className);
        }).forEach(function (className) {
          return _this3.classList.remove(className);
        });
      }
    }, {
      key: "_prefixIcon",
      value: function _prefixIcon(iconName) {
        var className = autoPrefix + (autoPrefix ? '-' : '') + iconName;
        return {
          className: className,
          prefix: className.split('-')[0]
        };
      }
    }, {
      key: "_buildClassAndStyle",
      value: function _buildClassAndStyle(iconName, size) {
        var classList = ['ons-icon'];
        var style = {}; // Icon

        if (iconName.indexOf('ion-') === 0) {
          classList.push(iconName);
          classList.push('ons-icon--ion');
        } else if (iconName.indexOf('fa-') === 0) {
          classList.push(iconName); // default icon style to Font Awesome Solid if icon style is not specified already

          if (!(this.classList.contains('far') || this.classList.contains('fab') || this.classList.contains('fal'))) {
            classList.push('fa');
          }
        } else if (iconName.indexOf('md-') === 0) {
          classList.push('zmdi');
          classList.push('zmdi-' + iconName.split(/-(.+)?/)[1]);
        } else {
          var _this$_prefixIcon2 = this._prefixIcon(iconName),
              className = _this$_prefixIcon2.className,
              prefix = _this$_prefixIcon2.prefix;

          prefix && classList.push(prefix);
          className && classList.push(className);
        } // Size


        if (size.match(/^[1-5]x|lg$/)) {
          classList.push('ons-icon--' + size);
          this.style.removeProperty('font-size');
        } else {
          style.fontSize = size;
        }

        return {
          classList: classList,
          style: style
        };
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['icon', 'size', 'modifier', 'class'];
      }
    }, {
      key: "setAutoPrefix",
      value: function setAutoPrefix(prefix) {
        autoPrefix = prefix ? typeof prefix === 'string' && prefix || 'fa' : '';
      }
    }]);

    return IconElement;
  }(BaseElement);
  onsElements.Icon = IconElement;
  customElements.define('ons-icon', IconElement);

  var LazyRepeatDelegate = /*#__PURE__*/function () {
    function LazyRepeatDelegate(userDelegate) {
      var templateElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, LazyRepeatDelegate);

      if (_typeof(userDelegate) !== 'object' || userDelegate === null) {
        util$4.throw('"delegate" parameter must be an object');
      }

      this._userDelegate = userDelegate;

      if (!(templateElement instanceof Element) && templateElement !== null) {
        util$4.throw('"templateElement" parameter must be an instance of Element or null');
      }

      this._templateElement = templateElement;
    }

    _createClass(LazyRepeatDelegate, [{
      key: "itemHeight",
      get: function get() {
        return this._userDelegate.itemHeight;
      }
      /**
       * @return {Boolean}
       */

    }, {
      key: "hasRenderFunction",
      value: function hasRenderFunction() {
        return this._userDelegate._render instanceof Function;
      }
      /**
       * @return {void}
       */

    }, {
      key: "_render",
      value: function _render() {
        this._userDelegate._render.apply(this._userDelegate, arguments);
      }
      /**
       * @param {Number} index
       * @param {Function} done A function that take item object as parameter.
       */

    }, {
      key: "loadItemElement",
      value: function loadItemElement(index, done) {
        if (this._userDelegate.loadItemElement instanceof Function) {
          this._userDelegate.loadItemElement(index, done);
        } else {
          var element = this._userDelegate.createItemContent(index, this._templateElement);

          if (!(element instanceof Element)) {
            util$4.throw('"createItemContent" must return an instance of Element');
          }

          done({
            element: element
          });
        }
      }
      /**
       * @return {Number}
       */

    }, {
      key: "countItems",
      value: function countItems() {
        var count = this._userDelegate.countItems();

        if (typeof count !== 'number') {
          util$4.throw('"countItems" must return a number');
        }

        return count;
      }
      /**
       * @param {Number} index
       * @param {Object} item
       * @param {Element} item.element
       */

    }, {
      key: "updateItem",
      value: function updateItem(index, item) {
        if (this._userDelegate.updateItemContent instanceof Function) {
          this._userDelegate.updateItemContent(index, item);
        }
      }
      /**
       * @return {Number}
       */

    }, {
      key: "calculateItemHeight",
      value: function calculateItemHeight(index) {
        if (this._userDelegate.calculateItemHeight instanceof Function) {
          var height = this._userDelegate.calculateItemHeight(index);

          if (typeof height !== 'number') {
            util$4.throw('"calculateItemHeight" must return a number');
          }

          return height;
        }

        return 0;
      }
      /**
       * @param {Number} index
       * @param {Object} item
       */

    }, {
      key: "destroyItem",
      value: function destroyItem(index, item) {
        if (this._userDelegate.destroyItem instanceof Function) {
          this._userDelegate.destroyItem(index, item);
        }
      }
      /**
       * @return {void}
       */

    }, {
      key: "destroy",
      value: function destroy() {
        if (this._userDelegate.destroy instanceof Function) {
          this._userDelegate.destroy();
        }

        this._userDelegate = this._templateElement = null;
      }
    }]);

    return LazyRepeatDelegate;
  }();
  /**
   * This class provide core functions for ons-lazy-repeat.
   */

  var LazyRepeatProvider = /*#__PURE__*/function () {
    /**
     * @param {Element} wrapperElement
     * @param {LazyRepeatDelegate} delegate
     */
    function LazyRepeatProvider(wrapperElement, delegate) {
      _classCallCheck(this, LazyRepeatProvider);

      if (!(delegate instanceof LazyRepeatDelegate)) {
        util$4.throw('"delegate" parameter must be an instance of LazyRepeatDelegate');
      }

      this._wrapperElement = wrapperElement;
      this._delegate = delegate;
      this._insertIndex = this._wrapperElement.children[0] && this._wrapperElement.children[0].tagName === 'ONS-LAZY-REPEAT' ? 1 : 0;

      if (wrapperElement.tagName.toLowerCase() === 'ons-list') {
        wrapperElement.classList.add('lazy-list');
      }

      this._pageContent = this._findPageContentElement(wrapperElement);

      if (!this._pageContent) {
        util$4.throw('LazyRepeat must be descendant of a Page element');
      }

      this.lastScrollTop = this._pageContent.scrollTop;
      this.padding = 0;
      this._topPositions = [0];
      this._renderedItems = {};

      if (!this._delegate.itemHeight && !this._delegate.calculateItemHeight(0)) {
        this._unknownItemHeight = true;
      }

      this._addEventListeners();

      this._onChange();
    }

    _createClass(LazyRepeatProvider, [{
      key: "padding",
      get: function get() {
        return parseInt(this._wrapperElement.style.paddingTop, 10);
      },
      set: function set(newValue) {
        this._wrapperElement.style.paddingTop = newValue + 'px';
      }
    }, {
      key: "_findPageContentElement",
      value: function _findPageContentElement(wrapperElement) {
        var pageContent = util$4.findParent(wrapperElement, '.page__content');

        if (pageContent) {
          return pageContent;
        }

        var page = util$4.findParent(wrapperElement, 'ons-page');

        if (page) {
          var content = util$4.findChild(page, '.content');

          if (content) {
            return content;
          }
        }

        return null;
      }
    }, {
      key: "_checkItemHeight",
      value: function _checkItemHeight(callback) {
        var _this = this;

        this._delegate.loadItemElement(0, function (item) {
          if (!_this._unknownItemHeight) {
            util$4.throw('Invalid state');
          }

          _this._wrapperElement.appendChild(item.element);

          var done = function done() {
            _this._delegate.destroyItem(0, item);

            item.element && item.element.remove();
            delete _this._unknownItemHeight;
            callback();
          };

          _this._itemHeight = item.element.offsetHeight;

          if (_this._itemHeight > 0) {
            done();
            return;
          } // retry to measure offset height
          // dirty fix for angular2 directive


          _this._wrapperElement.style.visibility = 'hidden';
          item.element.style.visibility = 'hidden';
          setImmediate(function () {
            _this._itemHeight = item.element.offsetHeight;

            if (_this._itemHeight == 0) {
              util$4.throw('Invalid state: "itemHeight" must be greater than zero');
            }

            _this._wrapperElement.style.visibility = '';
            done();
          });
        });
      }
    }, {
      key: "staticItemHeight",
      get: function get() {
        return this._delegate.itemHeight || this._itemHeight;
      }
    }, {
      key: "_countItems",
      value: function _countItems() {
        return this._delegate.countItems();
      }
    }, {
      key: "_getItemHeight",
      value: function _getItemHeight(i) {
        // Item is rendered
        if (Object.prototype.hasOwnProperty.call(this._renderedItems, i)) {
          if (!Object.prototype.hasOwnProperty.call(this._renderedItems[i], 'height')) {
            this._renderedItems[i].height = this._renderedItems[i].element.offsetHeight;
          }

          return this._renderedItems[i].height;
        } // Item is not rendered, scroll up


        if (this._topPositions[i + 1] && this._topPositions[i]) {
          return this._topPositions[i + 1] - this._topPositions[i];
        } // Item is not rendered, scroll down


        return this.staticItemHeight || this._delegate.calculateItemHeight(i);
      }
    }, {
      key: "_calculateRenderedHeight",
      value: function _calculateRenderedHeight() {
        var _this2 = this;

        return Object.keys(this._renderedItems).reduce(function (a, b) {
          return a + _this2._getItemHeight(+b);
        }, 0);
      }
    }, {
      key: "_onChange",
      value: function _onChange() {
        this._render();
      }
    }, {
      key: "_lastItemRendered",
      value: function _lastItemRendered() {
        return Math.max.apply(Math, _toConsumableArray(Object.keys(this._renderedItems)));
      }
    }, {
      key: "_firstItemRendered",
      value: function _firstItemRendered() {
        return Math.min.apply(Math, _toConsumableArray(Object.keys(this._renderedItems)));
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var forceRender = {
          forceScrollDown: true
        };

        var firstItemIndex = this._firstItemRendered();

        if (util$4.isInteger(firstItemIndex)) {
          this._wrapperElement.style.height = this._topPositions[firstItemIndex] + this._calculateRenderedHeight() + 'px';
          this.padding = this._topPositions[firstItemIndex];
          forceRender.forceFirstIndex = firstItemIndex;
        }

        this._removeAllElements();

        this._render(forceRender);

        this._wrapperElement.style.height = 'inherit';
      }
    }, {
      key: "_render",
      value: function _render() {
        var _this3 = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$forceScrollDown = _ref.forceScrollDown,
            forceScrollDown = _ref$forceScrollDown === void 0 ? false : _ref$forceScrollDown,
            forceFirstIndex = _ref.forceFirstIndex,
            forceLastIndex = _ref.forceLastIndex;

        if (this._unknownItemHeight) {
          return this._checkItemHeight(this._render.bind(this, arguments[0]));
        }

        var isScrollUp = !forceScrollDown && this.lastScrollTop > this._pageContent.scrollTop;
        this.lastScrollTop = this._pageContent.scrollTop;
        var keep = {};

        var offset = this._wrapperElement.getBoundingClientRect().top;

        var limit = 4 * window.innerHeight - offset;

        var count = this._countItems();
        var start = forceFirstIndex || Math.max(0, this._calculateStartIndex(offset) - 30); // Recalculate for 0 or undefined

        var i = start;

        for (var top = this._topPositions[i]; i < count && top < limit; i++) {
          if (i >= this._topPositions.length) {
            // perf optimization
            this._topPositions.length += 100;
          }

          this._topPositions[i] = top;
          top += this._getItemHeight(i);
        }

        if (this._delegate.hasRenderFunction && this._delegate.hasRenderFunction()) {
          return this._delegate._render(start, i, function () {
            _this3.padding = _this3._topPositions[start];
          });
        }

        if (isScrollUp) {
          for (var j = i - 1; j >= start; j--) {
            keep[j] = true;

            this._renderElement(j, isScrollUp);
          }
        } else {
          var lastIndex = forceLastIndex || Math.max.apply(Math, [i - 1].concat(_toConsumableArray(Object.keys(this._renderedItems)))); // Recalculate for 0 or undefined

          for (var _j = start; _j <= lastIndex; _j++) {
            keep[_j] = true;

            this._renderElement(_j, isScrollUp);
          }
        }

        Object.keys(this._renderedItems).forEach(function (key) {
          return keep[key] || _this3._removeElement(key, isScrollUp);
        });
      }
      /**
       * @param {Number} index
       * @param {Boolean} isScrollUp
       */

    }, {
      key: "_renderElement",
      value: function _renderElement(index, isScrollUp) {
        var _this4 = this;

        var item = this._renderedItems[index];

        if (item) {
          this._delegate.updateItem(index, item); // update if it exists


          return;
        }

        this._delegate.loadItemElement(index, function (item) {
          if (isScrollUp) {
            _this4._wrapperElement.insertBefore(item.element, _this4._wrapperElement.children[_this4._insertIndex]);

            _this4.padding = _this4._topPositions[index];
            item.height = _this4._topPositions[index + 1] - _this4._topPositions[index];
          } else {
            _this4._wrapperElement.appendChild(item.element);
          }

          _this4._renderedItems[index] = item;
        });
      }
      /**
       * @param {Number} index
       * @param {Boolean} isScrollUp
       */

    }, {
      key: "_removeElement",
      value: function _removeElement(index) {
        var isScrollUp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        index = +index;
        var item = this._renderedItems[index];

        this._delegate.destroyItem(index, item);

        if (isScrollUp) {
          this._topPositions[index + 1] = undefined;
        } else {
          this.padding = this.padding + this._getItemHeight(index);
        }

        if (item.element.parentElement) {
          item.element.parentElement.removeChild(item.element);
        }

        delete this._renderedItems[index];
      }
    }, {
      key: "_removeAllElements",
      value: function _removeAllElements() {
        var _this5 = this;

        Object.keys(this._renderedItems).forEach(function (key) {
          return _this5._removeElement(key);
        });
      }
    }, {
      key: "_recalculateTopPositions",
      value: function _recalculateTopPositions(start, end) {
        for (var i = start; i <= end; i++) {
          this._topPositions[i + 1] = this._topPositions[i] + this._getItemHeight(i);
        }
      }
    }, {
      key: "_calculateStartIndex",
      value: function _calculateStartIndex(current) {
        var firstItemIndex = this._firstItemRendered();

        var lastItemIndex = this._lastItemRendered(); // Fix for Safari scroll and Angular 2


        this._recalculateTopPositions(firstItemIndex, lastItemIndex);

        var start = 0;
        var end = this._countItems() - 1; // Binary search for index at top of screen so we can speed up rendering.

        for (;;) {
          var middle = Math.floor((start + end) / 2);
          var value = current + this._topPositions[middle];

          if (end < start) {
            return 0;
          } else if (value <= 0 && value + this._getItemHeight(middle) > 0) {
            return middle;
          } else if (isNaN(value) || value >= 0) {
            end = middle - 1;
          } else {
            start = middle + 1;
          }
        }
      }
    }, {
      key: "_debounce",
      value: function _debounce(func, wait, immediate) {
        var timeout;
        return function () {
          var _arguments = arguments,
              _this6 = this;

          var callNow = immediate && !timeout;
          clearTimeout(timeout);

          if (callNow) {
            func.apply(this, arguments);
          } else {
            timeout = setTimeout(function () {
              timeout = null;
              func.apply(_this6, _arguments);
            }, wait);
          }
        };
      }
    }, {
      key: "_doubleFireOnTouchend",
      value: function _doubleFireOnTouchend() {
        this._render();

        this._debounce(this._render.bind(this), 100);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        util$4.bindListeners(this, ['_onChange', '_doubleFireOnTouchend']);

        if (platform.isIOS()) {
          this._boundOnChange = this._debounce(this._boundOnChange, 30);
        }

        this._pageContent.addEventListener('scroll', this._boundOnChange, true);

        if (platform.isIOS()) {
          util$4.addEventListener(this._pageContent, 'touchmove', this._boundOnChange, {
            capture: true,
            passive: true
          });

          this._pageContent.addEventListener('touchend', this._boundDoubleFireOnTouchend, true);
        }

        window.document.addEventListener('resize', this._boundOnChange, true);
      }
    }, {
      key: "_removeEventListeners",
      value: function _removeEventListeners() {
        this._pageContent.removeEventListener('scroll', this._boundOnChange, true);

        if (platform.isIOS()) {
          util$4.removeEventListener(this._pageContent, 'touchmove', this._boundOnChange, {
            capture: true,
            passive: true
          });

          this._pageContent.removeEventListener('touchend', this._boundDoubleFireOnTouchend, true);
        }

        window.document.removeEventListener('resize', this._boundOnChange, true);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._removeAllElements();

        this._delegate.destroy();

        this._parentElement = this._delegate = this._renderedItems = null;

        this._removeEventListeners();
      }
    }]);

    return LazyRepeatProvider;
  }();

  /**
   * @element ons-lazy-repeat
   * @category list
   * @description
   *   [en]
   *     Using this component a list with millions of items can be rendered without a drop in performance.
   *     It does that by "lazily" loading elements into the DOM when they come into view and
   *     removing items from the DOM when they are not visible.
   *   [/en]
   *   [ja]
   *     このコンポーネント内で描画されるアイテムのDOM要素の読み込みは、画面に見えそうになった時まで自動的に遅延され、
   *     画面から見えなくなった場合にはその要素は動的にアンロードされます。
   *     このコンポーネントを使うことで、パフォーマンスを劣化させること無しに巨大な数の要素を描画できます。
   *   [/ja]
   * @codepen QwrGBm
   * @tutorial vanilla/Reference/lazy-repeat
   * @seealso ons-list
   *   [en]The `<ons-list>` element is used to render a list.[/en]
   *   [ja]`<ons-list>`要素はリストを描画するのに使われます。[/ja]
   * @example
   * <script>
   *   window.addEventListener('load', function() {
   *     var lazyRepeat = document.querySelector('#list');
   *     lazyRepeat.delegate = {
   *      createItemContent: function(i, template) {
   *        var dom = template.cloneNode(true);
   *        dom.innerText = i;
   *
   *        return dom;
   *      },
   *      countItems: function() {
   *        return 10000000;
   *      },
   *      destroyItem: function(index, item) {
   *        console.log('Destroyed item with index: ' + index);
   *      }
   *     };
   *   });
   * </script>
   *
   * <ons-list id="list">
   *   <ons-lazy-repeat>
   *     <ons-list-item></ons-list-item>
   *   </ons-lazy-repeat>
   * </ons-list>
   */

  var LazyRepeatElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(LazyRepeatElement, _BaseElement);

    var _super = _createSuper(LazyRepeatElement);

    function LazyRepeatElement() {
      _classCallCheck(this, LazyRepeatElement);

      return _super.apply(this, arguments);
    }

    _createClass(LazyRepeatElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        // not very good idea and also not documented
        if (this.hasAttribute('delegate')) {
          this.delegate = window[this.getAttribute('delegate')];
        }
      }
      /**
       * @property delegate
       * @type {Object}
       * @description
       *  [en]Specify a delegate object to load and unload item elements.[/en]
       *  [ja]要素のロード、アンロードなどの処理を委譲するオブジェクトを指定します。[/ja]
       */

      /**
       * @property delegate.createItemContent
       * @type {Function}
       * @description
       *   [en]
       *     This function should return a `HTMLElement`.
       *
       *     To help rendering the element, the current index and a template is supplied as arguments. The template is the initial content of the `<ons-lazy-repeat>` element.
       *   [/en]
       *   [ja]
       *     この関数は`HTMLElement`を返してください。
       *     要素を生成しやすくするために、現在のアイテムのインデックスとテンプレートが引数に渡されます。
       *     このテンプレートは、`<ons-lazy-repeat>`要素のコンテンツが渡されます。
       *   [/ja]
       */

      /**
       * @property delegate.countItems
       * @type {Function}
       * @description
       *   [en]Should return the number of items in the list.[/en]
       *   [ja]リスト内のアイテム数を返してください。[/ja]
       */

      /**
       * @property delegate.calculateItemHeight
       * @type {Function}
       * @description
       *   [en]
       *     Should return the height of an item. The index is provided as an argument.
       *
       *     This is important when rendering lists where the items have different height.
       *
       *     The function is optional and if it isn't present the height of the first item will be automatically calculated and used for all other items.
       *   [/en]
       *   [ja]
       *     アイテムの高さ(ピクセル)を返してください。アイテムのインデックス値は引数で渡されます。
       *     この関数は、それぞれのアイムが違った高さを持つリストをレンダリングする際に重要です。
       *     この関数はオプショナルです。もしこの関数が無い場合には、
       *     最初のアイテムの高さが他のすべてのアイテムの高さとして利用されます。
       *   [/ja]
       */

      /**
       * @property delegate.destroyItem
       * @type {Function}
       * @description
       *   [en]
       *     This function is used called when an item is removed from the DOM. The index and DOM element is provided as arguments.
       *
       *     The function is optional but may be important in order to avoid memory leaks.
       *   [/en]
       *   [ja]
       *     この関数は、あるアイテムがDOMツリーから除かれた時に呼び出されます。
       *     アイテムのインデックス値とDOM要素が引数として渡されます。
       *     この関数はオプショナルですが、各アイテムの後処理が必要な場合にはメモリーリークを避けるために重要です。
       *   [/ja]
       */

    }, {
      key: "delegate",
      get: function get() {
        util$4.throw('No delegate getter');
      }
      /**
       * @method refresh
       * @signature refresh()
       * @description
       *   [en]Refresh the list. Use this method when the data has changed.[/en]
       *   [ja]リストを更新します。もしデータが変わった場合にはこのメソッドを使ってください。[/ja]
       */
      ,
      set: function set(userDelegate) {
        this._lazyRepeatProvider && this._lazyRepeatProvider.destroy();

        if (!this._templateElement && this.children[0]) {
          this._templateElement = this.removeChild(this.children[0]);
        }

        var delegate = new LazyRepeatDelegate(userDelegate, this._templateElement || null);
        this._lazyRepeatProvider = new LazyRepeatProvider(this.parentElement, delegate);
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this._lazyRepeatProvider && this._lazyRepeatProvider.refresh();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {}
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._lazyRepeatProvider) {
          this._lazyRepeatProvider.destroy();

          this._lazyRepeatProvider = null;
        }
      }
    }]);

    return LazyRepeatElement;
  }(BaseElement);
  internal$1.LazyRepeatDelegate = LazyRepeatDelegate;
  internal$1.LazyRepeatProvider = LazyRepeatProvider;
  onsElements.LazyRepeat = LazyRepeatElement;
  customElements.define('ons-lazy-repeat', LazyRepeatElement);

  var defaultClassName$c = 'list-header';
  var scheme$m = {
    '': 'list-header--*'
  };
  /**
   * @element ons-list-header
   * @category list
   * @description
   *   [en]Header element for list items. Must be put inside the `<ons-list>` component.[/en]
   *   [ja]リスト要素に使用するヘッダー用コンポーネント。ons-listと共に使用します。[/ja]
   * @seealso ons-list
   *   [en]The `<ons-list>` component[/en]
   *   [ja]ons-listコンポーネント[/ja]
   * @seealso ons-list-item
   *   [en]The `<ons-list-item>` component[/en]
   *   [ja]ons-list-itemコンポーネント[/ja]
   * @codepen yxcCt
   * @tutorial vanilla/Reference/list
   * @modifier material
   *   [en]Display a Material Design list header.[/en]
   *   [ja][/ja]
   * @example
   * <ons-list>
   *   <ons-list-header>Header Text</ons-list-header>
   *   <ons-list-item>Item</ons-list-item>
   *   <ons-list-item>Item</ons-list-item>
   * </ons-list>
   */

  var ListHeaderElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(ListHeaderElement, _BaseElement);

    var _super = _createSuper(ListHeaderElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the list header.[/en]
     *   [ja]ヘッダーの表現を指定します。[/ja]
     */
    function ListHeaderElement() {
      var _this;

      _classCallCheck(this, ListHeaderElement);

      _this = _super.call(this);

      _this._compile();

      return _this;
    }

    _createClass(ListHeaderElement, [{
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(defaultClassName$c);
        ModifierUtil.initModifier(this, scheme$m);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$c, scheme$m);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$m);
            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class'];
      }
    }]);

    return ListHeaderElement;
  }(BaseElement);
  onsElements.ListHeader = ListHeaderElement;
  customElements.define('ons-list-header', ListHeaderElement);

  var defaultClassName$b = 'list-title';
  var scheme$l = {
    '': 'list-title--*'
  };
  /**
   * @element ons-list-title
   * @category list
   * @description
   *   [en]Represents a list title.[/en]
   *   [ja]リストのタイトルを表現します。[/ja]
   * @example
   * <ons-list-title>List Title</ons-list-title>
   * <ons-list>
   *   <ons-list-item>Item</ons-list-item>
   * </ons-list>
   * @modifier material
   *   [en]Display a Material Design list title.[/en]
   *   [ja][/ja]
   */

  var ListTitleElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(ListTitleElement, _BaseElement);

    var _super = _createSuper(ListTitleElement);

    function ListTitleElement() {
      var _this;

      _classCallCheck(this, ListTitleElement);

      _this = _super.call(this);

      _this._compile();

      return _this;
    }

    _createClass(ListTitleElement, [{
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(defaultClassName$b);
        ModifierUtil.initModifier(this, scheme$l);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$b, scheme$l);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$l);
            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class'];
      }
    }]);

    return ListTitleElement;
  }(BaseElement);
  onsElements.ListTitle = ListTitleElement;
  customElements.define('ons-list-title', ListTitleElement);

  var ListItemAnimator = /*#__PURE__*/function (_BaseAnimator) {
    _inherits(ListItemAnimator, _BaseAnimator);

    var _super = _createSuper(ListItemAnimator);

    function ListItemAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'linear' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.2 : _ref$duration;

      _classCallCheck(this, ListItemAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }

    _createClass(ListItemAnimator, [{
      key: "showExpansion",
      value: function showExpansion(listItem, callback) {
        callback();
      }
    }, {
      key: "hideExpansion",
      value: function hideExpansion(listItem, callback) {
        callback();
      }
    }]);

    return ListItemAnimator;
  }(BaseAnimator);
  var SlideListItemAnimator = /*#__PURE__*/function (_ListItemAnimator) {
    _inherits(SlideListItemAnimator, _ListItemAnimator);

    var _super2 = _createSuper(SlideListItemAnimator);

    function SlideListItemAnimator() {
      _classCallCheck(this, SlideListItemAnimator);

      return _super2.apply(this, arguments);
    }

    _createClass(SlideListItemAnimator, [{
      key: "showExpansion",
      value: function showExpansion(listItem, callback) {
        this._animateExpansion(listItem, true, callback);
      }
    }, {
      key: "hideExpansion",
      value: function hideExpansion(listItem, callback) {
        this._animateExpansion(listItem, false, callback);
      }
    }, {
      key: "_animateExpansion",
      value: function _animateExpansion(listItem, shouldOpen, callback) {
        var _animit;

        // To animate the opening of the expansion panel correctly, we need to know its
        // height. To calculate this, we set its height to auto, and then get the computed
        // height and padding. Once this is done, we set the height back to its original value.
        var oldHeight = listItem.expandableContent.style.height;
        var oldDisplay = listItem.expandableContent.style.display;
        listItem.expandableContent.style.height = 'auto';
        listItem.expandableContent.style.display = 'block';
        var computedStyle = window.getComputedStyle(listItem.expandableContent);
        var expansionOpenTransition = [{
          height: 0,
          paddingTop: 0,
          paddingBottom: 0
        }, {
          height: computedStyle.height,
          paddingTop: computedStyle.paddingTop,
          paddingBottom: computedStyle.paddingBottom
        }];
        var iconOpenTransition = [{
          transform: 'rotate(45deg)'
        }, {
          transform: 'rotate(225deg)'
        }]; // Now that we have the values we need, reset the height back to its original state

        listItem.expandableContent.style.height = oldHeight;

        (_animit = Animit(listItem.expandableContent, {
          duration: this.duration,
          property: 'height padding-top padding-bottom'
        })).default.apply(_animit, _toConsumableArray(shouldOpen ? expansionOpenTransition : expansionOpenTransition.reverse())).play(function () {
          listItem.expandableContent.style.display = oldDisplay;
          callback && callback();
        });

        if (listItem.expandChevron) {
          var _animit2;

          (_animit2 = Animit(listItem.expandChevron, {
            duration: this.duration,
            property: 'transform'
          })).default.apply(_animit2, _toConsumableArray(shouldOpen ? iconOpenTransition : iconOpenTransition.reverse())).play();
        }
      }
    }]);

    return SlideListItemAnimator;
  }(ListItemAnimator);

  var defaultClassName$a = 'list-item';
  var scheme$k = {
    '.list-item': 'list-item--*',
    '.list-item__left': 'list-item--*__left',
    '.list-item__center': 'list-item--*__center',
    '.list-item__right': 'list-item--*__right',
    '.list-item__label': 'list-item--*__label',
    '.list-item__title': 'list-item--*__title',
    '.list-item__subtitle': 'list-item--*__subtitle',
    '.list-item__thumbnail': 'list-item--*__thumbnail',
    '.list-item__icon': 'list-item--*__icon'
  };
  var _animatorDict$5 = {
    'default': SlideListItemAnimator,
    'none': ListItemAnimator
  };
  /**
   * @element ons-list-item
   * @category list
   * @modifier tappable
   *   [en]Make the list item change appearance when it's tapped. On iOS it is better to use the "tappable" and "tap-background-color" attribute for better behavior when scrolling.[/en]
   *   [ja]タップやクリックした時に効果が表示されるようになります。[/ja]
   * @modifier chevron
   *   [en]Display a chevron at the right end of the list item and make it change appearance when tapped.[/en]
   *   [ja][/ja]
   * @modifier longdivider
   *   [en]Displays a long horizontal divider between items.[/en]
   *   [ja][/ja]
   * @modifier nodivider
   *   [en]Removes the divider between list items.[/en]
   *   [ja][/ja]
   * @modifier material
   *   [en]Display a Material Design list item.[/en]
   *   [ja][/ja]
   * @description
   *   [en]
   *     Component that represents each item in a list. The list item is composed of four parts that are represented with the `left`, `center`, `right` and `expandable-content` classes. These classes can be used to ensure that the content of the list items is properly aligned.
   *
   *     ```
   *     <ons-list-item>
   *       <div class="left">Left</div>
   *       <div class="center">Center</div>
   *       <div class="right">Right</div>
   *       <div class="expandable-content">Expandable content</div>
   *     </ons-list-item>
   *     ```
   *
   *     There are also a number of classes (prefixed with `list-item__*`) that help when putting things like icons and thumbnails into the list items.
   *   [/en]
   *   [ja][/ja]
   * @seealso ons-list
   *   [en]ons-list component[/en]
   *   [ja]ons-listコンポーネント[/ja]
   * @seealso ons-list-header
   *   [en]ons-list-header component[/en]
   *   [ja]ons-list-headerコンポーネント[/ja]
   * @codepen yxcCt
   * @tutorial vanilla/Reference/list
   * @example
   * <ons-list-item>
   *   <div class="left">
   *     <ons-icon icon="md-face" class="list-item__icon"></ons-icon>
   *   </div>
   *   <div class="center">
   *     <div class="list-item__title">Title</div>
   *     <div class="list-item__subtitle">Subtitle</div>
   *   </div>
   *   <div class="right">
   *     <ons-switch></ons-switch>
   *   </div>
   * </ons-list-item>
   */

  var ListItemElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(ListItemElement, _BaseElement);

    var _super = _createSuper(ListItemElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the list item.[/en]
     *   [ja]各要素の表現を指定します。[/ja]
     */

    /**
     * @attribute lock-on-drag
     * @type {String}
     * @description
     *   [en]Prevent vertical scrolling when the user drags horizontally.[/en]
     *   [ja]この属性があると、ユーザーがこの要素を横方向にドラッグしている時に、縦方向のスクロールが起きないようになります。[/ja]
     */

    /**
     * @attribute tappable
     * @type {Boolean}
     * @description
     *   [en]Makes the element react to taps. `prevent-tap` attribute can be added to child elements like buttons or inputs to prevent this effect. `ons-*` elements are ignored by default.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute tap-background-color
     * @type {Color}
     * @description
     *   [en] Changes the background color when tapped. For this to work, the attribute "tappable" needs to be set. The default color is "#d9d9d9". It will display as a ripple effect on Android.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute expandable
     * @type {Boolean}
     * @description
     *   [en]Makes the element able to be expanded to reveal extra content. For this to work, the expandable content must be defined in `div.expandable-content`.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute expanded
     * @type {Boolean}
     * @description
     *   [en]For expandable list items, specifies whether the expandable content is expanded or not.[/en]
     *   [ja][/ja]
     */

    /**
     * @property expanded
     * @type {Boolean}
     * @description
     *   [en]For expandable list items, specifies whether the expandable content is expanded or not.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @default default
     * @description
     *  [en]The animation used when showing and hiding the expandable content. Can be either `"default"` or `"none"`.[/en]
     *  [ja][/ja]
     */
    function ListItemElement() {
      var _this;

      _classCallCheck(this, ListItemElement);

      _this = _super.call(this);
      util$4.defineBooleanProperty(_assertThisInitialized(_this), 'expanded');
      _this._animatorFactory = _this._updateAnimatorFactory(); // Elements ignored when tapping

      var re = /^ons-(?!col$|row$|if$)/i;

      _this._shouldIgnoreTap = function (e) {
        return e.hasAttribute('prevent-tap') || re.test(e.tagName);
      }; // show and hide functions for Vue hidable mixin


      _this.show = _this.showExpansion;
      _this.hide = _this.hideExpansion;
      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();
      });
      return _this;
    }
    /**
     * Compiles the list item.
     *
     * Various elements are allowed in the body of a list item:
     *
     *  - div.left, div.right, and div.center are allowed as direct children
     *  - if div.center is not defined, anything that isn't div.left, div.right or div.expandable-content will be put in a div.center
     *  - if div.center is defined, anything that isn't div.left, div.right or div.expandable-content will be ignored
     *  - if list item has expandable attribute:
     *      - div.expandable-content is allowed as a direct child
     *      - div.top is allowed as direct child
     *      - if div.top is defined, anything that isn't div.expandable-content should be inside div.top - anything else will be ignored
     *      - if div.right is not defined, a div.right will be created with a drop-down chevron
     *
     * See the tests for examples.
     */


    _createClass(ListItemElement, [{
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(defaultClassName$a);
        var top, expandableContent;
        var topContent = [];
        Array.from(this.childNodes).forEach(function (node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            topContent.push(node);
          } else if (node.classList.contains('top')) {
            top = node;
          } else if (node.classList.contains('expandable-content')) {
            expandableContent = node;
          } else {
            topContent.push(node);
          }

          if (node.nodeName !== 'ONS-RIPPLE') {
            node.remove();
          }
        });
        topContent = top ? Array.from(top.childNodes) : topContent;
        var left, right, center;
        var centerContent = [];
        topContent.forEach(function (node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            centerContent.push(node);
          } else if (node.classList.contains('left')) {
            left = node;
          } else if (node.classList.contains('right')) {
            right = node;
          } else if (node.classList.contains('center')) {
            center = node;
          } else {
            centerContent.push(node);
          }
        });

        if (this.hasAttribute('expandable')) {
          this.classList.add('list-item--expandable');

          if (!top) {
            top = document.createElement('div');
            top.classList.add('top');
          }

          top.classList.add('list-item__top');
          this.appendChild(top);
          this._top = top;

          if (expandableContent) {
            expandableContent.classList.add('list-item__expandable-content');
            this.appendChild(expandableContent);
          }

          if (!right) {
            right = document.createElement('div');
            right.classList.add('list-item__right', 'right'); // We cannot use a pseudo-element for this chevron, as we cannot animate it using
            // JS. So, we make a chevron span instead.

            var chevron = document.createElement('span');
            chevron.classList.add('list-item__expand-chevron');
            right.appendChild(chevron);
          } // The case where the list item should already start expanded.
          // Adding the class early stops the animation from running at startup.


          if (this.expanded) {
            this.classList.add('list-item--expanded');
          }
        } else {
          top = this;
        }

        if (!center) {
          center = document.createElement('div');
          center.classList.add('center');
          centerContent.forEach(function (node) {
            return center.appendChild(node);
          });
        }

        center.classList.add('list-item__center');
        top.appendChild(center);

        if (left) {
          left.classList.add('list-item__left');
          top.appendChild(left);
        }

        if (right) {
          right.classList.add('list-item__right');
          top.appendChild(right);
        }

        util$4.updateRipple(this);
        ModifierUtil.initModifier(this, scheme$k);
      }
      /**
       * @method showExpansion
       * @signature showExpansion()
       * @description
       *   [en]Show the expandable content if the element is expandable.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "showExpansion",
      value: function showExpansion() {
        this.expanded = true;
      }
      /**
       * @method hideExpansion
       * @signature hideExpansion()
       * @description
       *   [en]Hide the expandable content if the element expandable.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "hideExpansion",
      value: function hideExpansion() {
        this.expanded = false;
      }
    }, {
      key: "toggleExpansion",
      value: function toggleExpansion() {
        this.expanded = !this.expanded;
      }
    }, {
      key: "_animateExpansion",
      value: function _animateExpansion() {
        var _this2 = this;

        // Stops the animation from running in the case where the list item should start already expanded
        var expandedAtStartup = this.expanded && this.classList.contains('list-item--expanded');

        if (!this.hasAttribute('expandable') || this._expanding || expandedAtStartup) {
          return;
        }

        this._expanding = true;

        var expandedCallback = function expandedCallback() {
          _this2._expanding = false;

          if (_this2.expanded) {
            _this2.classList.add('list-item--expanded');
          } else {
            _this2.classList.remove('list-item--expanded');
          }
        };

        var animator = this._animatorFactory.newAnimator();

        if (animator._animateExpansion) {
          animator._animateExpansion(this, this.expanded, expandedCallback);
        } else {
          expandedCallback();
        }
      }
    }, {
      key: "_updateAnimatorFactory",
      value: function _updateAnimatorFactory() {
        return new AnimatorFactory({
          animators: _animatorDict$5,
          baseClass: ListItemAnimator,
          baseClassName: 'ListItemAnimator',
          defaultAnimation: this.getAttribute('animation') || 'default'
        });
      }
    }, {
      key: "expandableContent",
      get: function get() {
        return this.querySelector('.list-item__expandable-content');
      }
    }, {
      key: "expandChevron",
      get: function get() {
        return this.querySelector('.list-item__expand-chevron');
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$a, scheme$k);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$k);
            break;

          case 'ripple':
            util$4.updateRipple(this);
            break;

          case 'animation':
            this._animatorFactory = this._updateAnimatorFactory();
            break;

          case 'expanded':
            this._animateExpansion();

            break;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this3 = this;

        contentReady(this, function () {
          _this3._setupListeners(true);

          _this3._originalBackgroundColor = _this3.style.backgroundColor;
          _this3.tapped = false;
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._setupListeners(false);
      }
    }, {
      key: "_setupListeners",
      value: function _setupListeners(add) {
        var action = (add ? 'add' : 'remove') + 'EventListener';
        util$4[action](this, 'touchstart', this._onTouch, {
          passive: true
        });
        util$4[action](this, 'touchmove', this._onRelease, {
          passive: true
        });
        this[action]('touchcancel', this._onRelease);
        this[action]('touchend', this._onRelease);
        this[action]('touchleave', this._onRelease);
        this[action]('drag', this._onDrag);
        this[action]('mousedown', this._onTouch);
        this[action]('mouseup', this._onRelease);
        this[action]('mouseout', this._onRelease);

        if (this._top) {
          this._top[action]('click', this._onClickTop.bind(this));
        }
      }
    }, {
      key: "_onClickTop",
      value: function _onClickTop() {
        if (!this._expanding) {
          this.toggleExpansion();
          this.dispatchEvent(new Event('expand'));
        }
      }
    }, {
      key: "_onDrag",
      value: function _onDrag(event) {
        var gesture = event.gesture; // Prevent vertical scrolling if the users pans left or right.

        if (this.hasAttribute('lock-on-drag') && ['left', 'right'].indexOf(gesture.direction) > -1) {
          gesture.preventDefault();
        }
      }
    }, {
      key: "_onTouch",
      value: function _onTouch(e) {
        var _this4 = this;

        if (this.tapped || this !== e.target && (this._shouldIgnoreTap(e.target) || util$4.findParent(e.target, this._shouldIgnoreTap, function (p) {
          return p === _this4;
        }))) {
          return; // Ignore tap
        }

        this.tapped = true;
        var touchStyle = {
          transition: 'background-color 0.0s linear 0.02s, box-shadow 0.0s linear 0.02s'
        };

        if (this.hasAttribute('tappable')) {
          if (this.style.backgroundColor) {
            this._originalBackgroundColor = this.style.backgroundColor;
          }

          touchStyle.backgroundColor = this.getAttribute('tap-background-color') || '#d9d9d9';
          touchStyle.boxShadow = "0px -1px 0px 0px ".concat(touchStyle.backgroundColor);
        }

        styler(this, touchStyle);
      }
    }, {
      key: "_onRelease",
      value: function _onRelease() {
        this.tapped = false;
        this.style.backgroundColor = this._originalBackgroundColor || '';
        styler.clear(this, 'transition boxShadow');
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class', 'ripple', 'animation', 'expanded'];
      }
    }]);

    return ListItemElement;
  }(BaseElement);
  onsElements.ListItem = ListItemElement;
  customElements.define('ons-list-item', ListItemElement);

  var defaultClassName$9 = 'list';
  var scheme$j = {
    '': 'list--*'
  };
  /**
   * @element ons-list
   * @category list
   * @modifier inset
   *   [en]Inset list that doesn't cover the whole width of the parent.[/en]
   *   [ja]親要素の画面いっぱいに広がらないリストを表示します。[/ja]
   * @modifier noborder
   *   [en]A list with no borders at the top and bottom.[/en]
   *   [ja]リストの上下のボーダーが無いリストを表示します。[/ja]
   * @description
   *   [en]Component to define a list, and the container for ons-list-item(s).[/en]
   *   [ja]リストを表現するためのコンポーネント。ons-list-itemのコンテナとして使用します。[/ja]
   * @seealso ons-list-item
   *   [en]ons-list-item component[/en]
   *   [ja]ons-list-itemコンポーネント[/ja]
   * @seealso ons-list-header
   *   [en]ons-list-header component[/en]
   *   [ja]ons-list-headerコンポーネント[/ja]
   * @seealso ons-lazy-repeat
   *   [en]ons-lazy-repeat component[/en]
   *   [ja]ons-lazy-repeatコンポーネント[/ja]
   * @codepen yxcCt
   * @tutorial vanilla/Reference/list
   * @example
   * <ons-list>
   *   <ons-list-header>Header Text</ons-list-header>
   *   <ons-list-item>Item</ons-list-item>
   *   <ons-list-item>Item</ons-list-item>
   * </ons-list>
   */

  var ListElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(ListElement, _BaseElement);

    var _super = _createSuper(ListElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the list.[/en]
     *   [ja]リストの表現を指定します。[/ja]
     */
    function ListElement() {
      var _this;

      _classCallCheck(this, ListElement);

      _this = _super.call(this);

      _this._compile();

      return _this;
    }

    _createClass(ListElement, [{
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(defaultClassName$9);
        ModifierUtil.initModifier(this, scheme$j);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$9, scheme$j);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$j);
            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class'];
      }
    }]);

    return ListElement;
  }(BaseElement);
  onsElements.List = ListElement;
  customElements.define('ons-list', ListElement);

  var INPUT_ATTRIBUTES$1 = ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'validator', 'value'];

  var BaseInputElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(BaseInputElement, _BaseElement);

    var _super = _createSuper(BaseInputElement);

    function BaseInputElement() {
      var _this;

      _classCallCheck(this, BaseInputElement);

      _this = _super.call(this);

      if (_this.constructor === BaseInputElement) {
        util$4.throwAbstract();
      }

      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      _this._boundDelegateEvent = _this._delegateEvent.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(BaseInputElement, [{
      key: "_update",
      value: function _update() {} // Optionally implemented

    }, {
      key: "_scheme",
      get: function get() {
        util$4.throwMember();
      }
    }, {
      key: "_template",
      get: function get() {
        util$4.throwMember();
      }
    }, {
      key: "type",
      get: function get() {
        util$4.throwMember();
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this._defaultClassName && this.classList.add(this._defaultClassName);

        if (this.children.length !== 0) {
          return;
        }

        this.appendChild(util$4.createFragment(this._template));

        this._setInputId();

        this._updateBoundAttributes();

        ModifierUtil.initModifier(this, this._scheme);
      }
    }, {
      key: "_updateBoundAttributes",
      value: function _updateBoundAttributes() {
        var _this2 = this;

        INPUT_ATTRIBUTES$1.forEach(function (attr) {
          if (_this2.hasAttribute(attr)) {
            _this2._input.setAttribute(attr, _this2.getAttribute(attr));
          } else {
            _this2._input.removeAttribute(attr);
          }
        });

        this._update();
      }
    }, {
      key: "_delegateEvent",
      value: function _delegateEvent(event) {
        var e = new CustomEvent(event.type, {
          bubbles: false,
          cancelable: true
        });
        return this.dispatchEvent(e);
      }
    }, {
      key: "_setInputId",
      value: function _setInputId() {
        if (this.hasAttribute('input-id')) {
          this._input.id = this.getAttribute('input-id');
        }
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        return '';
      }
    }, {
      key: "_input",
      get: function get() {
        return this.querySelector('input');
      }
    }, {
      key: "value",
      get: function get() {
        return this._input === null ? this.getAttribute('value') : this._input.value;
      },
      set: function set(val) {
        var _this3 = this;

        contentReady(this, function () {
          if (val instanceof Date) {
            val = val.toISOString().substring(0, 10);
          }

          _this3._input.value = val;

          _this3._update();
        });
      }
    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute('disabled');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'disabled', value);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this4 = this;

        contentReady(this, function () {
          _this4._input.addEventListener('focus', _this4._boundDelegateEvent);

          _this4._input.addEventListener('blur', _this4._boundDelegateEvent);
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this5 = this;

        contentReady(this, function () {
          _this5._input.removeEventListener('focus', _this5._boundDelegateEvent);

          _this5._input.removeEventListener('blur', _this5._boundDelegateEvent);
        });
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this6 = this;

        switch (name) {
          case 'modifier':
            contentReady(this, function () {
              return ModifierUtil.onModifierChanged(last, current, _this6, _this6._scheme);
            });
            break;

          case 'input-id':
            contentReady(this, function () {
              return _this6._setInputId();
            });
            break;

          case 'class':
            util$4.restoreClass(this, this._defaultClassName, this._scheme);
            break;
        }

        if (INPUT_ATTRIBUTES$1.indexOf(name) >= 0) {
          contentReady(this, function () {
            return _this6._updateBoundAttributes();
          });
        }
      }
    }, {
      key: "blur",
      value: function blur() {
        this._input.blur();
      }
    }, {
      key: "focus",
      value: function focus() {
        this._input.focus();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'input-id', 'class'].concat(INPUT_ATTRIBUTES$1);
      }
    }]);

    return BaseInputElement;
  }(BaseElement);

  var scheme$i = {
    '.text-input': 'text-input--*',
    '.text-input__label': 'text-input--*__label'
  };
  /**
   * @element ons-input
   * @category form
   * @modifier material
   *  [en]Displays a Material Design input.[/en]
   *  [ja][/ja]
   * @modifier underbar
   *  [en]Displays a horizontal line underneath a text input.[/en]
   *  [ja][/ja]
   * @modifier transparent
   *  [en]Displays a transparent input. Works for Material Design.[/en]
   *  [ja][/ja]
   * @description
   *  [en]
   *    An input element. The `type` attribute can be used to change the input type. All text input types are supported.
   *
   *    The component will automatically render as a Material Design input on Android devices.
   *
   *    Most attributes that can be used for a normal `<input>` element can also be used on the `<ons-input>` element.
   *  [/en]
   *  [ja][/ja]
   * @tutorial vanilla/Reference/input
   * @seealso ons-checkbox
   *   [en]The `<ons-checkbox>` element is used to display a checkbox.[/en]
   *   [ja][/ja]
   * @seealso ons-radio
   *   [en]The `<ons-radio>` element is used to display a radio button.[/en]
   *   [ja][/ja]
   * @seealso ons-range
   *   [en]The `<ons-range>` element is used to display a range slider.[/en]
   *   [ja][/ja]
   * @seealso ons-switch
   *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
   *   [ja][/ja]
   * @seealso ons-select
   *   [en]The `<ons-select>` element is used to display a select box.[/en]
   *   [ja][/ja]
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @example
   * <ons-input placeholder="Username" float></ons-input>
   */

  var InputElement = /*#__PURE__*/function (_BaseInputElement) {
    _inherits(InputElement, _BaseInputElement);

    var _super = _createSuper(InputElement);

    function InputElement() {
      var _this;

      _classCallCheck(this, InputElement);

      _this = _super.call(this);
      _this._boundOnInput = _this._update.bind(_assertThisInitialized(_this));
      _this._boundOnFocusin = _this._update.bind(_assertThisInitialized(_this));
      return _this;
    }
    /* Inherited props */


    _createClass(InputElement, [{
      key: "_update",
      value: function _update() {
        this._updateLabel();

        this._updateLabelClass();
      }
    }, {
      key: "_scheme",
      get: function get() {
        return scheme$i;
      }
    }, {
      key: "_template",
      get: function get() {
        return "\n      <input type=\"".concat(this.type, "\" class=\"text-input\">\n      <span class=\"text-input__label\"></span>\n    ");
      }
    }, {
      key: "type",
      get: function get() {
        var type = this.getAttribute('type');
        return ['checkbox', 'radio'].indexOf(type) < 0 && type || 'text';
      }
      /* Own props */

    }, {
      key: "_updateLabel",
      value: function _updateLabel() {
        var label = this.getAttribute('placeholder') || '';

        if (typeof this._helper.textContent !== 'undefined') {
          this._helper.textContent = label;
        } else {
          this._helper.innerText = label;
        }
      }
    }, {
      key: "_updateLabelClass",
      value: function _updateLabelClass() {
        if (this.value === '') {
          this._helper.classList.remove('text-input--material__label--active');
        } else {
          this._helper.classList.add('text-input--material__label--active');
        }
      }
    }, {
      key: "_helper",
      get: function get() {
        return this.querySelector('span');
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        _get(_getPrototypeOf(InputElement.prototype), "connectedCallback", this).call(this);

        contentReady(this, function () {
          _this2._input.addEventListener('input', _this2._boundOnInput);

          _this2._input.addEventListener('focusin', _this2._boundOnFocusin);
        });
        var type = this.getAttribute('type');

        if (['checkbox', 'radio'].indexOf(type) >= 0) {
          util$4.warn("Warn: <ons-input type=\"".concat(type, "\"> is deprecated since v2.4.0. Use <ons-").concat(type, "> instead."));
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this3 = this;

        _get(_getPrototypeOf(InputElement.prototype), "disconnectedCallback", this).call(this);

        contentReady(this, function () {
          _this3._input.removeEventListener('input', _this3._boundOnInput);

          _this3._input.removeEventListener('focusin', _this3._boundOnFocusin);
        });
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this4 = this;

        switch (name) {
          case 'type':
            contentReady(this, function () {
              return _this4._input.setAttribute('type', _this4.type);
            });
            break;

          default:
            _get(_getPrototypeOf(InputElement.prototype), "attributeChangedCallback", this).call(this, name, last, current);

        }
      }
      /**
       * @attribute placeholder
       * @type {String}
       * @description
       *   [en]Placeholder text. In Material Design, this placeholder will be a floating label.[/en]
       *   [ja][/ja]
       */

      /**
       * @attribute float
       * @description
       *  [en]If this attribute is present, the placeholder will be animated in Material Design.[/en]
       *  [ja]この属性が設定された時、ラベルはアニメーションするようになります。[/ja]
       */

      /**
       * @attribute type
       * @type {String}
       * @description
       *  [en]
       *    Specify the input type. This is the same as the "type" attribute for normal inputs. It expects strict text types such as `text`, `password`, etc. For checkbox, radio button, select or range, please have a look at the corresponding elements.
       *
       *    Please take a look at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) for an exhaustive list of possible values. Depending on the platform and browser version some of these might not work.
       *  [/en]
       *  [ja][/ja]
       */

      /**
       * @attribute input-id
       * @type {String}
       * @description
       *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
       *  [ja][/ja]
       */

      /**
       * @property value
       * @type {String}
       * @description
       *   [en]The current value of the input.[/en]
       *   [ja][/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the input is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @method focus
       * @signature focus()
       * @description
       *   [en]Focuses the input.[/en]
       *   [ja][/ja]
       */

      /**
       * @method blur
       * @signature blur()
       * @description
       *   [en]Removes focus from the input.[/en]
       *   [ja][/ja]
       */

    }], [{
      key: "observedAttributes",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(InputElement), "observedAttributes", this)), ['type']);
      }
    }]);

    return InputElement;
  }(BaseInputElement);
  onsElements.Input = InputElement;
  customElements.define('ons-input', InputElement);

  var BaseCheckboxElement = /*#__PURE__*/function (_BaseInputElement) {
    _inherits(BaseCheckboxElement, _BaseInputElement);

    var _super = _createSuper(BaseCheckboxElement);

    function BaseCheckboxElement() {
      var _this;

      _classCallCheck(this, BaseCheckboxElement);

      _this = _super.call(this);

      if (_this.constructor === BaseCheckboxElement) {
        util.throwAbstract();
      }

      contentReady(_assertThisInitialized(_this), function () {
        _this.attributeChangedCallback('checked', null, _this.getAttribute('checked'));
      });
      return _this;
    }
    /* Inherited props */


    _createClass(BaseCheckboxElement, [{
      key: "_template",
      get: function get() {
        return "\n      <input type=\"".concat(this.type, "\" class=\"").concat(this._defaultClassName, "__input\">\n      <span class=\"").concat(this._defaultClassName, "__checkmark\"></span>\n    ");
      }
      /* Own props */

    }, {
      key: "_helper",
      get: function get() {
        return this.querySelector('span');
      }
    }, {
      key: "checked",
      get: function get() {
        return this._input.checked;
      },
      set: function set(val) {
        var _this2 = this;

        contentReady(this, function () {
          _this2._input.checked = val;
        });
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'checked':
            this.checked = current !== null;
            break;

          default:
            _get(_getPrototypeOf(BaseCheckboxElement.prototype), "attributeChangedCallback", this).call(this, name, last, current);

        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(BaseCheckboxElement), "observedAttributes", this)), ['checked']);
      }
    }]);

    return BaseCheckboxElement;
  }(BaseInputElement);

  var scheme$h = {
    '.checkbox': 'checkbox--*',
    '.checkbox__input': 'checkbox--*__input',
    '.checkbox__checkmark': 'checkbox--*__checkmark'
  };
  /**
   * @element ons-checkbox
   * @category form
   * @modifier material
   *  [en]Displays a Material Design checkbox.[/en]
   *  [ja][/ja]
   * @modifier noborder
   *  [en]iOS borderless checkbox.[/en]
   *  [ja][/ja]
   * @description
   *  [en]
   *    A checkbox element. The component will automatically render as a Material Design checkbox on Android devices.
   *
   *    Most attributes that can be used for a normal `<input type="checkbox">` element can also be used on the `<ons-checkbox>` element.
   *  [/en]
   *  [ja][/ja]
   * @tutorial vanilla/Reference/checkbox
   * @seealso ons-switch
   *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
   *   [ja][/ja]
   * @seealso ons-radio
   *   [en]The `<ons-radio>` element is used to display a radio button.[/en]
   *   [ja][/ja]
   * @seealso ons-input
   *   [en]The `<ons-input>` element is used to display a text input.[/en]
   *   [ja][/ja]
   * @seealso ons-search-input
   *   [en]The `<ons-search-input>` element is used to display a search input.[/en]
   *   [ja][/ja]
   * @seealso ons-range
   *   [en]The `<ons-range>` element is used to display a range slider.[/en]
   *   [ja][/ja]
   * @seealso ons-select
   *   [en]The `<ons-select>` element is used to display a select box.[/en]
   *   [ja][/ja]
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @example
   * <ons-checkbox checked></ons-checkbox>
   */

  var CheckboxElement = /*#__PURE__*/function (_BaseCheckboxElement) {
    _inherits(CheckboxElement, _BaseCheckboxElement);

    var _super = _createSuper(CheckboxElement);

    function CheckboxElement() {
      _classCallCheck(this, CheckboxElement);

      return _super.apply(this, arguments);
    }

    _createClass(CheckboxElement, [{
      key: "_scheme",
      get: function get() {
        return scheme$h;
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        return 'checkbox';
      }
    }, {
      key: "type",
      get: function get() {
        return 'checkbox';
      }
      /**
       * @attribute input-id
       * @type {String}
       * @description
       *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
       *  [ja][/ja]
       */

      /**
       * @property value
       * @type {String}
       * @description
       *   [en]The current value of the checkbox.[/en]
       *   [ja][/ja]
       */

      /**
       * @property checked
       * @type {Boolean}
       * @description
       *   [en]Whether the checkbox is checked or not.[/en]
       *   [ja][/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the checkbox is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @method focus
       * @signature focus()
       * @description
       *   [en]Focuses the checkbox.[/en]
       *   [ja][/ja]
       */

      /**
       * @method blur
       * @signature blur()
       * @description
       *   [en]Removes focus from the checkbox.[/en]
       *   [ja][/ja]
       */

    }]);

    return CheckboxElement;
  }(BaseCheckboxElement);
  onsElements.Checkbox = CheckboxElement;
  customElements.define('ons-checkbox', CheckboxElement);

  var scheme$g = {
    '.radio-button': 'radio-button--*',
    '.radio-button__input': 'radio-button--*__input',
    '.radio-button__checkmark': 'radio-button--*__checkmark'
  };
  /**
   * @element ons-radio
   * @category form
   * @modifier material
   *  [en]Displays a Material Design radio button.[/en]
   *  [ja][/ja]
   * @description
   *  [en]
   *    A radio button element. The component will automatically render as a Material Design radio button on Android devices.
   *
   *    Most attributes that can be used for a normal `<input type="radio">` element can also be used on the `<ons-radio>` element.
   *  [/en]
   *  [ja][/ja]
   * @tutorial vanilla/Reference/radio
   * @seealso ons-select
   *   [en]The `<ons-select>` element is used to display a select box.[/en]
   *   [ja][/ja]
   * @seealso ons-checkbox
   *   [en]The `<ons-checkbox>` element is used to display a checkbox.[/en]
   *   [ja][/ja]
   * @seealso ons-switch
   *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
   *   [ja][/ja]
   * @seealso ons-input
   *   [en]The `<ons-input>` element is used to display a text input.[/en]
   *   [ja][/ja]
   * @seealso ons-search-input
   *   [en]The `<ons-search-input>` element is used to display a search input.[/en]
   *   [ja][/ja]
   * @seealso ons-range
   *   [en]The `<ons-range>` element is used to display a range slider.[/en]
   *   [ja][/ja]
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @example
   * <ons-radio checked></ons-radio>
   */

  var RadioElement = /*#__PURE__*/function (_BaseCheckboxElement) {
    _inherits(RadioElement, _BaseCheckboxElement);

    var _super = _createSuper(RadioElement);

    function RadioElement() {
      _classCallCheck(this, RadioElement);

      return _super.apply(this, arguments);
    }

    _createClass(RadioElement, [{
      key: "_scheme",
      get: function get() {
        return scheme$g;
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        return 'radio-button';
      }
    }, {
      key: "type",
      get: function get() {
        return 'radio';
      }
      /**
       * @attribute input-id
       * @type {String}
       * @description
       *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
       *  [ja][/ja]
       */

      /**
       * @property value
       * @type {String}
       * @description
       *   [en]The current value of the radio button.[/en]
       *   [ja][/ja]
       */

      /**
       * @property checked
       * @type {Boolean}
       * @description
       *   [en]Whether the radio button is checked or not.[/en]
       *   [ja][/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the radio button is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @method focus
       * @signature focus()
       * @description
       *   [en]Focuses the radio button.[/en]
       *   [ja][/ja]
       */

      /**
       * @method blur
       * @signature blur()
       * @description
       *   [en]Removes focus from the radio button.[/en]
       *   [ja][/ja]
       */

    }]);

    return RadioElement;
  }(BaseCheckboxElement);
  onsElements.Radio = RadioElement;
  customElements.define('ons-radio', RadioElement);

  var scheme$f = {
    '.search-input': 'search-input--*'
  };
  /**
   * @element ons-search-input
   * @category form
   * @modifier material
   *  [en]Displays a Material Design search input.[/en]
   *  [ja][/ja]
   * @description
   *  [en]
   *    A search input element. The component will automatically render as a Material Design search input on Android devices.
   *
   *    Most attributes that can be used for a normal `<input>` element can also be used on the `<ons-search-input>` element.
   *  [/en]
   *  [ja][/ja]
   * @tutorial vanilla/Reference/search-input
   * @seealso ons-input
   *   [en]The `<ons-input>` element is used to display a text input.[/en]
   *   [ja][/ja]
   * @seealso ons-range
   *   [en]The `<ons-range>` element is used to display a range slider.[/en]
   *   [ja][/ja]
   * @seealso ons-switch
   *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
   *   [ja][/ja]
   * @seealso ons-select
   *   [en]The `<ons-select>` element is used to display a select box.[/en]
   *   [ja][/ja]
   * @seealso ons-checkbox
   *   [en]The `<ons-checkbox>` element is used to display a checkbox.[/en]
   *   [ja][/ja]
   * @seealso ons-radio
   *   [en]The `<ons-radio>` element is used to display a radio button.[/en]
   *   [ja][/ja]
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @example
   * <ons-search-input placeholder="Search"></ons-search-input>
   */

  var SearchInputElement = /*#__PURE__*/function (_BaseInputElement) {
    _inherits(SearchInputElement, _BaseInputElement);

    var _super = _createSuper(SearchInputElement);

    function SearchInputElement() {
      _classCallCheck(this, SearchInputElement);

      return _super.apply(this, arguments);
    }

    _createClass(SearchInputElement, [{
      key: "_scheme",
      get: function get() {
        return scheme$f;
      }
    }, {
      key: "_template",
      get: function get() {
        return "\n      <input type=\"".concat(this.type, "\" class=\"search-input\">\n    ");
      }
    }, {
      key: "type",
      get: function get() {
        return 'search';
      }
      /**
       * @attribute input-id
       * @type {String}
       * @description
       *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
       *  [ja][/ja]
       */

      /**
       * @property value
       * @type {String}
       * @description
       *   [en]The current value of the input.[/en]
       *   [ja][/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the input is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @method focus
       * @signature focus()
       * @description
       *   [en]Focuses the input.[/en]
       *   [ja][/ja]
       */

      /**
       * @method blur
       * @signature blur()
       * @description
       *   [en]Removes focus from the input.[/en]
       *   [ja][/ja]
       */

    }]);

    return SearchInputElement;
  }(BaseInputElement);
  onsElements.SearchInput = SearchInputElement;
  customElements.define('ons-search-input', SearchInputElement);

  var ModalAnimator = /*#__PURE__*/function (_BaseAnimator) {
    _inherits(ModalAnimator, _BaseAnimator);

    var _super = _createSuper(ModalAnimator);

    /**
     * @param {Object} options
     * @param {String} options.timing
     * @param {Number} options.duration
     * @param {Number} options.delay
     */
    function ModalAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'linear' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.2 : _ref$duration;

      _classCallCheck(this, ModalAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {HTMLElement} modal
     * @param {Function} callback
     */


    _createClass(ModalAnimator, [{
      key: "show",
      value: function show(modal, callback) {
        callback();
      }
      /**
       * @param {HTMLElement} modal
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(modal, callback) {
        callback();
      }
    }]);

    return ModalAnimator;
  }(BaseAnimator);

  /**
   * iOS style animator for dialog.
   */

  var FadeModalAnimator = /*#__PURE__*/function (_ModalAnimator) {
    _inherits(FadeModalAnimator, _ModalAnimator);

    var _super = _createSuper(FadeModalAnimator);

    function FadeModalAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'linear' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.3 : _ref$duration;

      _classCallCheck(this, FadeModalAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {HTMLElement} modal
     * @param {Function} callback
     */


    _createClass(FadeModalAnimator, [{
      key: "show",
      value: function show(modal, callback) {
        callback = callback ? callback : function () {};
        Animit(modal, this.def).default({
          opacity: 0
        }, {
          opacity: 1
        }).queue(function (done) {
          callback();
          done();
        }).play();
      }
      /**
       * @param {HTMLElement} modal
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(modal, callback) {
        callback = callback ? callback : function () {};
        Animit(modal, this.def).default({
          opacity: 1
        }, {
          opacity: 0
        }).queue(function (done) {
          callback();
          done();
        }).play();
      }
    }]);

    return FadeModalAnimator;
  }(ModalAnimator);

  /**
   * iOS style animator for modal.
   */

  var LiftModalAnimator = /*#__PURE__*/function (_ModalAnimator) {
    _inherits(LiftModalAnimator, _ModalAnimator);

    var _super = _createSuper(LiftModalAnimator);

    function LiftModalAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'cubic-bezier( .1, .7, .1, 1)' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.4 : _ref$duration;

      _classCallCheck(this, LiftModalAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {HTMLElement} modal
     * @param {Function} callback
     */


    _createClass(LiftModalAnimator, [{
      key: "show",
      value: function show(modal, callback) {
        callback = callback ? callback : function () {};
        Animit(modal, this.def).default({
          transform: 'translate3d(0, 100%, 0)'
        }, {
          transform: 'translate3d(0, 0, 0)'
        }).queue(function (done) {
          callback();
          done();
        }).play();
      }
      /**
       * @param {HTMLElement} modal
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(modal, callback) {
        callback = callback ? callback : function () {};
        Animit(modal, this.def).default({
          transform: 'translate3d(0, 0, 0)'
        }, {
          transform: 'translate3d(0, 100%, 0)'
        }).queue(function (done) {
          callback();
          done();
        }).play();
      }
    }]);

    return LiftModalAnimator;
  }(ModalAnimator);

  var scheme$e = {
    '': 'modal--*',
    'modal__content': 'modal--*__content'
  };
  var defaultClassName$8 = 'modal';
  var _animatorDict$4 = {
    'default': ModalAnimator,
    'fade': FadeModalAnimator,
    'lift': LiftModalAnimator,
    'none': ModalAnimator
  };
  /**
   * @element ons-modal
   * @category dialog
   * @description
   *   [en]
   *     Modal component that masks current screen. Underlying components are not subject to any events while the modal component is shown.
   *
   *     This component can be used to block user input while some operation is running or to show some information to the user.
   *   [/en]
   *   [ja]
   *     画面全体をマスクするモーダル用コンポーネントです。下側にあるコンポーネントは、
   *     モーダルが表示されている間はイベント通知が行われません。
   *   [/ja]
   * @seealso ons-dialog
   *   [en]The `<ons-dialog>` component can be used to create a modal dialog.[/en]
   *   [ja][/ja]
   * @codepen devIg
   * @tutorial vanilla/reference/modal
   * @example
   * <ons-modal id="modal">
   *   Modal content
   * </ons-modal>
   * <script>
   *   var modal = document.getElementById('modal');
   *   modal.show();
   * </script>
   */

  var ModalElement = /*#__PURE__*/function (_BaseDialogElement) {
    _inherits(ModalElement, _BaseDialogElement);

    var _super = _createSuper(ModalElement);

    /**
     * @event preshow
     * @description
     * [en]Fired just before the modal is displayed.[/en]
     * [ja]モーダルが表示される直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.modal
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute this function to stop the modal from being shown.[/en]
     *   [ja]この関数を実行すると、ダイアログの表示がキャンセルされます。[/ja]
     */

    /**
     * @event postshow
     * @description
     * [en]Fired just after the modal is displayed.[/en]
     * [ja]モーダルが表示された直後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.modal
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event prehide
     * @description
     * [en]Fired just before the modal is hidden.[/en]
     * [ja]モーダルが隠れる直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.modal
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute this function to stop the modal from being hidden.[/en]
     *   [ja]この関数を実行すると、ダイアログの非表示がキャンセルされます。[/ja]
     */

    /**
     * @event posthide
     * @description
     * [en]Fired just after the modal is hidden.[/en]
     * [ja]モーダルが隠れた後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.modal
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event dialogcancel
     * @description
     * [en]Fired when the modal is canceled.[/en]
     * [ja][/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @default default
     * @description
     *  [en]The animation used when showing and hiding the modal. Can be either `"none"`, `"fade"` or `"lift"`.[/en]
     *  [ja]モーダルを表示する際のアニメーション名を指定します。"none"もしくは"fade","lift"を指定できます。[/ja]
     */

    /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. <code>{duration: 0.2, delay: 1, timing: 'ease-in'}</code>[/ja]
     */

    /**
     * @property animationOptions
     * @type {Object}
     * @description
     *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */

    /**
     * @attribute visible
     * @type {Boolean}
     * @description
     *   [en]Whether the modal is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */
    function ModalElement() {
      var _this;

      _classCallCheck(this, ModalElement);

      _this = _super.call(this);

      _this._defaultDBB = function () {
        return undefined;
      };

      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      return _this;
    }

    _createClass(ModalElement, [{
      key: "_scheme",
      get: function get() {
        return scheme$e;
      }
    }, {
      key: "_updateAnimatorFactory",
      value: function _updateAnimatorFactory() {
        return new AnimatorFactory({
          animators: _animatorDict$4,
          baseClass: ModalAnimator,
          baseClassName: 'ModalAnimator',
          defaultAnimation: this.getAttribute('animation')
        });
      }
      /**
       * @property onDeviceBackButton
       * @type {Object}
       * @description
       *   [en]Back-button handler.[/en]
       *   [ja]バックボタンハンドラ。[/ja]
       */

    }, {
      key: "_compile",
      value: function _compile() {
        this.style.display = 'none';
        this.style.zIndex = 10001;
        this.classList.add(defaultClassName$8);

        if (!util$4.findChild(this, '.modal__content')) {
          var content = document.createElement('div');
          content.classList.add('modal__content');

          while (this.childNodes[0]) {
            var node = this.childNodes[0];
            this.removeChild(node);
            content.insertBefore(node, null);
          }

          this.appendChild(content);
        }

        ModifierUtil.initModifier(this, this._scheme);
      }
    }, {
      key: "_toggleStyle",
      value: function _toggleStyle(shouldShow) {
        this.style.display = shouldShow ? 'table' : 'none';
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ModalElement.prototype), "connectedCallback", this).call(this);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(ModalElement.prototype), "disconnectedCallback", this).call(this);
      }
      /**
       * @property visible
       * @type {Boolean}
       * @description
       *   [en]Whether the element is visible or not.[/en]
       *   [ja]要素が見える場合に`true`。[/ja]
       */

      /**
       * @method show
       * @signature show([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"none"` and `"fade"`.[/en]
       *   [ja]アニメーション名を指定します。"none", "fade"のいずれかを指定します。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @param {Function} [options.callback]
       *   [en]This function is called after the modal has been revealed.[/en]
       *   [ja]モーダルが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *   [en]Show modal.[/en]
       *   [ja]モーダルを表示します。[/ja]
       * @return {Promise}
       *   [en]Resolves to the displayed element[/en]
       *   [ja][/ja]
       */

      /**
       * @method toggle
       * @signature toggle([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"none"` and `"fade"`.[/en]
       *   [ja]アニメーション名を指定します。"none", "fade"のいずれかを指定します。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @param {Function} [options.callback]
       *   [en]This function is called after the modal has been revealed.[/en]
       *   [ja]モーダルが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *   [en]Toggle modal visibility.[/en]
       *   [ja]モーダルの表示を切り替えます。[/ja]
       */

      /**
       * @method hide
       * @signature hide([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"none"` and `"fade"`.[/en]
       *   [ja]アニメーション名を指定します。"none", "fade"のいずれかを指定します。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @param {Function} [options.callback]
       *   [en]This function is called after the modal has been revealed.[/en]
       *   [ja]モーダルが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *   [en]Hide modal.[/en]
       *   [ja]モーダルを非表示にします。[/ja]
       * @return {Promise}
       *   [en]Resolves to the hidden element[/en]
       *   [ja][/ja]
       */

    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'class') {
          util$4.restoreClass(this, defaultClassName$8, scheme$e);
        } else {
          _get(_getPrototypeOf(ModalElement.prototype), "attributeChangedCallback", this).call(this, name, last, current);
        }
      }
      /**
       * @param {String} name
       * @param {Function} Animator
       */

    }], [{
      key: "observedAttributes",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ModalElement), "observedAttributes", this)), ['class']);
      }
    }, {
      key: "registerAnimator",
      value: function registerAnimator(name, Animator) {
        if (!(Animator.prototype instanceof ModalAnimator)) {
          util$4.throwAnimator('Modal');
        }

        _animatorDict$4[name] = Animator;
      }
    }, {
      key: "animators",
      get: function get() {
        return _animatorDict$4;
      }
    }, {
      key: "ModalAnimator",
      get: function get() {
        return ModalAnimator;
      }
    }]);

    return ModalElement;
  }(BaseDialogElement);
  onsElements.Modal = ModalElement;
  customElements.define('ons-modal', ModalElement);

  var widthToPx = function widthToPx(width) {
    var _ref = [parseInt(width, 10), /px/.test(width)],
        value = _ref[0],
        px = _ref[1];
    return px ? value : Math.round(document.body.offsetWidth * value / 100);
  };

  var SwipeReveal = /*#__PURE__*/function () {
    function SwipeReveal(params) {
      var _this = this;

      _classCallCheck(this, SwipeReveal);

      'element ignoreSwipe isInitialState onDragCallback swipeMax swipeMin swipeMid'.split(/\s+/).forEach(function (key) {
        return _this[key] = params[key];
      });
      this.elementHandler = params.elementHandler || params.element;

      this.getThreshold = params.getThreshold || function () {
        return .5;
      };

      this.getSide = params.getSide || function () {
        return 'left';
      };

      this.handleGesture = this.handleGesture.bind(this);
      this._shouldFixScroll = util$4.globals.actualMobileOS === 'ios';
    }

    _createClass(SwipeReveal, [{
      key: "update",
      value: function update() {
        var swipeable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element.hasAttribute('swipeable');

        if (!this.gestureDetector) {
          this.gestureDetector = new GestureDetector(this.elementHandler, {
            dragMinDistance: 1,
            passive: !this._shouldFixScroll
          });
        }

        var action = swipeable ? 'on' : 'off';
        this.gestureDetector[action]('drag dragstart dragend', this.handleGesture);
      }
    }, {
      key: "handleGesture",
      value: function handleGesture(e) {
        if (e.gesture) {
          if (e.type === 'dragstart') {
            this.onDragStart(e);
          } else if (!this._ignoreDrag) {
            e.type === 'dragend' ? this.onDragEnd(e) : this.onDrag(e);
          }
        }
      }
    }, {
      key: "onDragStart",
      value: function onDragStart(event) {
        var _this2 = this;

        var getDistance = function getDistance() {
          return _this2.getSide() === 'left' ? event.gesture.center.clientX : window.innerWidth - event.gesture.center.clientX;
        };

        this._ignoreDrag = event.consumed || !util$4.isValidGesture(event) || this.ignoreSwipe(event, getDistance());

        if (!this._ignoreDrag) {
          event.consume && event.consume();
          event.consumed = true;
          this._width = widthToPx(this.element.style.width || '100%');
          this._startDistance = this._distance = !(this.isInitialState instanceof Function) || this.isInitialState() ? 0 : this._width;
          util$4.iosPreventScroll(this.gestureDetector);
        }
      }
    }, {
      key: "onDrag",
      value: function onDrag(event) {
        event.stopPropagation();
        var delta = this.getSide() === 'left' ? event.gesture.deltaX : -event.gesture.deltaX;
        var distance = Math.max(0, Math.min(this._width, this._startDistance + delta));

        if (distance !== this._distance) {
          this._distance = distance;
          this.swipeMid(this._distance, this._width);
        }
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd(event) {
        event.stopPropagation();
        var direction = event.gesture.interimDirection;
        var isSwipeMax = this.getSide() !== direction && this._distance > this._width * this.getThreshold();
        isSwipeMax ? this.swipeMax() : this.swipeMin();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.gestureDetector && this.gestureDetector.dispose();
        this.gestureDetector = this.element = this.elementHandler = null;
      }
    }]);

    return SwipeReveal;
  }();

  var NavigatorAnimator = /*#__PURE__*/function (_BaseAnimator) {
    _inherits(NavigatorAnimator, _BaseAnimator);

    var _super = _createSuper(NavigatorAnimator);

    /**
     * @param {Object} options
     * @param {String} options.timing
     * @param {Number} options.duration
     * @param {Number} options.delay
     */
    function NavigatorAnimator(options) {
      _classCallCheck(this, NavigatorAnimator);

      options = util$4.extend({
        timing: 'linear',
        duration: '0.4',
        delay: '0'
      }, options || {});
      return _super.call(this, options);
    }

    _createClass(NavigatorAnimator, [{
      key: "push",
      value: function push(enterPage, leavePage, callback) {
        callback();
      }
    }, {
      key: "pop",
      value: function pop(enterPage, leavePage, callback) {
        callback();
      }
    }, {
      key: "block",
      value: function block(page) {
        var blocker = util$4.createElement("\n      <div style=\"position: absolute; background-color: transparent; width: 100%; height: 100%; z-index: 100000\"></div>\n    ");
        page.parentNode.appendChild(blocker);
        return function () {
          return blocker.remove();
        };
      }
    }]);

    return NavigatorAnimator;
  }(BaseAnimator);

  var _excluded$1 = ["durationRestore", "durationSwipe", "timingSwipe"];
  /**
   * Abstract swipe animator for iOS navigator transition.
   */

  var IOSSwipeNavigatorAnimator = /*#__PURE__*/function (_NavigatorAnimator) {
    _inherits(IOSSwipeNavigatorAnimator, _NavigatorAnimator);

    var _super = _createSuper(IOSSwipeNavigatorAnimator);

    function IOSSwipeNavigatorAnimator() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$durationRestore = _ref.durationRestore,
          durationRestore = _ref$durationRestore === void 0 ? 0.1 : _ref$durationRestore,
          _ref$durationSwipe = _ref.durationSwipe,
          durationSwipe = _ref$durationSwipe === void 0 ? 0.15 : _ref$durationSwipe,
          _ref$timingSwipe = _ref.timingSwipe,
          timingSwipe = _ref$timingSwipe === void 0 ? 'linear' : _ref$timingSwipe,
          rest = _objectWithoutProperties(_ref, _excluded$1);

      _classCallCheck(this, IOSSwipeNavigatorAnimator);

      _this = _super.call(this, _objectSpread2({}, rest));

      if (_this.constructor === IOSSwipeNavigatorAnimator) {
        util$4.throwAbstract();
      }

      _this.durationRestore = durationRestore;
      _this.durationSwipe = durationSwipe;
      _this.timingSwipe = timingSwipe;
      _this.optSwipe = {
        timing: timingSwipe,
        duration: durationSwipe
      };
      _this.optRestore = {
        timing: timingSwipe,
        duration: durationRestore
      };
      _this.swipeShadow = util$4.createElement("<div style=\"position: absolute; height: 100%; width: 12px; right: 100%; top: 0; bottom: 0; z-index: -1;" + "background: linear-gradient(to right, transparent 0, rgba(0,0,0,.04) 40%, rgba(0,0,0,.12) 80%, rgba(0,0,0,.16) 100%);\"></div>");
      _this.isDragStart = true;
      return _this;
    }

    _createClass(IOSSwipeNavigatorAnimator, [{
      key: "_decompose",
      value: function _decompose() {
        util$4.throwMember();
      }
    }, {
      key: "_shouldAnimateToolbar",
      value: function _shouldAnimateToolbar() {
        util$4.throwMember();
      }
    }, {
      key: "_calculateDelta",
      value: function _calculateDelta() {
        util$4.throwMember();
      }
    }, {
      key: "_dragStartSetup",
      value: function _dragStartSetup(enterPage, leavePage) {
        this.isDragStart = false; // Avoid content clicks

        this.unblock = _get(_getPrototypeOf(IOSSwipeNavigatorAnimator.prototype), "block", this).call(this, leavePage); // Mask

        enterPage.parentElement.insertBefore(this.backgroundMask, enterPage); // Decomposition

        this.target = {
          enter: util$4.findToolbarPage(enterPage) || enterPage,
          leave: util$4.findToolbarPage(leavePage) || leavePage
        };
        this.decomp = {
          enter: this._decompose(this.target.enter),
          leave: this._decompose(this.target.leave)
        }; // Animation values

        this.delta = this._calculateDelta(leavePage, this.decomp.leave);
        this.shouldAnimateToolbar = this._shouldAnimateToolbar(this.target.enter, this.target.leave); // Shadow && styles

        if (this.shouldAnimateToolbar) {
          this.swipeShadow.style.top = this.decomp.leave.toolbar.offsetHeight + 'px';
          this.target.leave.appendChild(this.swipeShadow);

          this._saveStyle(this.target.enter, this.target.leave);
        } else {
          leavePage.appendChild(this.swipeShadow);

          this._saveStyle(enterPage, leavePage);
        }

        leavePage.classList.add('overflow-visible');
        this.overflowElement = leavePage;
        this.decomp.leave.content.classList.add('content-swiping');
      }
    }, {
      key: "translate",
      value: function translate(distance, maxWidth, enterPage, leavePage) {
        this.isSwiping = true;

        if (enterPage.style.display === 'none') {
          enterPage.style.display = '';
        }

        if (this.isDragStart) {
          this.maxWidth = maxWidth;

          this._dragStartSetup(enterPage, leavePage);
        }

        var swipeRatio = (distance - maxWidth) / maxWidth;

        if (this.shouldAnimateToolbar) {
          Animit.runAll(
          /* Enter page */
          Animit([this.decomp.enter.content, this.decomp.enter.bottomToolbar, this.decomp.enter.background]).queue({
            transform: "translate3d(".concat(swipeRatio * 25, "%, 0, 0)"),
            opacity: 1 + swipeRatio * 10 / 100 // 0.9 -> 1

          }), Animit(this.decomp.enter.toolbarCenter).queue({
            transform: "translate3d(".concat(this.delta.title * swipeRatio, "px, 0, 0)"),
            opacity: 1 + swipeRatio // 0 -> 1

          }), Animit(this.decomp.enter.backButtonLabel).queue({
            opacity: 1 + swipeRatio * 10 / 100,
            // 0.9 -> 1
            transform: "translate3d(".concat(this.delta.label * swipeRatio, "px, 0, 0)")
          }), Animit(this.decomp.enter.other).queue({
            opacity: 1 + swipeRatio // 0 -> 1

          }),
          /* Leave page */
          Animit([this.decomp.leave.content, this.decomp.leave.bottomToolbar, this.decomp.leave.background, this.swipeShadow]).queue({
            transform: "translate3d(".concat(distance, "px, 0, 0)")
          }), Animit(this.decomp.leave.toolbar).queue({
            opacity: -1 * swipeRatio // 1 -> 0

          }), Animit(this.decomp.leave.toolbarCenter).queue({
            transform: "translate3d(".concat((1 + swipeRatio) * 125, "%, 0, 0)")
          }), Animit(this.decomp.leave.backButtonLabel).queue({
            opacity: -1 * swipeRatio,
            // 1 -> 0
            transform: "translate3d(".concat(this.delta.title * (1 + swipeRatio), "px, 0, 0)")
          }),
          /* Other */
          Animit(this.swipeShadow).queue({
            opacity: -1 * swipeRatio // 1 -> 0

          }));
        } else {
          Animit.runAll(Animit(leavePage).queue({
            transform: "translate3d(".concat(distance, "px, 0, 0)")
          }), Animit(enterPage).queue({
            transform: "translate3d(".concat(swipeRatio * 25, "%, 0, 0)"),
            opacity: 1 + swipeRatio * 10 / 100 // 0.9 -> 1

          }), Animit(this.swipeShadow).queue({
            opacity: -1 * swipeRatio // 1 -> 0

          }));
        }
      }
    }, {
      key: "restore",
      value: function restore(enterPage, leavePage, callback) {
        var _this2 = this;

        if (this.isDragStart) {
          return;
        }

        if (this.shouldAnimateToolbar) {
          Animit.runAll(
          /* Enter page */
          Animit([this.decomp.enter.content, this.decomp.enter.bottomToolbar, this.decomp.enter.background]).queue({
            transform: 'translate3d(-25%, 0, 0)',
            opacity: 0.9
          }, this.optRestore), Animit(this.decomp.enter.toolbarCenter).queue({
            transform: "translate3d(-".concat(this.delta.title, "px, 0, 0)"),
            transition: "opacity ".concat(this.durationRestore, "s linear, transform ").concat(this.durationRestore, "s ").concat(this.timingSwipe),
            opacity: 0
          }), Animit(this.decomp.enter.backButtonLabel).queue({
            transform: "translate3d(-".concat(this.delta.label, "px, 0, 0)")
          }, this.optRestore), Animit(this.decomp.enter.other).queue({
            opacity: 0
          }, this.optRestore),
          /* Leave page */
          Animit([this.decomp.leave.content, this.decomp.leave.bottomToolbar, this.decomp.leave.background, this.swipeShadow]).queue({
            transform: "translate3d(0, 0, 0)"
          }, this.optRestore), Animit(this.decomp.leave.toolbar).queue({
            opacity: 1
          }, this.optRestore), Animit(this.decomp.leave.toolbarCenter).queue({
            transform: "translate3d(0, 0, 0)"
          }, this.optRestore), Animit(this.decomp.leave.backButtonLabel).queue({
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
            transition: "opacity ".concat(this.durationRestore, "s linear, transform ").concat(this.durationRestore, "s ").concat(this.timingSwipe)
          }),
          /* Other */
          Animit(this.swipeShadow).queue({
            opacity: 0
          }, this.optRestore).queue(function (done) {
            _this2._reset(_this2.target.enter, _this2.target.leave);

            enterPage.style.display = 'none';
            callback && callback();
            done();
          }));
        } else {
          Animit.runAll(Animit(enterPage).queue({
            transform: 'translate3D(-25%, 0, 0)',
            opacity: 0.9
          }, this.optRestore), Animit(leavePage).queue({
            transform: 'translate3D(0, 0, 0)'
          }, this.optRestore).queue(function (done) {
            _this2._reset(enterPage, leavePage);

            enterPage.style.display = 'none';
            callback && callback();
            done();
          }));
        }
      }
    }, {
      key: "popSwipe",
      value: function popSwipe(enterPage, leavePage, callback) {
        var _this3 = this;

        if (this.isDragStart) {
          return;
        }

        if (this.shouldAnimateToolbar) {
          Animit.runAll(
          /* Enter page */
          Animit([this.decomp.enter.content, this.decomp.enter.bottomToolbar, this.decomp.enter.background]).queue({
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
          }, this.optSwipe), Animit(this.decomp.enter.toolbarCenter).queue({
            transform: "translate3d(0, 0, 0)",
            transition: "opacity ".concat(this.durationSwipe, "s linear, transform ").concat(this.durationSwipe, "s ").concat(this.timingSwipe),
            opacity: 1
          }), Animit(this.decomp.enter.backButtonLabel).queue({
            transform: "translate3d(0, 0, 0)"
          }, this.optSwipe), Animit(this.decomp.enter.other).queue({
            opacity: 1
          }, this.optSwipe),
          /* Leave page */
          Animit([this.decomp.leave.content, this.decomp.leave.bottomToolbar, this.decomp.leave.background]).queue({
            transform: "translate3d(100%, 0, 0)"
          }, this.optSwipe), Animit(this.decomp.leave.toolbar).queue({
            opacity: 0
          }, this.optSwipe), Animit(this.decomp.leave.toolbarCenter).queue({
            transform: "translate3d(125%, 0, 0)"
          }, this.optSwipe), Animit(this.decomp.leave.backButtonLabel).queue({
            opacity: 0,
            transform: "translate3d(".concat(this.delta.title, "px, 0, 0)"),
            transition: "opacity ".concat(this.durationSwipe, "s linear, transform ").concat(this.durationSwipe, "s ").concat(this.timingSwipe)
          }),
          /* Other */
          Animit(this.swipeShadow).queue({
            opacity: 0,
            transform: "translate3d(".concat(this.maxWidth, "px, 0, 0)")
          }, this.optSwipe).queue(function (done) {
            _this3._reset(_this3.target.enter, _this3.target.leave);

            callback && callback();
            done();
          }));
        } else {
          Animit.runAll(Animit(enterPage).queue({
            transform: 'translate3D(0, 0, 0)',
            opacity: 1.0
          }, this.optSwipe), Animit(leavePage).queue({
            transform: 'translate3D(100%, 0, 0)'
          }, this.optSwipe).queue(function (done) {
            _this3._reset(enterPage, leavePage);

            callback && callback();
            done();
          }));
        }
      }
    }, {
      key: "_saveStyle",
      value: function _saveStyle() {
        var _this4 = this;

        this._savedStyle = new WeakMap();

        var save = function save(el) {
          return _this4._savedStyle.set(el, el.getAttribute('style'));
        };

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        args.forEach(save);
        Object.keys(this.decomp).forEach(function (p) {
          Object.keys(_this4.decomp[p]).forEach(function (k) {
            (_this4.decomp[p][k] instanceof Array ? _this4.decomp[p][k] : [_this4.decomp[p][k]]).forEach(save);
          });
        });
      }
    }, {
      key: "_restoreStyle",
      value: function _restoreStyle() {
        var _this5 = this;

        var restore = function restore(el) {
          _this5._savedStyle.get(el) === null ? el.removeAttribute('style') : el.setAttribute('style', _this5._savedStyle.get(el));

          _this5._savedStyle.delete(el);
        };

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        args.forEach(restore);
        Object.keys(this.decomp).forEach(function (p) {
          Object.keys(_this5.decomp[p]).forEach(function (k) {
            (_this5.decomp[p][k] instanceof Array ? _this5.decomp[p][k] : [_this5.decomp[p][k]]).forEach(restore);
          });
        });
      }
    }, {
      key: "_reset",
      value: function _reset() {
        this.isSwiping = false;
        this._savedStyle && this._restoreStyle.apply(this, arguments);
        this.unblock && this.unblock();
        this.swipeShadow.remove();
        this.backgroundMask.remove();
        this.overflowElement.classList.remove('overflow-visible');
        this.decomp.leave.content.classList.remove('content-swiping');
        this.decomp = this.target = this.overflowElement = this._savedStyle = null;
        this.isDragStart = true;
      }
    }], [{
      key: "swipeable",
      get: function get() {
        return true;
      }
    }]);

    return IOSSwipeNavigatorAnimator;
  }(NavigatorAnimator);

  var _excluded = ["timing", "delay", "duration"];

  var translate3d = function translate3d() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return "translate3d(".concat(x, ", ").concat(y, ", ").concat(z, ")");
  };
  /**
   * Slide animator for navigator transition like iOS's screen slide transition.
   */


  var IOSSlideNavigatorAnimator = /*#__PURE__*/function (_IOSSwipeNavigatorAni) {
    _inherits(IOSSlideNavigatorAnimator, _IOSSwipeNavigatorAni);

    var _super = _createSuper(IOSSlideNavigatorAnimator);

    function IOSSlideNavigatorAnimator() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'cubic-bezier(0.3, .4, 0, .9)' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.4 : _ref$duration,
          rest = _objectWithoutProperties(_ref, _excluded);

      _classCallCheck(this, IOSSlideNavigatorAnimator);

      _this = _super.call(this, _objectSpread2({
        timing: timing,
        delay: delay,
        duration: duration
      }, rest));
      _this.backgroundMask = util$4.createElement("<div style=\"position: absolute; width: 100%; height: 100%;" + "background-color: black; z-index: 2\"></div>");
      return _this;
    }

    _createClass(IOSSlideNavigatorAnimator, [{
      key: "_decompose",
      value: function _decompose(page) {
        var toolbar = page._getToolbarElement();

        var left = toolbar._getToolbarLeftItemsElement();

        var right = toolbar._getToolbarRightItemsElement();

        var excludeBackButton = function excludeBackButton(elements) {
          var result = [];

          for (var i = 0; i < elements.length; i++) {
            if (elements[i].nodeName.toLowerCase() !== 'ons-back-button') {
              result.push(elements[i]);
            }
          }

          return result;
        };

        var other = [].concat(left.children.length === 0 ? left : excludeBackButton(left.children)).concat(right.children.length === 0 ? right : excludeBackButton(right.children));
        return {
          toolbarCenter: toolbar._getToolbarCenterItemsElement(),
          backButtonIcon: toolbar._getToolbarBackButtonIconElement(),
          backButtonLabel: toolbar._getToolbarBackButtonLabelElement(),
          other: other,
          content: page._getContentElement(),
          background: page._getBackgroundElement(),
          toolbar: toolbar,
          bottomToolbar: page._getBottomToolbarElement()
        };
      }
    }, {
      key: "_shouldAnimateToolbar",
      value: function _shouldAnimateToolbar(enterPage, leavePage) {
        var toolbars = enterPage._canAnimateToolbar() && leavePage._canAnimateToolbar();

        var enterToolbar = enterPage._getToolbarElement();

        var leaveToolbar = leavePage._getToolbarElement();

        var isStatic = enterToolbar.hasAttribute('static') || leaveToolbar.hasAttribute('static');
        var isMaterial = util$4.hasModifier(enterToolbar, 'material') || util$4.hasModifier(leaveToolbar, 'material');
        var isTransparent = util$4.hasModifier(enterToolbar, 'transparent') || util$4.hasModifier(leaveToolbar, 'transparent');
        return toolbars && !isStatic && !isMaterial && !isTransparent;
      }
    }, {
      key: "_calculateDelta",
      value: function _calculateDelta(element, decomposition) {
        var title, label;
        var pageRect = element.getBoundingClientRect();

        if (decomposition.backButtonLabel.classList.contains('back-button__label')) {
          var labelRect = decomposition.backButtonLabel.getBoundingClientRect();
          title = Math.round(pageRect.width / 2 - labelRect.width / 2 - labelRect.left);
        } else {
          title = Math.round(pageRect.width / 2 * 0.6);
        }

        if (decomposition.backButtonIcon.classList.contains('back-button__icon')) {
          label = decomposition.backButtonIcon.getBoundingClientRect().right - 2;
        }

        return {
          title: title,
          label: label
        };
      }
      /**
       * @param {Object} enterPage
       * @param {Object} leavePage
       * @param {Function} callback
       */

    }, {
      key: "push",
      value: function push(enterPage, leavePage, callback) {
        var _this2 = this;

        this.backgroundMask.remove();
        leavePage.parentNode.insertBefore(this.backgroundMask, leavePage);

        var unblock = _get(_getPrototypeOf(IOSSlideNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        contentReady(enterPage, function () {
          var enterPageTarget = util$4.findToolbarPage(enterPage) || enterPage;
          var leavePageTarget = util$4.findToolbarPage(leavePage) || leavePage;

          var enterPageDecomposition = _this2._decompose(enterPageTarget);

          var leavePageDecomposition = _this2._decompose(leavePageTarget);

          var delta = _this2._calculateDelta(leavePage, enterPageDecomposition);

          var shouldAnimateToolbar = _this2._shouldAnimateToolbar(enterPageTarget, leavePageTarget);

          if (shouldAnimateToolbar) {
            Animit.runAll(Animit([enterPageDecomposition.content, enterPageDecomposition.bottomToolbar, enterPageDecomposition.background], _this2.def).default({
              transform: translate3d('100%')
            }, {
              transform: translate3d()
            }), Animit(enterPageDecomposition.toolbar, _this2.def).default({
              opacity: 0
            }, {
              opacity: 1
            }), Animit(enterPageDecomposition.toolbarCenter, _this2.def).default({
              transform: translate3d('125%'),
              opacity: 1
            }, {
              transform: translate3d(),
              opacity: 1
            }), Animit(enterPageDecomposition.backButtonLabel, _this2.def).default({
              transform: translate3d("".concat(delta.title, "px")),
              opacity: 0
            }, {
              transform: translate3d(),
              opacity: 1,
              transition: "opacity ".concat(_this2.duration, "s linear, transform ").concat(_this2.duration, "s ").concat(_this2.timing)
            }), Animit(enterPageDecomposition.other, _this2.def).default({
              opacity: 0
            }, {
              css: {
                opacity: 1
              },
              timing: 'linear'
            }), Animit([leavePageDecomposition.content, leavePageDecomposition.bottomToolbar, leavePageDecomposition.background], _this2.def).default({
              transform: translate3d(),
              opacity: 1
            }, {
              transform: translate3d('-25%'),
              opacity: 0.9
            }).queue(function (done) {
              _this2.backgroundMask.remove();

              unblock();
              callback();
              done();
            }), Animit(leavePageDecomposition.toolbarCenter, _this2.def).default({
              transform: translate3d(),
              opacity: 1
            }, {
              transform: translate3d("-".concat(delta.title, "px")),
              opacity: 0,
              transition: "opacity ".concat(_this2.duration, "s linear, transform ").concat(_this2.duration, "s ").concat(_this2.timing)
            }), Animit(leavePageDecomposition.backButtonLabel, _this2.def).default({
              transform: translate3d(),
              opacity: 1
            }, {
              transform: translate3d("-".concat(delta.label, "px")),
              opacity: 0
            }), Animit(leavePageDecomposition.other, _this2.def).default({
              opacity: 1
            }, {
              css: {
                opacity: 0
              },
              timing: 'linear'
            }));
          } else {
            Animit.runAll(Animit(enterPage, _this2.def).default({
              transform: translate3d('100%')
            }, {
              transform: translate3d()
            }), Animit(leavePage, _this2.def).default({
              transform: translate3d(),
              opacity: 1
            }, {
              transform: translate3d('-25%'),
              opacity: .9
            }).queue(function (done) {
              _this2.backgroundMask.remove();

              unblock();
              callback();
              done();
            }));
          }
        });
      }
      /**
       * @param {Object} enterPage
       * @param {Object} leavePage
       * @param {Function} callback
       */

    }, {
      key: "pop",
      value: function pop(enterPage, leavePage, callback) {
        var _this3 = this;

        if (this.isSwiping) {
          return this.popSwipe(enterPage, leavePage, callback);
        }

        this.backgroundMask.remove();
        enterPage.parentNode.insertBefore(this.backgroundMask, enterPage);

        var unblock = _get(_getPrototypeOf(IOSSlideNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        var enterPageTarget = util$4.findToolbarPage(enterPage) || enterPage;
        var leavePageTarget = util$4.findToolbarPage(leavePage) || leavePage;

        var enterPageDecomposition = this._decompose(enterPageTarget);

        var leavePageDecomposition = this._decompose(leavePageTarget);

        var delta = this._calculateDelta(leavePage, leavePageDecomposition);

        var shouldAnimateToolbar = this._shouldAnimateToolbar(enterPageTarget, leavePageTarget);

        if (shouldAnimateToolbar) {
          Animit.runAll(Animit([enterPageDecomposition.content, enterPageDecomposition.bottomToolbar, enterPageDecomposition.background], this.def).default({
            transform: translate3d('-25%'),
            opacity: .9
          }, {
            transform: translate3d(),
            opacity: 1
          }), Animit(enterPageDecomposition.toolbarCenter, this.def).default({
            transform: translate3d("-".concat(delta.title, "px")),
            opacity: 0
          }, {
            transform: translate3d(),
            opacity: 1,
            transition: "opacity ".concat(this.duration, "s linear, transform ").concat(this.duration, "s ").concat(this.timing)
          }), Animit(enterPageDecomposition.backButtonLabel, this.def).default({
            transform: translate3d("-".concat(delta.label, "px"))
          }, {
            transform: translate3d()
          }), Animit(enterPageDecomposition.other, this.def).default({
            opacity: 0
          }, {
            css: {
              opacity: 1
            },
            timing: 'linear'
          }), Animit([leavePageDecomposition.content, leavePageDecomposition.bottomToolbar, leavePageDecomposition.background], this.def).default({
            transform: translate3d()
          }, {
            transform: translate3d('100%')
          }).wait(0).queue(function (done) {
            _this3.backgroundMask.remove();

            unblock();
            callback();
            done();
          }), Animit(leavePageDecomposition.toolbar, this.def).default({
            opacity: 1
          }, {
            opacity: 0
          }), Animit(leavePageDecomposition.toolbarCenter, this.def).default({
            transform: translate3d()
          }, {
            transform: translate3d('125%')
          }), Animit(leavePageDecomposition.backButtonLabel, this.def).default({
            transform: translate3d(),
            opacity: 1
          }, {
            transform: translate3d("".concat(delta.title, "px")),
            opacity: 0,
            transition: "opacity ".concat(this.duration, "s linear, transform ").concat(this.duration, "s ").concat(this.timing)
          }));
        } else {
          Animit.runAll(Animit(enterPage, this.def).default({
            transform: translate3d('-25%'),
            opacity: .9
          }, {
            transform: translate3d(),
            opacity: 1
          }), Animit(leavePage, this.def).default({
            transform: translate3d()
          }, {
            transform: translate3d('100%')
          }).queue(function (done) {
            _this3.backgroundMask.remove();

            unblock();
            callback();
            done();
          }));
        }
      }
    }]);

    return IOSSlideNavigatorAnimator;
  }(IOSSwipeNavigatorAnimator);

  /**
   * Lift screen transition.
   */

  var IOSLiftNavigatorAnimator = /*#__PURE__*/function (_NavigatorAnimator) {
    _inherits(IOSLiftNavigatorAnimator, _NavigatorAnimator);

    var _super = _createSuper(IOSLiftNavigatorAnimator);

    function IOSLiftNavigatorAnimator() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'cubic-bezier(.1, .7, .1, 1)' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.4 : _ref$duration;

      _classCallCheck(this, IOSLiftNavigatorAnimator);

      _this = _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this.backgroundMask = util$4.createElement('<div style="position: absolute; width: 100%; height: 100%;' + 'background: linear-gradient(black, white);"></div>');
      return _this;
    }
    /**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */


    _createClass(IOSLiftNavigatorAnimator, [{
      key: "push",
      value: function push(enterPage, leavePage, callback) {
        var _this2 = this;

        this.backgroundMask.remove();
        leavePage.parentNode.insertBefore(this.backgroundMask, leavePage);

        var unblock = _get(_getPrototypeOf(IOSLiftNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        Animit.runAll(Animit(enterPage, this.def).default({
          transform: 'translate3D(0, 100%, 0)'
        }, {
          transform: 'translate3D(0, 0, 0)'
        }), Animit(leavePage, this.def).default({
          transform: 'translate3D(0, 0, 0)',
          opacity: 1
        }, {
          transform: 'translate3D(0, -10%, 0)',
          opacity: .9
        }).queue(function (done) {
          _this2.backgroundMask.remove();

          unblock();
          callback();
          done();
        }));
      }
      /**
       * @param {Object} enterPage
       * @param {Object} leavePage
       * @param {Function} callback
       */

    }, {
      key: "pop",
      value: function pop(enterPage, leavePage, callback) {
        var _this3 = this;

        this.backgroundMask.remove();
        enterPage.parentNode.insertBefore(this.backgroundMask, enterPage);

        var unblock = _get(_getPrototypeOf(IOSLiftNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        Animit.runAll(Animit(enterPage, this.def).default({
          transform: 'translate3D(0, -43px, 0)',
          opacity: .9
        }, {
          transform: 'translate3D(0, 0, 0)',
          opacity: 1
        }).queue(function (done) {
          _this3.backgroundMask.remove();

          unblock();
          callback();
          done();
        }), Animit(leavePage, this.def).default({
          transform: 'translate3D(0, 0, 0)'
        }, {
          transform: 'translate3D(0, 100%, 0)'
        }));
      }
    }]);

    return IOSLiftNavigatorAnimator;
  }(NavigatorAnimator);

  var transform = 'translate3d(0, 0, 0)';
  /**
   * Fade-in screen transition.
   */

  var IOSFadeNavigatorAnimator = /*#__PURE__*/function (_NavigatorAnimator) {
    _inherits(IOSFadeNavigatorAnimator, _NavigatorAnimator);

    var _super = _createSuper(IOSFadeNavigatorAnimator);

    function IOSFadeNavigatorAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'linear' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.4 : _ref$duration;

      _classCallCheck(this, IOSFadeNavigatorAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */


    _createClass(IOSFadeNavigatorAnimator, [{
      key: "push",
      value: function push(enterPage, leavePage, callback) {
        var unblock = _get(_getPrototypeOf(IOSFadeNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        Animit.runAll(Animit(enterPage, this.def).default({
          transform: transform,
          opacity: 0
        }, {
          transform: transform,
          opacity: 1
        }).queue(function (done) {
          unblock();
          callback();
          done();
        }));
      }
      /**
       * @param {Object} enterPage
       * @param {Object} leavePage
       * @param {Function} done
       */

    }, {
      key: "pop",
      value: function pop(enterPage, leavePage, callback) {
        var unblock = _get(_getPrototypeOf(IOSFadeNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        Animit.runAll(Animit(leavePage, this.def).default({
          transform: transform,
          opacity: 1
        }, {
          transform: transform,
          opacity: 0
        }).queue(function (done) {
          unblock();
          callback();
          done();
        }));
      }
    }]);

    return IOSFadeNavigatorAnimator;
  }(NavigatorAnimator);

  /**
   * Slide animator for navigator transition.
   */

  var MDSlideNavigatorAnimator = /*#__PURE__*/function (_NavigatorAnimator) {
    _inherits(MDSlideNavigatorAnimator, _NavigatorAnimator);

    var _super = _createSuper(MDSlideNavigatorAnimator);

    function MDSlideNavigatorAnimator() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'cubic-bezier(.1, .7, .4, 1)' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.3 : _ref$duration;

      _classCallCheck(this, MDSlideNavigatorAnimator);

      _this = _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this.blackMaskOpacity = 0.4;
      _this.backgroundMask = util$4.createElement('<div style="position: absolute; width: 100%; height: 100%; z-index: 2;' + 'background-color: black; opacity: 0;"></div>');
      return _this;
    }
    /**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */


    _createClass(MDSlideNavigatorAnimator, [{
      key: "push",
      value: function push(enterPage, leavePage, callback) {
        var _this2 = this;

        this.backgroundMask.remove();
        leavePage.parentElement.insertBefore(this.backgroundMask, leavePage.nextSibling);

        var unblock = _get(_getPrototypeOf(MDSlideNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        Animit.runAll(Animit(this.backgroundMask, this.def).default({
          transform: 'translate3d(0, 0, 0)',
          opacity: 0
        }, {
          opacity: this.blackMaskOpacity
        }).queue(function (done) {
          _this2.backgroundMask.remove();

          done();
        }), Animit(enterPage, this.def).default({
          transform: 'translate3d(100%, 0, 0)'
        }, {
          transform: 'translate3d(0, 0, 0)'
        }), Animit(leavePage, this.def).default({
          transform: 'translate3d(0, 0, 0)'
        }, {
          transform: 'translate3d(-45%, 0, 0)'
        }).queue(function (done) {
          unblock();
          callback();
          done();
        }));
      }
      /**
       * @param {Object} enterPage
       * @param {Object} leavePage
       * @param {Function} callback
       */

    }, {
      key: "pop",
      value: function pop(enterPage, leavePage, callback) {
        var _this3 = this;

        this.backgroundMask.remove();
        enterPage.parentNode.insertBefore(this.backgroundMask, enterPage.nextSibling);

        var unblock = _get(_getPrototypeOf(MDSlideNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        Animit.runAll(Animit(this.backgroundMask, this.def).default({
          transform: 'translate3d(0, 0, 0)',
          opacity: this.blackMaskOpacity
        }, {
          opacity: 0
        }).queue(function (done) {
          _this3.backgroundMask.remove();

          done();
        }), Animit(enterPage, this.def).default({
          transform: 'translate3d(-45%, 0, 0)',
          opacity: .9
        }, {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }), Animit(leavePage, this.def).default({
          transform: 'translate3d(0, 0, 0)'
        }, {
          transform: 'translate3d(100%, 0, 0)'
        }).queue(function (done) {
          unblock();
          callback();
          done();
        }));
      }
    }]);

    return MDSlideNavigatorAnimator;
  }(NavigatorAnimator);

  /**
   * Lift screen transition.
   */

  var MDLiftNavigatorAnimator = /*#__PURE__*/function (_NavigatorAnimator) {
    _inherits(MDLiftNavigatorAnimator, _NavigatorAnimator);

    var _super = _createSuper(MDLiftNavigatorAnimator);

    function MDLiftNavigatorAnimator() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'cubic-bezier(.1, .7, .1, 1)' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0.05 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.4 : _ref$duration;

      _classCallCheck(this, MDLiftNavigatorAnimator);

      _this = _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this.backgroundMask = util$4.createElement('<div style="position: absolute; width: 100%; height: 100%;' + 'background-color: black;"></div>');
      return _this;
    }
    /**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */


    _createClass(MDLiftNavigatorAnimator, [{
      key: "push",
      value: function push(enterPage, leavePage, callback) {
        var _this2 = this;

        this.backgroundMask.remove();
        leavePage.parentNode.insertBefore(this.backgroundMask, leavePage);

        var unblock = _get(_getPrototypeOf(MDLiftNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        var maskClear = Animit(this.backgroundMask).wait(this.delay + this.duration).queue(function (done) {
          _this2.backgroundMask.remove();

          done();
        });
        Animit.runAll(maskClear, Animit(enterPage, this.def).default({
          transform: 'translate3d(0, 100%, 0)'
        }, {
          transform: 'translate3d(0, 0, 0)'
        }), Animit(leavePage, this.def).default({
          opacity: 1
        }, {
          opacity: .4
        }).queue(function (done) {
          unblock();
          callback();
          done();
        }));
      }
      /**
       * @param {Object} enterPage
       * @param {Object} leavePage
       * @param {Function} callback
       */

    }, {
      key: "pop",
      value: function pop(enterPage, leavePage, callback) {
        var _this3 = this;

        this.backgroundMask.remove();
        enterPage.parentNode.insertBefore(this.backgroundMask, enterPage);

        var unblock = _get(_getPrototypeOf(MDLiftNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        Animit.runAll(Animit(this.backgroundMask).wait(this.delay + this.duration).queue(function (done) {
          _this3.backgroundMask.remove();

          done();
        }), Animit(enterPage, this.def).default({
          opacity: .4
        }, {
          opacity: 1
        }).queue(function (done) {
          unblock();
          callback();
          done();
        }), Animit(leavePage, this.def).default({
          transform: 'translate3d(0, 0, 0)'
        }, {
          transform: 'translate3d(0, 100%, 0)'
        }));
      }
    }]);

    return MDLiftNavigatorAnimator;
  }(NavigatorAnimator);

  /**
   * Fade-in + Lift screen transition.
   */

  var MDFadeNavigatorAnimator = /*#__PURE__*/function (_NavigatorAnimator) {
    _inherits(MDFadeNavigatorAnimator, _NavigatorAnimator);

    var _super = _createSuper(MDFadeNavigatorAnimator);

    function MDFadeNavigatorAnimator() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'cubic-bezier(0.4, 0, 0.2, 1)' : _ref$timing,
          _ref$timingPop = _ref.timingPop,
          timingPop = _ref$timingPop === void 0 ? 'cubic-bezier(0.4, 0, 1, 1)' : _ref$timingPop,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.2 : _ref$duration;

      _classCallCheck(this, MDFadeNavigatorAnimator);

      _this = _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this.timingPop = timingPop;
      return _this;
    }
    /**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */


    _createClass(MDFadeNavigatorAnimator, [{
      key: "push",
      value: function push(enterPage, leavePage, callback) {
        var unblock = _get(_getPrototypeOf(MDFadeNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        Animit.runAll(Animit(enterPage, this.def).default({
          transform: 'translate3D(0, 42px, 0)',
          opacity: 0
        }, {
          transform: 'translate3D(0, 0, 0)',
          opacity: 1
        }).queue(function (done) {
          unblock();
          callback();
          done();
        }));
      }
      /**
       * @param {Object} enterPage
       * @param {Object} leavePage
       * @param {Function} done
       */

    }, {
      key: "pop",
      value: function pop(enterPage, leavePage, callback) {
        var unblock = _get(_getPrototypeOf(MDFadeNavigatorAnimator.prototype), "block", this).call(this, enterPage);

        Animit.runAll(Animit(leavePage, this.def).default({
          transform: 'translate3D(0, 0, 0)',
          opacity: 1
        }, {
          css: {
            transform: 'translate3D(0, 38px, 0)',
            opacity: 0
          },
          timing: this.timingPop
        }).queue(function (done) {
          unblock();
          callback();
          done();
        }));
      }
    }]);

    return MDFadeNavigatorAnimator;
  }(NavigatorAnimator);

  var NoneNavigatorAnimator = /*#__PURE__*/function (_NavigatorAnimator) {
    _inherits(NoneNavigatorAnimator, _NavigatorAnimator);

    var _super = _createSuper(NoneNavigatorAnimator);

    function NoneNavigatorAnimator(options) {
      _classCallCheck(this, NoneNavigatorAnimator);

      return _super.call(this, options);
    }

    _createClass(NoneNavigatorAnimator, [{
      key: "push",
      value: function push(enterPage, leavePage, callback) {
        callback();
      }
    }, {
      key: "pop",
      value: function pop(enterPage, leavePage, callback) {
        callback();
      }
    }]);

    return NoneNavigatorAnimator;
  }(NavigatorAnimator);

  var _animatorDict$3 = {
    'default': function _default() {
      return platform.isAndroid() ? MDFadeNavigatorAnimator : IOSSlideNavigatorAnimator;
    },
    'slide': function slide() {
      return platform.isAndroid() ? MDSlideNavigatorAnimator : IOSSlideNavigatorAnimator;
    },
    'lift': function lift() {
      return platform.isAndroid() ? MDLiftNavigatorAnimator : IOSLiftNavigatorAnimator;
    },
    'fade': function fade() {
      return platform.isAndroid() ? MDFadeNavigatorAnimator : IOSFadeNavigatorAnimator;
    },
    'slide-ios': IOSSlideNavigatorAnimator,
    'slide-md': MDSlideNavigatorAnimator,
    'lift-ios': IOSLiftNavigatorAnimator,
    'lift-md': MDLiftNavigatorAnimator,
    'fade-ios': IOSFadeNavigatorAnimator,
    'fade-md': MDFadeNavigatorAnimator,
    'none': NoneNavigatorAnimator
  };
  var rewritables$3 = {
    /**
     * @param {Element} navigatorSideElement
     * @param {Function} callback
     */
    ready: function ready(navigatorElement, callback) {
      callback();
    }
  };

  var verifyPageElement = function verifyPageElement(el) {
    return el.nodeName !== 'ONS-PAGE' && util$4.throw('Only page elements can be children of navigator');
  };
  /**
   * @element ons-navigator
   * @category navigation
   * @description
   *   [en]
   *     A component that provides page stack management and navigation. Stack navigation is the most common navigation pattern for mobile apps.
   *
   *     When a page is pushed on top of the stack it is displayed with a transition animation. When the user returns to the previous page the top page will be popped from the top of the stack and hidden with an opposite transition animation.
   *   [/en]
   *   [ja][/ja]
   * @codepen yrhtv
   * @tutorial vanilla/Reference/navigator
   * @guide lifecycle.html#events
   *   [en]Overview of page events[/en]
   *   [ja]Overview of page events[/ja]
   * @seealso ons-toolbar
   *   [en]The `<ons-toolbar>` component is used to display a toolbar on the top of a page.[/en]
   *   [ja][/ja]
   * @seealso ons-back-button
   *   [en]The `<ons-back-button>` component lets the user return to the previous page.[/en]
   *   [ja][/ja]
   * @example
   * <ons-navigator id="navigator">
   *   <ons-page>
   *     <ons-toolbar>
   *       <div class="center">
   *         Title
   *       </div>
   *     </ons-toolbar>
   *     <p>
   *       <ons-button
   *         onclick="document.getElementById('navigator').pushPage('page.html')">
   *         Push page
   *       </ons-button>
   *     </p>
   *   </ons-page>
   * </ons-navigator>
   *
   * <template id="page.html">
   *   <ons-page>
   *     <ons-toolbar>
   *       <div class="left">
   *         <ons-back-button>Back</ons-back-button>
   *       </div>
   *       <div class="center">
   *         Another page
   *       </div>
   *     </ons-toolbar>
   *   </ons-page>
   * </template>
   */


  var NavigatorElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(NavigatorElement, _BaseElement);

    var _super = _createSuper(NavigatorElement);

    function NavigatorElement() {
      var _this;

      _classCallCheck(this, NavigatorElement);

      _this = _super.call(this);
      _this._isRunning = false;
      _this._initialized = false;
      _this._pageLoader = defaultPageLoader;
      _this._pageMap = new WeakMap();

      _this._updateAnimatorFactory();

      return _this;
    }
    /**
     * @property pageLoader
     * @type {PageLoader}
     * @description
     *   [en]PageLoader instance. It can be overriden to change the way pages are loaded by this element. Useful for lib developers.[/en]
     *   [ja]PageLoaderインスタンスを格納しています。[/ja]
     */


    _createClass(NavigatorElement, [{
      key: "animatorFactory",
      get:
      /**
       * @attribute page
       * @initonly
       * @type {String}
       * @description
       *   [en]First page to show when navigator is initialized.[/en]
       *   [ja]ナビゲーターが初期化された時に表示するページを指定します。[/ja]
       */

      /**
       * @attribute swipeable
       * @type {Boolean}
       * @description
       *   [en]Enable iOS "swipe to pop" feature.[/en]
       *   [ja][/ja]
       */

      /**
       * @attribute swipe-target-width
       * @type {String}
       * @default 20px
       * @description
       *   [en]The width of swipeable area calculated from the edge (in pixels). Use this to enable swipe only when the finger touch on the screen edge.[/en]
       *   [ja]スワイプの判定領域をピクセル単位で指定します。画面の端から指定した距離に達するとページが表示されます。[/ja]
       */

      /**
       * @attribute swipe-threshold
       * @type {Number}
       * @default 0.2
       * @description
       *  [en]Specify how much the page needs to be swiped before popping. A value between `0` and `1`.[/en]
       *  [ja][/ja]
       */

      /**
       * @attribute animation
       * @type {String}
       * @default default
       * @description
       *   [en]
       *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
       *
       *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"` depending on the platform.
       *   [/en]
       *   [ja][/ja]
       */

      /**
       * @attribute animation-options
       * @type {Expression}
       * @description
       *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`[/en]
       *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`[/ja]
       */

      /**
       * @event prepush
       * @description
       *   [en]Fired just before a page is pushed.[/en]
       *   [ja]pageがpushされる直前に発火されます。[/ja]
       * @param {Object} event [en]Event object.[/en]
       * @param {Object} event.navigator
       *   [en]Component object.[/en]
       *   [ja]コンポーネントのオブジェクト。[/ja]
       * @param {Object} event.currentPage
       *   [en]Current page object.[/en]
       *   [ja]現在のpageオブジェクト。[/ja]
       * @param {Function} event.cancel
       *   [en]Call this function to cancel the push.[/en]
       *   [ja]この関数を呼び出すと、push処理がキャンセルされます。[/ja]
       */

      /**
       * @event prepop
       * @description
       *   [en]Fired just before a page is popped.[/en]
       *   [ja]pageがpopされる直前に発火されます。[/ja]
       * @param {Object} event [en]Event object.[/en]
       * @param {Object} event.navigator
       *   [en]Component object.[/en]
       *   [ja]コンポーネントのオブジェクト。[/ja]
       * @param {Object} event.currentPage
       *   [en]Current page object.[/en]
       *   [ja]現在のpageオブジェクト。[/ja]
       * @param {Function} event.cancel
       *   [en]Call this function to cancel the pop.[/en]
       *   [ja]この関数を呼び出すと、pageのpopがキャンセルされます。[/ja]
       */

      /**
       * @event postpush
       * @description
       *   [en]Fired just after a page is pushed.[/en]
       *   [ja]pageがpushされてアニメーションが終了してから発火されます。[/ja]
       * @param {Object} event [en]Event object.[/en]
       * @param {Object} event.navigator
       *   [en]Component object.[/en]
       *   [ja]コンポーネントのオブジェクト。[/ja]
       * @param {Object} event.enterPage
       *   [en]Object of the next page.[/en]
       *   [ja]pushされたpageオブジェクト。[/ja]
       * @param {Object} event.leavePage
       *   [en]Object of the previous page.[/en]
       *   [ja]以前のpageオブジェクト。[/ja]
       */

      /**
       * @event postpop
       * @description
       *   [en]Fired just after a page is popped.[/en]
       *   [ja]pageがpopされてアニメーションが終わった後に発火されます。[/ja]
       * @param {Object} event [en]Event object.[/en]
       * @param {Object} event.navigator
       *   [en]Component object.[/en]
       *   [ja]コンポーネントのオブジェクト。[/ja]
       * @param {Object} event.enterPage
       *   [en]Object of the next page.[/en]
       *   [ja]popされて表示されるページのオブジェクト。[/ja]
       * @param {Object} event.leavePage
       *   [en]Object of the previous page.[/en]
       *   [ja]popされて消えるページのオブジェクト。[/ja]
       */
      function get() {
        return this._animatorFactory;
      }
    }, {
      key: "pageLoader",
      get: function get() {
        return this._pageLoader;
      },
      set: function set(pageLoader) {
        if (!(pageLoader instanceof PageLoader)) {
          util$4.throwPageLoader();
        }

        this._pageLoader = pageLoader;
      }
    }, {
      key: "_getPageTarget",
      value: function _getPageTarget() {
        return this._page || this.getAttribute('page');
      }
      /**
       * @property page
       * @type {*}
       * @description
       *   [en]Specify the page to be loaded during initialization. This value takes precedence over the `page` attribute. Useful for lib developers.[/en]
       *   [ja]初期化時に読み込むページを指定します。`page`属性で指定した値よりも`page`プロパティに指定した値を優先します。[/ja]
       */

    }, {
      key: "page",
      get: function get() {
        return this._page;
      },
      set: function set(page) {
        this._page = page;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        this.onDeviceBackButton = this._onDeviceBackButton.bind(this);

        if (!platform.isAndroid() || this.getAttribute('swipeable') === 'force') {
          var swipeAnimator;
          this._swipe = new SwipeReveal({
            element: this,
            getThreshold: function getThreshold() {
              return Math.max(0.2, parseFloat(_this2.getAttribute('swipe-threshold')) || 0);
            },
            swipeMax: function swipeMax() {
              _this2._onSwipe && _this2._onSwipe(1, {
                duration: swipeAnimator.durationSwipe,
                timing: swipeAnimator.timingSwipe
              });

              _this2[_this2.swipeMax ? 'swipeMax' : 'popPage']({
                animator: swipeAnimator
              });

              swipeAnimator = null;
            },
            swipeMid: function swipeMid(distance, width) {
              _this2._onSwipe && _this2._onSwipe(distance / width);
              swipeAnimator.translate(distance, width, _this2.topPage.previousElementSibling, _this2.topPage);
            },
            swipeMin: function swipeMin() {
              _this2._onSwipe && _this2._onSwipe(0, {
                duration: swipeAnimator.durationRestore,
                timing: swipeAnimator.timingSwipe
              });
              swipeAnimator.restore(_this2.topPage.previousElementSibling, _this2.topPage);
              swipeAnimator = null;
            },
            ignoreSwipe: function ignoreSwipe(event, distance) {
              // Basic conditions
              if (!_this2._isRunning && _this2.children.length > 1) {
                // Area or directional issues
                var area = parseInt(_this2.getAttribute('swipe-target-width') || 25, 10);

                if (event.gesture.direction === 'right' && area > distance) {
                  // Swipes on ons-back-button and its children
                  var isBB = function isBB(el) {
                    return /ons-back-button/i.test(el.tagName);
                  };

                  if (!isBB(event.target) && !util$4.findParent(event.target, isBB, function (p) {
                    return /ons-page/i.test(p.tagName);
                  })) {
                    // Animator is swipeable
                    var animation = (_this2.topPage.pushedOptions || {}).animation || _this2.animatorFactory._animation;
                    var Animator = _animatorDict$3[animation] instanceof Function ? _animatorDict$3[animation].call() : _animatorDict$3[animation];

                    if (typeof Animator !== 'undefined' && Animator.swipeable) {
                      swipeAnimator = new Animator(); // Prepare for the swipe

                      return false;
                    }
                  }
                }
              }

              return true; // Ignore swipe
            }
          });
          this.attributeChangedCallback('swipeable');
        }

        if (this._initialized) {
          return;
        }

        this._initialized = true;
        var deferred = util$4.defer();
        this.loaded = deferred.promise;
        rewritables$3.ready(this, function () {
          var show = !util$4.hasAnyComponentAsParent(_this2);
          var options = {
            animation: 'none',
            show: show
          };

          if (_this2.pages.length === 0 && _this2._getPageTarget()) {
            _this2.pushPage(_this2._getPageTarget(), options).then(function () {
              return deferred.resolve();
            });
          } else if (_this2.pages.length > 0) {
            for (var i = 0; i < _this2.pages.length; i++) {
              verifyPageElement(_this2.pages[i]);
            }

            if (_this2.topPage) {
              contentReady(_this2.topPage, function () {
                return setTimeout(function () {
                  deferred.resolve();
                  show && _this2.topPage._show();

                  _this2._updateLastPageBackButton();
                }, 0);
              });
            }
          } else {
            contentReady(_this2, function () {
              if (_this2.pages.length === 0 && _this2._getPageTarget()) {
                _this2.pushPage(_this2._getPageTarget(), options).then(function () {
                  return deferred.resolve();
                });
              } else {
                deferred.resolve();
              }
            });
          }
        });
      }
    }, {
      key: "_updateAnimatorFactory",
      value: function _updateAnimatorFactory() {
        this._animatorFactory = new AnimatorFactory({
          animators: _animatorDict$3,
          baseClass: NavigatorAnimator,
          baseClassName: 'NavigatorAnimator',
          defaultAnimation: this.getAttribute('animation')
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._backButtonHandler.destroy();

        this._backButtonHandler = null;
        this._swipe && this._swipe.dispose();
        this._swipe = null;
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'animation':
            this._updateAnimatorFactory();

            break;

          case 'swipeable':
            this._swipe && this._swipe.update();
            break;
        }
      }
      /**
       * @method popPage
       * @signature popPage([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]
       *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
       *
       *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
       *   [/en]
       *   [ja][/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @param {Function} [options.callback]
       *   [en]Function that is called when the transition has ended.[/en]
       *   [ja]このメソッドによる画面遷移が終了した際に呼び出される関数オブジェクトを指定します。[/ja]
       * @param {Object} [options.data]
       *   [en]Custom data that will be stored in the new page element.[/en]
       *   [ja][/ja]
       * @param {Number} [options.times]
       *   [en]Number of pages to be popped. Only one animation will be shown.[/en]
       *   [ja][/ja]
       * @return {Promise}
       *   [en]Promise which resolves to the revealed page.[/en]
       *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
       * @description
       *   [en]Pops the current page from the page stack. The previous page will be displayed.[/en]
       *   [ja]現在表示中のページをページスタックから取り除きます。一つ前のページに戻ります。[/ja]
       */

    }, {
      key: "popPage",
      value: function popPage() {
        var _this3 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this$_preparePageAnd = this._preparePageAndOptions(null, options);

        options = _this$_preparePageAnd.options;

        if (util$4.isInteger(options.times) && options.times > 1) {
          this._removePages(options.times);
        }

        var popUpdate = function popUpdate() {
          return new Promise(function (resolve) {
            _this3._pageLoader.unload(_this3.pages[_this3.pages.length - 1]);

            resolve();
          });
        };

        return this._popPage(options, popUpdate);
      }
    }, {
      key: "_popPage",
      value: function _popPage(options) {
        var _this4 = this;

        var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
          return Promise.resolve();
        };

        if (this._isRunning) {
          return Promise.reject('popPage is already running.');
        }

        if (this.pages.length <= 1) {
          return Promise.reject('ons-navigator\'s page stack is empty.');
        }

        if (this._emitPrePopEvent()) {
          return Promise.reject('Canceled in prepop event.');
        }

        var length = this.pages.length;
        this._isRunning = true;
        this.pages[length - 2].updateBackButton(length - 2 > 0);
        return new Promise(function (resolve) {
          var leavePage = _this4.pages[length - 1];
          var enterPage = _this4.pages[length - 2];
          options = util$4.extend({}, _this4.options || {}, options);

          if (options.data) {
            enterPage.data = util$4.extend({}, enterPage.data || {}, options.data || {});
          }

          var done = function done() {
            update().then(function () {
              _this4._isRunning = false;

              enterPage._show();

              util$4.triggerElementEvent(_this4, 'postpop', {
                leavePage: leavePage,
                enterPage: enterPage,
                navigator: _this4
              });
              options.callback && options.callback(enterPage);
              resolve(enterPage);
            });
          };

          leavePage._hide();

          enterPage.style.display = '';

          var animator = options.animator || _this4._animatorFactory.newAnimator(options);

          animator.pop(_this4.pages[length - 2], _this4.pages[length - 1], done);
        }).catch(function () {
          return _this4._isRunning = false;
        });
      }
      /**
       * @method pushPage
       * @signature pushPage(page, [options])
       * @param {String} page
       *   [en]Page URL. Can be either a HTML document or a template defined with the `<template>` tag.[/en]
       *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.page]
       *   [en]Page URL. Only necessary if `page` parameter is null or undefined.[/en]
       *   [ja][/ja]
       * @param {String} [options.pageHTML]
       *   [en]HTML code that will be computed as a new page. Overwrites `page` parameter.[/en]
       *   [ja][/ja]
       * @param {String} [options.animation]
       *   [en]
       *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
       *
       *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
       *   [/en]
       *   [ja][/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
       * @param {Function} [options.callback]
       *   [en]Function that is called when the transition has ended.[/en]
       *   [ja]pushPage()による画面遷移が終了した時に呼び出される関数オブジェクトを指定します。[/ja]
       * @param {Object} [options.data]
       *   [en]Custom data that will be stored in the new page element.[/en]
       *   [ja][/ja]
       * @return {Promise}
       *   [en]Promise which resolves to the pushed page.[/en]
       *   [ja]追加したページを解決するPromiseを返します。[/ja]
       * @description
       *   [en]Pushes the specified page into the stack.[/en]
       *   [ja]指定したpageを新しいページスタックに追加します。新しいページが表示されます。[/ja]
       */

    }, {
      key: "pushPage",
      value: function pushPage(page) {
        var _this5 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _this$_preparePageAnd2 = this._preparePageAndOptions(page, options);

        page = _this$_preparePageAnd2.page;
        options = _this$_preparePageAnd2.options;

        var prepare = function prepare(pageElement) {
          verifyPageElement(pageElement);

          _this5._pageMap.set(pageElement, page);

          pageElement = util$4.extend(pageElement, {
            data: options.data
          });
          pageElement.style.visibility = 'hidden';
        };

        if (options.pageHTML) {
          return this._pushPage(options, function () {
            return new Promise(function (resolve) {
              instantPageLoader.load({
                page: options.pageHTML,
                parent: _this5,
                params: options.data
              }, function (pageElement) {
                prepare(pageElement);
                resolve();
              });
            });
          });
        }

        return this._pushPage(options, function () {
          return new Promise(function (resolve) {
            _this5._pageLoader.load({
              page: page,
              parent: _this5,
              params: options.data
            }, function (pageElement) {
              prepare(pageElement);
              resolve();
            }, function (error) {
              _this5._isRunning = false;
              throw error;
            });
          });
        });
      }
    }, {
      key: "_pushPage",
      value: function _pushPage() {
        var _this6 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
          return Promise.resolve();
        };

        if (this._isRunning) {
          return Promise.reject('pushPage is already running.');
        }

        if (this._emitPrePushEvent()) {
          return Promise.reject('Canceled in prepush event.');
        }

        this._isRunning = true;
        var animationOptions = AnimatorFactory.parseAnimationOptionsString(this.getAttribute('animation-options'));
        options = util$4.extend({}, this.options || {}, {
          animationOptions: animationOptions
        }, options);

        var animator = this._animatorFactory.newAnimator(options);

        return update().then(function () {
          var pageLength = _this6.pages.length;
          var enterPage = _this6.pages[pageLength - 1];
          var leavePage = options.leavePage || _this6.pages[pageLength - 2];
          verifyPageElement(enterPage);
          enterPage.updateBackButton(pageLength > (options._replacePage ? 2 : 1));
          enterPage.pushedOptions = util$4.extend({}, enterPage.pushedOptions || {}, options || {});
          enterPage.data = util$4.extend({}, enterPage.data || {}, options.data || {});
          enterPage.unload = enterPage.unload || options.unload;
          return new Promise(function (resolve) {
            var done = function done() {
              _this6._isRunning = false;
              options.show !== false && setImmediate(function () {
                return enterPage._show();
              });
              util$4.triggerElementEvent(_this6, 'postpush', {
                leavePage: leavePage,
                enterPage: enterPage,
                navigator: _this6
              });

              if (leavePage) {
                leavePage.style.display = 'none';
              }

              options.callback && options.callback(enterPage);
              resolve(enterPage);
            };

            enterPage.style.visibility = '';

            if (leavePage) {
              leavePage._hide();

              animator.push(enterPage, leavePage, done);
            } else {
              done();
            }
          });
        }).catch(function (error) {
          _this6._isRunning = false;
          throw error;
        });
      }
      /**
       * @method replacePage
       * @signature replacePage(page, [options])
       * @return {Promise}
       *   [en]Promise which resolves to the new page.[/en]
       *   [ja]新しいページを解決するPromiseを返します。[/ja]
       * @description
       *   [en]Replaces the current top page with the specified one. Extends `pushPage()` parameters.[/en]
       *   [ja]現在表示中のページをを指定したページに置き換えます。[/ja]
       */

    }, {
      key: "replacePage",
      value: function replacePage(page) {
        var _this7 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.pushPage(page, options).then(function (resolvedValue) {
          if (_this7.pages.length > 1) {
            _this7._pageLoader.unload(_this7.pages[_this7.pages.length - 2]);
          }

          _this7._updateLastPageBackButton();

          return Promise.resolve(resolvedValue);
        });
      }
      /**
       * @method insertPage
       * @signature insertPage(index, page, [options])
       * @param {Number} index
       *   [en]The index where it should be inserted.[/en]
       *   [ja]スタックに挿入する位置のインデックスを指定します。[/ja]
       * @return {Promise}
       *   [en]Promise which resolves to the inserted page.[/en]
       *   [ja]指定したページを解決するPromiseを返します。[/ja]
       * @description
       *   [en]Insert the specified page into the stack with at a position defined by the `index` argument. Extends `pushPage()` parameters.[/en]
       *   [ja]指定したpageをページスタックのindexで指定した位置に追加します。[/ja]
       */

    }, {
      key: "insertPage",
      value: function insertPage(index, page) {
        var _this8 = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var _this$_preparePageAnd3 = this._preparePageAndOptions(page, options);

        page = _this$_preparePageAnd3.page;
        options = _this$_preparePageAnd3.options;
        index = this._normalizeIndex(index);

        if (index >= this.pages.length) {
          return this.pushPage(page, options);
        }

        page = typeof options.pageHTML === 'string' ? options.pageHTML : page;
        var loader = typeof options.pageHTML === 'string' ? instantPageLoader : this._pageLoader;
        return new Promise(function (resolve) {
          loader.load({
            page: page,
            parent: _this8
          }, function (pageElement) {
            verifyPageElement(pageElement);

            _this8._pageMap.set(pageElement, page);

            pageElement = util$4.extend(pageElement, {
              data: options.data,
              pushedOptions: options
            });
            options.animationOptions = util$4.extend({}, AnimatorFactory.parseAnimationOptionsString(_this8.getAttribute('animation-options')), options.animationOptions || {});
            pageElement.style.display = 'none';

            _this8.insertBefore(pageElement, _this8.pages[index]);

            _this8.topPage.updateBackButton(true);

            setTimeout(function () {
              pageElement = null;
              resolve(_this8.pages[index]);
            }, 1000 / 60);
          });
        });
      }
      /**
       * @method removePage
       * @signature removePage(index, [options])
       * @param {Number} index
       *   [en]The index where it should be removed.[/en]
       *   [ja]スタックから削除するページのインデックスを指定します。[/ja]
       * @return {Promise}
       *   [en]Promise which resolves to the revealed page.[/en]
       *   [ja]削除によって表示されたページを解決するPromiseを返します。[/ja]
       * @description
       *   [en]Remove the specified page at a position in the stack defined by the `index` argument. Extends `popPage()` parameters.[/en]
       *   [ja]指定したインデックスにあるページを削除します。[/ja]
       */

    }, {
      key: "removePage",
      value: function removePage(index) {
        var _this9 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        index = this._normalizeIndex(index);

        if (index < this.pages.length - 1) {
          return new Promise(function (resolve) {
            var leavePage = _this9.pages[index];
            var enterPage = _this9.topPage;

            _this9._pageMap.delete(leavePage);

            _this9._pageLoader.unload(leavePage);

            if (_this9.pages.length === 1) {
              // edge case
              _this9.topPage.updateBackButton(false);
            }

            resolve(enterPage);
          });
        } else {
          return this.popPage(options);
        }
      }
      /**
       * @method resetToPage
       * @signature resetToPage(page, [options])
       * @return {Promise}
       *   [en]Promise which resolves to the new top page.[/en]
       *   [ja]新しいトップページを解決するPromiseを返します。[/ja]
       * @param {Boolean} [options.pop]
       *   [en]Performs 'pop' effect if `true` instead of 'push' or none. This also sets `options.animation` value to `default` instead of `none`.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Clears page stack and adds the specified page to the stack. Extends `pushPage()` parameters.[/en]
       *   [ja]ページスタックをリセットし、指定したページを表示します。[/ja]
       */

    }, {
      key: "resetToPage",
      value: function resetToPage(page) {
        var _this10 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _this$_preparePageAnd4 = this._preparePageAndOptions(page, options);

        page = _this$_preparePageAnd4.page;
        options = _this$_preparePageAnd4.options;

        if (!options.animator && !options.animation && !options.pop) {
          options.animation = 'none';
        }

        if (!options.page && !options.pageHTML && this._getPageTarget()) {
          page = options.page = this._getPageTarget();
        }

        if (options.pop) {
          this._removePages();

          return this.insertPage(0, page, {
            data: options.data
          }).then(function () {
            return _this10.popPage(options);
          });
        } // Tip: callback runs before resolved promise


        var callback = options.callback;

        options.callback = function (newPage) {
          _this10._removePages();

          newPage.updateBackButton(false);
          callback && callback(newPage);
        };

        return this.pushPage(page, options);
      }
      /**
       * @method bringPageTop
       * @signature bringPageTop(item, [options])
       * @param {String|Number} item
       *   [en]Page URL or index of an existing page in navigator's stack.[/en]
       *   [ja]ページのURLかもしくはons-navigatorのページスタックのインデックス値を指定します。[/ja]
       * @return {Promise}
       *   [en]Promise which resolves to the new top page.[/en]
       *   [ja]新しいトップページを解決するPromiseを返します。[/ja]
       * @description
       *   [en]Brings the given page to the top of the page stack if it already exists or pushes it into the stack if doesn't. Extends `pushPage()` parameters.[/en]
       *   [ja]指定したページをページスタックの一番上に移動します。もし指定したページが無かった場合新しくpushされます。[/ja]
       */

    }, {
      key: "bringPageTop",
      value: function bringPageTop(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (['number', 'string'].indexOf(_typeof(item)) === -1) {
          util$4.throw('First argument must be a page name or the index of an existing page. You supplied ' + item);
        }

        var index = typeof item === 'number' ? this._normalizeIndex(item) : this._lastIndexOfPage(item);
        var page = this.pages[index];

        if (index < 0) {
          return this.pushPage(item, options);
        }

        var _this$_preparePageAnd5 = this._preparePageAndOptions(page, options);

        options = _this$_preparePageAnd5.options;

        if (index === this.pages.length - 1) {
          return Promise.resolve(page);
        }

        if (!page) {
          util$4.throw('Failed to find item ' + item);
        }

        if (this._isRunning) {
          return Promise.reject('pushPage is already running.');
        }

        if (this._emitPrePushEvent()) {
          return Promise.reject('Canceled in prepush event.');
        }

        page.style.display = '';
        page.style.visibility = 'hidden';
        page.parentNode.appendChild(page);
        return this._pushPage(options);
      }
    }, {
      key: "_preparePageAndOptions",
      value: function _preparePageAndOptions(page) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (_typeof(options) != 'object') {
          util$4.throw('options must be an object. You supplied ' + options);
        }

        if ((page === null || page === undefined) && options.page) {
          page = options.page;
        }

        options = util$4.extend({}, this.options || {}, options, {
          page: page
        });
        return {
          page: page,
          options: options
        };
      }
    }, {
      key: "_removePages",
      value: function _removePages(times) {
        var pages = this.pages;
        var until = times === undefined ? 0 : pages.length - times;
        until = until < 0 ? 1 : until;

        for (var i = pages.length - 2; i >= until; i--) {
          this._pageMap.delete(pages[i]);

          this._pageLoader.unload(pages[i]);
        }
      }
    }, {
      key: "_updateLastPageBackButton",
      value: function _updateLastPageBackButton() {
        var index = this.pages.length - 1;

        if (index >= 0) {
          this.pages[index].updateBackButton(index > 0);
        }
      }
    }, {
      key: "_normalizeIndex",
      value: function _normalizeIndex(index) {
        return index >= 0 ? index : Math.abs(this.pages.length + index) % this.pages.length;
      }
    }, {
      key: "_onDeviceBackButton",
      value: function _onDeviceBackButton(event) {
        if (this.pages.length > 1) {
          this.popPage();
        } else {
          event.callParentHandler();
        }
      }
    }, {
      key: "_lastIndexOfPage",
      value: function _lastIndexOfPage(pageName) {
        var index;

        for (index = this.pages.length - 1; index >= 0; index--) {
          if (pageName === this._pageMap.get(this.pages[index])) {
            break;
          }
        }

        return index;
      }
    }, {
      key: "_emitPreEvent",
      value: function _emitPreEvent(name) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var isCanceled = false;
        util$4.triggerElementEvent(this, 'pre' + name, util$4.extend({
          navigator: this,
          currentPage: this.pages[this.pages.length - 1],
          cancel: function cancel() {
            return isCanceled = true;
          }
        }, data));
        return isCanceled;
      }
    }, {
      key: "_emitPrePushEvent",
      value: function _emitPrePushEvent() {
        return this._emitPreEvent('push');
      }
    }, {
      key: "_emitPrePopEvent",
      value: function _emitPrePopEvent() {
        var l = this.pages.length;
        return this._emitPreEvent('pop', {
          leavePage: this.pages[l - 1],
          enterPage: this.pages[l - 2]
        });
      } // TODO: 書き直す

    }, {
      key: "_createPageElement",
      value: function _createPageElement(templateHTML) {
        var pageElement = util$4.createElement(internal$1.normalizePageHTML(templateHTML));
        verifyPageElement(pageElement);
        return pageElement;
      }
      /**
       * @property onDeviceBackButton
       * @type {Object}
       * @description
       *   [en]Back-button handler.[/en]
       *   [ja]バックボタンハンドラ。[/ja]
       */

    }, {
      key: "onDeviceBackButton",
      get: function get() {
        return this._backButtonHandler;
      },
      set: function set(callback) {
        if (this._backButtonHandler) {
          this._backButtonHandler.destroy();
        }

        this._backButtonHandler = deviceBackButtonDispatcher.createHandler(this, callback);
      }
      /**
       * @property topPage
       * @readonly
       * @type {HTMLElement}
       * @description
       *   [en]Current top page element. Use this method to access options passed by `pushPage()`-like methods.[/en]
       *   [ja]現在のページを取得します。pushPage()やresetToPage()メソッドの引数を取得できます。[/ja]
       */

    }, {
      key: "topPage",
      get: function get() {
        var last = this.lastElementChild;

        while (last && last.tagName !== 'ONS-PAGE') {
          last = last.previousElementSibling;
        }

        return last;
      }
      /**
       * @property pages
       * @readonly
       * @type {Array}
       * @description
       *   [en]Copy of the navigator's page stack.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "pages",
      get: function get() {
        return util$4.arrayFrom(this.children).filter(function (element) {
          return element.tagName === 'ONS-PAGE';
        });
      }
      /**
       * @property onSwipe
       * @type {Function}
       * @description
       *   [en]Hook called whenever the user slides the navigator (swipe-to-pop). It gets a decimal ratio (0-1) and an animationOptions object as arguments.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "onSwipe",
      get: function get() {
        return this._onSwipe;
      },
      set: function set(value) {
        if (value && !(value instanceof Function)) {
          util$4.throw('"onSwipe" must be a function');
        }

        this._onSwipe = value;
      }
      /**
       * @property options
       * @type {Object}
       * @description
       *   [en]Default options object. Attributes have priority over this property.[/en]
       *   [ja][/ja]
       */

      /**
       * @property options.animation
       * @type {String}
       * @description
       *   [en]
       *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
       *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
       *   [/en]
       *   [ja][/ja]
       */

      /**
       * @property options.animationOptions
       * @type {String}
       * @description
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
       */

      /**
       * @property options.callback
       * @type {String}
       * @description
       *   [en]Function that is called when the transition has ended.[/en]
       *   [ja]このメソッドによる画面遷移が終了した際に呼び出される関数オブジェクトを指定します。[/ja]
       */

    }, {
      key: "options",
      get: function get() {
        return this._options;
      },
      set: function set(object) {
        this._options = object;
      }
    }, {
      key: "_isRunning",
      get: function get() {
        return JSON.parse(this.getAttribute('_is-running'));
      },
      set: function set(value) {
        this.setAttribute('_is-running', value ? 'true' : 'false');
      }
    }, {
      key: "_show",
      value: function _show() {
        var _this11 = this;

        this.loaded.then(function () {
          return _this11.topPage && _this11.topPage._show();
        });
      }
    }, {
      key: "_hide",
      value: function _hide() {
        this.topPage && this.topPage._hide();
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        for (var i = this.pages.length - 1; i >= 0; i--) {
          this._pageLoader.unload(this.pages[i]);
        }

        this.remove();
      }
      /**
       * @param {String} name
       * @param {Function} Animator
       */

    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['animation', 'swipeable'];
      }
    }, {
      key: "registerAnimator",
      value: function registerAnimator(name, Animator) {
        if (!(Animator.prototype instanceof NavigatorAnimator)) {
          util$4.throwAnimator('Navigator');
        }

        _animatorDict$3[name] = Animator;
      }
    }, {
      key: "animators",
      get: function get() {
        return _animatorDict$3;
      }
    }, {
      key: "NavigatorAnimator",
      get: function get() {
        return NavigatorAnimator;
      }
    }, {
      key: "events",
      get: function get() {
        return ['prepush', 'postpush', 'prepop', 'postpop'];
      }
    }, {
      key: "rewritables",
      get: function get() {
        return rewritables$3;
      }
    }]);

    return NavigatorElement;
  }(BaseElement);
  onsElements.Navigator = NavigatorElement;
  customElements.define('ons-navigator', NavigatorElement);

  var defaultClassName$7 = 'toolbar';
  var scheme$d = {
    '': 'toolbar--*',
    '.toolbar__left': 'toolbar--*__left',
    '.toolbar__center': 'toolbar--*__center',
    '.toolbar__right': 'toolbar--*__right'
  };
  /**
   * @element ons-toolbar
   * @category page
   * @modifier material
   *   [en]Material Design toolbar.[/en]
   *   [ja][/ja]
   * @modifier transparent
   *   [en]Transparent toolbar.[/en]
   *   [ja]透明な背景を持つツールバーを表示します。[/ja]
   * @modifier cover-content
   *   [en]Displays the toolbar on top of the page's content. Should be combined with `transparent` modifier.[/en]
   *   [ja][/ja]
   * @modifier noshadow
   *   [en]Toolbar without shadow.[/en]
   *   [ja]ツールバーに影を付けずに表示します。[/ja]
   * @description
   *   [en]
   *     Toolbar component that can be used with navigation.
   *
   *     Left, center and right containers can be specified by class names.
   *
   *     This component will automatically display as a Material Design toolbar when running on Android devices.
   *   [/en]
   *   [ja]ナビゲーションで使用するツールバー用コンポーネントです。クラス名により、左、中央、右のコンテナを指定できます。[/ja]
   * @codepen aHmGL
   * @tutorial vanilla/Reference/toolbar
   * @guide compilation.html#toolbar-compilation [en]Adding a toolbar[/en][ja]ツールバーの追加[/ja]
   * @seealso ons-bottom-toolbar
   *   [en]The `<ons-bottom-toolbar>` displays a toolbar on the bottom of the page.[/en]
   *   [ja]ons-bottom-toolbarコンポーネント[/ja]
   * @seealso ons-back-button
   *   [en]The `<ons-back-button>` component displays a back button inside the toolbar.[/en]
   *   [ja]ons-back-buttonコンポーネント[/ja]
   * @seealso ons-toolbar-button
   *   [en]The `<ons-toolbar-button>` component displays a toolbar button inside the toolbar.[/en]
   *   [ja]ons-toolbar-buttonコンポーネント[/ja]
   * @example
   * <ons-page>
   *   <ons-toolbar>
   *     <div class="left">
   *       <ons-back-button>
   *         Back
   *       </ons-back-button>
   *     </div>
   *     <div class="center">
   *       Title
   *     </div>
   *     <div class="right">
   *       <ons-toolbar-button>
   *         <ons-icon icon="md-menu"></ons-icon>
   *       </ons-toolbar-button>
   *     </div>
   *   </ons-toolbar>
   * </ons-page>
   */

  var ToolbarElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(ToolbarElement, _BaseElement);

    var _super = _createSuper(ToolbarElement);

    /**
     * @attribute inline
     * @initonly
     * @description
     *   [en]Display the toolbar as an inline element.[/en]
     *   [ja]ツールバーをインラインに置きます。スクロール領域内にそのまま表示されます。[/ja]
     */

    /**
     * @attribute static
     * @description
     *   [en]Static toolbars are not animated by `ons-navigator` when pushing or popping pages. This can be useful to improve performance in some situations.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute modifier
     * @description
     *   [en]The appearance of the toolbar.[/en]
     *   [ja]ツールバーの表現を指定します。[/ja]
     */

    /**
     * @property visible
     * @description
     *   [en]Whether the toolbar is shown or not.[/en]
     *   [ja][/ja]
     */
    function ToolbarElement() {
      var _this;

      _classCallCheck(this, ToolbarElement);

      _this = _super.call(this);
      _this._visible = true;
      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();
      });
      return _this;
    }

    _createClass(ToolbarElement, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$7, scheme$d);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$d);
            break;
        }
      }
      /**
       * @method setVisibility
       * @signature setVisibility(visible)
       * @param {Boolean} visible
       *   [en]Set to true to show the toolbar, false to hide it[/en]
       *   [ja][/ja]
       * @description
       *   [en]Shows the toolbar if visible is true, otherwise hides it.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "setVisibility",
      value: function setVisibility(visible) {
        var _this2 = this;

        contentReady(this, function () {
          _this2._visible = visible;
          _this2.style.display = visible ? '' : 'none';

          if (_this2.parentNode) {
            var siblingBackground = util$4.findChild(_this2.parentNode, '.page__background');

            if (siblingBackground) {
              siblingBackground.style.top = visible ? null : 0;
            }

            var siblingContent = util$4.findChild(_this2.parentNode, '.page__content');

            if (siblingContent) {
              siblingContent.style.top = visible ? null : 0;
            }
          }
        });
      }
      /**
       * @method show
       * @signature show()
       * @description
       *   [en]Show the toolbar.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "show",
      value: function show() {
        this.setVisibility(true);
      }
      /**
       * @method hide
       * @signature hide()
       * @description
       *   [en]Hide the toolbar.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "hide",
      value: function hide() {
        this.setVisibility(false);
      }
    }, {
      key: "visible",
      get: function get() {
        return this._visible;
      },
      set: function set(value) {
        this.setVisibility(value);
      }
      /**
       * @return {HTMLElement}
       */

    }, {
      key: "_getToolbarLeftItemsElement",
      value: function _getToolbarLeftItemsElement() {
        return this.querySelector('.left') || internal$1.nullElement;
      }
      /**
       * @return {HTMLElement}
       */

    }, {
      key: "_getToolbarCenterItemsElement",
      value: function _getToolbarCenterItemsElement() {
        return this.querySelector('.center') || internal$1.nullElement;
      }
      /**
       * @return {HTMLElement}
       */

    }, {
      key: "_getToolbarRightItemsElement",
      value: function _getToolbarRightItemsElement() {
        return this.querySelector('.right') || internal$1.nullElement;
      }
      /**
       * @return {HTMLElement}
       */

    }, {
      key: "_getToolbarBackButtonLabelElement",
      value: function _getToolbarBackButtonLabelElement() {
        return this.querySelector('ons-back-button .back-button__label') || internal$1.nullElement;
      }
      /**
       * @return {HTMLElement}
       */

    }, {
      key: "_getToolbarBackButtonIconElement",
      value: function _getToolbarBackButtonIconElement() {
        return this.querySelector('ons-back-button .back-button__icon') || internal$1.nullElement;
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(defaultClassName$7);

        this._ensureToolbarItemElements();

        ModifierUtil.initModifier(this, scheme$d);
      }
    }, {
      key: "_ensureToolbarItemElements",
      value: function _ensureToolbarItemElements() {
        for (var i = this.childNodes.length - 1; i >= 0; i--) {
          // case of not element
          if (this.childNodes[i].nodeType != 1) {
            this.removeChild(this.childNodes[i]);
          }
        }

        var center = this._ensureToolbarElement('center');

        center.classList.add('toolbar__title');

        if (this.children.length !== 1 || !this.children[0].classList.contains('center')) {
          var left = this._ensureToolbarElement('left');

          var right = this._ensureToolbarElement('right');

          if (this.children[0] !== left || this.children[1] !== center || this.children[2] !== right) {
            this.appendChild(left);
            this.appendChild(center);
            this.appendChild(right);
          }
        }
      }
    }, {
      key: "_ensureToolbarElement",
      value: function _ensureToolbarElement(name) {
        if (util$4.findChild(this, '.toolbar__' + name)) {
          var _element = util$4.findChild(this, '.toolbar__' + name);

          _element.classList.add(name);

          return _element;
        }

        var element = util$4.findChild(this, '.' + name) || util$4.create('.' + name);
        element.classList.add('toolbar__' + name);
        return element;
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class'];
      }
    }]);

    return ToolbarElement;
  }(BaseElement);
  onsElements.Toolbar = ToolbarElement;
  customElements.define('ons-toolbar', ToolbarElement);

  var defaultClassName$6 = 'page';
  var scheme$c = {
    '': 'page--*',
    '.page__content': 'page--*__content',
    '.page__background': 'page--*__background'
  };
  /**
   * @element ons-page
   * @category page
   * @modifier material
   *   [en]Material Design style[/en]
   *   [ja][/ja]
   * @description
   *   [en]
   *     This component defines the root of each page. If the content is large it will become scrollable.
   *
   *     A navigation bar can be added to the top of the page using the `<ons-toolbar>` element.
   *   [/en]
   *   [ja]ページ定義のためのコンポーネントです。このコンポーネントの内容はスクロールが許可されます。[/ja]
   * @tutorial vanilla/Reference/page
   * @guide lifecycle.html#events
   *   [en]Overview of page events[/en]
   *   [ja]Overview of page events[/ja]
   * @guide fundamentals.html#managing-pages
   *   [en]Managing multiple pages[/en]
   *   [ja]複数のページを管理する[/ja]
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @seealso ons-toolbar
   *   [en]Use the `<ons-toolbar>` element to add a navigation bar to the top of the page.[/en]
   *   [ja][/ja]
   * @example
   * <ons-page>
   *   <ons-toolbar>
   *     <div class="left">
   *       <ons-back-button>Back</ons-back-button>
   *     </div>
   *     <div class="center">Title</div>
   *     <div class="right">
   *       <ons-toolbar-button>
   *         <ons-icon icon="md-menu"></ons-icon>
   *       </ons-toolbar-button>
   *     </div>
   *   </ons-toolbar>
   *
   *   <p>Page content</p>
   * </ons-page>
   *
   * @example
   * <script>
   *   myApp.handler = function(done) {
   *     loadMore().then(done);
   *   }
   * </script>
   *
   * <ons-page on-infinite-scroll="myApp.handler">
   *   <ons-toolbar>
   *     <div class="center">List</div>
   *   </ons-toolbar>
   *
   *   <ons-list>
   *     <ons-list-item>#1</ons-list-item>
   *     <ons-list-item>#2</ons-list-item>
   *     <ons-list-item>#3</ons-list-item>
   *     ...
   *   </ons-list>
   * </ons-page>
   */

  var PageElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(PageElement, _BaseElement);

    var _super = _createSuper(PageElement);

    /**
     * @event init
     * @description
     *   [en]Fired right after the page is attached.[/en]
     *   [ja]ページがアタッチされた後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     */

    /**
     * @event show
     * @description
     *   [en]Fired right after the page is shown.[/en]
     *   [ja]ページが表示された後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     */

    /**
     * @event hide
     * @description
     *   [en]Fired right after the page is hidden.[/en]
     *   [ja]ページが隠れた後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     */

    /**
     * @event destroy
     * @description
     *   [en]Fired right before the page is destroyed.[/en]
     *   [ja]ページが破棄される前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]Specify modifier name to specify custom styles.[/en]
     *   [ja]スタイル定義をカスタマイズするための名前を指定します。[/ja]
     */

    /**
     * @attribute on-infinite-scroll
     * @type {String}
     * @description
     *   [en]Path of the function to be executed on infinite scrolling. Example: `app.loadData`. The function receives a done callback that must be called when it's finished.[/en]
     *   [ja][/ja]
     */
    function PageElement() {
      var _this;

      _classCallCheck(this, PageElement);

      _this = _super.call(this);

      _this._deriveHooks();

      _this._defaultClassName = defaultClassName$6;

      _this.classList.add(defaultClassName$6);

      _this._initialized = false;
      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();

        _this._isShown = false;
        _this._contentElement = _this._getContentElement();
        _this._backgroundElement = _this._getBackgroundElement();
      });
      return _this;
    }

    _createClass(PageElement, [{
      key: "_compile",
      value: function _compile() {
        var _this2 = this;

        autoStyle.prepare(this);
        var toolbar = util$4.findChild(this, 'ons-toolbar');
        var background = util$4.findChild(this, '.page__background') || util$4.findChild(this, '.background') || document.createElement('div');
        background.classList.add('page__background');
        this.insertBefore(background, !toolbar && this.firstChild || toolbar && toolbar.nextSibling);
        var content = util$4.findChild(this, '.page__content') || util$4.findChild(this, '.content') || document.createElement('div');
        content.classList.add('page__content');

        if (!content.parentElement) {
          util$4.arrayFrom(this.childNodes).forEach(function (node) {
            if (node.nodeType !== 1 || _this2._elementShouldBeMoved(node)) {
              content.appendChild(node); // Can trigger detached connectedCallbacks
            }
          });
        }

        this._tryToFillStatusBar(content); // Must run before child pages try to fill status bar.


        this.insertBefore(content, background.nextSibling); // Can trigger attached connectedCallbacks

        if ((!toolbar || !util$4.hasModifier(toolbar, 'transparent')) && content.children.length === 1 && util$4.isPageControl(content.children[0])) {
          this._defaultClassName += ' page--wrapper';
          this.attributeChangedCallback('class');
        }

        var bottomToolbar = util$4.findChild(this, 'ons-bottom-toolbar');

        if (bottomToolbar) {
          this._defaultClassName += ' page-with-bottom-toolbar';
          this.attributeChangedCallback('class');
        }

        ModifierUtil.initModifier(this, scheme$c);
      }
    }, {
      key: "_elementShouldBeMoved",
      value: function _elementShouldBeMoved(el) {
        if (el.classList.contains('page__background')) {
          return false;
        }

        var tagName = el.tagName.toLowerCase();

        if (tagName === 'ons-fab') {
          return !el.hasAttribute('position');
        }

        var fixedElements = ['script', 'ons-toolbar', 'ons-bottom-toolbar', 'ons-modal', 'ons-speed-dial', 'ons-dialog', 'ons-alert-dialog', 'ons-popover', 'ons-action-sheet'];
        return el.hasAttribute('inline') || fixedElements.indexOf(tagName) === -1;
      }
    }, {
      key: "_tryToFillStatusBar",
      value: function _tryToFillStatusBar() {
        var _this3 = this;

        var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._contentElement;
        internal$1.autoStatusBarFill(function () {
          util$4.toggleAttribute(_this3, 'status-bar-fill', !util$4.findParent(_this3, function (e) {
            return e.hasAttribute('status-bar-fill');
          }) // Not already filled
          && (_this3._canAnimateToolbar(content) || !util$4.findChild(content, util$4.isPageControl)) // Has toolbar or cannot delegate
          );
        });
      }
    }, {
      key: "_canAnimateToolbar",
      value: function _canAnimateToolbar() {
        var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._contentElement;

        if (util$4.findChild(this, 'ons-toolbar')) {
          return true;
        }

        return !!util$4.findChild(content, function (el) {
          return util$4.match(el, 'ons-toolbar') && !el.hasAttribute('inline');
        });
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this4 = this;

        if (!util$4.isAttached(this)) {
          // Avoid detached calls
          return;
        }

        contentReady(this, function () {
          _this4._tryToFillStatusBar(); // Ensure status bar when the element was compiled before connected


          if (_this4.hasAttribute('on-infinite-scroll')) {
            _this4.attributeChangedCallback('on-infinite-scroll', null, _this4.getAttribute('on-infinite-scroll'));
          }

          if (!_this4._initialized) {
            _this4._initialized = true;
            setImmediate(function () {
              _this4.onInit && _this4.onInit();
              util$4.triggerElementEvent(_this4, 'init');
            });

            if (!util$4.hasAnyComponentAsParent(_this4)) {
              setImmediate(function () {
                return _this4._show();
              });
            }
          }
        });
      }
    }, {
      key: "updateBackButton",
      value: function updateBackButton(show) {
        if (this.backButton) {
          show ? this.backButton.show() : this.backButton.hide();
        }
      }
    }, {
      key: "name",
      get: function get() {
        return this.getAttribute('name');
      },
      set: function set(str) {
        this.setAttribute('name', str);
      }
    }, {
      key: "backButton",
      get: function get() {
        return this.querySelector('ons-back-button');
      }
      /**
       * @property onInfiniteScroll
       * @description
       *  [en]Function to be executed when scrolling to the bottom of the page. The function receives a done callback as an argument that must be called when it's finished.[/en]
       *  [ja][/ja]
       */

    }, {
      key: "onInfiniteScroll",
      get: function get() {
        return this._onInfiniteScroll;
      },
      set: function set(value) {
        var _this5 = this;

        if (value && !(value instanceof Function)) {
          util$4.throw('"onInfiniteScroll" must be function or null');
        }

        contentReady(this, function () {
          if (!value) {
            _this5._contentElement.removeEventListener('scroll', _this5._boundOnScroll);
          } else if (!_this5._onInfiniteScroll) {
            _this5._infiniteScrollLimit = 0.9;
            _this5._boundOnScroll = _this5._onScroll.bind(_this5);
            setImmediate(function () {
              return _this5._contentElement.addEventListener('scroll', _this5._boundOnScroll);
            });
          }

          _this5._onInfiniteScroll = value;
        });
      }
    }, {
      key: "_onScroll",
      value: function _onScroll() {
        var _this6 = this;

        var c = this._contentElement,
            overLimit = (c.scrollTop + c.clientHeight) / c.scrollHeight >= this._infiniteScrollLimit;

        if (this._onInfiniteScroll && !this._loadingContent && overLimit) {
          this._loadingContent = true;

          this._onInfiniteScroll(function () {
            return _this6._loadingContent = false;
          });
        }
      }
      /**
       * @property onDeviceBackButton
       * @type {Object}
       * @description
       *   [en]Back-button handler.[/en]
       *   [ja]バックボタンハンドラ。[/ja]
       */

    }, {
      key: "onDeviceBackButton",
      get: function get() {
        return this._backButtonHandler;
      },
      set: function set(callback) {
        if (this._backButtonHandler) {
          this._backButtonHandler.destroy();
        }

        this._backButtonHandler = deviceBackButtonDispatcher.createHandler(this, callback);
      }
    }, {
      key: "scrollTop",
      get: function get() {
        return this._contentElement.scrollTop;
      },
      set: function set(newValue) {
        this._contentElement.scrollTop = newValue;
      }
    }, {
      key: "_getContentElement",
      value: function _getContentElement() {
        var result = util$4.findChild(this, '.page__content');

        if (result) {
          return result;
        }

        util$4.throw('Fail to get ".page__content" element');
      }
    }, {
      key: "_getBackgroundElement",
      value: function _getBackgroundElement() {
        var result = util$4.findChild(this, '.page__background');

        if (result) {
          return result;
        }

        util$4.throw('Fail to get ".page__background" element');
      }
    }, {
      key: "_getBottomToolbarElement",
      value: function _getBottomToolbarElement() {
        return util$4.findChild(this, 'ons-bottom-toolbar') || internal$1.nullElement;
      }
    }, {
      key: "_getToolbarElement",
      value: function _getToolbarElement() {
        return util$4.findChild(this, 'ons-toolbar') || document.createElement('ons-toolbar');
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this7 = this;

        switch (name) {
          case 'class':
            util$4.restoreClass(this, this._defaultClassName, scheme$c);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$c);
            break;

          case 'on-infinite-scroll':
            if (current === null) {
              this.onInfiniteScroll = null;
            } else {
              this.onInfiniteScroll = function (done) {
                var f = util$4.findFromPath(current);
                _this7.onInfiniteScroll = f;
                f(done);
              };
            }

            break;
        }
      }
    }, {
      key: "_show",
      value: function _show() {
        if (!this._isShown && util$4.isAttached(this)) {
          this._isShown = true;
          this.setAttribute('shown', '');
          this.onShow && this.onShow();
          util$4.triggerElementEvent(this, 'show');
          util$4.propagateAction(this, '_show');
        }
      }
    }, {
      key: "_hide",
      value: function _hide() {
        if (this._isShown) {
          this._isShown = false;
          this.removeAttribute('shown');
          this.onHide && this.onHide();
          util$4.triggerElementEvent(this, 'hide');
          util$4.propagateAction(this, '_hide');
        }
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        this._hide();

        this.onDestroy && this.onDestroy();
        util$4.triggerElementEvent(this, 'destroy');

        if (this.onDeviceBackButton) {
          this.onDeviceBackButton.destroy();
        }

        util$4.propagateAction(this, '_destroy');
        this.remove();
      }
    }, {
      key: "_deriveHooks",
      value: function _deriveHooks() {
        var _this8 = this;

        this.constructor.events.forEach(function (event) {
          var key = 'on' + event.charAt(0).toUpperCase() + event.slice(1);
          Object.defineProperty(_this8, key, {
            configurable: true,
            enumerable: true,
            get: function get() {
              return _this8["_".concat(key)];
            },
            set: function set(value) {
              if (!(value instanceof Function)) {
                util$4.throw("\"".concat(key, "\" hook must be a function"));
              }

              _this8["_".concat(key)] = value.bind(_this8);
            }
          });
        });
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'on-infinite-scroll', 'class'];
      }
    }, {
      key: "events",
      get: function get() {
        return ['init', 'show', 'hide', 'destroy'];
      }
      /**
       * @property data
       * @type {*}
       * @description
       *   [en]User's custom data passed to `pushPage()`-like methods.[/en]
       *   [ja][/ja]
       */

    }]);

    return PageElement;
  }(BaseElement);
  onsElements.Page = PageElement;
  customElements.define('ons-page', PageElement);

  var PopoverAnimator = /*#__PURE__*/function (_BaseAnimator) {
    _inherits(PopoverAnimator, _BaseAnimator);

    var _super = _createSuper(PopoverAnimator);

    /**
     * @param {Object} options
     * @param {String} options.timing
     * @param {Number} options.duration
     * @param {Number} options.delay
     */
    function PopoverAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'cubic-bezier(.1, .7, .4, 1)' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.2 : _ref$duration;

      _classCallCheck(this, PopoverAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }

    _createClass(PopoverAnimator, [{
      key: "show",
      value: function show(popover, callback) {
        callback();
      }
    }, {
      key: "hide",
      value: function hide(popover, callback) {
        callback();
      }
    }, {
      key: "_animate",
      value: function _animate(element, _ref2) {
        var from = _ref2.from,
            to = _ref2.to,
            options = _ref2.options,
            callback = _ref2.callback,
            _ref2$restore = _ref2.restore,
            restore = _ref2$restore === void 0 ? false : _ref2$restore,
            animation = _ref2.animation;
        options = util$4.extend({}, this.options, options);

        if (animation) {
          from = animation.from;
          to = animation.to;
        }

        animation = Animit(element);

        if (restore) {
          animation = animation.saveStyle();
        }

        animation = animation.queue(from).wait(this.delay).queue({
          css: to,
          duration: this.duration,
          timing: this.timing
        });

        if (restore) {
          animation = animation.restoreStyle();
        }

        if (callback) {
          animation = animation.queue(function (done) {
            callback();
            done();
          });
        }

        return animation;
      }
    }, {
      key: "_animateAll",
      value: function _animateAll(element, animations) {
        var _this = this;

        Object.keys(animations).forEach(function (key) {
          return _this._animate(element[key], animations[key]).play();
        });
      }
    }]);

    return PopoverAnimator;
  }(BaseAnimator);
  var fade = {
    out: {
      from: {
        opacity: 1.0
      },
      to: {
        opacity: 0
      }
    },
    in: {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1.0
      }
    }
  };
  var MDFadePopoverAnimator = /*#__PURE__*/function (_PopoverAnimator) {
    _inherits(MDFadePopoverAnimator, _PopoverAnimator);

    var _super2 = _createSuper(MDFadePopoverAnimator);

    function MDFadePopoverAnimator() {
      _classCallCheck(this, MDFadePopoverAnimator);

      return _super2.apply(this, arguments);
    }

    _createClass(MDFadePopoverAnimator, [{
      key: "show",
      value: function show(popover, callback) {
        this._animateAll(popover, {
          _mask: fade.in,
          _popover: {
            animation: fade.in,
            restore: true,
            callback: callback
          }
        });
      }
    }, {
      key: "hide",
      value: function hide(popover, callback) {
        this._animateAll(popover, {
          _mask: fade.out,
          _popover: {
            animation: fade.out,
            restore: true,
            callback: callback
          }
        });
      }
    }]);

    return MDFadePopoverAnimator;
  }(PopoverAnimator);
  var IOSFadePopoverAnimator = /*#__PURE__*/function (_MDFadePopoverAnimato) {
    _inherits(IOSFadePopoverAnimator, _MDFadePopoverAnimato);

    var _super3 = _createSuper(IOSFadePopoverAnimator);

    function IOSFadePopoverAnimator() {
      _classCallCheck(this, IOSFadePopoverAnimator);

      return _super3.apply(this, arguments);
    }

    _createClass(IOSFadePopoverAnimator, [{
      key: "show",
      value: function show(popover, callback) {
        this._animateAll(popover, {
          _mask: fade.in,
          _popover: {
            from: {
              transform: 'scale3d(1.3, 1.3, 1.0)',
              opacity: 0
            },
            to: {
              transform: 'scale3d(1.0, 1.0,  1.0)',
              opacity: 1.0
            },
            restore: true,
            callback: callback
          }
        });
      }
    }]);

    return IOSFadePopoverAnimator;
  }(MDFadePopoverAnimator);

  var scheme$b = {
    '.popover': 'popover--*',
    '.popover-mask': 'popover-mask--*',
    '.popover__content': 'popover--*__content',
    '.popover__arrow': 'popover--*__arrow'
  };
  var _animatorDict$2 = {
    'default': function _default() {
      return platform.isAndroid() ? MDFadePopoverAnimator : IOSFadePopoverAnimator;
    },
    'none': PopoverAnimator,
    'fade-ios': IOSFadePopoverAnimator,
    'fade-md': MDFadePopoverAnimator
  };
  var positions = {
    up: 'bottom',
    left: 'right',
    down: 'top',
    right: 'left'
  };
  /**
   * @element ons-popover
   * @category dialog
   * @description
   *  [en]
   *    A component that displays a popover next to an element. The popover can be used to display extra information about a component or a tooltip.
   *
   *    To use the element it can either be attached directly to the `<body>` element or dynamically created from a template using the `ons.createPopover(template)` utility function and the `<template>` tag.
   *
   *    Another common way to use the popover is to display a menu when a button on the screen is tapped. For Material Design, popover looks exactly as a dropdown menu.
   *  [/en]
   *  [ja]ある要素を対象とするポップオーバーを表示するコンポーネントです。[/ja]
   * @codepen ZYYRKo
   * @tutorial vanilla/Reference/popover
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @example
   * <ons-button onclick="showPopover(this)">
   *   Click me!
   * </ons-button>
   *
   * <ons-popover direction="down" id="popover">
   *   <p>This is a popover!</p>
   * </ons-popover>
   *
   * <script>
   *   var showPopover = function(element) {
   *     var popover = document.getElementById('popover');
   *     popover.show(element);
   *   };
   * </script>
   */

  var PopoverElement = /*#__PURE__*/function (_BaseDialogElement) {
    _inherits(PopoverElement, _BaseDialogElement);

    var _super = _createSuper(PopoverElement);

    /**
     * @event preshow
     * @description
     *   [en]Fired just before the popover is displayed.[/en]
     *   [ja]ポップオーバーが表示される直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.popover
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Call this function to stop the popover from being shown.[/en]
     *   [ja]この関数を呼び出すと、ポップオーバーの表示がキャンセルされます。[/ja]
     */

    /**
     * @event postshow
     * @description
     *   [en]Fired just after the popover is displayed.[/en]
     *   [ja]ポップオーバーが表示された直後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.popover
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event prehide
     * @description
     *   [en]Fired just before the popover is hidden.[/en]
     *   [ja]ポップオーバーが隠れる直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.popover
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Call this function to stop the popover from being hidden.[/en]
     *   [ja]この関数を呼び出すと、ポップオーバーが隠れる処理をキャンセルします。[/ja]
     */

    /**
     * @event posthide
     * @description
     *   [en]Fired just after the popover is hidden.[/en]
     *   [ja]ポップオーバーが隠れた後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.popover
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event dialogcancel
     * @description
     * [en]Fired when the popover is canceled.[/en]
     * [ja][/ja]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the popover.[/en]
     *  [ja]ポップオーバーの表現を指定します。[/ja]
     */

    /**
     * @attribute direction
     * @type {String}
     * @description
     *  [en]
     *    A space separated list of directions. If more than one direction is specified,
     *    it will be chosen automatically. Valid directions are `"up"`, `"down"`, `"left"` and `"right"`.
     *  [/en]
     *  [ja]
     *    ポップオーバーを表示する方向を空白区切りで複数指定できます。
     *    指定できる方向は、"up", "down", "left", "right"の4つです。空白区切りで複数指定することもできます。
     *    複数指定された場合、対象とする要素に合わせて指定した値から自動的に選択されます。
     *  [/ja]
     */

    /**
     * @attribute cancelable
     * @description
     *   [en]If this attribute is set the popover can be closed by tapping the background or by pressing the back button.[/en]
     *   [ja]この属性があると、ポップオーバーが表示された時に、背景やバックボタンをタップした時にをポップオーバー閉じます。[/ja]
     */

    /**
     * @attribute cover-target
     * @description
     *   [en]If set the popover will cover the target on the screen.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @description
     *   [en]The animation used when showing an hiding the popover. Can be either `"none"`, `"default"`, `"fade-ios"` or `"fade-md"`.[/en]
     *   [ja]ポップオーバーを表示する際のアニメーション名を指定します。[/ja]
     */

    /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. {duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */

    /**
     * @property animationOptions
     * @type {Object}
     * @description
     *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */

    /**
     * @attribute mask-color
     * @type {Color}
     * @description
     *   [en]Color of the background mask. Default is `"rgba(0, 0, 0, 0.2)"`.[/en]
     *   [ja]背景のマスクの色を指定します。デフォルトは"rgba(0, 0, 0, 0.2)"です。[/ja]
     */

    /**
     * @attribute visible
     * @type {Boolean}
     * @description
     *   [en]Whether the popover is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */
    function PopoverElement() {
      var _this;

      _classCallCheck(this, PopoverElement);

      _this = _super.call(this);
      _this._boundOnChange = _this._onChange.bind(_assertThisInitialized(_this));
      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();

        _this.style.display = 'none';
      });
      return _this;
    }

    _createClass(PopoverElement, [{
      key: "_scheme",
      get: function get() {
        return scheme$b;
      }
    }, {
      key: "_mask",
      get: function get() {
        return util$4.findChild(this, '.popover-mask');
      }
    }, {
      key: "_popover",
      get: function get() {
        return util$4.findChild(this, '.popover');
      }
    }, {
      key: "_content",
      get: function get() {
        return util$4.findChild(this._popover, '.popover__content');
      }
    }, {
      key: "_arrow",
      get: function get() {
        return util$4.findChild(this._popover, '.popover__arrow');
      }
    }, {
      key: "_updateAnimatorFactory",
      value: function _updateAnimatorFactory() {
        return new AnimatorFactory({
          animators: _animatorDict$2,
          baseClass: PopoverAnimator,
          baseClassName: 'PopoverAnimator',
          defaultAnimation: this.getAttribute('animation') || 'default'
        });
      }
    }, {
      key: "_toggleStyle",
      value: function _toggleStyle(shouldShow) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (shouldShow) {
          this.style.display = 'block';
          this._currentTarget = options.target;

          this._positionPopover(options.target);
        } else {
          this.style.display = 'none';

          this._clearStyles();
        }
      }
    }, {
      key: "_positionPopover",
      value: function _positionPopover(target) {
        var radius = this._radius,
            contentElement = this._content,
            margin = this._margin;
        var safeAreaLengths = iPhoneXPatch.getSafeAreaLengths();
        var safeAreaRect = iPhoneXPatch.getSafeAreaDOMRect();
        var targetRect = target.getBoundingClientRect();
        var isMD = util$4.hasModifier(this, 'material');
        var cover = isMD && this.hasAttribute('cover-target');
        var parent = util$4.findParent(this, 'ons-page') || document.body;
        var parentDimensions = parent.getBoundingClientRect();
        var maxPositions = {
          top: Math.max(parentDimensions.top, safeAreaRect.top),
          left: Math.max(parentDimensions.left, safeAreaRect.left),
          bottom: Math.min(parentDimensions.bottom, safeAreaRect.bottom),
          right: Math.min(parentDimensions.right, safeAreaRect.right)
        }; // Distance from each side of the safe area (with margin) to the target element

        var targetDistance = {
          top: targetRect.top - (maxPositions.top + margin),
          left: targetRect.left - (maxPositions.left + margin),
          bottom: maxPositions.bottom - margin - targetRect.bottom,
          right: maxPositions.right - margin - targetRect.right
        }; // Distance from each side of the safe area (with margin) to the geometric center of the target element

        var targetCenterDistanceFrom = {
          top: targetRect.top + Math.round(targetRect.height / 2) - (maxPositions.top + margin),
          left: targetRect.left + Math.round(targetRect.width / 2) - (maxPositions.left + margin),
          bottom: maxPositions.bottom - margin - targetRect.bottom + Math.round(targetRect.height / 2),
          right: maxPositions.right - margin - targetRect.right + Math.round(targetRect.width / 2)
        };

        var _this$_calculateDirec = this._calculateDirections(targetDistance),
            vertical = _this$_calculateDirec.vertical,
            primaryDirection = _this$_calculateDirec.primary,
            secondaryDirection = _this$_calculateDirec.secondary;

        this._currentDirection = primaryDirection;
        util$4.addModifier(this, primaryDirection);
        var sizeName = vertical ? 'width' : 'height'; // Get .popover__content size

        var contentSize = function (style) {
          return {
            width: parseInt(style.getPropertyValue('width'), 10),
            height: parseInt(style.getPropertyValue('height'), 10)
          };
        }(window.getComputedStyle(contentElement)); // Setting .popover position.


        var targetAndArrowLength = cover ? 0 : (vertical ? targetRect.height : targetRect.width) + (isMD ? 0 : 14);
        var primaryOffset = Math.max(safeAreaLengths[primaryDirection] + margin, safeAreaLengths[primaryDirection] + margin + targetDistance[primaryDirection] + targetAndArrowLength);
        var secondaryOffset = Math.max(safeAreaLengths[secondaryDirection] + margin, safeAreaLengths[secondaryDirection] + margin + targetCenterDistanceFrom[secondaryDirection] - contentSize[sizeName] / 2);
        this._popover.style[primaryDirection] = primaryOffset + 'px';
        this._popover.style[secondaryDirection] = secondaryOffset + 'px'; // Setting .popover__arrow position.

        this._arrow.style[secondaryDirection] = Math.max(radius, safeAreaLengths[secondaryDirection] + margin + targetCenterDistanceFrom[secondaryDirection] - secondaryOffset) + 'px';
      }
    }, {
      key: "_calculateDirections",
      value: function _calculateDirections(distance) {
        var options = (this.getAttribute('direction') || 'up down left right').split(/\s+/).map(function (e) {
          return positions[e];
        });
        var primary = options.sort(function (a, b) {
          return distance[a] - distance[b];
        })[0];
        var vertical = 'top' == primary || 'bottom' == primary;
        var secondary;

        if (vertical) {
          secondary = distance.left < distance.right ? 'left' : 'right';
        } else {
          secondary = distance.top < distance.bottom ? 'top' : 'bottom';
        }

        return {
          vertical: vertical,
          primary: primary,
          secondary: secondary
        };
      }
    }, {
      key: "_clearStyles",
      value: function _clearStyles() {
        var _this2 = this;

        this._currentDirection = null;
        ['top', 'bottom', 'left', 'right'].forEach(function (e) {
          _this2._arrow.style[e] = _this2._content.style[e] = _this2._popover.style[e] = '';
          util$4.removeModifier(_this2, e);
        });
      }
    }, {
      key: "_onChange",
      value: function _onChange() {
        var _this3 = this;

        setImmediate(function () {
          if (_this3._currentTarget) {
            _this3._positionPopover(_this3._currentTarget);
          }
        });
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);

        if (this._popover && this._mask) {
          return;
        }

        var hasDefaultContainer = this._popover && this._content;

        if (hasDefaultContainer) {
          if (!this._mask) {
            var mask = document.createElement('div');
            mask.classList.add('popover-mask');
            this.insertBefore(mask, this.firstChild);
          }

          if (!this._arrow) {
            var arrow = document.createElement('div');
            arrow.classList.add('popover__arrow');

            this._popover.appendChild(arrow);
          }
        } else {
          var template = util$4.createFragment("\n        <div class=\"popover-mask\"></div>\n        <div class=\"popover\">\n          <div class=\"popover__content\"></div>\n          <div class=\"popover__arrow\"></div>\n        </div>\n      ");
          var content = template.querySelector('.popover__content');

          while (this.childNodes[0]) {
            content.appendChild(this.childNodes[0]);
          }

          this.appendChild(template);
        } // FIXME!


        if (this.hasAttribute('style')) {
          this._popover.setAttribute('style', this.getAttribute('style'));

          this.removeAttribute('style');
        }

        ModifierUtil.initModifier(this, this._scheme);
      }
      /**
       * @method show
       * @signature show(target, [options])
       * @param {String|Event|HTMLElement} target
       *   [en]Target element. Can be either a CSS selector, an event object or a DOM element. It can be also provided as 'options.target' instead. [/en]
       *   [ja]ポップオーバーのターゲットとなる要素を指定します。CSSセレクタかeventオブジェクトかDOM要素のいずれかを渡せます。[/ja]
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name.  Use one of `"fade-ios"`, `"fade-md"`, `"none"` and `"default"`.[/en]
       *   [ja]アニメーション名を指定します。"fade-ios", "fade-md", "none", "default"のいずれかを指定できます。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @param {Function} [options.callback]
       *   [en]This function is called after the popover has been revealed.[/en]
       *   [ja]ポップオーバーが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *   [en]Open the popover and point it at a target. The target can be either an event, a CSS selector or a DOM element..[/en]
       *   [ja]対象とする要素にポップオーバーを表示します。target引数には、$eventオブジェクトやDOMエレメントやCSSセレクタを渡すことが出来ます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the displayed element[/en]
       *   [ja][/ja]
       */

    }, {
      key: "show",
      value: function show(target) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // Copy options and include options.target
        if (target && _typeof(target) === 'object' && !(target instanceof Event) && !(target instanceof HTMLElement)) {
          options = _objectSpread2({}, target);
        } else {
          options = _objectSpread2(_objectSpread2({}, options), {}, {
            target: target
          });
        }

        if (typeof options.target === 'string') {
          options.target = document.querySelector(options.target);
        } else if (options.target instanceof Event) {
          options.target = options.target.target;
        }

        if (!(options.target instanceof HTMLElement)) {
          util$4.throw('Invalid target type or undefined');
        }

        return _get(_getPrototypeOf(PopoverElement.prototype), "show", this).call(this, options);
      }
      /**
       * @method hide
       * @signature hide([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name.  Use one of `"fade-ios"`, `"fade-md"`, `"none"` and `"default"`.[/en]
       *   [ja]アニメーション名を指定します。"fade-ios", "fade-md", "none", "default"のいずれかを指定できます。[/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @param {Function} [options.callback]
       *   [en]This functions is called after the popover has been hidden.[/en]
       *   [ja]ポップオーバーが隠れた後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *   [en]Close the popover.[/en]
       *   [ja]ポップオーバーを閉じます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the hidden element[/en]
       *   [ja][/ja]
       */

      /**
       * @property visible
       * @type {Boolean}
       * @description
       *   [en]Whether the element is visible or not.[/en]
       *   [ja]要素が見える場合に`true`。[/ja]
       */

      /**
       * @property cancelable
       * @type {Boolean}
       * @description
       *   [en]
       *     A boolean value that specifies whether the popover is cancelable or not.
       *
       *     When the popover is cancelable it can be closed by tapping the background or by pressing the back button on Android devices.
       *   [/en]
       *   [ja][/ja]
       */

      /**
       * @property onDeviceBackButton
       * @type {Object}
       * @description
       *   [en]Back-button handler.[/en]
       *   [ja]バックボタンハンドラ。[/ja]
       */

      /**
       * @property maskColor
       * @type {String}
       * @default rgba(0, 0, 0, 0.2)
       * @description
       *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)".[/en]
       *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
       */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this4 = this;

        _get(_getPrototypeOf(PopoverElement.prototype), "connectedCallback", this).call(this);

        window.addEventListener('resize', this._boundOnChange, false);
        this._margin = this._margin || parseInt(window.getComputedStyle(this).getPropertyValue('top'));
        this._margin = this._margin || 6; // Fix for iframes

        contentReady(this, function () {
          _this4._radius = parseInt(window.getComputedStyle(_this4._content).getPropertyValue('border-top-left-radius'));
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(PopoverElement.prototype), "disconnectedCallback", this).call(this);

        window.removeEventListener('resize', this._boundOnChange, false);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'direction') {
          return this._boundOnChange();
        } else if (name === 'modifier') {
          this._currentDirection && util$4.addModifier(this, this._currentDirection);
        }

        _get(_getPrototypeOf(PopoverElement.prototype), "attributeChangedCallback", this).call(this, name, last, current);
      }
      /**
       * @param {String} name
       * @param {PopoverAnimator} Animator
       */

    }], [{
      key: "observedAttributes",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(PopoverElement), "observedAttributes", this)), ['direction']);
      }
    }, {
      key: "registerAnimator",
      value: function registerAnimator(name, Animator) {
        if (!(Animator.prototype instanceof PopoverAnimator)) {
          util$4.throwAnimator('Popover');
        }

        _animatorDict$2[name] = Animator;
      }
    }, {
      key: "animators",
      get: function get() {
        return _animatorDict$2;
      }
    }, {
      key: "PopoverAnimator",
      get: function get() {
        return PopoverAnimator;
      }
    }]);

    return PopoverElement;
  }(BaseDialogElement);
  onsElements.Popover = PopoverElement;
  customElements.define('ons-popover', PopoverElement);

  var scheme$a = {
    '.progress-bar': 'progress-bar--*',
    '.progress-bar__primary': 'progress-bar--*__primary',
    '.progress-bar__secondary': 'progress-bar--*__secondary'
  };
  var template$1 = util$4.createElement("\n  <div class=\"progress-bar\">\n    <div class=\"progress-bar__secondary\"></div>\n    <div class=\"progress-bar__primary\"></div>\n  </div>\n");
  var INDET$1 = 'indeterminate';
  /**
   * @element ons-progress-bar
   * @category visual
   * @modifier material
   *   [en]Display a Material Design progress bar.[/en]
   *   [ja]マテリアルデザインのスタイルでプログレスバーを表示します。[/ja]
   * @description
   *   [en]
   *     The component is used to display a linear progress bar. It can either display a progress bar that shows the user how much of a task has been completed. In the case where the percentage is not known it can be used to display an animated progress bar so the user can see that an operation is in progress.
   *   [/en]
   *   [ja][/ja]
   * @codepen zvQbGj
   * @tutorial vanilla/Reference/progress
   * @seealso ons-progress-circular
   *   [en]The `<ons-progress-circular>` component displays a circular progress indicator.[/en]
   *   [ja][/ja]
   * @example
   * <ons-progress-bar
   *  value="55"
   *  secondary-value="87">
   * </ons-progress-bar>
   *
   * <ons-progress-bar
   *  indeterminate>
   * </ons-progress-bar>
   */

  var ProgressBarElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(ProgressBarElement, _BaseElement);

    var _super = _createSuper(ProgressBarElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]Change the appearance of the progress indicator.[/en]
     *   [ja]プログレスインジケータの見た目を変更します。[/ja]
     */

    /**
     * @attribute value
     * @type {Number}
     * @description
     *   [en]Current progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */

    /**
     * @attribute secondary-value
     * @type {Number}
     * @description
     *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */

    /**
     * @attribute indeterminate
     * @description
     *   [en]If this attribute is set, an infinite looping animation will be shown.[/en]
     *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
     */
    function ProgressBarElement() {
      var _this;

      _classCallCheck(this, ProgressBarElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      return _this;
    }

    _createClass(ProgressBarElement, [{
      key: "_compile",
      value: function _compile() {
        if (!this._isCompiled()) {
          this._template = template$1.cloneNode(true);
        } else {
          this._template = util$4.findChild(this, '.progress-bar');
        }

        this._primary = util$4.findChild(this._template, '.progress-bar__primary');
        this._secondary = util$4.findChild(this._template, '.progress-bar__secondary');

        this._updateDeterminate();

        this._updateValue();

        this.appendChild(this._template);
        autoStyle.prepare(this);
        ModifierUtil.initModifier(this, scheme$a);
      }
    }, {
      key: "_isCompiled",
      value: function _isCompiled() {
        if (!util$4.findChild(this, '.progress-bar')) {
          return false;
        }

        var barElement = util$4.findChild(this, '.progress-bar');

        if (!util$4.findChild(barElement, '.progress-bar__secondary')) {
          return false;
        }

        if (!util$4.findChild(barElement, '.progress-bar__primary')) {
          return false;
        }

        return true;
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'modifier') {
          ModifierUtil.onModifierChanged(last, current, this, scheme$a);
          this.hasAttribute(INDET$1) && this._updateDeterminate();
        } else if (name === 'value' || name === 'secondary-value') {
          this._updateValue();
        } else if (name === INDET$1) {
          this._updateDeterminate();
        }
      }
    }, {
      key: "_updateDeterminate",
      value: function _updateDeterminate() {
        var _this2 = this;

        contentReady(this, function () {
          return util$4.toggleModifier(_this2, INDET$1, {
            force: _this2.hasAttribute(INDET$1)
          });
        });
      }
    }, {
      key: "_updateValue",
      value: function _updateValue() {
        var _this3 = this;

        contentReady(this, function () {
          _this3._primary.style.width = _this3.hasAttribute('value') ? _this3.getAttribute('value') + '%' : '0%';
          _this3._secondary.style.width = _this3.hasAttribute('secondary-value') ? _this3.getAttribute('secondary-value') + '%' : '0%';
        });
      }
      /**
       * @property value
       * @type {Number}
       * @description
       *   [en]Current progress. Should be a value between 0 and 100.[/en]
       *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
       */

    }, {
      key: "value",
      get: function get() {
        return parseInt(this.getAttribute('value') || '0');
      }
      /**
       * @property secondaryValue
       * @type {Number}
       * @description
       *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
       *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
       */
      ,
      set: function set(value) {
        if (typeof value !== 'number' || value < 0 || value > 100) {
          util$4.throw('Invalid value');
        }

        this.setAttribute('value', Math.floor(value));
      }
    }, {
      key: "secondaryValue",
      get: function get() {
        return parseInt(this.getAttribute('secondary-value') || '0');
      }
      /**
       * @property indeterminate
       * @type {Boolean}
       * @description
       *   [en]If this property is `true`, an infinite looping animation will be shown.[/en]
       *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
       */
      ,
      set: function set(value) {
        if (typeof value !== 'number' || value < 0 || value > 100) {
          util$4.throw('Invalid value');
        }

        this.setAttribute('secondary-value', Math.floor(value));
      }
    }, {
      key: "indeterminate",
      get: function get() {
        return this.hasAttribute(INDET$1);
      },
      set: function set(value) {
        if (value) {
          this.setAttribute(INDET$1, '');
        } else {
          this.removeAttribute(INDET$1);
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'value', 'secondary-value', INDET$1];
      }
    }]);

    return ProgressBarElement;
  }(BaseElement);
  onsElements.ProgressBar = ProgressBarElement;
  customElements.define('ons-progress-bar', ProgressBarElement);

  var scheme$9 = {
    '.progress-circular': 'progress-circular--*',
    '.progress-circular__background': 'progress-circular--*__background',
    '.progress-circular__primary': 'progress-circular--*__primary',
    '.progress-circular__secondary': 'progress-circular--*__secondary'
  };
  var template = util$4.createElement("\n  <svg class=\"progress-circular\">\n    <circle class=\"progress-circular__background\" />\n    <circle class=\"progress-circular__secondary\" cx=\"50%\" cy=\"50%\" r=\"40%\" />\n    <circle class=\"progress-circular__primary\" cx=\"50%\" cy=\"50%\" r=\"40%\" />\n  </svg>\n");
  var INDET = 'indeterminate';
  /**
   * @element ons-progress-circular
   * @category visual
   * @description
   *   [en]
   *     This component displays a circular progress indicator. It can either be used to show how much of a task has been completed or to show a looping animation to indicate that an operation is currently running.
   *   [/en]
   *   [ja][/ja]
   * @codepen EVzMjR
   * @tutorial vanilla/Reference/progress-circular
   * @seealso ons-progress-bar
   *   [en]The `<ons-progress-bar>` component displays a bar progress indicator.[/en]
   *   [ja][/ja]
   * @example
   * <ons-progress-circular
   *  value="55"
   *  secondary-value="87">
   * </ons-progress-circular>
   *
   * <ons-progress-circular
   *  indeterminate>
   * </ons-progress-circular>
   */

  var ProgressCircularElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(ProgressCircularElement, _BaseElement);

    var _super = _createSuper(ProgressCircularElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]Change the appearance of the progress indicator.[/en]
     *   [ja]プログレスインジケータの見た目を変更します。[/ja]
     */

    /**
     * @attribute value
     * @type {Number}
     * @description
     *   [en]Current progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */

    /**
     * @attribute secondary-value
     * @type {Number}
     * @description
     *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */

    /**
     * @attribute indeterminate
     * @description
     *   [en]If this attribute is set, an infinite looping animation will be shown.[/en]
     *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
     */
    function ProgressCircularElement() {
      var _this;

      _classCallCheck(this, ProgressCircularElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      return _this;
    }

    _createClass(ProgressCircularElement, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'modifier') {
          ModifierUtil.onModifierChanged(last, current, this, scheme$9);
          this.hasAttribute(INDET) && this._updateDeterminate();
        } else if (name === 'value' || name === 'secondary-value') {
          this._updateValue();
        } else if (name === INDET) {
          this._updateDeterminate();
        }
      }
    }, {
      key: "_updateDeterminate",
      value: function _updateDeterminate() {
        var _this2 = this;

        contentReady(this, function () {
          return util$4.toggleModifier(_this2, INDET, {
            force: _this2.hasAttribute(INDET)
          });
        });
      }
    }, {
      key: "_updateValue",
      value: function _updateValue() {
        var _this3 = this;

        if (this.hasAttribute('value')) {
          contentReady(this, function () {
            var per = Math.ceil(_this3.getAttribute('value') * 251.32 * 0.01);
            _this3._primary.style['stroke-dasharray'] = per + '%, 251.32%';
          });
        }

        if (this.hasAttribute('secondary-value')) {
          contentReady(this, function () {
            var per = Math.ceil(_this3.getAttribute('secondary-value') * 251.32 * 0.01);
            _this3._secondary.style.display = null;
            _this3._secondary.style['stroke-dasharray'] = per + '%, 251.32%';
          });
        } else {
          contentReady(this, function () {
            _this3._secondary.style.display = 'none';
          });
        }
      }
      /**
       * @property value
       * @type {Number}
       * @description
       *   [en]Current progress. Should be a value between 0 and 100.[/en]
       *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
       */

    }, {
      key: "value",
      get: function get() {
        return parseInt(this.getAttribute('value') || '0');
      }
      /**
       * @property secondaryValue
       * @type {Number}
       * @description
       *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
       *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
       */
      ,
      set: function set(value) {
        if (typeof value !== 'number' || value < 0 || value > 100) {
          util$4.throw('Invalid value');
        }

        this.setAttribute('value', Math.floor(value));
      }
    }, {
      key: "secondaryValue",
      get: function get() {
        return parseInt(this.getAttribute('secondary-value') || '0');
      }
      /**
       * @property indeterminate
       * @type {Boolean}
       * @description
       *   [en]If this property is `true`, an infinite looping animation will be shown.[/en]
       *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
       */
      ,
      set: function set(value) {
        if (typeof value !== 'number' || value < 0 || value > 100) {
          util$4.throw('Invalid value');
        }

        this.setAttribute('secondary-value', Math.floor(value));
      }
    }, {
      key: "indeterminate",
      get: function get() {
        return this.hasAttribute(INDET);
      },
      set: function set(value) {
        if (value) {
          this.setAttribute(INDET, '');
        } else {
          this.removeAttribute(INDET);
        }
      }
    }, {
      key: "_compile",
      value: function _compile() {
        if (this._isCompiled()) {
          this._template = util$4.findChild(this, '.progress-circular');
        } else {
          this._template = template.cloneNode(true);
        }

        this._primary = util$4.findChild(this._template, '.progress-circular__primary');
        this._secondary = util$4.findChild(this._template, '.progress-circular__secondary');

        this._updateDeterminate();

        this._updateValue();

        this.appendChild(this._template);
        autoStyle.prepare(this);
        ModifierUtil.initModifier(this, scheme$9);
      }
    }, {
      key: "_isCompiled",
      value: function _isCompiled() {
        if (!util$4.findChild(this, '.progress-circular')) {
          return false;
        }

        var svg = util$4.findChild(this, '.progress-circular');

        if (!util$4.findChild(svg, '.progress-circular__secondary')) {
          return false;
        }

        if (!util$4.findChild(svg, '.progress-circular__primary')) {
          return false;
        }

        return true;
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'value', 'secondary-value', INDET];
      }
    }]);

    return ProgressCircularElement;
  }(BaseElement);
  onsElements.ProgressCircular = ProgressCircularElement;
  customElements.define('ons-progress-circular', ProgressCircularElement);

  var STATE_INITIAL = 'initial';
  var STATE_PREACTION = 'preaction';
  var STATE_ACTION = 'action';

  var throwType = function throwType(el, type) {
    return util$4.throw("\"".concat(el, "\" must be ").concat(type));
  };
  /**
   * @element ons-pull-hook
   * @category control
   * @description
   *   [en]
   *     Component that adds **Pull to refresh** functionality to an `<ons-page>` element.
   *
   *     It can be used to perform a task when the user pulls down at the top of the page. A common usage is to refresh the data displayed in a page.
   *   [/en]
   *   [ja][/ja]
   * @codepen WbJogM
   * @tutorial vanilla/Reference/pull-hook
   * @example
   * <ons-page>
   *   <ons-pull-hook>
   *     Release to refresh
   *   </ons-pull-hook>
   * </ons-page>
   *
   * <script>
   *   document.querySelector('ons-pull-hook').onAction = function(done) {
   *     setTimeout(done, 1000);
   *   };
   * </script>
   */


  var PullHookElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(PullHookElement, _BaseElement);

    var _super = _createSuper(PullHookElement);

    /**
     * @event changestate
     * @description
     *   [en]Fired when the state is changed. The state can be either "initial", "preaction" or "action".[/en]
     *   [ja]コンポーネントの状態が変わった場合に発火します。状態は、"initial", "preaction", "action"のいずれかです。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクト。[/ja]
     * @param {Object} event.pullHook
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {String} event.state
     *   [en]Current state.[/en]
     *   [ja]現在の状態名を参照できます。[/ja]
     */

    /**
     * @event pull
     * @description
     *   [en]Fired when the pull hook is pulled.[/en]
     *   [ja][/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクト。[/ja]
     * @param {Object} event.ratio
     *   [en]The pulled distance ratio (scroll / height).[/en]
     *   [ja][/ja]
     * @param {String} event.animationOptions
     *   [en]The animation options object.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute disabled
     * @description
     *   [en]If this attribute is set the "pull-to-refresh" functionality is disabled.[/en]
     *   [ja]この属性がある時、disabled状態になりアクションが実行されなくなります[/ja]
     */

    /**
     * @attribute height
     * @type {String}
     * @description
     *   [en]Specify the height of the component. When pulled down further than this value it will switch to the "preaction" state. The default value is "64px".[/en]
     *   [ja]コンポーネントの高さを指定します。この高さ以上にpull downすると"preaction"状態に移行します。デフォルトの値は"64px"です。[/ja]
     */

    /**
     * @attribute threshold-height
     * @type {String}
     * @description
     *   [en]Specify the threshold height. The component automatically switches to the "action" state when pulled further than this value. The default value is "96px". A negative value will disable this property. If this value is lower than the height, it will skip "preaction" state.[/en]
     *   [ja]閾値となる高さを指定します。この値で指定した高さよりもpull downすると、このコンポーネントは自動的に"action"状態に移行します。[/ja]
     */

    /**
     * @attribute fixed-content
     * @description
     *   [en]If this attribute is set the content of the page will not move when pulling.[/en]
     *   [ja]この属性がある時、プルフックが引き出されている時にもコンテンツは動きません。[/ja]
     */
    function PullHookElement() {
      var _this;

      _classCallCheck(this, PullHookElement);

      _this = _super.call(this);
      _this._onDrag = _this._onDrag.bind(_assertThisInitialized(_this));
      _this._onDragStart = _this._onDragStart.bind(_assertThisInitialized(_this));
      _this._onDragEnd = _this._onDragEnd.bind(_assertThisInitialized(_this));
      _this._onScroll = _this._onScroll.bind(_assertThisInitialized(_this));

      _this._setState(STATE_INITIAL, true);

      _this._hide(); // Fix for transparent toolbar transitions


      var _util$defineListenerP = util$4.defineListenerProperty(_assertThisInitialized(_this), 'pull'),
          onConnected = _util$defineListenerP.onConnected,
          onDisconnected = _util$defineListenerP.onDisconnected;

      _this._connectOnPull = onConnected;
      _this._disconnectOnPull = onDisconnected;
      return _this;
    }

    _createClass(PullHookElement, [{
      key: "_setStyle",
      value: function _setStyle() {
        var height = this.height + 'px';
        styler(this, {
          height: height,
          lineHeight: height
        });
        this.style.display === '' && this._show();
      }
    }, {
      key: "_onScroll",
      value: function _onScroll(event) {
        var element = this._pageElement;

        if (element.scrollTop < 0) {
          element.scrollTop = 0;
        }
      }
    }, {
      key: "_canConsumeGesture",
      value: function _canConsumeGesture(gesture) {
        return gesture.direction === 'up' || gesture.direction === 'down';
      }
    }, {
      key: "_onDragStart",
      value: function _onDragStart(event) {
        var _this2 = this;

        if (!event.gesture || this.disabled) {
          return;
        }

        var tapY = event.gesture.center.clientY + this._pageElement.scrollTop;
        var maxY = window.innerHeight; // Only use drags that start near the pullHook to reduce flickerings

        var draggableAreaRatio = 1;
        this._ignoreDrag = event.consumed || tapY > maxY * draggableAreaRatio;

        if (!this._ignoreDrag) {
          var consume = event.consume;

          event.consume = function () {
            consume && consume();
            _this2._ignoreDrag = true; // This elements resizes .page__content so it is safer
            // to hide it when other components are dragged.

            _this2._hide();
          };

          if (this._canConsumeGesture(event.gesture)) {
            consume && consume();
            event.consumed = true;

            this._show(); // Not enough due to 'dragLockAxis'

          }
        }

        this._startScroll = this._pageElement.scrollTop;
      }
    }, {
      key: "_onDrag",
      value: function _onDrag(event) {
        var _this3 = this;

        if (!event.gesture || this.disabled || this._ignoreDrag || !this._canConsumeGesture(event.gesture)) {
          return;
        } // Necessary due to 'dragLockAxis' (25px)


        if (this.style.display === 'none') {
          this._show();
        }

        event.stopPropagation();
        event.gesture.center.clientY + this._pageElement.scrollTop;
        var scroll = Math.max(event.gesture.deltaY - this._startScroll, 0);

        if (scroll !== this._currentTranslation) {
          var th = this.thresholdHeight;

          if (th > 0 && scroll >= th) {
            event.gesture.stopDetect();
            setImmediate(function () {
              return _this3._finish();
            });
          } else if (scroll >= this.height) {
            this._setState(STATE_PREACTION);
          } else {
            this._setState(STATE_INITIAL);
          }

          this._translateTo(scroll);
        }
      }
    }, {
      key: "_onDragEnd",
      value: function _onDragEnd(event) {
        if (!event.gesture || this.disabled || this._ignoreDrag) {
          return;
        }

        event.stopPropagation();

        if (this._currentTranslation > 0) {
          var scroll = this._currentTranslation;

          if (scroll > this.height) {
            this._finish();
          } else {
            this._translateTo(0, {
              animate: true
            });
          }
        }
      }
      /**
       * @property onAction
       * @type {Function}
       * @description
       *   [en]This will be called in the `action` state if it exists. The function will be given a `done` callback as its first argument.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "onAction",
      get: function get() {
        return this._onAction;
      },
      set: function set(value) {
        if (value && !(value instanceof Function)) {
          throwType('onAction', 'function or null');
        }

        this._onAction = value;
      }
      /**
       * @property onPull
       * @type {Function}
       * @description
       *   [en]Hook called whenever the user pulls the element. It gets the pulled distance ratio (scroll / height) and an animationOptions object as arguments.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "_finish",
      value: function _finish() {
        var _this4 = this;

        this._setState(STATE_ACTION);

        this._translateTo(this.height, {
          animate: true
        });

        var action = this.onAction || function (done) {
          return done();
        };

        action(function () {
          _this4._translateTo(0, {
            animate: true
          });

          _this4._setState(STATE_INITIAL);
        });
      }
      /**
       * @property height
       * @type {Number}
       * @description
       *   [en]The height of the pull hook in pixels. The default value is `64px`.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "height",
      get: function get() {
        return parseInt(this.getAttribute('height') || '64', 10);
      }
      /**
       * @property thresholdHeight
       * @type {Number}
       * @description
       *   [en]The thresholdHeight of the pull hook in pixels. The default value is `96px`.[/en]
       *   [ja][/ja]
       */
      ,
      set: function set(value) {
        if (!util$4.isInteger(value)) {
          throwType('height', 'integer');
        }

        this.setAttribute('height', "".concat(value, "px"));
      }
    }, {
      key: "thresholdHeight",
      get: function get() {
        return parseInt(this.getAttribute('threshold-height') || '96', 10);
      },
      set: function set(value) {
        if (!util$4.isInteger(value)) {
          throwType('thresholdHeight', 'integer');
        }

        this.setAttribute('threshold-height', "".concat(value, "px"));
      }
    }, {
      key: "_setState",
      value: function _setState(state, noEvent) {
        var lastState = this.state;
        this.setAttribute('state', state);

        if (!noEvent && lastState !== this.state) {
          util$4.triggerElementEvent(this, 'changestate', {
            pullHook: this,
            state: state,
            lastState: lastState
          });
        }
      }
      /**
       * @property state
       * @readonly
       * @type {String}
       * @description
       *   [en]Current state of the element.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "state",
      get: function get() {
        return this.getAttribute('state');
      }
      /**
       * @property pullDistance
       * @readonly
       * @type {Number}
       * @description
       *   [en]The current number of pixels the pull hook has moved.[/en]
       *   [ja]現在のプルフックが引き出された距離をピクセル数。[/ja]
       */

    }, {
      key: "pullDistance",
      get: function get() {
        return this._currentTranslation;
      }
      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute('disabled');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'disabled', value);
      }
    }, {
      key: "_show",
      value: function _show() {
        var _this5 = this;

        // Run asyncrhonously to avoid conflicts with Animit's style clean
        setImmediate(function () {
          _this5.style.display = '';

          if (_this5._pageElement) {
            _this5._pageElement.style.marginTop = "-".concat(_this5.height, "px");
          }
        });
      }
    }, {
      key: "_hide",
      value: function _hide() {
        this.style.display = 'none';

        if (this._pageElement) {
          this._pageElement.style.marginTop = '';
        }
      }
      /**
       * @param {Number} scroll
       * @param {Object} options
       * @param {Function} [options.callback]
       */

    }, {
      key: "_translateTo",
      value: function _translateTo(scroll) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (this._currentTranslation == 0 && scroll == 0) {
          return;
        }

        this._currentTranslation = scroll;
        var opt = options.animate ? {
          duration: .3,
          timing: 'cubic-bezier(.1, .7, .1, 1)'
        } : {};
        util$4.triggerElementEvent(this, 'pull', {
          ratio: (scroll / this.height).toFixed(2),
          animationOptions: opt
        });
        var scrollElement = this.hasAttribute('fixed-content') ? this : this._pageElement;
        Animit(scrollElement).queue({
          transform: "translate3d(0px, ".concat(scroll, "px, 0px)")
        }, opt).play(function () {
          scroll === 0 && styler.clear(scrollElement, 'transition transform');
          options.callback instanceof Function && options.callback();
        });
      }
    }, {
      key: "_disableDragLock",
      value: function _disableDragLock() {
        // e2e tests need it
        this._dragLockDisabled = true;

        this._setupListeners(true);
      }
    }, {
      key: "_setupListeners",
      value: function _setupListeners(add) {
        var _this6 = this;

        var scrollToggle = function scrollToggle(action) {
          return _this6._pageElement["".concat(action, "EventListener")]('scroll', _this6._onScroll, false);
        };

        var gdToggle = function gdToggle(action) {
          var passive = {
            passive: true
          };

          _this6._gestureDetector[action]('drag', _this6._onDrag, passive);

          _this6._gestureDetector[action]('dragstart', _this6._onDragStart, passive);

          _this6._gestureDetector[action]('dragend', _this6._onDragEnd, passive);
        };

        if (this._gestureDetector) {
          gdToggle('off');

          this._gestureDetector.dispose();

          this._gestureDetector = null;
        }

        scrollToggle('remove');

        if (add) {
          this._gestureDetector = new GestureDetector(this._pageElement, {
            dragMinDistance: 1,
            dragDistanceCorrection: false,
            dragLockToAxis: !this._dragLockDisabled,
            passive: true
          });
          gdToggle('on');
          scrollToggle('add');
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this._currentTranslation = 0;
        this._pageElement = this.parentNode;

        this._setupListeners(true);

        this._setStyle();

        this._connectOnPull();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._hide();

        this._setupListeners(false);

        this._disconnectOnPull();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'height' && this._pageElement) {
          this._setStyle();
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['height'];
      }
    }, {
      key: "events",
      get: function get() {
        return ['changestate'];
      }
    }]);

    return PullHookElement;
  }(BaseElement);
  onsElements.PullHook = PullHookElement;
  customElements.define('ons-pull-hook', PullHookElement);

  var scheme$8 = {
    '': 'range--*',
    '.range__input': 'range--*__input',
    '.range__focus-ring': 'range--*__focus-ring'
  };
  var activeClassToken = 'range__input--active';
  /**
   * @element ons-range
   * @category form
   * @modifier material
   *   [en]Material Design slider[/en]
   *   [ja][/ja]
   * @description
   *   [en]
   *     Range input component. Used to display a draggable slider.
   *
   *     Works very similar to the `<input type="range">` element.
   *   [/en]
   *   [ja][/ja]
   * @codepen xZQomM
   * @tutorial vanilla/Reference/range
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @seealso ons-input
   *   [en]The `<ons-input>` component is used to display text inputs, radio buttons and checkboxes.[/en]
   *   [ja][/ja]
   * @example
   * <ons-range value="20"></ons-range>
   * <ons-range modifier="material" value="10"></range>
   */

  var RangeElement = /*#__PURE__*/function (_BaseInputElement) {
    _inherits(RangeElement, _BaseInputElement);

    var _super = _createSuper(RangeElement);

    function RangeElement() {
      var _this;

      _classCallCheck(this, RangeElement);

      _this = _super.call(this);
      _this._onMouseDown = _this._onMouseDown.bind(_assertThisInitialized(_this));
      _this._onMouseUp = _this._onMouseUp.bind(_assertThisInitialized(_this));
      _this._onTouchStart = _this._onTouchStart.bind(_assertThisInitialized(_this));
      _this._onTouchEnd = _this._onTouchEnd.bind(_assertThisInitialized(_this));
      _this._onInput = _this._update.bind(_assertThisInitialized(_this));
      _this._onDragstart = _this._onDragstart.bind(_assertThisInitialized(_this));
      _this._onDragend = _this._onDragend.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(RangeElement, [{
      key: "_compile",
      value: function _compile() {
        _get(_getPrototypeOf(RangeElement.prototype), "_compile", this).call(this);

        this._updateDisabled(this.hasAttribute('disabled'));
      }
      /* Inherited props */

    }, {
      key: "_update",
      value: function _update() {
        var input = this._input;
        var focusRing = this._focusRing;
        input.style.backgroundSize = "".concat(100 * this._ratio, "% 2px");
        focusRing.value = this.value; // NOTE: "_zero" attribute is used for CSS styling.

        if (input.min === '' && input.value === '0' || input.min === input.value) {
          input.setAttribute('_zero', '');
        } else {
          input.removeAttribute('_zero');
        }

        ['min', 'max'].forEach(function (attr) {
          return focusRing[attr] = input[attr];
        });
      }
    }, {
      key: "_scheme",
      get: function get() {
        return scheme$8;
      }
    }, {
      key: "_template",
      get: function get() {
        return "\n      <input type=\"".concat(this.type, "\" class=\"").concat(this._defaultClassName, "__input\">\n      <input type=\"range\" class=\"range__focus-ring\" tabIndex=\"-1\">\n    ");
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        return 'range';
      }
    }, {
      key: "type",
      get: function get() {
        return 'range';
      }
      /* Own props */

    }, {
      key: "_onMouseDown",
      value: function _onMouseDown(e) {
        var _this2 = this;

        this._input.classList.add(activeClassToken);

        setImmediate(function () {
          return _this2._input.focus();
        });
      }
    }, {
      key: "_onTouchStart",
      value: function _onTouchStart(e) {
        this._onMouseDown();
      }
    }, {
      key: "_onMouseUp",
      value: function _onMouseUp(e) {
        this._input.classList.remove(activeClassToken);
      }
    }, {
      key: "_onTouchEnd",
      value: function _onTouchEnd(e) {
        this._onMouseUp(e);
      }
    }, {
      key: "_onDragstart",
      value: function _onDragstart(e) {
        e.consumed = true;
        e.gesture.stopPropagation();

        this._input.classList.add(activeClassToken);

        this.addEventListener('drag', this._onDrag);
      }
    }, {
      key: "_onDrag",
      value: function _onDrag(e) {
        e.stopPropagation();
      }
    }, {
      key: "_onDragend",
      value: function _onDragend(e) {
        this._input.classList.remove(activeClassToken);

        this.removeEventListener('drag', this._onDrag);
      }
    }, {
      key: "_focusRing",
      get: function get() {
        return this.children[1];
      }
    }, {
      key: "_ratio",
      get: function get() {
        // Returns the current ratio.
        var min = this._input.min === '' ? 0 : parseInt(this._input.min);
        var max = this._input.max === '' ? 100 : parseInt(this._input.max);
        return (this.value - min) / (max - min);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'disabled') {
          this._updateDisabled(current);
        }

        _get(_getPrototypeOf(RangeElement.prototype), "attributeChangedCallback", this).call(this, name, last, current);
      }
      /**
       * @param {boolean} disabled
       */

    }, {
      key: "_updateDisabled",
      value: function _updateDisabled(disabled) {
        if (disabled) {
          this.classList.add('range--disabled');
        } else {
          this.classList.remove('range--disabled');
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this._setupListeners(true);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._setupListeners(false);
      }
    }, {
      key: "_setupListeners",
      value: function _setupListeners(add) {
        var action = (add ? 'add' : 'remove') + 'EventListener';
        util$4[action](this, 'touchstart', this._onTouchStart, {
          passive: true
        });
        this[action]('mousedown', this._onMouseDown);
        this[action]('mouseup', this._onMouseUp);
        this[action]('touchend', this._onTouchEnd);
        this[action]('dragstart', this._onDragstart);
        this[action]('dragend', this._onDragend);
        this[action]('input', this._onInput);
      }
      /**
       * @attribute disabled
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @property value
       * @type {Number}
       * @description
       *   [en]Current value.[/en]
       *   [ja][/ja]
       */

      /**
       * @method focus
       * @signature focus()
       * @description
       *   [en]Focuses the range.[/en]
       *   [ja][/ja]
       */

      /**
       * @method blur
       * @signature blur()
       * @description
       *   [en]Removes focus from the range.[/en]
       *   [ja][/ja]
       */

    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['disabled'].concat(_toConsumableArray(BaseInputElement.observedAttributes));
      }
    }]);

    return RangeElement;
  }(BaseInputElement);
  onsElements.Range = RangeElement;
  customElements.define('ons-range', RangeElement);

  /**
   * @element ons-row
   * @category grid
   * @description
   *   [en]Represents a row in the grid system. Use with `<ons-col>` to layout components.[/en]
   *   [ja]グリッドシステムにて行を定義します。ons-colとともに使用し、コンポーネントの配置に使用します。[/ja]
   * @codepen GgujC {wide}
   * @guide features.html
   *   [en]Layouting guide[/en]
   *   [ja]レイアウト調整[/ja]
   * @seealso ons-col
   *   [en]The `<ons-col>` component is used as children of `<ons-row>`.[/en]
   *   [ja]ons-colコンポーネント[/ja]
   * @note
   *   [en]For Android 4.3 and earlier, and iOS6 and earlier, when using mixed alignment with ons-row and ons-col, they may not be displayed correctly. You can use only one vertical-align.[/en]
   *   [ja]Android 4.3以前、もしくはiOS 6以前のOSの場合、ons-rowとons-colを組み合わせてそれぞれのons-col要素のvertical-align属性の値に別々の値を指定すると、描画が崩れる場合があります。vertical-align属性の値には一つの値だけを指定できます。[/ja]
   * @example
   * <ons-row>
   *   <ons-col width="50px"><ons-icon icon="fa-twitter"></ons-icon></ons-col>
   *   <ons-col>Text</ons-col>
   * </ons-row>
   */

  /**
   * @attribute vertical-align
   * @type {String}
   * @description
   *   [en]Short hand attribute for aligning vertically. Valid values are top, bottom, and center.[/en]
   *   [ja]縦に整列するために指定します。top、bottom、centerのいずれかを指定できます。[/ja]
   */

  var RowElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(RowElement, _BaseElement);

    var _super = _createSuper(RowElement);

    function RowElement() {
      _classCallCheck(this, RowElement);

      return _super.apply(this, arguments);
    }

    return _createClass(RowElement);
  }(BaseElement);
  onsElements.Row = RowElement;
  customElements.define('ons-row', RowElement);

  var defaultClassName$5 = 'segment';
  var scheme$7 = {
    '': 'segment--*',
    '.segment__item': 'segment--*__item',
    '.segment__input': 'segment--*__input',
    '.segment__button': 'segment--*__button'
  };

  var generateId = function () {
    var i = 0;
    return function () {
      return 'ons-segment-gen-' + i++;
    };
  }();
  /**
   * @element ons-segment
   * @category control
   * @modifier material
   *   [en]Material Design segment[/en]
   *   [ja][/ja]
   * @description
   *   [en]
   *     Segment component. Use this component to have a button bar with automatic styles that switch on click of another button.
   *
   *     Will automatically display as a Material Design segment on Android.
   *   [/en]
   *   [ja][/ja]
   * @codepen hLayx
   * @tutorial vanilla/Reference/segment
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
   * @example
   * <ons-segment>
   *   <ons-button>Label 1</ons-button>
   *   <ons-button>Label 2</ons-button>
   *   <ons-button>Label 3</ons-button>
   * </ons-segment>
   */


  var SegmentElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(SegmentElement, _BaseElement);

    var _super = _createSuper(SegmentElement);

    /**
     * @event postchange
     * @description
     *   [en]Fires after the active button is changed.[/en]
     *   [ja][/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja][/ja]
     * @param {Number} event.index
     *   [en]Tapped button index.[/en]
     *   [ja][/ja]
     * @param {Object} event.segmentItem
     *   [en]Segment item object.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the segment.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute tabbar-id
     * @initonly
     * @type {String}
     * @description
     *  [en]ID of the tabbar element to "connect" to the segment. Must be inside the same page.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute active-index
     * @default 0
     * @type {Number}
     * @description
     *  [en]Index of the active button. If a tabbar is connected, this will be set to the tabbar's active index.[/en]
     *  [ja][/ja]
     */

    /**
     * @property activeIndex
     * @default 0
     * @type {Number}
     * @description
     *  [en]Index of the active button. If a tabbar is connected, this will be set to the tabbar's active index.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute disabled
     * @description
     *   [en]Specify if segment should be disabled.[/en]
     *   [ja]ボタンを無効化する場合は指定します。[/ja]
     */
    function SegmentElement() {
      var _this;

      _classCallCheck(this, SegmentElement);

      _this = _super.call(this);
      _this._segmentId = generateId();
      _this._tabbar = null;
      _this._onChange = _this._onChange.bind(_assertThisInitialized(_this));
      _this._onTabbarPreChange = _this._onTabbarPreChange.bind(_assertThisInitialized(_this));
      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();

        setImmediate(function () {
          return _this._lastActiveIndex = _this._tabbar ? _this._tabbar.getActiveTabIndex() : _this.getActiveButtonIndex();
        });
      });
      return _this;
    }

    _createClass(SegmentElement, [{
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(defaultClassName$5);

        for (var index = this.children.length - 1; index >= 0; index--) {
          var item = this.children[index];
          item.classList.add('segment__item');
          var input = util$4.findChild(item, '.segment__input') || util$4.create('input.segment__input');
          input.type = 'radio';
          input.value = index;
          input.name = input.name || this._segmentId;
          input.checked = !this.hasAttribute('tabbar-id') && index === (this.activeIndex || 0);
          var button = util$4.findChild(item, '.segment__button') || util$4.create('.segment__button');

          if (button.parentElement !== item) {
            while (item.firstChild) {
              button.appendChild(item.firstChild);
            }
          }

          item.appendChild(input);
          item.appendChild(button);
        }

        ModifierUtil.initModifier(this, scheme$7);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        contentReady(this, function () {
          if (_this2.hasAttribute('tabbar-id')) {
            var page = util$4.findParent(_this2, 'ons-page');
            _this2._tabbar = page && page.querySelector('#' + _this2.getAttribute('tabbar-id'));

            if (!_this2._tabbar || _this2._tabbar.tagName !== 'ONS-TABBAR') {
              util$4.throw("No tabbar with id ".concat(_this2.getAttribute('tabbar-id'), " was found."));
            }

            _this2._tabbar.setAttribute('hide-tabs', '');

            setImmediate(function () {
              var index = _this2._tabbar.getActiveTabIndex();

              _this2._setChecked(index);

              _this2.activeIndex = index;
            });

            _this2._tabbar.addEventListener('prechange', _this2._onTabbarPreChange);
          }
        });
        this.addEventListener('change', this._onChange);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this3 = this;

        contentReady(this, function () {
          if (_this3._tabbar) {
            _this3._tabbar.removeEventListener('prechange', _this3._onTabbarPreChange);

            _this3._tabbar = null;
          }
        });
        this.removeEventListener('change', this._onChange);
      }
    }, {
      key: "_setChecked",
      value: function _setChecked(index) {
        this.children[index].firstElementChild.checked = true;
      }
      /**
       * @method setActiveButton
       * @signature setActiveButton(index, [options])
       * @param {Number} index
       *   [en]Button index.[/en]
       *   [ja][/ja]
       * @param {Object} [options]
       *   [en]Parameter object, works only if there is a connected tabbar. Supports the same options as `ons-tabbar`'s `setActiveTab` method.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Make button with the specified index active. If there is a connected tabbar it shows the corresponding tab page. In this case animations and their options can be specified by the second parameter.[/en]
       *   [ja][/ja]
       * @return {Promise}
       *   [en]Resolves to the selected index or to the new page element if there is a connected tabbar.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "setActiveButton",
      value: function setActiveButton(index, options) {
        if (this._tabbar) {
          return this._tabbar.setActiveTab(index, options);
        }

        this._setChecked(index);

        this._postChange(index);

        return Promise.resolve(index);
      }
      /**
       * @method getActiveButtonIndex
       * @signature getActiveButtonIndex()
       * @return {Number}
       *   [en]The index of the currently active button.[/en]
       *   [ja][/ja]
       * @description
       *   [en]Returns button index of current active button. If active button is not found, returns -1.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "getActiveButtonIndex",
      value: function getActiveButtonIndex() {
        for (var i = this.children.length - 1; i >= 0; i--) {
          // Array.findIndex
          if (this.children[i].firstElementChild.checked) {
            return i;
          }
        }

        return -1;
      }
    }, {
      key: "_onChange",
      value: function _onChange(event) {
        event.stopPropagation();
        this._tabbar ? this._tabbar.setActiveTab(this.getActiveButtonIndex(), {
          reject: false
        }) : this._postChange(this.getActiveButtonIndex());
      }
    }, {
      key: "_onTabbarPreChange",
      value: function _onTabbarPreChange(event) {
        var _this4 = this;

        setImmediate(function () {
          if (!event.detail.canceled) {
            _this4._setChecked(event.index);

            _this4._postChange(event.index);
          }
        });
      }
    }, {
      key: "_postChange",
      value: function _postChange(index) {
        util$4.triggerElementEvent(this, 'postchange', {
          index: index,
          activeIndex: index,
          lastActiveIndex: this._lastActiveIndex,
          segmentItem: this.children[index]
        });
        this._lastActiveIndex = index;
        this.activeIndex = index;
      }
      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the segment is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute('disabled');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'disabled', value);
      }
    }, {
      key: "activeIndex",
      get: function get() {
        return parseInt(this.getAttribute('active-index'));
      },
      set: function set(value) {
        if (value !== null && value !== undefined) {
          this.setAttribute('active-index', value);
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this5 = this;

        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$5, scheme$7);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$7);
            break;

          case 'active-index':
            contentReady(this, function () {
              if (_this5.getActiveButtonIndex() !== _this5.activeIndex) {
                _this5.setActiveButton(_this5.activeIndex);
              }
            });
            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['class', 'modifier', 'active-index'];
      }
    }, {
      key: "events",
      get: function get() {
        return ['postchange'];
      }
    }]);

    return SegmentElement;
  }(BaseElement);
  onsElements.Segment = SegmentElement;
  customElements.define('ons-segment', SegmentElement);

  var scheme$6 = {
    '': 'select-* select--*',
    '.select-input': 'select-input--*'
  };
  var defaultClassName$4 = 'select';
  var INPUT_ATTRIBUTES = ['autofocus', 'disabled', 'form', 'multiple', 'name', 'required', 'size'];
  /**
   * @element ons-select
   * @category form
   * @modifier material
   *  [en]Displays a Material Design select input.[/en]
   *  [ja][/ja]
   * @modifier underbar
   *  [en]Displays a horizontal line underneath a select input.[/en]
   *  [ja][/ja]
   * @description
   *   [en]
   *     Select component. If you want to place a select with an ID of `my-id` on a page, use `<ons-select select-id="my-id">`.
   *
   *     The component will automatically display as a Material Design select on Android.
   *
   *     Most attributes that can be used for a normal `<select>` element can also be used on the `<ons-select>` element.
   *   [/en]
   *   [ja]セレクトボックスを表示するコンポーネントです。`select` 要素に使用できる属性の多くが `ons-select` 要素でも利用できます。[/ja]
   * @codepen hLayx
   * @tutorial vanilla/Reference/select
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
   * @example
   * <ons-select>
   *   <option value="1">1</option>
   *   <option value="2">2nd</option>
   *   <option value="3">3rd option</option>
   * </ons-select>
   */

  var SelectElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(SelectElement, _BaseElement);

    var _super = _createSuper(SelectElement);

    /**
     * @attribute autofocus
     * @type {Boolean}
     * @default false
     * @description
     *  [en]Element automatically gains focus on page load.[/en]
     *  [ja]ページロード時にこのセレクトボックスにフォーカスが移るようにします。[/ja]
     */

    /**
     * @attribute disabled
     * @type {Boolean}
     * @default false
     * @description
     *   [en]Specify if select input should be disabled.[/en]
     *   [ja]このセレクトボックスを無効化する場合に指定します。[/ja]
     */

    /**
     * @attribute form
     * @type {String}
     * @description
     *   [en]Associate a select element to an existing form on the page, even if not nested.[/en]
     *   [ja]このセレクトボックスを、指定した `form` 要素に紐付けます。セレクトボックスを `form` 要素の外側に配置する際に使用します。[/ja]
     */

    /**
     * @attribute multiple
     * @type {Boolean}
     * @default false
     * @description
     *  [en]If this attribute is defined, multiple options can be selected at once.[/en]
     *  [ja]選択肢の複数選択を有効にします。[/ja]
     */

    /**
     * @attribute name
     * @type {String}
     * @description
     *   [en]Name the select element, useful for instance if it is part of a form.[/en]
     *   [ja]このセレクトボックスの名前を指定します。通常 `form` 要素と共に使用します。[/ja]
     */

    /**
     * @attribute required
     * @type {Boolean}
     * @description
     *   [en]Make the select input required for submitting the form it is part of.[/en]
     *   [ja]このセレクトボックスを入力必須にする場合に指定します。通常 `form` 要素と共に使用します。[/ja]
     */

    /**
     * @attribute select-id
     * @type {String}
     * @description
     *   [en]ID given to the inner select, useful for dynamic manipulation.[/en]
     *   [ja]このセレクトボックスが内部に持つ select 要素に与える ID を指定します。セレクトボックスの内容を動的に変更する必要がある場合に使用します。[/ja]
     */

    /**
     * @attribute size
     * @type {Number}
     * @default 1
     * @description
     *   [en]How many options are displayed; if there are more than the size then a scroll appears to navigate them.[/en]
     *   [ja]一度に表示する選択肢の個数を指定します。選択肢がこの属性で指定した個数よりも多い場合、スクロールが有効になります。[/ja]
     */
    function SelectElement() {
      var _this;

      _classCallCheck(this, SelectElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });

      _this._deriveGetters();

      return _this;
    }

    _createClass(SelectElement, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this2 = this;

        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$4, scheme$6);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$6);
            break;
        }

        if (INPUT_ATTRIBUTES.indexOf(name) >= 0) {
          contentReady(this, function () {
            return _this2._updateBoundAttributes();
          });
        }
      }
    }, {
      key: "_select",
      get: function get() {
        return this.querySelector('select');
      }
    }, {
      key: "_updateBoundAttributes",
      value: function _updateBoundAttributes() {
        var _this3 = this;

        INPUT_ATTRIBUTES.forEach(function (attr) {
          if (_this3.hasAttribute(attr)) {
            _this3._select.setAttribute(attr, _this3.getAttribute(attr));
          } else {
            _this3._select.removeAttribute(attr);
          }
        });
      }
      /**
       * @property length
       * @description
       *   [en]Number of options in the select box.[/en]
       *   [ja]このセレクトボックスに含まれる選択肢の個数を返します。 `select` 要素[/ja]
       */

      /**
       * @property options
       * @description
       *   [en]Several options for handling the select DOM object.[/en]
       *   [ja]このセレクトボックスに含まれる `option` 要素の配列を返します。[/ja]
       */

      /**
       * @property selectedIndex
       * @description
       *   [en]Index of the currently selected option.[/en]
       *   [ja]現在選択されている選択肢のインデックスを返します。[/ja]
       */

      /**
       * @property value
       * @description
       *   [en]Value of the currently selected option.[/en]
       *   [ja]現在選択されている選択肢の値を返します。[/ja]
       */

    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(defaultClassName$4);
        var sel = this._select || document.createElement('select');

        if (!sel.id && this.hasAttribute('select-id')) {
          sel.id = this.getAttribute('select-id');
        }

        sel.classList.add('select-input');

        if (!this._select) {
          util$4.arrayFrom(this.childNodes).forEach(function (element) {
            return sel.appendChild(element);
          });
          this.appendChild(sel);
        }

        ModifierUtil.initModifier(this, scheme$6);
      }
    }, {
      key: "_deriveGetters",
      value: function _deriveGetters() {
        var _this4 = this;

        ['disabled', 'length', 'multiple', 'name', 'options', 'selectedIndex', 'size', 'value', 'form', 'type'].forEach(function (key) {
          Object.defineProperty(_this4, key, {
            configurable: true,
            enumerable: true,
            get: function get() {
              return _this4._select[key];
            },
            set: ['form', 'type'].indexOf(key) === -1 ? function (value) {
              return contentReady(_this4, function () {
                return _this4._select[key] = value;
              });
            } : undefined
          });
        });
      }
    }, {
      key: "add",
      value: function add(option) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        this._select.add(option, index);
      } // If called with an index argument, removes the option element with the given index.
      // If called with no arguments, removes this.
      // This behaviour might sound crazy but it is the same as <select>'s `remove` method.
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/remove

    }, {
      key: "remove",
      value: function remove(index) {
        if (index === undefined) {
          Element.prototype.remove.call(this);
        } else {
          this._select.remove(index);
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'class'].concat(INPUT_ATTRIBUTES);
      }
    }]);

    return SelectElement;
  }(BaseElement);
  onsElements.Select = SelectElement;
  customElements.define('ons-select', SelectElement);

  var defaultClassName$3 = 'fab fab--mini speed-dial__item';
  var scheme$5 = {
    '': 'fab--* speed-dial__item--*'
  };
  /**
   * @element ons-speed-dial-item
   * @category control
   * @description
   *   [en]
   *     This component displays the child elements of the Material Design Speed dial component.
   *   [/en]
   *   [ja]
   *     Material DesignのSpeed dialの子要素を表現する要素です。
   *   [/ja]
   * @codepen dYQYLg
   * @tutorial vanilla/Reference/speed-dial
   * @seealso ons-speed-dial
   *   [en]The `<ons-speed-dial>` component.[/en]
   *   [ja]ons-speed-dialコンポーネント[/ja]
   * @seealso ons-fab
   *   [en]ons-fab component[/en]
   *   [ja]ons-fabコンポーネント[/ja]
   * @example
   * <ons-speed-dial position="left bottom">
   *   <ons-fab>
   *     <ons-icon icon="fa-twitter"></ons-icon>
   *   </ons-fab>
   *   <ons-speed-dial-item>A</ons-speed-dial-item>
   *   <ons-speed-dial-item>B</ons-speed-dial-item>
   *   <ons-speed-dial-item>C</ons-speed-dial-item>
   * </ons-speed-dial>
   */

  var SpeedDialItemElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(SpeedDialItemElement, _BaseElement);

    var _super = _createSuper(SpeedDialItemElement);

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the component.[/en]
     *   [ja]このコンポーネントの表現を指定します。[/ja]
     */

    /**
     * @attribute ripple
     * @description
     *  [en]If this attribute is defined, the button will have a ripple effect when tapped.[/en]
     *  [ja][/ja]
     */
    function SpeedDialItemElement() {
      var _this;

      _classCallCheck(this, SpeedDialItemElement);

      _this = _super.call(this);

      _this._compile();

      _this._boundOnClick = _this._onClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(SpeedDialItemElement, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$3, scheme$5);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$5);
            util$4.addModifier(this, 'mini');
            break;

          case 'ripple':
            this._updateRipple();

        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.addEventListener('click', this._boundOnClick, false);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener('click', this._boundOnClick, false);
      }
    }, {
      key: "_updateRipple",
      value: function _updateRipple() {
        util$4.updateRipple(this);
      }
    }, {
      key: "_onClick",
      value: function _onClick(e) {
        e.stopPropagation();
      }
    }, {
      key: "_compile",
      value: function _compile() {
        var _this2 = this;

        autoStyle.prepare(this);
        defaultClassName$3.split(/\s+/).forEach(function (token) {
          return _this2.classList.add(token);
        });
        util$4.addModifier(this, 'mini');

        this._updateRipple();

        ModifierUtil.initModifier(this, scheme$5);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'ripple', 'class'];
      }
    }]);

    return SpeedDialItemElement;
  }(BaseElement);
  onsElements.SpeedDialItem = SpeedDialItemElement;
  customElements.define('ons-speed-dial-item', SpeedDialItemElement);

  var defaultClassName$2 = 'speed-dial';
  var scheme$4 = {
    '': 'speed-dial--*'
  };
  /**
   * @element ons-speed-dial
   * @category control
   * @description
   *   [en]
   *     Element that displays a Material Design Speed Dialog component. It is useful when there are more than one primary action that can be performed in a page.
   *
   *     The Speed dial looks like a `<ons-fab>` element but will expand a menu when tapped.
   *   [/en]
   *   [ja][/ja]
   * @codepen dYQYLg
   * @tutorial vanilla/Reference/speed-dial
   * @seealso ons-speed-dial-item
   *   [en]The `<ons-speed-dial-item>` represents a menu item.[/en]
   *   [ja]ons-speed-dial-itemコンポーネント[/ja]
   * @seealso ons-fab
   *   [en]ons-fab component[/en]
   *   [ja]ons-fabコンポーネント[/ja]
   * @example
   * <ons-speed-dial position="left bottom">
   *   <ons-fab>
   *     <ons-icon icon="fa-twitter"></ons-icon>
   *   </ons-fab>
   *   <ons-speed-dial-item>A</ons-speed-dial-item>
   *   <ons-speed-dial-item>B</ons-speed-dial-item>
   *   <ons-speed-dial-item>C</ons-speed-dial-item>
   * </ons-speed-dial>
   */

  var SpeedDialElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(SpeedDialElement, _BaseElement);

    var _super = _createSuper(SpeedDialElement);

    /**
     * @event open
     * @description
     *   [en]Fired when the menu items are shown.[/en]
     *   [ja][/ja]
     */

    /**
     * @event close
     * @description
     *   [en]Fired when the menu items are hidden.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the component.[/en]
     *   [ja]このコンポーネントの表現を指定します。[/ja]
     */

    /**
     * @attribute ripple
     * @description
     *  [en]If this attribute is defined, the button will have a ripple effect when tapped.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute position
     * @type {String}
     * @description
     *   [en]
     *     Specify the vertical and horizontal position of the component.
     *     I.e. to display it in the top right corner specify "right top".
     *     Choose from "right", "left", "top" and "bottom".
     *   [/en]
     *   [ja]
     *     この要素を表示する左右と上下の位置を指定します。
     *     例えば、右上に表示する場合には"right top"を指定します。
     *     左右と上下の位置の指定には、rightとleft、topとbottomがそれぞれ指定できます。
     *   [/ja]
     */

    /**
     * @attribute direction
     * @type {String}
     * @description
     *   [en]Specify the direction the items are displayed. Possible values are "up", "down", "left" and "right".[/en]
     *   [ja]
     *     要素が表示する方向を指定します。up, down, left, rightが指定できます。
     *   [/ja]
     */

    /**
     * @attribute disabled
     * @description
     *   [en]Specify if button should be disabled.[/en]
     *   [ja]無効化する場合に指定します。[/ja]
     */
    function SpeedDialElement() {
      var _this;

      _classCallCheck(this, SpeedDialElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        _this._compile();
      });
      _this._itemShown = false;
      _this._boundOnClick = _this._onClick.bind(_assertThisInitialized(_this));

      var _util$defineListenerP = util$4.defineListenerProperty(_assertThisInitialized(_this), 'click'),
          onConnected = _util$defineListenerP.onConnected,
          onDisconnected = _util$defineListenerP.onDisconnected;

      _this._connectOnClick = onConnected;
      _this._disconnectOnClick = onDisconnected;
      return _this;
    }

    _createClass(SpeedDialElement, [{
      key: "_compile",
      value: function _compile() {
        this.classList.add(defaultClassName$2);
        autoStyle.prepare(this);

        this._updateRipple();

        ModifierUtil.initModifier(this, scheme$4);

        if (this.hasAttribute('direction')) {
          this._updateDirection(this.getAttribute('direction'));
        } else {
          this._updateDirection('up');
        }

        this._updatePosition();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this2 = this;

        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$2, scheme$4);
            break;

          case 'modifier':
            ModifierUtil.onModifierChanged(last, current, this, scheme$4);
            break;

          case 'ripple':
            contentReady(this, function () {
              return _this2._updateRipple();
            });
            break;

          case 'direction':
            contentReady(this, function () {
              return _this2._updateDirection(current);
            });
            break;

          case 'position':
            contentReady(this, function () {
              return _this2._updatePosition();
            });
            break;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.addEventListener('click', this._boundOnClick, false);

        this._connectOnClick();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener('click', this._boundOnClick, false);

        this._disconnectOnClick();
      }
    }, {
      key: "items",
      get: function get() {
        return util$4.arrayFrom(this.querySelectorAll('ons-speed-dial-item'));
      }
    }, {
      key: "_fab",
      get: function get() {
        return util$4.findChild(this, 'ons-fab');
      }
    }, {
      key: "_onClick",
      value: function _onClick(event) {
        var _this3 = this;

        setTimeout(function () {
          if (!event.defaultPrevented && !_this3.disabled && _this3.visible) {
            return _this3.toggleItems();
          }
        });
      }
    }, {
      key: "_show",
      value: function _show() {
        if (!this.inline) {
          return this.show();
        }

        return Promise.resolve();
      }
    }, {
      key: "_hide",
      value: function _hide() {
        var _this4 = this;

        return new Promise(function (resolve) {
          if (!_this4.inline) {
            setImmediate(function () {
              return _this4.hide().then(resolve);
            });
          } else {
            resolve();
          }
        });
      }
    }, {
      key: "_updateRipple",
      value: function _updateRipple() {
        if (this._fab) {
          this.hasAttribute('ripple') ? this._fab.setAttribute('ripple', '') : this._fab.removeAttribute('ripple');
        }
      }
    }, {
      key: "_updateDirection",
      value: function _updateDirection(direction) {
        var children = this.items;

        for (var i = 0; i < children.length; i++) {
          styler(children[i], {
            transitionDelay: 25 * i + 'ms',
            bottom: 'auto',
            right: 'auto',
            top: 'auto',
            left: 'auto'
          });
        }

        switch (direction) {
          case 'up':
            for (var _i = 0; _i < children.length; _i++) {
              children[_i].style.bottom = 72 + 56 * _i + 'px';
              children[_i].style.right = '8px';
            }

            break;

          case 'down':
            for (var _i2 = 0; _i2 < children.length; _i2++) {
              children[_i2].style.top = 72 + 56 * _i2 + 'px';
              children[_i2].style.left = '8px';
            }

            break;

          case 'left':
            for (var _i3 = 0; _i3 < children.length; _i3++) {
              children[_i3].style.top = '8px';
              children[_i3].style.right = 72 + 56 * _i3 + 'px';
            }

            break;

          case 'right':
            for (var _i4 = 0; _i4 < children.length; _i4++) {
              children[_i4].style.top = '8px';
              children[_i4].style.left = 72 + 56 * _i4 + 'px';
            }

            break;

          default:
            util$4.throw('Argument must be one of up, down, left or right.');
        }
      }
    }, {
      key: "_updatePosition",
      value: function _updatePosition() {
        var position = this.getAttribute('position');
        this.classList.remove('fab--top__left', 'fab--bottom__right', 'fab--bottom__left', 'fab--top__right', 'fab--top__center', 'fab--bottom__center');

        switch (position) {
          case 'top right':
          case 'right top':
            this.classList.add('fab--top__right');
            break;

          case 'top left':
          case 'left top':
            this.classList.add('fab--top__left');
            break;

          case 'bottom right':
          case 'right bottom':
            this.classList.add('fab--bottom__right');
            break;

          case 'bottom left':
          case 'left bottom':
            this.classList.add('fab--bottom__left');
            break;

          case 'center top':
          case 'top center':
            this.classList.add('fab--top__center');
            break;

          case 'center bottom':
          case 'bottom center':
            this.classList.add('fab--bottom__center');
            break;
        }
      }
    }, {
      key: "_getTranslate",
      value: function _getTranslate() {
        var isBottom = (this.getAttribute('position') || '').indexOf('bottom') >= 0;
        var translate = isBottom ? "translate3d(0px, -".concat(util$4.globals.fabOffset || 0, "px, 0px) ") : '';
        return translate;
      }
      /**
       * @method show
       * @signature show()
       * @description
       *   [en]Show the speed dial.[/en]
       *   [ja]Speed dialを表示します。[/ja]
       */

    }, {
      key: "show",
      value: function show() {
        this._fab.show();

        styler(this, {
          transform: this._getTranslate
        });
        return Promise.resolve();
      }
      /**
       * @method hide
       * @signature hide()
       * @description
       *   [en]Hide the speed dial.[/en]
       *   [ja]Speed dialを非表示にします。[/ja]
       */

    }, {
      key: "hide",
      value: function hide() {
        var _this5 = this;

        return this.hideItems().then(function () {
          return _this5._fab.hide();
        });
      }
      /**
       * @method showItems
       * @signature showItems()
       * @description
       *   [en]Show the speed dial items.[/en]
       *   [ja]Speed dialの子要素を表示します。[/ja]
       */

    }, {
      key: "showItems",
      value: function showItems() {
        if (this.hasAttribute('direction')) {
          this._updateDirection(this.getAttribute('direction'));
        } else {
          this._updateDirection('up');
        }

        var totalDelay = 0;

        if (!this._itemShown) {
          var children = this.items;

          for (var i = 0; i < children.length; i++) {
            var delay = 25 * i;
            totalDelay += delay;
            styler(children[i], {
              transform: 'scale(1)',
              transitionDelay: delay + 'ms'
            });
          }

          totalDelay += 50;
          this._itemShown = true;
          util$4.triggerElementEvent(this, 'open');
        }

        var deferred = util$4.defer();
        setTimeout(deferred.resolve, totalDelay);
        return deferred.promise;
      }
      /**
       * @method hideItems
       * @signature hideItems()
       * @description
       *   [en]Hide the speed dial items.[/en]
       *   [ja]Speed dialの子要素を非表示にします。[/ja]
       */

    }, {
      key: "hideItems",
      value: function hideItems() {
        var totalDelay = 0;

        if (this._itemShown) {
          var children = this.items;

          for (var i = 0; i < children.length; i++) {
            var delay = 25 * (children.length - i);
            totalDelay += delay;
            styler(children[i], {
              transform: 'scale(0)',
              transitionDelay: delay + 'ms'
            });
          }

          totalDelay += 50;
          this._itemShown = false;
          util$4.triggerElementEvent(this, 'close');
        }

        var deferred = util$4.defer();
        setTimeout(deferred.resolve, totalDelay);
        return deferred.promise;
      }
      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute('disabled');
      }
      /**
       * @property inline
       * @readonly
       * @type {Boolean}
       * @description
       *   [en]Whether the element is inline or not.[/en]
       *   [ja]インライン要素の場合に`true`。[/ja]
       */
      ,
      set: function set(value) {
        if (value) {
          this.hideItems();
        }

        util$4.arrayFrom(this.children).forEach(function (e) {
          util$4.match(e, '.fab') && util$4.toggleAttribute(e, 'disabled', value);
        });
        return util$4.toggleAttribute(this, 'disabled', value);
      }
    }, {
      key: "inline",
      get: function get() {
        return this.hasAttribute('inline');
      }
      /**
       * @property visible
       * @readonly
       * @type {Boolean}
       * @description
       *   [en]Whether the element is visible or not.[/en]
       *   [ja]要素が見える場合に`true`。[/ja]
       */

    }, {
      key: "visible",
      get: function get() {
        return this._fab.visible && this.style.display !== 'none';
      }
      /**
       * @method isOpen
       * @signature isOpen()
       * @description
       *   [en]Returns whether the menu is open or not.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "isOpen",
      value: function isOpen() {
        return this._itemShown;
      }
      /**
       * @method toggle
       * @signature toggle()
       * @description
       *   [en]Toggle visibility.[/en]
       *   [ja]Speed dialの表示非表示を切り替えます。[/ja]
       */

    }, {
      key: "toggle",
      value: function toggle() {
        return this.visible ? this.hide() : this.show();
      }
      /**
       * @method toggleItems
       * @signature toggleItems()
       * @description
       *   [en]Toggle item visibility.[/en]
       *   [ja]Speed dialの子要素の表示非表示を切り替えます。[/ja]
       */

    }, {
      key: "toggleItems",
      value: function toggleItems() {
        return this.isOpen() ? this.hideItems() : this.showItems();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['class', 'modifier', 'ripple', 'direction', 'position'];
      }
    }, {
      key: "events",
      get: function get() {
        return ['open', 'close'];
      }
    }]);

    return SpeedDialElement;
  }(BaseElement);
  onsElements.SpeedDial = SpeedDialElement;
  customElements.define('ons-speed-dial', SpeedDialElement);

  var rewritables$2 = {
    /**
     * @param {Element} element
     * @param {Function} callback
     */
    ready: function ready(element, callback) {
      setImmediate(callback);
    }
  };
  /**
   * @element ons-splitter-content
   * @category menu
   * @description
   *  [en]
   *    The `<ons-splitter-content>` element is used as a child element of `<ons-splitter>`.
   *
   *    It contains the main content of the page while `<ons-splitter-side>` contains the list.
   *  [/en]
   *  [ja]ons-splitter-content要素は、ons-splitter要素の子要素として利用します。[/ja]
   * @codepen rOQOML
   * @tutorial vanilla/Reference/splitter
   * @guide fundamentals.html#managing-pages
   *  [en]Managing multiple pages.[/en]
   *  [ja]複数のページを管理する[/ja]
   * @seealso ons-splitter
   *  [en]The `<ons-splitter>` component is the parent element.[/en]
   *  [ja]ons-splitterコンポーネント[/ja]
   * @seealso ons-splitter-side
   *  [en]The `<ons-splitter-side>` component contains the menu.[/en]
   *  [ja]ons-splitter-sideコンポーネント[/ja]
   * @example
   * <ons-splitter>
   *   <ons-splitter-content>
   *     ...
   *   </ons-splitter-content>
   *
   *   <ons-splitter-side side="left" width="80%" collapse>
   *     ...
   *   </ons-splitter-side>
   * </ons-splitter>
   */

  var SplitterContentElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(SplitterContentElement, _BaseElement);

    var _super = _createSuper(SplitterContentElement);

    /**
     * @attribute page
     * @type {String}
     * @description
     *   [en]
     *     The url of the content page. If this attribute is used the content will be loaded from a `<template>` tag or a remote file.
     *
     *     It is also possible to put `<ons-page>` element as a child of the element.
     *   [/en]
     *   [ja]ons-splitter-content要素に表示するページのURLを指定します。[/ja]
     */
    function SplitterContentElement() {
      var _this;

      _classCallCheck(this, SplitterContentElement);

      _this = _super.call(this);
      _this._page = null;
      _this._pageLoader = defaultPageLoader;
      contentReady(_assertThisInitialized(_this), function () {
        rewritables$2.ready(_assertThisInitialized(_this), function () {
          var page = _this._getPageTarget();

          if (page) {
            _this.load(page);
          }
        });
      });
      return _this;
    }

    _createClass(SplitterContentElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!util$4.match(this.parentNode, 'ons-splitter')) {
          util$4.throw('"ons-splitter-content" must have "ons-splitter" as parent');
        }
      }
    }, {
      key: "_getPageTarget",
      value: function _getPageTarget() {
        return this._page || this.getAttribute('page');
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {}
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {}
      /**
       * @property page
       * @type {HTMLElement}
       * @description
       *   [en]The page to load in the splitter content.[/en]
       *   [ja]この要素内に表示するページを指定します。[/ja]
       */

    }, {
      key: "page",
      get: function get() {
        return this._page;
      }
      /**
       * @param {*} page
       */
      ,
      set: function set(page) {
        this._page = page;
      }
    }, {
      key: "_content",
      get: function get() {
        return this.children[0];
      }
      /**
       * @property pageLoader
       * @type {Function}
       * @description
       *   [en]Page element loaded in the splitter content.[/en]
       *   [ja]この要素内に表示するページを指定します。[/ja]
       */

    }, {
      key: "pageLoader",
      get: function get() {
        return this._pageLoader;
      },
      set: function set(loader) {
        if (!(loader instanceof PageLoader)) {
          util$4.throwPageLoader();
        }

        this._pageLoader = loader;
      }
      /**
       * @method load
       * @signature load(page, [options])
       * @param {String} page, [options]
       *   [en]Page URL. Can be either an HTML document or an `<template>` id.[/en]
       *   [ja]pageのURLか、`<template>`で宣言したテンプレートのid属性の値を指定します。[/ja]
       * @param {Object} [options]
       * @param {Function} [options.callback]
       * @description
       *   [en]Show the page specified in `page` in the content.[/en]
       *   [ja]指定したURLをメインページを読み込みます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the new `<ons-page>` element[/en]
       *   [ja]`<ons-page>`要素を解決するPromiseオブジェクトを返します。[/ja]
       */

    }, {
      key: "load",
      value: function load(page) {
        var _this2 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this._page = page;

        var callback = options.callback || function () {};

        return new Promise(function (resolve) {
          var oldContent = _this2._content || null;

          _this2._pageLoader.load({
            page: page,
            parent: _this2
          }, function (pageElement) {
            if (oldContent) {
              _this2._pageLoader.unload(oldContent);

              oldContent = null;
            }

            setImmediate(function () {
              return _this2._show();
            });
            callback(pageElement);
            resolve(pageElement);
          });
        });
      }
    }, {
      key: "_show",
      value: function _show() {
        if (this._content) {
          this._content._show();
        }
      }
    }, {
      key: "_hide",
      value: function _hide() {
        if (this._content) {
          this._content._hide();
        }
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        if (this._content) {
          this._pageLoader.unload(this._content);
        }

        this.remove();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return [];
      }
    }, {
      key: "rewritables",
      get: function get() {
        return rewritables$2;
      }
    }]);

    return SplitterContentElement;
  }(BaseElement);
  onsElements.SplitterContent = SplitterContentElement;
  customElements.define('ons-splitter-content', SplitterContentElement);

  var SplitterMaskElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(SplitterMaskElement, _BaseElement);

    var _super = _createSuper(SplitterMaskElement);

    function SplitterMaskElement() {
      var _this;

      _classCallCheck(this, SplitterMaskElement);

      _this = _super.call(this);
      _this._boundOnClick = _this._onClick.bind(_assertThisInitialized(_this));
      contentReady(_assertThisInitialized(_this), function () {
        if (_this.parentNode._sides.every(function (side) {
          return side.mode === 'split';
        })) {
          _this.setAttribute('style', 'display: none !important');
        }
      });
      return _this;
    }

    _createClass(SplitterMaskElement, [{
      key: "_onClick",
      value: function _onClick(event) {
        if (this.onClick instanceof Function) {
          this.onClick();
        } else if (util$4.match(this.parentNode, 'ons-splitter')) {
          this.parentNode._sides.forEach(function (side) {
            return side.close('left').catch(function () {});
          });
        }

        event.stopPropagation();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {}
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.addEventListener('click', this._boundOnClick);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener('click', this._boundOnClick);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return [];
      }
    }]);

    return SplitterMaskElement;
  }(BaseElement);
  onsElements.SplitterMask = SplitterMaskElement;
  customElements.define('ons-splitter-mask', SplitterMaskElement);

  var SplitterAnimator$1 = /*#__PURE__*/function (_BaseAnimator) {
    _inherits(SplitterAnimator, _BaseAnimator);

    var _super = _createSuper(SplitterAnimator);

    function SplitterAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'cubic-bezier(.1, .7, .1, 1)' : _ref$timing,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.3 : _ref$duration,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay;

      _classCallCheck(this, SplitterAnimator);

      return _super.call(this, {
        timing: timing,
        duration: duration,
        delay: delay
      });
    }

    _createClass(SplitterAnimator, [{
      key: "updateOptions",
      value: function updateOptions() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        util$4.extend(this, {
          timing: this.timing,
          duration: this.duration,
          delay: this.delay
        }, options);
      }
      /**
       * @param {Element} sideElement
       */

    }, {
      key: "activate",
      value: function activate(sideElement) {
        var _this = this;

        var splitter = sideElement.parentNode;
        contentReady(splitter, function () {
          _this._side = sideElement;
          _this._oppositeSide = splitter.right !== sideElement && splitter.right || splitter.left !== sideElement && splitter.left;
          _this._content = splitter.content;
          _this._mask = splitter.mask;
        });
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.clearTransition();
        this._mask && this.clearMask();
        this._content = this._side = this._oppositeSide = this._mask = null;
      }
    }, {
      key: "minus",
      get: function get() {
        return this._side.side === 'right' ? '-' : '';
      }
    }, {
      key: "clearTransition",
      value: function clearTransition() {
        var _this2 = this;

        'side mask content'.split(/\s+/).forEach(function (e) {
          return _this2['_' + e] && styler.clear(_this2['_' + e], 'transform transition');
        });
      }
    }, {
      key: "clearMask",
      value: function clearMask() {
        // Check if the other side needs the mask before clearing
        if (!this._oppositeSide || this._oppositeSide.mode === 'split' || !this._oppositeSide.isOpen) {
          this._mask.style.opacity = '';
          this._mask.style.display = 'none';
        }
      }
      /**
       * @param {Number} distance
       */

    }, {
      key: "translate",
      value: function translate(distance) {}
      /**
       * @param {Function} done
       */

    }, {
      key: "open",
      value: function open(done) {
        done();
      }
      /**
       * @param {Function} done
       */

    }, {
      key: "close",
      value: function close(done) {
        done();
      }
    }]);

    return SplitterAnimator;
  }(BaseAnimator);

  var OverlaySplitterAnimator = /*#__PURE__*/function (_SplitterAnimator) {
    _inherits(OverlaySplitterAnimator, _SplitterAnimator);

    var _super = _createSuper(OverlaySplitterAnimator);

    function OverlaySplitterAnimator() {
      _classCallCheck(this, OverlaySplitterAnimator);

      return _super.apply(this, arguments);
    }

    _createClass(OverlaySplitterAnimator, [{
      key: "translate",
      value: function translate(distance) {
        this._mask.style.display = 'block'; // Avoid content clicks

        Animit(this._side).queue({
          transform: "translate3d(".concat(this.minus + distance, "px, 0, 0)")
        }).play();
      }
      /**
       * @param {Function} done
       */

    }, {
      key: "open",
      value: function open(done) {
        Animit.runAll(Animit(this._side).wait(this.delay).queue({
          transform: "translate3d(".concat(this.minus, "100%, 0, 0)")
        }, this.def).queue(function (callback) {
          callback();
          done && done();
        }), Animit(this._mask).wait(this.delay).queue({
          display: 'block'
        }).queue({
          opacity: '1'
        }, {
          duration: this.duration,
          timing: 'linear'
        }));
      }
      /**
       * @param {Function} done
       */

    }, {
      key: "close",
      value: function close(done) {
        Animit.runAll(Animit(this._side).wait(this.delay).queue({
          transform: 'translate3d(0, 0, 0)'
        }, this.def).queue(function (callback) {
          done && done();
          callback();
        }), Animit(this._mask).wait(this.delay).queue({
          opacity: '0'
        }, {
          duration: this.duration,
          timing: 'linear'
        }).queue({
          display: 'none'
        }));
      }
    }]);

    return OverlaySplitterAnimator;
  }(SplitterAnimator$1);

  var PushSplitterAnimator = /*#__PURE__*/function (_SplitterAnimator) {
    _inherits(PushSplitterAnimator, _SplitterAnimator);

    var _super = _createSuper(PushSplitterAnimator);

    function PushSplitterAnimator() {
      _classCallCheck(this, PushSplitterAnimator);

      return _super.apply(this, arguments);
    }

    _createClass(PushSplitterAnimator, [{
      key: "_getSlidingElements",
      value: function _getSlidingElements() {
        var slidingElements = [this._side, this._content];

        if (this._oppositeSide && this._oppositeSide.mode === 'split') {
          slidingElements.push(this._oppositeSide);
        }

        return slidingElements;
      }
    }, {
      key: "translate",
      value: function translate(distance) {
        if (!this._slidingElements) {
          this._slidingElements = this._getSlidingElements();
        }

        this._mask.style.display = 'block'; // Avoid content clicks

        Animit(this._slidingElements).queue({
          transform: "translate3d(".concat(this.minus + distance, "px, 0, 0)")
        }).play();
      }
      /**
       * @param {Function} done
       */

    }, {
      key: "open",
      value: function open(done) {
        var _this = this;

        var max = this._side.offsetWidth;
        this._slidingElements = this._getSlidingElements();
        Animit.runAll(Animit(this._slidingElements).wait(this.delay).queue({
          transform: "translate3d(".concat(this.minus + max, "px, 0, 0)")
        }, this.def).queue(function (callback) {
          _this._slidingElements = null;
          callback();
          done && done();
        }), Animit(this._mask).wait(this.delay).queue({
          display: 'block'
        }));
      }
      /**
       * @param {Function} done
       */

    }, {
      key: "close",
      value: function close(done) {
        var _this2 = this;

        this._slidingElements = this._getSlidingElements();
        Animit.runAll(Animit(this._slidingElements).wait(this.delay).queue({
          transform: 'translate3d(0, 0, 0)'
        }, this.def).queue(function (callback) {
          _this2._slidingElements = null;

          _get(_getPrototypeOf(PushSplitterAnimator.prototype), "clearTransition", _this2).call(_this2);

          done && done();
          callback();
        }), Animit(this._mask).wait(this.delay).queue({
          display: 'none'
        }));
      }
    }]);

    return PushSplitterAnimator;
  }(SplitterAnimator$1);

  var RevealSplitterAnimator = /*#__PURE__*/function (_SplitterAnimator) {
    _inherits(RevealSplitterAnimator, _SplitterAnimator);

    var _super = _createSuper(RevealSplitterAnimator);

    function RevealSplitterAnimator() {
      _classCallCheck(this, RevealSplitterAnimator);

      return _super.apply(this, arguments);
    }

    _createClass(RevealSplitterAnimator, [{
      key: "_getSlidingElements",
      value: function _getSlidingElements() {
        var slidingElements = [this._content, this._mask];

        if (this._oppositeSide && this._oppositeSide.mode === 'split') {
          slidingElements.push(this._oppositeSide);
        }

        return slidingElements;
      }
    }, {
      key: "activate",
      value: function activate(sideElement) {
        _get(_getPrototypeOf(RevealSplitterAnimator.prototype), "activate", this).call(this, sideElement);

        if (sideElement.mode === 'collapse') {
          this._setStyles(sideElement);
        }
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._side && this._unsetStyles(this._side);

        _get(_getPrototypeOf(RevealSplitterAnimator.prototype), "deactivate", this).call(this);
      }
    }, {
      key: "_setStyles",
      value: function _setStyles(sideElement) {
        styler(sideElement, {
          left: sideElement.side === 'right' ? 'auto' : 0,
          right: sideElement.side === 'right' ? 0 : 'auto',
          zIndex: 0,
          backgroundColor: 'black',
          transform: this._generateBehindPageStyle(0).container.transform,
          display: 'none'
        });
        var splitter = sideElement.parentElement;
        contentReady(splitter, function () {
          return splitter.content && styler(splitter.content, {
            boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.2)'
          });
        });
      }
    }, {
      key: "_unsetStyles",
      value: function _unsetStyles(sideElement) {
        styler.clear(sideElement, 'left right zIndex backgroundColor display');

        if (sideElement._content) {
          sideElement._content.style.opacity = '';
        } // Check if the other side needs the common styles


        if (!this._oppositeSide || this._oppositeSide.mode === 'split') {
          sideElement.parentElement.content && styler.clear(sideElement.parentElement.content, 'boxShadow');
        }
      }
    }, {
      key: "_generateBehindPageStyle",
      value: function _generateBehindPageStyle(distance) {
        var max = this.maxWidth;
        var behindDistance = (distance - max) / max * 10;
        behindDistance = isNaN(behindDistance) ? 0 : Math.max(Math.min(behindDistance, 0), -10);
        var behindTransform = "translate3d(".concat((this.minus ? -1 : 1) * behindDistance, "%, 0, 0)");
        var opacity = 1 + behindDistance / 100;
        return {
          content: {
            opacity: opacity
          },
          container: {
            transform: behindTransform
          }
        };
      }
    }, {
      key: "translate",
      value: function translate(distance) {
        this._side.style.display = '';
        this._side.style.zIndex = 1;
        this.maxWidth = this.maxWidth || this._getMaxWidth();

        var menuStyle = this._generateBehindPageStyle(Math.min(distance, this.maxWidth));

        if (!this._slidingElements) {
          this._slidingElements = this._getSlidingElements();
        }

        this._mask.style.display = 'block'; // Avoid content clicks

        Animit.runAll(Animit(this._slidingElements).queue({
          transform: "translate3d(".concat(this.minus + distance, "px, 0, 0)")
        }), Animit(this._side._content).queue(menuStyle.content), Animit(this._side).queue(menuStyle.container));
      }
      /**
       * @param {Function} done
       */

    }, {
      key: "open",
      value: function open(done) {
        var _this = this;

        this._side.style.display = '';
        this._side.style.zIndex = 1;
        this.maxWidth = this.maxWidth || this._getMaxWidth();

        var menuStyle = this._generateBehindPageStyle(this.maxWidth);

        this._slidingElements = this._getSlidingElements();
        setTimeout(function () {
          // Fix: Time to update previous translate3d after changing style.display
          Animit.runAll(Animit(_this._slidingElements).wait(_this.delay).queue({
            transform: "translate3d(".concat(_this.minus + _this.maxWidth, "px, 0, 0)")
          }, _this.def), Animit(_this._mask).wait(_this.delay).queue({
            display: 'block'
          }), Animit(_this._side._content).wait(_this.delay).queue(menuStyle.content, _this.def), Animit(_this._side).wait(_this.delay).queue(menuStyle.container, _this.def).queue(function (callback) {
            _this._slidingElements = null;
            callback();
            done && done();
          }));
        }, 1000 / 60);
      }
      /**
       * @param {Function} done
       */

    }, {
      key: "close",
      value: function close(done) {
        var _this2 = this;

        var menuStyle = this._generateBehindPageStyle(0);

        this._slidingElements = this._getSlidingElements();
        Animit.runAll(Animit(this._slidingElements).wait(this.delay).queue({
          transform: 'translate3d(0, 0, 0)'
        }, this.def), Animit(this._mask).wait(this.delay).queue({
          display: 'none'
        }), Animit(this._side._content).wait(this.delay).queue(menuStyle.content, this.def), Animit(this._side).wait(this.delay).queue(menuStyle.container, this.def).queue(function (callback) {
          _this2._slidingElements = null;
          _this2._side.style.zIndex = 0;
          _this2._side.style.display = 'none';
          _this2._side._content.style.opacity = '';
          done && done();
          callback();
        }));
      }
    }, {
      key: "_getMaxWidth",
      value: function _getMaxWidth() {
        return this._side.offsetWidth;
      }
    }]);

    return RevealSplitterAnimator;
  }(SplitterAnimator$1);

  var _animatorDict$1 = {
    default: OverlaySplitterAnimator,
    overlay: OverlaySplitterAnimator,
    push: PushSplitterAnimator,
    reveal: RevealSplitterAnimator
  };
  /**
   * @element ons-splitter
   * @category menu
   * @description
   *  [en]
   *    A component that enables responsive layout by implementing both a two-column layout and a sliding menu layout.
   *
   *    It can be configured to automatically expand into a column layout on large screens and collapse the menu on smaller screens. When the menu is collapsed the user can open it by swiping.
   *  [/en]
   *  [ja][/ja]
   * @codepen rOQOML
   * @tutorial vanilla/Reference/splitter
   * @guide fundamentals.html#managing-pages
   *  [en]Managing multiple pages.[/en]
   *  [ja]複数のページを管理する[/ja]
   * @seealso ons-splitter-content
   *  [en]The `<ons-splitter-content>` component contains the main content of the page.[/en]
   *  [ja]ons-splitter-contentコンポーネント[/ja]
   * @seealso ons-splitter-side
   *  [en]The `<ons-splitter-side>` component contains the menu.[/en]
   *  [ja]ons-splitter-sideコンポーネント[/ja]
   * @example
   * <ons-splitter id="splitter">
   *   <ons-splitter-content>
   *     ...
   *   </ons-splitter-content>
   *
   *   <ons-splitter-side side="left" width="80%" collapse swipeable>
   *     ...
   *   </ons-splitter-side>
   * </ons-splitter>
   *
   * <script>
   *   var splitter = document.getElementById('splitter');
   *   splitter.left.open();
   * </script>
   */

  var SplitterElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(SplitterElement, _BaseElement);

    var _super = _createSuper(SplitterElement);

    function SplitterElement() {
      var _this;

      _classCallCheck(this, SplitterElement);

      _this = _super.call(this);
      _this._onModeChange = _this._onModeChange.bind(_assertThisInitialized(_this));
      contentReady(_assertThisInitialized(_this), function () {
        !_this.mask && _this.appendChild(document.createElement('ons-splitter-mask'));

        _this._layout();
      });
      return _this;
    }

    _createClass(SplitterElement, [{
      key: "_getSide",
      value: function _getSide(side) {
        var element = util$4.findChild(this, function (e) {
          return util$4.match(e, 'ons-splitter-side') && e.getAttribute('side') === side;
        });
        return element;
      }
      /**
       * @property left
       * @readonly
       * @type {HTMLElement}
       * @description
       *   [en]Left `<ons-splitter-side>` element.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "left",
      get: function get() {
        return this._getSide('left');
      }
      /**
       * @property right
       * @readonly
       * @type {HTMLElement}
       * @description
       *   [en]Right `<ons-splitter-side>` element.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "right",
      get: function get() {
        return this._getSide('right');
      }
      /**
       * @property side
       * @readonly
       * @type {HTMLElement}
       * @description
       *   [en]First `<ons-splitter-side>` element regardless the actual side.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "side",
      get: function get() {
        return util$4.findChild(this, 'ons-splitter-side');
      }
    }, {
      key: "_sides",
      get: function get() {
        return [this.left, this.right].filter(function (e) {
          return e;
        });
      }
      /**
       * @property content
       * @readonly
       * @type {HTMLElement}
       * @description
       *   [en]The `<ons-splitter-content>` element.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "content",
      get: function get() {
        return util$4.findChild(this, 'ons-splitter-content');
      }
    }, {
      key: "topPage",
      get: function get() {
        return this.content._content;
      }
    }, {
      key: "mask",
      get: function get() {
        return util$4.findChild(this, 'ons-splitter-mask');
      }
      /**
       * @property onDeviceBackButton
       * @type {Object}
       * @description
       *   [en]Back-button handler.[/en]
       *   [ja]バックボタンハンドラ。[/ja]
       */

    }, {
      key: "onDeviceBackButton",
      get: function get() {
        return this._backButtonHandler;
      },
      set: function set(callback) {
        if (this._backButtonHandler) {
          this._backButtonHandler.destroy();
        }

        this._backButtonHandler = deviceBackButtonDispatcher.createHandler(this, callback);
      }
    }, {
      key: "_onDeviceBackButton",
      value: function _onDeviceBackButton(event) {
        this._sides.some(function (s) {
          return s.isOpen ? s.close() : false;
        }) || event.callParentHandler();
      }
    }, {
      key: "_onModeChange",
      value: function _onModeChange(e) {
        var _this2 = this;

        if (e.target.parentNode) {
          contentReady(this, function () {
            _this2._layout();
          });
        }
      }
    }, {
      key: "_layout",
      value: function _layout() {
        var _this3 = this;

        this._sides.forEach(function (side) {
          if (_this3.content) {
            _this3.content.style[side.side] = side.mode === 'split' ? side.style.width : 0;
          }
        });
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.onDeviceBackButton = this._onDeviceBackButton.bind(this);
        this.addEventListener('modechange', this._onModeChange, false);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._backButtonHandler.destroy();

        this._backButtonHandler = null;
        this.removeEventListener('modechange', this._onModeChange, false);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {}
    }, {
      key: "_show",
      value: function _show() {
        util$4.propagateAction(this, '_show');
      }
    }, {
      key: "_hide",
      value: function _hide() {
        util$4.propagateAction(this, '_hide');
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        util$4.propagateAction(this, '_destroy');
        this.remove();
      }
    }], [{
      key: "registerAnimator",
      value: function registerAnimator(name, Animator) {
        if (!(Animator instanceof SplitterAnimator)) {
          util$4.throwAnimator('Splitter');
        }

        _animatorDict$1[name] = Animator;
      }
    }, {
      key: "SplitterAnimator",
      get: function get() {
        return SplitterAnimator;
      }
    }, {
      key: "animators",
      get: function get() {
        return _animatorDict$1;
      }
    }]);

    return SplitterElement;
  }(BaseElement);
  onsElements.Splitter = SplitterElement;
  customElements.define('ons-splitter', SplitterElement);

  var SPLIT_MODE = 'split';
  var COLLAPSE_MODE = 'collapse';
  var CLOSED_STATE = 'closed';
  var OPEN_STATE = 'open';
  var CHANGING_STATE = 'changing';
  var rewritables$1 = {
    /**
     * @param {Element} splitterSideElement
     * @param {Function} callback
     */
    ready: function ready(splitterSideElement, callback) {
      setImmediate(callback);
    }
  };

  var CollapseDetection = /*#__PURE__*/function () {
    function CollapseDetection(element, target) {
      _classCallCheck(this, CollapseDetection);

      this._element = element;
      this._onChange = this._onChange.bind(this);
      target && this.changeTarget(target);
    }

    _createClass(CollapseDetection, [{
      key: "changeTarget",
      value: function changeTarget(target) {
        this.disable();
        this._target = target;

        if (target) {
          this._orientation = ['portrait', 'landscape'].indexOf(target) !== -1;
          this.activate();
        }
      }
    }, {
      key: "_match",
      value: function _match(value) {
        if (this._orientation) {
          return this._target === (value.isPortrait ? 'portrait' : 'landscape');
        }

        return value.matches;
      }
    }, {
      key: "_onChange",
      value: function _onChange(value) {
        this._element._updateMode(this._match(value) ? COLLAPSE_MODE : SPLIT_MODE);
      }
    }, {
      key: "activate",
      value: function activate() {
        if (this._orientation) {
          orientation.on('change', this._onChange);

          this._onChange({
            isPortrait: orientation.isPortrait()
          });
        } else {
          this._queryResult = window.matchMedia(this._target);

          this._queryResult.addListener(this._onChange);

          this._onChange(this._queryResult);
        }
      }
    }, {
      key: "disable",
      value: function disable() {
        if (this._orientation) {
          orientation.off('change', this._onChange);
        } else if (this._queryResult) {
          this._queryResult.removeListener(this._onChange);

          this._queryResult = null;
        }
      }
    }]);

    return CollapseDetection;
  }();
  /**
   * @element ons-splitter-side
   * @category menu
   * @description
   *  [en]
   *    The `<ons-splitter-side>` element is used as a child element of `<ons-splitter>`.
   *
   *    It will be displayed on either the left or right side of the `<ons-splitter-content>` element.
   *
   *    It supports two modes: collapsed and split. When it's in collapsed mode it will be hidden from view and can be displayed when the user swipes the screen or taps a button. In split mode the element is always shown. It can be configured to automatically switch between the two modes depending on the screen size.
   *  [/en]
   *  [ja]ons-splitter-side要素は、ons-splitter要素の子要素として利用します。[/ja]
   * @codepen rOQOML
   * @tutorial vanilla/Reference/splitter
   * @guide fundamentals.html#managing-pages
   *  [en]Managing multiple pages.[/en]
   *  [ja]複数のページを管理する[/ja]
   * @seealso ons-splitter
   *  [en]The `<ons-splitter>` is the parent component.[/en]
   *  [ja]ons-splitterコンポーネント[/ja]
   * @seealso ons-splitter-content
   *  [en]The `<ons-splitter-content>` component contains the main content of the page.[/en]
   *  [ja]ons-splitter-contentコンポーネント[/ja]
   * @example
   * <ons-splitter>
   *   <ons-splitter-content>
   *     ...
   *   </ons-splitter-content>
   *
   *   <ons-splitter-side side="left" width="80%" collapse>
   *     ...
   *   </ons-splitter-side>
   * </ons-splitter>
   */


  var SplitterSideElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(SplitterSideElement, _BaseElement);

    var _super = _createSuper(SplitterSideElement);

    /**
     * @event modechange
     * @description
     *   [en]Fired just after the component's mode changes.[/en]
     *   [ja]この要素のモードが変化した際に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Object} event.side
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {String} event.mode
     *   [en]Returns the current mode. Can be either `"collapse"` or `"split"`.[/en]
     *   [ja]現在のモードを返します。[/ja]
     */

    /**
     * @event preopen
     * @description
     *   [en]Fired just before the sliding menu is opened.[/en]
     *   [ja]スライディングメニューが開く前に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Function} event.cancel
     *   [en]Call to cancel opening sliding menu.[/en]
     *   [ja]スライディングメニューが開くのをキャンセルします。[/ja]
     * @param {Object} event.side
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event postopen
     * @description
     *   [en]Fired just after the sliding menu is opened.[/en]
     *   [ja]スライディングメニューが開いた後に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Object} event.side
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @event preclose
     * @description
     *   [en]Fired just before the sliding menu is closed.[/en]
     *   [ja]スライディングメニューが閉じる前に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Object} event.side
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Call to cancel opening sliding-menu.[/en]
     *   [ja]スライディングメニューが閉じるのをキャンセルします。[/ja]
     */

    /**
     * @event postclose
     * @description
     *   [en]Fired just after the sliding menu is closed.[/en]
     *   [ja]スライディングメニューが閉じた後に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Object} event.side
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @default  default
     * @description
     *  [en]Specify the animation. Use one of `overlay`, `push`, `reveal` or  `default`.[/en]
     *  [ja]アニメーションを指定します。"overlay", "push", "reveal", "default"のいずれかを指定できます。[/ja]
     */

    /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. {duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */

    /**
     * @attribute open-threshold
     * @type {Number}
     * @default  0.3
     * @description
     *  [en]Specify how much the menu needs to be swiped before opening. A value between `0` and `1`.[/en]
     *  [ja]どのくらいスワイプすればスライディングメニューを開くかどうかの割合を指定します。0から1の間の数値を指定します。スワイプの距離がここで指定した数値掛けるこの要素の幅よりも大きければ、スワイプが終わった時にこの要素を開きます。デフォルトは0.3です。[/ja]
     */

    /**
     * @attribute collapse
     * @type {String}
     * @description
     *   [en]
     *     Specify the collapse behavior. Valid values are `"portrait"`, `"landscape"` or a media query.
     *     The string `"portrait"` means the view will collapse when the device is in portrait orientation.
     *     The string `"landscape"` means the view will collapse when the device is in landscape orientation.
     *     If the value is a media query, the view will collapse when the media query resolves to `true`.
     *     If the attribute is set, including as an empty string, the view will always be in `"collapse"` mode.
     *     If the attribute is not set, the view will be in `"split"` mode.
     *   [/en]
     *   [ja]
     *     左側のページを非表示にする条件を指定します。portrait, landscape、width #pxもしくはメディアクエリの指定が可能です。
     *     portraitもしくはlandscapeを指定すると、デバイスの画面が縦向きもしくは横向きになった時に適用されます。
     *     メディアクエリを指定すると、指定したクエリに適合している場合に適用されます。
     *     値に何も指定しない場合には、常にcollapseモードになります。
     *   [/ja]
     */

    /**
     * @attribute swipe-target-width
     * @type {String}
     * @description
     *   [en]The width of swipeable area calculated from the edge (in pixels). Use this to enable swipe only when the finger touch on the screen edge.[/en]
     *   [ja]スワイプの判定領域をピクセル単位で指定します。画面の端から指定した距離に達するとページが表示されます。[/ja]
     */

    /**
     * @attribute width
     * @type {String}
     * @description
     *   [en]Can be specified in either pixels or as a percentage, e.g. `90%` or `200px`.[/en]
     *   [ja]この要素の横幅を指定します。pxと%での指定が可能です。eg. 90%, 200px[/ja]
     */

    /**
     * @attribute side
     * @type {String}
     * @default left
     * @description
     *   [en]Specify which side of the screen the `<ons-splitter-side>` element is located. Possible values are `"left"` and `"right"`.[/en]
     *   [ja]この要素が左か右かを指定します。指定できる値は"left"か"right"のみです。[/ja]
     */

    /**
     * @attribute mode
     * @type {String}
     * @description
     *   [en]Current mode. Possible values are `"collapse"` or `"split"`. This attribute is read only.[/en]
     *   [ja]現在のモードが設定されます。"collapse"もしくは"split"が指定されます。この属性は読み込み専用です。[/ja]
     */

    /**
     * @attribute page
     * @initonly
     * @type {String}
     * @description
     *   [en]The URL of the menu page.[/en]
     *   [ja]ons-splitter-side要素に表示するページのURLを指定します。[/ja]
     */

    /**
     * @attribute swipeable
     * @type {Boolean}
     * @description
     *   [en]Whether to enable swipe interaction on collapse mode.[/en]
     *   [ja]collapseモード時にスワイプ操作を有効にする場合に指定します。[/ja]
     */

    /**
     * @property swipeable
     * @type {Boolean}
     * @description
     *   [en]Whether to enable swipe interaction on collapse mode.[/en]
     *   [ja]collapseモード時にスワイプ操作を有効にする場合に指定します。[/ja]
     */
    function SplitterSideElement() {
      var _this;

      _classCallCheck(this, SplitterSideElement);

      _this = _super.call(this);
      util$4.defineBooleanProperty(_assertThisInitialized(_this), 'swipeable');
      _this._page = null;
      _this._state = CLOSED_STATE;
      _this._lock = new DoorLock();
      _this._pageLoader = defaultPageLoader;
      _this._collapseDetection = new CollapseDetection(_assertThisInitialized(_this));
      _this._animatorFactory = new AnimatorFactory({
        animators: SplitterElement.animators,
        baseClass: SplitterAnimator$1,
        baseClassName: 'SplitterAnimator',
        defaultAnimation: _this.getAttribute('animation')
      });
      contentReady(_assertThisInitialized(_this), function () {
        // These attributes are used early by the parent element
        _this.attributeChangedCallback('width');

        if (!_this.hasAttribute('side')) {
          _this.setAttribute('side', 'left');
        }

        rewritables$1.ready(_assertThisInitialized(_this), function () {
          var page = _this._page || _this.getAttribute('page');

          page && _this.load(page);
        });
      });
      return _this;
    }

    _createClass(SplitterSideElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        if (!util$4.match(this.parentNode, 'ons-splitter')) {
          util$4.throw('Parent must be an ons-splitter element');
        }

        if (!this._swipe) {
          this._swipe = new SwipeReveal({
            element: this,
            elementHandler: this.parentElement,
            swipeMax: function swipeMax() {
              _this2._onSwipe && _this2._onSwipe(1, _this2._animationOpt);

              _this2.open();
            },
            swipeMid: function swipeMid(distance, width) {
              _this2._onSwipe && _this2._onSwipe(distance / width);

              _this2._animator.translate(distance);
            },
            swipeMin: function swipeMin() {
              _this2._onSwipe && _this2._onSwipe(0, _this2._animationOpt);

              _this2.close();
            },
            getThreshold: function getThreshold() {
              return Math.max(0, Math.min(1, parseFloat(_this2.getAttribute('open-threshold')) || 0.3));
            },
            getSide: function getSide() {
              return _this2.side;
            },
            isInitialState: function isInitialState() {
              var closed = _this2._state === CLOSED_STATE;
              _this2._state = CHANGING_STATE;
              return closed;
            },
            ignoreSwipe: function ignoreSwipe(event, distance) {
              var isOpen = _this2.isOpen;

              var validDrag = function validDrag(d) {
                return _this2.side === 'left' ? d === 'left' && isOpen || d === 'right' && !isOpen : d === 'left' && !isOpen || d === 'right' && isOpen;
              };

              var area = Math.max(0, parseInt(_this2.getAttribute('swipe-target-width'), 10) || 0);
              return _this2._mode === SPLIT_MODE || _this2._lock.isLocked() || _this2._isOtherSideOpen() || !validDrag(event.gesture.direction) || !isOpen && area !== 0 && distance > area;
            }
          });
          this.attributeChangedCallback('swipeable');
        }

        contentReady(this, function () {
          _this2.constructor.observedAttributes.forEach(function (attr) {
            return _this2.attributeChangedCallback(attr, null, _this2.getAttribute(attr));
          });
        });
      }
    }, {
      key: "side",
      get: function get() {
        return this.getAttribute('side') === 'right' ? 'right' : 'left';
      },
      set: function set(value) {
        if (value) {
          this.setAttribute('side', value);
        } else {
          tihs.removeAttribute('side');
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._swipe && this._swipe.dispose();
        this._animator = this._animationOpt = this._swipe = null;
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        switch (name) {
          case 'swipeable':
            this._swipe && this._swipe.update();
            break;

          case 'width':
            current = this.getAttribute('width'); // Sometimes undefined. CE bug?

            this.style.width = /^\d+(px|%)$/.test(current) ? current : '80%';
            break;

          case 'animation':
          case 'animation-options':
            this._updateAnimation();

            break;

          default:
            this[util$4.camelize("_update-".concat(name))](current);
        }
      }
    }, {
      key: "_emitEvent",
      value: function _emitEvent(name) {
        if (name.slice(0, 3) !== 'pre') {
          return util$4.triggerElementEvent(this, name, {
            side: this
          });
        }

        var isCanceled = false;
        util$4.triggerElementEvent(this, name, {
          side: this,
          cancel: function cancel() {
            return isCanceled = true;
          }
        });
        return isCanceled;
      }
    }, {
      key: "_isOtherSideOpen",
      value: function _isOtherSideOpen() {
        var _this3 = this;

        return !!util$4.findChild(this.parentElement, function (el) {
          return el instanceof _this3.constructor && el !== _this3 && el._mode === COLLAPSE_MODE && el.isOpen;
        });
      }
    }, {
      key: "_updateCollapse",
      value: function _updateCollapse() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getAttribute('collapse');

        if (value === null || value === 'split') {
          this._collapseDetection.disable();

          return this._updateMode(SPLIT_MODE);
        }

        if (value === '' || value === 'collapse') {
          this._collapseDetection.disable();

          return this._updateMode(COLLAPSE_MODE);
        }

        this._collapseDetection.changeTarget(value);
      }
    }, {
      key: "_updateMode",
      value: function _updateMode(mode) {
        if (mode !== this._mode) {
          this._mode = mode;
          this.setAttribute('mode', mode); // readonly attribute for the users

          if (mode === SPLIT_MODE) {
            this._animator && this._animator.deactivate();
            this._state = CLOSED_STATE;
          } else {
            this._animator && this._animator.activate(this);
            this._state === OPEN_STATE && this._animator.open();
          }

          util$4.triggerElementEvent(this, 'modechange', {
            side: this,
            mode: mode
          });
        }
      }
    }, {
      key: "_updateAnimation",
      value: function _updateAnimation() {
        var animation = this.getAttribute('animation');
        var animationOptions = this.getAttribute('animation-options');

        if (this.parentNode) {
          this._animator && this._animator.deactivate();
          this._animator = this._animatorFactory.newAnimator({
            animation: animation
          });

          this._animator.activate(this);

          this._animationOpt = {
            timing: this._animator.duration,
            duration: this._animator.duration
          };

          this._animator.updateOptions(AnimatorFactory.parseAnimationOptionsString(animationOptions));
        }
      }
      /**
       * @property page
       * @type {*}
       * @description
       *   [en]Page location to load in the splitter side.[/en]
       *   [ja]この要素内に表示するページを指定します。[/ja]
       */

    }, {
      key: "page",
      get: function get() {
        return this._page;
      }
      /**
       * @param {*} page
       */
      ,
      set: function set(page) {
        this._page = page;
      }
    }, {
      key: "_content",
      get: function get() {
        return this.children[0];
      }
      /**
       * @property pageLoader
       * @description
       *   [en][/en]
       *   [ja][/ja]
       */

    }, {
      key: "pageLoader",
      get: function get() {
        return this._pageLoader;
      },
      set: function set(loader) {
        if (!(loader instanceof PageLoader)) {
          util$4.throwPageLoader();
        }

        this._pageLoader = loader;
      }
      /**
       * @property mode
       * @readonly
       * @type {String}
       * @description
       *   [en]Current mode. Possible values are "split", "collapse", "closed", "open" or "changing".[/en]
       *   [ja][/ja]
       */

    }, {
      key: "mode",
      get: function get() {
        return this._mode;
      }
      /**
       * @property onSwipe
       * @type {Function}
       * @description
       *   [en]Hook called whenever the user slides the splitter. It gets a decimal ratio (0-1) and an animationOptions object as arguments.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "onSwipe",
      get: function get() {
        return this._onSwipe;
      },
      set: function set(value) {
        if (value && !(value instanceof Function)) {
          util$4.throw('"onSwipe" must be a function');
        }

        this._onSwipe = value;
      }
      /**
       * @property isOpen
       * @type {Boolean}
       * @description
       *   [en]Specifies whether the menu is opened.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "isOpen",
      get: function get() {
        return this._mode === COLLAPSE_MODE && this._state !== CLOSED_STATE;
      },
      set: function set(value) {
        this.toggle({}, value);
      }
      /**
       * @method open
       * @signature open([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {Function} [options.callback]
       *   [en]This function will be called after the menu has been opened.[/en]
       *   [ja]メニューが開いた後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *   [en]Open menu in collapse mode.[/en]
       *   [ja]collapseモードになっているons-splitter-side要素を開きます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the splitter side element or false if not in collapse mode[/en]
       *   [ja][/ja]
       */

    }, {
      key: "open",
      value: function open(options) {
        return this.toggle(options, true);
      }
      /**
       * @method close
       * @signature close([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {Function} [options.callback]
       *   [en]This function will be called after the menu has been closed.[/en]
       *   [ja]メニューが閉じた後に呼び出される関数オブジェクトを指定します。[/ja]
       * @description
       *   [en]Close menu in collapse mode.[/en]
       *   [ja]collapseモードになっているons-splitter-side要素を閉じます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the splitter side element or false if not in collapse mode[/en]
       *   [ja][/ja]
       */

    }, {
      key: "close",
      value: function close(options) {
        return this.toggle(options, false);
      }
      /**
       * @method toggle
       * @signature toggle([options])
       * @param {Object} [options]
       * @description
       *   [en]Opens if it's closed. Closes if it's open.[/en]
       *   [ja]開けている場合は要素を閉じますそして開けている場合は要素を開きます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the splitter side element or false if not in collapse mode[/en]
       *   [ja][/ja]
       */

    }, {
      key: "toggle",
      value: function toggle() {
        var _this4 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var force = arguments.length > 1 ? arguments[1] : undefined;
        var shouldOpen = typeof force === 'boolean' ? force : !this.isOpen;
        var action = shouldOpen ? 'open' : 'close';
        var FINAL_STATE = shouldOpen ? OPEN_STATE : CLOSED_STATE;

        if (this._mode === SPLIT_MODE) {
          return Promise.resolve(false);
        }

        if (this._state === FINAL_STATE) {
          return Promise.resolve(this);
        }

        if (this._lock.isLocked()) {
          return Promise.reject('Another splitter-side action is already running.');
        }

        if (shouldOpen && this._isOtherSideOpen()) {
          return Promise.reject('Another menu is already open.');
        }

        if (this._emitEvent("pre".concat(action))) {
          return Promise.reject("Canceled in pre".concat(action, " event."));
        }

        var unlock = this._lock.lock();

        this._state = CHANGING_STATE;

        if (options.animation) {
          this._updateAnimation(options.animation);
        }

        return new Promise(function (resolve) {
          _this4._animator[action](function () {
            util$4.iosPageScrollFix(shouldOpen);
            _this4._state = FINAL_STATE;
            unlock();

            _this4._emitEvent("post".concat(action));

            options.callback instanceof Function && options.callback(_this4);
            resolve(_this4);
          });
        });
      }
      /**
       * @method load
       * @signature load(page, [options])
       * @param {String} page
       *   [en]Page URL. Can be either an HTML document or a `<template>`.[/en]
       *   [ja]pageのURLか、`<template>`で宣言したテンプレートのid属性の値を指定します。[/ja]
       * @param {Object} [options]
       * @param {Function} [options.callback]
       * @description
       *   [en]Show the page specified in pageUrl in the right section[/en]
       *   [ja]指定したURLをメインページを読み込みます。[/ja]
       * @return {Promise}
       *   [en]Resolves to the new page element[/en]
       *   [ja][/ja]
       */

    }, {
      key: "load",
      value: function load(page) {
        var _this5 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this._page = page;

        var callback = options.callback || function () {};

        return new Promise(function (resolve) {
          var oldContent = _this5._content || null;

          _this5._pageLoader.load({
            page: page,
            parent: _this5
          }, function (pageElement) {
            if (oldContent) {
              _this5._pageLoader.unload(oldContent);

              oldContent = null;
            }

            setImmediate(function () {
              return _this5._show();
            });
            callback(pageElement);
            resolve(pageElement);
          });
        });
      }
    }, {
      key: "_show",
      value: function _show() {
        if (this._content) {
          this._content._show();
        }
      }
    }, {
      key: "_hide",
      value: function _hide() {
        if (this._content) {
          this._content._hide();
        }
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        if (this._content) {
          this._pageLoader.unload(this._content);
        }

        this.remove();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['animation', 'width', 'collapse', 'swipeable', 'animation-options'];
      }
    }, {
      key: "events",
      get: function get() {
        return ['preopen', 'postopen', 'preclose', 'postclose', 'modechange'];
      }
    }, {
      key: "rewritables",
      get: function get() {
        return rewritables$1;
      }
    }]);

    return SplitterSideElement;
  }(BaseElement);
  onsElements.SplitterSide = SplitterSideElement;
  customElements.define('ons-splitter-side', SplitterSideElement);

  var scheme$3 = {
    '': 'switch--*',
    '.switch__input': 'switch--*__input',
    '.switch__handle': 'switch--*__handle',
    '.switch__toggle': 'switch--*__toggle'
  };
  var locations = {
    ios: [1, 21],
    material: [0, 16]
  };
  /**
   * @element ons-switch
   * @category form
   * @description
   *   [en]
   *     Switch component. The switch can be toggled both by dragging and tapping.
   *
   *     Will automatically displays a Material Design switch on Android devices.
   *   [/en]
   *   [ja]スイッチを表示するコンポーネントです。[/ja]
   * @modifier material
   *   [en]Material Design switch[/en]
   *   [ja][/ja]
   * @codepen LpXZQQ
   * @tutorial vanilla/Reference/switch
   * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
   * @example
   * <ons-switch checked></ons-switch>
   * <ons-switch disabled></ons-switch>
   * <ons-switch modifier="material"></ons-switch>
   */

  var SwitchElement = /*#__PURE__*/function (_BaseCheckboxElement) {
    _inherits(SwitchElement, _BaseCheckboxElement);

    var _super = _createSuper(SwitchElement);

    function SwitchElement() {
      var _this;

      _classCallCheck(this, SwitchElement);

      _this = _super.call(this);
      contentReady(_assertThisInitialized(_this), function () {
        _this.attributeChangedCallback('modifier', null, _this.getAttribute('modifier'));
      });
      _this._onChange = _this._onChange.bind(_assertThisInitialized(_this));
      _this._onRelease = _this._onRelease.bind(_assertThisInitialized(_this));
      _this._lastTimeStamp = 0;
      return _this;
    }

    _createClass(SwitchElement, [{
      key: "_scheme",
      get: function get() {
        return scheme$3;
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        return 'switch';
      }
    }, {
      key: "_template",
      get: function get() {
        return "\n      <input type=\"".concat(this.type, "\" class=\"").concat(this._defaultClassName, "__input\">\n      <div class=\"").concat(this._defaultClassName, "__toggle\">\n        <div class=\"").concat(this._defaultClassName, "__handle\">\n          <div class=\"").concat(this._defaultClassName, "__touch\"></div>\n        </div>\n      </div>\n    ");
      }
    }, {
      key: "type",
      get: function get() {
        return 'checkbox';
      }
      /* Own props */

    }, {
      key: "_getPosition",
      value: function _getPosition(e) {
        var l = this._locations;
        return Math.min(l[1], Math.max(l[0], this._startX + e.gesture.deltaX));
      }
    }, {
      key: "_emitChangeEvent",
      value: function _emitChangeEvent() {
        util$4.triggerElementEvent(this, 'change', {
          value: this.checked,
          switch: this,
          isInteractive: true
        });
      }
    }, {
      key: "_onChange",
      value: function _onChange(event) {
        if (event && event.stopPropagation) {
          event.stopPropagation();
        }

        this._emitChangeEvent();
      }
    }, {
      key: "_onClick",
      value: function _onClick(ev) {
        if (ev.target.classList.contains("".concat(this.defaultElementClass, "__touch")) || ev.timeStamp - this._lastTimeStamp < 50 // Prevent second click triggered by <label>
        ) {
          ev.preventDefault();
        }

        this._lastTimeStamp = ev.timeStamp;
      }
    }, {
      key: "_onHold",
      value: function _onHold(e) {
        if (!this.disabled) {
          ModifierUtil.addModifier(this, 'active');
          document.addEventListener('release', this._onRelease);
        }
      }
    }, {
      key: "_onDragStart",
      value: function _onDragStart(e) {
        if (this.disabled || ['left', 'right'].indexOf(e.gesture.direction) === -1) {
          ModifierUtil.removeModifier(this, 'active');
          return;
        }

        e.consumed = true;
        ModifierUtil.addModifier(this, 'active');
        this._startX = this._locations[this.checked ? 1 : 0]; // - e.gesture.deltaX;

        this.addEventListener('drag', this._onDrag);
        document.addEventListener('release', this._onRelease);
      }
    }, {
      key: "_onDrag",
      value: function _onDrag(e) {
        e.stopPropagation();
        this._handle.style.left = this._getPosition(e) + 'px';
      }
    }, {
      key: "_onRelease",
      value: function _onRelease(e) {
        var l = this._locations;

        var position = this._getPosition(e);

        var previousValue = this.checked;
        this.checked = position >= (l[0] + l[1]) / 2;

        if (this.checked !== previousValue) {
          this._emitChangeEvent();
        }

        this.removeEventListener('drag', this._onDrag);
        document.removeEventListener('release', this._onRelease);
        this._handle.style.left = '';
        ModifierUtil.removeModifier(this, 'active');
      }
    }, {
      key: "click",
      value: function click() {
        var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!this.disabled) {
          this.checked = !this.checked;

          this._emitChangeEvent();

          this._lastTimeStamp = ev.timeStamp || 0;
        }
      }
    }, {
      key: "_handle",
      get: function get() {
        return this.querySelector(".".concat(this._defaultClassName, "__handle"));
      }
    }, {
      key: "checkbox",
      get: function get() {
        return this._input;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        contentReady(this, function () {
          _this2._input.addEventListener('change', _this2._onChange);
        });
        this.addEventListener('dragstart', this._onDragStart);
        this.addEventListener('hold', this._onHold);
        this.addEventListener('tap', this.click);
        this.addEventListener('click', this._onClick);
        this._gestureDetector = new GestureDetector(this, {
          dragMinDistance: 1,
          holdTimeout: 251,
          passive: true
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this3 = this;

        contentReady(this, function () {
          _this3._input.removeEventListener('change', _this3._onChange);
        });
        this.removeEventListener('dragstart', this._onDragStart);
        this.removeEventListener('hold', this._onHold);
        this.removeEventListener('tap', this.click);
        this.removeEventListener('click', this._onClick);

        if (this._gestureDetector) {
          this._gestureDetector.dispose();
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        if (name === 'modifier') {
          var md = (current || '').indexOf('material') !== -1;
          this._locations = locations[md ? 'material' : 'ios'];
        }

        _get(_getPrototypeOf(SwitchElement.prototype), "attributeChangedCallback", this).call(this, name, last, current);
      }
      /**
       * @event change
       * @description
       *   [en]Fired when the switch is toggled.[/en]
       *   [ja]ON/OFFが変わった時に発火します。[/ja]
       * @param {Object} event
       *   [en]Event object.[/en]
       *   [ja]イベントオブジェクト。[/ja]
       * @param {Object} event.switch
       *   [en]Switch object.[/en]
       *   [ja]イベントが発火したSwitchオブジェクトを返します。[/ja]
       * @param {Boolean} event.value
       *   [en]Current value.[/en]
       *   [ja]現在の値を返します。[/ja]
       * @param {Boolean} event.isInteractive
       *   [en]True if the change was triggered by the user clicking on the switch.[/en]
       *   [ja]タップやクリックなどのユーザの操作によって変わった場合にはtrueを返します。[/ja]
       */

      /**
       * @attribute modifier
       * @type {String}
       * @description
       *  [en]The appearance of the switch.[/en]
       *  [ja]スイッチの表現を指定します。[/ja]
       */

      /**
       * @attribute disabled
       * @description
       *   [en]Whether the switch is be disabled.[/en]
       *   [ja]スイッチを無効の状態にする場合に指定します。[/ja]
       */

      /**
       * @attribute checked
       * @description
       *   [en]Whether the switch is checked.[/en]
       *   [ja]スイッチがONの状態にするときに指定します。[/ja]
       */

      /**
       * @attribute input-id
       * @type {String}
       * @description
       *   [en]Specify the `id` attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
       *   [ja][/ja]
       */

      /**
       * @property checked
       * @type {Boolean}
       * @description
       *   [en]This value is `true` if the switch is checked.[/en]
       *   [ja]スイッチがONの場合に`true`。[/ja]
       */

      /**
       * @property value
       * @type {String}
       * @description
       *   [en]The current value of the input.[/en]
       *   [ja][/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */

      /**
       * @property checkbox
       * @readonly
       * @type {HTMLElement}
       * @description
       *   [en]The underlying checkbox element.[/en]
       *   [ja]コンポーネント内部のcheckbox要素になります。[/ja]
       */

      /**
       * @method focus
       * @signature focus()
       * @description
       *   [en]Focuses the switch.[/en]
       *   [ja][/ja]
       */

      /**
       * @method blur
       * @signature blur()
       * @description
       *   [en]Removes focus from the switch.[/en]
       *   [ja][/ja]
       */

    }], [{
      key: "observedAttributes",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(SwitchElement), "observedAttributes", this)), ['modifier']);
      }
    }]);

    return SwitchElement;
  }(BaseCheckboxElement);
  onsElements.Switch = SwitchElement;
  customElements.define('ons-switch', SwitchElement);

  var scheme$2 = {
    '.tabbar__content': 'tabbar--*__content',
    '.tabbar__border': 'tabbar--*__border',
    '.tabbar': 'tabbar--*'
  };
  var rewritables = {
    /**
     * @param {Element} tabbarElement
     * @param {Function} callback
     */
    ready: function ready(tabbarElement, callback) {
      callback();
    }
  };
  internal$1.nullElement;

  var lerp = function lerp(x0, x1, t) {
    return (1 - t) * x0 + t * x1;
  };
  /**
   * @element ons-tabbar
   * @category tabbar
   * @description
   *   [en]A component to display a tab bar on the bottom of a page. Used with `<ons-tab>` to manage pages using tabs.[/en]
   *   [ja]タブバーをページ下部に表示するためのコンポーネントです。ons-tabと組み合わせて使うことで、ページを管理できます。[/ja]
   * @codepen pGuDL
   * @tutorial vanilla/Reference/tabbar
   * @modifier material
   *   [en]A tabbar in Material Design.[/en]
   *   [ja][/ja]
   * @modifier autogrow
   *   [en]Tabs automatically grow depending on their content instead of having a fixed width.[/en]
   *   [ja][/ja]
   * @modifier top-border
   *   [en]Shows a static border-bottom in tabs for iOS top tabbars.[/en]
   *   [ja][/ja]
   * @guide fundamentals.html#managing-pages
   *  [en]Managing multiple pages.[/en]
   *  [ja]複数のページを管理する[/ja]
   * @seealso ons-tab
   *   [en]The `<ons-tab>` component.[/en]
   *   [ja]ons-tabコンポーネント[/ja]
   * @seealso ons-page
   *   [en]The `<ons-page>` component.[/en]
   *   [ja]ons-pageコンポーネント[/ja]
   * @example
   * <ons-tabbar>
   *   <ons-tab
   *     page="home.html"
   *     label="Home"
   *     active>
   *   </ons-tab>
   *   <ons-tab
   *     page="settings.html"
   *     label="Settings"
   *     active>
   *   </ons-tab>
   * </ons-tabbar>
   *
   * <template id="home.html">
   *   ...
   * </template>
   *
   * <template id="settings.html">
   *   ...
   * </template>
   */


  var TabbarElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(TabbarElement, _BaseElement);

    var _super = _createSuper(TabbarElement);

    /**
     * @event prechange
     * @description
     *   [en]Fires just before the tab is changed.[/en]
     *   [ja]アクティブなタブが変わる前に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクト。[/ja]
     * @param {Number} event.index
     *   [en]Current index.[/en]
     *   [ja]現在アクティブになっているons-tabのインデックスを返します。[/ja]
     * @param {Object} event.tabItem
     *   [en]Tab item object.[/en]
     *   [ja]tabItemオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Call this function to cancel the change event.[/en]
     *   [ja]この関数を呼び出すと、アクティブなタブの変更がキャンセルされます。[/ja]
     */

    /**
     * @event postchange
     * @description
     *   [en]Fires just after the tab is changed.[/en]
     *   [ja]アクティブなタブが変わった後に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクト。[/ja]
     * @param {Number} event.index
     *   [en]Current index.[/en]
     *   [ja]現在アクティブになっているons-tabのインデックスを返します。[/ja]
     * @param {Object} event.tabItem
     *   [en]Tab item object.[/en]
     *   [ja]tabItemオブジェクト。[/ja]
     */

    /**
     * @event reactive
     * @description
     *   [en]Fires if the already open tab is tapped again.[/en]
     *   [ja]すでにアクティブになっているタブがもう一度タップやクリックされた場合に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクト。[/ja]
     * @param {Number} event.index
     *   [en]Current index.[/en]
     *   [ja]現在アクティブになっているons-tabのインデックスを返します。[/ja]
     * @param {Object} event.tabItem
     *   [en]Tab item object.[/en]
     *   [ja]tabItemオブジェクト。[/ja]
     */

    /**
     * @event swipe
     * @description
     *   [en]Fires when the tabbar swipes.[/en]
     *   [ja][/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクト。[/ja]
     * @param {Number} event.index
     *   [en]Current index.[/en]
     *   [ja]現在アクティブになっているons-tabのインデックスを返します。[/ja]
     * @param {Object} event.options
     *   [en]Animation options object.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @default none
     * @description
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. {duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */

    /**
     * @attribute position
     * @initonly
     * @type {String}
     * @default bottom
     * @description
     *   [en]Tabbar's position. Available values are `"bottom"` and `"top"`. Use `"auto"` to choose position depending on platform (bottom for iOS flat design, top for Material Design).[/en]
     *   [ja]タブバーの位置を指定します。"bottom"もしくは"top"を選択できます。デフォルトは"bottom"です。[/ja]
     */

    /**
     * @attribute swipeable
     * @description
     *   [en]If this attribute is set the tab bar can be scrolled by drag or swipe.[/en]
     *   [ja]この属性がある時、タブバーをスワイプやドラッグで移動できるようになります。[/ja]
     */

    /**
     * @attribute ignore-edge-width
     * @type {Number}
     * @default 20
     * @description
     *   [en]Distance in pixels from both edges. Swiping on these areas will prioritize parent components such as `ons-splitter` or `ons-navigator`.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute active-index
     * @type {Number}
     * @default 0
     * @description
     *   [en]The index of the tab that is currently active.[/en]
     *   [ja][/ja]
     */

    /**
     * @property activeIndex
     * @type {Number}
     * @default 0
     * @description
     *   [en]The index of the tab that is currently active.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute hide-tabs
     * @description
     *   [en]Whether to hide the tabs.[/en]
     *   [ja]タブを非表示にする場合に指定します。[/ja]
     */

    /**
     * @property hideTabs
     * @description
     *   [en]Whether to hide the tabs.[/en]
     *   [ja]タブを非表示にする場合に指定します。[/ja]
     */

    /**
     * @attribute tab-border
     * @description
     *   [en]If this attribute is set the tabs show a dynamic bottom border. Only works for iOS flat design since the border is always visible in Material Design.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the tabbar.[/en]
     *   [ja]タブバーの表現を指定します。[/ja]
     */
    function TabbarElement() {
      var _this;

      _classCallCheck(this, TabbarElement);

      _this = _super.call(this);
      _this._loadInactive = util$4.defer(); // Improves #2324

      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });

      var _util$defineListenerP = util$4.defineListenerProperty(_assertThisInitialized(_this), 'swipe'),
          onConnected = _util$defineListenerP.onConnected,
          onDisconnected = _util$defineListenerP.onDisconnected;

      _this._connectOnSwipe = onConnected;
      _this._disconnectOnSwipe = onDisconnected;
      return _this;
    }

    _createClass(TabbarElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        if (!this._swiper) {
          this._swiper = new Swiper({
            getElement: function getElement() {
              return _this2._contentElement;
            },
            getInitialIndex: function getInitialIndex() {
              return _this2.activeIndex || _this2.getAttribute('activeIndex');
            },
            getAutoScrollRatio: this._getAutoScrollRatio.bind(this),
            getBubbleWidth: function getBubbleWidth() {
              return parseInt(_this2.getAttribute('ignore-edge-width') || 25, 10);
            },
            isAutoScrollable: function isAutoScrollable() {
              return true;
            },
            preChangeHook: this._onPreChange.bind(this),
            postChangeHook: this._onPostChange.bind(this),
            refreshHook: this._onRefresh.bind(this),
            scrollHook: this._onScroll.bind(this)
          });
          contentReady(this, function () {
            _this2._tabbarBorder = util$4.findChild(_this2._tabbarElement, '.tabbar__border');

            _this2._swiper.init({
              swipeable: _this2.hasAttribute('swipeable')
            });
          });
        }

        contentReady(this, function () {
          _this2._updatePosition();

          _this2._updateVisibility();

          if (!util$4.findParent(_this2, 'ons-page', function (p) {
            return p === document.body;
          })) {
            _this2._show(); // This tabbar is the top component

          }
        });

        this._connectOnSwipe();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._swiper && this._swiper.initialized) {
          this._swiper.dispose();

          this._swiper = null;
          this._tabbarBorder = null;
          this._tabsRect = null;
        }

        this._disconnectOnSwipe();
      }
    }, {
      key: "_normalizeEvent",
      value: function _normalizeEvent(event) {
        return _objectSpread2(_objectSpread2({}, event), {}, {
          index: event.activeIndex,
          tabItem: this.tabs[event.activeIndex]
        });
      }
    }, {
      key: "_onPostChange",
      value: function _onPostChange(event) {
        event = this._normalizeEvent(event);
        util$4.triggerElementEvent(this, 'postchange', event);
        var page = event.tabItem.pageElement;
        page && page._show();
      }
    }, {
      key: "_onPreChange",
      value: function _onPreChange(event) {
        event = this._normalizeEvent(event);

        event.cancel = function () {
          return event.canceled = true;
        };

        util$4.triggerElementEvent(this, 'prechange', event);

        if (!event.canceled) {
          var _event = event,
              activeIndex = _event.activeIndex,
              lastActiveIndex = _event.lastActiveIndex;
          var tabs = this.tabs;
          tabs[activeIndex].setActive(true);

          if (lastActiveIndex >= 0) {
            var prevTab = tabs[lastActiveIndex];
            prevTab.setActive(false);
            prevTab.pageElement && prevTab.pageElement._hide();
          }
        }

        return event.canceled;
      }
    }, {
      key: "_onScroll",
      value: function _onScroll(index) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (this._tabbarBorder) {
          this._tabbarBorder.style.transition = "all ".concat(options.duration || 0, "s ").concat(options.timing || '');

          if (this._autogrow && this._tabsRect.length > 0) {
            var a = Math.floor(index),
                b = Math.ceil(index),
                r = index % 1;
            this._tabbarBorder.style.width = lerp(this._tabsRect[a].width, this._tabsRect[b].width, r) + 'px';
            this._tabbarBorder.style.transform = "translate3d(".concat(lerp(this._tabsRect[a].left, this._tabsRect[b].left, r), "px, 0, 0)");
          } else {
            this._tabbarBorder.style.transform = "translate3d(".concat(index * 100, "%, 0, 0)");
          }
        }

        util$4.triggerElementEvent(this, 'swipe', {
          index: index,
          options: options
        });
      }
    }, {
      key: "_onRefresh",
      value: function _onRefresh() {
        this._autogrow = util$4.hasModifier(this, 'autogrow');
        this._tabsRect = this.tabs.map(function (tab) {
          return tab.getBoundingClientRect();
        });

        if (this._tabbarBorder) {
          this._tabbarBorder.style.display = this.hasAttribute('tab-border') || util$4.hasModifier(this, 'material') ? 'block' : 'none';
          var index = this.getActiveTabIndex();

          if (this._tabsRect.length > 0 && index >= 0) {
            this._tabbarBorder.style.width = this._tabsRect[index].width + 'px';
          }
        }
      }
    }, {
      key: "_getAutoScrollRatio",
      value: function _getAutoScrollRatio(matches, velocity, size) {
        var ratio = .6; // Base ratio

        var modifier = size / 300 * (matches ? -1 : 1); // Based on screen size

        return Math.min(1, Math.max(0, ratio + velocity * modifier));
      }
    }, {
      key: "_tabbarElement",
      get: function get() {
        return util$4.findChild(this, '.tabbar');
      }
    }, {
      key: "_contentElement",
      get: function get() {
        return util$4.findChild(this, '.tabbar__content');
      }
    }, {
      key: "_targetElement",
      get: function get() {
        var content = this._contentElement;
        return content && content.children[0] || null;
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        var content = this._contentElement || util$4.create('.tabbar__content');
        content.classList.add('ons-tabbar__content');
        var tabbar = this._tabbarElement || util$4.create('.tabbar');
        tabbar.classList.add('ons-tabbar__footer');

        if (!tabbar.parentNode) {
          while (this.firstChild) {
            tabbar.appendChild(this.firstChild);
          }
        }

        if (tabbar.children.length > this.activeIndex && !util$4.findChild(tabbar, '[active]')) {
          tabbar.children[this.activeIndex].setAttribute('active', '');
        }

        this._tabbarBorder = util$4.findChild(tabbar, '.tabbar__border') || util$4.create('.tabbar__border');
        tabbar.appendChild(this._tabbarBorder);
        tabbar.classList.add('ons-swiper-tabbar'); // Hides material border

        !content.children[0] && content.appendChild(document.createElement('div'));
        !content.children[1] && content.appendChild(document.createElement('div'));
        content.appendChild = content.appendChild.bind(content.children[0]);
        content.insertBefore = content.insertBefore.bind(content.children[0]);
        this.appendChild(content);
        this.appendChild(tabbar); // Triggers ons-tab connectedCallback

        ModifierUtil.initModifier(this, scheme$2);
      }
    }, {
      key: "_updatePosition",
      value: function _updatePosition() {
        var _this3 = this;

        var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getAttribute('position');
        var top = this._top = position === 'top' || position === 'auto' && util$4.hasModifier(this, 'material');
        var action = top ? util$4.addModifier : util$4.removeModifier;
        action(this, 'top');
        var page = util$4.findParent(this, 'ons-page');

        if (page) {
          contentReady(page, function () {
            var p = 0;

            if (page.children[0] && util$4.match(page.children[0], 'ons-toolbar')) {
              action(page.children[0], 'noshadow');
              p = 1; // Visual fix for some devices
            }

            var content = page._getContentElement();

            var cs = window.getComputedStyle(page._getContentElement(), null);
            _this3.style.top = top ? parseInt(cs.getPropertyValue('padding-top'), 10) - p + 'px' : ''; // Refresh content top - Fix for iOS 8

            content.style.top = cs.top;
            content.style.top = '';
          });
        }

        internal$1.autoStatusBarFill(function () {
          var filled = util$4.findParent(_this3, function (e) {
            return e.hasAttribute('status-bar-fill');
          });
          util$4.toggleAttribute(_this3, 'status-bar-fill', top && !filled);
        });
      }
    }, {
      key: "topPage",
      get: function get() {
        var tabs = this.tabs,
            index = this.getActiveTabIndex();
        return tabs[index] ? tabs[index].pageElement || this.pages[0] || null : null;
      }
    }, {
      key: "pages",
      get: function get() {
        return util$4.arrayFrom(this._targetElement.children);
      }
    }, {
      key: "tabs",
      get: function get() {
        return Array.prototype.filter.call(this._tabbarElement.children, function (e) {
          return e.tagName === 'ONS-TAB';
        });
      }
      /**
       * @method setActiveTab
       * @signature setActiveTab(index, [options])
       * @param {Number} index
       *   [en]Tab index.[/en]
       *   [ja]タブのインデックスを指定します。[/ja]
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {Function} [options.callback]
       *   [en]Function that runs when the new page has loaded.[/en]
       *   [ja][/ja]
       * @param {String} [options.animation]
       *   [en]If this option is "none", the transition won't slide.[/en]
       *   [ja][/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @description
       *   [en]Show specified tab page. Animations and their options can be specified by the second parameter.[/en]
       *   [ja]指定したインデックスのタブを表示します。アニメーションなどのオプションを指定できます。[/ja]
       * @return {Promise}
       *   [en]A promise that resolves to the new page element.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "setActiveTab",
      value: function setActiveTab(nextIndex) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var previousIndex = this.activeIndex;
        this._activeIndexSkipEffect = true;
        this.activeIndex = nextIndex;
        return this._updateActiveIndex(nextIndex, previousIndex, options);
      }
    }, {
      key: "_updateActiveIndex",
      value: function _updateActiveIndex(nextIndex, prevIndex) {
        var _this4 = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var prevTab = this.tabs[prevIndex],
            nextTab = this.tabs[nextIndex];

        if (!nextTab) {
          return Promise.reject('Specified index does not match any tab.');
        }

        if (nextIndex === prevIndex) {
          util$4.triggerElementEvent(this, 'reactive', {
            index: nextIndex,
            activeIndex: nextIndex,
            tabItem: nextTab
          });
          return Promise.resolve(nextTab.pageElement);
        } // FIXME: nextTab.loaded is broken in Zone.js promises (Angular2)


        var nextPage = nextTab.pageElement;
        return (nextPage ? Promise.resolve(nextPage) : nextTab.loaded).then(function (nextPage) {
          return _this4._swiper.setActiveIndex(nextIndex, _objectSpread2(_objectSpread2({
            reject: true
          }, options), {}, {
            animation: prevTab && nextPage ? options.animation || _this4.getAttribute('animation') : 'none',
            animationOptions: util$4.extend({
              duration: .3,
              timing: 'cubic-bezier(.4, .7, .5, 1)'
            }, _this4.hasAttribute('animation-options') ? util$4.animationOptionsParse(_this4.getAttribute('animation-options')) : {}, options.animationOptions || {})
          })).then(function () {
            options.callback instanceof Function && options.callback(nextPage);
            return nextPage;
          });
        });
      }
      /**
       * @method setTabbarVisibility
       * @signature setTabbarVisibility(visible)
       * @param {Boolean} visible
       * @description
       *   [en]Used to hide or show the tab bar.[/en]
       *   [ja][/ja]
       */

    }, {
      key: "setTabbarVisibility",
      value: function setTabbarVisibility(visible) {
        this.hideTabs = !visible;
      }
    }, {
      key: "show",
      value: function show() {
        this.hideTabs = false;
      }
    }, {
      key: "hide",
      value: function hide() {
        this.hideTabs = true;
      }
    }, {
      key: "hideTabs",
      get: function get() {
        return this.hasAttribute('hide-tabs');
      },
      set: function set(value) {
        if (value) {
          this.setAttribute('hide-tabs', '');
        } else {
          this.removeAttribute('hide-tabs');
        }
      }
    }, {
      key: "_updateVisibility",
      value: function _updateVisibility() {
        var _this5 = this;

        contentReady(this, function () {
          var visible = !_this5.hideTabs;
          _this5._contentElement.style[_this5._top ? 'top' : 'bottom'] = visible ? '' : '0px';
          _this5._tabbarElement.style.display = visible ? '' : 'none';
          visible && _this5._onRefresh();
        });
      }
      /**
       * @property visible
       * @readonly
       * @type {Boolean}
       * @description
       *   [en]Whether the tabbar is visible or not.[/en]
       *   [ja]タブバーが見える場合に`true`。[/ja]
       */

    }, {
      key: "visible",
      get: function get() {
        return this._tabbarElement.style.display !== 'none';
      }
      /**
       * @property swipeable
       * @type {Boolean}
       * @description
       *   [en]Enable swipe interaction.[/en]
       *   [ja]swipeableであればtrueを返します。[/ja]
       */

    }, {
      key: "swipeable",
      get: function get() {
        return this.hasAttribute('swipeable');
      },
      set: function set(value) {
        return util$4.toggleAttribute(this, 'swipeable', value);
      }
      /**
       * @property onSwipe
       * @type {Function}
       * @description
       *   [en]Hook called whenever the user slides the tabbar. It gets a decimal index and an animationOptions object as arguments.[/en]
       *   [ja][/ja]
       */

      /**
       * @method getActiveTabIndex
       * @signature getActiveTabIndex()
       * @return {Number}
       *   [en]The index of the currently active tab.[/en]
       *   [ja]現在アクティブになっているタブのインデックスを返します。[/ja]
       * @description
       *   [en]Returns tab index on current active tab. If active tab is not found, returns -1.[/en]
       *   [ja]現在アクティブになっているタブのインデックスを返します。現在アクティブなタブがない場合には-1を返します。[/ja]
       */

    }, {
      key: "getActiveTabIndex",
      value: function getActiveTabIndex() {
        var tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tabs;

        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i] && tabs[i].tagName === 'ONS-TAB' && tabs[i].isActive()) {
            return i;
          }
        }

        return -1;
      }
    }, {
      key: "activeIndex",
      get: function get() {
        return Number(this.getAttribute('active-index'));
      },
      set: function set(value) {
        if (value !== null && value !== undefined) {
          this.setAttribute('active-index', value);
        }
      }
    }, {
      key: "_show",
      value: function _show() {
        var _this6 = this;

        this._swiper.show();

        setImmediate(function () {
          var tabs = _this6.tabs;

          var activeIndex = _this6.getActiveTabIndex(tabs);

          _this6._loadInactive.resolve();

          if (tabs.length > 0 && activeIndex >= 0) {
            tabs[activeIndex].loaded.then(function (el) {
              return el && setImmediate(function () {
                return el._show();
              });
            });
          }
        });
      }
    }, {
      key: "_hide",
      value: function _hide() {
        this._swiper.hide();

        var topPage = this.topPage;
        topPage && topPage._hide();
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.tabs.forEach(function (tab) {
          return tab.remove();
        });
        this.remove();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this7 = this;

        if (name === 'modifier') {
          ModifierUtil.onModifierChanged(last, current, this, scheme$2);

          var isTop = function isTop(m) {
            return /(^|\s+)top($|\s+)/i.test(m);
          };

          isTop(last) !== isTop(current) && this._updatePosition();
        } else if (name === 'position') {
          util$4.isAttached(this) && this._updatePosition();
        } else if (name === 'swipeable') {
          this._swiper && this._swiper.updateSwipeable(this.hasAttribute('swipeable'));
        } else if (name === 'hide-tabs') {
          this.isConnected && this._updateVisibility();
        } else if (name === 'active-index') {
          if (this._activeIndexSkipEffect) {
            this._activeIndexSkipEffect = false;
          } else if (this.isConnected) {
            contentReady(this, function () {
              return _this7._updateActiveIndex(current, last);
            });
          }
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'position', 'swipeable', 'tab-border', 'hide-tabs', 'active-index'];
      }
    }, {
      key: "rewritables",
      get: function get() {
        return rewritables;
      }
    }, {
      key: "events",
      get: function get() {
        return ['prechange', 'postchange', 'reactive'];
      }
    }]);

    return TabbarElement;
  }(BaseElement);
  onsElements.Tabbar = TabbarElement;
  customElements.define('ons-tabbar', TabbarElement);

  var defaultClassName$1 = 'tabbar__item';
  var scheme$1 = {
    '': 'tabbar--*__item',
    '.tabbar__button': 'tabbar--*__button'
  };
  /**
   * @element ons-tab
   * @category tabbar
   * @description
   *   [en]Represents a tab inside tab bar. Each `<ons-tab>` represents a page.[/en]
   *   [ja]
   *     タブバーに配置される各アイテムのコンポーネントです。それぞれのons-tabはページを表します。
   *     ons-tab要素の中には、タブに表示されるコンテンツを直接記述することが出来ます。
   *   [/ja]
   * @codepen pGuDL
   * @tutorial vanilla/Reference/tabbar
   * @guide fundamentals.html#managing-pages
   *   [en]Managing multiple pages.[/en]
   *   [ja]複数のページを管理する[/ja]]
   * @guide appsize.html#removing-icon-packs [en]Removing icon packs.[/en][ja][/ja]
   * @guide faq.html#how-can-i-use-custom-icon-packs [en]Adding custom icon packs.[/en][ja][/ja]
   * @seealso ons-tabbar
   *   [en]ons-tabbar component[/en]
   *   [ja]ons-tabbarコンポーネント[/ja]
   * @seealso ons-page
   *   [en]ons-page component[/en]
   *   [ja]ons-pageコンポーネント[/ja]
   * @seealso ons-icon
   *   [en]ons-icon component[/en]
   *   [ja]ons-iconコンポーネント[/ja]
   * @example
   * <ons-tabbar>
   *   <ons-tab
   *     page="home.html"
   *     label="Home"
   *     active>
   *   </ons-tab>
   *   <ons-tab
   *     page="settings.html"
   *     label="Settings"
   *     active>
   *   </ons-tab>
   * </ons-tabbar>
   *
   * <template id="home.html">
   *   ...
   * </template>
   *
   * <template id="settings.html">
   *   ...
   * </template>

   */

  var TabElement = /*#__PURE__*/function (_BaseElement) {
    _inherits(TabElement, _BaseElement);

    var _super = _createSuper(TabElement);

    /**
     * @attribute page
     * @initonly
     * @type {String}
     * @description
     *   [en]The page that is displayed when the tab is tapped.[/en]
     *   [ja]ons-tabが参照するページへのURLを指定します。[/ja]
     */

    /**
     * @attribute icon
     * @type {String}
     * @description
     *   [en]
     *     The icon name for the tab. Can specify the same icon name as `<ons-icon>`. Check [See also](#seealso) section for more information.
     *   [/en]
     *   [ja]
     *     アイコン名を指定します。ons-iconと同じアイコン名を指定できます。
     *     個別にアイコンをカスタマイズする場合は、background-imageなどのCSSスタイルを用いて指定できます。
     *   [/ja]
     */

    /**
     * @attribute active-icon
     * @type {String}
     * @description
     *   [en]The name of the icon when the tab is active.[/en]
     *   [ja]アクティブの際のアイコン名を指定します。[/ja]
     */

    /**
     * @attribute label
     * @type {String}
     * @description
     *   [en]The label of the tab item.[/en]
     *   [ja]アイコン下に表示されるラベルを指定します。[/ja]
     */

    /**
     * @attribute badge
     * @type {String}
     * @description
     *   [en]Display a notification badge on top of the tab.[/en]
     *   [ja]バッジに表示する内容を指定します。[/ja]
     */

    /**
     * @attribute active
     * @description
     *   [en]This attribute should be set to the tab that is active by default.[/en]
     *   [ja][/ja]
     */
    function TabElement() {
      var _this;

      _classCallCheck(this, TabElement);

      _this = _super.call(this);

      if (['label', 'icon', 'badge'].some(_this.hasAttribute.bind(_assertThisInitialized(_this)))) {
        _this._compile();
      } else {
        contentReady(_assertThisInitialized(_this), function () {
          return _this._compile();
        });
      }

      _this._pageLoader = defaultPageLoader;
      _this._onClick = _this._onClick.bind(_assertThisInitialized(_this));

      var _util$defineListenerP = util$4.defineListenerProperty(_assertThisInitialized(_this), 'click'),
          onConnected = _util$defineListenerP.onConnected,
          onDisconnected = _util$defineListenerP.onDisconnected;

      _this._connectOnClick = onConnected;
      _this._disconnectOnClick = onDisconnected;
      return _this;
    }

    _createClass(TabElement, [{
      key: "pageLoader",
      get: function get() {
        return this._pageLoader;
      },
      set: function set(loader) {
        if (!(loader instanceof PageLoader)) {
          util$4.throwPageLoader();
        }

        this._pageLoader = loader;
      }
    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.classList.add(defaultClassName$1);

        if (this._button) {
          return;
        }

        var button = util$4.create('button.tabbar__button');

        while (this.childNodes[0]) {
          button.appendChild(this.childNodes[0]);
        }

        var input = util$4.create('input', {
          display: 'none'
        });
        input.type = 'radio';
        this.appendChild(input);
        this.appendChild(button);

        this._updateButtonContent();

        ModifierUtil.initModifier(this, scheme$1);

        this._updateRipple();
      }
    }, {
      key: "_updateRipple",
      value: function _updateRipple() {
        this._button && util$4.updateRipple(this._button, this.hasAttribute('ripple'));
      }
    }, {
      key: "_updateButtonContent",
      value: function _updateButtonContent() {
        var _this2 = this;

        var button = this._button;
        var iconWrapper = this._icon;

        if (this.hasAttribute('icon')) {
          iconWrapper = iconWrapper || util$4.createElement('<div class="tabbar__icon"><ons-icon></ons-icon></div>');
          var icon = iconWrapper.children[0];

          var fix = function (last) {
            return function () {
              return icon.attributeChangedCallback('icon', last, _this2.getAttribute('icon'));
            };
          }(icon.getAttribute('icon'));

          if (this.hasAttribute('icon') && this.hasAttribute('active-icon')) {
            icon.setAttribute('icon', this.getAttribute(this.isActive() ? 'active-icon' : 'icon'));
          } else if (this.hasAttribute('icon')) {
            icon.setAttribute('icon', this.getAttribute('icon'));
          }

          iconWrapper.parentElement !== button && button.insertBefore(iconWrapper, button.firstChild); // dirty fix for https://github.com/OnsenUI/OnsenUI/issues/1654

          icon.attributeChangedCallback instanceof Function ? fix() : setImmediate(function () {
            return icon.attributeChangedCallback instanceof Function && fix();
          });
        } else {
          iconWrapper && iconWrapper.remove();
        }

        ['label', 'badge'].forEach(function (attr, index) {
          var prop = _this2.querySelector(".tabbar__".concat(attr));

          if (_this2.hasAttribute(attr)) {
            prop = prop || util$4.create(".tabbar__".concat(attr) + (attr === 'badge' ? ' notification' : ''));
            prop.textContent = _this2.getAttribute(attr);
            prop.parentElement !== button && button.appendChild(prop);
          } else {
            prop && prop.remove();
          }
        });
      }
    }, {
      key: "_input",
      get: function get() {
        return util$4.findChild(this, 'input');
      }
    }, {
      key: "_button",
      get: function get() {
        return util$4.findChild(this, '.tabbar__button');
      }
    }, {
      key: "_icon",
      get: function get() {
        return this.querySelector('.tabbar__icon');
      }
    }, {
      key: "_tabbar",
      get: function get() {
        return util$4.findParent(this, 'ons-tabbar');
      }
    }, {
      key: "index",
      get: function get() {
        return Array.prototype.indexOf.call(this.parentElement.children, this);
      }
    }, {
      key: "_onClick",
      value: function _onClick(event) {
        var _this3 = this;

        setTimeout(function () {
          if (!event.defaultPrevented) {
            _this3._tabbar.setActiveTab(_this3.index, {
              reject: false
            });
          }
        });
      }
    }, {
      key: "setActive",
      value: function setActive() {
        var _this4 = this;

        var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        contentReady(this, function () {
          _this4._input.checked = active;

          _this4.classList.toggle('active', active);

          util$4.toggleAttribute(_this4, 'active', active);

          if (_this4.hasAttribute('icon') && _this4.hasAttribute('active-icon')) {
            _this4._icon.children[0].setAttribute('icon', _this4.getAttribute(active ? 'active-icon' : 'icon'));
          }
        });
      }
    }, {
      key: "_loadPageElement",
      value: function _loadPageElement(parent, page) {
        var _this5 = this;

        this._hasLoaded = true;
        return new Promise(function (resolve) {
          _this5._pageLoader.load({
            parent: parent,
            page: page
          }, function (pageElement) {
            parent.replaceChild(pageElement, parent.children[_this5.index]); // Ensure position

            _this5._loadedPage = pageElement;
            resolve(pageElement);
          });
        });
      }
    }, {
      key: "pageElement",
      get: function get() {
        // It has been loaded by ons-tab
        if (this._loadedPage) {
          return this._loadedPage;
        } // Manually attached to DOM, 1 per tab


        var tabbar = this._tabbar;

        if (tabbar.pages.length === tabbar.tabs.length) {
          return tabbar.pages[this.index];
        } // Loaded in another way


        return null;
      }
      /**
       * @return {Boolean}
       */

    }, {
      key: "isActive",
      value: function isActive() {
        return this.classList.contains('active');
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener('click', this._onClick, false);

        if (this._loadedPage) {
          this._hasLoaded = false;
          this.loaded = null;
        }

        this._disconnectOnClick();
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this6 = this;

        this.addEventListener('click', this._onClick, false);

        if (!util$4.isAttached(this) || this.loaded) {
          return; // ons-tabbar compilation may trigger this
        }

        var deferred = util$4.defer();
        this.loaded = deferred.promise;
        contentReady(this, function () {
          var index = _this6.index;
          var tabbar = _this6._tabbar;

          if (!tabbar) {
            util$4.throw('Tab elements must be children of Tabbar');
          }

          if (tabbar.hasAttribute('modifier')) {
            util$4.addModifier(_this6, tabbar.getAttribute('modifier'));
          }

          if (!_this6._hasLoaded) {
            if (_this6.hasAttribute('active')) {
              _this6.setActive(true);

              tabbar.activeIndex = index;
            }

            if (index === tabbar.tabs.length - 1) {
              tabbar._onRefresh();

              setImmediate(function () {
                return tabbar._onRefresh();
              });
            }

            TabbarElement.rewritables.ready(tabbar, function () {
              var pageTarget = _this6.page || _this6.getAttribute('page');

              if (!_this6.pageElement && pageTarget) {
                var parentTarget = tabbar._targetElement;
                var dummyPage = util$4.create('div', {
                  height: '100%',
                  width: '100%',
                  visibility: 'hidden'
                });
                parentTarget.insertBefore(dummyPage, parentTarget.children[index]); // Ensure position

                var load = function load() {
                  return _this6._loadPageElement(parentTarget, pageTarget).then(deferred.resolve);
                };

                return _this6.isActive() ? load() : tabbar._loadInactive.promise.then(load);
              }

              return deferred.resolve(_this6.pageElement);
            });
          }
        });

        this._connectOnClick();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, last, current) {
        var _this7 = this;

        switch (name) {
          case 'class':
            util$4.restoreClass(this, defaultClassName$1, scheme$1);
            break;

          case 'modifier':
            contentReady(this, function () {
              return ModifierUtil.onModifierChanged(last, current, _this7, scheme$1);
            });
            break;

          case 'ripple':
            contentReady(this, function () {
              return _this7._updateRipple();
            });
            break;

          case 'icon':
          case 'label':
          case 'badge':
            contentReady(this, function () {
              return _this7._updateButtonContent();
            });
            break;

          case 'page':
            this.page = current || '';
            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['modifier', 'ripple', 'icon', 'label', 'page', 'badge', 'class'];
      }
    }]);

    return TabElement;
  }(BaseElement);
  onsElements.Tab = TabElement;
  customElements.define('ons-tab', TabElement);

  var ToastAnimator = /*#__PURE__*/function (_BaseAnimator) {
    _inherits(ToastAnimator, _BaseAnimator);

    var _super = _createSuper(ToastAnimator);

    /**
     * @param {Object} options
     * @param {String} options.timing
     * @param {Number} options.duration
     * @param {Number} options.delay
     */
    function ToastAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'linear' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.2 : _ref$duration;

      _classCallCheck(this, ToastAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {HTMLElement} modal
     * @param {Function} callback
     */


    _createClass(ToastAnimator, [{
      key: "show",
      value: function show(modal, callback) {
        callback();
      }
      /**
       * @param {HTMLElement} modal
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(modal, callback) {
        callback();
      }
    }]);

    return ToastAnimator;
  }(BaseAnimator);

  /**
   * iOS style animator for dialog.
   */

  var FadeToastAnimator = /*#__PURE__*/function (_ToastAnimator) {
    _inherits(FadeToastAnimator, _ToastAnimator);

    var _super = _createSuper(FadeToastAnimator);

    function FadeToastAnimator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'linear' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.3 : _ref$duration;

      _classCallCheck(this, FadeToastAnimator);

      return _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
    }
    /**
     * @param {HTMLElement} toast
     * @param {Function} callback
     */


    _createClass(FadeToastAnimator, [{
      key: "show",
      value: function show(toast, callback) {
        callback = callback ? callback : function () {};
        Animit(toast, this.def).default({
          opacity: 0
        }, {
          opacity: 1
        }).queue(function (done) {
          callback();
          done();
        }).play();
      }
      /**
       * @param {HTMLElement} toast
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(toast, callback) {
        callback = callback ? callback : function () {};
        Animit(toast, this.def).default({
          opacity: 1
        }, {
          opacity: 0
        }).queue(function (done) {
          callback();
          done();
        }).play();
      }
    }]);

    return FadeToastAnimator;
  }(ToastAnimator);

  /**
   * Ascend Toast Animator.
   */

  var AscendToastAnimator = /*#__PURE__*/function (_ToastAnimator) {
    _inherits(AscendToastAnimator, _ToastAnimator);

    var _super = _createSuper(AscendToastAnimator);

    function AscendToastAnimator() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'ease' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.25 : _ref$duration;

      _classCallCheck(this, AscendToastAnimator);

      _this = _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this.messageDelay = _this.duration * 0.4 + _this.delay; // Delay message opacity change

      if (platform.isAndroid()) {
        _this.ascension = 48; // Toasts are always 1 line
      } else {
        if (iPhoneXPatch.isIPhoneXPortraitPatchActive()) {
          _this.ascension = 98; // 64 + 34
        } else if (iPhoneXPatch.isIPhoneXLandscapePatchActive()) {
          _this.ascension = 85; // 64 + 21
        } else {
          _this.ascension = 64;
        }
      }

      return _this;
    }
    /**
     * @param {HTMLElement} toast
     * @param {Function} callback
     */


    _createClass(AscendToastAnimator, [{
      key: "show",
      value: function show(toast, callback) {
        toast = toast._toast;
        util$4.globals.fabOffset = this.ascension;
        Animit.runAll(Animit(toast, this.def).default({
          transform: "translate3d(0, ".concat(this.ascension, "px, 0)")
        }, {
          transform: 'translate3d(0, 0, 0)'
        }).queue(function (done) {
          callback && callback();
          done();
        }), Animit(this._getFabs()).wait(this.delay).queue({
          transform: "translate3d(0, -".concat(this.ascension, "px, 0) scale(1)")
        }, this.def), Animit(util$4.arrayFrom(toast.children), this.def).default({
          opacity: 0
        }, {
          opacity: 1
        }));
      }
      /**
       * @param {HTMLElement} toast
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(toast, callback) {
        toast = toast._toast;
        util$4.globals.fabOffset = 0;
        Animit.runAll(Animit(toast, this.def).default({
          transform: 'translate3d(0, 0, 0)'
        }, {
          transform: "translate3d(0, ".concat(this.ascension, "px, 0)")
        }).queue(function (done) {
          callback && callback();
          done();
        }), Animit(this._getFabs(), this.def).wait(this.delay).queue({
          transform: "translate3d(0, 0, 0) scale(1)"
        }, this.def), Animit(util$4.arrayFrom(toast.children), this.def).default({
          opacity: 1
        }, {
          opacity: 0
        }));
      }
    }, {
      key: "_getFabs",
      value: function _getFabs() {
        return util$4.arrayFrom(document.querySelectorAll('ons-fab[position~=bottom], ons-speed-dial[position~=bottom]')).filter(function (fab) {
          return fab.visible;
        });
      }
    }]);

    return AscendToastAnimator;
  }(ToastAnimator);

  /**
   * Lift-fade Toast Animator
   */

  var LiftToastAnimator = /*#__PURE__*/function (_ToastAnimator) {
    _inherits(LiftToastAnimator, _ToastAnimator);

    var _super = _createSuper(LiftToastAnimator);

    function LiftToastAnimator() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'ease' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.35 : _ref$duration;

      _classCallCheck(this, LiftToastAnimator);

      _this = _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });
      _this.bodyHeight = document.body.clientHeight; // avoid Forced Synchronous Layout

      if (iPhoneXPatch.isIPhoneXPortraitPatchActive()) {
        _this.liftAmount = 'calc(100% + 34px)';
      } else if (iPhoneXPatch.isIPhoneXLandscapePatchActive()) {
        _this.liftAmount = 'calc(100% + 21px)';
      } else {
        _this.liftAmount = '100%';
      }

      return _this;
    }
    /**
     * @param {HTMLElement} toast
     * @param {Function} callback
     */


    _createClass(LiftToastAnimator, [{
      key: "show",
      value: function show(toast, callback) {
        toast = toast._toast;
        Animit.runAll(Animit(toast, this.def).default({
          transform: "translate3d(0, ".concat(this.liftAmount, ", 0)"),
          opacity: 0
        }, {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }).queue(function (done) {
          callback && callback();
          done();
        }));
      }
      /**
       * @param {HTMLElement} toast
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(toast, callback) {
        toast = toast._toast;
        Animit.runAll(Animit(toast, this.def).default({
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }, {
          transform: "translate3d(0, ".concat(this.liftAmount, ", 0)"),
          opacity: 0
        }).queue(function (done) {
          callback && callback();
          done();
        }));
      }
    }, {
      key: "_updatePosition",
      value: function _updatePosition(toast) {
        if (parseInt(toast.style.top, 10) === 0) {
          toast.style.top = toast.style.bottom = '';
        }
      }
    }]);

    return LiftToastAnimator;
  }(ToastAnimator);

  /**
   * Fall-fade Toast Animator
   */

  var FallToastAnimator = /*#__PURE__*/function (_ToastAnimator) {
    _inherits(FallToastAnimator, _ToastAnimator);

    var _super = _createSuper(FallToastAnimator);

    function FallToastAnimator() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$timing = _ref.timing,
          timing = _ref$timing === void 0 ? 'ease' : _ref$timing,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.35 : _ref$duration;

      _classCallCheck(this, FallToastAnimator);

      _this = _super.call(this, {
        timing: timing,
        delay: delay,
        duration: duration
      });

      if (iPhoneXPatch.isIPhoneXPortraitPatchActive()) {
        _this.fallAmount = 'calc(-100% - 44px)';
      } else {
        _this.fallAmount = '-100%';
      }

      return _this;
    }
    /**
     * @param {HTMLElement} toast
     * @param {Function} callback
     */


    _createClass(FallToastAnimator, [{
      key: "show",
      value: function show(toast, callback) {
        toast = toast._toast;

        this._updatePosition(toast);

        Animit.runAll(Animit(toast, this.def).default({
          transform: "translate3d(0, ".concat(this.fallAmount, ", 0)"),
          opacity: 0
        }, {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }).queue(function (done) {
          callback && callback();
          done();
        }));
      }
      /**
       * @param {HTMLElement} toast
       * @param {Function} callback
       */

    }, {
      key: "hide",
      value: function hide(toast, callback) {
        var _this2 = this;

        toast = toast._toast;

        this._updatePosition(toast);

        Animit.runAll(Animit(toast, this.def).default({
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }, {
          transform: "translate3d(0, ".concat(this.fallAmount, ", 0)"),
          opacity: 0
        }).queue(function (done) {
          _this2._updatePosition(toast, true);

          callback && callback();
          done();
        }));
      }
    }, {
      key: "_updatePosition",
      value: function _updatePosition(toast, cleanUp) {
        var correctTop;

        if (iPhoneXPatch.isIPhoneXPortraitPatchActive()) {
          correctTop = '44px';
        } else {
          correctTop = '0';
        }

        if (toast.style.top !== correctTop) {
          toast.style.top = correctTop;
          toast.style.bottom = 'initial';
        }
      }
    }]);

    return FallToastAnimator;
  }(ToastAnimator);

  var scheme = {
    '.toast': 'toast--*',
    '.toast__message': 'toast--*__message',
    '.toast__button': 'toast--*__button'
  };
  var defaultClassName = 'toast';
  var _animatorDict = {
    'default': platform.isAndroid() ? AscendToastAnimator : LiftToastAnimator,
    'fade': FadeToastAnimator,
    'ascend': AscendToastAnimator,
    'lift': LiftToastAnimator,
    'fall': FallToastAnimator,
    'none': ToastAnimator
  };
  /**
   * @element ons-toast
   * @category dialog
   * @description
   *   [en]
   *     The Toast or Snackbar component is useful for displaying dismissable information or simple actions at (normally) the bottom of the page.
   *
   *     This component does not block user input, allowing the app to continue its flow. For simple toasts, consider `ons.notification.toast` instead.
   *   [/en]
   *   [ja][/ja]
   * @tutorial vanilla/Reference/toast
   * @seealso ons-alert-dialog
   *   [en]The `<ons-alert-dialog>` component is preferred for displaying undismissable information.[/en]
   *   [ja][/ja]
   */

  var ToastElement = /*#__PURE__*/function (_BaseDialogElement) {
    _inherits(ToastElement, _BaseDialogElement);

    var _super = _createSuper(ToastElement);

    /**
     * @event preshow
     * @description
     *   [en]Fired just before the toast is displayed.[/en]
     *   [ja]ダイアログが表示される直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.toast
     *   [en]Toast object.[/en]
     *   [ja]ダイアログのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute to stop the toast from showing.[/en]
     *   [ja]この関数を実行すると、ダイアログの表示を止めます。[/ja]
     */

    /**
     * @event postshow
     * @description
     *   [en]Fired just after the toast is displayed.[/en]
     *   [ja]ダイアログが表示された直後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.toast
     *   [en]Toast object.[/en]
     *   [ja]ダイアログのオブジェクト。[/ja]
     */

    /**
     * @event prehide
     * @description
     *   [en]Fired just before the toast is hidden.[/en]
     *   [ja]ダイアログが隠れる直前に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.toast
     *   [en]Toast object.[/en]
     *   [ja]ダイアログのオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Execute to stop the toast from hiding.[/en]
     *   [ja]この関数を実行すると、ダイアログが閉じようとするのを止めます。[/ja]
     */

    /**
     * @event posthide
     * @description
     * [en]Fired just after the toast is hidden.[/en]
     * [ja]ダイアログが隠れた後に発火します。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.toast
     *   [en]Toast object.[/en]
     *   [ja]ダイアログのオブジェクト。[/ja]
     */

    /**
     * @attribute animation
     * @type {String}
     * @default default
     * @description
     *  [en]The animation used when showing and hiding the toast. Can be either `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. <code>{duration: 0.2, delay: 1, timing: 'ease-in'}</code>[/ja]
     */

    /**
     * @property animationOptions
     * @type {Object}
     * @description
     *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
     */

    /**
     * @attribute visible
     * @type {Boolean}
     * @description
     *   [en]Whether the toast is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */
    function ToastElement() {
      var _this;

      _classCallCheck(this, ToastElement);

      _this = _super.call(this);
      _this._defaultDBB = null;
      contentReady(_assertThisInitialized(_this), function () {
        return _this._compile();
      });
      return _this;
    }

    _createClass(ToastElement, [{
      key: "_scheme",
      get: function get() {
        return scheme;
      }
    }, {
      key: "_toast",
      get: function get() {
        return util$4.findChild(this, ".".concat(defaultClassName));
      }
    }, {
      key: "_updateAnimatorFactory",
      value: function _updateAnimatorFactory() {
        // Reset position style
        this._toast && (this._toast.style.top = this._toast.style.bottom = '');
        return new AnimatorFactory({
          animators: _animatorDict,
          baseClass: ToastAnimator,
          baseClassName: 'ToastAnimator',
          defaultAnimation: this.getAttribute('animation')
        });
      }
      /**
       * @property onDeviceBackButton
       * @type {Object}
       * @description
       *   [en]Back-button handler.[/en]
       *   [ja]バックボタンハンドラ。[/ja]
       */

    }, {
      key: "_compile",
      value: function _compile() {
        autoStyle.prepare(this);
        this.style.display = 'none';
        this.style.zIndex = 10000; // Lower than dialogs

        var messageClassName = 'toast__message';
        var buttonClassName = 'toast__button';
        var toast = util$4.findChild(this, ".".concat(defaultClassName));

        if (!toast) {
          toast = document.createElement('div');
          toast.classList.add(defaultClassName);

          while (this.childNodes[0]) {
            toast.appendChild(this.childNodes[0]);
          }
        }

        var button = util$4.findChild(toast, ".".concat(buttonClassName));

        if (!button) {
          button = util$4.findChild(toast, function (e) {
            return util$4.match(e, '.button') || util$4.match(e, 'button');
          });

          if (button) {
            button.classList.remove('button');
            button.classList.add(buttonClassName);
            toast.appendChild(button);
          }
        }

        if (!util$4.findChild(toast, ".".concat(messageClassName))) {
          var message = util$4.findChild(toast, '.message');

          if (!message) {
            message = document.createElement('div');

            for (var i = toast.childNodes.length - 1; i >= 0; i--) {
              if (toast.childNodes[i] !== button) {
                message.insertBefore(toast.childNodes[i], message.firstChild);
              }
            }
          }

          message.classList.add(messageClassName);
          toast.insertBefore(message, toast.firstChild);
        }

        if (toast.parentNode !== this) {
          this.appendChild(toast);
        }

        ModifierUtil.initModifier(this, this._scheme);
      }
      /**
       * @property visible
       * @type {Boolean}
       * @description
       *   [en]Whether the element is visible or not.[/en]
       *   [ja]要素が見える場合に`true`。[/ja]
       */

      /**
       * @method show
       * @signature show([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
       *   [ja][/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @description
       *   [en]Show the element.[/en]
       *   [ja][/ja]
       * @return {Promise}
       *   [en]Resolves to the displayed element[/en]
       *   [ja][/ja]
       */

      /**
       * @method toggle
       * @signature toggle([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
       *   [ja][/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @description
       *   [en]Toggle toast visibility.[/en]
       *   [ja][/ja]
       */

      /**
       * @method hide
       * @signature hide([options])
       * @param {Object} [options]
       *   [en]Parameter object.[/en]
       *   [ja]オプションを指定するオブジェクト。[/ja]
       * @param {String} [options.animation]
       *   [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
       *   [ja][/ja]
       * @param {String} [options.animationOptions]
       *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
       *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
       * @description
       *   [en]Hide toast.[/en]
       *   [ja][/ja]
       * @return {Promise}
       *   [en]Resolves to the hidden element[/en]
       *   [ja][/ja]
       */

      /**
       * @param {String} name
       * @param {Function} Animator
       */

    }], [{
      key: "registerAnimator",
      value: function registerAnimator(name, Animator) {
        if (!(Animator.prototype instanceof ToastAnimator)) {
          util$4.throw('"Animator" param must inherit OnsToastElement.ToastAnimator');
        }

        _animatorDict[name] = Animator;
      }
    }, {
      key: "animators",
      get: function get() {
        return _animatorDict;
      }
    }, {
      key: "ToastAnimator",
      get: function get() {
        return ToastAnimator;
      }
    }]);

    return ToastElement;
  }(BaseDialogElement);
  onsElements.Toast = ToastElement;
  customElements.define('ons-toast', ToastElement);

  /**
   * @element ons-toolbar-button
   * @category page
   * @modifier material
   *   [en]Material Design toolbar button.[/en]
   *   [ja][/ja]
   * @modifier outline
   *   [en]A button with an outline.[/en]
   *   [ja]アウトラインをもったボタンを表示します。[/ja]
   * @description
   *   [en]Button component for ons-toolbar and ons-bottom-toolbar.[/en]
   *   [ja]ons-toolbarあるいはons-bottom-toolbarに設置できるボタン用コンポーネントです。[/ja]
   * @codepen aHmGL
   * @tutorial vanilla/Reference/page
   * @guide compilation.html#toolbar-compilation
   *   [en]Adding a toolbar[/en]
   *   [ja]ツールバーの追加[/ja]
   * @seealso ons-toolbar
   *   [en]The `<ons-toolbar>` component displays a navigation bar at the top of a page.[/en]
   *   [ja]ons-toolbarコンポーネント[/ja]
   * @seealso ons-back-button
   *   [en]The `<ons-back-button>` displays a back button in the navigation bar.[/en]
   *   [ja]ons-back-buttonコンポーネント[/ja]
   * @example
   * <ons-toolbar>
   *   <div class="left">
   *     <ons-toolbar-button>
   *       Button
   *     </ons-toolbar-button>
   *   </div>
   *   <div class="center">
   *     Title
   *   </div>
   *   <div class="right">
   *     <ons-toolbar-button>
   *       <ons-icon icon="ion-navicon" size="28px"></ons-icon>
   *     </ons-toolbar-button>
   *   </div>
   * </ons-toolbar>
   */

  var ToolbarButtonElement = /*#__PURE__*/function (_BaseButtonElement) {
    _inherits(ToolbarButtonElement, _BaseButtonElement);

    var _super = _createSuper(ToolbarButtonElement);

    function ToolbarButtonElement() {
      _classCallCheck(this, ToolbarButtonElement);

      return _super.apply(this, arguments);
    }

    _createClass(ToolbarButtonElement, [{
      key: "_scheme",
      get:
      /**
       * @attribute modifier
       * @type {String}
       * @description
       *   [en]The appearance of the button.[/en]
       *   [ja]ボタンの表現を指定します。[/ja]
       */

      /**
       * @attribute icon
       * @type {String}
       * @description
       *  [en]Creates an `ons-icon` component with this string.[/en]
       *  [ja]`ons-icon`コンポーネントを悪性します。[/ja]
       */

      /**
       * @attribute disabled
       * @description
       *   [en]Specify if button should be disabled.[/en]
       *   [ja]ボタンを無効化する場合は指定してください。[/ja]
       */

      /**
       * @property disabled
       * @type {Boolean}
       * @description
       *   [en]Whether the element is disabled or not.[/en]
       *   [ja]無効化されている場合に`true`。[/ja]
       */
      function get() {
        return {
          '': 'toolbar-button--*'
        };
      }
    }, {
      key: "_defaultClassName",
      get: function get() {
        return 'toolbar-button';
      }
    }, {
      key: "_rippleOpt",
      get: function get() {
        return [this, undefined, {
          center: '',
          'size': 'contain',
          'background': 'transparent'
        }];
      }
    }]);

    return ToolbarButtonElement;
  }(BaseButtonElement);
  onsElements.ToolbarButton = ToolbarButtonElement;
  customElements.define('ons-toolbar-button', ToolbarButtonElement);

  setup$1(ons); // Setup initial listeners

  window._superSecretOns = ons;

  return ons;

}));