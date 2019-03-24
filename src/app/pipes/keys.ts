import { PipeTransform, Pipe } from '@angular/core'

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, isFilterMutipleEntries?: boolean): any {

    let keys = []

    for ( let enumMember in value ) {

      if ( enumMember ) {

        keys.push(value[enumMember])

      }

    }

    if ( isFilterMutipleEntries ) {

      keys = Array.from( new Set(keys) )

    }

    return keys

  }

}
