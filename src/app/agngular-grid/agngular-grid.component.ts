import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { GridApi } from 'ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, ColGroupDef, GridReadyEvent,GridApi, ServerSideStoreType } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-agngular-grid',
  templateUrl: './agngular-grid.component.html',
  styleUrls: ['./agngular-grid.component.sass']
})
export class AgngularGridComponent implements OnInit {
  title = "ANGULAR-Grid";
  
  private gridApi!: GridApi;
 
  ngOnInit(): void {
  } 
  public columnDefs: (ColDef | ColGroupDef)[] = [
    { field: 'athlete' },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  
  ];
  public autoGroupColumnDef: ColDef = {
    flex: 1,
    minWidth: 180,
  };

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 90,
    flex: 1,
    editable:true,
  };

  // Data that gets displayed in the grid
  public rowData!: any[];
  public rowSelection = 'multiple';

  //public rowSelection = 'single';
  public serverSideStoreType: ServerSideStoreType = 'partial';
  public paginationPageSize = 10;
  public cacheBlockSize = 10;

 constructor(private http: HttpClient) { }

 onBtExport() {
  this.gridApi.exportDataAsExcel();
}

  onBtnExport1() {
  this.gridApi.exportDataAsCsv();
}


onFilterTextBoxChanged() {
  this.gridApi.setQuickFilter(
    (document.getElementById('filter-text-box') as HTMLInputElement).value
  );
}
onSelectionChanged() {
  var selectedRows = this.gridApi.getSelectedRows();
  var selectedRowsString = '';
  var maxToShow = 5;
  selectedRows.forEach(function (selectedRow, index) {
    if (index >= maxToShow) {
      return;
    }
    if (index > 0) {
      selectedRowsString += ', ';
    }
    selectedRowsString += selectedRow.athlete;
  });
  if (selectedRows.length > maxToShow) {
    var othersCount = selectedRows.length - maxToShow;
    selectedRowsString +=
      ' and ' + othersCount + ' other' + (othersCount !== 1 ? 's' : '');
  }
  (document.querySelector(
    '#selectedRows'
  ) as any).innerHTML = selectedRowsString;

}



onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;

  this.http
    .get<any[]>(
      'https://www.ag-grid.com/example-assets/olympic-winners.json'
    )
    .subscribe((data) => {
      this.rowData = data;
      var idsequence = 1; 
      data.forEach(function (item: any) {
        item.id = idsequence++;
      }
      )
    });
}


}
