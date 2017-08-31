import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessBarComponent } from './process-bar.component';

describe('ProcessBarComponent', () => {
  let component: ProcessBarComponent;
  let fixture: ComponentFixture<ProcessBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
