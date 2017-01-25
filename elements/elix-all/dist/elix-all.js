/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _globals = __webpack_require__(2);
	
	var simpleElement = _interopRequireWildcard(_globals);
	
	var _globals2 = __webpack_require__(6);
	
	var componentMixins = _interopRequireWildcard(_globals2);
	
	var _globals3 = __webpack_require__(1);
	
	var webComponents = _interopRequireWildcard(_globals3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _SimpleElement = __webpack_require__(3);
	
	var _SimpleElement2 = _interopRequireDefault(_SimpleElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.Elix = window.Elix || {}; /*
	                                  * This file is transpiled to create an ES5-compatible distribution in which
	                                  * the package's main feature(s) are available via the window.Elix global.
	                                  * If you're already using ES6 yourself, ignore this file, and instead import
	                                  * the source file(s) you want from the src folder.
	                                  */
	
	window.Elix.SimpleElement = _SimpleElement2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SimpleAttributeMixin = __webpack_require__(4);
	
	var _SimpleAttributeMixin2 = _interopRequireDefault(_SimpleAttributeMixin);
	
	var _SimpleTemplateMixin2 = __webpack_require__(5);
	
	var _SimpleTemplateMixin3 = _interopRequireDefault(_SimpleTemplateMixin2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A simple element used to demonstrate the build and documentation process.
	 *
	 * [Live demo](http://elix.org/elix/elements/elix-simple-element/)
	 *
	 * @module SimpleElement
	 * @mixes SimpleAttributeMixin
	 * @mixes SimpleTemplateMixin
	 */
	var SimpleElement = function (_SimpleTemplateMixin) {
	  _inherits(SimpleElement, _SimpleTemplateMixin);
	
	  function SimpleElement() {
	    _classCallCheck(this, SimpleElement);
	
	    return _possibleConstructorReturn(this, (SimpleElement.__proto__ || Object.getPrototypeOf(SimpleElement)).apply(this, arguments));
	  }
	
	  _createClass(SimpleElement, [{
	    key: 'greeting',
	
	
	    /**
	     * Specifies the greeting.
	     *
	     * @type {string}
	     * @default greeting
	     */
	    get: function get() {
	      return this.shadowRoot.getElementById('greeting').textContent;
	    },
	    set: function set(value) {
	      this.shadowRoot.getElementById('greeting').textContent = value;
	    }
	  }, {
	    key: 'template',
	    get: function get() {
	      return '<span id="greeting">Hello</span>, <slot></slot>.';
	    }
	  }], [{
	    key: 'observedAttributes',
	    get: function get() {
	      return ['greeting'];
	    }
	  }]);
	
	  return SimpleElement;
	}((0, _SimpleTemplateMixin3.default)((0, _SimpleAttributeMixin2.default)(HTMLElement)));
	
	customElements.define('elix-simple-element', SimpleElement);
	exports.default = SimpleElement;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	exports.default = SimpleAttributeMixin;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Mixin which adds simplistic mapping of attributes to properties.
	 *
	 * @module SimpleAttributeMixin
	 * @param base {Class} the base class to extend
	 * @returns {Class} the extended class
	 */
	function SimpleAttributeMixin(base) {
	
	  /**
	   * The class prototype added by the mixin.
	   */
	  var SimpleAttribute = function (_base) {
	    _inherits(SimpleAttribute, _base);
	
	    function SimpleAttribute() {
	      _classCallCheck(this, SimpleAttribute);
	
	      return _possibleConstructorReturn(this, (SimpleAttribute.__proto__ || Object.getPrototypeOf(SimpleAttribute)).apply(this, arguments));
	    }
	
	    _createClass(SimpleAttribute, [{
	      key: "attributeChangedCallback",
	
	
	      /*
	       * Handle a change to the attribute with the given name.
	       */
	      value: function attributeChangedCallback(attributeName, oldValue, newValue) {
	        if (_get(SimpleAttribute.prototype.__proto__ || Object.getPrototypeOf(SimpleAttribute.prototype), "attributeChangedCallback", this)) {
	          _get(SimpleAttribute.prototype.__proto__ || Object.getPrototypeOf(SimpleAttribute.prototype), "attributeChangedCallback", this).call(this);
	        }
	        // If the attribute name corresponds to a property name, set the property.
	        // Ignore standard HTMLElement properties handled by the DOM.
	        if (attributeName in this && !(attributeName in HTMLElement.prototype)) {
	          this[attributeName] = newValue;
	        }
	      }
	
	      /**
	       * Set/unset the attribute with the indicated name.
	       *
	       * This method exists primarily to handle the case where an element wants to
	       * set a default property value that should be reflected as an attribute. An
	       * important limitation of custom element consturctors is that they cannot
	       * set attributes. A call to `reflectAttribute` during the constructor will
	       * be deferred until the element is connected to the document.
	       *
	       * @param {string} attribute - The name of the *attribute* (not property) to set.
	       * @param {object} value - The value to set. If null, the attribute will be removed.
	       */
	
	    }, {
	      key: "reflectAttribute",
	      value: function reflectAttribute(attribute, value) {
	        // For documentation purposes only
	      }
	    }]);
	
	    return SimpleAttribute;
	  }(base);
	
	  return SimpleAttribute;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = SimpleTemplateMixin;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Mixin which adds a simplistic means of cloning a string template into a new
	 * shadow root.
	 *
	 * @module SimpleTemplateMixin
	 * @param base {Class} the base class to extend
	 * @returns {Class} the extended class
	 */
	function SimpleTemplateMixin(base) {
	
	  /**
	   * The class prototype added by the mixin.
	   */
	  var SimpleTemplate = function (_base) {
	    _inherits(SimpleTemplate, _base);
	
	    function SimpleTemplate() {
	      _classCallCheck(this, SimpleTemplate);
	
	      var _this = _possibleConstructorReturn(this, (SimpleTemplate.__proto__ || Object.getPrototypeOf(SimpleTemplate)).call(this));
	
	      var template = _this.template;
	      if (template) {
	        var root = _this.attachShadow({ mode: 'open' });
	        root.innerHTML = template;
	      }
	      return _this;
	    }
	
	    /**
	     * Set/unset the class with the indicated name.
	     *
	     * This method exists primarily to handle the case where an element wants to
	     * set a default property value that should be reflected as as class. An
	     * important limitation of custom element consturctors is that they cannot
	     * set attributes, including the `class` attribute. A call to
	     * `reflectClass` during the constructor will be deferred until the element
	     * is connected to the document.
	     *
	     * @param {string} className - The name of the class to set.
	     * @param {object} value - True to set the class, false to remove it.
	     */
	
	
	    _createClass(SimpleTemplate, [{
	      key: 'reflectClass',
	      value: function reflectClass(className, value) {
	        // For documentation purposes only
	      }
	    }]);
	
	    return SimpleTemplate;
	  }(base);
	
	  return SimpleTemplate;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _microtask = __webpack_require__(7);
	
	var _microtask2 = _interopRequireDefault(_microtask);
	
	var _SimpleAttributeMixin = __webpack_require__(4);
	
	var _SimpleAttributeMixin2 = _interopRequireDefault(_SimpleAttributeMixin);
	
	var _SimpleTemplateMixin = __webpack_require__(5);
	
	var _SimpleTemplateMixin2 = _interopRequireDefault(_SimpleTemplateMixin);
	
	var _SingleSelectionMixin = __webpack_require__(8);
	
	var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);
	
	var _symbols = __webpack_require__(11);
	
	var _symbols2 = _interopRequireDefault(_symbols);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.Elix = window.Elix || {}; /*
	                                  * This file is transpiled to create an ES5-compatible distribution in which
	                                  * the package's main feature(s) are available via the window.Basic global.
	                                  * If you're already using ES6 yourself, ignore this file, and instead import
	                                  * the source file(s) you want from the src folder.
	                                  */
	
	window.Elix.microtask = _microtask2.default;
	window.Elix.SimpleAttributeMixin = _SimpleAttributeMixin2.default;
	window.Elix.SimpleTemplateMixin = _SimpleTemplateMixin2.default;
	window.Elix.SingleSelectionMixin = _SingleSelectionMixin2.default;
	window.Elix.symbols = _symbols2.default;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = microtask;
	/*
	 * Microtask helper for IE 11.
	 *
	 * Executing a function as a microtask is trivial in browsers that support
	 * promises, whose then() clauses use microtask timing. IE 11 doesn't support
	 * promises, but does support MutationObservers, which are also executed as
	 * microtasks. So this helper uses an MutationObserver to achieve microtask
	 * timing.
	 *
	 * See https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
	 *
	 * Inspired by Polymer's async() function.
	 */
	
	// The queue of pending callbacks to be executed as microtasks.
	var callbacks = [];
	
	// Create an element that we will modify to force observable mutations.
	var element = document.createTextNode('');
	
	// A monotonically-increasing value.
	var counter = 0;
	
	/**
	 * Add a callback to the microtask queue.
	 *
	 * This uses a MutationObserver so that it works on IE 11.
	 *
	 * NOTE: IE 11 may actually use timeout timing with MutationObservers. This
	 * needs more investigation.
	 *
	 * @function microtask
	 * @param {function} callback
	 */
	function microtask(callback) {
	  callbacks.push(callback);
	  // Force a mutation.
	  element.textContent = ++counter;
	}
	
	// Execute any pending callbacks.
	function executeCallbacks() {
	  while (callbacks.length > 0) {
	    var callback = callbacks.shift();
	    callback();
	  }
	}
	
	// Create the observer.
	var observer = new MutationObserver(executeCallbacks);
	observer.observe(element, {
	  characterData: true
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	exports.default = SingleSelectionMixin;
	
	var _createSymbol = __webpack_require__(9);
	
	var _createSymbol2 = _interopRequireDefault(_createSymbol);
	
	var _CustomEvent = __webpack_require__(10);
	
	var _CustomEvent2 = _interopRequireDefault(_CustomEvent);
	
	var _symbols = __webpack_require__(11);
	
	var _symbols2 = _interopRequireDefault(_symbols);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Symbols for private data members on an element.
	var canSelectNextSymbol = (0, _createSymbol2.default)('canSelectNext');
	var canSelectPreviousSymbol = (0, _createSymbol2.default)('canSelectPrevious');
	var selectionRequiredSymbol = (0, _createSymbol2.default)('selectionRequired');
	var selectionWrapsSymbol = (0, _createSymbol2.default)('selectionWraps');
	
	// We want to expose both selectedIndex and selectedItem as independent
	// properties but keep them in sync. This allows a component user to reference
	// the selection by whatever means is most natural for their situation.
	//
	// To efficiently keep these properties in sync, we track "external" and
	// "internal" references for each property:
	//
	// The external index or item is the one we report to the outside world when
	// asked for selection.  When handling a change to index or item, we update the
	// external reference as soon as possible, so that if anyone immediately asks
	// for the current selection, they will receive a stable answer.
	//
	// The internal index or item tracks whichever index or item last received the
	// full set of processing. Processing includes raising a change event for the
	// new value. Once we've begun that processing, we store the new value as the
	// internal value to indicate we've handled it.
	//
	var externalSelectedIndexSymbol = (0, _createSymbol2.default)('externalSelectedIndex');
	var externalSelectedItemSymbol = (0, _createSymbol2.default)('externalSelectedItem');
	var internalSelectedIndexSymbol = (0, _createSymbol2.default)('internalSelectedIndex');
	var internalSelectedItemSymbol = (0, _createSymbol2.default)('internalSelectedItem');
	
	/**
	 * Mixin which adds single-selection semantics for items in a list.
	 *
	 * This mixin expects a component to provide an `items` Array or NodeList of
	 * all elements in the list.
	 *
	 * This mixin tracks a single selected item in the list, and provides means to
	 * get and set that state by item position (`selectedIndex`) or item identity
	 * (`selectedItem`). The selection can be moved in the list via the methods
	 * `selectFirst`, `selectLast`, `selectNext`, and `selectPrevious`.
	 *
	 * This mixin does not produce any user-visible effects to represent
	 * selection.
	 *
	 * @module SingleSelectionMixin
	 * @param base {Class} the base class to extend
	 * @returns {Class} the extended class
	 */
	function SingleSelectionMixin(base) {
	
	  /**
	   * The class prototype added by the mixin.
	   */
	  var SingleSelection = function (_base) {
	    _inherits(SingleSelection, _base);
	
	    function SingleSelection() {
	      _classCallCheck(this, SingleSelection);
	
	      // Set defaults.
	      var _this = _possibleConstructorReturn(this, (SingleSelection.__proto__ || Object.getPrototypeOf(SingleSelection)).call(this));
	
	      if (typeof _this.selectionRequired === 'undefined') {
	        _this.selectionRequired = _this[_symbols2.default.defaults].selectionRequired;
	      }
	      if (typeof _this.selectionWraps === 'undefined') {
	        _this.selectionWraps = _this[_symbols2.default.defaults].selectionWraps;
	      }
	      return _this;
	    }
	
	    /**
	     * True if the selection can be moved to the next item, false if not (the
	     * selected item is the last item in the list).
	     *
	     * @type {boolean}
	     */
	
	
	    _createClass(SingleSelection, [{
	      key: _symbols2.default.itemAdded,
	
	
	      /**
	       * Handle a new item being added to the list.
	       *
	       * The default implementation of this method simply sets the item's
	       * selection state to false.
	       *
	       * @param {HTMLElement} item - the item being added
	       */
	      value: function value(item) {
	        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this)) {
	          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this).call(this, item);
	        }
	        this[_symbols2.default.itemSelected](item, item === this.selectedItem);
	      }
	    }, {
	      key: _symbols2.default.itemsChanged,
	      value: function value() {
	        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemsChanged, this)) {
	          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemsChanged, this).call(this);
	        }
	
	        // In case selected item changed position or was removed.
	        trackSelectedItem(this);
	
	        // In case the change in items affected which navigations are possible.
	        updatePossibleNavigations(this);
	      }
	
	      /**
	       * Apply the indicate selection state to the item.
	       *
	       * The default implementation of this method does nothing. User-visible
	       * effects will typically be handled by other mixins.
	       *
	       * @param {HTMLElement} item - the item being selected/deselected
	       * @param {boolean} selected - true if the item is selected, false if not
	       */
	
	    }, {
	      key: _symbols2.default.itemSelected,
	      value: function value(item, selected) {
	        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemSelected, this)) {
	          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
	        }
	      }
	
	      /**
	       * The index of the item which is currently selected.
	       *
	       * The setter expects an integer or a string representing an integer.
	       *
	       * A `selectedIndex` of -1 indicates there is no selection. Setting this
	       * property to -1 will remove any existing selection.
	       *
	       * @type {number}
	       */
	
	    }, {
	      key: 'selectFirst',
	
	
	      /**
	       * Select the first item in the list.
	       *
	       * @returns {Boolean} True if the selection changed, false if not.
	       */
	      value: function selectFirst() {
	        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this)) {
	          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this).call(this);
	        }
	        return selectIndex(this, 0);
	      }
	
	      /**
	       * True if the list should always have a selection (if it has items).
	       *
	       * @type {boolean}
	       * @default false
	       */
	
	    }, {
	      key: 'selectLast',
	
	
	      /**
	       * Select the last item in the list.
	       *
	       * @returns {Boolean} True if the selection changed, false if not.
	       */
	      value: function selectLast() {
	        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this)) {
	          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this).call(this);
	        }
	        return selectIndex(this, this.items.length - 1);
	      }
	
	      /**
	       * Select the next item in the list.
	       *
	       * If the list has no selection, the first item will be selected.
	       *
	       * @returns {Boolean} True if the selection changed, false if not.
	       */
	
	    }, {
	      key: 'selectNext',
	      value: function selectNext() {
	        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this)) {
	          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this).call(this);
	        }
	        return selectIndex(this, this.selectedIndex + 1);
	      }
	
	      /**
	       * Select the previous item in the list.
	       *
	       * If the list has no selection, the last item will be selected.
	       *
	       * @returns {Boolean} True if the selection changed, false if not.
	       */
	
	    }, {
	      key: 'selectPrevious',
	      value: function selectPrevious() {
	        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this)) {
	          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this).call(this);
	        }
	        var newIndex = this.selectedIndex < 0 ? this.items.length - 1 : // No selection yet; select last item.
	        this.selectedIndex - 1;
	        return selectIndex(this, newIndex);
	      }
	
	      /**
	       * Fires when the canSelectNext property changes in response to internal
	       * component activity.
	       *
	       * @memberof SingleSelection
	       * @event can-select-next-changed
	       */
	
	      /**
	       * Fires when the canSelectPrevious property changes in response to internal
	       * component activity.
	       *
	       * @memberof SingleSelection
	       * @event can-select-previous-changed
	       */
	
	      /**
	       * Fires when the selectedIndex property changes in response to internal
	       * component activity.
	       *
	       * @memberof SingleSelection
	       * @event selected-index-changed
	       * @param {number} detail.selectedIndex The new selected index.
	       */
	
	      /**
	       * Fires when the selectedItem property changes in response to internal
	       * component activity.
	       *
	       * @memberof SingleSelection
	       * @event selected-item-changed
	       * @param {HTMLElement} detail.selectedItem The new selected item.
	       */
	
	    }, {
	      key: 'canSelectNext',
	      get: function get() {
	        return this[canSelectNextSymbol];
	      },
	      set: function set(canSelectNext) {
	        var changed = canSelectNext !== this[canSelectNextSymbol];
	        this[canSelectNextSymbol] = canSelectNext;
	        if ('canSelectNext' in base.prototype) {
	          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectNext', canSelectNext, this);
	        }
	        if (this[_symbols2.default.raiseChangeEvents] && changed) {
	          this.dispatchEvent(new _CustomEvent2.default('can-select-next-changed'));
	        }
	      }
	
	      /**
	       * True if the selection can be moved to the previous item, false if not
	       * (the selected item is the first one in the list).
	       *
	       * @type {boolean}
	       */
	
	    }, {
	      key: 'canSelectPrevious',
	      get: function get() {
	        return this[canSelectPreviousSymbol];
	      },
	      set: function set(canSelectPrevious) {
	        var changed = canSelectPrevious !== this[canSelectPreviousSymbol];
	        this[canSelectPreviousSymbol] = canSelectPrevious;
	        if ('canSelectPrevious' in base.prototype) {
	          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
	        }
	        if (this[_symbols2.default.raiseChangeEvents] && changed) {
	          this.dispatchEvent(new _CustomEvent2.default('can-select-previous-changed'));
	        }
	      }
	    }, {
	      key: _symbols2.default.defaults,
	      get: function get() {
	        var defaults = _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.defaults, this) || {};
	        defaults.selectionRequired = false;
	        defaults.selectionWraps = false;
	        return defaults;
	      }
	    }, {
	      key: 'selectedIndex',
	      get: function get() {
	        return this[externalSelectedIndexSymbol] != null ? this[externalSelectedIndexSymbol] : -1;
	      },
	      set: function set(index) {
	        // See notes at top about internal vs. external copies of this property.
	        var changed = index !== this[internalSelectedIndexSymbol];
	        var item = void 0;
	        var parsedIndex = parseInt(index);
	        if (parsedIndex !== this[externalSelectedIndexSymbol]) {
	          // Store the new index and the corresponding item.
	          var items = this.items;
	          var hasItems = items && items.length > 0;
	          if (!(hasItems && parsedIndex >= 0 && parsedIndex < items.length)) {
	            parsedIndex = -1; // No item at that index.
	          }
	          this[externalSelectedIndexSymbol] = parsedIndex;
	          item = hasItems && parsedIndex >= 0 ? items[parsedIndex] : null;
	          this[externalSelectedItemSymbol] = item;
	        } else {
	          item = this[externalSelectedItemSymbol];
	        }
	
	        // Now let super do any work.
	        if ('selectedIndex' in base.prototype) {
	          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedIndex', index, this);
	        }
	
	        if (changed) {
	          // The selected index changed.
	          this[internalSelectedIndexSymbol] = parsedIndex;
	
	          if (this[_symbols2.default.raiseChangeEvents]) {
	            var event = new _CustomEvent2.default('selected-index-changed', {
	              detail: {
	                selectedIndex: parsedIndex,
	                value: parsedIndex // for Polymer binding. TODO: Verify still necessary
	              }
	            });
	            this.dispatchEvent(event);
	          }
	        }
	
	        if (this[internalSelectedItemSymbol] !== item) {
	          // Update selectedItem property so it can have its own effects.
	          this.selectedItem = item;
	        }
	      }
	
	      /**
	       * The currently selected item, or null if there is no selection.
	       *
	       * Setting this property to null deselects any currently-selected item.
	       * Setting this property to an object that is not in the list has no effect.
	       *
	       * TODO: Even if selectionRequired, can still explicitly set selectedItem to null.
	       * TODO: If selectionRequired, leave selection alone?
	       *
	       * @type {object}
	       */
	
	    }, {
	      key: 'selectedItem',
	      get: function get() {
	        return this[externalSelectedItemSymbol] || null;
	      },
	      set: function set(item) {
	        // See notes at top about internal vs. external copies of this property.
	        var previousSelectedItem = this[internalSelectedItemSymbol];
	        var changed = item !== previousSelectedItem;
	        var index = void 0;
	        if (item !== this[externalSelectedItemSymbol]) {
	          // Store item and look up corresponding index.
	          var items = this.items;
	          var hasItems = items && items.length > 0;
	          index = hasItems ? Array.prototype.indexOf.call(items, item) : -1;
	          this[externalSelectedIndexSymbol] = index;
	          if (index < 0) {
	            item = null; // The indicated item isn't actually in `items`.
	          }
	          this[externalSelectedItemSymbol] = item;
	        } else {
	          index = this[externalSelectedIndexSymbol];
	        }
	
	        // Now let super do any work.
	        if ('selectedItem' in base.prototype) {
	          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedItem', item, this);
	        }
	
	        if (changed) {
	          // The selected item changed.
	          this[internalSelectedItemSymbol] = item;
	
	          if (previousSelectedItem) {
	            // Update selection state of old item.
	            this[_symbols2.default.itemSelected](previousSelectedItem, false);
	          }
	          if (item) {
	            // Update selection state to new item.
	            this[_symbols2.default.itemSelected](item, true);
	          }
	
	          updatePossibleNavigations(this);
	
	          if (this[_symbols2.default.raiseChangeEvents]) {
	            var event = new _CustomEvent2.default('selected-item-changed', {
	              detail: {
	                selectedItem: item,
	                value: item // for Polymer binding
	              }
	            });
	            this.dispatchEvent(event);
	          }
	        }
	
	        if (this[internalSelectedIndexSymbol] !== index) {
	          // Update selectedIndex property so it can have its own effects.
	          this.selectedIndex = index;
	        }
	      }
	    }, {
	      key: 'selectionRequired',
	      get: function get() {
	        return this[selectionRequiredSymbol];
	      },
	      set: function set(selectionRequired) {
	        this[selectionRequiredSymbol] = selectionRequired;
	        if ('selectionRequired' in base.prototype) {
	          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectionRequired', selectionRequired, this);
	        }
	        trackSelectedItem(this);
	      }
	
	      /**
	       * True if selection navigations wrap from last to first, and vice versa.
	       *
	       * @type {boolean}
	       * @default false
	       */
	
	    }, {
	      key: 'selectionWraps',
	      get: function get() {
	        return this[selectionWrapsSymbol];
	      },
	      set: function set(value) {
	        this[selectionWrapsSymbol] = String(value) === 'true';
	        if ('selectionWraps' in base.prototype) {
	          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectionWraps', value, this);
	        }
	        updatePossibleNavigations(this);
	      }
	    }]);
	
	    return SingleSelection;
	  }(base);
	
	  return SingleSelection;
	}
	
	// Ensure the given index is within bounds, and select it if it's not already
	// selected.
	function selectIndex(element, index) {
	
	  var items = element.items;
	  if (items == null) {
	    // Nothing to select.
	    return false;
	  }
	
	  var count = items.length;
	  var boundedIndex = element.selectionWraps ?
	  // JavaScript mod doesn't handle negative numbers the way we want to wrap.
	  // See http://stackoverflow.com/a/18618250/76472
	  (index % count + count) % count :
	
	  // Keep index within bounds of array.
	  Math.max(Math.min(index, count - 1), 0);
	
	  var previousIndex = element.selectedIndex;
	  if (previousIndex !== boundedIndex) {
	    element.selectedIndex = boundedIndex;
	    return true;
	  } else {
	    return false;
	  }
	}
	
	// Following a change in the set of items, or in the value of the
	// `selectionRequired` property, reacquire the selected item. If it's moved,
	// update `selectedIndex`. If it's been removed, and a selection is required,
	// try to select another item.
	function trackSelectedItem(element) {
	
	  var items = element.items;
	  var itemCount = items ? items.length : 0;
	
	  var previousSelectedItem = element.selectedItem;
	  if (!previousSelectedItem) {
	    // No item was previously selected.
	    if (element.selectionRequired) {
	      // Select the first item by default.
	      element.selectedIndex = 0;
	    }
	  } else if (itemCount === 0) {
	    // We've lost the selection, and there's nothing left to select.
	    element.selectedItem = null;
	  } else {
	    // Try to find the previously-selected item in the current set of items.
	    var indexInCurrentItems = Array.prototype.indexOf.call(items, previousSelectedItem);
	    var previousSelectedIndex = element.selectedIndex;
	    if (indexInCurrentItems < 0) {
	      // Previously-selected item was removed from the items.
	      // Select the item at the same index (if it exists) or as close as possible.
	      var newSelectedIndex = Math.min(previousSelectedIndex, itemCount - 1);
	      // Select by item, since index may be the same, and we want to raise the
	      // selected-item-changed event.
	      element.selectedItem = items[newSelectedIndex];
	    } else if (indexInCurrentItems !== previousSelectedIndex) {
	      // Previously-selected item still there, but changed position.
	      element.selectedIndex = indexInCurrentItems;
	    }
	  }
	}
	
	// Following a change in selection, report whether it's now possible to
	// go next/previous from the given index.
	function updatePossibleNavigations(element) {
	  var canSelectNext = void 0;
	  var canSelectPrevious = void 0;
	  var items = element.items;
	  if (items == null || items.length === 0) {
	    // No items to select.
	    canSelectNext = false;
	    canSelectPrevious = false;
	  } else if (element.selectionWraps) {
	    // Since there are items, can always go next/previous.
	    canSelectNext = true;
	    canSelectPrevious = true;
	  } else {
	    var index = element.selectedIndex;
	    if (index < 0 && items.length > 0) {
	      // Special case. If there are items but no selection, declare that it's
	      // always possible to go next/previous to create a selection.
	      canSelectNext = true;
	      canSelectPrevious = true;
	    } else {
	      // Normal case: we have an index in a list that has items.
	      canSelectPrevious = index > 0;
	      canSelectNext = index < items.length - 1;
	    }
	  }
	  if (element.canSelectNext !== canSelectNext) {
	    element.canSelectNext = canSelectNext;
	  }
	  if (element.canSelectPrevious !== canSelectPrevious) {
	    element.canSelectPrevious = canSelectPrevious;
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSymbol;
	/**
	 * Helper function to create a symbol that can be used for associating private
	 * data with an element.
	 *
	 * Mixins and component classes often want to associate private data with an
	 * element instance, but JavaScript does not have direct support for true
	 * private properties. One approach is to use the
	 * [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
	 * data type to set and retrieve data on an element.
	 *
	 * Unfortunately, the Symbol type is not available in Internet Explorer 11. The
	 * `createSymbol` helper function exists as a workaround for IE 11. Rather than
	 * returning a true Symbol, it simply returns an underscore-prefixed string.
	 *
	 * Usage:
	 *
	 *     const fooSymbol = createSymbol('foo');
	 *
	 *     class MyElement extends HTMLElement {
	 *       get foo() {
	 *         return this[fooSymbol];
	 *       }
	 *       set foo(value) {
	 *         this[fooSymbol] = value;
	 *       }
	 *     }
	 *
	 * In IE 11, this sample will "hide" data behind an instance property this._foo.
	 * The use of the underscore is meant to reduce (not eliminate) the potential
	 * for name conflicts, and discourage (not prevent) external access to this
	 * data. In modern browsers, the above code will eliminate the potential of
	 * naming conflicts, and better hide the data behind a real Symbol.
	 *
	 * @function createSymbol
	 * @param {string} description - A string to identify the symbol when debugging
	 */
	function createSymbol(description) {
	  return typeof Symbol === 'function' ? Symbol(description) : '_' + description;
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Polyfill for creating CustomEvents for IE 11.
	 * Inspired by https://github.com/krambuhl/custom-event-polyfill.
	 */
	
	var customEventConstructor = void 0;
	
	function customEventPolyfill(eventName, params) {
	  params = params || {
	    bubbles: false,
	    cancelable: false,
	    detail: undefined
	  };
	  var event = document.createEvent("CustomEvent");
	  event.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
	  var originalPreventDefault = event.preventDefault;
	  event.preventDefault = function () {
	    originalPreventDefault.call(this);
	    try {
	      Object.defineProperty(this, 'defaultPrevented', {
	        get: function get() {
	          return true;
	        }
	      });
	    } catch (e) {
	      this.defaultPrevented = true;
	    }
	  };
	
	  return event;
	}
	Object.setPrototypeOf(customEventPolyfill, window.Event.prototype);
	
	try {
	  new window.CustomEvent('test');
	  customEventConstructor = window.CustomEvent;
	} catch (e) {
	  customEventConstructor = customEventPolyfill;
	}
	
	exports.default = customEventConstructor;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createSymbol = __webpack_require__(9);
	
	var _createSymbol2 = _interopRequireDefault(_createSymbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A collection of Symbol objects for standard component properties and methods.
	 *
	 * These Symbol objects are used to allow mixins and a component to internally
	 * communicate, without exposing these properties and methods in the component's
	 * public API.
	 *
	 * To use these Symbol objects in your own component, include this module and
	 * then create a property or method whose key is the desired Symbol.
	 *
	 *     import 'SingleSelectionMixin' from 'elix-mixins/src/SingleSelectionMixin';
	 *     import 'symbols' from 'elix-mixins/src/symbols';
	 *
	 *     class MyElement extends SingleSelectionMixin(HTMLElement) {
	 *       [symbols.itemSelected](item, selected) {
	 *         // This will be invoked whenever an item is selected/deselected.
	 *       }
	 *     }
	 *
	 * @module symbols
	 */
	var symbols = {
	
	  /**
	   * Symbol for the `defaults` property.
	   *
	   * This property can be used to set or override defaults that will be applied
	   * to a new component instance. When implementing this property, take care to
	   * first acquire any defaults defined by the superclass. The standard idiom is
	   * as follows:
	   *
	   *     get [symbols.defaults]() {
	   *       const defaults = super[symbols.defaults] || {};
	   *       // Set or override default values here
	   *       defaults.customProperty = false;
	   *       return defaults;
	   *     }
	   *
	   * @var {object} defaults
	   */
	  defaults: (0, _createSymbol2.default)('defaults'),
	
	  /**
	   * Symbol for the `raiseChangeEvents` property.
	   *
	   * This property is used by mixins to determine whether they should raise
	   * property change events. The standard HTML pattern is to only raise such
	   * events in response to direct user interactions. This property can be used
	   * to manage events as follows.
	   *
	   * First, UI event listeners should set this property to `true` at the start
	   * of the event handler, then `false` at the end:
	   *
	   *     this.addEventListener('click', event => {
	   *       this[symbols.raiseChangeEvents] = true;
	   *       // Do work here, possibly setting properties, like:
	   *       this.foo = 'Hello';
	   *       this[symbols.raiseChangeEvents] = false;
	   *     });
	   *
	   * Elsewhere, property setters that raise change events should only do so it
	   * this property is `true`:
	   *
	   *     set foo(value) {
	   *       // Save foo value here, do any other work.
	   *       if (this[symbols.raiseChangeEvents]) {
	   *         const event = new CustomEvent('foo-changed');
	   *         this.dispatchEvent(event);
	   *       }
	   *     }
	   *
	   * In this way, programmatic attempts to set the `foo` property will not
	   * trigger the `foo-changed` event, but UI interactions that update that
	   * property will cause those events to be raised.
	   *
	   */
	  raiseChangeEvents: (0, _createSymbol2.default)('raiseChangeEvents'),
	
	  /**
	   * Symbol for the `itemAdded` method.
	   *
	   * This method is invoked when a new item is added to a list.
	   *
	   * @function itemAdded
	   * @param {HTMLElement} item - the item being selected/deselected
	   */
	  itemAdded: (0, _createSymbol2.default)('itemAdded'),
	
	  /**
	   * Symbol for the `itemsChanged` method.
	   *
	   * This method is invoked when the underlying contents change. It is also
	   * invoked on component initialization – since the items have "changed" from
	   * being nothing.
	   */
	  itemsChanged: (0, _createSymbol2.default)('itemsChanged'),
	
	  /**
	   * Symbol for the `itemSelected` method.
	   *
	   * This method is invoked when an item becomes selected or deselected.
	   *
	   * @function itemSelected
	   * @param {HTMLElement} item - the item being selected/deselected
	   * @param {boolean} selected - true if the item is selected, false if not
	   */
	  itemSelected: (0, _createSymbol2.default)('itemSelected')
	
	};
	
	exports.default = symbols;

/***/ }
/******/ ]);
//# sourceMappingURL=elix-all.js.map