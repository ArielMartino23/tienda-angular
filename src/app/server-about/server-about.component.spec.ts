import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAboutComponent } from './server-about.component';

describe('ServerAboutComponent', () => {
  let component: ServerAboutComponent;
  let fixture: ComponentFixture<ServerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
