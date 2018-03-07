import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
declare var $;
@Directive({
  selector: '[ngModel][select2box]',
  providers: [NgModel]
})
export class Select2boxDirective {
  @Input() datalist: any;
  @Output() onchangedata = new EventEmitter<any>();
  $select: any;
  constructor(public _elementRef: ElementRef, private ngModel: NgModel) {
  }
  ngAfterViewInit() {
    this.$select = $(this._elementRef.nativeElement);
    this.$select.select2({
      'data': this.datalist,
      'theme': "bootstrap"
    });
    this.$select.on('select2:select', e => {
      var data = e.params.data;
      var eledata = { id: "", text: "" };
      eledata.id = data.id;
      eledata.text = data.text;
      this.ngModel.update.emit(eledata);
    });
    this.ngModel.valueChanges.subscribe(value => {
      this.$select.val(value.id).trigger('change');
      $($(this.$select.siblings(".select2")).find("#select2-myInput-container")).text(value.text);
    });
  }
}
