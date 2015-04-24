!function(){if("ontouchstart"in window){var e,t,n,i,r,o,s={};e=function(e,t){return Math.abs(e[0]-t[0])>5||Math.abs(e[1]-t[1])>5},t=function(e){this.startXY=[e.touches[0].clientX,e.touches[0].clientY],this.threshold=!1},n=function(t){return this.threshold?!1:void(this.threshold=e(this.startXY,[t.touches[0].clientX,t.touches[0].clientY]))},i=function(t){if(!this.threshold&&!e(this.startXY,[t.changedTouches[0].clientX,t.changedTouches[0].clientY])){var n=t.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.simulated=!0,t.target.dispatchEvent(i)}},r=function(e){var t=Date.now(),n=t-s.time,i=e.clientX,r=e.clientY,a=[Math.abs(s.x-i),Math.abs(s.y-r)],l=o(e.target,"A")||e.target,u=l.nodeName,c="A"===u,h=window.navigator.standalone&&c&&e.target.getAttribute("href");return s.time=t,s.x=i,s.y=r,(!e.simulated&&(500>n||1500>n&&a[0]<50&&a[1]<50)||h)&&(e.preventDefault(),e.stopPropagation(),!h)?!1:(h&&(window.location=l.getAttribute("href")),void(l&&l.classList&&(l.classList.add("energize-focus"),window.setTimeout(function(){l.classList.remove("energize-focus")},150))))},o=function(e,t){for(var n=e;n!==document.body;){if(!n||n.nodeName===t)return n;n=n.parentNode}return null},document.addEventListener("touchstart",t,!1),document.addEventListener("touchmove",n,!1),document.addEventListener("touchend",i,!1),document.addEventListener("click",r,!0)}}(),/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({highlight:function(e,t,n,i){if(3===e.nodeType){var r=e.data.match(t);if(r){var o=document.createElement(n||"span");o.className=i||"highlight";var s=e.splitText(r.index);s.splitText(r[0].length);var a=s.cloneNode(!0);return o.appendChild(a),s.parentNode.replaceChild(o,s),1}}else if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&(e.tagName!==n.toUpperCase()||e.className!==i))for(var l=0;l<e.childNodes.length;l++)l+=jQuery.highlight(e.childNodes[l],t,n,i);return 0}}),jQuery.fn.unhighlight=function(e){var t={className:"highlight",element:"span"};return jQuery.extend(t,e),this.find(t.element+"."+t.className).each(function(){var e=this.parentNode;e.replaceChild(this.firstChild,this),e.normalize()}).end()},jQuery.fn.highlight=function(e,t){var n={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(n,t),e.constructor===String&&(e=[e]),e=jQuery.grep(e,function(e){return""!=e}),e=jQuery.map(e,function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}),0==e.length)return this;var i=n.caseSensitive?"":"i",r="("+e.join("|")+")";n.wordsOnly&&(r="\\b"+r+"\\b");var o=new RegExp(r,i);return this.each(function(){jQuery.highlight(this,o,n.element,n.className)})},/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function(e,t){var n=0,i=Array.prototype.slice,r=e.cleanData;e.cleanData=function(t){for(var n,i=0;null!=(n=t[i]);i++)try{e(n).triggerHandler("remove")}catch(o){}r(t)},e.widget=function(n,i,r){var o,s,a,l,u={},c=n.split(".")[0];n=n.split(".")[1],o=c+"-"+n,r||(r=i,i=e.Widget),e.expr[":"][o.toLowerCase()]=function(t){return!!e.data(t,o)},e[c]=e[c]||{},s=e[c][n],a=e[c][n]=function(e,n){return this._createWidget?(arguments.length&&this._createWidget(e,n),t):new a(e,n)},e.extend(a,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),l=new i,l.options=e.widget.extend({},l.options),e.each(r,function(n,r){return e.isFunction(r)?(u[n]=function(){var e=function(){return i.prototype[n].apply(this,arguments)},t=function(e){return i.prototype[n].apply(this,e)};return function(){var n,i=this._super,o=this._superApply;return this._super=e,this._superApply=t,n=r.apply(this,arguments),this._super=i,this._superApply=o,n}}(),t):(u[n]=r,t)}),a.prototype=e.widget.extend(l,{widgetEventPrefix:s?l.widgetEventPrefix:n},u,{constructor:a,namespace:c,widgetName:n,widgetFullName:o}),s?(e.each(s._childConstructors,function(t,n){var i=n.prototype;e.widget(i.namespace+"."+i.widgetName,a,n._proto)}),delete s._childConstructors):i._childConstructors.push(a),e.widget.bridge(n,a)},e.widget.extend=function(n){for(var r,o,s=i.call(arguments,1),a=0,l=s.length;l>a;a++)for(r in s[a])o=s[a][r],s[a].hasOwnProperty(r)&&o!==t&&(n[r]=e.isPlainObject(o)?e.isPlainObject(n[r])?e.widget.extend({},n[r],o):e.widget.extend({},o):o);return n},e.widget.bridge=function(n,r){var o=r.prototype.widgetFullName||n;e.fn[n]=function(s){var a="string"==typeof s,l=i.call(arguments,1),u=this;return s=!a&&l.length?e.widget.extend.apply(null,[s].concat(l)):s,this.each(a?function(){var i,r=e.data(this,o);return r?e.isFunction(r[s])&&"_"!==s.charAt(0)?(i=r[s].apply(r,l),i!==r&&i!==t?(u=i&&i.jquery?u.pushStack(i.get()):i,!1):t):e.error("no such method '"+s+"' for "+n+" widget instance"):e.error("cannot call methods on "+n+" prior to initialization; attempted to call method '"+s+"'")}:function(){var t=e.data(this,o);t?t.option(s||{})._init():e.data(this,o,new r(s,this))}),u}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,i){var r,o,s,a=n;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof n)if(a={},r=n.split("."),n=r.shift(),r.length){for(o=a[n]=e.widget.extend({},this.options[n]),s=0;r.length-1>s;s++)o[r[s]]=o[r[s]]||{},o=o[r[s]];if(n=r.pop(),i===t)return o[n]===t?null:o[n];o[n]=i}else{if(i===t)return this.options[n]===t?null:this.options[n];a[n]=i}return this._setOptions(a),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(n,i,r){var o,s=this;"boolean"!=typeof n&&(r=i,i=n,n=!1),r?(i=o=e(i),this.bindings=this.bindings.add(i)):(r=i,i=this.element,o=this.widget()),e.each(r,function(r,a){function l(){return n||s.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof a?s[a]:a).apply(s,arguments):t}"string"!=typeof a&&(l.guid=a.guid=a.guid||l.guid||e.guid++);var u=r.match(/^(\w+)\s*(.*)$/),c=u[1]+s.eventNamespace,h=u[2];h?o.delegate(h,c,l):i.bind(c,l)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return("string"==typeof e?i[e]:e).apply(i,arguments)}var i=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,i){var r,o,s=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],o=n.originalEvent)for(r in o)r in n||(n[r]=o[r]);return this.element.trigger(n,i),!(e.isFunction(s)&&s.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,r,o){"string"==typeof r&&(r={effect:r});var s,a=r?r===!0||"number"==typeof r?n:r.effect||n:t;r=r||{},"number"==typeof r&&(r={duration:r}),s=!e.isEmptyObject(r),r.complete=o,r.delay&&i.delay(r.delay),s&&e.effects&&e.effects.effect[a]?i[t](r):a!==t&&i[a]?i[a](r.duration,r.easing,o):i.queue(function(n){e(this)[t](),o&&o.call(i[0]),n()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(e){"use strict";e(window.jQuery,window,document)}(function(e,t,n,i){"use strict";var r="tocify",o="tocify-focus",s="tocify-hover",a="tocify-hide",l="tocify-header",u="."+l,c="tocify-subheader",h="."+c,d="tocify-item",f="."+d,p="tocify-extend-page",g="."+p;e.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var n=this;n.tocifyWrapper=e(".tocify-wrapper"),n.extendPageScroll=!0,n.items=[],n._generateToc(),n.cachedHeights=[],n.cachedAnchors=[],n._addCSSClasses(),n.webkit=function(){for(var e in t)if(e&&-1!==e.toLowerCase().indexOf("webkit"))return!0;return!1}(),n._setEventHandlers(),e(t).load(function(){n._setActiveElement(!0),e("html, body").promise().done(function(){setTimeout(function(){n.extendPageScroll=!1},0)})})},_generateToc:function(){var t,n,i=this,o=i.options.ignoreSelector;return t=e(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),t.length?(i.element.addClass(r),void t.each(function(t){e(this).is(o)||(n=e("<ul/>",{id:l+t,"class":l}).append(i._nestElements(e(this),t)),i.element.append(n),e(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===e(this).find(i.options.selectors).length?e(this).filter(i.options.selectors).each(function(){e(this).is(o)||i._appendSubheaders.call(this,i,n)}):e(this).find(i.options.selectors).each(function(){e(this).is(o)||i._appendSubheaders.call(this,i,n)})}))})):void i.element.addClass(a)},_setActiveElement:function(e){var n=this,i=t.location.hash.substring(1),r=n.element.find("li[data-unique='"+i+"']");return i.length?(n.element.find("."+n.focusClass).removeClass(n.focusClass),r.addClass(n.focusClass),n.options.showAndHide&&r.click()):(n.element.find("."+n.focusClass).removeClass(n.focusClass),!i.length&&e&&n.options.highlightDefault&&n.element.find(f).first().addClass(n.focusClass)),n},_nestElements:function(t,n){var i,r,o;return i=e.grep(this.items,function(e){return e===t.text()}),this.items.push(i.length?t.text()+n:t.text()),o=this._generateHashValue(i,t,n),r=e("<li/>",{"class":d,"data-unique":o}).append(e("<a/>",{text:t.text()})),t.before(e("<div/>",{name:o,"data-unique":o})),r},_generateHashValue:function(e,t,n){var i="",r=this.options.hashGenerator;if("pretty"===r){for(i=t.text().toLowerCase().replace(/\s/g,"-"),i=i.replace(/[^\x00-\x7F]/g,"");i.indexOf("--")>-1;)i=i.replace(/--/g,"-");for(;i.indexOf(":-")>-1;)i=i.replace(/:-/g,"-")}else i="function"==typeof r?r(t.text(),t):t.text().replace(/\s/g,"");return e.length&&(i+=""+n),i},_appendSubheaders:function(t,n){var i=e(this).index(t.options.selectors),r=e(t.options.selectors).eq(i-1),o=+e(this).prop("tagName").charAt(1),s=+r.prop("tagName").charAt(1);s>o?t.element.find(h+"[data-tag="+o+"]").last().append(t._nestElements(e(this),i)):o===s?n.find(f).last().after(t._nestElements(e(this),i)):n.find(f).last().after(e("<ul/>",{"class":c,"data-tag":o})).next(h).append(t._nestElements(e(this),i))},_setEventHandlers:function(){var r=this;this.element.on("click.tocify","li",function(){if(r.options.history&&(t.location.hash=e(this).attr("data-unique")),r.element.find("."+r.focusClass).removeClass(r.focusClass),e(this).addClass(r.focusClass),r.options.showAndHide){var n=e('li[data-unique="'+e(this).attr("data-unique")+'"]');r._triggerShow(n)}r._scrollTo(e(this))}),this.element.find("li").on({"mouseenter.tocify":function(){e(this).addClass(r.hoverClass),e(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==r.options.theme&&e(this).removeClass(r.hoverClass)}}),e(t).on("resize",function(){r.calculateHeights()}),e(t).on("scroll.tocify",function(){e("html, body").promise().done(function(){var o,s,a,l,u=e(t).scrollTop(),c=e(t).height(),h=e(n).height(),d=e("body")[0].scrollHeight;if(r.options.extendPage&&(r.webkit&&u>=d-c-r.options.extendPageOffset||!r.webkit&&c+u>h-r.options.extendPageOffset)&&!e(g).length){if(s=e('div[data-unique="'+e(f).last().attr("data-unique")+'"]'),!s.length)return;a=s.offset().top,e(r.options.context).append(e("<div />",{"class":p,height:Math.abs(a-u)+"px","data-unique":p})),r.extendPageScroll&&(l=r.element.find("li.active"),r._scrollTo(e("div[data-unique="+l.attr("data-unique")+"]")))}setTimeout(function(){var s,a=null;0==r.cachedHeights.length&&r.calculateHeights();var l=e(t).scrollTop();if(r.cachedAnchors.each(function(e){return r.cachedHeights[e]-l<0?void(a=e):!1}),s=e(r.cachedAnchors[a]).attr("data-unique"),o=e('li[data-unique="'+s+'"]'),r.options.highlightOnScroll&&o.length&&!o.hasClass(r.focusClass)){r.element.find("."+r.focusClass).removeClass(r.focusClass),o.addClass(r.focusClass);var u=r.tocifyWrapper,c=e(o).closest(".tocify-header"),h=c.offset().top,d=u.offset().top,f=h-d;if(f>=e(t).height()){var p=f+u.scrollTop();u.scrollTop(p)}else 0>f&&u.scrollTop(0)}r.options.scrollHistory&&t.location.hash!=="#"+s&&s!==i&&(history.replaceState?history.replaceState({},"","#"+s):(scrollV=n.body.scrollTop,scrollH=n.body.scrollLeft,location.hash="#"+s,n.body.scrollTop=scrollV,n.body.scrollLeft=scrollH)),r.options.showAndHideOnScroll&&r.options.showAndHide&&r._triggerShow(o,!0)},0)})})},calculateHeights:function(){var t=this;t.cachedHeights=[],t.cachedAnchors=[];var n=e(t.options.context).find("div[data-unique]");n.each(function(n){var i=(e(this).next().length?e(this).next():e(this)).offset().top-t.options.highlightOffset;t.cachedHeights[n]=i}),t.cachedAnchors=n},show:function(t){var n=this;if(!t.is(":visible"))switch(t.find(h).length||t.parent().is(u)||t.parent().is(":visible")?t.children(h).length||t.parent().is(u)||(t=t.closest(h)):t=t.parents(h).add(t),n.options.showEffect){case"none":t.show();break;case"show":t.show(n.options.showEffectSpeed);break;case"slideDown":t.slideDown(n.options.showEffectSpeed);break;case"fadeIn":t.fadeIn(n.options.showEffectSpeed);break;default:t.show()}return n.hide(e(h).not(t.parent().is(u)?t:t.closest(u).find(h).not(t.siblings()))),n},hide:function(e){var t=this;switch(t.options.hideEffect){case"none":e.hide();break;case"hide":e.hide(t.options.hideEffectSpeed);break;case"slideUp":e.slideUp(t.options.hideEffectSpeed);break;case"fadeOut":e.fadeOut(t.options.hideEffectSpeed);break;default:e.hide()}return t},_triggerShow:function(e,t){var n=this;return e.parent().is(u)||e.next().is(h)?n.show(e.next(h),t):e.parent().is(h)&&n.show(e.parent(),t),n},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(u+","+h).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=o,this.hoverClass=s),this},setOption:function(){e.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){e.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(t){var n=this,i=n.options.smoothScroll||0,r=n.options.scrollTo;return e("html, body").promise().done(function(){e("html, body").animate({scrollTop:e('div[data-unique="'+t.attr("data-unique")+'"]').next().offset().top-(e.isFunction(r)?r.call():r)+"px"},{duration:i})}),n}})}),/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
function(e){function t(t){if(t&&""!==t){$(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+t+"']").addClass("active");for(var n=0;n<r.length;n++)$(".highlight."+r[n]).parent().hide();$(".highlight."+t).parent().show(),e.toc.calculateHeights(),$(window.location.hash).get(0)&&$(window.location.hash).get(0).scrollIntoView(!0)}}function n(e){if(history){var t=window.location.hash;t&&(t=t.replace(/^#+/,"")),history.pushState({},"","?"+e+"#"+t),localStorage.setItem("language",e)}}function i(e){var n=(e[0],localStorage.getItem("language"));r=e,""!==location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),r)?(t(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):t(null!==n&&-1!=jQuery.inArray(n,r)?n:r[0])}var r=[];e.setupLanguages=i,e.activateLanguage=t,$(function(){$(".lang-selector a").on("click",function(){var e=$(this).data("language-name");return n(e),t(e),!1}),window.onpopstate=function(){t(window.location.search.substr(1))}})}(window),function(e){function t(){setTimeout(function(){toc.setOption("showEffectSpeed",180)},50)}var n=function(){$(".tocify-wrapper").removeClass("open"),$("#nav-button").removeClass("open")},i=function(){e.toc=$("#toc").tocify({selectors:"h1, h2",extendPage:!1,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,scrollTo:-1,scrollHistory:!0,hashGenerator:function(e,t){return t.prop("id")}}).data("toc-tocify"),$("#nav-button").click(function(){return $(".tocify-wrapper").toggleClass("open"),$("#nav-button").toggleClass("open"),!1}),$(".page-wrapper").click(n),$(".tocify-item").click(n)};$(i),$(t)}(window);