import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIComponent } from './sign-i.component';

describe('SignIComponent', () => {
  let component: SignIComponent;
  let fixture: ComponentFixture<SignIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
