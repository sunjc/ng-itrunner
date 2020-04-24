import {chain, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {RunSchematicTask} from '@angular-devkit/schematics/tasks';
import {getProjectFromWorkspace} from '@angular/cdk/schematics';
import {getWorkspace} from '@schematics/angular/utility/config';
import {getProjectStyle} from '../utils/project-style';
import {Schema} from './schema';

/**
 * Scaffolds the basics of a Angular Material application, this includes:
 *  - Add Packages to package.json
 *  - Adds pre-built themes to styles.ext
 *  - Adds Browser Animation to app.module
 */
export default function(options: Schema): Rule {
  return chain([
    addTemplate(options)
  ]);
}

function addTemplate(options: Schema) {
  return (host: Tree, context: SchematicContext) => {
    if (options.template) {
      const workspace = getWorkspace(host);
      const project = getProjectFromWorkspace(workspace, options.project);
      const style = getProjectStyle(project);
      context.addTask(new RunSchematicTask(options.template, {...options, style: style}));
    }
    return host;
  };
}
