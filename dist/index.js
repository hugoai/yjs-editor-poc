

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('@emotion/styled'));
var React = require('react');
var React__default = _interopDefault(React);
var slate = require('slate');
var slateHistory = require('slate-history');
var slateReact = require('slate-react');
var slateYjs = require('slate-yjs');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var RoomWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e8e8e8;\n"], ["\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e8e8e8;\n"])));
var H4 = styled.h4(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  padding-right: 10px;\n"], ["\n  margin: 0;\n  padding-right: 10px;\n"])));
var Input = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 6px 14px;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  min-width: 240px;\n  outline: none;\n  border: 2px solid palevioletred;\n  margin-right: auto;\n"], ["\n  padding: 6px 14px;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  min-width: 240px;\n  outline: none;\n  border: 2px solid palevioletred;\n  margin-right: auto;\n"])));
var Button = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 6px 14px;\n  display: block;\n  outline: none;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  color: palevioletred;\n  white-space: nowrap;\n  border: 2px solid palevioletred;\n  & + button {\n    margin-left: 10px;\n  }\n"], ["\n  padding: 6px 14px;\n  display: block;\n  outline: none;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  color: palevioletred;\n  white-space: nowrap;\n  border: 2px solid palevioletred;\n  & + button {\n    margin-left: 10px;\n  }\n"])));
var ActiveButton = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0;\n  display: block;\n  outline: none;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  color: mediumvioletred;\n  white-space: nowrap;\n  border: none;\n  & + button {\n    margin-left: 10px;\n  }\n"], ["\n  padding: 0;\n  display: block;\n  outline: none;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  color: mediumvioletred;\n  white-space: nowrap;\n  border: none;\n  & + button {\n    margin-left: 10px;\n  }\n"])));
var InactiveButton = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 0;\n  display: block;\n  outline: none;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  color: lightpink;\n  white-space: nowrap;\n  border: none;\n  & + button {\n    margin-left: 10px;\n  }\n"], ["\n  padding: 0;\n  display: block;\n  outline: none;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  color: lightpink;\n  white-space: nowrap;\n  border: none;\n  & + button {\n    margin-left: 10px;\n  }\n"])));
var Icon = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
var Grid = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: grid;\n  grid-gap: 1vw;\n  grid-template-columns: 1fr 1fr;\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"], ["\n  display: grid;\n  grid-gap: 1vw;\n  grid-template-columns: 1fr 1fr;\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"])));
var Title = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  @media (max-width: 767px) {\n    flex-wrap: wrap;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  @media (max-width: 767px) {\n    flex-wrap: wrap;\n  }\n"])));
var Instance = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background: ", ";\n  padding: 20px 20px 30px;\n"], ["\n  background: ",
    ";\n  padding: 20px 20px 30px;\n"])), function (props) {
    return props.online ? 'rgba(128, 128, 128, 0.1)' : 'rgba(247, 0, 0, 0.2)';
});
var ClientFrame = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.2);\n  padding: 10px;\n  min-height: 70px;\n  margin-left: -10px;\n  margin-right: -10px;\n  background: white;\n  blockquote {\n    border-left: 2px solid #ddd;\n    margin-left: 0;\n    margin-right: 0;\n    padding-left: 10px;\n    color: #aaa;\n    font-style: italic;\n  }\n  a {\n    color: purple;\n    text-decoration: none;\n  }\n  a:visited {\n    color: darkmagenta;\n  }\n"], ["\n  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.2);\n  padding: 10px;\n  min-height: 70px;\n  margin-left: -10px;\n  margin-right: -10px;\n  background: white;\n  blockquote {\n    border-left: 2px solid #ddd;\n    margin-left: 0;\n    margin-right: 0;\n    padding-left: 10px;\n    color: #aaa;\n    font-style: italic;\n  }\n  a {\n    color: purple;\n    text-decoration: none;\n  }\n  a:visited {\n    color: darkmagenta;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;

var LIST_TYPES = ['numbered-list', 'bulleted-list'];
var toggleBlock = function (editor, format) {
    var isActive = isBlockActive(editor, format);
    var isList = LIST_TYPES.includes(format);
    slate.Transforms.unwrapNodes(editor, {
        match: function (n) { return LIST_TYPES.includes(n.type); },
        split: true,
    });
    slate.Transforms.setNodes(editor, {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    });
    if (!isActive && isList) {
        var block = { type: format, children: [] };
        slate.Transforms.wrapNodes(editor, block);
    }
};
var isBlockActive = function (editor, format) {
    var match = slate.Editor.nodes(editor, {
        match: function (n) { return n.type === format; },
    })[0];
    return !!match;
};

var toggleMark = function (editor, format) {
    var isActive = isMarkActive(editor, format);
    if (isActive) {
        slate.Editor.removeMark(editor, format);
    }
    else {
        slate.Editor.addMark(editor, format, true);
    }
};
var isMarkActive = function (editor, format) {
    var marks = slate.Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

var renderElement = function (props) { return React__default.createElement(Element, __assign({}, props)); };
var EditorFrame = function (_a) {
    var editor = _a.editor, value = _a.value, onChange = _a.onChange;
    var renderLeaf = React.useCallback(function (props) { return React__default.createElement(Leaf, __assign({}, props)); }, []);
    return (React__default.createElement(ClientFrame, null,
        React__default.createElement(slateReact.Slate, { editor: editor, value: value, onChange: onChange },
            React__default.createElement("div", { style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    zIndex: 1,
                } },
                React__default.createElement(MarkButton, { format: "bold", icon: "format_bold" }),
                React__default.createElement(MarkButton, { format: "italic", icon: "format_italic" }),
                React__default.createElement(MarkButton, { format: "underline", icon: "format_underlined" }),
                React__default.createElement(MarkButton, { format: "code", icon: "code" }),
                React__default.createElement(BlockButton, { format: "heading-one", icon: "looks_one" }),
                React__default.createElement(BlockButton, { format: "heading-two", icon: "looks_two" }),
                React__default.createElement(BlockButton, { format: "block-quote", icon: "format_quote" }),
                React__default.createElement(BlockButton, { format: "numbered-list", icon: "format_list_numbered" }),
                React__default.createElement(BlockButton, { format: "bulleted-list", icon: "format_list_bulleted" })),
            React__default.createElement(slateReact.Editable, { renderElement: renderElement, renderLeaf: renderLeaf }))));
};
var Element = function (_a) {
    var attributes = _a.attributes, children = _a.children, element = _a.element;
    switch (element.type) {
        case 'link':
            return (React__default.createElement("a", __assign({}, attributes, { href: element.href }), children));
        case 'block-quote':
            return React__default.createElement("blockquote", __assign({}, attributes), children);
        case 'bulleted-list':
            return React__default.createElement("ul", __assign({}, attributes), children);
        case 'heading-one':
            return React__default.createElement("h1", __assign({}, attributes), children);
        case 'heading-two':
            return React__default.createElement("h2", __assign({}, attributes), children);
        case 'list-item':
            return React__default.createElement("li", __assign({}, attributes), children);
        case 'numbered-list':
            return React__default.createElement("ol", __assign({}, attributes), children);
        default:
            return React__default.createElement("p", __assign({}, attributes), children);
    }
};
var Leaf = function (_a) {
    var attributes = _a.attributes, children = _a.children, leaf = _a.leaf;
    if (leaf.bold) {
        children = React__default.createElement("strong", null, children);
    }
    if (leaf.code) {
        children = React__default.createElement("code", null, children);
    }
    if (leaf.italic) {
        children = React__default.createElement("em", null, children);
    }
    if (leaf.underline) {
        children = React__default.createElement("u", null, children);
    }
    return (React__default.createElement("span", __assign({}, attributes, { style: {
            position: 'relative',
            backgroundColor: leaf.alphaColor,
        } }), children));
};
var BlockButton = function (_a) {
    var format = _a.format, icon = _a.icon;
    var editor = slateReact.useSlate();
    var ButtonComp = isBlockActive(editor, format) ? ActiveButton : InactiveButton;
    return (React__default.createElement(ButtonComp, { onMouseDown: function (event) {
            event.preventDefault();
            toggleBlock(editor, format);
        } },
        React__default.createElement(Icon, { className: "material-icons" }, icon)));
};
var MarkButton = function (_a) {
    var format = _a.format, icon = _a.icon;
    var editor = slateReact.useSlate();
    var ButtonComp = isMarkActive(editor, format) ? ActiveButton : InactiveButton;
    return (React__default.createElement(ButtonComp, { onMouseDown: function (event) {
            event.preventDefault();
            toggleMark(editor, format);
        } },
        React__default.createElement(Icon, { className: "material-icons" }, icon)));
};

/* eslint-disable */
var Client = function (_a) {
    var id = _a.id, name = _a.name, slug = _a.slug, websocketEndpoint = _a.websocketEndpoint;
    var _b = React.useState([]), value = _b[0], setValue = _b[1];
    var _c = React.useState(false), isOnline = _c[0], setOnlineState = _c[1];
    var editor = React.useMemo(function () {
        var slateEditor = slateYjs.withYjs(slateReact.withReact(slateHistory.withHistory(slate.createEditor())));
        var endpoint = websocketEndpoint || 'ws://localhost:9000';
        var options = {
            endpoint: endpoint,
            roomName: slug,
            onConnect: function () { return setOnlineState(true); },
            onDisconnect: function () { return setOnlineState(false); },
        };
        return slateYjs.withWebsocket(slateEditor, options);
    }, []);
    React.useEffect(function () {
        editor.connect();
        return editor.destroy;
    }, []);
    var toggleOnline = function () {
        var connect = editor.connect, disconnect = editor.disconnect;
        isOnline ? disconnect() : connect();
    };
    return (React__default.createElement(Instance, { online: isOnline },
        React__default.createElement(Title, null,
            React__default.createElement(Head, null,
                "Editor: ",
                name),
            React__default.createElement("div", { style: { display: 'flex', marginTop: 10, marginBottom: 10 } },
                React__default.createElement(Button, { type: "button", onClick: toggleOnline },
                    "Go ",
                    isOnline ? 'offline' : 'online'))),
        React__default.createElement(EditorFrame, { editor: editor, value: value, onChange: function (value) { return setValue(value); } })));
};
var Head = styled(H4)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  margin-right: auto;\n"], ["\n  margin-right: auto;\n"])));
var templateObject_1$1;

exports.YjsEditor = Client;
//# sourceMappingURL=index.js.map
