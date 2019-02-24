import { TileStorageService } from './../../services/tile-storage.service';
import { Component, OnInit, Input } from '@angular/core'
import { Tile } from '../../model/tile'

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() tile: Tile

  constructor(private tileStorageService: TileStorageService) { }

  ngOnInit() {

  }

  onAddNewTile() {

    let tile: Tile = { url: '', text: '9' }

    this.tileStorageService.addNew(tile)

  }

}
