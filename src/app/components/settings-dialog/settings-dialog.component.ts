import { GroupStorageService } from './../../services/group-storage.service'
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Group } from './../../model/group'
import { Component, OnInit, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { YesNoDialogInput, YesNoDialogComponent } from './../yes-no-dialog/yes-no-dialog.component'

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Input Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Output Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Member Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  mForm: FormGroup

  //////////////////////////////////////////////
  //////////////////////////////////////////////
            //    Constructor    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  constructor( public dialogRef: MatDialogRef<SettingsDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public group: Group,
               private formBuilder: FormBuilder,
               private dialog: MatDialog,
               public groupStorage: GroupStorageService) { }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Life Cycle Functions     //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  ngOnInit() {

    this.setValues()

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  onSubmit() {

    let group = {
      name:            this.mForm.value.name,
      tiles:           this.group ? this.group.tiles : [],
      settings: {
        numberOfColumns: this.mForm.value.numberOfColumns
      }
    }

    if ( this.group ) { // on change a group
      this.group.name = this.mForm.value.name
      this.group.settings.numberOfColumns = this.mForm.value.numberOfColumns
    }

    this.dialogRef.close( group )

  }

  onRemoveGroup() {

    const yesNoDialogInput: YesNoDialogInput = {

      question: 'Soll die Gruppe ' + this.group.name + ' gelöscht werden?',
      title: 'Löschen'

    }

    const dialogRef = this.dialog.open( YesNoDialogComponent, { data: yesNoDialogInput } )

    dialogRef.afterClosed().subscribe( result => {

      if ( result ) {

        this.groupStorage.remove( this.group )

        if ( this.groupStorage.isEmpty ) {

          this.groupStorage.addDefaultGroup()

        }

        this.dialogRef.close( )

      }

    })

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Private Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private setValues() {

    if ( this.group ) {

      this.mForm = this.formBuilder.group({

        name:            this.group.name,
        numberOfColumns: this.group.settings.numberOfColumns

      })

    } else {

      this.mForm = this.formBuilder.group({

        name:           'Neu',
        numberOfColumns: 5

      })

    }

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

}
