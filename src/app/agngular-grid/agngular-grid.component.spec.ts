import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgngularGridComponent } from './agngular-grid.component';

describe('AgngularGridComponent', () => {
  let component: AgngularGridComponent;
  let fixture: ComponentFixture<AgngularGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgngularGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgngularGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
