import { CanActivateFn } from '@angular/router';
import { map, timer } from 'rxjs';

export const isConfigLoadedGuard: CanActivateFn = (route, state) => {
  return timer(5000).pipe(
    map(value => true)
  );
};
