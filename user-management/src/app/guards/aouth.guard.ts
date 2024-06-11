import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { inject } from '@angular/core';
import { IUser } from '../models/user';

export const aouthGuard: CanActivateFn = (route, state) => {

  const storageSarvice: StorageService = inject(StorageService)
const router = inject(Router)
const user: IUser|null =storageSarvice.getUser()

if (!user) {
  router.navigate(['auth'])
  return false
}
else if (user?.role !== 'admin') {
  router.navigate([''])
  return false
}
  return true;
};
