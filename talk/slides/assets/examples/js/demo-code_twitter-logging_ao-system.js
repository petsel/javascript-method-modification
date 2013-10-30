

/**
 *  working AO system example that needs to be run
 *  within the console of a google chrome browser
 *  that runs [twitter.com]
 */
var
  pointcut__twttrlr = PC.add({
    id      : "pointcut__twttrlr",
    filter  : function (jp) {

      return (jp.getLabel().indexOf("window.__twttrlr") >= 0);
    }
  }),


  pointcut_loadrunner_modules_all = PC.add({
    id      : "pointcut_loadrunner_modules_all",
    filter  : function (jp) {

      return (jp.getLabel().indexOf("window.loadrunner.Module.exports") >= 0);
    }
  }),


  pointcut_all = PC.add({
    id      : "pointcut_all",
    filter  : function (jp) {

      return true;
    }
  }),



  advice_log_before = AV.add({
    id      : "adviceLogBefore",
    type    : "before",
    handler : function (argsArray, pointcut) {
      if (pointcut) {
        var
          label       = pointcut.getLabel(),
          target      = pointcut.getTarget(),
          methodName  = pointcut.getMethodName()
          ;
        console.log([label, methodName, (target === this), argsArray, this]);
      } else {
        console.log([this.name, argsArray, this]);
      }
    }
  }),



  aspect_log__twttrlr = AS.add({
    id      : "aspect_log__twttrlr",
    handler : function (linkAdviceToPointcut, aoSystem) {

      linkAdviceToPointcut(advice_log_before, pointcut__twttrlr);
    }
  }),


  aspect_log_loadrunner_modules_all = AS.add({
    id      : "aspect_log_loadrunner_modules_all",
    handler : function (linkAdviceToPointcut, aoSystem) {

      linkAdviceToPointcut(advice_log_before, pointcut_loadrunner_modules_all);
    }
  })/*,

  aspect_log_all = AS.add({
    id      : "aspect_log_all",
    handler : function (linkAdviceToPointcut, aoSystem) {

      linkAdviceToPointcut(advice_log_before, pointcut_all);
    }
  })*/
;


aspect_log__twttrlr.confirm();
aspect_log_loadrunner_modules_all.confirm();
//aspect_log_all.confirm() // never ever !!!


/**
 *  play around - stepwise do:
 *
 *  > aspect_log_loadrunner_modules_all.deny();
 *  > // ... see what happens ...
 *  > aspect_log__twttrlr.deny();
 *  > // ... ...
 *  > aspect_log__twttrlr.confirm();
 *  > // ... ...
 *  > ao.off()
 *  > // ... ...
 *  > aspect_log_loadrunner_modules_all.confirm();
 *  > // ... ...
 *  > ao.on()
 *  > // ... ...
 *  > ...
 *  > ...
 */
