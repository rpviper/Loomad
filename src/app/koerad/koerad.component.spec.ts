import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoeradComponent } from './koerad.component';

describe('KoeradComponent', () => {
  let component: KoeradComponent;
  let fixture: ComponentFixture<KoeradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoeradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoeradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
