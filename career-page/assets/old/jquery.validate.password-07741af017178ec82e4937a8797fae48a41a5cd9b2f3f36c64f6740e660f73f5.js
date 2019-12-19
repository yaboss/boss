/*
 * jQuery validate.password plug-in 1.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validate.password/
 *
 * Copyright (c) 2009 Jörn Zaefferer
 *
 * $Id$
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
!function(s){function e(s,e){return{rate:s,messageKey:e}}function a(s){return s.substring(0,1).toLowerCase()+s.substring(1)}var r=/[a-z]/,t=/[A-Z]/,o=/[0-9]/,d=/[0-9].*[0-9]/,n=/[^a-zA-Z0-9]/,i=/^(.)\1+$/;s.validator.passwordRating=function(s,m){if(!s||s.length<8)return e(0,"too-short");if(m&&s.toLowerCase().match(m.toLowerCase()))return e(0,"similar-to-username");if(i.test(s))return e(1,"very-weak");var g=r.test(s),w=t.test(a(s)),l=o.test(s),u=d.test(s),p=n.test(s);return g&&w&&l||g&&u||w&&u||p?e(4,"strong"):g&&w||g&&l||w&&l?e(3,"good"):e(2,"weak")},s.validator.passwordRating.messages={"similar-to-username":"Too similar to username","too-short":"Too short","very-weak":"Very weak",weak:"Weak",good:"Good",strong:"Strong"},s.validator.addMethod("password",function(e,a,r){var t=a.value,o=s("boolean"!=typeof r?r:[]),d=s.validator.passwordRating(t,o.val()),n=s(".password-meter",a.form);return n.find(".password-meter-bar").removeClass().addClass("password-meter-bar").addClass("password-meter-"+d.messageKey),n.find(".password-meter-message").removeClass().addClass("password-meter-message").addClass("password-meter-message-"+d.messageKey).text(s.validator.passwordRating.messages[d.messageKey]),d.rate>2},"&nbsp;"),s.validator.classRuleSettings.password={password:!0}}(jQuery);