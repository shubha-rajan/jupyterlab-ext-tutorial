import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the spacepix extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'spacepix',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension spacepix is activated!');
  }
};

export default extension;
