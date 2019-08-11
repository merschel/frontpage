import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private matIconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon(
      'check',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/check.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'remove',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/delete.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/close.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'export',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/package-up.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/plus.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/settings.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'tune',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/tune.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'import',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/package-down.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'file',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/file.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'file-hidden',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/file-hidden.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'tab',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/tab.svg')
    )

    this.matIconRegistry.addSvgIcon(
      'pencil',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/pencil.svg')
    )

  }

}
