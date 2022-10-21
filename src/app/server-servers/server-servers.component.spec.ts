import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerServersComponent } from './server-servers.component';

describe('ServerServersComponent', () => {
  let component: ServerServersComponent;
  let fixture: ComponentFixture<ServerServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
