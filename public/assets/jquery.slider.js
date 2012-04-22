// jQuery Sliders
// by Spencer Steffen
// Citrus Media Group
// spencer@citrusme.com
(function(a){var b="0.3.1";a.fn.sliders=function(){var b=arguments;return a.isReady?this.each(function(){function o(){if(c)return c;var b=f.width(),d=f.height(),e=f.css("position");return(!e||!e.match(/relative|absolute/))&&f.css("position","relative"),f.css({display:"block",overflow:"hidden"}).wrapInner('<div class="slider"></div>'),a("div.slider",f).css({display:"block",position:"absolute",left:0,top:0})}function p(){return c?c.children().get():f.children().get()}function q(){return j?"playing":"paused"}function r(){var b=f.width(),e=f.height();a(g).css({display:"block",position:"absolute",left:0,top:0,width:b});switch(i.transition){case"slide":c.css({width:b*g.length,height:e,left:-b*d}),a(g).each(function(c,d){a(d).css({opacity:1,left:b*c,zIndex:g.length-c})});break;default:c.css({width:b,height:e}),a(g).css({opacity:0,zIndex:0}),a(g[0]).css({opacity:1,zIndex:g.length})}return a(g)}function s(b){a(c).trigger(b,[d,q()])}function t(a,b){switch(a){case"play":u();break;case"stop":case"pause":v();break;case"toggle":w();break;case"prev":case"previous":v(),y();break;case"next":v(),x();break;case"goto":case"go to":v();var c=0;if(b!=null&&b.constructor===String)switch(b){case"next":c=F(1);break;case"prev":c=F(-1);break;case"last":case"end":case"finish":c=g.length-1;break;case"first":case"start":default:c=Number(b.replace(/[^0-9]/g,""))}else c=Number(b);z(c);break;case"advance":v(),F(b||1),D();break;case"enableKeyboard":A();break;case"disableKeyboard":B();break;case"toggleKeyboard":C();break;case"show":b===!1?f.css("display","block"):f.fadeIn(),i.play&&u(),i.keyboardEvents&&A();break;case"hide":v(),B(),b===!1?f.css("display","none"):f.fadeOut()}}function u(){if(j)return;j=setInterval(x,i.delay),s("play")}function v(){j&&(j=clearTimeout(j)),s("pause")}function w(){j?v():u()}function x(){if(l||g.length<a.fn.sliders.minimum.slides)return;h=d,F(1),D()}function y(){if(l||g.length<a.fn.sliders.minimum.slides)return;h=d,F(-1),D()}function z(b){if(g.length<a.fn.sliders.minimum.slides)return;h=d,d=G(b),c.data("index",d),D()}function A(){if(k)return!1;a(window).bind("keyup."+e,f,a.fn.sliders.handleKeyboard),k=!0}function B(){if(!k)return!1;a(window).unbind("keyup."+e,a.fn.sliders.handleKeyboard),k=!1}function C(){k?B():A()}function D(){if(m)n.cancel();else if(l)return;switch(i.transition){case"slide":n.slide();break;case"fade":n.fade();break;default:n.none()}n.update(!0),s("change"),i.allowCue||n.lock(!0)}function E(){return{none:function(){var b=a(g[h]),c=a(g[d]);b.css({opacity:0,zIndex:0,display:"none"}),c.css({opacity:1,zIndex:g.length,display:"block"})},slide:function(){c.animate({left:-f.width()*d},i.speed,i.ease)},fade:function(){var b=a(g[h]),c=a(g[d]);b.css({zIndex:g.length-1}),c.css({opacity:0,zIndex:g.length}),b.animate({opacity:0},i.speed,i.ease),c.animate({opacity:1},i.speed,i.ease)},cancel:function(){switch(i.transition){case"slide":c.stop(!0);break;case"fade":var b=a(g[h]),e=a(g[d]);b.stop(!0).css({opacity:0,"z-index":0}),e.stop(!0);break;default:}},lock:function(a){if(c.data("locked"))return;c.data("locked",!0),a&&setTimeout(n.unlock,i.speed)},unlock:function(){c.data("locked",!1)},update:function(a){c.data("animating",a),a&&setTimeout(n.update,i.speed,!a)}}}function F(a){if(l)return d;var b=g.length,e=a<b?a:b-a%b;return d=G(d+e),c.data("index",d),d}function G(a){var b=g.length,c=a<b?a:b-a%b;return c<0?b+c:b<=c?c-b:c}var c,d,e=this.$id||a.fn.sliders.generateId(),f=a(this),c=this.slider||o(),g=p(),h=this.lastIndex||0,d=c.data("index")||0,i=this.options=a.extend(!1,this.options||a.fn.sliders.defaults,b[0]&&b[0].constructor==Object?b[0]:{}),j=this.delay||null,k=this.keyEnabled||!1,l=a(c).data("locked")||!1,m=a(c).data("animating")||!1,n=E();if(!this.hasInit){r(),g.length<a.fn.sliders.minimum.slides&&a.fn.sliders.errors.minimum(g.length),i.delay<a.fn.sliders.minimum.delay&&(i.delay=a.fn.sliders.errors.delay(i.delay)),i.speed<a.fn.sliders.minimum.speed&&(i.speed=a.fn.sliders.errors.speed(i.speed)),F(Number(i.first));if(!b[0]||b[0].constructor!=String)i.play&&u(),i.keyboardEvents&&A();this.hasInit=!0}return b[0]&&b[0].constructor==String&&t(b[0],b[1]),this.$id=e,this.slider=c,this.options=i,this.lastIndex=h,this.delay=j,this.keyEnabled=k,this.locked=l,this}):a.fn.sliders.errors.dom()},a.fn.sliders.handleKeyboard=function(b){switch(b.keyCode){case 39:case 40:a(b.data).sliders("next");break;case 37:case 38:a(b.data).sliders("prev");break;case 32:a(b.data).sliders("toggle")}},a.fn.sliders.errors={dom:function(){a.fn.sliders.errors.show("Sliders::DOM not ready, quiting slideshow")},minimum:function(b){a.fn.sliders.errors.show("Sliders::Not enough slides. "+b+"/"+a.fn.sliders.minimum.slides)},delay:function(b){return a.fn.sliders.errors.show("Sliders::Delay to slow. ("+speed+"ms) minimum "+a.fn.sliders.minimum.delay),a.fn.sliders.minimum.delay},speed:function(b){return a.fn.sliders.errors.show("Sliders::Speed to slow. ("+b+"ms) minimum "+a.fn.sliders.minimum.speed),a.fn.sliders.minimum.speed},show:function(a){return window.console&&window.console.log&&window.console.log(a),this}},a.fn.sliders.generateId=function(){return Math.round((new Date).getTime()*Math.random())},a.fn.sliders.minimum={slides:2,delay:500,speed:200},a.fn.sliders.defaults={transition:"slide",allowCue:!1,delay:5e3,speed:450,first:0,ease:"swing",play:!0,keyboardEvents:!0}})(jQuery)