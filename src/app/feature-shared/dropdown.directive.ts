import { Directive, HostListener, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit{

    constructor(private renderer: Renderer2, private element: ElementRef) {}
  
    ngOnInit(): void {}

    @HostListener('click', ['$event.target'])   onClick() {
        let actualDropdown = this.element.nativeElement.nextSibling
        if (actualDropdown.className.includes("show")) {
            this.renderer.removeClass(actualDropdown, 'show')
        } else {
            this.renderer.addClass(actualDropdown, 'show')
        }
      }
}