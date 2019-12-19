/*!
 * fullPage 2.7.1
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,o,t,i){"use strict";var a="fullpage-wrapper",s="."+a,l="fp-scrollable",r="."+l,c=".slimScrollBar",f=".slimScrollRail",d="fp-responsive",u="fp-notransition",h="fp-destroyed",p="fp-enabled",v="fp-viewing",m="active",g="."+m,S=".section",w="fp-section",y="."+w,x=y+g,T=y+":first",b=y+":last",C="fp-tableCell",k="."+C,A="fp-auto-height",L="fp-nav",E="#"+L,B="fp-tooltip",M="fp-show-active",F=".slide",R="fp-slide",q="."+R,z=q+g,I="fp-slides",P="."+I,D="fp-slidesContainer",H="."+D,O="fp-table",V="fp-slidesNav",U="."+V,Y=U+" a",W="fp-controlArrow",N="."+W,K="fp-prev",X="."+K,j=W+" "+K,Q=N+X,_="fp-next",G="."+_,J=W+" "+_,Z=N+G,$=e(n),ee=e(o);e.fn.fullpage=function(W){function X(){Mn.css({height:"100%",position:"relative"}),Mn.addClass(a),e("html").addClass(p),W.css3&&(W.css3=sn()),W.anchors.length||(W.anchors=e("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),bn.setAllowScrolling(!0),Mn.removeClass(h),oe(),e(y).each(function(n){var o=e(this),t=o.find(q),i=t.length;G(o,n),ne(o,n),i>0?_(o,t,i):W.verticalCentered&&je(o)}),bn.setAutoScrolling(W.autoScrolling,"internal");var t=e(x).find(z);if(t.length&&(0!==e(x).index(y)||0===e(x).index(y)&&0!==t.index())&&hn(t),W.fixedElements&&W.css3&&e(W.fixedElements).appendTo(Tn),W.navigation&&ie(),W.scrollOverflow?("complete"===o.readyState&&ae(),$.on("load",ae)):se(),Ie(),!W.animateAnchor){var i=n.location.hash.replace("#","").split("/"),s=i[0];if(s.length){var l=e('[data-anchor="'+s+'"]');l.length&&(W.autoScrolling?pn(l.position().top):(pn(0),xn.scrollTop(l.position().top)),Ue(s,null),e.isFunction(W.afterLoad)&&W.afterLoad.call(l,s,l.index(y)+1),l.addClass(m).siblings().removeClass(m))}}an(),$.on("load",function(){Ee()})}function _(n,o,t){var i=100*t,a=100/t;o.wrapAll('<div class="'+D+'" />'),o.parent().wrap('<div class="'+I+'" />'),n.find(H).css("width",i+"%"),t>1&&(W.controlArrows&&te(n),W.slidesNavigation&&en(n,t)),o.each(function(n){e(this).css("width",a+"%"),W.verticalCentered&&je(e(this))});var s=n.find(z);s.length&&(0!==e(x).index(y)||0===e(x).index(y)&&0!==s.index())?hn(s):o.eq(0).addClass(m)}function G(n,o){o||0!==e(x).length||n.addClass(m),n.css("height",Fn+"px"),W.paddingTop&&n.css("padding-top",W.paddingTop),W.paddingBottom&&n.css("padding-bottom",W.paddingBottom),"undefined"!=typeof W.sectionsColor[o]&&n.css("background-color",W.sectionsColor[o])}function ne(n,o){"undefined"!=typeof W.anchors[o]&&(n.attr("data-anchor",W.anchors[o]),n.hasClass(m)&&Ue(W.anchors[o],o)),W.menu&&W.css3&&e(W.menu).closest(s).length&&e(W.menu).appendTo(Tn)}function oe(){e(W.sectionSelector).each(function(){e(this).addClass(w)}),e(W.slideSelector).each(function(){e(this).addClass(R)})}function te(e){e.find(P).after('<div class="'+j+'"></div><div class="'+J+'"></div>'),"#fff"!=W.controlArrowColor&&(e.find(Z).css("border-color","transparent transparent transparent "+W.controlArrowColor),e.find(Q).css("border-color","transparent "+W.controlArrowColor+" transparent transparent")),W.loopHorizontal||e.find(Q).hide()}function ie(){Tn.append('<div id="'+L+'"><ul></ul></div>');var n=e(E);n.addClass(function(){return W.showActiveTooltip?M+" "+W.navigationPosition:W.navigationPosition});for(var o=0;o<e(y).length;o++){var t="";W.anchors.length&&(t=W.anchors[o]);var i='<li><a href="#'+t+'"><span></span></a>',a=W.navigationTooltips[o];"undefined"!=typeof a&&""!==a&&(i+='<div class="'+B+" "+W.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(E).css("margin-top","-"+e(E).height()/2+"px"),e(E).find("li").eq(e(x).index(y)).find("a").addClass(m)}function ae(){e(y).each(function(){var n=e(this).find(q);n.length?n.each(function(){Ke(e(this))}):Ke(e(this))}),se()}function se(){var n=e(x);le(n),ke(n),Ae(n),e.isFunction(W.afterLoad)&&W.afterLoad.call(n,n.data("anchor"),n.index(y)+1),e.isFunction(W.afterRender)&&W.afterRender.call(Mn)}function le(e){var n=e.find("SLIDES_WRAPPER"),o=e.find(r);n.length&&(o=n.find(z)),o.mouseover()}function re(){var n;if(!W.autoScrolling||W.scrollBar){for(var i=$.scrollTop(),a=0,s=t.abs(i-o.querySelectorAll(y)[0].offsetTop),l=o.querySelectorAll(y),r=0;r<l.length;++r){var c=l[r],f=t.abs(i-c.offsetTop);s>f&&(a=r,s=f)}n=e(l).eq(a)}if(!W.autoScrolling||W.scrollBar){if(!n.hasClass(m)&&!n.hasClass(A)){Nn=!0;var d=e(x),u=d.index(y)+1,h=We(n),p=n.data("anchor"),v=n.index(y)+1,g=n.find(z);if(g.length)var S=g.data("anchor"),w=g.index();zn&&(n.addClass(m).siblings().removeClass(m),e.isFunction(W.onLeave)&&W.onLeave.call(d,u,v,h),e.isFunction(W.afterLoad)&&W.afterLoad.call(n,p,v),ke(n),bn.setFitToSection(!n.hasClass(A)),Ue(p,v-1),W.anchors.length&&(Cn=p,nn(w,S,p,v))),clearTimeout(Vn),Vn=setTimeout(function(){Nn=!1},100)}W.fitToSection&&(clearTimeout(Un),Un=setTimeout(function(){zn&&W.fitToSection&&(e(x).is(n)&&requestAnimFrame(function(){Rn=!0}),we(n),Rn=!1)},W.fitToSectionDelay))}}function ce(e){return e.find(P).length?e.find(z).find(r):e.find(r)}function fe(e,n){if(Pn.m[e]){var o,t;if("down"==e?(o="bottom",t=bn.moveSectionDown):(o="top",t=bn.moveSectionUp),n.length>0){if(!Ye(o,n))return!0;t()}else t()}}function de(n){var o=n.originalEvent;if(!ue(n.target)&&he(o)){W.autoScrolling&&n.preventDefault();var i=e(x),a=ce(i);if(zn&&!Ln){var s=un(o);jn=s.y,Qn=s.x,i.find(P).length&&t.abs(Xn-Qn)>t.abs(Kn-jn)?t.abs(Xn-Qn)>$.width()/100*W.touchSensitivity&&(Xn>Qn?Pn.m.right&&bn.moveSlideRight():Pn.m.left&&bn.moveSlideLeft()):W.autoScrolling&&t.abs(Kn-jn)>$.height()/100*W.touchSensitivity&&(Kn>jn?fe("down",a):jn>Kn&&fe("up",a))}}}function ue(n,o){o=o||0;var t=e(n).parent();return o<W.normalScrollElementTouchThreshold&&t.is(W.normalScrollElements)?!0:o==W.normalScrollElementTouchThreshold?!1:ue(t,++o)}function he(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function pe(e){var n=e.originalEvent;if(W.fitToSection&&xn.stop(),he(n)){var o=un(n);Kn=o.y,Xn=o.x}}function ve(e,n){for(var o=0,i=e.slice(t.max(e.length-n,1)),a=0;a<i.length;a++)o+=i[a];return t.ceil(o/n)}function me(o){var i=(new Date).getTime();if(W.autoScrolling&&!An){o=o||n.event;var a=o.wheelDelta||-o.deltaY||-o.detail,s=t.max(-1,t.min(1,a));In.length>149&&In.shift(),In.push(t.abs(a)),W.scrollBar&&(o.preventDefault?o.preventDefault():o.returnValue=!1);var l=e(x),r=ce(l),c=i-_n;if(_n=i,c>200&&(In=[]),zn){var f=ve(In,10),d=ve(In,70),u=f>=d;u&&(0>s?fe("down",r):fe("up",r))}return!1}W.fitToSection&&xn.stop()}function ge(n){var o=e(x),t=o.find(P),i=t.find(q).length;if(!(!t.length||Ln||2>i)){var a=t.find(z),s=null;if(s="prev"===n?a.prev(q):a.next(q),!s.length){if(!W.loopHorizontal)return;s="prev"===n?a.siblings(":last"):a.siblings(":first")}Ln=!0,qe(t,s)}}function Se(){e(z).each(function(){hn(e(this),"internal")})}function we(n,o,t){requestAnimFrame(function(){var i=n.position();if("undefined"!=typeof i){var a=n.hasClass(A)?i.top-Fn+n.height():i.top,s={element:n,callback:o,isMovementUp:t,dest:i,dtop:a,yMovement:We(n),anchorLink:n.data("anchor"),sectionIndex:n.index(y),activeSlide:n.find(z),activeSection:e(x),leavingSection:e(x).index(y)+1,localIsResizing:Rn};if(!(s.activeSection.is(n)&&!Rn||W.scrollBar&&$.scrollTop()===s.dtop&&!n.hasClass(A))){if(s.activeSlide.length)var l=s.activeSlide.data("anchor"),r=s.activeSlide.index();if(W.autoScrolling&&W.continuousVertical&&"undefined"!=typeof s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=Te(s)),e.isFunction(W.onLeave)&&!s.localIsResizing){if(W.onLeave.call(s.activeSection,s.leavingSection,s.sectionIndex+1,s.yMovement)===!1)return;Le(s.activeSection)}n.addClass(m).siblings().removeClass(m),ke(n),zn=!1,nn(r,l,s.anchorLink,s.sectionIndex),ye(s),Cn=s.anchorLink,Ue(s.anchorLink,s.sectionIndex)}}})}function ye(n){if(W.css3&&W.autoScrolling&&!W.scrollBar){var o="translate3d(0px, -"+n.dtop+"px, 0px)";_e(o,!0),W.scrollingSpeed?Hn=setTimeout(function(){Ce(n)},W.scrollingSpeed):Ce(n)}else{var t=xe(n);e(t.element).animate(t.options,W.scrollingSpeed,W.easing).promise().done(function(){Ce(n)})}}function xe(e){var n={};return W.autoScrolling&&!W.scrollBar?(n.options={top:-e.dtop},n.element=s):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Te(n){return n.isMovementUp?e(x).before(n.activeSection.nextAll(y)):e(x).after(n.activeSection.prevAll(y).get().reverse()),pn(e(x).position().top),Se(),n.wrapAroundElements=n.activeSection,n.dest=n.element.position(),n.dtop=n.dest.top,n.yMovement=We(n.element),n}function be(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(T).before(n.wrapAroundElements):e(b).after(n.wrapAroundElements),pn(e(x).position().top),Se())}function Ce(n){be(n),n.element.find(".fp-scrollable").mouseover(),bn.setFitToSection(!n.element.hasClass(A)),e.isFunction(W.afterLoad)&&!n.localIsResizing&&W.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),Ae(n.element),zn=!0,e.isFunction(n.callback)&&n.callback.call(this)}function ke(n){var o=n.find(z);o.length&&(n=e(o)),n.find("img[data-src], source[data-src], audio[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src"),e(this).is("source")&&e(this).closest("video").get(0).load()})}function Ae(n){n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("autoplay")&&"function"==typeof n.play&&n.play()})}function Le(n){n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-ignore")||"function"!=typeof n.pause||n.pause()})}function Ee(){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1];o&&Ze(o,t)}function Be(){if(!Nn&&!W.lockAnchors){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1];if(o.length){var i="undefined"==typeof Cn,a="undefined"==typeof Cn&&"undefined"==typeof t&&!Ln;(o&&o!==Cn&&!i||a||!Ln&&kn!=t)&&Ze(o,t)}}}function Me(n){clearTimeout(Yn);var o=e(":focus");if(!o.is("textarea")&&!o.is("input")&&!o.is("select")&&W.keyboardScrolling&&W.autoScrolling){var t=n.which,i=[40,38,32,33,34];e.inArray(t,i)>-1&&n.preventDefault(),An=n.ctrlKey,Yn=setTimeout(function(){Fe(n)},150)}}function Fe(n){var o=n.shiftKey;switch(n.which){case 38:case 33:Pn.k.up&&bn.moveSectionUp();break;case 32:if(o&&Pn.k.up){bn.moveSectionUp();break}case 40:case 34:Pn.k.down&&bn.moveSectionDown();break;case 36:Pn.k.up&&bn.moveTo(1);break;case 35:Pn.k.down&&bn.moveTo(e(y).length);break;case 37:Pn.k.left&&bn.moveSlideLeft();break;case 39:Pn.k.right&&bn.moveSlideRight();break;default:return}}function Re(e){zn&&(e.pageY<Gn?bn.moveSectionUp():e.pageY>Gn&&bn.moveSectionDown()),Gn=e.pageY}function qe(n,o){var i=o.position(),a=o.index(),s=n.closest(y),l=s.index(y),r=s.data("anchor"),c=s.find(U),f=tn(o),d=Rn;if(W.onSlideLeave){var u=s.find(z),h=u.index(),p=Ne(h,a);if(!d&&"none"!==p&&e.isFunction(W.onSlideLeave)&&W.onSlideLeave.call(u,r,l+1,h,p,a)===!1)return void(Ln=!1)}o.addClass(m).siblings().removeClass(m),d||ke(o),!W.loopHorizontal&&W.controlArrows&&(s.find(Q).toggle(0!==a),s.find(Z).toggle(!o.is(":last-child"))),s.hasClass(m)&&nn(a,f,r,l);var v=function(){d||e.isFunction(W.afterSlideLoad)&&W.afterSlideLoad.call(o,r,l+1,f,a),Ln=!1};if(W.css3){var S="translate3d(-"+t.round(i.left)+"px, 0px, 0px)";Pe(n.find(H),W.scrollingSpeed>0).css(vn(S)),On=setTimeout(function(){v()},W.scrollingSpeed,W.easing)}else n.animate({scrollLeft:t.round(i.left)},W.scrollingSpeed,W.easing,function(){v()});c.find(g).removeClass(m),c.find("li").eq(a).find("a").addClass(m)}function ze(){if(Ie(),En){var n=e(o.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=$.height();t.abs(i-Jn)>20*t.max(Jn,i)/100&&(bn.reBuild(!0),Jn=i)}}else clearTimeout(Dn),Dn=setTimeout(function(){bn.reBuild(!0)},350)}function Ie(){var e=W.responsive||W.responsiveWidth,n=W.responsiveHeight;if(e&&bn.setResponsive($.width()<e),n){var o=Mn.hasClass(d);o||bn.setResponsive($.height()<n)}}function Pe(e){var n="all "+W.scrollingSpeed+"ms "+W.easingcss3;return e.removeClass(u),e.css({"-webkit-transition":n,transition:n})}function De(e){return e.addClass(u)}function He(e,n){var o=825,i=900;if(o>e||i>n){var a=100*e/o,s=100*n/i,l=t.min(a,s),r=l.toFixed(2);Tn.css("font-size",r+"%")}else Tn.css("font-size","100%")}function Oe(n,o){W.navigation&&(e(E).find(g).removeClass(m),n?e(E).find('a[href="#'+n+'"]').addClass(m):e(E).find("li").eq(o).find("a").addClass(m))}function Ve(n){W.menu&&(e(W.menu).find(g).removeClass(m),e(W.menu).find('[data-menuanchor="'+n+'"]').addClass(m))}function Ue(e,n){Ve(e),Oe(e,n)}function Ye(e,n){return"top"===e?!n.scrollTop():"bottom"===e?n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0}function We(n){var o=e(x).index(y),t=n.index(y);return o==t?"none":o>t?"up":"down"}function Ne(e,n){return e==n?"none":e>n?"left":"right"}function Ke(e){e.css("overflow","hidden");var n,o=e.closest(y),t=e.find(r);t.length?n=t.get(0).scrollHeight:(n=e.get(0).scrollHeight,W.verticalCentered&&(n=e.find(k).get(0).scrollHeight));var i=Fn-parseInt(o.css("padding-bottom"))-parseInt(o.css("padding-top"));n>i?t.length?t.css("height",i+"px").parent().css("height",i+"px"):(W.verticalCentered?e.find(k).wrapInner('<div class="'+l+'" />'):e.wrapInner('<div class="'+l+'" />'),e.find(r).slimScroll({allowPageScroll:!0,height:i+"px",size:"10px",alwaysVisible:!0})):Xe(e),e.css("overflow","")}function Xe(e){e.find(r).children().first().unwrap().unwrap(),e.find(c).remove(),e.find(f).remove()}function je(e){e.addClass(O).wrapInner('<div class="'+C+'" style="height:'+Qe(e)+'px;" />')}function Qe(e){var n=Fn;if(W.paddingTop||W.paddingBottom){var o=e;o.hasClass(w)||(o=e.closest(y));var t=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=Fn-t}return n}function _e(e,n){n?Pe(Mn):De(Mn),Mn.css(vn(e)),setTimeout(function(){Mn.removeClass(u)},10)}function Ge(n){var o=e(y+'[data-anchor="'+n+'"]');return o.length||(o=e(y).eq(n-1)),o}function Je(e,n){var o=n.find(P),t=o.find(q+'[data-anchor="'+e+'"]');return t.length||(t=o.find(q).eq(e)),t}function Ze(e,n){var o=Ge(e);"undefined"==typeof n&&(n=0),e===Cn||o.hasClass(m)?$e(o,n):we(o,function(){$e(o,n)})}function $e(e,n){if("undefined"!=typeof n){var o=e.find(P),t=Je(n,e);t.length&&qe(o,t)}}function en(e,n){e.append('<div class="'+V+'"><ul></ul></div>');var o=e.find(U);o.addClass(W.slidesNavPosition);for(var t=0;n>t;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass(m)}function nn(e,n,o,t){var i="";W.anchors.length&&!W.lockAnchors&&(e?("undefined"!=typeof o&&(i=o),"undefined"==typeof n&&(n=e),kn=n,on(i+"/"+n)):"undefined"!=typeof e?(kn=n,on(o)):on(o)),an()}function on(e){if(W.recordHistory)location.hash=e;else if(En||Bn)history.replaceState(i,i,"#"+e);else{var o=n.location.href.split("#")[0];n.location.replace(o+"#"+e)}}function tn(e){var n=e.data("anchor"),o=e.index();return"undefined"==typeof n&&(n=o),n}function an(){var n=e(x),o=n.find(z),t=n.data("anchor"),i=tn(o),a=n.index(y),s=String(a);W.anchors.length&&(s=t),o.length&&(s=s+"-"+i),s=s.replace("/","-").replace("#","");var l=new RegExp("\\b\\s?"+v+"-[^\\s]+\\b","g");Tn[0].className=Tn[0].className.replace(l,""),Tn.addClass(v+"-"+s)}function sn(){var e,t=o.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};o.body.insertBefore(t,null);for(var s in a)t.style[s]!==i&&(t.style[s]="translate3d(1px,1px,1px)",e=n.getComputedStyle(t).getPropertyValue(a[s]));return o.body.removeChild(t),e!==i&&e.length>0&&"none"!==e}function ln(){o.addEventListener?(o.removeEventListener("mousewheel",me,!1),o.removeEventListener("wheel",me,!1),o.removeEventListener("DOMMouseScroll",me,!1)):o.detachEvent("onmousewheel",me)}function rn(){o.addEventListener?(o.addEventListener("mousewheel",me,!1),o.addEventListener("wheel",me,!1),o.addEventListener("DOMMouseScroll",me,!1)):o.attachEvent("onmousewheel",me)}function cn(){if(En||Bn){var n=dn();e(s).off("touchstart "+n.down).on("touchstart "+n.down,pe),e(s).off("touchmove "+n.move).on("touchmove "+n.move,de)}}function fn(){if(En||Bn){var n=dn();e(s).off("touchstart "+n.down),e(s).off("touchmove "+n.move)}}function dn(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function un(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Bn&&he(e)&&W.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function hn(e,n){bn.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(Rn=!0),qe(e.closest(P),e),"undefined"!=typeof n&&(Rn=!1),bn.setScrollingSpeed(Wn.scrollingSpeed,"internal")}function pn(e){if(W.scrollBar)Mn.scrollTop(e);else if(W.css3){var n="translate3d(0px, -"+e+"px, 0px)";_e(n,!1)}else Mn.css("top",-e)}function vn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function mn(e,n,o){switch(n){case"up":Pn[o].up=e;break;case"down":Pn[o].down=e;break;case"left":Pn[o].left=e;break;case"right":Pn[o].right=e;break;case"all":"m"==o?bn.setAllowScrolling(e):bn.setKeyboardScrolling(e)}}function gn(){pn(0),e(E+", "+U+", "+N).remove(),e(y).css({height:"","background-color":"",padding:""}),e(q).css({width:""}),Mn.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),xn.css({overflow:"",height:""}),e("html").removeClass(p),e.each(Tn.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(v)&&Tn.removeClass(n)}),e(y+", "+q).each(function(){Xe(e(this)),e(this).removeClass(O+" "+m)}),De(Mn),Mn.find(k+", "+H+", "+P).each(function(){e(this).replaceWith(this.childNodes)}),xn.scrollTop(0)}function Sn(e,n,o){W[e]=n,"internal"!==o&&(Wn[e]=n)}function wn(){W.continuousVertical&&(W.loopTop||W.loopBottom)&&(W.continuousVertical=!1,yn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),W.scrollBar&&W.scrollOverflow&&yn("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),W.continuousVertical&&W.scrollBar&&(W.continuousVertical=!1,yn("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(W.anchors,function(n,o){(e("#"+o).length||e('[name="'+o+'"]').length)&&yn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}function yn(e,n){console&&console[e]&&console[e]("fullPage: "+n)}var xn=e("html, body"),Tn=e("body"),bn=e.fn.fullpage;W=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:S,slideSelector:F,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},W),wn(),e.extend(e.easing,{easeInOutCubic:function(e,n,o,t,i){return(n/=i/2)<1?t/2*n*n*n+o:t/2*((n-=2)*n*n+2)+o}}),e.extend(e.easing,{easeInQuart:function(e,n,o,t,i){return t*(n/=i)*n*n*n+o}}),bn.setAutoScrolling=function(n,o){Sn("autoScrolling",n,o);var t=e(x);W.autoScrolling&&!W.scrollBar?(xn.css({overflow:"hidden",height:"100%"}),bn.setRecordHistory(W.recordHistory,"internal"),Mn.css({"-ms-touch-action":"none","touch-action":"none"}),t.length&&pn(t.position().top)):(xn.css({overflow:"visible",height:"initial"}),bn.setRecordHistory(!1,"internal"),Mn.css({"-ms-touch-action":"","touch-action":""}),pn(0),t.length&&xn.scrollTop(t.position().top))},bn.setRecordHistory=function(e,n){Sn("recordHistory",e,n)},bn.setScrollingSpeed=function(e,n){Sn("scrollingSpeed",e,n)},bn.setFitToSection=function(e,n){Sn("fitToSection",e,n)},bn.setLockAnchors=function(e){W.lockAnchors=e},bn.setMouseWheelScrolling=function(e){e?rn():ln()},bn.setAllowScrolling=function(n,o){"undefined"!=typeof o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){mn(n,o,"m")})):n?(bn.setMouseWheelScrolling(!0),cn()):(bn.setMouseWheelScrolling(!1),fn())},bn.setKeyboardScrolling=function(n,o){"undefined"!=typeof o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){mn(n,o,"k")})):W.keyboardScrolling=n},bn.moveSectionUp=function(){var n=e(x).prev(y);n.length||!W.loopTop&&!W.continuousVertical||(n=e(y).last()),n.length&&we(n,null,!0)},bn.moveSectionDown=function(){var n=e(x).next(y);n.length||!W.loopBottom&&!W.continuousVertical||(n=e(y).first()),n.length&&we(n,null,!1)},bn.silentMoveTo=function(e,n){requestAnimFrame(function(){bn.setScrollingSpeed(0,"internal")}),bn.moveTo(e,n),requestAnimFrame(function(){bn.setScrollingSpeed(Wn.scrollingSpeed,"internal")})},bn.moveTo=function(e,n){var o=Ge(e);"undefined"!=typeof n?Ze(e,n):o.length>0&&we(o)},bn.moveSlideRight=function(){ge("next")},bn.moveSlideLeft=function(){ge("prev")},bn.reBuild=function(n){if(!Mn.hasClass(h)){requestAnimFrame(function(){Rn=!0});var o=$.width();Fn=$.height(),W.resize&&He(Fn,o),e(y).each(function(){var n=e(this).find(P),o=e(this).find(q);W.verticalCentered&&e(this).find(k).css("height",Qe(e(this))+"px"),e(this).css("height",Fn+"px"),W.scrollOverflow&&(o.length?o.each(function(){Ke(e(this))}):Ke(e(this))),o.length>1&&qe(n,n.find(z))});var t=e(x),i=t.index(y);i&&bn.silentMoveTo(i+1),requestAnimFrame(function(){Rn=!1}),e.isFunction(W.afterResize)&&n&&W.afterResize.call(Mn),e.isFunction(W.afterReBuild)&&!n&&W.afterReBuild.call(Mn)}},bn.setResponsive=function(n){var o=Mn.hasClass(d);n?o||(bn.setAutoScrolling(!1,"internal"),bn.setFitToSection(!1,"internal"),e(E).hide(),Mn.addClass(d)):o&&(bn.setAutoScrolling(Wn.autoScrolling,"internal"),bn.setFitToSection(Wn.autoScrolling,"internal"),e(E).show(),Mn.removeClass(d))};var Cn,kn,An,Ln=!1,En=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Bn="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Mn=e(this),Fn=$.height(),Rn=!1,qn=!0,zn=!0,In=[],Pn={};Pn.m={up:!0,down:!0,left:!0,right:!0},Pn.k=e.extend(!0,{},Pn.m);var Dn,Hn,On,Vn,Un,Yn,Wn=e.extend(!0,{},W);e(this).length&&X();var Nn=!1;$.on("scroll",re);var Kn=0,Xn=0,jn=0,Qn=0,_n=(new Date).getTime();n.requestAnimFrame=function(){return n.requestAnimationFrame||function(e){e()}}(),$.on("hashchange",Be),ee.keydown(Me),ee.keyup(function(e){qn&&(An=e.ctrlKey)}),e(n).blur(function(){qn=!1,An=!1});var Yn;Mn.mousedown(function(e){2==e.which&&(Gn=e.pageY,Mn.on("mousemove",Re))}),Mn.mouseup(function(e){2==e.which&&Mn.off("mousemove")});var Gn=0;ee.on("click touchstart",E+" a",function(n){n.preventDefault();var o=e(this).parent().index();we(e(y).eq(o))}),ee.on("click touchstart",Y,function(n){n.preventDefault();var o=e(this).closest(y).find(P),t=o.find(q).eq(e(this).closest("li").index());qe(o,t)}),W.normalScrollElements&&(ee.on("mouseenter",W.normalScrollElements,function(){bn.setMouseWheelScrolling(!1)}),ee.on("mouseleave",W.normalScrollElements,function(){bn.setMouseWheelScrolling(!0)})),e(y).on("click touchstart",N,function(){e(this).hasClass(K)?Pn.m.left&&bn.moveSlideLeft():Pn.m.right&&bn.moveSlideRight()}),$.resize(ze);var Jn=Fn;bn.destroy=function(n){bn.setAutoScrolling(!1,"internal"),bn.setAllowScrolling(!1),bn.setKeyboardScrolling(!1),Mn.addClass(h),clearTimeout(On),clearTimeout(Hn),clearTimeout(Dn),clearTimeout(Vn),clearTimeout(Un),$.off("scroll",re).off("hashchange",Be).off("resize",ze),ee.off("click",E+" a").off("mouseenter",E+" li").off("mouseleave",E+" li").off("click",Y).off("mouseover",W.normalScrollElements).off("mouseout",W.normalScrollElements),e(y).off("click",N),clearTimeout(On),clearTimeout(Hn),n&&gn()}}});