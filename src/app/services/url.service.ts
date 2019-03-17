import { Injectable } from '@angular/core'
import * as UrlParser from 'url-parse'
import * as IsIp from 'is-ip'

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Member Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private mUrl:       string
  private mProtocol: string
  private mSlashes:  string
  private mAuth:     string
  private mUsername: string
  private mPassword: string
  private mHost:     string
  private mHostname: string
  private mPort:     string
  private mPathname: string
  private mQuery:    string
  private mHash:     string
  private mHref:     string
  private mOrigin:   string

  //////////////////////////////////////////////
  //////////////////////////////////////////////
            //    Constructor    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  constructor() {}

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  log() {

    console.log( 'mProtocol ' + this.mProtocol )
    console.log( 'mSlashes ' + this.mSlashes )
    console.log( 'mAuth ' + this.mAuth )
    console.log( 'mUsername ' + this.mUsername )
    console.log( 'mPassword ' + this.mPassword )
    console.log( 'mHost ' + this.mHost )
    console.log( 'mHostname ' + this.mHostname )
    console.log( 'mPort ' + this.mPort )
    console.log( 'mPathname ' + this.mPathname )
    console.log( 'mQuery ' + this.mQuery )
    console.log( 'mHash ' + this.mHash )
    console.log( 'mHref ' + this.mHref )
    console.log( 'mOrigin ' + this.mOrigin )
    console.log( 'url ' + this.mUrl )

  }

// normailze() {

  //   let url: string

  //   if ( this.mHostname === 'localhost' ) {

  //     url = 'https://'

  //     if ( this.mUrl.includes('www.') ) {

  //       url += this.mUrl

  //     } else {

  //       url += 'www.'
  //       url += this.mUrl

  //     }

  //   } else {

  //     url = this.mUrl

  //   }

  //   this.set( url )

  // }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Private Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  private split() {

    let urlParser = new UrlParser(this.mUrl)

    console.log(IsIp( this.mUrl ))

    if ( IsIp( this.mUrl ) ) {

      console.log('is IP')

      this.mProtocol = urlParser.protocol
      this.mSlashes  = urlParser.slashes
      this.mAuth     = urlParser.auth
      this.mUsername = urlParser.username
      this.mPassword = urlParser.password
      this.mHost     = urlParser.pathname
      this.mHostname = urlParser.pathname
      this.mPort     = urlParser.port
      this.mPathname = urlParser.pathname
      this.mQuery    = urlParser.query
      this.mHash     = urlParser.hash
      this.mHref     = urlParser.href
      this.mOrigin   = urlParser.origin

    } else {

      this.mProtocol = urlParser.protocol
      this.mSlashes  = urlParser.slashes
      this.mAuth     = urlParser.auth
      this.mUsername = urlParser.username
      this.mPassword = urlParser.password
      this.mHost     = urlParser.host
      this.mHostname = urlParser.hostname
      this.mPort     = urlParser.port
      this.mPathname = urlParser.pathname
      this.mQuery    = urlParser.query
      this.mHash     = urlParser.hash
      this.mHref     = urlParser.href
      this.mOrigin   = urlParser.origin

    }

    this.log()

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  set url(url: string) {
    this.mUrl = url
    this.split()
  }

  get protocol(): string {
    return this.mProtocol
  }

  get slashes(): string {
    return this.mSlashes
  }

  get auth(): string {
    return this.mAuth
  }

  get username(): string {
    return this.mUsername
  }

  get password(): string {
    return this.mPassword
  }

  get host(): string {
    return this.mHost
  }

  get hostname(): string {
    return this.mHostname
  }

  get port(): string {
    return this.mPort
  }

  get pathname(): string {
    return this.mPathname
  }

  get query(): string {
    return this.mQuery
  }

  get hash(): string {
    return this.mHash
  }

  get href(): string {
    return this.mHref
  }

  get origin(): string {
    return this.mOrigin
  }

}
