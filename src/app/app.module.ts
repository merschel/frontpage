// Modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

// Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTabsModule } from '@angular/material/tabs'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatTableModule } from '@angular/material/table'

// Components
import { AppComponent } from './app.component'
import { MainComponent } from './components/main/main.component'
import { TileComponent } from './components/tile/tile.component'
import { GroupComponent } from './components/group/group.component'
import { SettingsComponent } from './components/settings/settings.component'
import { TileDialogComponent } from './components/tile-dialog/tile-dialog.component'
import { TilePlusComponent } from './components/tile-plus/tile-plus.component'

// Services
import { GroupStorageService } from './services/group-storage.service'

// Directives
import { IntegerKeyOnlyDirective } from './directives/numeric-key-only.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TileComponent,
    GroupComponent,
    SettingsComponent,
    TileDialogComponent,
    TilePlusComponent,
    IntegerKeyOnlyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [
    GroupStorageService,
  ],
  entryComponents: [
    TileDialogComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
