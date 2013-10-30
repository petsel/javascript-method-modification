(function(r,j){var b,c=this;b=c.Object;var e=b.prototype,k=c.Array.prototype,d=c.RegExp.prototype,s=c.String.prototype,t=e.toString,u=e.valueOf,v=d.compile,g=/(?:)/;""+g.compile("(?:)","")!==""+g&&(d.compile=function(){v.apply(this,arguments);return this});var e=function(a){return["^\\[object\\s+",a,"\\]$"].join("")},m=function(a){return t.call(a)},w=e("String"),n=function(a){return void 0===a||null===a?a:u.call(a).valueOf()},f=function(a){return"function"==typeof a&&"function"==typeof a.call&&"function"==typeof a.apply},l=function(a){return g.compile(w).test(m(a))},d=function(a,b){return new c.ReferenceError(["A valid implementation of ",a," is missing.\n\nPlease provide the basic shims of ES5. Have a look at e.g.\nhttps://github.com/kriskowal/es5-shim/blob/master/es5-shim.js",b].join(""))};if(!f(b.keys))throw d("[Object.keys]","#L542");if(!f(s.trim))throw d("[String.prototype.trim]","#L899");if(!f(k.indexOf))throw d("[Array.prototype.indexOf]","#L479");if(!f(k.forEach))throw d("[Array.prototype.forEach]","#L238");if(!f(k.reduce))throw d("[Array.prototype.reduce]","#L382");var p=b.keys,x=c.parseFloat,y={global:c,objects:{regX:g},methods:{noop:function(){}},helpers:{compareTypes:function(a,b,c){c=f(c)&&c||n;var d,e;return(d=c(a))>(e=c(b))&&1||d<e&&-1||(d===e?0:void 0)},createClassSignaturePattern:e,protectBehaviorFromInstantiation:function(a,c){if(c instanceof a)throw new TypeError("Traits and Mixins always need to be applied onto objects but never get instantiated.");}},introspective:{isFunction:f,isString:l,baseValueOf:n,getClassSignature:m}},h={},q=function(a){return h[l(a)&&a.trim()||""]};j=j||c;b=function(a,b){a=l(a)&&a.trim()||"";var d=f(b)&&b(q,c,y);if(d&&a)return h[a]=d};b.all=function(){return p(h)};b.all.size=function(){return p(h).length};b.require=q;(function(){this.first=function(){return this()[0]};this.last=function(){var a;return(a=this())[a.length-1]};this.item=function(a){return this()[x(a,10)]}}).call(b.all);return j[r]=b}).call(null,"composable");

composable("components.Introspective_isFunction_isCallable",function(b,e,f){var g=e.Function.prototype,h=function(a){return"function"==typeof a&&"function"==typeof a.call&&"function"==typeof a.apply},j=function(a){var c;if(c=h(a)){var b;try{g.toString.call(a),b=!0}catch(e){b=!1}c=b}if(!c){var d;try{a(),d=!0}catch(f){try{g.call.call(a),d=!0}catch(j){d=!1}}c=d}return c};b=function(){this.isFunction=h;this.isCallable=j};b.apply(f.introspective);return b});
composable("components.Introspective_isArray_isArguments",function(d,b,c){d("components.Introspective_isFunction_isCallable");d=c.introspective;var e=b.Array,j,a=b.Object.prototype.propertyIsEnumerable;try{a.call(null,"length");var l=a,a=function(h,a){return l.call(h,a)}}catch(t){var m=a,a=function(h,a){var b;try{b=m.call(h,a)}catch(c){b=!0}return b}}j=a;var a=c.helpers.createClassSignaturePattern,f=c.objects.regX,n=a("Object"),p=a("Array"),k=a("Arguments"),g=d.getClassSignature;c=d.isFunction;var q=b.isFinite,r=c(e.isArray)&&e.isArray||function(a){return f.compile(p).test(g(a))};if(!(b=c(e.isArguments)&&e.isArguments))b=function(){return f.compile(k).test(g(arguments))}()?function(a){return f.compile(k).test(g(a))}:function(a){return!!a&&f.compile(n).test(g(a))&&"number"==typeof a.length&&q(a.length)&&!j(a,"length")};var s=b;b=function(){this.isArray=r;this.isArguments=s};b.apply(d);return b});

composable("components.Enumerable_toArray",function(a,d,h){a("components.Introspective_isArray_isArguments");a=h.introspective;var e=d.Array.prototype.slice,j=a.isFunction,k=a.isString,n=a.isArguments,p=a.isArray,l=d.isFinite,f=d.document,q=function(){var a,b,g,d=f&&f.forms||[],m=f&&j(f.getElementsByTagName)&&f.getElementsByTagName("")||d;try{b=e.call(d);b=e.call(m);b=e.call(arguments);g=b.join("");if(3!=b.length||"Array.make"!=g)throw Error();b=e.call(g);if(10!==b.length||"."!=b[5])throw Error();a=function(){var a,c=(this||k(this))&&this.length;"number"==typeof c&&l(c)&&(a=[],a.length=c,a=e.call(this));return a}}catch(h){a=function(){var a,c,b=(p(this)||n(this))&&e.call(this)||k(this)&&this.split("")||a;if(!b&&(c=0!==this&&this&&this.length,"number"==typeof c&&l(c)))if(b=[],b.length=c,j(this.item))for(;c--;)a=this.item(c),c in this&&(b[c]=a);else for(;c--;)a=this[c],c in this&&(b[c]=a);return b}}b=g=d=m=null;return a}("Array",".","make");return function(){this.toArray=q}});
composable("composites.Array_make",function(b,c,d){var a={},e=b("components.Enumerable_toArray").call(a)||a.toArray;c.Array.make=d.helpers.makeArray=function(a){return e.call(a)}});

composable("components.Introspective_typeDetection_core",function(c,l,j){c("components.Introspective_isFunction_isCallable");c("components.Introspective_isArray_isArguments");c=j.introspective;var x=c.isFunction,y=c.isCallable,z=c.isArray,A=c.isArguments,m=c.isString,B=c.baseValueOf,h=j.helpers.createClassSignaturePattern,f=function(a){return["(?:^",a,":)|(?:^",a,"$)|(?:\\[",a,":\\s*name\\:\\s*",a,")"].join("")},b=j.objects.regX,C=h("Boolean"),D=h("Number"),E=h("Object"),F=h("RegExp"),G=h("Date"),H=h("Error"),I=f("Error"),J=f("EvalError"),K=f("RangeError"),L=f("ReferenceError"),M=f("SyntaxError"),N=f("TypeError"),O=f("URIError"),g=c.getClassSignature,d,P=l.Error.prototype.toString;d=function(a){return P.call(a)};var n=l.isFinite,Q=function(a){return void 0===a},R=function(a){return void 0!==a},S=function(a){return null===a},T=function(a){return null!==a},p=function(a){return!a&&(void 0===a||null===a)},k=function(a){return void 0!==a&&null!==a},q=function(a){return"string"==typeof a||"number"==typeof a||"boolean"==typeof a},U=function(a){return q(a)||p(a)},r=function(a){return a&&("object"==typeof a||"function"==typeof a)},s=function(a){return k(a)&&"function"==typeof a.constructor},V=function(a){return r(a)&&"function"!=typeof a.constructor},t=function(a){return b.compile(C).test(g(a))},u=function(a){return"boolean"==typeof a},W=function(a){return t(a)&&!u(a)},v=function(a){return b.compile(D).test(g(a))&&"number"!=typeof a},X=function(a){return"number"==typeof a},Y=function(a){return("number"==typeof a||v(a))&&n(a)},w=function(a){return"string"==typeof a},Z=function(a){return m(a)&&!w(a)},$=function(a){return k(a)&&"number"==typeof a.length&&n(a.length)&&0<=a.length},aa=function(a){return s(a)&&b.compile(E).test(g(a))},ba=function(a){return b.compile(F).test(g(a))},ca=function(a){return b.compile(G).test(g(a))},e=function(a){return b.compile(H).test(g(a))},da=function(a){return e(a)&&(b.compile(I).test(d(a))||"Error"===a.name)},ea=function(a){return e(a)&&(b.compile(J).test(d(a))||"EvalError"===a.name)},fa=function(a){return e(a)&&(b.compile(K).test(d(a))||"RangeError"===a.name)},ga=function(a){return e(a)&&(b.compile(L).test(d(a))||"ReferenceError"===a.name)},ha=function(a){return e(a)&&(b.compile(M).test(d(a))||"SyntaxError"===a.name)},ia=function(a){return e(a)&&(b.compile(N).test(d(a))||"TypeError"===a.name)},ja=function(a){return e(a)&&(b.compile(O).test(d(a))||"URIError"===a.name)};return function(){this.isUndefined=Q;this.isDefined=R;this.isNull=S;this.isNotNull=T;this.isUndefinedOrNull=p;this.isNeitherUndefinedNorNull=k;this.isPrimitive=q;this.isValue=U;this.isObject=r;this.isNative=s;this.isAlien=V;this.isBoolean=t;this.isBooleanValue=u;this.isBooleanObject=W;this.isNumber=Y;this.isNumberValue=X;this.isNumberObject=v;this.isString=m;this.isStringValue=w;this.isStringObject=Z;this.isArray=z;this.isArguments=A;this.isListLike=$;this.isObjectObject=aa;this.isFunction=x;this.isCallable=y;this.isRegExp=ba;this.isDate=ca;this.isError=e;this.isGenericError=da;this.isEvalError=ea;this.isRangeError=fa;this.isReferenceError=ga;this.isSyntaxError=ha;this.isTypeError=ia;this.isURIError=ja;this.baseValueOf=B;this.getClassSignature=g}});

composable("environment",function(a,c,b){a=function(){};a.prototype=b;return new a});
composable("environment_extended_introspective_core",function(a){var b=a("environment");a("components.Introspective_typeDetection_core").call(b.introspective);return b});



composable("components.Enumerable_first_last",function(){return function(){this.first=function(){return this[0]};this.last=function(){return this[this.length-1]}}});
composable("components.Enumerable_first_last_item",function(c,a){var b=a.parseFloat;return function(){this.first=function(){return this[0]};this.last=function(){return this[this.length-1]};this.item=function(a){return this[b(a,10)]}}});
composable("components.Enumerable_first_last_item_listWrapper",function(d,b){var c=b.parseFloat;return function(a){this.first=function(){return a[0]};this.last=function(){return a[a.length-1]};this.item=function(b){return a[c(b,10)]}}});
composable("components.Enumerable_first_last_item_listGetterShorthands",function(d,b){var c=b.parseFloat;return function(){this.first=function(){return this()[0]};this.last=function(){var a;return(a=this())[a.length-1]};this.item=function(a){return this()[c(a,10)]}}});

composable("components.Allocable",function(a,b,c){a("composites.Array_make");var d=a("components.Enumerable_first_last_item_listWrapper");a=b.Array;b=c.introspective.isFunction;var e=b(a.make)&&a.make||c.helpers.makeArray;return function(a){this.valueOf=this.toArray=function(){return e(a)};this.toString=function(){return""+a};this.size=function(){return a.length};d.call(this,a)}});
composable("components.Allocable_all",function(a,b,c){a("composites.Array_make");var d=a("components.Enumerable_first_last_item_listGetterShorthands");a=b.Array;b=c.introspective.isFunction;var e=b(a.make)&&a.make||c.helpers.makeArray;return function(a){this.all=function(){return e(a)};this.all.size=function(){return a.length};d.call(this.all)}});

composable("components.Controllable_Advice_before_after_around",function(k,n,l){k("components.Introspective_isFunction_isCallable");k=l.introspective;var e=k.isFunction,m=k.isCallable,c=function(b){return!b&&(void 0===b||null===b)?null:b};return function(){this.before=function(b,f,g){var a;if(a=e(b))if(a=e(this)){var h=this,d=c(f),j=c(g);a=function(){var a=arguments;b.call(d,a,j);return h.apply(d,a)}}return a||this};this.after=function(b,f,g){var a;if(a=e(this))if(a=e(b)){var h=this,d=c(f),j=c(g);a=function(){var a,c=arguments;a=h.apply(d,c);b.call(d,c,a,j);return a}}return a||this};this.around=function(b,f,g){var a;if(a=m(this))if(a=e(b)){var h=this,d=c(f),j=c(g);a=function(){return b.call(d,h,b,arguments,d,j)}}return a||this}}});
//deprecated//composable("components.Controllable_Advice_before_after_around",function(e,k,h){e("components.Introspective_isFunction_isCallable");e=h.introspective;var b=e.isFunction,j=e.isCallable,f=function(a,c,d){return function(){var b=arguments;a.apply(d,b);return c.apply(d,b)}},g=function(a){return!a&&(void 0===a||null===a)?null:a};return function(){this.before=function(a,c){return b(a)&&b(this)&&f(a,this,g(c))||this};this.after=function(a,c){return b(this)&&b(a)&&f(this,a,g(c))||this};this.around=function(a,c){var d;if(d=j(this))if(d=b(a)){var e=this,f=g(c);d=function(){return a.call(f,e,a,arguments,f)}}return d||this}}});


composable("composites.Function_isFunction_isCallable",function(a,b){a("components.Introspective_isFunction_isCallable").call(b.Function)});

composable("",function(a,b){a("components.Introspective_isArray_isArguments").call(b.Array)});
composable("",function(a,b){a("components.Enumerable_first_last").call(b.Array.prototype)});

composable("composites.Function_modifiers_Advice_before_after_around",function(a,b){a("components.Controllable_Advice_before_after_around").call(b.Function.prototype)});



composable("components.Observable_SignalsAndSlots",function(h,c,p){h("composites.Array_make");h=c.Array;var r=c.Date;c=p.introspective;var s=c.isFunction,n=c.isCallable,f=c.isString,t=s(h.make)&&h.make||p.helpers.makeArray,q=function(a,g){this.constructor=q;this.target=a;this.type=g;this.timeStamp=new r},m=function(a,g,f){var d=new q(a,g);this.constructor=m;this.handleEvent=function(a){a&&"object"==typeof a?(a.target=d.target,a.type=d.type,a.timeStamp=d.timeStamp):a={target:d.target,type:d.type,timeStamp:d.timeStamp};f(a)};this.getType=function(){return g};this.getHandler=function(){return f}};return function(a){a="object"==typeof a&&a||{};var g={},c="addEventListener",d="removeEventListener",k="hasEventListener",l="dispatchEvent",h=function(j,a){var b=g[j],e=!1;if(b){var c=b.handlers,b=b.listeners,f=c.indexOf(a);0<=f&&(c.splice(f,1),b.splice(f,1),e=!0)}return e},c=f(a[c])&&a[c]||c,d=f(a[d])&&a[d]||d,k=f(a[k])&&a[k]||k,l=f(a[l])&&a[l]||l;this[c]=function(j,a){var b;if(j&&f(j)&&n(a)){var e=g[j];b=new m(this,j,a);if(e){var c=e.handlers,e=e.listeners,d=c.indexOf(a);-1==d?(c.push(b.getHandler()),e.push(b)):b=e[d]}else e=g[j]={},e.handlers=[b.getHandler()],e.listeners=[b]}return b};this[d]=function(a,c){return f(a)&&n(c)&&h(a,c)||a instanceof m&&h(a.getType(),a.getHandler())||!1};this[k]=function(a,c){var b;if(!(b=f(a)&&n(c)&&(g[a]||!1)&&0<=g[a].handlers.indexOf(c))){if(b=a instanceof m){b=a.getType();var e=a.getHandler();b=(g[b]||!1)&&0<=g[b].handlers.indexOf(e)}b=b||!1}return b};this[l]=function(a){var c=!1,b=a&&"object"==typeof a&&f(a.type)&&a.type||f(a)&&a;if(b=b&&g[b]){var e=(b=b.listeners&&t(b.listeners))&&b.length||0,d=-1;if(1<=e){for(;++d<e;)b[d].handleEvent(a);c=!0}}return c}}});

composable("modification.ao",function(k,f,h){k("composites.Function_modifiers_Advice_before_after_around");h=k("environment");var E=k("components.Allocable_all");k=k("components.Observable_SignalsAndSlots");var l=h.introspective.isUndefined,c=h.introspective.isFunction,ka=h.introspective.isObject,m=h.introspective.isStringValue,la=f.Math.random,ma=h.helpers.makeArray,F=function(c,a){for(var b=-1,j=c.length;++b<j;)a(c[b],b,c)&&(c.splice(b,1),--b,--j)},N=function(c,a){for(var b,j=-1,d=c.length;++j<d;)if(a(c[j],j,c)){b=c[j];break}return b},g=function(c){return m(c)&&c.trim()||""},O=f.uuid&&c(f.uuid.v4)&&f.uuid.v4||function a(b){return b?(b^16*la()>>b/4).toString(16):([1E7]+-1E3+-4E3+-8E3+-1E11).replace(/[018]/g,a)},W,G,H="on",X=function(){return"off"==H},P,Q;f=function(){P();Q()};var e={};k.call(e,{addEventListener:"on",removeEventListener:"off",dispatchEvent:"emit"});var t,u=[],R=function(a){this.getLabel=function(){return a.label};this.getTarget=function(){return a.target};this.getMethodName=function(){return a.methodName};this.getBaseMethod=function(){return a.baseMethod}};R.prototype.equals=function(a){return v(this)&&v(a)&&this===a||w(this)&&w(a)&&this.getBaseMethod()===a.getBaseMethod()&&this.getMethodName()===a.getMethodName()&&this.getTarget()===a.getTarget()&&this.getLabel()===a.getLabel()};var v=function(a){return a instanceof R},w=function(a){return a&&"object"==typeof a&&c(a.getLabel)&&c(a.getTarget)&&c(a.getMethodName)&&c(a.getBaseMethod)},Y=function(a){return a&&"object"==typeof a&&ka(a.target)&&m(a.methodName)&&c(a.target[a.methodName])},Z=function(a){var b=a.getBaseMethod(),j=a.getMethodName(),d=a.getTarget(),c=a.getLabel();return function(a){return a.getBaseMethod()===b&&a.getMethodName()===j&&a.getTarget()===d&&a.getLabel()===c}},$=function(a){a.baseMethod=a.target[a.methodName];a.label=g(a.label);return new R(a)};t={add:function(a){var b;if(Y(a))b=$(a);else if(v(a)||w(a))b=a;b&&!u.some(Z(b))&&(u.push(b),e.emit({type:"joinpoint:add",joinpoint:b}));return b},remove:function(a){var b;if(Y(a))b=$(a);else if(v(a)||w(a))b=a;b&&(a=Z(b),u.some(a)?(F(u,a),e.emit({type:"joinpoint:remove",joinpoint:b})):b=!1);return b},isJoinpoint:v,isJoinpointLike:w};E.call(t,u);var x,n=[],S={},y=function(a){this.getFilter=function(){return a.filter};this.getId=function(){return a.id}};y.prototype.equals=function(a){return p(this)&&p(a)&&this===a||q(this)&&q(a)&&this.getFilter()===a.getFilter()&&this.getId()===a.getId()};y.prototype.getJoinpoints=function(){return(p(this)||q(this))&&t.all().filter(this.getFilter())||[]};var p=function(a){return a instanceof y},q=function(a){return a&&"object"==typeof a&&c(a.getFilter)&&c(a.getId)},aa=function(a){var b=a.getFilter(),c=a.getId();return function(a){return a.getFilter()===b&&a.getId()===c}},ba=function(a){var b;m(a)&&(b=S[a]);return b},I=function(a){var b,c=g(a.id),d=ba(c);if(d)b=d.getFilter()===a.filter?d:!1;else{var e=a.filter;(d=N(n,function(a){return a.getFilter()===e}))&&(b=d.getId()===c?d:!1)}return b};x={getById:ba,add:function(a){var b;a&&"object"==typeof a&&c(a.filter)?(b=I(a),l(b)&&(a.id=g(a.id)||O(),b=new y(a))):p(a)?b=a:q(a)&&(b=I({filter:a.getFilter(),id:a.getId()}),l(b)&&(a={filter:a.getFilter(),id:a.getId()},b=new y(a)));b&&!n.some(aa(b))&&(n.push(b),S[b.getId()]=b,e.emit({type:"pointcut:add",pointcut:b}));return b},remove:function(a){var b;if(a&&"object"==typeof a&&c(a.filter))b=I(a);else if(p(a)||q(a))b=I({filter:a.getFilter(),id:a.getId()});b&&(a=aa(b),n.some(a)?(F(n,a),delete S[b.getId()],e.emit({type:"pointcut:remove",pointcut:b})):b=!1);return b},isPointcut:p,isPointcutLike:q};E.call(x,n);var z,r=[],T={},J={AROUND:"around",BEFORE:"before",AFTER:"after",AFTERTHROWING:"afterThrowing",AFTERRETURNING:"afterReturning"},K=function(a){this.getHandler=function(){return a.handler};this.getType=function(){return a.type};this.getId=function(){return a.id}};K.prototype.equals=function(a){return A(this)&&A(a)&&this===a||B(this)&&B(a)&&this.getHandler()===a.getHandler()&&this.getType()===a.getType()&&this.getId()===a.getId()};var A=function(a){return a instanceof K},B=function(a){var b;if(b=a)if(b="object"==typeof a)if(b=c(a.getHandler))if(b=c(a.getType))b=a.getType(),b=m(b)&&J[b.toUpperCase()]===b&&c(a.getId);return b},ca=function(a){return a&&"object"==typeof a&&c(a.handler)&&(J[g(a.type).toUpperCase()]||"")},da=function(a){var b=a.getHandler(),c=a.getType(),d=a.getId();return function(a){return a.getHandler()===b&&a.getType()===c&&a.getId()===d}},ea=function(a){var b;m(a)&&(b=T[a]);return b},U=function(a){var b,c=g(a.id),d=ea(c);a.type=J[g(a.type).toUpperCase()]||"";if(d)b=d.getHandler()===a.handler&&d.getType()===a.type?d:!1;else{var e=a.handler,f=a.type;(d=N(r,function(a){return a.getHandler()===e&&a.getType()===f}))&&(b=d.getId()===c?d:!1)}return b},fa=function(a){return U({handler:a.getHandler(),type:a.getType(),id:a.getId()})};z={getById:ea,add:function(a){var b;ca(a)?(b=U(a),l(b)&&(a.type=J[g(a.type).toUpperCase()]||"",a.id=g(a.id)||O(),b=new K(a))):A(a)?b=a:B(a)&&(b=fa(a),l(b)&&(a={handler:a.getHandler(),type:a.getType(),id:a.getId()},b=new K(a)));b&&!r.some(da(b))&&(r.push(b),T[b.getId()]=b,e.emit({type:"advice:add",advice:b}));return b},remove:function(a){var b;if(ca(a))b=U(a);else if(A(a)||B(a))b=fa(a);b&&(a=da(b),r.some(a)?(F(r,a),delete T[b.getId()],e.emit({type:"advice:remove",advice:b})):b=!1);return b},isAdvice:A,isAdviceLike:B};E.call(z,r);var s=[],V={},L=function(a){var b=this,c="deny",d="deny",f=function(){c=""},g=[],h=a.handler;h(function(a,b){var c=z.add(a),d=x.add(b);na(c)&&(oa(d)&&!g.some(pa(c,d)))&&g.push({advice:c,pointcut:d})},W);b.getLinkList=function(){return ma(g)};b.getHandler=function(){return h};b.getId=function(){return a.id};b.deny=function(){this===b&&!b.isDenied()&&(e.off("system:restore",f),d=c="deny",ga(),G.all().forEach(ha))};b.confirm=function(){this===b&&!b.isConfirmed()&&(X()?(c="",d="confirm"):(b.getLinkList().forEach(function(a){var b=a.advice;a=a.pointcut;var c=b.getType(),d=b.getHandler();a.getJoinpoints().forEach(function(a){var b=a.getTarget(),e=a.getMethodName();b[e]=b[e][c](d,b,a)})}),d=c="confirm",e.on("system:restore",f)))};b.isReconfirm=function(){return this===b&&"confirm"!=c&&"confirm"==d};b.isConfirmed=function(){return this===b&&"confirm"==c&&"confirm"==d};b.isDenied=function(){return this===b&&"deny"==c&&"deny"==d}};L.prototype.equals=function(a){return C(this)&&C(a)&&this===a||D(this)&&D(a)&&this.getHandler()===a.getHandler()&&this.getId()===a.getId()};var oa=x.isPointcut,na=z.isAdvice,C=function(a){return a instanceof L},D=function(a){return a&&"object"==typeof a&&c(a.getLinkList)&&c(a.getHandler)&&c(a.getId)&&c(a.deny)&&c(a.confirm)&&c(a.isConfirmed)},ia=function(a){var b=a.getHandler(),c=a.getId();return function(a){return a.getHandler()===b&&a.getId()===c}},pa=function(a,b){return function(c){return c.advice===a&&c.pointcut===b}},ha=function(a){a.isReconfirm()&&a.confirm()},ga=function(){t.all().forEach(function(a){var b=a.getTarget(),c=a.getMethodName();a=a.getBaseMethod();b[c]=a});e.emit("system:restore")},ja=function(a){var b;m(a)&&(b=V[a]);return b},M=function(a){var b,c=g(a.id),d=ja(c);if(d)b=d.getHandler()===a.handler?d:!1;else{var e=a.handler;(d=N(s,function(a){return a.getHandler()===e}))&&(b=d.getId()===c?d:!1)}return b};P=function(){H="off";ga()};Q=function(){H="on";G.all().forEach(ha)};h={getById:ja,add:function(a){var b;a&&"object"==typeof a&&c(a.handler)?(b=M(a),l(b)&&(a.id=g(a.id)||O(),b=new L(a))):C(a)?b=a:D(a)&&(b=M({handler:a.getHandler(),id:a.getId()}),l(b)&&(a={handler:a.getHandler(),id:a.getId()},b=new L(a)));b&&!s.some(ia(b))&&(s.push(b),V[b.getId()]=b,e.emit({type:"aspect:add",aspect:b}));return b},remove:function(a){var b;if(a&&"object"==typeof a&&c(a.handler))b=M(a);else if(C(a)||D(a))b=M({handler:a.getHandler(),id:a.getId()});b&&(a=ia(b),s.some(a)?(F(s,a),delete V[b.getId()],e.emit({type:"aspect:remove",aspect:b})):b=!1);return b},isAspect:C,isAspectLike:D};E.call(h,s);G=h;e.on("joinpoint:add",f);e.on("joinpoint:remove",f);e.on("pointcut:add",f);e.on("pointcut:remove",f);e.on("advice:add",f);e.on("advice:remove",f);e.on("aspect:add",f);e.on("aspect:remove",f);return W={Joinpoint:t,Pointcut:x,Advice:z,Aspect:G,isOff:X,isOn:function(){return"on"==H},off:P,on:Q,reboot:f}});





/**
 *  as for use with [twitter.com],
 *
 *  if one tries scanning and logging the global namespace/object
 *  twitter.com prevents logging by overwriting [global.console] features
 *
 *  the approach beneath kind of recovers [global.console.log] and [global.console.warn]
 *
 *  just open a console window for the not closed minified "proxy" window as well
 *  and place it right to the console window of the browser that runs twitter.com
 *  (you don't need though, but see what happens / not happens).
 */
var win = window.open("","","");
win.resizeTo(0,0);
win.moveTo(0,0);
window.console.log = (function (loacal_console, remote_console) {
  return function () {

    remote_console.log.apply(loacal_console, arguments);
    remote_console.log.apply(remote_console, arguments);
  };
}(window.console, win.console));
window.console.warn = (function (loacal_console, remote_console) {
  return function () {

    remote_console.warn.apply(loacal_console, arguments);
    remote_console.warn.apply(remote_console, arguments);
  };
}(window.console, win.console));
//win.close();
//delete window.win;


var
  ao = composable.require("modification.ao"),

  JP = ao.Joinpoint,
  PC = ao.Pointcut,
  AV = ao.Advice,
  AS = ao.Aspect
;
(function (require, global, rootName) {

  var
    scanTarget = global[rootName],

    Object = global.Object,


    env = require("environment"),

  //env_helpers       = env.helpers,
    env_introspective = env.introspective,

    isObjectObject    = env_introspective.isObjectObject,
  //isObject          = env_introspective.isObject,
  //isArray           = env_introspective.isArray,
    isFunction        = env_introspective.isFunction,
  //isCallable        = env_introspective.isCallable,


    ao = require("modification.ao"),

    JP = ao.Joinpoint,
    PC = ao.Pointcut,
    AV = ao.Advice,
    AS = ao.Aspect
  ;


  var globallyAccessibleMethodsMap = Object.keys(scanTarget).reduce(function (scopedCollector, key) {
    var
      collect = arguments.callee,

      target  = scopedCollector.target,
      list    = scopedCollector.list,
      path    = scopedCollector.path,

      methods = scopedCollector.scanned.methods,
      objects = scopedCollector.scanned.objects,

      type
    //type   = target[key]
      ;
    try {
      type   = target[key];
    } catch (exc) {
      console.warn([exc.message, key, target]);
      type = null;
    }
    scopedCollector.path = [path, ".", key].join("");

    if (isFunction(type)) { // if (typeof type == "function") {
      if (methods.indexOf(type) == -1) {

        methods.push(type);
        list.push({

          "label"      : scopedCollector.path,
          "methodName" : key,
          "target"     : target
        });
        scopedCollector.target = type;
        scopedCollector = Object.keys(type).reduce(collect, scopedCollector);
        scopedCollector.target = target;
      }
    } else if (isObjectObject(type)) { // else if (type && (typeof type == "object")) {
      if (objects.indexOf(type) == -1) {

        objects.push(type);

        scopedCollector.target = type;
        scopedCollector = Object.keys(type).reduce(collect, scopedCollector);
        scopedCollector.target = target;
      }
    }
    scopedCollector.path = path;

    return scopedCollector;

  }, {

    "target"  : scanTarget,
    "list"    : [],
    "path"    : rootName,
    "scanned" : {
      "methods" : [],
      "objects" : []
    }
  });


  globallyAccessibleMethodsMap.list.forEach(function (protoJoinpoint) {
//  JP.add({
//    label      : protoJoinpoint.label,
//    methodName : protoJoinpoint.methodName,
//    target     : protoJoinpoint.target
//  });
    JP.add(protoJoinpoint);
  });


  return globallyAccessibleMethodsMap;


}(window.composable.require, window, "window"));



JP.all().sort(function (a, b) {
  return (a.getLabel() < b.getLabel()) ? -1 : ((a.getLabel() > b.getLabel()) ? 1 : 0);
}).forEach(function (jp/*, idx, list*/) {
  console.log(jp.getLabel());
});
console.log(["JP.all.size()", JP.all.size()]);
