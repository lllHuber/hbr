System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "application/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-rc.1.0.0",
    "aurelia-api": "npm:aurelia-api@3.0.0-rc4",
    "aurelia-authentication": "npm:aurelia-authentication@3.0.0-rc5",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.0",
    "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-rc.1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
    "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.0",
    "aurelia-ui-virtualization": "npm:aurelia-ui-virtualization@1.0.0-beta.1.0.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "jquery": "npm:jquery@2.2.4",
    "jquery-ui": "github:components/jqueryui@1.11.4",
    "paulvanbladel/aurelia-auth": "github:paulvanbladel/aurelia-auth@2.2.2",
    "github:components/jqueryui@1.11.4": {
      "jquery": "npm:jquery@2.2.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:paulvanbladel/aurelia-auth@2.2.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-api@3.0.0-rc4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
      "extend": "npm:extend@3.0.0",
      "qs": "npm:qs@6.2.0"
    },
    "npm:aurelia-authentication@3.0.0-rc5": {
      "aurelia-api": "npm:aurelia-api@3.0.0-rc4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "extend": "npm:extend@3.0.0",
      "jwt-decode": "npm:jwt-decode@2.0.1"
    },
    "npm:aurelia-binding@1.0.0-rc.1.0.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-framework@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-history-browser@1.0.0-rc.1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-http-client@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader-default@1.0.0-rc.1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-logging-console@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-metadata@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-task-queue@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-resources@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-ui-virtualization@1.0.0-beta.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jwt-decode@2.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});