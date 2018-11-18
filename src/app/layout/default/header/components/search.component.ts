<<<<<<< HEAD
import { Component, HostBinding, Input, ElementRef, AfterViewInit } from '@angular/core';
=======
import { Component, HostBinding, ViewChild, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b

@Component({
  selector: 'header-search',
  template: `
  <nz-input-group nzAddOnBeforeIcon="anticon anticon-search">
    <input nz-input [(ngModel)]="q" (focus)="qFocus()" (blur)="qBlur()"
      [placeholder]="'搜索：员工、文件、照片等'">
  </nz-input-group>
  `
})
export class HeaderSearchComponent implements AfterViewInit {

  q: string;

  qIpt: HTMLInputElement;

<<<<<<< HEAD
  @HostBinding('class.alain-default__search-focus')
  focus = false;

  @HostBinding('class.alain-default__search-toggled')
=======
  @HostBinding('class.header-search__focus')
  focus = false;

  @HostBinding('class.header-search__toggled')
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
  searchToggled = false;

  @Input()
  set toggleChange(value: boolean) {
    if (typeof value === 'undefined') return;
    this.searchToggled = true;
    this.focus = true;
    setTimeout(() => this.qIpt.focus(), 300);
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.qIpt = (this.el.nativeElement as HTMLElement).querySelector('.ant-input') as HTMLInputElement;
  }

  qFocus() {
    this.focus = true;
  }

  qBlur() {
    this.focus = false;
    this.searchToggled = false;
  }
}
