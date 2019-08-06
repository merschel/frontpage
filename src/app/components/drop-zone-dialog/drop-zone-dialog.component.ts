import { Component, OnInit } from '@angular/core'
import { GroupStorageService } from '../../services/group-storage.service'

@Component({
  selector: 'app-drop-zone-dialog',
  templateUrl: './drop-zone-dialog.component.html',
  styleUrls: ['./drop-zone-dialog.component.css']
})
export class DropZoneDialogComponent implements OnInit {

  mIcon: String

  constructor( private groupStorage: GroupStorageService ) { }

  ngOnInit() {

    this.mIcon = 'file-hidden'

  }

  onFileHovered(isHovered: Boolean) {

    this.mIcon = isHovered ? 'file' : 'file-hidden'

  }

  selecetdFile: File

  onFileUpload(event) {

    this.selecetdFile = event.target.files[0]

  }

  onFileDroped(files: File[]) {

    if ( files.length > 1 ) {

      // TODO Error

     } else {

      this.groupStorage.import(files[0]).then(
        // TODO response
      )

    }

  }

}
