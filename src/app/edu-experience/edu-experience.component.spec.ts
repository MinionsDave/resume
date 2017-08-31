import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduExperienceComponent } from './edu-experience.component';

describe('EduExperienceComponent', () => {
  let component: EduExperienceComponent;
  let fixture: ComponentFixture<EduExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
