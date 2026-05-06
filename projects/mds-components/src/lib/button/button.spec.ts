import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdsButtonComponent } from './button';

@Component({
  imports: [MdsButtonComponent],
  template: `<mds-button>Click me</mds-button>`,
})
class HostComponent {}

describe('MdsButtonComponent', () => {
  let component: MdsButtonComponent;
  let fixture: ComponentFixture<MdsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdsButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MdsButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to filled variant', () => {
    expect(component.variant()).toBe('filled');
  });

  it('should apply the filled CSS class by default', () => {
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.mds-button');
    expect(btn.classList).toContain('mds-button--filled');
  });

  it('should apply the outlined CSS class when variant is outlined', async () => {
    fixture.componentRef.setInput('variant', 'outlined');
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.mds-button');
    expect(btn.classList).toContain('mds-button--outlined');
    expect(btn.classList).not.toContain('mds-button--filled');
  });

  it('should apply the text CSS class when variant is text', async () => {
    fixture.componentRef.setInput('variant', 'text');
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.mds-button');
    expect(btn.classList).toContain('mds-button--text');
    expect(btn.classList).not.toContain('mds-button--filled');
  });

  it('should not be disabled by default', () => {
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.mds-button');
    expect(btn.disabled).toBe(false);
  });

  it('should disable the button when disabled input is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.mds-button');
    expect(btn.disabled).toBe(true);
  });

  it('should render projected content via ng-content', async () => {
    const hostFixture = TestBed.createComponent(HostComponent);
    hostFixture.detectChanges();
    await hostFixture.whenStable();
    const btn: HTMLButtonElement = hostFixture.nativeElement.querySelector('.mds-button');
    expect(btn.textContent?.trim()).toBe('Click me');
  });
});
