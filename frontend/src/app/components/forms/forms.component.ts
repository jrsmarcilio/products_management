import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateChecksService } from '../../services/dateChecks/date-checks.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  @Input() postForm: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() submitForm: () => void;
  @Input() button: string;

  date = new Date();
  isDateValid: boolean;

  constructor(private dateChecks: DateChecksService) {}

  checkDate() {
    this.isDateValid = this.dateChecks.checkDate(
      this.postForm.get('validity')?.value,
      this.date
    );
  }
}
