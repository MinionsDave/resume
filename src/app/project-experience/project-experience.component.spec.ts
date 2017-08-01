import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExperienceComponent } from './project-experience.component';

describe('ProjectExperienceComponent', () => {
  let component: ProjectExperienceComponent;
  let fixture: ComponentFixture<ProjectExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
