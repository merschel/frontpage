
// Modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

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
import { MatCardModule } from '@angular/material/card'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatDividerModule } from '@angular/material/divider'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSnackBarModule } from '@angular/material/snack-bar'

// Components
import { AppComponent } from './app.component'
import { MainComponent } from './components/main/main.component'
import { TileComponent } from './components/tile/tile.component'
import { GroupComponent } from './components/group/group.component'
import { TilePlusComponent } from './components/tile-plus/tile-plus.component'
import { ActionBarComponent } from './components/action-bar/action-bar.component'
import { TileDialogComponent } from './components/tile-dialog/tile-dialog.component'
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component'
import { DropZoneDialogComponent } from './components/drop-zone-dialog/drop-zone-dialog.component'
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component'

// Services
import { GroupStorageService } from './services/group-storage.service'

// Directives
import { IntegerKeyOnlyDirective } from './directives/numeric-key-only.directive'
import { DropZoneDirective } from './directives/drop-zone.directive'

// Pipes
import { KeysPipe } from './pipes/keys'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TileComponent,
    GroupComponent,
    TileDialogComponent,
    TilePlusComponent,
    IntegerKeyOnlyDirective,
    YesNoDialogComponent,
    KeysPipe,
    ActionBarComponent,
    DropZoneDirective,
    DropZoneDialogComponent,
    SettingsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTabsModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatCardModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  providers: [
    GroupStorageService,
  ],
  entryComponents: [
    TileDialogComponent,
    YesNoDialogComponent,
    DropZoneDialogComponent,
    SettingsDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
