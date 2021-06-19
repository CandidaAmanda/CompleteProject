import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputGridComponent } from './output-grid.component';

describe('OutputGridComponent', () => {
  let component: OutputGridComponent;
  let fixture: ComponentFixture<OutputGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
