import { Tile } from './../model/tile'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Injectable } from '@angular/core'
import { Group } from './../model/group'
import { DomSanitizer } from '@angular/platform-browser'
import { saveAs } from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class GroupStorageService {

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Member Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private mGroups: BehaviorSubject<Group[]>

  //////////////////////////////////////////////
  //////////////////////////////////////////////
            //    Constructor    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  constructor() {

    this.mGroups = new BehaviorSubject( this.default() )

    this.load().then( groups => {

      this.mGroups.next( groups )

    }).catch( error => {

        // todo

    })

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  findGroupOf( tile: Tile ): Group {

    this.mGroups.value.forEach( group => {

      group.tiles.forEach( it => {

        if ( it === tile ) { return group }

      })

    })

    return undefined

  }

  add( newGroup: Group ): void
  add( tile: Tile, toGroup: Group ): void
  add( arg1: any, arg2?: Group ): void {

    if ( this.isInstanceOfGroup(arg1) ) {

      this.mGroups.value.push( arg1 )

    } else { // arg1 = tile, arg2 = group

      arg2.tiles.push( arg1 )

    }

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

  remove( arg: Group | Tile ) {

    if ( this.isInstanceOfGroup( arg ) ) {

      this.mGroups.value.forEach( ( group, i) => {

        if ( group === arg ) {

          this.mGroups.value.splice(i, 1)

        }

      })

    } else {

      this.mGroups.value.forEach( group => {

          group.tiles.forEach( (tile, i) => {

            if ( tile === arg ) {

              group.tiles.splice(i, 1)

            }

          })

        })

    }

    this.save().then( () => {

      // TODO feedback

    }).catch( error => {

      // TODO feedback

    })

  }

  export() {

    saveAs(
      new Blob(
        [JSON.stringify(this.mGroups.value)],
        {type: 'application/json'}
      ), 'export.json'
    )

  }

  import(file: File): Promise<void> {

    return new Promise( (resolve, reject) => {

      const extractApplicationFrom = (result: string): string => {

        const idxSlash = result.indexOf( '/' )

        const idxSemicolon = result.indexOf( ';' )

        if ( idxSlash === -1 || idxSemicolon === -1 ) {

          reject()

        }

        const application = result.substring( idxSlash + 1, idxSemicolon )

        return application

      }

      const extractBase64From = (result: string): string => {

        const idxKomma = result.indexOf( ',' )

        if (idxKomma === -1) {

          reject()

        }

        const base64 = result.substr( idxKomma + 1 )

        return base64

      }

      const reader = new FileReader()

      const extractData = () => {

        const result = reader.result as string

        const application = extractApplicationFrom( result )

        if ( application !== 'json' ) {

          reject()

        }

        const base64 = extractBase64From( result )

        try {

          const json = JSON.parse( atob( base64 ) )

          this.mGroups.next(json)

          this.save().then( () => {

            resolve()

          }).catch ( error => {

            reject(error)

          })

        } catch (error) {

          reject(error)

        }

      }

      reader.onload = extractData

      reader.readAsDataURL(file)

    })

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Private Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private isInstanceOfTile( obj: any ): obj is Tile {
    return 'url' in obj
  }

  private isInstanceOfGroup( obj: any ): obj is Group {
    return 'tiles' in obj
  }

  private save(): Promise<void> {

    return new Promise( (resolve, reject) => {

      try {

        localStorage.setItem('groups', JSON.stringify( this.mGroups.value ))

        resolve()

      } catch (error) {

        reject(error)

      }

    })

  }

  private load(): Promise<Group[]> {

    return new Promise( (resolve, reject) => {

      try {

        const groups = JSON.parse( localStorage.getItem('groups') )

        if ( groups ) {

          resolve( groups )

        } else {

          reject( new Error() ) // TODO

        }

      } catch (error) {

        reject(error)

      }

    })

  }

  private default(): Group[] {

    return [{
      tiles: [],
      name: 'Allgemein',
      settings: {
        numberOfColumns: 5
      }
    }]

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  get groups(): BehaviorSubject<Group[]> {
    return this.mGroups
  }

}
