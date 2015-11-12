import {stateStore} from '../writers';

export function StateConfig(configs: Array<any>) {
  return function(target: any) {
    configs.forEach(config => {
      if (!config.name) {
        throw new Error('Config object is missing a name property');
      }

      if (!config.component) {
        throw new Error('Config object is missing a component property');
      }

      stateStore.set(config.name, config, target);
    });
  }
};