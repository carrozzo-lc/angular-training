import {
    Directive,
    ElementRef,
    Renderer2,
    OnInit,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input('appBetterHighlight') highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
