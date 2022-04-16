import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { ConfigurationSandbox } from './configuration.sandbox';
import { ConfigurationEffects } from './store/configuration.effect';
import { configurationFeatureKey, configurationReducers } from './store/configuration.reducer';
import { ConfigurationHttpService } from './shared/configuration-http.service';


@NgModule({
  declarations: [ ConfigurationComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigurationRoutingModule,
    NgxDatatableModule,
    TabsModule.forRoot(),
    StoreModule.forFeature(configurationFeatureKey, configurationReducers),
    EffectsModule.forFeature([ConfigurationEffects])
  ],
  providers: [ConfigurationSandbox, ConfigurationHttpService]
})
export class NgConfigurationModule {}
