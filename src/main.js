import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.developmentLogging(environment.debug ? 'info' : 'warn');
  aurelia.use.plugin('aurelia-dialog');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.ignoreTransitions = true;
      config.settings.centerHorizontalOnly = true;
    });
  }

  aurelia.start().then(() => aurelia.setRoot());
}
