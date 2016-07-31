import { Pipe, PipeTransform } from '@angular/core';

import { User } from './user';

@Pipe({ name: 'orderByPoints', pure: false })
export class OrderByPoints implements PipeTransform {
  transform(allMembers: User[]) {
  	if(allMembers === undefined) return allMembers;
  	console.log("ORDERING");
	return allMembers.sort((a, b) => {
		if (a.points > b.points){
			return -1;
		}
		if (a.points < b.points) {
			return 1;
		}
		return 0;
	});
  }
}
