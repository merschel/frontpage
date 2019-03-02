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

  private mForm: FormGroup

  constructor(private dialogRef: MatDialogRef<TileDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public tile: Tile,
              private formBuilder: FormBuilder,
              private urlService: UrlService) { }

  ngOnInit() {
    this.setValues()
    this.onUrlChange()
  }

  onSubmit() {

    this.tile.url = this.mForm.value.url

    this.tile.text = this.mForm.value.text

    this.dialogRef.close( this.tile )

  }

  private setValues() {

    this.mForm = this.formBuilder.group({
      url: this.tile.url ? this.tile.url : '',
      text: this.tile.text ? this.tile.text : ''
    })

  }

  private onUrlChange() {

    this.mForm.get('url').valueChanges.subscribe( url => {

      this.urlService.set(url)

      if ( this.urlService.hostname !== 'localhost' ) {

        this.mForm.get('text').setValue(this.urlService.hostname)

      }

    })

  }

}
