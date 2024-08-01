import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_REDUCER } from './core/state/app.state';
import { provideEffects } from '@ngrx/effects';
import { TaskEffect } from './core/state/effects/task.effect';
import {
  apiTokenInterceptor,
  baseUrlInterceptor,
} from './core/utils/request.interceptor';
import { UserEffect } from './core/state/effects/user.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync('noop'),
    provideHttpClient(
      withInterceptors([baseUrlInterceptor, apiTokenInterceptor]),
    ),
    provideStore(ROOT_REDUCER),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(TaskEffect, UserEffect),
  ],
};
