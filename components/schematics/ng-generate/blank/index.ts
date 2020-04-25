import {Rule, Tree} from '@angular-devkit/schematics';
import {addModuleImportToRootModule, getProjectFromWorkspace} from '@angular/cdk/schematics';
import {getWorkspace} from '@schematics/angular/utility/config';
import {existsSync, statSync as fsStatSync} from 'fs';
import {Schema} from './schema';
import {itRunnerImage} from '../../utils/image';

const bootPageHTML = `<!-- NG-iTRunner -->
<a href="https://github.com/sunjc/ng-itrunner" target="_blank" style="display: flex;align-items: center;justify-content: center;width: 100%;">
  <img height="382" src="${itRunnerImage}" >
</a>
<div style="text-align: center">
  <ni-hello></ni-hello>
</div>`;

export default function(options: Schema): Rule {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    const appHTMLFile = `${project.sourceRoot}/app/app.component.html`;
    const buffer = host.read(appHTMLFile);

    if (!buffer) {
      console.error(`Could not find the project ${appHTMLFile} file inside of the workspace config`);
      return;
    }

    if (existsSync(appHTMLFile)) {
      const stat = fsStatSync(appHTMLFile);
      if (stat.mtimeMs === stat.ctimeMs) {
        host.overwrite(appHTMLFile, bootPageHTML);
      }
    } else {
      host.overwrite(appHTMLFile, bootPageHTML);
    }

    addModuleImportToRootModule(host, 'NiHelloLibModule', 'ng-itrunner/hello-lib', project);

    return host;
  };
}
