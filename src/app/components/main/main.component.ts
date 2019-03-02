import { Component, OnInit } from '@angular/core'
import { UrlService } from 'src/app/services/url.service'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [UrlService]
})
export class MainComponent implements OnInit {

  constructor(private url: UrlService) {

    this.url.set('http://google.de')
    this.url.log()

    // console.log('+++++++++++++++')

    // this.url.normailze()
    // this.url.log()

  }

  ngOnInit() {
  }

}
