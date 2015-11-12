import {bundleStore, stateStore} from '../writers';
import {bundle} from '../bundle';

/* Since TypeScript doesn't support object deconstruction. Lifted from babel transpilation */
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

let parseConfig = (config: any) => {
  let { path: url } = config;

  let remainingOptions = _objectWithoutProperties(config, ['path']);

  let stateConfig = Object.assign({ url }, remainingOptions);

  let selector = bundleStore.get('selector', stateConfig.component);

  if (!stateConfig.template && !stateConfig.templateUrl) {
      stateConfig.template = `<${selector} [params]="$stateParams"></${selector}>`;
  }

  if (!stateConfig.controller) {
    stateConfig.controller = ['$scope', '$stateParams', ($scope, $stateParams) => {
        $scope.$stateParams = $stateParams;
    }];
  }

  return stateConfig;
}

let parseState = ($stateProvider: any, name: string, config: any) => {
  let parsedConfig = parseConfig(config);

  $stateProvider.state(name, parsedConfig);

  stateStore.forEach((childConfig, childName) => {
    parseState($stateProvider, `${name}.${childName}`, childConfig);
  }, config.component);
}

export function parseStates(rootComponent: any, moduleName: string = 'app.config.states') {
  return bundle(moduleName, rootComponent, [])
  .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });

    stateStore.forEach((config, name) => {
      parseState($stateProvider, name, config);
    }, rootComponent);
  }]);

}
