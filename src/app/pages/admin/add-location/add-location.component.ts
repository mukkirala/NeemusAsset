import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';
import { BASE_URL } from '../../../core/Constant/apiConstant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  EditSettingsModel,
  ToolbarItems,
  PageService,
  EditService,
  ToolbarService,
  Search
} from '@syncfusion/ej2-angular-grids';
import { GridModule } from '@syncfusion/ej2-angular-grids';
const URL = BASE_URL;
const headers = new HttpHeaders();
@Component({
  selector: 'app-add-location',
  standalone: true,
  // imports: [
  //   CommonModule,
  //   FormsModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatIconModule,
  //   CommonCardComponent
  // ],
  imports: [
    CommonModule,
    GridModule
  ],

  providers: [
    PageService,
    EditService,
    ToolbarService
  ],
  templateUrl: './add-location.component.html'
})
export class AddLocationComponent {
  public locationData: any[] = [];

  // TOOLBAR
  public toolbarOptions: ToolbarItems[] = [
    'Add',
   'Search'
  ];

  // GRID EDIT SETTINGS
  public editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    mode: 'Dialog'
  };
//  locationData = {
//    LocationID:0,
//     Location: '',
//     LocationCode: '',
//     Block: '',
//     DepartmentCode: '',
//     Status: ''
//   };
//    locationList: any;
  constructor( private router: Router, private http: HttpClient) {
    //this.getLocations();
     this.getLocations();
     
  }
  // GET DATA
  getLocations() {

    this.http.get<any[]>(URL + '/LocationDetails', { headers })
      .subscribe({

        next: (res) => {

          console.log(res);

          this.locationData = res;
        },

        error: (err) => {

          console.log(err);
        }

      });
  }

  //Save 
  actionComplete(args: any): void {

  if (args.requestType === 'save' && args.action === 'add') {

    console.log(args.data);

    this.saveLocation(args.data);

  }
   // EDIT
  if (args.requestType === 'save' && args.action === 'edit') {

    console.log(args.data);

    this.updateLocation(args.data);
  }
 if (args.requestType === 'delete') {

    this.deleteLocation(args.data[0]);
  }
}
  saveLocation(data: any) {

  this.http.post( URL + '/InsertLocation', data, { headers }
    ).subscribe({
    next: (res) => {
      console.log(res);
      alert('Inserted Successfully');
      this.getLocations();
    },
    error: (err) => {
      console.log(err);
      alert('Insert Failed');
    }
  });
}
updateLocation(data: any) {
  this.http.put( URL + '/UpdateLocation',data,{ headers }
  ).subscribe({
    next: (res) => {
      console.log(res);
      alert('Updated Successfully');
      this.getLocations();
    },
    error: (err) => {
      console.log(err);
      alert('Update Failed');
    }
  });
}
deleteLocation(data: any) {

  this.http.delete(URL + '/DeleteLocation/' + data.LocationID,{ headers }
  ).subscribe({
    next: (res) => {
      console.log(res);
      alert('Deleted Successfully');
      this.getLocations();
    },
    error: (err) => {
      console.log(err);
      alert('Delete Failed');
    }
  });
}
 public commands: any[] = [
  {
    type: 'Edit',
    buttonOption: { iconCss: 'e-icons e-edit', cssClass: 'e-flat' }
  },
  {
    type: 'Delete',
    buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }
  }
];
//   getLocations() {

//     this.http.get(URL + '/TestController/ViewDetails', { headers })
//       .subscribe(res => {

//         this.locationList = res;

//         console.log(this.locationList);

//       }, err => {

//         console.log(err);

//       });
//   }

//   saveLocation() {
//    console.log(this.locationData)
//     this.http.post(
//   URL + '/Location/InsertLocation',
//   this.locationData,
//   { headers }
// )
    
//     .subscribe({
//       next: (res) => {
//         console.log(res);
//         alert('Saved Successfully');
//         this.locationData = {
//           LocationID:0,
//           Location: '',
//           LocationCode: '',
//           Block: '',
//           DepartmentCode: '',
//           Status:''
//         };
//       },
//      error: (err) => {

//   console.log('FULL ERROR', err);

//   alert(err.error);

// }
//     });
  

//   // saveLocation() {
//   //   if (this.locationData.location && this.locationData.block && this.locationData.code) {
//   //     console.log('Saving location:', this.locationData);
//   //     alert('Location added successfully!');
//   //     this.locationData = { location: '', block: '', code: '' };
//   //     // Navigate to View Locations
//   //     this.router.navigate(['/admin/view-locations']);
//   //   } else {
//   //     alert('Please fill in all required fields.');
//   //   }
//   // }
// }
}

