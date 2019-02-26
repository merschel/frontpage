import { TileStorageService } from './../../services/tile-storage.service'
import { Component, OnInit, Input } from '@angular/core'
import { Tile } from '../../model/tile'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { TileDialogComponent } from '../tile-dialog/tile-dialog.component'

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() tile: Tile

  constructor(private tileStorageService: TileStorageService,
              public dialog: MatDialog ) {

  }

  ngOnInit() {

  }

  onAddTile() {

    let empty: Tile = { url: '', text: '', isAddTile: true }

    const dialogRef = this.dialog.open( TileDialogComponent, { data: empty } )

    dialogRef.afterClosed().subscribe( tile => {

      if ( tile ) {

        this.tileStorageService.add(tile)

      }

    })

  }

  onRemoveTile() {

    this.tileStorageService.remove(this.tile)

  }

}
