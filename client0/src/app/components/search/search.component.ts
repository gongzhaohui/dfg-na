import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm = this.fb.group({
    term: [null, Validators.required],
    searchType: ['inv', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    alert(JSON.stringify( this.searchForm.value));
  }

}
