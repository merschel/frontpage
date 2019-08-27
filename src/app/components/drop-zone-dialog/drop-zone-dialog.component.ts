import { Group } from './../../model/group';
import { IoService } from './../../services/io.service'
import { Component, OnInit } from '@angular/core'
import { GroupStorageService } from '../../services/group-storage.service'
import { MatDialog, MatDialogRef } from '@angular/material'
import { YesNoDialogComponent, YesNoDialogInput } from './../yes-no-dialog/yes-no-dialog.component'
import { MatSnackBar } from '@angular/material/snack-bar'

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
               private dialogRef: MatDialogRef<DropZoneDialogComponent>,
               private snackBar: MatSnackBar ) { }

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

      const error = new Error('Nicht mehr als eine Datei nutzten!')

      this.snackBar.open(error.message, 'OK', {
        duration: 5000,
      })

      console.error(error.message)

     } else {

      this.io.read( files[0] ).then( rawDate => {

        return this.io.extractGroupsFrom( rawDate )

      }).then( groups => {

        this.handleImportOf(groups)

      }).catch( error => {

        this.snackBar.open(error.message, 'OK', {
          duration: 5000,
        })

        console.error(error.message)

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

      return this.groupStorage.import( groups ).then( () => {

        this.snackBar.open('Gespeichert', 'OK', {
          duration: 5000,
        })

        this.dialogRef.close()

      }).catch( error => {

        this.snackBar.open(error.message, 'OK', {
          duration: 5000,
        })

        console.error(error.message)

        this.dialogRef.close()

      })

    } else {

      const yesNoDialogInput: YesNoDialogInput = {
        question: 'Sollen die vorhanden Daten überschrieben werden?',
        title: 'Daten Import'
      }

      const dialogRef = this.dialog.open( YesNoDialogComponent, { data: yesNoDialogInput} )

      dialogRef.afterClosed().subscribe( result =>  {

        if ( result ) {

          return this.groupStorage.import( groups ).then( () => {

            this.snackBar.open('Gespeichert', 'OK', {
              duration: 5000,
            })

            this.dialogRef.close()

          }).catch( error => {

            this.snackBar.open(error.message, 'OK', {
              duration: 5000,
            })

            console.error(error.message)

            this.dialogRef.close()

          })

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
