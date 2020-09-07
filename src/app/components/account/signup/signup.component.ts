import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { signup } from 'src/app/models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private as: AccountService) { }
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      organizationName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      organizationShortCode: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern("[a-zA-Z]+$")]],
      organizationAddress: ['', [Validators.required, Validators.maxLength(200)]],
      organizationPhone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      organizationEmail: ['', [Validators.required, Validators.maxLength(50)]],
      // marketingPerson: [''],
      // marketingPersonPhone: [''],
      roleID: ['-1'],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    })

    this.signupForm.valueChanges.subscribe(x => {
      if (this.signupForm.touched || this.signupForm.dirty)
        this.signupValidation(this.signupForm);
    })
  }

  organizationSubmit() {
    debugger;
    if (this.signupForm.valid) {
      const res = this.signupForm.value as signup;
      this.as.signup(res).subscribe((data) => {
        console.log(data);
      })
      // console.log(this.signupForm.value)
    }
    else {
      this.signupForm.markAllAsTouched();
      this.signupValidation();
    }

  }

  signupValidation(group: FormGroup = this.signupForm) {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.errors[key] = "";

      if (abstractControl && abstractControl.invalid &&
        (abstractControl.touched || abstractControl.dirty || (abstractControl.value != "" && abstractControl.value != "-1"))) {
        const msg = this.errorMessage[key];
        for (const errorkey in abstractControl.errors) {
          if (errorkey) {
            this.errors[key] = msg[errorkey];
          }
        }
      }
    })
  }

  errors = {
    "organizationName": "",
    "organizationShortCode": "",
    "organizationAddress": '',
    "organizationPhone": '',
    "organizationEmail": '',
    "roleID": '',
    "username": ''
  }

  errorMessage = {
    "organizationName": {
      "required": "Please enter organization name",
      "maxlength": "Organization name must be less then 100 character",
      "minlength": "Organization name must be greater then 6 character"
    },
    "organizationShortCode": {
      "required": "Please enter short code",
      "minlength": "Short code contains 4 character",
      "maxlength": "Short code contains 4 character",
      "pattern": "Short code contains letters only",
      "notEqual": "Short code already exists"
    },
    "organizationAddress": {
      "required": "Please enter address",
      "maxlength": "Address must be less then 200 character"
    },
    "organizationPhone": {
      "required": "Please enter phone",
      "maxlength": "Phone number must be 10 character",
      "minlength": "Phone number must be 10 character"
    },
    "organizationEmail": {
      "required": "Please enter email",
      "maxlength": "Email must be less then 50 character"
    },
    "roleID": {
      "required": "Please select role",
    },
    "username": {
      "required": "Please enter username",
      "maxlength": "Username must be less then 20 character",
      "minlength": "Username must be greater then 6 character"
    }
  }
}
