# demo-flex-dialog

To answer https://discourse.aurelia.io/t/how-to-ensure-dialog-header-and-footer-are-always-visible/1148

Flex layout to rescue, css in `src/dialog-flex.css`.

> You need `<body aurelia-app="main" class="ux-dialog-flex">` for css to take effect.

> Limitation: only works with `config.settings.centerHorizontalOnly = true;`

To run:
```
npm i -g aurelia-cli
npm i
au run --watch
```
