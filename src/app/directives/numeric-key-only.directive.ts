import { Directive, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appIntegerKeyOnly]'
})
export class IntegerKeyOnlyDirective {

  constructor() {}

  @HostListener('keydown', ['$event']) onKeyDown(event) {

    let e = <KeyboardEvent> event

    if ([8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||

    (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) || // Allow: Ctrl+A
    (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) || // Allow: Ctrl+C
    (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) || // Allow: Ctrl+V
    (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || // Allow: Ctrl+X
    (e.keyCode === 65 && e.metaKey === true) ||       // Cmd+A (Mac)
    (e.keyCode === 67 && e.metaKey === true) ||       // Cmd+C (Mac)
    (e.keyCode === 86 && e.metaKey === true) ||       // Cmd+V (Mac)
    (e.keyCode === 88 && e.metaKey === true) ||       // Cmd+X (Mac)
    (e.keyCode >=  35 && e.keyCode <=  39)) {         // Allow: home, end, left, right

      // let it happen, don't do anything
      return

    }

    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {

      e.preventDefault()

    }

  }

}
