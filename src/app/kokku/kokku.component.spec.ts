import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KokkuComponent } from './kokku.component';

describe('KokkuComponent', () => {
  let component: KokkuComponent;
  let fixture: ComponentFixture<KokkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KokkuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KokkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
