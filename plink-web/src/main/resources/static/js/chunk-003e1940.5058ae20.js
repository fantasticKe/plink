(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-003e1940"],{"15e2":function(e,t,n){"use strict";t.__esModule=!0;var i=n("8448"),r=s(i),o=n("4416"),a=s(o);function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l="top-level",f="block-level",c=function(){function e(t){u(this,e),this.indent=t||"  ",this.indentTypes=[]}return e.prototype.getIndent=function(){return(0,r["default"])(this.indent,this.indentTypes.length)},e.prototype.increaseToplevel=function(){this.indentTypes.push(l)},e.prototype.increaseBlockLevel=function(){this.indentTypes.push(f)},e.prototype.decreaseTopLevel=function(){(0,a["default"])(this.indentTypes)===l&&this.indentTypes.pop()},e.prototype.decreaseBlockLevel=function(){while(this.indentTypes.length>0){var e=this.indentTypes.pop();if(e!==l)break}},e}();t["default"]=c,e.exports=t["default"]},"1d3a":function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=function(){function e(t){i(this,e),this.params=t,this.index=0}return e.prototype.get=function(e){var t=e.key,n=e.value;return this.params?t?this.params[t]:this.params[this.index++]:n},e}();t["default"]=r,e.exports=t["default"]},2532:function(e,t,n){"use strict";var i=n("23e7"),r=n("5a34"),o=n("1d80"),a=n("ab13");i({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(o(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"2cf8":function(e,t,n){var i=n("47f5");function r(e,t){var n=e.length;while(n--&&i(t,e[n],0)>-1);return n}e.exports=r},"498a":function(e,t,n){"use strict";var i=n("23e7"),r=n("58a8").trim,o=n("c8d2");i({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("1d80"),r=n("5899"),o="["+r+"]",a=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),u=function(e){return function(t){var n=String(i(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5a34":function(e,t,n){var i=n("44e7");e.exports=function(e){if(i(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6b51":function(e,t,n){"use strict";t.__esModule=!0,t["default"]={WHITESPACE:"whitespace",WORD:"word",STRING:"string",RESERVED:"reserved",RESERVED_TOPLEVEL:"reserved-toplevel",RESERVED_NEWLINE:"reserved-newline",OPERATOR:"operator",OPEN_PAREN:"open-paren",CLOSE_PAREN:"close-paren",LINE_COMMENT:"line-comment",BLOCK_COMMENT:"block-comment",NUMBER:"number",PLACEHOLDER:"placeholder"},e.exports=t["default"]},"6f6b":function(e,t,n){"use strict";n("4160"),n("caad"),n("ac1f"),n("2532"),n("5319"),n("498a"),n("159b"),t.__esModule=!0;var i=n("f942"),r=d(i),o=n("6b51"),a=d(o),s=n("15e2"),u=d(s),l=n("d09a"),f=d(l),c=n("1d3a"),p=d(c);function d(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var v=function(){function e(t,n){h(this,e),this.cfg=t||{},this.indentation=new u["default"](this.cfg.indent),this.inlineBlock=new f["default"],this.params=new p["default"](this.cfg.params),this.tokenizer=n,this.previousReservedWord={},this.tokens=[],this.index=0}return e.prototype.format=function(e){this.tokens=this.tokenizer.tokenize(e);var t=this.getFormattedQueryFromTokens();return t.trim()},e.prototype.getFormattedQueryFromTokens=function(){var e=this,t="";return this.tokens.forEach((function(n,i){e.index=i,n.type===a["default"].WHITESPACE||(n.type===a["default"].LINE_COMMENT?t=e.formatLineComment(n,t):n.type===a["default"].BLOCK_COMMENT?t=e.formatBlockComment(n,t):n.type===a["default"].RESERVED_TOPLEVEL?(t=e.formatToplevelReservedWord(n,t),e.previousReservedWord=n):n.type===a["default"].RESERVED_NEWLINE?(t=e.formatNewlineReservedWord(n,t),e.previousReservedWord=n):n.type===a["default"].RESERVED?(t=e.formatWithSpaces(n,t),e.previousReservedWord=n):t=n.type===a["default"].OPEN_PAREN?e.formatOpeningParentheses(n,t):n.type===a["default"].CLOSE_PAREN?e.formatClosingParentheses(n,t):n.type===a["default"].PLACEHOLDER?e.formatPlaceholder(n,t):","===n.value?e.formatComma(n,t):":"===n.value?e.formatWithSpaceAfter(n,t):"."===n.value?e.formatWithoutSpaces(n,t):";"===n.value?e.addNewline(e.formatWithoutSpaces(n,t))+"\n":e.formatWithSpaces(n,t))})),t},e.prototype.formatLineComment=function(e,t){return this.previousNonWhitespaceToken()&&","===this.previousNonWhitespaceToken().value&&(t=t.replace(/\s+$/,"")+this.indentation.getIndent()),this.addNewline(t+e.value)},e.prototype.formatBlockComment=function(e,t){return this.addNewline(this.addNewline(t)+this.indentComment(e.value))},e.prototype.indentComment=function(e){return e.replace(/\n/g,"\n"+this.indentation.getIndent())},e.prototype.formatToplevelReservedWord=function(e,t){return this.indentation.decreaseTopLevel(),t=this.addNewline(t),this.indentation.increaseToplevel(),t+=this.equalizeWhitespace(e.value),"from"!==e.value&&"FROM"!==e.value?t=this.addNewline(t):t+=" ",t},e.prototype.formatNewlineReservedWord=function(e,t){return this.addNewline(t)+this.equalizeWhitespace(e.value)+" "},e.prototype.equalizeWhitespace=function(e){return e.replace(/\s+/g," ")},e.prototype.formatOpeningParentheses=function(e,t){var n=[a["default"].WHITESPACE,a["default"].OPEN_PAREN,a["default"].LINE_COMMENT];return n.includes(this.previousToken().type)||(t=(0,r["default"])(t)),t+=e.value,this.inlineBlock.beginIfPossible(this.tokens,this.index),this.inlineBlock.isActive()||(this.indentation.increaseBlockLevel(),t=this.addNewline(t)),t},e.prototype.formatClosingParentheses=function(e,t){return this.inlineBlock.isActive()?(this.inlineBlock.end(),this.formatWithSpaceAfter(e,t)):(this.indentation.decreaseBlockLevel(),this.formatWithSpaces(e,this.addNewline(t)))},e.prototype.formatPlaceholder=function(e,t){return t+this.params.get(e)+" "},e.prototype.formatComma=function(e,t){return t=this.trimTrailingWhitespace(t)+e.value+" ",this.inlineBlock.isActive()||/^LIMIT$/i.test(this.previousReservedWord.value)?t:this.addNewline(t)},e.prototype.formatWithSpaceAfter=function(e,t){return this.trimTrailingWhitespace(t)+e.value+" "},e.prototype.formatWithoutSpaces=function(e,t){return this.trimTrailingWhitespace(t)+e.value},e.prototype.formatWithSpaces=function(e,t){return t+e.value+" "},e.prototype.addNewline=function(e){return(0,r["default"])(e)+"\n"+this.indentation.getIndent()},e.prototype.trimTrailingWhitespace=function(e){return this.previousNonWhitespaceToken().type===a["default"].LINE_COMMENT?(0,r["default"])(e)+"\n":(0,r["default"])(e)},e.prototype.previousNonWhitespaceToken=function(){var e=1;while(this.previousToken(e).type===a["default"].WHITESPACE)e++;return this.previousToken(e)},e.prototype.previousToken=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.tokens[this.index-e]||{}},e}();t["default"]=v,e.exports=t["default"]},8448:function(e,t,n){var i=n("b0a8"),r=n("9aff"),o=n("4b17"),a=n("76dd");function s(e,t,n){return t=(n?r(e,t,n):void 0===t)?1:o(t),i(a(e),t)}e.exports=s},ab13:function(e,t,n){var i=n("b622"),r=i("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(i){}}return!1}},c8d2:function(e,t,n){var i=n("d039"),r=n("5899"),o="​᠎";e.exports=function(e){return i((function(){return!!r[e]()||o[e]()!=o||r[e].name!==e}))}},caad:function(e,t,n){"use strict";var i=n("23e7"),r=n("4d64").includes,o=n("44d2"),a=n("ae40"),s=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!s},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d09a:function(e,t,n){"use strict";t.__esModule=!0;var i=n("6b51"),r=o(i);function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=50,u=function(){function e(){a(this,e),this.level=0}return e.prototype.beginIfPossible=function(e,t){0===this.level&&this.isInlineBlock(e,t)?this.level=1:this.level>0?this.level++:this.level=0},e.prototype.end=function(){this.level--},e.prototype.isActive=function(){return this.level>0},e.prototype.isInlineBlock=function(e,t){for(var n=0,i=0,o=t;o<e.length;o++){var a=e[o];if(n+=a.value.length,n>s)return!1;if(a.type===r["default"].OPEN_PAREN)i++;else if(a.type===r["default"].CLOSE_PAREN&&(i--,0===i))return!0;if(this.isForbiddenToken(a))return!1}return!1},e.prototype.isForbiddenToken=function(e){var t=e.type,n=e.value;return t===r["default"].RESERVED_TOPLEVEL||t===r["default"].RESERVED_NEWLINE||t===r["default"].COMMENT||t===r["default"].BLOCK_COMMENT||";"===n},e}();t["default"]=u,e.exports=t["default"]},f942:function(e,t,n){var i=n("ce86"),r=n("c32f"),o=n("2cf8"),a=n("126d"),s=n("76dd"),u=/\s+$/;function l(e,t,n){if(e=s(e),e&&(n||void 0===t))return e.replace(u,"");if(!e||!(t=i(t)))return e;var l=a(e),f=o(l,a(t))+1;return r(l,0,f).join("")}e.exports=l}}]);
//# sourceMappingURL=chunk-003e1940.5058ae20.js.map