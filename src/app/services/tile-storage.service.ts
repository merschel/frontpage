import { Tile } from './../model/tile'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TileStorageService {

  mTiles: BehaviorSubject<Tile[]>

  constructor() {

    this.mTiles = new BehaviorSubject(this.default())

    this.load().then( tiles => {

      this.mTiles.next(tiles)

    }).catch( error => {

      console.log()

    })

  }

  addNew(tile: Tile) {

    const tiles = this.mTiles.value

    tiles.push(tile)

    this.mTiles.next(tiles)

  }

  get tiles(): BehaviorSubject<Tile[]> {

    return this.mTiles

  }

  // save(): Promise<void> {
  //   return new Promise( (resolve, reject) => {
  //     resolve();
  //   });
  // }

  load(): Promise<Tile[]> {

    return new Promise( (resolve, reject) => {

      const tiles = this.mTiles.value

      if ( tiles.length > 1 ) {
        resolve( tiles )
      } else {
        reject( new Error() )
      }

    })

  }

  default(): Tile[] {
    return [ { position: 1, url: '', text: 'Hinzufügen', isNew: true } ]
  }

}
