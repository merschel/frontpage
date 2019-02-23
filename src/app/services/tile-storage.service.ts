import { Injectable } from '@angular/core';
import { Tile } from '../model/tile';

@Injectable({
  providedIn: 'root'
})
export class TileStorageService {

  mTiles: Tile[];

  constructor() { }


}
