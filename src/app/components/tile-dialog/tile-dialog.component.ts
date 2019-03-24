import { Scheme } from './../../model/scheme'
import { UrlService } from 'src/app/services/url.service'
import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { Tile } from '../../model/tile'
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'

@Component({
  selector: 'app-tile-dialog',
  templateUrl: './tile-dialog.component.html',
  styleUrls: ['./tile-dialog.component.css'],
  providers: [UrlService]
})
export class TileDialogComponent implements OnInit {

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
  mSchemeControl: FormControl
  mSchemes = Scheme

  //////////////////////////////////////////////
  //////////////////////////////////////////////
            //    Constructor    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  constructor(private dialogRef: MatDialogRef<TileDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public tile: Tile,
              private formBuilder: FormBuilder,
              private urlService: UrlService) { }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Life Cycle Functions     //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  ngOnInit() {

    this.setValues()

    if ( this.tile.url === '' ) {
      this.onPictureUrlChange()
    }

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  onSubmit() {

    this.tile.url = this.mForm.value.url

    this.tile.text = this.mForm.value.text

    this.tile.pictureUrl = this.mForm.value.pictureUrl

    this.tile.scheme = this.mSchemeControl.value

    if ( this.tile.url || this.tile.text ) {

      this.dialogRef.close( this.tile )

    } else {

      this.dialogRef.close()

    }

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Private Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private setValues() {

    this.mSchemeControl = new FormControl()

    if ( this.tile.url === '' ) {

      this.mSchemeControl.setValue( Scheme.default )

      this.mForm = this.formBuilder.group({

        pictureUrl: '',
        url:        '',
        text:       ''

      })

    } else {

      this.mSchemeControl.setValue( this.tile.scheme )

      this.mForm = this.formBuilder.group({

        pictureUrl: this.tile.pictureUrl,
        url:        this.tile.url,
        text:       this.tile.text,

      })

    }

  }

  // private onUrlChange() {

  //   this.mForm.get('url').valueChanges.subscribe( url => {

  //     this.urlService.url = url

  //     if ( this.urlService.protocol ) {

  //       this.mSchemeControl.setValue(this.urlService.protocol)

  //     } else {

  //       this.urlService.url = this.mSchemeControl.value + url

  //     }

  //     if ( this.urlService.hostname !== 'localhost' ) {

  //       this.mForm.get('text').setValue(this.urlService.hostname)

  //     }

  //   })

  // }

  private onPictureUrlChange() {

    this.mForm.get('pictureUrl').valueChanges.subscribe( pictureUrl => {

      this.urlService.url = pictureUrl

      if ( this.urlService.hostname !== 'localhost' ) {

        this.mForm.get('url').setValue(this.urlService.hostname)
        this.mForm.get('text').setValue(this.urlService.hostname)

        this.mSchemeControl.setValue(this.urlService.protocol)

      }

    })

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

}
