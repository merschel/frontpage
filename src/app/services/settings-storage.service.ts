import { Settings } from './../model/settings'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class SettingsStorageService {

  private mSettings: BehaviorSubject<Settings>

  constructor() {

    this.mSettings = new BehaviorSubject(this.default())

    this.load().then( settings => {

        this.mSettings.next(settings)

    }).catch( error => {

      console.log(error)

    })

  }

  setNumberOfTileColumnsTo( numberOfTileColumns: number ) {

    const settings = this.mSettings.value

    settings.numberOfTileColumns = numberOfTileColumns

    this.save().then( () => {

      this.mSettings.next(settings)

    })

  }

  get settings(): BehaviorSubject<Settings> {

    return this.mSettings

  }

  save(): Promise<void> {

    return new Promise( (resolve, reject) => {

      try {

        localStorage.setItem( 'settings', JSON.stringify(this.mSettings.value) )

        resolve()

      } catch(error) {

        reject(error)

      }

    })

  }

  load(): Promise<Settings> {

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

  default(): Settings {

    return {numberOfTileColumns : 5}

  }

}
