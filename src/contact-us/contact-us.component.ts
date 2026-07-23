import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../service/api.service';   // ← path apne project ke hisaab se sahi karo

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  isLoading: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor(private fb: FormBuilder, private clientService: ClientService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.isError = false;
      this.isSuccess = false;

      this.clientService.addClient(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Saved successfully', response);
          this.isLoading = false;
          this.isSuccess = true;
          this.contactForm.reset();
        },
        error: (err) => {
          console.error('Error saving client', err);
          this.isLoading = false;
          this.isError = true;
        }
      });
    } else {
      this.isError = true;
      this.contactForm.markAllAsTouched();
    }
  }
}