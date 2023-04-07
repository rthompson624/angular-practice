import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birdIsTheWord',
  pure: true
})
export class BirdIsTheWordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return 'bird';
  }

}
