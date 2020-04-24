import {chain, noop, Rule, Tree} from '@angular-devkit/schematics';
import {addModuleImportToModule, buildComponent, findModuleFromOptions} from '@angular/cdk/schematics';
import {Schema} from './schema';

export default function(options: Schema): Rule {
  return chain([
    buildComponent({...options}, {
      template: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html.template',
      stylesheet:
        './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.__style__.template',
    }),
    options.skipImport ? noop() : addRequiredModulesToModule(options)
  ]);
}

/**
 * Adds the required modules to the relative module.
 */
function addRequiredModulesToModule(options: Schema) {
  return (host: Tree) => {
    const modulePath = findModuleFromOptions(host, options)!;
    addModuleImportToModule(host, modulePath, 'NiInlineLoginFormModule', 'ng-itrunner/inline-login-form');
    return host;
  };
}
