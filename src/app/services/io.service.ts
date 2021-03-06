import { Group } from './../model/group'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class IoService {

  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //   Input Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //   Output Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //   Member Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //    Constructor    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  constructor() { }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Life Cycle Functions     //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  read(file: File): Promise<string> {

    return new Promise( ( resolve, reject ) => {

      const reader = new FileReader()

      reader.onload = () => {

        resolve( reader.result as string )

      }

      reader.onerror = () => {

        reject(new Error('Konnte die Datei nicht lesen.'))

      }

      reader.readAsDataURL( file )

    })

  }

  extractGroupsFrom( rawData: string ): Promise<[Group]> {

    return new Promise( ( resolve, reject ) => {

      const application = this.extractApplicationFrom( rawData )

      if ( application !== 'json' ) {
        reject(new Error('Die Datei ist kein JSON Format.'))
      }

      const base64 = this.extractBase64From( rawData )

      try {

        const groups = JSON.parse( atob( base64 ) )

        resolve( groups )

      } catch( error ) {

        reject( error )

      }

    })

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Private Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private extractApplicationFrom( rawData: string ): string {

    const idxSlash = rawData.indexOf( '/' )

    const idxSemicolon = rawData.indexOf( ';' )

    if ( idxSlash === -1 || idxSemicolon === -1 ) {
      return ''
    }

    return rawData.substring( idxSlash + 1, idxSemicolon )

  }

  private extractBase64From( rawData: string ): string {

    const idxKomma = rawData.indexOf( ',' )

    if (idxKomma === -1) {
      return ''
    }

    return rawData.substr( idxKomma + 1 )

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

}
