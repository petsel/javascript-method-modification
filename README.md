javascript-method-modification
==============================


##JavaScript Method Modification - Aspect Oriented Function Composition


Thoughts about how to adopt the principles of Aspect Oriented Programming to JavaScripts dynamic and functional nature.


##Method Modification/Modifiers - Why?

* There are cases where one does not own the code of a method that's functionality has to be modified
* e.g. enriching an existing implementation with additional behavior and influencing the control flow of this new function composition.
* This is the point one is in need of a set of basic `AOP` inspired method modifiers like `Function.prototype`[`before`|`after`|`around`]
* Also if one uses Function Based Object/Type Composition patterns like `Traits` and `Mixins` with implementations that introduce concurring methods, resolving conflicts can be handled easier by such modifiers.


##AOP in JavaScript - Why?

Basic Modifiers vs True AO Systems

Pure Method Modifying ...
* relies on direct access to every possible modifiable method.
* needs to be done explicitly for every identified method .
* lacks abstraction for the 2 last mentioned shortcomings.
  - Thus making modularized code reuse of additionally to be wrapped behavior not that handy.
* is an appealing approach for less complex tasks.
* should be seen as pre-stage for AO Systems that have to provide both abstraction and support for better code reuse.


##AOP in JavaScript

Thoughts about how to adopt the principles of AOP to JavaScripts dynamic and functional nature.

- runtime based only and not using any kind of JavaScript "transpilers" or JavaScript build tools for "code weaving" as in e.g. AspectJ.
- thus being forced focusing on what ES3 language core does provide.
- implementation of prototypal method modifiers e.g. `around`, `before`, `after`, `afterThrowing`, `afterReturning`, as kind of a minimal AOP influenced base set that already supports library (framework) agnostic modification of function based control flow by just wrapping additional behaviors (advice handlers) around existing methods(functions).
- clarify role of `Joinpoint`, `Pointcut`, `Advice` and `Aspect`; especially from this point of view of what makes them distinct from existing approaches in compiled and/or non dynamic and/or non functional programming languages.

- no need of a pointcut specific language but methods as filters in order to define pointcuts that access/collect joinpoints.
- maybe support for accumulating joinpoints in a way similar to a pointcut's definition by just providing a filter method.
- maybe even consider dropping the AOP paradigm of supporting an "oblivious" system thus allowing to mark/flag methods as joinpoints from within any JavaScript source code - think in ways of e.g. `Function.prototype.(un)markJoinpoint`.

***

## Joinpoint
* A `Joinpoint` in JavaScript always needs to feature both a method that is bound to an object and this very object itself (regardless of either this couple is locally scoped or not). One might even think about a label that optionally gets assigned to a joinpoint.
* Thus a joinpoint will be constructed at least from a method's name and this method's target object.

## Pointcut
* A `Pointcut` in JavaScript always should be able to return a collection of joinpoints that are filtered according to certain criteria.
* Thus a pointcut explicitly will be constructed from its filter method.

## Advice
* An `Advice` in JavaScript always should feature both a method that defines behavior (or could be seen as advice handler) and a named qualifier or type e.g. `before`, `after`, `around`(, `afterReturning`, `afterThrowing`).
* Thus an advice will be constructed from a qualifier and a method that gets associated with that qualifier.

##Aspect
* An `Aspect` in JavaScript needs to feature just a sole function that enables folding of advices and pointcuts within it's function body.
* Thus an aspect has to be constructed from a callback function that's first argument is a method that links advices to pointcuts and that's second argument references the AO System itself.

##Additional Notes
* In order to take advantage of JavaScripts dynamic nature it should be allowed to alter the whole system's control flow at any time from any point e.g.
  - advices do alter the system's control flow just by calling one of every advices two methods either `confirm` or `deny`.
  - `add` or `remove` joinpoints, pointcuts, advices regardless of how many aspects are currently confirmed or denied.
  - switching the whole AO System `off` and `on` again.


Go for the slideshow.

- [2013-08-19: slides prepared for the hh.js talk and live demo.](http://petsel.github.io/javascript-method-modification/hh.js/2013-08-19/slides/)
- [2013-08-19: gist code for logging demo](https://gist.github.com/petsel/5690543)

- [implementation of "the modification.ao" module](https://github.com/petsel/composable/blob/master/src/modification/modification.ao.js)
