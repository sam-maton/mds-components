import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ButtonVariant = 'text' | 'outlined' | 'filled';

@Component({
  selector: 'mds-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdsButtonComponent {
  readonly variant = input<ButtonVariant>('filled');
  readonly disabled = input<boolean>(false);
}
