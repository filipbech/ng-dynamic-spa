/**
 * This file should be temporary
 * See https://github.com/angular/angular-cli/pull/5194
 */
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModuleNgFactory } from './ngfactory/app/server-app.module.ngfactory';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';
enableProdMode();
const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', { index: false }));

app.get('*', (req, res) => {
  console.time(`GET: ${req.originalUrl} (SSR AOT)`);
  res.render('../dist/index', {
    req: req,
    res: res
  });
  console.timeEnd(`GET: ${req.originalUrl} (SSR AOT)`);
});

app.listen(8000, () => {
  console.log(`Listening at ${baseUrl}`);
});
