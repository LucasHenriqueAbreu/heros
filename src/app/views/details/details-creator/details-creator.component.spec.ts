import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCreatorComponent } from './details-creator.component';

describe('DetailsCreatorComponent', () => {
  let component: DetailsCreatorComponent;
  let fixture: ComponentFixture<DetailsCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
