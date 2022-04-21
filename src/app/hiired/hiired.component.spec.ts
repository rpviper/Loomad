import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiiredComponent } from './hiired.component';

describe('HiiredComponent', () => {
  let component: HiiredComponent;
  let fixture: ComponentFixture<HiiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
