import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { GridApi } from 'ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, ColGroupDef, GridReadyEvent,GridApi } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-agngular-grid',
  templateUrl: './agngular-grid.component.html',
  styleUrls: ['./agngular-grid.component.sass']
})
export class AgngularGridComponent implements OnInit {
  title = "ANGULAR-GRID";
  
  private gridApi!: GridApi;
 
  ngOnInit(): void {
  } 
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Group A',
      children: [
        { field: 'athlete', minWidth: 200 },
        { field: 'country', minWidth: 200 },
      ],
    },
    {
      headerName: 'Group B',
      children: [
        { field: 'sport', minWidth: 150 },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
      ],
    },
    
  
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
  };

  // Data that gets displayed in the grid
  public rowData!: any[];

 constructor(private http: HttpClient) { }

 onBtExport() {
  this.gridApi.exportDataAsExcel();
}
onBtnExport1() {
  this.gridApi.exportDataAsCsv();
}



onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;

  this.http
    .get<any[]>(
      'https://www.ag-grid.com/example-assets/small-olympic-winners.json'
    )
    .subscribe((data) => {
      this.rowData = data;
    });
}


}
