// Modules

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

// Material Imports

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTabsModule } from '@angular/material/tabs'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

// Components

import { AppComponent } from './app.component'
import { MainComponent } from './components/main/main.component'
import { TileComponent } from './components/tile/tile.component'
import { FloorComponent } from './components/floor/floor.component'
import { SettingsComponent } from './components/settings/settings.component'
// Services

import { SettingsStorageService } from './services/settings-storage.service'

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
    HttpClientModule,
    MatTabsModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    SettingsStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
