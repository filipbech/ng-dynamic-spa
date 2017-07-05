import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import * as fs from 'fs';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModule } from './app/server-app.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';
enableProdMode();
const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', {index: false}));

app.get('*', (req, res) => {
  console.time(`GET: ${req.originalUrl} (no ssr)`);
  res.header('Content-Type','text/html');
  res.send(fs.readFileSync('./dist/index.html'));
  
  console.timeEnd(`GET: ${req.originalUrl} (no ssr)`);
});

app.listen(8000,() => {
	console.log(`Listening at ${baseUrl}`);
});
