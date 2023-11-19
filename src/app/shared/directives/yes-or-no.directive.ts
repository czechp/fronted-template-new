import {Directive, ElementRef, inject, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appYesOrNo]'
})
export class YesOrNoDirective implements OnInit {
  @Input("appYesOrNo")
  correct!: boolean;
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);

  constructor() {
  }

  ngOnInit(): void {
    if (this.correct)
      this.renderer.addClass(this.elementRef.nativeElement, "correct");
    else
      this.renderer.addClass(this.elementRef.nativeElement, "incorrect");
  }
}
