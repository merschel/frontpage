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

    this.mSettings.next(settings)

  }

  get settings(): BehaviorSubject<Settings> {

    return this.mSettings

  }

  save(): Promise<void> {
    return new Promise( (resolve, reject) => {
      resolve()
    })
  }

  load(): Promise<Settings> {

    return new Promise( (resolve, reject) => {

      const settings: Settings = { numberOfTileColumns: 5 }

      if ( settings ) {
        resolve(settings)
      } else {
        reject( new Error() )
      }

    })

  }

  default(): Settings {
    return {numberOfTileColumns : 5}
  }

}
