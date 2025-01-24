/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const e="undefined"!=typeof window,t=(e,t=!1)=>t?Symbol.for(e):Symbol(e),n=(e,t,n)=>r({l:e,k:t,s:n}),r=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),o=e=>"number"==typeof e&&isFinite(e),s=e=>"[object Date]"===I(e),c=e=>"[object RegExp]"===I(e),a=e=>k(e)&&0===Object.keys(e).length,l=Object.assign;let i;const u=()=>i||(i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function f(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const _=Object.prototype.hasOwnProperty;function E(e,t){return _.call(e,t)}const d=Array.isArray,m=e=>"function"==typeof e,p=e=>"string"==typeof e,N=e=>"boolean"==typeof e,L=e=>null!==e&&"object"==typeof e,T=e=>L(e)&&m(e.then)&&m(e.catch),h=Object.prototype.toString,I=e=>h.call(e),k=e=>{if(!L(e))return!1;const t=Object.getPrototypeOf(e);return null===t||t.constructor===Object};function A(e){let t=e;return()=>++t}function O(e,t){"undefined"!=typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const C=e=>!L(e)||d(e);function y(e,t){if(C(e)||C(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:e,des:t}=n.pop();Object.keys(e).forEach((r=>{C(e[r])||C(t[r])?t[r]=e[r]:n.push({src:e[r],des:t[r]})}))}}
/*!
  * message-compiler v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function g(e,t,n){return{start:e,end:t}}const S=/\{([0-9a-zA-Z]+)\}/g;function b(e,...t){return 1===t.length&&U(t[0])&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(S,((e,n)=>t.hasOwnProperty(n)?t[n]:""))}const P=Object.assign,D=e=>"string"==typeof e,U=e=>null!==e&&"object"==typeof e;function R(e,t=""){return e.reduce(((e,n,r)=>0===r?e+n:e+t+n),"")}const v={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},M={[v.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};const x={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},w={[x.EXPECTED_TOKEN]:"Expected token: '{0}'",[x.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[x.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[x.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[x.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[x.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[x.EMPTY_PLACEHOLDER]:"Empty placeholder",[x.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[x.INVALID_LINKED_FORMAT]:"Invalid linked format",[x.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[x.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[x.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[x.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[x.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[x.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function F(e,t,n={}){const{domain:r,messages:o,args:s}=n,c=b((o||w)[e]||"",...s||[]),a=new SyntaxError(String(c));return a.code=e,t&&(a.location=t),a.domain=r,a}function Y(e){throw e}const X=" ",W="\r",$="\n",G=String.fromCharCode(8232),K=String.fromCharCode(8233);function H(e){const t=e;let n=0,r=1,o=1,s=0;const c=e=>t[e]===W&&t[e+1]===$,a=e=>t[e]===K,l=e=>t[e]===G,i=e=>c(e)||(e=>t[e]===$)(e)||a(e)||l(e),u=e=>c(e)||a(e)||l(e)?$:t[e];function f(){return s=0,i(n)&&(r++,o=0),c(n)&&n++,n++,o++,t[n]}return{index:()=>n,line:()=>r,column:()=>o,peekOffset:()=>s,charAt:u,currentChar:()=>u(n),currentPeek:()=>u(n+s),next:f,peek:function(){return c(n+s)&&s++,s++,t[n+s]},reset:function(){n=0,r=1,o=1,s=0},resetPeek:function(e=0){s=e},skipToPeek:function(){const e=n+s;for(;e!==n;)f();s=0}}}const V=void 0,j="'",B="tokenizer";function z(e,t={}){const n=!1!==t.location,r=H(e),o=()=>r.index(),s=()=>{return e=r.line(),t=r.column(),n=r.index(),{line:e,column:t,offset:n};var e,t,n},c=s(),a=o(),l={currentType:14,offset:a,startLoc:c,endLoc:c,lastType:14,lastOffset:a,lastStartLoc:c,lastEndLoc:c,braceNest:0,inLinked:!1,text:""},i=()=>l,{onError:u}=t;function f(e,t,r,...o){const s=i();if(t.column+=r,t.offset+=r,u){const r=F(e,n?g(s.startLoc,t):null,{domain:B,args:o});u(r)}}function _(e,t,r){e.endLoc=s(),e.currentType=t;const o={type:t};return n&&(o.loc=g(e.startLoc,e.endLoc)),null!=r&&(o.value=r),o}const E=e=>_(e,14);function d(e,t){return e.currentChar()===t?(e.next(),t):(f(x.EXPECTED_TOKEN,s(),0,t),"")}function m(e){let t="";for(;e.currentPeek()===X||e.currentPeek()===$;)t+=e.currentPeek(),e.peek();return t}function p(e){const t=m(e);return e.skipToPeek(),t}function N(e){if(e===V)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function L(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=function(e){if(e===V)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}("-"===e.currentPeek()?e.peek():e.currentPeek());return e.resetPeek(),r}function T(e){m(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function h(e,t=!0){const n=(t=!1,r="",o=!1)=>{const s=e.currentPeek();return"{"===s?"%"!==r&&t:"@"!==s&&s?"%"===s?(e.peek(),n(t,"%",!0)):"|"===s?!("%"!==r&&!o)||!(r===X||r===$):s===X?(e.peek(),n(!0,X,o)):s!==$||(e.peek(),n(!0,$,o)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function I(e,t){const n=e.currentChar();return n===V?V:t(n)?(e.next(),n):null}function k(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t}function A(e){return I(e,k)}function O(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t||45===t}function C(e){return I(e,O)}function y(e){const t=e.charCodeAt(0);return t>=48&&t<=57}function S(e){return I(e,y)}function b(e){const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}function P(e){return I(e,b)}function D(e){let t="",n="";for(;t=S(e);)n+=t;return n}function U(e){let t="";for(;;){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!h(e))break;t+=n,e.next()}else if(n===X||n===$)if(h(e))t+=n,e.next();else{if(T(e))break;t+=n,e.next()}else t+=n,e.next()}return t}function R(e){return e!==j&&e!==$}function v(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return M(e,t,4);case"U":return M(e,t,6);default:return f(x.UNKNOWN_ESCAPE_SEQUENCE,s(),0,t),""}}function M(e,t,n){d(e,t);let r="";for(let o=0;o<n;o++){const n=P(e);if(!n){f(x.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function w(e){return"{"!==e&&"}"!==e&&e!==X&&e!==$}function Y(e){p(e);const t=d(e,"|");return p(e),t}function W(e,t){let n=null;switch(e.currentChar()){case"{":return t.braceNest>=1&&f(x.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),e.next(),n=_(t,2,"{"),p(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&f(x.EMPTY_PLACEHOLDER,s(),0),e.next(),n=_(t,3,"}"),t.braceNest--,t.braceNest>0&&p(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&f(x.UNTERMINATED_CLOSING_BRACE,s(),0),n=G(e,t)||E(t),t.braceNest=0,n;default:{let r=!0,o=!0,c=!0;if(T(e))return t.braceNest>0&&f(x.UNTERMINATED_CLOSING_BRACE,s(),0),n=_(t,1,Y(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return f(x.UNTERMINATED_CLOSING_BRACE,s(),0),t.braceNest=0,K(e,t);if(r=function(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=N(e.currentPeek());return e.resetPeek(),r}(e,t))return n=_(t,5,function(e){p(e);let t="",n="";for(;t=C(e);)n+=t;return e.currentChar()===V&&f(x.UNTERMINATED_CLOSING_BRACE,s(),0),n}(e)),p(e),n;if(o=L(e,t))return n=_(t,6,function(e){p(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${D(e)}`):t+=D(e),e.currentChar()===V&&f(x.UNTERMINATED_CLOSING_BRACE,s(),0),t}(e)),p(e),n;if(c=function(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=e.currentPeek()===j;return e.resetPeek(),r}(e,t))return n=_(t,7,function(e){p(e),d(e,"'");let t="",n="";for(;t=I(e,R);)n+="\\"===t?v(e):t;const r=e.currentChar();return r===$||r===V?(f(x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),r===$&&(e.next(),d(e,"'")),n):(d(e,"'"),n)}(e)),p(e),n;if(!r&&!o&&!c)return n=_(t,13,function(e){p(e);let t="",n="";for(;t=I(e,w);)n+=t;return n}(e)),f(x.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,n.value),p(e),n;break}}return n}function G(e,t){const{currentType:n}=t;let r=null;const o=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||o!==$&&o!==X||f(x.INVALID_LINKED_FORMAT,s(),0),o){case"@":return e.next(),r=_(t,8,"@"),t.inLinked=!0,r;case".":return p(e),e.next(),_(t,9,".");case":":return p(e),e.next(),_(t,10,":");default:return T(e)?(r=_(t,1,Y(e)),t.braceNest=0,t.inLinked=!1,r):function(e,t){const{currentType:n}=t;if(8!==n)return!1;m(e);const r="."===e.currentPeek();return e.resetPeek(),r}(e,t)||function(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;m(e);const r=":"===e.currentPeek();return e.resetPeek(),r}(e,t)?(p(e),G(e,t)):function(e,t){const{currentType:n}=t;if(9!==n)return!1;m(e);const r=N(e.currentPeek());return e.resetPeek(),r}(e,t)?(p(e),_(t,12,function(e){let t="",n="";for(;t=A(e);)n+=t;return n}(e))):function(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?N(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||t===X||!t)&&(t===$?(e.peek(),r()):h(e,!1))},o=r();return e.resetPeek(),o}(e,t)?(p(e),"{"===o?W(e,t)||r:_(t,11,function(e){const t=n=>{const r=e.currentChar();return"{"!==r&&"%"!==r&&"@"!==r&&"|"!==r&&"("!==r&&")"!==r&&r?r===X?n:(n+=r,e.next(),t(n)):n};return t("")}(e))):(8===n&&f(x.INVALID_LINKED_FORMAT,s(),0),t.braceNest=0,t.inLinked=!1,K(e,t))}}function K(e,t){let n={type:14};if(t.braceNest>0)return W(e,t)||E(t);if(t.inLinked)return G(e,t)||E(t);switch(e.currentChar()){case"{":return W(e,t)||E(t);case"}":return f(x.UNBALANCED_CLOSING_BRACE,s(),0),e.next(),_(t,3,"}");case"@":return G(e,t)||E(t);default:{if(T(e))return n=_(t,1,Y(e)),t.braceNest=0,t.inLinked=!1,n;const{isModulo:r,hasSpace:o}=function(e){const t=m(e),n="%"===e.currentPeek()&&"{"===e.peek();return e.resetPeek(),{isModulo:n,hasSpace:t.length>0}}(e);if(r)return o?_(t,0,U(e)):_(t,4,function(e){p(e);const t=e.currentChar();return"%"!==t&&f(x.EXPECTED_TOKEN,s(),0,t),e.next(),"%"}(e));if(h(e))return _(t,0,U(e));break}}return n}return{nextToken:function(){const{currentType:e,offset:t,startLoc:n,endLoc:c}=l;return l.lastType=e,l.lastOffset=t,l.lastStartLoc=n,l.lastEndLoc=c,l.offset=o(),l.startLoc=s(),r.currentChar()===V?_(l,14):K(r,l)},currentOffset:o,currentPosition:s,context:i}}const J="parser",Q=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function q(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function Z(e={}){const t=!1!==e.location,{onError:n,onWarn:r}=e;function o(e,r,o,s,...c){const a=e.currentPosition();if(a.offset+=s,a.column+=s,n){const e=F(r,t?g(o,a):null,{domain:J,args:c});n(e)}}function s(e,n,o,s,...c){const a=e.currentPosition();if(a.offset+=s,a.column+=s,r){const e=t?g(o,a):null;r(function(e,t,...n){const r=b(M[e],...n||[]),o={message:String(r),code:e};return t&&(o.location=t),o}(n,e,c))}}function c(e,n,r){const o={type:e};return t&&(o.start=n,o.end=n,o.loc={start:r,end:r}),o}function a(e,n,r,o){t&&(e.end=n,e.loc&&(e.loc.end=r))}function l(e,t){const n=e.context(),r=c(3,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}function i(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,s=c(5,r,o);return s.index=parseInt(t,10),e.nextToken(),a(s,e.currentOffset(),e.currentPosition()),s}function u(e,t,n){const r=e.context(),{lastOffset:o,lastStartLoc:s}=r,l=c(4,o,s);return l.key=t,!0===n&&(l.modulo=!0),e.nextToken(),a(l,e.currentOffset(),e.currentPosition()),l}function f(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,s=c(9,r,o);return s.value=t.replace(Q,q),e.nextToken(),a(s,e.currentOffset(),e.currentPosition()),s}function _(e){const t=e.context(),n=c(6,t.offset,t.startLoc);let r=e.nextToken();if(9===r.type){const t=function(e){const t=e.nextToken(),n=e.context(),{lastOffset:r,lastStartLoc:s}=n,l=c(8,r,s);return 12!==t.type?(o(e,x.UNEXPECTED_EMPTY_LINKED_MODIFIER,n.lastStartLoc,0),l.value="",a(l,r,s),{nextConsumeToken:t,node:l}):(null==t.value&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,n.lastStartLoc,0,ee(t)),l.value=t.value||"",a(l,e.currentOffset(),e.currentPosition()),{node:l})}(e);n.modifier=t.node,r=t.nextConsumeToken||e.nextToken()}switch(10!==r.type&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ee(r)),r=e.nextToken(),2===r.type&&(r=e.nextToken()),r.type){case 11:null==r.value&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ee(r)),n.key=function(e,t){const n=e.context(),r=c(7,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}(e,r.value||"");break;case 5:null==r.value&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ee(r)),n.key=u(e,r.value||"");break;case 6:null==r.value&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ee(r)),n.key=i(e,r.value||"");break;case 7:null==r.value&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ee(r)),n.key=f(e,r.value||"");break;default:{o(e,x.UNEXPECTED_EMPTY_LINKED_KEY,t.lastStartLoc,0);const s=e.context(),l=c(7,s.offset,s.startLoc);return l.value="",a(l,s.offset,s.startLoc),n.key=l,a(n,s.offset,s.startLoc),{nextConsumeToken:r,node:n}}}return a(n,e.currentOffset(),e.currentPosition()),{node:n}}function E(e){const t=e.context(),n=c(2,1===t.currentType?e.currentOffset():t.offset,1===t.currentType?t.endLoc:t.startLoc);n.items=[];let r=null,E=null;do{const c=r||e.nextToken();switch(r=null,c.type){case 0:null==c.value&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ee(c)),n.items.push(l(e,c.value||""));break;case 6:null==c.value&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ee(c)),n.items.push(i(e,c.value||""));break;case 4:E=!0;break;case 5:null==c.value&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ee(c)),n.items.push(u(e,c.value||"",!!E)),E&&(s(e,v.USE_MODULO_SYNTAX,t.lastStartLoc,0,ee(c)),E=null);break;case 7:null==c.value&&o(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ee(c)),n.items.push(f(e,c.value||""));break;case 8:{const t=_(e);n.items.push(t.node),r=t.nextConsumeToken||null;break}}}while(14!==t.currentType&&1!==t.currentType);return a(n,1===t.currentType?t.lastOffset:e.currentOffset(),1===t.currentType?t.lastEndLoc:e.currentPosition()),n}function d(e){const t=e.context(),{offset:n,startLoc:r}=t,s=E(e);return 14===t.currentType?s:function(e,t,n,r){const s=e.context();let l=0===r.items.length;const i=c(1,t,n);i.cases=[],i.cases.push(r);do{const t=E(e);l||(l=0===t.items.length),i.cases.push(t)}while(14!==s.currentType);return l&&o(e,x.MUST_HAVE_MESSAGES_IN_PLURAL,n,0),a(i,e.currentOffset(),e.currentPosition()),i}(e,n,r,s)}return{parse:function(n){const r=z(n,P({},e)),s=r.context(),l=c(0,s.offset,s.startLoc);return t&&l.loc&&(l.loc.source=n),l.body=d(r),e.onCacheKey&&(l.cacheKey=e.onCacheKey(n)),14!==s.currentType&&o(r,x.UNEXPECTED_LEXICAL_ANALYSIS,s.lastStartLoc,0,n[s.offset]||""),a(l,r.currentOffset(),r.currentPosition()),l}}}function ee(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function te(e,t){for(let n=0;n<e.length;n++)ne(e[n],t)}function ne(e,t){switch(e.type){case 1:te(e.cases,t),t.helper("plural");break;case 2:te(e.items,t);break;case 6:ne(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named")}}function re(e,t={}){const n=function(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:e=>(n.helpers.add(e),e)}}(e);n.helper("normalize"),e.body&&ne(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function oe(e){if(1===e.items.length){const t=e.items[0];3!==t.type&&9!==t.type||(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(3!==r.type&&9!==r.type)break;if(null==r.value)break;t.push(r.value)}if(t.length===e.items.length){e.static=R(t);for(let t=0;t<e.items.length;t++){const n=e.items[t];3!==n.type&&9!==n.type||delete n.value}}}}const se="minifier";function ce(e){switch(e.t=e.type,e.type){case 0:{const t=e;ce(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let e=0;e<n.length;e++)ce(n[e]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let e=0;e<n.length;e++)ce(n[e]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;ce(t.key),t.k=t.key,delete t.key,t.modifier&&(ce(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}default:throw F(x.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:se,args:[e.type]})}delete e.type}const ae="parser";function le(e,t){const{helper:n}=e;switch(t.type){case 0:!function(e,t){t.body?le(e,t.body):e.push("null")}(e,t);break;case 1:!function(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const o=t.cases.length;for(let n=0;n<o&&(le(e,t.cases[n]),n!==o-1);n++)e.push(", ");e.deindent(r()),e.push("])")}}(e,t);break;case 2:!function(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const o=t.items.length;for(let s=0;s<o&&(le(e,t.items[s]),s!==o-1);s++)e.push(", ");e.deindent(r()),e.push("])")}(e,t);break;case 6:!function(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),le(e,t.key),t.modifier?(e.push(", "),le(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}(e,t);break;case 8:case 7:case 9:case 3:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;default:throw F(x.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:ae,args:[t.type]})}}const ie=(e,t={})=>{const n=D(t.mode)?t.mode:"normal",r=D(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,s=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",c=t.needIndent?t.needIndent:"arrow"!==n,a=e.helpers||[],l=function(e,t){const{sourceMap:n,filename:r,breakLineCode:o,needIndent:s}=t,c=!1!==t.location,a={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:s,indentLevel:0};function l(e,t){a.code+=e}function i(e,t=!0){const n=t?o:"";l(s?n+"  ".repeat(e):n)}return c&&e.loc&&(a.source=e.loc.source),{context:()=>a,push:l,indent:function(e=!0){const t=++a.indentLevel;e&&i(t)},deindent:function(e=!0){const t=--a.indentLevel;e&&i(t)},newline:function(){i(a.indentLevel)},helper:e=>`_${e}`,needIndent:()=>a.needIndent}}(e,{mode:n,filename:r,sourceMap:o,breakLineCode:s,needIndent:c});l.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(c),a.length>0&&(l.push(`const { ${R(a.map((e=>`${e}: _${e}`)),", ")} } = ctx`),l.newline()),l.push("return "),le(l,e),l.deindent(c),l.push("}"),delete e.helpers;const{code:i,map:u}=l.context();return{ast:e,code:i,map:u?u.toJSON():void 0}};function ue(e,t={}){const n=P({},t),r=!!n.jit,o=!!n.minify,s=null==n.optimize||n.optimize,c=Z(n).parse(e);return r?(s&&function(e){const t=e.body;2===t.type?oe(t):t.cases.forEach((e=>oe(e)))}(c),o&&ce(c),{ast:c,code:""}):(re(c,n),ie(c,n))}
/*!
  * core-base v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const fe=[];fe[0]={w:[0],i:[3,0],"[":[4],o:[7]},fe[1]={w:[1],".":[2],"[":[4],o:[7]},fe[2]={w:[2],i:[3,0],0:[3,0]},fe[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},fe[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},fe[5]={"'":[4,0],o:8,l:[5,0]},fe[6]={'"':[4,0],o:8,l:[6,0]};const _e=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Ee(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function de(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,_e.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}const me=new Map;function pe(e,t){return L(e)?e[t]:null}function Ne(e,t){if(!L(e))return null;let n=me.get(t);if(n||(n=function(e){const t=[];let n,r,o,s,c,a,l,i=-1,u=0,f=0;const _=[];function E(){const t=e[i+1];if(5===u&&"'"===t||6===u&&'"'===t)return i++,o="\\"+t,_[0](),!0}for(_[0]=()=>{void 0===r?r=o:r+=o},_[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},_[2]=()=>{_[0](),f++},_[3]=()=>{if(f>0)f--,u=4,_[0]();else{if(f=0,void 0===r)return!1;if(r=de(r),!1===r)return!1;_[1]()}};null!==u;)if(i++,n=e[i],"\\"!==n||!E()){if(s=Ee(n),l=fe[u],c=l[s]||l.l||8,8===c)return;if(u=c[0],void 0!==c[1]&&(a=_[c[1]],a&&(o=n,!1===a())))return;if(7===u)return t}}(t),n&&me.set(t,n)),!n)return null;const r=n.length;let o=e,s=0;for(;s<r;){const e=o[n[s]];if(void 0===e)return null;if(m(o))return null;o=e,s++}return o}const Le=e=>e,Te=e=>"",he="text",Ie=e=>0===e.length?"":function(e,t=""){return e.reduce(((e,n,r)=>0===r?e+n:e+t+n),"")}(e),ke=e=>null==e?"":d(e)||k(e)&&e.toString===h?JSON.stringify(e,null,2):String(e);function Ae(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function Oe(e={}){const t=e.locale,n=function(e){const t=o(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(o(e.named.count)||o(e.named.n))?o(e.named.count)?e.named.count:o(e.named.n)?e.named.n:t:t}(e),r=L(e.pluralRules)&&p(t)&&m(e.pluralRules[t])?e.pluralRules[t]:Ae,s=L(e.pluralRules)&&p(t)&&m(e.pluralRules[t])?Ae:void 0,c=e.list||[],a=e.named||{};o(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,a);function i(t){const n=m(e.messages)?e.messages(t):!!L(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):Te)}const u=k(e.processor)&&m(e.processor.normalize)?e.processor.normalize:Ie,f=k(e.processor)&&m(e.processor.interpolate)?e.processor.interpolate:ke,_={list:e=>c[e],named:e=>a[e],plural:e=>e[r(n,e.length,s)],linked:(t,...n)=>{const[r,o]=n;let s="text",c="";1===n.length?L(r)?(c=r.modifier||c,s=r.type||s):p(r)&&(c=r||c):2===n.length&&(p(r)&&(c=r||c),p(o)&&(s=o||s));const a=i(t)(_),l="vnode"===s&&d(a)&&c?a[0]:a;return c?(u=c,e.modifiers?e.modifiers[u]:Le)(l,s):l;var u},message:i,type:k(e.processor)&&p(e.processor.type)?e.processor.type:he,interpolate:f,normalize:u,values:l({},c,a)};return _}let Ce=null;function ye(e){Ce=e}const ge=Se("function:translate");function Se(e){return t=>Ce&&Ce.emit(e,t)}const be=v.__EXTEND_POINT__,Pe=A(be),De={NOT_FOUND_KEY:be,FALLBACK_TO_TRANSLATE:Pe(),CANNOT_FORMAT_NUMBER:Pe(),FALLBACK_TO_NUMBER_FORMAT:Pe(),CANNOT_FORMAT_DATE:Pe(),FALLBACK_TO_DATE_FORMAT:Pe(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Pe(),__EXTEND_POINT__:Pe()},Ue=x.__EXTEND_POINT__,Re=A(Ue),ve={INVALID_ARGUMENT:Ue,INVALID_DATE_ARGUMENT:Re(),INVALID_ISO_DATE_ARGUMENT:Re(),NOT_SUPPORT_NON_STRING_MESSAGE:Re(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Re(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Re(),NOT_SUPPORT_LOCALE_TYPE:Re(),__EXTEND_POINT__:Re()};function Me(e){return F(e,null,void 0)}function xe(e,t){return null!=t.locale?Fe(t.locale):Fe(e.locale)}let we;function Fe(e){if(p(e))return e;if(m(e)){if(e.resolvedOnce&&null!=we)return we;if("Function"===e.constructor.name){const t=e();if(T(t))throw Me(ve.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return we=t}throw Me(ve.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}throw Me(ve.NOT_SUPPORT_LOCALE_TYPE)}function Ye(e,t,n){return[...new Set([n,...d(t)?t:L(t)?Object.keys(t):p(t)?[t]:[n]])]}function Xe(e,t,n){const r=p(n)?n:He,o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let s=o.__localeChainCache.get(r);if(!s){s=[];let e=[n];for(;d(e);)e=We(s,e,t);const c=d(t)||!k(t)?t:t.default?t.default:null;e=p(c)?[c]:c,d(e)&&We(s,e,!1),o.__localeChainCache.set(r,s)}return s}function We(e,t,n){let r=!0;for(let o=0;o<t.length&&N(r);o++){const s=t[o];p(s)&&(r=$e(e,t[o],n))}return r}function $e(e,t,n){let r;const o=t.split("-");do{r=Ge(e,o.join("-"),n),o.splice(-1,1)}while(o.length&&!0===r);return r}function Ge(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const o=t.replace(/!/g,"");e.push(o),(d(n)||k(n))&&n[o]&&(r=n[o])}return r}const Ke=-1,He="en-US",Ve="",je=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;let Be,ze,Je;function Qe(e){Be=e}function qe(e){ze=e}function Ze(e){Je=e}let et=null;const tt=e=>{et=e},nt=()=>et;let rt=null;const ot=e=>{rt=e},st=()=>rt;let ct=0;function at(e={}){const t=m(e.onWarn)?e.onWarn:O,n=p(e.version)?e.version:"9.13.1",r=p(e.locale)||m(e.locale)?e.locale:He,o=m(r)?He:r,s=d(e.fallbackLocale)||k(e.fallbackLocale)||p(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:o,a=k(e.messages)?e.messages:{[o]:{}},i=k(e.datetimeFormats)?e.datetimeFormats:{[o]:{}},u=k(e.numberFormats)?e.numberFormats:{[o]:{}},f=l({},e.modifiers||{},{upper:(e,t)=>"text"===t&&p(e)?e.toUpperCase():"vnode"===t&&L(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&p(e)?e.toLowerCase():"vnode"===t&&L(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&p(e)?je(e):"vnode"===t&&L(e)&&"__v_isVNode"in e?je(e.children):e}),_=e.pluralRules||{},E=m(e.missing)?e.missing:null,T=!N(e.missingWarn)&&!c(e.missingWarn)||e.missingWarn,h=!N(e.fallbackWarn)&&!c(e.fallbackWarn)||e.fallbackWarn,I=!!e.fallbackFormat,A=!!e.unresolving,C=m(e.postTranslation)?e.postTranslation:null,y=k(e.processor)?e.processor:null,g=!N(e.warnHtmlMessage)||e.warnHtmlMessage,S=!!e.escapeParameter,b=m(e.messageCompiler)?e.messageCompiler:Be,P=m(e.messageResolver)?e.messageResolver:ze||pe,D=m(e.localeFallbacker)?e.localeFallbacker:Je||Ye,U=L(e.fallbackContext)?e.fallbackContext:void 0,R=e,v=L(R.__datetimeFormatters)?R.__datetimeFormatters:new Map,M=L(R.__numberFormatters)?R.__numberFormatters:new Map,x=L(R.__meta)?R.__meta:{};ct++;const w={version:n,cid:ct,locale:r,fallbackLocale:s,messages:a,modifiers:f,pluralRules:_,missing:E,missingWarn:T,fallbackWarn:h,fallbackFormat:I,unresolving:A,postTranslation:C,processor:y,warnHtmlMessage:g,escapeParameter:S,messageCompiler:b,messageResolver:P,localeFallbacker:D,fallbackContext:U,onWarn:t,__meta:x};return w.datetimeFormats=i,w.numberFormats=u,w.__datetimeFormatters=v,w.__numberFormatters=M,__INTLIFY_PROD_DEVTOOLS__&&function(e,t,n){Ce&&Ce.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}(w,n,x),w}function lt(e,t,n,r,o){const{missing:s,onWarn:c}=e;if(null!==s){const r=s(e,n,t,o);return p(r)?r:t}return t}function it(e,t,n){e.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function ut(e,t){const n=t.indexOf(e);if(-1===n)return!1;for(let s=n+1;s<t.length;s++)if(r=e,o=t[s],r!==o&&r.split("-")[0]===o.split("-")[0])return!0;var r,o;return!1}function ft(e){return t=>function(e,t){const n=t.b||t.body;if(1===(n.t||n.type)){const t=n,r=t.c||t.cases;return e.plural(r.reduce(((t,n)=>[...t,_t(e,n)]),[]))}return _t(e,n)}(t,e)}function _t(e,t){const n=t.s||t.static;if(n)return"text"===e.type?n:e.normalize([n]);{const n=(t.i||t.items).reduce(((t,n)=>[...t,Et(e,n)]),[]);return e.normalize(n)}}function Et(e,t){const n=t.t||t.type;switch(n){case 3:{const e=t;return e.v||e.value}case 9:{const e=t;return e.v||e.value}case 4:{const n=t;return e.interpolate(e.named(n.k||n.key))}case 5:{const n=t;return e.interpolate(e.list(null!=n.i?n.i:n.index))}case 6:{const n=t,r=n.m||n.modifier;return e.linked(Et(e,n.k||n.key),r?Et(e,r):void 0,e.type)}case 7:{const e=t;return e.v||e.value}case 8:{const e=t;return e.v||e.value}default:throw new Error(`unhandled node type on format message part: ${n}`)}}const dt=e=>e;let mt=Object.create(null);const pt=e=>L(e)&&(0===e.t||0===e.type)&&("b"in e||"body"in e);function Nt(e,t={}){let n=!1;const r=t.onError||Y;return t.onError=e=>{n=!0,r(e)},{...ue(e,t),detectError:n}}const Lt=(e,t)=>{if(!p(e))throw Me(ve.NOT_SUPPORT_NON_STRING_MESSAGE);{!N(t.warnHtmlMessage)||t.warnHtmlMessage;const n=(t.onCacheKey||dt)(e),r=mt[n];if(r)return r;const{code:o,detectError:s}=Nt(e,t),c=new Function(`return ${o}`)();return s?c:mt[n]=c}};function Tt(e,t){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&p(e)){!N(t.warnHtmlMessage)||t.warnHtmlMessage;const n=(t.onCacheKey||dt)(e),r=mt[n];if(r)return r;const{ast:o,detectError:s}=Nt(e,{...t,location:!1,jit:!0}),c=ft(o);return s?c:mt[n]=c}{const t=e.cacheKey;if(t){const n=mt[t];return n||(mt[t]=ft(e))}return ft(e)}}const ht=()=>"",It=e=>m(e);function kt(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:c,fallbackLocale:a,messages:i}=e,[u,_]=Ct(...t),E=N(_.missingWarn)?_.missingWarn:e.missingWarn,m=N(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn,T=N(_.escapeParameter)?_.escapeParameter:e.escapeParameter,h=!!_.resolvedMessage,I=p(_.default)||N(_.default)?N(_.default)?c?u:()=>u:_.default:n?c?u:()=>u:"",k=n||""!==I,A=xe(e,_);T&&function(e){d(e.list)?e.list=e.list.map((e=>p(e)?f(e):e)):L(e.named)&&Object.keys(e.named).forEach((t=>{p(e.named[t])&&(e.named[t]=f(e.named[t]))}))}(_);let[O,C,y]=h?[u,A,i[A]||{}]:At(e,u,A,a,m,E),g=O,S=u;if(h||p(g)||pt(g)||It(g)||k&&(g=I,S=g),!(h||(p(g)||pt(g)||It(g))&&p(C)))return s?-1:u;let b=!1;const P=It(g)?g:Ot(e,u,C,g,S,(()=>{b=!0}));if(b)return g;const D=function(e,t,n,r){const{modifiers:s,pluralRules:c,messageResolver:a,fallbackLocale:l,fallbackWarn:i,missingWarn:u,fallbackContext:f}=e,_=r=>{let o=a(n,r);if(null==o&&f){const[,,e]=At(f,r,t,l,i,u);o=a(e,r)}if(p(o)||pt(o)){let n=!1;const s=Ot(e,r,t,o,r,(()=>{n=!0}));return n?ht:s}return It(o)?o:ht},E={locale:t,modifiers:s,pluralRules:c,messages:_};e.processor&&(E.processor=e.processor);r.list&&(E.list=r.list);r.named&&(E.named=r.named);o(r.plural)&&(E.pluralIndex=r.plural);return E}(e,C,y,_),U=function(e,t,n){const r=t(n);return r}(0,P,Oe(D)),R=r?r(U,u):U;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:p(u)?u:It(g)?g.key:"",locale:C||(It(g)?g.locale:""),format:p(g)?g:It(g)?g.source:"",message:R};t.meta=l({},e.__meta,nt()||{}),ge(t)}return R}function At(e,t,n,r,o,s){const{messages:c,onWarn:a,messageResolver:l,localeFallbacker:i}=e,u=i(e,r,n);let f,_={},E=null;for(let d=0;d<u.length&&(f=u[d],_=c[f]||{},null===(E=l(_,t))&&(E=_[t]),!(p(E)||pt(E)||It(E)));d++)if(!ut(f,u)){const n=lt(e,t,f,0,"translate");n!==t&&(E=n)}return[E,f,_]}function Ot(e,t,r,o,s,c){const{messageCompiler:a,warnHtmlMessage:l}=e;if(It(o)){const e=o;return e.locale=e.locale||r,e.key=e.key||t,e}if(null==a){const e=()=>o;return e.locale=r,e.key=t,e}const i=a(o,function(e,t,r,o,s,c){return{locale:t,key:r,warnHtmlMessage:s,onError:e=>{throw c&&c(e),e},onCacheKey:e=>n(t,r,e)}}(0,r,s,0,l,c));return i.locale=r,i.key=t,i.source=o,i}function Ct(...e){const[t,n,r]=e,s={};if(!(p(t)||o(t)||It(t)||pt(t)))throw Me(ve.INVALID_ARGUMENT);const c=o(t)?String(t):(It(t),t);return o(n)?s.plural=n:p(n)?s.default=n:k(n)&&!a(n)?s.named=n:d(n)&&(s.list=n),o(r)?s.plural=r:p(r)?s.default=r:k(r)&&l(s,r),[c,s]}function yt(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:o,onWarn:s,localeFallbacker:c}=e,{__datetimeFormatters:i}=e,[u,f,_,E]=St(...t);N(_.missingWarn)?_.missingWarn:e.missingWarn;N(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn;const d=!!_.part,m=xe(e,_),L=c(e,o,m);if(!p(u)||""===u)return new Intl.DateTimeFormat(m,E).format(f);let T,h={},I=null;for(let a=0;a<L.length&&(T=L[a],h=n[T]||{},I=h[u],!k(I));a++)lt(e,u,T,0,"datetime format");if(!k(I)||!p(T))return r?-1:u;let A=`${T}__${u}`;a(E)||(A=`${A}__${JSON.stringify(E)}`);let O=i.get(A);return O||(O=new Intl.DateTimeFormat(T,l({},I,E)),i.set(A,O)),d?O.formatToParts(f):O.format(f)}const gt=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function St(...e){const[t,n,r,c]=e,a={};let l,i={};if(p(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw Me(ve.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();l=new Date(n);try{l.toISOString()}catch(u){throw Me(ve.INVALID_ISO_DATE_ARGUMENT)}}else if(s(t)){if(isNaN(t.getTime()))throw Me(ve.INVALID_DATE_ARGUMENT);l=t}else{if(!o(t))throw Me(ve.INVALID_ARGUMENT);l=t}return p(n)?a.key=n:k(n)&&Object.keys(n).forEach((e=>{gt.includes(e)?i[e]=n[e]:a[e]=n[e]})),p(r)?a.locale=r:k(r)&&(i=r),k(c)&&(i=c),[a.key||"",l,a,i]}function bt(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function Pt(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:o,onWarn:s,localeFallbacker:c}=e,{__numberFormatters:i}=e,[u,f,_,E]=Ut(...t);N(_.missingWarn)?_.missingWarn:e.missingWarn;N(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn;const d=!!_.part,m=xe(e,_),L=c(e,o,m);if(!p(u)||""===u)return new Intl.NumberFormat(m,E).format(f);let T,h={},I=null;for(let a=0;a<L.length&&(T=L[a],h=n[T]||{},I=h[u],!k(I));a++)lt(e,u,T,0,"number format");if(!k(I)||!p(T))return r?-1:u;let A=`${T}__${u}`;a(E)||(A=`${A}__${JSON.stringify(E)}`);let O=i.get(A);return O||(O=new Intl.NumberFormat(T,l({},I,E)),i.set(A,O)),d?O.formatToParts(f):O.format(f)}const Dt=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ut(...e){const[t,n,r,s]=e,c={};let a={};if(!o(t))throw Me(ve.INVALID_ARGUMENT);const l=t;return p(n)?c.key=n:k(n)&&Object.keys(n).forEach((e=>{Dt.includes(e)?a[e]=n[e]:c[e]=n[e]})),p(r)?c.locale=r:k(r)&&(a=r),k(s)&&(a=s),[c.key||"",l,c,a]}function Rt(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}"boolean"!=typeof __INTLIFY_PROD_DEVTOOLS__&&(u().__INTLIFY_PROD_DEVTOOLS__=!1),"boolean"!=typeof __INTLIFY_JIT_COMPILATION__&&(u().__INTLIFY_JIT_COMPILATION__=!1),"boolean"!=typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(u().__INTLIFY_DROP_MESSAGE_COMPILER__=!1);export{kt as A,St as B,yt as C,He as D,Ut as E,Pt as F,pt as G,It as H,Xe as I,Qe as J,qe as K,Ze as L,Ve as M,Dt as N,De as O,A as P,ve as Q,ot as R,Tt as S,Lt as T,Ne as U,l as a,p as b,L as c,N as d,F as e,d as f,u as g,k as h,o as i,c as j,m as k,e as l,t as m,gt as n,y as o,E as p,at as q,bt as r,ye as s,Rt as t,it as u,a as v,tt as w,st as x,Ke as y,Ct as z};
//# sourceMappingURL=intlify.YRk98uu_.js.map
