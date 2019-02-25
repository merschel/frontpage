import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { Tile } from '../../model/tile'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-tile-dialog',
  templateUrl: './tile-dialog.component.html',
  styleUrls: ['./tile-dialog.component.css']
})
export class TileDialogComponent implements OnInit {

  form: FormGroup

  constructor(private dialogRef: MatDialogRef<TileDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public tile: Tile,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      url: this.tile.url ? this.tile.url : '',
      text: this.tile.text ? this.tile.text : ''
    })
  }

  onSubmit( form ) {

    this.tile.url = 'https://' + this.form.value.url

    this.tile.text = this.form.value.text

    this.dialogRef.close( this.tile )
  }

}
