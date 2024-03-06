"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Togglable = (0, react_1.forwardRef)(function (_a, refs) {
    var className = _a.className, openButtonLabel = _a.openButtonLabel, closeButtonLabel = _a.closeButtonLabel, children = _a.children, isVisible = _a.isVisible;
    var _b = (0, react_1.useState)(isVisible || false), visible = _b[0], setVisible = _b[1];
    var componentOnHide = children[0], componentOnShow = children[1];
    var toggleVisibility = function () {
        setVisible(!visible);
    };
    (0, react_1.useImperativeHandle)(refs, function () {
        return {
            toggleVisibility: toggleVisibility,
        };
    });
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { className: "".concat(className, " togglable-container"), children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Collapse, { in: visible, children: (0, jsx_runtime_1.jsx)("div", { id: "example-collapse-text", children: visible ? componentOnShow : componentOnHide }) }), visible && closeButtonLabel !== "_nobutton" ?
                (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { onClick: toggleVisibility, "aria-controls": "example-collapse-text", "aria-expanded": visible, children: visible ? (closeButtonLabel ? closeButtonLabel : "Cancel") : openButtonLabel }) :
                (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), !visible && openButtonLabel !== "_nobutton" ?
                (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { onClick: toggleVisibility, "aria-controls": "example-collapse-text", "aria-expanded": visible, children: openButtonLabel })
                : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})] }));
});
Togglable.displayName = "Togglable";
exports.default = Togglable;
