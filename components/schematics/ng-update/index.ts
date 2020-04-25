import {Rule, SchematicContext} from '@angular-devkit/schematics';
import {createUpgradeRule, TargetVersion} from '@angular/cdk/schematics';
import {ruleUpgradeData} from './upgrade-data';

/** Entry point for the migration schematics with target of NG-iTRunner v9 */
export function updateToV9(): Rule {
  return createUpgradeRule(TargetVersion.V9, [], ruleUpgradeData, onMigrationComplete);
}

/** Function that will be called when the migration completed. */
function onMigrationComplete(context: SchematicContext, targetVersion: TargetVersion,
                             hasFailures: boolean) {
  context.logger.info('');
  context.logger.info(`  ✓  Updated NG-iTRunner to ${targetVersion}`);
  context.logger.info('');

  if (hasFailures) {
    context.logger.warn(
      '  ⚠  Some issues were detected but could not be fixed automatically. Please check the ' +
      'output above and fix these issues manually.');
  }
}
