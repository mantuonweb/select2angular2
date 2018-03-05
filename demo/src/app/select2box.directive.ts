import { Directive,ElementRef,Input,Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
declare var $;
@Directive({
  selector: '[ngModel][select2box]',
  providers: [NgModel]
})
export class Select2boxDirective {
  @Input() datalist:any;
  @Output() onchangedata=new EventEmitter<any>();
  $select:any;
  constructor(public _elementRef: ElementRef, private ngModel: NgModel) {
  }
  ngAfterViewInit() {
    this.$select=$(this._elementRef.nativeElement);
    this.$select.select2({
      'data': this.datalist
    })
    this.$select.on('select2:select', e=> {
      console.log('changes');
      var data = e.params.data;
      this.ngModel.update.emit(data);
    });
    this.ngModel.valueChanges.subscribe(value=> {
      // this.$select.val(value.id+"");
      // this.$select.trigger('change'); 
      //this.$select.select2('val', value.id, true);
      this.$select.val(value.id+"");
      this.$select.trigger('change'); 
    });
  }
}
