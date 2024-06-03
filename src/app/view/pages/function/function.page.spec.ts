import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FunctionPage } from './function.page';

describe('FunctionPage', () => {
  let component: FunctionPage;
  let fixture: ComponentFixture<FunctionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FunctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
