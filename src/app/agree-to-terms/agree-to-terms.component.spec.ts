import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreeToTermsComponent } from './agree-to-terms.component';

describe('AgreeToTermsComponent', () => {
  let component: AgreeToTermsComponent;
  let fixture: ComponentFixture<AgreeToTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreeToTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreeToTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
