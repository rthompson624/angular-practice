import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  submitError = false;
  subscriptions = new Subscription();
  form = this.fb.group({
    id: [0],
    name: [''],
    username: [''],
    email: [''],
    address: this.fb.group({
      street: [''],
      suite: [''],
      city: [''],
      zipcode: [''],
      geo: this.fb.group({
        lat: [''],
        lng: ['']
      })
    }),
    phone: [''],
    website: [''],
    company: this.fb.group({
      name: [''],
      catchPhrase: [''],
      bs: ['']
    })
  });

  constructor(private apiService: ApiService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.subscriptions.add(
      this.apiService.getUserById(id).subscribe(user => this.form.patchValue(user))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  update() {
    const user = this.form.value as User;
    this.subscriptions.add(
      this.apiService.updateUser(user).subscribe({
        next: user => {
          this.router.navigate(['/users']);
        },
        error: error => {
          this.submitError = true;
          console.log('Error attempting to update');
          console.log(error);
        }
      })
    );
  }
}
