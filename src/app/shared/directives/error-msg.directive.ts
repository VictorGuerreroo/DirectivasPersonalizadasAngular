import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color: string = "red";

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color( valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }
  //@Input() mensaje: string = 'Este campo es necesario';
  @Input() set mensaje( valor: string) {
    this.htmlElement.nativeElement.innerText = valor;
  }

  constructor( private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
   //this.setColor();
   //this.setMensaje();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }
}
