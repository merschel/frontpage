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

    tile.isAddTile = false

    const tiles = this.mTiles.value

    tiles.splice( tiles.length - 1, 0, tile )

    this.save().then( () => {

      this.mTiles.next(tiles)

    })

  }

  get tiles(): BehaviorSubject<Tile[]> {

    return this.mTiles

  }

  get numberOfTiles(): number {

    return this.mTiles.value.length

  }

  save(): Promise<void> {
    return new Promise( (resolve) => {

      localStorage.setItem( 'tiles', JSON.stringify( this.mTiles.value ))

      resolve()

    })

  }

  load(): Promise<Tile[]> {

    return new Promise( (resolve, reject) => {

      const tiles: Tile[] = JSON.parse(localStorage.getItem('tiles'))

      if ( tiles ) {

        resolve( tiles )

      } else {

        reject( new Error() ) // TODO

      }

    })

  }

  default(): Tile[] {

     return [ { url: '', text: 'Hinzufügen', isAddTile: true } ]

  }

}
