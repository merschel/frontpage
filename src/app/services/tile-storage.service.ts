import { Tile } from './../model/tile'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TileStorageService {

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Member Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private mTiles: BehaviorSubject<Tile[]>

  //////////////////////////////////////////////
  //////////////////////////////////////////////
            //    Constructor    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  constructor() {

    this.mTiles = new BehaviorSubject(this.default())

    this.load().then( tiles => {

      this.mTiles.next(tiles)

    }).catch( error => {

      console.log()

    })

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  add(tile: Tile) {

    tile.isAddTile = false

    const length = this.mTiles.value.length

    this.mTiles.value.splice( length - 1, 0, tile )

    this.save().then( () => {

        // TODO give feedback

    }).catch( error => {

      console.log(error) // TODO

    })

  }

  onChange() {

    this.save().then( () => {

      // TODO give feedback

    }).catch( error => {

      console.log(error) // TODO

    })

  }

  remove( tile: Tile ) {

    this.mTiles.value.forEach( ( val, i) => {

      if ( val === tile ) {

        this.mTiles.value.splice(i, 1)

      }

    })

    this.save().then( () => {

      // TODO give feedback

    }).catch( error => {

      console.log(error) // TODO

    })

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Private Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private save(): Promise<void> {

    return new Promise( (resolve, reject) => {

      try {

        localStorage.setItem( 'tiles', JSON.stringify( this.mTiles.value ))

        resolve()

      } catch ( error ) {

        reject( error )

      }

    })

  }

  private load(): Promise<Tile[]> {

    return new Promise( (resolve, reject) => {

      try {

        const tiles: Tile[] = JSON.parse(localStorage.getItem('tiles'))

        if ( tiles ) {

          resolve( tiles )

        } else {

          reject( new Error() ) // TODO

        }

      } catch (error) {

        reject(error)

      }

    })

  }

  private default(): Tile[] {

     return [ { url: '', text: 'Hinzufügen', isAddTile: true } ]

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  get tiles(): BehaviorSubject<Tile[]> {

    return this.mTiles

  }

  get numberOfTiles(): number {

    return this.mTiles.value.length

  }

}
