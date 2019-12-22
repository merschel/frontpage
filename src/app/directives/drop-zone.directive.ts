import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core'

// Code from https://gist.github.com/darrenmothersele/7afda13d858a156ce571510dd78b7624

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  // The directive emits a `fileDrop` event
  // with the list of files dropped on the element
  // as an JS array of `File` objects.
  @Output() droped  = new EventEmitter<Array<File>>()
  @Output() hovered = new EventEmitter<Boolean>()

  // Disable dropping on the body of the document.
  // This prevents the browser from loading the dropped files
  // using it's default behaviour if the user misses the drop zone.
  // Set this input to false if you want the browser default behaviour.
  @Input() preventBodyDrop = true

  // The `drop-zone-active` class is applied to the host
  // element when a drag is currently over the target.
  @HostBinding('class.drop-zone-active')
  active = false

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault()
    this.active = false
    this.hovered.emit(this.active)

    const { dataTransfer } = event

    if (dataTransfer.items) {
      const files = []
      for (let i = 0; i < dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (dataTransfer.items[i].kind === 'file') {
          files.push(dataTransfer.items[i].getAsFile())
        }
      }
      dataTransfer.items.clear()
      this.droped.emit(files)
    } else {
      const files = dataTransfer.files
      dataTransfer.clearData()
      this.droped.emit(Array.from(files))
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.stopPropagation()
    event.preventDefault()
    this.active = true
    this.hovered.emit(this.active)
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    this.active = false
    this.hovered.emit(this.active)
  }

  @HostListener('body:dragover', ['$event'])
  onBodyDragOver(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault()
      event.stopPropagation()
    }
  }
  @HostListener('body:drop', ['$event'])
  onBodyDrop(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault()
    }
  }
}

