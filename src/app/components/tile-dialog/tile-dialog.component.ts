import { UrlService } from 'src/app/services/url.service';
import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { Tile } from '../../model/tile'
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-tile-dialog',
  templateUrl: './tile-dialog.component.html',
  styleUrls: ['./tile-dialog.component.css'],
  providers: [UrlService]
})
export class TileDialogComponent implements OnInit {

  mForm: FormGroup
  mText: string

  constructor(private dialogRef: MatDialogRef<TileDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public tile: Tile,
              private formBuilder: FormBuilder,
              private urlService: UrlService) { }

  ngOnInit() {
    this.setValues()
    this.onUrlChange()
  }

  get url(): AbstractControl {
    console.log('dfgvjklenvnde')
    return this.mForm.get('url')
  }

  setValues() {

    this.mForm = this.formBuilder.group({
      url: this.tile.url ? this.tile.url : '',
      text: this.tile.text ? this.tile.text : ''
    })

  }

  onSubmit() {

    this.tile.url = this.mForm.value.url

    this.tile.text = this.mForm.value.text

    this.dialogRef.close( this.tile )

  }

  onUrlChange() {

    this.mForm.get('url').valueChanges.subscribe( url => {

      this.urlService.set(url)

      if ( this.urlService.hostname !== 'localhost' ) {

        this.mForm.get('text').setValue(this.urlService.hostname)

      }

    })

  }

}
