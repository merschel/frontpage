import { Tile } from './../model/tile'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Injectable } from '@angular/core'
import { Group } from './../model/group'
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

  import(groups: [Group]): Promise<void> {

    this.mGroups.next(groups)

    return this.save()

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

  get isEmpty(): boolean {

    const groups = this.mGroups.value

    if ( groups.length === 0 ) {
      return true
    }

    if ( groups.length > 1 ) { // Maybe there is only the default value
      return false
    }

    const defaultGroup = this.default()[0]

    if ( groups[0].tiles.length === 0 &&
         groups[0].name === defaultGroup.name &&
         groups[0].settings.numberOfColumns === defaultGroup.settings.numberOfColumns) {
      return true
    }

    return false

  }

}
