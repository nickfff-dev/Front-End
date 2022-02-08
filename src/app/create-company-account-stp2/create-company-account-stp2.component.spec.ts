import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyAccountStp2Component } from './create-company-account-stp2.component';

describe('CreateCompanyAccountStp2Component', () => {
  let component: CreateCompanyAccountStp2Component;
  let fixture: ComponentFixture<CreateCompanyAccountStp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompanyAccountStp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompanyAccountStp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
