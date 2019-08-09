import { Group } from './../../model/group';
import { IoService } from './../../services/io.service'
import { Component, OnInit } from '@angular/core'
import { GroupStorageService } from '../../services/group-storage.service'
import { MatDialog, MatDialogRef } from '@angular/material'
import { YesNoDialogComponent, YesNoDialogInput } from './../yes-no-dialog/yes-no-dialog.component'

@Component({
  selector: 'app-drop-zone-dialog',
  templateUrl: './drop-zone-dialog.component.html',
  styleUrls: ['./drop-zone-dialog.component.css']
})
export class DropZoneDialogComponent implements OnInit {

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

  mIcon: String

  //////////////////////////////////////////////
  //////////////////////////////////////////////
            //    Constructor    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  constructor( private groupStorage: GroupStorageService,
               private io: IoService,
               private dialog: MatDialog,
               private dialogRef: MatDialogRef<DropZoneDialogComponent> ) { }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Life Cycle Functions     //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  ngOnInit() {
    this.mIcon = 'file-hidden'
  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  onFileHovered(isHovered: Boolean) {
    this.mIcon = isHovered ? 'file' : 'file-hidden'
  }

  onFileDroped(files: File[]) {

    if ( files.length > 1 ) {

      // TODO Error

     } else {

      this.io.read( files[0] ).then( rawDate => {

        return this.io.extractGroupsFrom( rawDate )

      }).then( groups => {

        return this.handleImportOf(groups)

      }).then( () => {

        // speichern erfolgreich TODO

      }).catch( error => {

        // TODO Error

      })

    }

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Private Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private handleImportOf(groups: [Group]): Promise<void> {

    if ( this.groupStorage.isEmpty ) {

      return this.groupStorage.import( groups )

    } else {

      const yesNoDialogInput: YesNoDialogInput = {
        question: 'Sollen die vorhanden Daten überschrieben werden?',
        title: 'Daten Import'
      }

      const dialogRef = this.dialog.open( YesNoDialogComponent, { data: yesNoDialogInput} )

      dialogRef.afterClosed().subscribe( result =>  {

        if ( result ) {

          return this.groupStorage.import( groups )

        } else {

          this.dialogRef.close()

        }

      })

    }

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

}
