import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask, RunSchematicTask} from '@angular-devkit/schematics/tasks';
import {addPackageToPackageJson} from '../utils/package-config';
import {angularCdkVersion, zorroVersion} from '../utils/version-names';
import {Schema} from './schema';

/**
 * Schematic factory entry-point for the `ng-add` schematic. The ng-add schematic will be
 * automatically executed if developers run `ng add ng-itrunner`.
 *
 * Since the NG-iTRunner schematics depend on the schematic utility functions from the CDK,
 * we need to install the CDK before loading the schematic files that import from the CDK.
 */
export default function(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    addPackageToPackageJson(host, '@angular/cdk', angularCdkVersion);
    addPackageToPackageJson(host, 'ng-zorro-antd', zorroVersion);

    const installTaskId = context.addTask(new NodePackageInstallTask());

    context.addTask(new RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
  };
}
