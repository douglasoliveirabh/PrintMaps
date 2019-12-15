import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMapviewComponent } from './sidebar-mapview.component';

describe('SidebarMapviewComponent', () => {
  let component: SidebarMapviewComponent;
  let fixture: ComponentFixture<SidebarMapviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMapviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMapviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
