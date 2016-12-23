"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,i,o){var a=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,a=n.default.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:t.default}),(0,i.default)(a,o.default.modulePrefix),e.default=a}),define("dummy/controllers/application",["exports","ember"],function(e,n){e.default=n.default.Controller.extend({offline:n.default.inject.service()})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,n,t){function i(){return o}e.appVersion=i;var o=t.default.APP.version;e.default=n.default.Helper.helper(i)}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){var i=t.default.APP,o=i.name,a=i.version;e.default={name:"App Version",initialize:(0,n.default)(o,a)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,n){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function i(){var e=arguments[1]||arguments[0];if(t.default.exportApplicationGlobal!==!1){var i;if("undefined"!=typeof window)i=window;else if("undefined"!=typeof global)i=global;else{if("undefined"==typeof self)return;i=self}var o,a=t.default.exportApplicationGlobal;o="string"==typeof a?a:n.default.String.classify(t.default.modulePrefix),i[o]||(i[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[o]}}))}}e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("dummy/initializers/offline",["exports","dummy/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0];window.Offline.options=n.default.emberOffline,e.register("offline:main",window.Offline,{instantiate:!1}),e.inject("service:offline","offline","offline:main")}e.initialize=t,e.default={name:"offline",initialize:t}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){e.default=n.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var i=n.default.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL});i.map(function(){}),e.default=i}),define("dummy/routes/application",["exports","ember"],function(e,n){e.default=n.default.Route.extend({init:function(){window.setInterval(this.checking,3e3)},checking:function(){this.$.get("/ajax_test")}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/services/offline",["exports","ember-offline/services/offline"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"z2SHnKKZ",block:'{"statements":[["open-element","h2",[]],["static-attr","id","title"],["flush-element"],["text","Welcome to Ember.js"],["close-element"],["text","\\n\\nDisconnect your internet connection to see how it works.\\n"],["open-element","br",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","br",[]],["flush-element"],["close-element"],["text","\\nStatus: "],["append",["helper",["if"],[["get",["offline","isUp"]],"Online","Offline"],null],false],["text","\\n\\n"],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",i=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),o=JSON.parse(unescape(i)),a={default:o};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-offline",version:"0.1.0+086e085f"});