import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjsconteiner',
  templateUrl: './rxjsconteiner.component.html',
  styleUrls: ['./rxjsconteiner.component.scss']
})
export class RxjsconteinerComponent implements OnInit {
users = [
{id:'1',name:'john',isActive: true},
{id:'2',name:'jack',isActive: true},
{id:'3',name:'mike',isActive: true},
]

user$ = new BehaviorSubject<{id: string; name: string}|null>(null)

users$ = of(this.users)

usernames$ = this.users$.pipe(map((users)=> users.map(user => user.name)))

filtredUser$ = this.users$.pipe(filter((users) => users.every((user)=> user.isActive)))

documentClick$ = fromEvent(document, 'click')

ngOnInit(): void {

this.documentClick$.subscribe(e =>
{console.log('e',e);
}

)

// setTimeout(() => {
//   this.user$.next({id:'1',name:'john'})
// }, 2000);

//   this.user$.subscribe((user) => {
//     console.log('users', user);
//   })



  // this.filtredUser$.subscribe((users) => {
  //   console.log('users', users);
  // })





}






}
