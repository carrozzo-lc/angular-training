import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    // Mine working solution
    // isDropdown = false;

    // constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    // @HostListener('click') onClick(eventData: Event) {
    //     this.isDropdown = !this.isDropdown;

    //     if (this.isDropdown === true) {
    //         this.renderer.addClass(this.elRef.nativeElement.parentNode, 'open');
    //     } else {
    //         this.renderer.removeClass(this.elRef.nativeElement.parentNode, 'open');
    //     }

    // }

    // Prof solution
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
