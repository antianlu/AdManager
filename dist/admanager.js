// athleticsnyc.com - 2014-10-07
var admanager=function(a){return"undefined"==typeof a.initialized&&(a.initialized=!1),a.bootstrap=function(){function b(b){if(a.initialized)return!1;if(admanager.config=b||!1,!admanager.config)throw new Error("Please provide config");e=jQuery,a.util.init().events.init().manager.init().insertion.init(),f=admanager.util.debug?admanager.util.debug:function(){};for(var c=0;c<g.length;c++)g[c]();return f(d+": initialized"),a.initialized=!0,a}function c(a){g.push(a)}var d="Bootstrap",e=null,f=null,g=[];return{init:b,register:c}}(),a}(admanager||{}),admanager=function(a,b){return a.events=function(b){function c(){return f=admanager.util.debug?admanager.util.debug:function(){},f(e+": initialized"),d(),a}function d(){b(document).on("scroll",function(){window.requestAnimationFrame(function(){b.event.trigger("GPT:scroll"),b.event.trigger("GPT:updateUI")})}).on("resize",function(){window.requestAnimationFrame(function(){b.event.trigger("GPT:resize"),b.event.trigger("GPT:updateUI")})})}var e="Events",f=null;return{init:c}}(b),a}(admanager||{},jQuery),admanager=function(a,b){return a.insertion=function(b){function c(){return o=admanager.util.debug?admanager.util.debug:function(){},o(n+": initialized"),p=b(a.config.insertion_selector).first(),p.length<1?(d(),a):(q=a.manager.get_dynamic_inventory(),e(),a)}function d(){b.event.trigger("GPT:unitsInserted")}function e(){f(),i(),j(),d()}function f(){var a=p.children(),c=["img","iframe","video","audio",".video",".audio",".app_ad_unit"];a.each(function(d){var e=b(this),f=d>0?a.eq(d-1):!1,g=!0;b.each(c,function(a,b){return e.is(b)||e.find(b).length>0?(g=!1,!1):void 0}),f&&f.is("p")&&1===f.find("img").length&&(g=!1),e.data("valid-location",g)})}function g(a){return a.data("valid-location")}function h(a,b){b=b||!1;var c=admanager.util.is_mobile()?"mobile":"desktop",d=s?"odd":"even",e='<div class="app_ad_unit in_content '+d+" "+c+'" data-type="'+a+'"></div>',f='<div class="app_ad_unit disable_float '+c+'" data-type="'+a+'"></div>';return b||(s=!s),b?f:e}function i(){var a=l({limit:1e3}),b=k(),c=h(b.type,a.disable_float);a.$insert_before.before(c)}function j(){b.each(q,function(a,b){var c=l(),d=null;return c?(d=h(b.type,c.disable_float),void c.$insert_before.before(d)):!1})}function k(){var a=!1;return b.each(q,function(b,c){return c.primary===!0?(a=c,q.remove(b),!1):void 0}),a||(a=q[0],q.remove(0)),a}function l(a){a=a||{};var c=m(),d=null,e=[],f=0,h=0,i=a.limit?a.limit:!1,j=560,k=800,l=!1,n=!1;return c.length<1?!1:(c.each(function(a){var m=b(this),o=(a>0?c.eq(a-1):!1,m.offset().top),p=o-r,q=m.outerHeight(),s=c.length-1===a;if(f+=q,i&&(f>=i||s))return d=m,n=!0,l=!0,!1;if(g(m)){if(h+=q,e.push(m),null===d&&(d=m),h>=j)return i===!1&&k>p?(h=0,d=null,!0):(l=!0,!1)}else h=0,d=null}),l?(e.length>0&&b.each(e,function(a,c){b(c).data("valid-location",!1)}),r=d.offset().top+j,{$insert_before:d,disable_float:n}):!1)}function m(){var a=p.find(".app_ad_unit").last(),b=null;return b=a.length>0?a.nextAll(p):p.children()}var n="Insertion",o=null,p=null,q=[],r=0,s=!0;return{init:c}}(b),a}(admanager||{},jQuery),admanager=function(a,b){return a.manager=function(b){function c(){return w=admanager.util.debug?admanager.util.debug:function(){},w(v+": initialized"),z=e(a.config.inventory),A=a.config.account,B="undefined"!=typeof a.config.has_mobile_ads?a.config.has_mobile_ads:B,d(),a}function d(){b(document).on("GPT:unitsInserted",function(){w(v+": GPT:unitsInserted"),f()}).on("GPT:libraryLoaded",function(){w(v+": GPT:libraryLoaded"),h(),i(),j(),k(),m()}).on("GPT:slotsDefined",function(){w(v+": GPT:slotsDefined"),n()})}function e(b){var c=window.innerWidth>0?window.innerWidth:screen.width;if(c>1024)return b;if(c>=768&&1024>=c)for(var d=980,e=0;e<b.length;e++){for(var f=[],g=0;g<b[e].sizes.length;g++)b[e].sizes[g][0]>d&&f.push(b[e].sizes[g]);b[e].sizes=a.util.difference(b[e].sizes,f)}return b}function f(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[];var a="https:"===document.location.protocol,b=(a?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";$LAB.script(b).wait(function(){g()})}function g(){googletag.cmd.push(function(){b.event.trigger("GPT:libraryLoaded")})}function h(){googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(a){o(a)})})}function i(){googletag.cmd.push(function(){googletag.pubads().collapseEmptyDivs(),googletag.pubads().enableSingleRequest(),googletag.pubads().disableInitialLoad()})}function j(){googletag.cmd.push(function(){var c=a.util.page_config(),d=c.targeting;"undefined"!=typeof d&&b.each(d,function(a,b){googletag.pubads().setTargeting(a,b)})})}function k(){a.util.is_mobile()&&B||l()}function l(){var a=b(".app_ad_unit");a.each(function(){var a=b(this),c=a.data("type");y.push(c)})}function m(){var a=null;googletag.cmd.push(function(){for(var c=0;c<y.length;c++){if(p(y[c]),a=q(y[c]),"undefined"==typeof a.type)return;var d=b('.app_ad_unit[data-type="'+a.type+'"]');if(d.length<1)return;d.html('<div class="app_unit_target" id="'+a.id_name+'"></div>'),d.addClass("active"),x[c]=googletag.defineSlot("/"+A+"/"+a.slot,a.sizes,a.id_name).addService(googletag.pubads())}googletag.enableServices(),b.event.trigger("GPT:slotsDefined")})}function n(){googletag.cmd.push(function(){googletag.pubads().refresh(x);for(var a=0;a<y.length;a++)current_position=q(y[a]),b("#"+current_position.id_name).length>0&&googletag.display(current_position.id_name)})}function o(a){var c=a.slot.getAdUnitPath().replace("/"+A+"/","");b.event.trigger("GPT:adUnitRendered",{name:c,size:a.size})}function p(a){for(var b=0;b<z.length;b++)if(z[b].type===a||z[b].slot===a)return"undefined"==typeof z[b].iteration&&(z[b].iteration=0),void(z[b].iteration=z[b].iteration+1)}function q(a){for(var b={},c=0;c<z.length;c++)if(z[c].type===a||z[c].slot===a)return b=z[c],b.id_name="undefined"==typeof b.use_iterator||b.use_iterator?b.type+"_"+b.iteration:b.type,b;return b}function r(a){var c=null;return b.each(x,function(b,d){var e=d.getAdUnitPath().replace("/"+A+"/","");return e===a?(c=d,!1):void 0}),c}function s(a){googletag.cmd.push(function(){var b=q(a),c=r(b.slot);googletag.pubads().refresh([c]),googletag.display(b.id_name),t(b.slot)})}function t(a){b.each(x,function(b,c){var d=c.getAdUnitPath().replace("/"+A+"/","");d===a&&x.remove(b)})}function u(){var a=[];return b.each(z,function(b,c){c.dynamic===!0&&a.push(c)}),a}var v="Manager",w=null,x=[],y=[],z=[],A=null,B=!0;return{init:c,get_ad_info:q,display_slot:s,remove_defined_slot:t,get_dynamic_inventory:u}}(b),a}(admanager||{},jQuery),admanager=function(a,b){return a.util=function(b){function c(){return d(j+": initialized"),h(),g(),a}function d(a){k&&"object"==typeof console&&console.log&&console.log(a)}function e(a,c){var d=[];return b.grep(a,function(a){-1===b.inArray(a,c)&&d.push(a)}),d}function f(){return b(window).width()<768?!0:!1}function g(){window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame}function h(){Array.prototype.remove=function(a,b){var c=this.slice((b||a)+1||this.length);return this.length=0>a?this.length+a:a,this.push.apply(this,c)}}function i(){return{}}var j="Util",k=!1;return{init:c,debug:d,difference:e,is_mobile:f,page_config:i}}(b),a}(admanager||{},jQuery);
window.adManager = admanager.bootstrap.init;