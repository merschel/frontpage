import { Settings } from './../model/settings'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class SettingsStorageService {

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Member Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private mSettings: BehaviorSubject<Settings>

  //////////////////////////////////////////////
  //////////////////////////////////////////////
            //    Constructor    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  constructor() {

    this.mSettings = new BehaviorSubject(this.default())

    this.load().then( settings => {

        this.mSettings.next(settings)

    }).catch( error => {

      console.log(error)

    })

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Private Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private save(): Promise<void> {

    return new Promise( (resolve, reject) => {

      try {

        localStorage.setItem( 'settings', JSON.stringify(this.mSettings.value) )

        resolve()

      } catch(error) {

        reject(error)

      }

    })

  }

  private load(): Promise<Settings> {

    return new Promise( (resolve, reject) => {

      try {

        const settings: Settings = JSON.parse(localStorage.getItem('settings'))

        if ( settings ) {

          resolve(settings)

        } else {

          reject( new Error() ) // TODO

        }

      } catch(error) {

        reject( error )

      }

    })

  }

  private default(): Settings {

    return {numberOfTileColumns : 5}

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  setNumberOfTileColumnsTo( numberOfTileColumns: number ) {

    const settings = this.mSettings.value

    settings.numberOfTileColumns = numberOfTileColumns

    this.save().then( () => {

      this.mSettings.next(settings)

    }).catch( error => {

      console.log(error) // TODO

    })

  }

  get settings(): BehaviorSubject<Settings> {

    return this.mSettings

  }

}
