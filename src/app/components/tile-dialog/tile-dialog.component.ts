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
  mSchemes = ['https:', 'http:', '-']

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
    this.onUrlChange()
  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  onSubmit() {

    this.tile.url = this.mForm.value.url

    this.tile.text = this.mForm.value.text

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

      this.mSchemeControl.setValue(this.mSchemes[0])

      this.mForm = this.formBuilder.group({

        url: '',
        text: ''

      })

    } else {

      this.urlService.url = this.tile.url

      this.mSchemeControl.setValue( this.urlService.protocol )

      this.mForm = this.formBuilder.group({

        url: this.urlService.hostname,
        text: this.tile.text

      })

    }


    // this.mForm = this.formBuilder.group({
    //   url: this.tile.url ? this.tile.url : '',
    //   text: this.tile.text ? this.tile.text : ''
    // })

  }

  private onUrlChange() {

    this.mForm.get('url').valueChanges.subscribe( url => {

      this.urlService.url = url

      if ( this.urlService.protocol ) {

        this.mSchemeControl.setValue(this.urlService.protocol)

      } else {

        this.urlService.url = this.mSchemeControl.value + url

      }

      if ( this.urlService.hostname !== 'localhost' ) {

        this.mForm.get('text').setValue(this.urlService.hostname)

      }

    })

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

}
