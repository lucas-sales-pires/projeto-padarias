import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment  } from './environments/environment';

import { IonicModule } from '@ionic/angular';



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
  
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},

    provideIonicAngular(),
    provideRouter(routes), 
    importProvidersFrom(
            IonicModule.forRoot(),
        
                  )
  ],
});

