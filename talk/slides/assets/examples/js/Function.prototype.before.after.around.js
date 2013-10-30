

Function.prototype.before = function (behaviorBefore, target) {
  var proceedAfter = this;

  return function () {
    var args = arguments;

    behaviorBefore.apply(target, args);
    return proceedAfter.apply(target, args);
  };
};

var hi = function () {console.log("hi");};
var ho = function () {console.log("ho");};

hi(); // "hi"
ho(); // "ho"

var hohi = hi.before(ho);
var hiho = ho.before(hi);

hohi(); // "ho", "hi"
hiho(); // "hi", "ho"





Function.prototype.after = function (behaviorAfter, target) {
  var proceedBefore = this;

  return function () {
    var args = arguments;

    proceedBefore.apply(target, args);
    return behaviorAfter.apply(target, args);
  };
};

var he = function () {console.log("he");};

he(); // "he"
ho(); // "ho"

var heho = he.after(ho);
var hohe = ho.after(he);

heho(); // "he", "ho"
hohe(); // "ho", "he"





Function.prototype.around = function (behaviorAround, target) {
  var proceedEnclosed = this;

  return function () {
    return behaviorAround.call(target, proceedEnclosed,
      behaviorAround, arguments, target);
  };
};

var hehiho = hi.around(function (proceed, around, args, target) {

  he();
  proceed();
  ho();

  console.log("proceed : ", proceed);
  console.log("around : ", around);
  console.log("args : ", args);
  console.log("target : ", target);

  console.log("this : ", this);
});

hehiho("t", "e", "s", "t");

// he
// hi
// ho
//
// proceed :  function () {console.log("hi");}
// around :  function (proceed, around, args, target) {
//
// he();
// proceed();
// ho();
//
// console.log("proceed : ", proceed);
// console.log("around : ", around);
// console.log("args : ", args);
// console.log("target : ", target);
//
// console.log("this : ", this);
// }
// args :  ["t", "e", "s", "t"]
// target :  undefined
// this : Window {top: Window, window: Window, location: Location, external: Object, chrome: Object…}





