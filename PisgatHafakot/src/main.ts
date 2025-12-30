import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Landing } from './component/landing/landing';


bootstrapApplication(Landing)
  .catch((err) => console.error(err));
