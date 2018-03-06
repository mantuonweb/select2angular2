import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LonglistComponent } from './longlist.component';

describe('LonglistComponent', () => {
  let component: LonglistComponent;
  let fixture: ComponentFixture<LonglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LonglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LonglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
