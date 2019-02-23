// Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Material Imports

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

// Components

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TileComponent } from './components/tile/tile.component';
import { FloorComponent } from './components/floor/floor.component';
import { SettingsComponent } from './components/settings/settings.component';

// Services

import { SettingsStorageService } from './services/settings-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TileComponent,
    FloorComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [
    SettingsStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
