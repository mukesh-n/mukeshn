import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhfComponent } from './dhf.component';

describe('DhfComponent', () => {
  let component: DhfComponent;
  let fixture: ComponentFixture<DhfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
