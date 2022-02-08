import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInvitationComponent } from './email-invitation.component';

describe('EmailInvitationComponent', () => {
  let component: EmailInvitationComponent;
  let fixture: ComponentFixture<EmailInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
