import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

var __rest = this && this.__rest || function (s, e) {
	var t = {};

	for (var p in s) {
		if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	}

	if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
		if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};

import * as React from 'react';
import classNames from 'classnames';
import { ConfigContext } from 'antd/es/config-provider';
import devWarning from 'antd/es/_util/devWarning';
import { composeRef } from 'antd/es/_util/ref';

var InternalAvatar = function InternalAvatar(props, ref) {
	var _classNames, _classNames2;

	var _React$useState = React.useState(1),
		_React$useState2 = _slicedToArray(_React$useState, 2),
		scale = _React$useState2[0],
		setScale = _React$useState2[1];

	var _React$useState3 = React.useState(false),
		_React$useState4 = _slicedToArray(_React$useState3, 2),
		mounted = _React$useState4[0],
		setMounted = _React$useState4[1];

	var _React$useState5 = React.useState(true),
		_React$useState6 = _slicedToArray(_React$useState5, 2),
		isImgExist = _React$useState6[0],
		setIsImgExist = _React$useState6[1];

	var avatarNodeRef = React.useRef();
	var avatarChildrenRef = React.useRef();
	var avatarNodeMergeRef = composeRef(ref, avatarNodeRef);
	var lastChildrenWidth;
	var lastNodeWidth;

	var _React$useContext = React.useContext(ConfigContext),
		getPrefixCls = _React$useContext.getPrefixCls;

	var setScaleParam = function setScaleParam() {
		if (!avatarChildrenRef.current || !avatarNodeRef.current) {
			return;
		}

		var childrenWidth = avatarChildrenRef.current.offsetWidth; // offsetWidth avoid affecting be transform scale

		var nodeWidth = avatarNodeRef.current.offsetWidth;
		var _props$gap = props.gap,
			gap = _props$gap === void 0 ? 4 : _props$gap; // denominator is 0 is no meaning

		if (childrenWidth !== 0 && nodeWidth !== 0 && (lastChildrenWidth !== childrenWidth || lastNodeWidth !== nodeWidth)) {
			lastChildrenWidth = childrenWidth;
			lastNodeWidth = nodeWidth;
		}

		if (gap * 2 < nodeWidth) {
			setScale(nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1);
		}
	};

	React.useEffect(function () {
		setMounted(true);
	}, []);
	React.useEffect(function () {
		setIsImgExist(true);
		setScale(1);
	}, [props.src]);
	React.useEffect(function () {
		setScaleParam();
	}, [props.children, props.gap, props.size]);
	React.useEffect(function () {
		if (props.children) {
			setScaleParam();
		}
	}, [isImgExist]);

	var handleImgLoadError = function handleImgLoadError() {
		var onError = props.onError;
		var errorFlag = onError ? onError() : undefined;

		if (errorFlag !== false) {
			setIsImgExist(false);
		}
	};

	var customizePrefixCls = props.prefixCls,
		shape = props.shape,
		size = props.size,
		src = props.src,
		srcSet = props.srcSet,
		icon = props.icon,
		className = props.className,
		alt = props.alt,
		draggable = props.draggable,
		children = props.children,
		others = __rest(
			props,
			[
				"prefixCls",
				"shape",
				"size",
				"src",
				"srcSet",
				"icon",
				"className",
				"alt",
				"draggable",
				"children"
			]
		);

	devWarning(
		!(typeof icon === 'string' && icon.length > 2),
		'Avatar',
		"`icon` is using ReactNode instead of string naming in v4. Please check `".concat(
			icon,
			"` at https://ant.design/components/icon"
		)
	);
	var prefixCls = getPrefixCls('avatar', customizePrefixCls);

	var sizeCls = classNames(
		(
			_classNames = {},
			_defineProperty(
				_classNames,
				"".concat(prefixCls, "-lg"),
				size === 'large'
			),
			_defineProperty(
				_classNames,
				"".concat(prefixCls,
					"-sm"
				),
				size === 'small'),
			_classNames
		)
	);
	var classString = classNames(
		prefixCls,
		className,
		sizeCls,
		(
			_classNames2 = {},
			_defineProperty(
				_classNames2,
				"".concat(prefixCls, "-").concat(shape),
				shape
			),
			_defineProperty(
				_classNames2,
				"".concat(prefixCls, "-image"),
				src && isImgExist
			),
			_defineProperty(
				_classNames2,
				"".concat(prefixCls, "-icon"),
				icon
			),
			_classNames2
		)
	);

	console.log(prefixCls)
	console.log(className)
	console.log(sizeCls)

	console.log(classString)
	// debugger

	var sizeStyle = typeof size === 'number' ? {
		width: size,
		height: size,
		lineHeight: "".concat(size, "px"),
		fontSize: icon ? size / 2 : 18
	} : {};
	var childrenToRender;

	if (src && isImgExist) {
		childrenToRender = /*#__PURE__*/React.createElement("img", {
			src: src,
			draggable: draggable,
			srcSet: srcSet,
			onError: handleImgLoadError,
			alt: alt
		});
	} else if (icon) {
		childrenToRender = icon;
	} else if (mounted || scale !== 1) {
		var transformString = "scale(".concat(scale, ") translateX(-50%)");
		var childrenStyle = {
			msTransform: transformString,
			WebkitTransform: transformString,
			transform: transformString
		};
		var sizeChildrenStyle = typeof size === 'number' ? {
			lineHeight: "".concat(size, "px")
		} : {};
		childrenToRender = /*#__PURE__*/React.createElement("span", {
			className: "".concat(prefixCls, "-string"),
			ref: function ref(node) {
				avatarChildrenRef.current = node;
			},
			style: _extends(_extends({}, sizeChildrenStyle), childrenStyle)
		}, children);
	} else {
		childrenToRender = /*#__PURE__*/React.createElement("span", {
			className: "".concat(prefixCls, "-string"),
			style: {
				opacity: 0
			},
			ref: function ref(node) {
				avatarChildrenRef.current = node;
			}
		}, children);
	} // The event is triggered twice from bubbling up the DOM tree.
	// see https://codesandbox.io/s/kind-snow-9lidz


	delete others.onError;
	delete others.gap;

	// console.log(others)
	// console.log(sizeStyle)
	console.log(classString)
	// debugger
	console.log(avatarNodeMergeRef)

	console.log(childrenToRender)

	return /*#__PURE__*/React.createElement("span", _extends({}, others, {
		style: _extends(_extends({}, sizeStyle), others.style),
		className: classString,
		ref: avatarNodeMergeRef
	}), childrenToRender);
};

var Avatar = /*#__PURE__*/React.forwardRef(InternalAvatar);
Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
	shape: 'circle',
	size: 'default'
};
export default Avatar;