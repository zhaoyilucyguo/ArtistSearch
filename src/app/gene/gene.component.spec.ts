import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneComponent } from './gene.component';

describe('GeneComponent', () => {
  let component: GeneComponent;
  let fixture: ComponentFixture<GeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
