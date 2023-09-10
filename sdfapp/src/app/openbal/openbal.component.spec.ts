import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenbalComponent } from './openbal.component';

describe('OpenbalComponent', () => {
  let component: OpenbalComponent;
  let fixture: ComponentFixture<OpenbalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenbalComponent]
    });
    fixture = TestBed.createComponent(OpenbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
