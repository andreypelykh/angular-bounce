webpackJsonp([1],{0:function(t,a,e){t.exports=e("cDNt")},cDNt:function(t,a,e){"use strict";function n(t){return"__esModule"!==t}function i(t,a){return Object(m.transition)("* => "+t,[Object(m.useAnimation)(a[t])])}Object.defineProperty(a,"__esModule",{value:!0});var o=e("/oeL"),s=e("Qa4U"),r=e("fc+i"),f=e("fL27"),m=e("EyWH"),c=e("dRHf"),l=function(t){return Object.getOwnPropertyNames(t).filter(n)}(c),d=function(t,a){return t.map(function(t){return i(t,a)})}(l,c),y=this&&this.__decorate||function(t,a,e,n){var i,o=arguments.length,s=o<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,a,e,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(o<3?i(s):o>3?i(a,e,s):i(a,e))||s);return o>3&&s&&Object.defineProperty(a,e,s),s},p=this&&this.__metadata||function(t,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,a)},u=function(){function t(){this.title="app",this.state="inactive"}return t.prototype.ngOnInit=function(){this.states=l},t.prototype.setState=function(t){this.state=t},t.prototype.onBtnClick=function(t){this.setState(t)},t.prototype.animationDone=function(t){console.log(t),console.log(this.state),t.toState===this.state&&this.setState("inactive")},t}();u=y([Object(o.n)({selector:"app-root",template:e("efyd"),styles:[e("hxJY")],animations:[Object(m.trigger)("animationState",d)]}),p("design:paramtypes",[])],u);var b=this&&this.__decorate||function(t,a,e,n){var i,o=arguments.length,s=o<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,a,e,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(o<3?i(s):o>3?i(a,e,s):i(a,e))||s);return o>3&&s&&Object.defineProperty(a,e,s),s},g=function(){function t(){}return t}();g=b([Object(o.L)({declarations:[u],imports:[r.a,f.a],providers:[],bootstrap:[u]})],g),{production:!0}.production&&Object(o._19)(),Object(s.a)().bootstrapModule(g).catch(function(t){return console.log(t)})},dRHf:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("EyWH");a.BOUNCE=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:0}),n.style({transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:.2}),n.style({transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",transform:"translate3d(0, -30px, 0)",offset:.4}),n.style({transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",transform:"translate3d(0, -30px, 0)",offset:.43}),n.style({transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:.53}),n.style({transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",transform:"translate3d(0, -15px, 0)",offset:.7}),n.style({transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:.8}),n.style({transformOrigin:"center bottom",transform:"translate3d(0, -4px, 0)",offset:.9}),n.style({transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:1})])),{params:{duration:"1s"}}),a.FLASH=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,offset:.25}),n.style({opacity:1,offset:.5}),n.style({opacity:0,offset:.75}),n.style({opacity:1,offset:1})])),{params:{duration:"1s"}}),a.HEAD_SHAKE=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({animationTimingFunction:"ease-in-out",transform:"translateX(0)",offset:0}),n.style({animationTimingFunction:"ease-in-out",transform:"translateX(-6px) rotateY(-9deg)",offset:.065}),n.style({animationTimingFunction:"ease-in-out",transform:"translateX(5px) rotateY(7deg)",offset:.185}),n.style({animationTimingFunction:"ease-in-out",transform:"translateX(-3px) rotateY(-5deg)",offset:.315}),n.style({animationTimingFunction:"ease-in-out",transform:"translateX(2px) rotateY(3deg)",offset:.435}),n.style({animationTimingFunction:"ease-in-out",transform:"translateX(0)",offset:.5})])),{params:{duration:"1s"}}),a.JELLO=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transformOrigin:"center",transform:"none",offset:0}),n.style({transformOrigin:"center",transform:"none",offset:.111}),n.style({transformOrigin:"center",transform:"skewX(-12.5deg) skewY(-12.5deg)",offset:.222}),n.style({transformOrigin:"center",transform:"skewX(6.25deg) skewY(6.25deg)",offset:.333}),n.style({transformOrigin:"center",transform:"skewX(-3.125deg) skewY(-3.125deg)",offset:.444}),n.style({transformOrigin:"center",transform:"skewX(1.5625deg) skewY(1.5625deg)",offset:.555}),n.style({transformOrigin:"center",transform:"skewX(-0.78125deg) skewY(-0.78125deg)",offset:.666}),n.style({transformOrigin:"center",transform:"skewX(0.390625deg) skewY(0.390625deg)",offset:.777}),n.style({transformOrigin:"center",transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)",offset:.888}),n.style({transformOrigin:"center",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.PULSE=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"scale3d(1, 1, 1)",offset:0}),n.style({transform:"scale3d(1.05, 1.05, 1.05)",offset:.5}),n.style({transform:"scale3d(1, 1, 1)",offset:1})])),{params:{duration:"1s"}}),a.RUBBER_BAND=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"scale3d(1, 1, 1)",offset:0}),n.style({transform:"scale3d(1.25, 0.75, 1)",offset:.3}),n.style({transform:"scale3d(0.75, 1.25, 1)",offset:.4}),n.style({transform:"scale3d(1.15, 0.85, 1)",offset:.5}),n.style({transform:"scale3d(.95, 1.05, 1)",offset:.65}),n.style({transform:"scale3d(1.05, .95, 1)",offset:.75}),n.style({transform:"scale3d(1, 1, 1)",offset:1})])),{params:{duration:"1s"}}),a.SHAKE=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"translate3d(0, 0, 0)",offset:0}),n.style({transform:"translate3d(-10px, 0, 0)",offset:.1}),n.style({transform:"translate3d(10px, 0, 0)",offset:.2}),n.style({transform:"translate3d(-10px, 0, 0)",offset:.3}),n.style({transform:"translate3d(10px, 0, 0)",offset:.4}),n.style({transform:"translate3d(-10px, 0, 0)",offset:.5}),n.style({transform:"translate3d(10px, 0, 0)",offset:.6}),n.style({transform:"translate3d(-10px, 0, 0)",offset:.7}),n.style({transform:"translate3d(10px, 0, 0)",offset:.8}),n.style({transform:"translate3d(-10px, 0, 0)",offset:.9}),n.style({transform:"translate3d(0, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.SWING=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transformOrigin:"top center",transform:"rotate3d(0, 0, 1, 15deg)",offset:.2}),n.style({transformOrigin:"top center",transform:"rotate3d(0, 0, 1, -10deg)",offset:.4}),n.style({transformOrigin:"top center",transform:"rotate3d(0, 0, 1, 5deg)",offset:.6}),n.style({transformOrigin:"top center",transform:"rotate3d(0, 0, 1, -5deg)",offset:.8}),n.style({transformOrigin:"top center",transform:"rotate3d(0, 0, 1, 0deg)",offset:1})])),{params:{duration:"1s"}}),a.TADA=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"scale3d(1, 1, 1)",offset:0}),n.style({transform:"scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",offset:.1}),n.style({transform:"scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",offset:.2}),n.style({transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",offset:.3}),n.style({transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",offset:.4}),n.style({transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",offset:.5}),n.style({transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",offset:.6}),n.style({transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",offset:.7}),n.style({transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",offset:.8}),n.style({transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",offset:.9}),n.style({transform:"scale3d(1, 1, 1)",offset:1})])),{params:{duration:"1s"}}),a.WOBBLE=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"none",offset:0}),n.style({transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",offset:.15}),n.style({transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",offset:.3}),n.style({transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",offset:.45}),n.style({transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",offset:.6}),n.style({transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",offset:.75}),n.style({transform:"none",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_IN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:0,transform:"scale3d(.3, .3, .3)",offset:0}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"scale3d(1.1, 1.1, 1.1)",offset:.2}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"scale3d(.9, .9, .9)",offset:.4}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:1,transform:"scale3d(1.03, 1.03, 1.03)",offset:.6}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"scale3d(.97, .97, .97)",offset:.8}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:1,transform:"scale3d(1, 1, 1)",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_IN_DOWN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:0,transform:"translate3d(0, -3000px, 0)",offset:0}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:1,transform:"translate3d(0, 25px, 0)",offset:.6}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0, -10px, 0)",offset:.75}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0, 5px, 0)",offset:.9}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_IN_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:0,transform:"translate3d(-3000px, 0,  0)",offset:0}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:1,transform:"translate3d(25px, 0, 0)",offset:.6}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(-10px, 0, 0)",offset:.75}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(5px, 0, 0)",offset:.9}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_IN_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:0,transform:"translate3d(3000px, 0,  0)",offset:0}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:1,transform:"translate3d(-25px, 0, 0)",offset:.6}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(10px, 0, 0)",offset:.75}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(-5px, 0, 0)",offset:.9}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_IN_UP=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:0,transform:"translate3d(0, 3000px, 0)",offset:0}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",opacity:1,transform:"translate3d(0, -20px, 0)",offset:.6}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0, 10px, 0)",offset:.75}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0, -5px, 0)",offset:.9}),n.style({animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_OUT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"scale3d(.9, .9, .9)",offset:.2}),n.style({opacity:1,transform:"scale3d(1.1, 1.1, 1.1)",offset:.5}),n.style({opacity:1,transform:"scale3d(1.1, 1.1, 1.1)",offset:.55}),n.style({opacity:0,transform:"scale3d(.3, .3, .3)",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_OUT_DOWN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"translate3d(0, 10px, 0)",offset:.2}),n.style({opacity:1,transform:"translate3d(0, -20px, 0)",offset:.4}),n.style({opacity:1,transform:"translate3d(0, -20px, 0)",offset:.45}),n.style({opacity:0,transform:"translate3d(0, 2000px, 0)",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_OUT_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,transform:"translate3d(20px, 0, 0)",offset:.2}),n.style({opacity:0,transform:"translate3d(-2000px, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_OUT_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,transform:"translate3d(-20px, 0, 0)",offset:.2}),n.style({opacity:0,transform:"translate3d(2000px, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.BOUNCE_OUT_UP=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"translate3d(0, -10px, 0)",offset:.2}),n.style({opacity:1,transform:"translate3d(0, 20px, 0)",offset:.4}),n.style({opacity:1,transform:"translate3d(0, 20px, 0)",offset:.45}),n.style({opacity:0,transform:"translate3d(0, -2000px, 0)",offset:1})])),{params:{duration:"1s"}}),a.FADE_IN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,offset:0}),n.style({opacity:1,offset:1})])),{params:{duration:"1s"}}),a.FADE_IN_DOWN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"translate3d(0, -100%, 0)",offset:0}),n.style({opacity:1,transform:"none",offset:1})])),{params:{duration:"1s"}}),a.FADE_IN_DOWN_BIG=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"translate3d(0, -2000px, 0)",offset:0}),n.style({opacity:1,transform:"none",offset:1})])),{params:{duration:"1s"}}),a.FADE_IN_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"translate3d(-100%, 0, 0)",offset:0}),n.style({opacity:1,transform:"none",offset:1})])),{params:{duration:"1s"}}),a.FADE_IN_LEFT_BIG=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"translate3d(-2000px, 0, 0)",offset:0}),n.style({opacity:1,transform:"none",offset:1})])),{params:{duration:"1s"}}),a.FADE_IN_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"translate3d(100%, 0, 0)",offset:0}),n.style({opacity:1,transform:"none",offset:1})])),{params:{duration:"1s"}}),a.FADE_IN_RIGHT_BIG=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"translate3d(2000px, 0, 0)",offset:0}),n.style({opacity:1,transform:"none",offset:1})])),{params:{duration:"1s"}}),a.FADE_IN_UP=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"translate3d(0, 100%, 0)",offset:0}),n.style({opacity:1,transform:"none",offset:1})])),{params:{duration:"1s"}}),a.FADE_IN_UP_BIG=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"translate3d(0, 2000px, 0)",offset:0}),n.style({opacity:1,transform:"none",offset:1})])),{params:{duration:"1s"}}),a.FADE_OUT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,offset:1})])),{params:{duration:"1s"}}),a.FADE_OUT_DOWN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"translate3d(0, 100%, 0)",offset:1})])),{params:{duration:"1s"}}),a.FADE_OUT_DOWN_BIG=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"translate3d(0, 2000px, 0)",offset:1})])),{params:{duration:"1s"}}),a.FADE_OUT_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"translate3d(-100%, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.FADE_OUT_LEFT_BIG=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"translate3d(-2000px, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.FADE_OUT_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"translate3d(100%, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.FADE_OUT_RIGHT_BIG=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"translate3d(2000px, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.FADE_OUT_UP=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"translate3d(0, -100%, 0)",offset:1})])),{params:{duration:"1s"}}),a.FADE_OUT_UP_BIG=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"translate3d(0, -2000px, 0)",offset:1})])),{params:{duration:"1s"}}),a.FLIP=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({backfaceVisibility:"visible",transform:"perspective(400px) rotate3d(0, 1, 0, -360deg)",animationTimingFunction:"ease-out",offset:0}),n.style({backfaceVisibility:"visible",transform:"perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",animationTimingFunction:"ease-out",offset:.4}),n.style({backfaceVisibility:"visible",transform:"perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",animationTimingFunction:"ease-in",offset:.5}),n.style({backfaceVisibility:"visible",transform:"perspective(400px) scale3d(.95, .95, .95)",animationTimingFunction:"ease-in",offset:.8}),n.style({backfaceVisibility:"visible",transform:"perspective(400px)",animationTimingFunction:"ease-in",offset:1})])),{params:{duration:"1s"}}),a.FLIP_IN_X=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",animationTimingFunction:"ease-in",offset:0}),n.style({backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",animationTimingFunction:"ease-in",offset:.4}),n.style({opacity:1,backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",offset:.6}),n.style({backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)",offset:.8}),n.style({backfaceVisibility:"visible !important",transform:"perspective(400px)",offset:1})])),{params:{duration:"1s"}}),a.FLIP_IN_Y=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",animationTimingFunction:"ease-in",offset:0}),n.style({backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",animationTimingFunction:"ease-in",offset:.4}),n.style({opacity:1,backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",offset:.6}),n.style({backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)",offset:.8}),n.style({backfaceVisibility:"visible !important",transform:"perspective(400px)",offset:1})])),{params:{duration:"1s"}}),a.FLIP_OUT_X=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({backfaceVisibility:"visible !important",transform:"perspective(400px)",offset:0}),n.style({opacity:1,backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",offset:.3}),n.style({opacity:0,backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",offset:1})])),{params:{duration:"1s"}}),a.FLIP_OUT_Y=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({backfaceVisibility:"visible !important",transform:"perspective(400px)",offset:0}),n.style({opacity:1,backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",offset:.3}),n.style({opacity:0,backfaceVisibility:"visible !important",transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",offset:1})])),{params:{duration:"1s"}}),a.LIGHT_SPEED_IN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,animationTimingFunction:"ease-out",transform:"translate3d(100%, 0, 0) skewX(-30deg)",offset:0}),n.style({opacity:1,animationTimingFunction:"ease-out",transform:"skewX(20deg)",offset:.6}),n.style({opacity:1,animationTimingFunction:"ease-out",transform:"skewX(-5deg)",offset:.8}),n.style({opacity:1,animationTimingFunction:"ease-out",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.LIGHT_SPEED_OUT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,animationTimingFunction:"ease-in",offset:0}),n.style({opacity:0,animationTimingFunction:"ease-in",transform:"translate3d(100%, 0, 0) skewX(30deg)",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_IN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transformOrigin:"center",transform:"rotate3d(0, 0, 1, -200deg)",offset:0}),n.style({opacity:1,transformOrigin:"center",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_IN_DOWN_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, -45deg)",offset:0}),n.style({opacity:1,transformOrigin:"left bottom",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_IN_DOWN_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 45deg)",offset:0}),n.style({opacity:1,transformOrigin:"right bottom",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_IN_UP_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 45deg)",offset:0}),n.style({opacity:1,transformOrigin:"left bottom",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_IN_UP_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, -90deg)",offset:0}),n.style({opacity:1,transformOrigin:"right bottom",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_OUT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,transformOrigin:"center",transform:"rotate3d(0, 0, 1, 200deg)",offset:0}),n.style({opacity:0,transformOrigin:"center",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_OUT_DOWN_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 45deg)",offset:0}),n.style({opacity:0,transformOrigin:"left bottom",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_OUT_DOWN_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, -45deg)",offset:0}),n.style({opacity:0,transformOrigin:"right bottom",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_OUT_UP_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, -45deg)",offset:0}),n.style({opacity:0,transformOrigin:"left bottom",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROTATE_OUT_UP_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 90deg)",offset:0}),n.style({opacity:0,transformOrigin:"right bottom",transform:"none",offset:1})])),{params:{duration:"1s"}}),a.SLIDE_IN_DOWN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({visibility:"visible",transform:"translate3d(0, -100%, 0)",offset:0}),n.style({transform:"translate3d(0, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.SLIDE_IN_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({visibility:"visible",transform:"translate3d(-100%, 0, 0)",offset:0}),n.style({transform:"translate3d(0, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.SLIDE_IN_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({visibility:"visible",transform:"translate3d(100%, 0, 0)",offset:0}),n.style({transform:"translate3d(0, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.SLIDE_IN_UP=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({visibility:"visible",transform:"translate3d(0, 100%, 0)",offset:0}),n.style({transform:"translate3d(0, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.SLIDE_OUT_DOWN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"translate3d(0, 0, 0)",offset:0}),n.style({visibility:"hidden",transform:"translate3d(0, 100%, 0)",offset:1})])),{params:{duration:"1s"}}),a.SLIDE_OUT_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"translate3d(0, 0, 0)",offset:0}),n.style({visibility:"hidden",transform:"translate3d(-100%, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.SLIDE_OUT_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"translate3d(0, 0, 0)",offset:0}),n.style({visibility:"hidden",transform:"translate3d(100%, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.SLIDE_OUT_UP=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transform:"translate3d(0, 0, 0)",offset:0}),n.style({visibility:"hidden",transform:"translate3d(0, -100%, 0)",offset:1})])),{params:{duration:"1s"}}),a.HINGE=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({transformOrigin:"top left",animationTimingFunction:"ease-in-out",offset:0}),n.style({transformOrigin:"top left",animationTimingFunction:"ease-in-out",transform:"rotate3d(0, 0, 1, 80deg)",offset:.2}),n.style({opacity:1,transformOrigin:"top left",animationTimingFunction:"ease-in-out",transform:"rotate3d(0, 0, 1, 60deg)",offset:.4}),n.style({transformOrigin:"top left",animationTimingFunction:"ease-in-out",transform:"rotate3d(0, 0, 1, 80deg)",offset:.6}),n.style({opacity:1,transformOrigin:"top left",animationTimingFunction:"ease-in-out",transform:"rotate3d(0, 0, 1, 60deg)",offset:.8}),n.style({opacity:0,transform:"translate3d(0, 700px, 0)",offset:1})])),{params:{duration:"1s"}}),a.JACK_IN_THE_BOX=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"scale(0.1) rotate(30deg)",transformOrigin:"center bottom",offset:0}),n.style({transform:"rotate(-10deg)",offset:.5}),n.style({transform:"rotate(3deg)",offset:.7}),n.style({transform:"scale(1)",offset:1})])),{params:{duration:"1s"}}),a.ROLL_IN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",offset:0}),n.style({opacity:1,transform:"none",offset:1})])),{params:{duration:"1s"}}),a.ROLL_OUT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",offset:1})])),{params:{duration:"1s"}}),a.ZOOM_IN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,transform:"scale3d(.3, .3, .3)",offset:0}),n.style({opacity:1,transform:"scale3d(1, 1, 1)",offset:.5})])),{params:{duration:"1s"}}),a.ZOOM_IN_DOWN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",transform:"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)",offset:0}),n.style({opacity:1,animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",transform:"scale3d(.1, .1, .1) translate3d(0, 60px, 0)",offset:.6})])),{params:{duration:"1s"}}),a.ZOOM_IN_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",transform:"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)",offset:0}),n.style({opacity:1,animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",transform:"scale3d(.475, .475, .475) translate3d(10px, 0, 0)",offset:.6})])),{params:{duration:"1s"}}),a.ZOOM_IN_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",transform:"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)",offset:0}),n.style({opacity:1,animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",transform:"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)",offset:.6})])),{params:{duration:"1s"}}),a.ZOOM_IN_UP=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:0,animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",transform:"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)",offset:0}),n.style({opacity:1,animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",transform:"scale3d(.475, .475, .475) translate3d(0, -60px, 0)",offset:.6})])),{params:{duration:"1s"}}),a.ZOOM_OUT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,offset:0}),n.style({opacity:0,transform:"scale3d(.3, .3, .3)",offset:.5}),n.style({opacity:0,offset:1})])),{params:{duration:"1s"}}),a.ZOOM_OUT_DOWN=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",transform:"scale3d(.475, .475, .475) translate3d(0, -60px, 0)",offset:.4}),n.style({opacity:0,animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",transformOrigin:"center bottom",transform:"scale3d(.1, .1, .1) translate3d(0, 2000px, 0)",offset:1})])),{params:{duration:"1s"}}),a.ZOOM_OUT_LEFT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,transform:"scale3d(.475, .475, .475) translate3d(42px, 0, 0)",offset:.4}),n.style({opacity:0,transformOrigin:"left center",transform:"scale(.1) translate3d(-2000px, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.ZOOM_OUT_RIGHT=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,transform:"scale3d(.475, .475, .475) translate3d(-42px, 0, 0)",offset:.4}),n.style({opacity:0,transformOrigin:"right center",transform:"scale(.1) translate3d(2000px, 0, 0)",offset:1})])),{params:{duration:"1s"}}),a.ZOOM_OUT_UP=n.animation(n.animate("{{ duration }}",n.keyframes([n.style({opacity:1,animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",transform:"scale3d(.475, .475, .475) translate3d(0, 60px, 0)",offset:.4}),n.style({opacity:0,animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",transformOrigin:"center bottom",transform:"scale3d(.1, .1, .1) translate3d(0, -2000px, 0)",offset:1})])),{params:{duration:"1s"}})},efyd:function(t,a){t.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n<div class="wrapper" style="text-align:center">\n  <div class="img-wrapper">\n\n  <img [@animationState]="state" (@animationState.done)="animationDone($event)" width="300" src="assets/485ce09979777a7ffd91cdb64cad38f9.png">\n  </div>\n\n  <div class="title">\n    <h1>Angular Bounce</h1>\n    <h4>Make your app interactive</h4>\n  </div>\n\n  \x3c!-- <button (click)="setState(\'inactive\')" >safsdaf</button> --\x3e\n  <div class="buttons-box">\n    <button *ngFor="let state of states" (click)="onBtnClick(state)" >{{ state }}</button>\n  </div>\n  <footer>\n\x3c!--     <a href="#"><button>Download</button></a>\n    or --\x3e\n    <a href="https://github.com/andrey149502/angular-bounce"><button>View on GitHub</button></a>\n  </footer>\n</div>\n\n\n\n'},gFIY:function(t,a){function e(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="gFIY"},hxJY:function(t,a,e){a=t.exports=e("rP7Y")(!1),a.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Quicksand);",""]),a.push([t.i,"*{font-family:Quicksand,sans-serif}.buttons-box{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:0;padding:25px}.buttons-box button{margin:5px;font-weight:700;color:#fff;background-color:transparent;font-size:12px;cursor:pointer;padding:5px;border:1px solid #fff}.title{color:#fff;font-weight:200}.buttons-box button:focus,.buttons-box button:hover{transition:all .1s ease;-webkit-transform:scale(1.5);transform:scale(1.5);background-color:#fff;color:#55efcb}.buttons-box button:focus{outline:0}.wrapper{overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:100%;background:linear-gradient(135deg,#55efcb,#1e5799 0,#55efcb 0,#5bcaff);background-repeat:no-repeat}.img-wrapper img{width:200px}footer{text-align:center;color:#fff}footer a{color:#e1f5fe}footer button{margin:5px;font-weight:700;background-color:#f50057;font-size:12px;border:0;cursor:pointer;padding:10px 15px;color:#fff;border-radius:5px}footer button:hover{transition:all .1s ease;-webkit-transform:scale(1.1);transform:scale(1.1);background-color:#fff;color:#55efcb}footer button:focus{outline:0}",""]),t.exports=t.exports.toString()}},[0]);