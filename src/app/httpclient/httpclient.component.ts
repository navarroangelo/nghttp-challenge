// import { Component } from '@angular/core';
// import { HttpclientService } from '../httpclient.service';

// @Component({
//   selector: 'app-httpclient',
//   templateUrl: './httpclient.component.html',
//   styleUrls: ['./httpclient.component.css'],
// })
// export class HttpclientComponent {
//   httpcountries: any;
//   constructor(private httpclientList: HttpclientService) {
//     this.httpclientList.getUsersRemotely().subscribe((data: any) => {
//       this.httpcountries = data;
//     });
//   }
// }

import { Component } from '@angular/core';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css'],
})
export class HttpclientComponent {
  httpcountries: any[] = [];

  constructor(private httpclientList: HttpclientService) {
    this.httpclientList.getUsersRemotely().subscribe((data: any) => {
      this.httpcountries = data.slice(0, 10);
    });
  }
}
