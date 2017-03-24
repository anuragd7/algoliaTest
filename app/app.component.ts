import { Injectable, Component } from "@angular/core";
import { AlgoliaService } from "./services/algolia.service";


@Component({
  selector: 'search-box',
  template: `
   <StackLayout class="form">
     <input 
        type="text"
        class="search-box" 
        placeholder="{{placeholder}}"
        (keyup)="search()"
        [(ngModel)]="query"
     />
    </StackLayout>
   `
})
export class SearchBox {
  query = ''
  placeholder = 'Search...'
  constructor(private algoliaService: AlgoliaService) {
    this.algoliaService = algoliaService;
    this.algoliaService.helper.setQuery(this.query).search();
  }
  search() {
    this.algoliaService.helper.setQuery(this.query).search();
  }
}


// const {Component, Injectable, Inject} = ng.core;
// const {bootstrap} = ng.platform.browser;



@Component({
  selector: 'refinement-list',
  template: `
    <ul class="facet-list" [class.no-results]="facets.length === 0">
      <li 
        *ngFor="let facet of facets"
        [class.active]="facet.isRefined"
        (click)="toggleFacet(facet.name)"
      >
        <input type="checkbox" [name]="facet.name"/>
        {{facet.name}}
        <span class="badge">{{facet.count}}</span>
      </li>
      <li *ngIf="facets.length === 0">No results.</li>
    </ul>
  `
})
export class RefinementList {
  facets = []

  constructor(private algoliaService: AlgoliaService) {
    this.algoliaService = algoliaService;

    algoliaService.helper.on('result', results => {
      this.facets = results.getFacetValues('category', ['selected', 'count:desc']).slice(0, 5);
    });
  }

  toggleFacet(facetName: string) {
    this.algoliaService.helper.toggleRefinement('category', facetName).search();
  }
}

@Component({
  selector: 'results',
  template: `
    <StackLayout class="results">
      <StackLayout *ngFor="let hit of hits" 
        class="list-group-item" 
        [innerHTML]="hit._highlightResult.name.value"
      >
      crap
      </StackLayout>
    </StackLayout>
  `
})
export class Results {
  hits = []

  constructor(private algoliaService: AlgoliaService) {
    algoliaService.helper.on('result', results => {
      this.hits = results.hits
    });
  }
}

@Component({
  selector: 'pager',
  template: `
    <StackLayout class="pager">
      <Button class="previous" (click)="prevPage()">Previous</Button>
      <span class="current=page">{{currentPage+1}}</span>
      <Button class="next" (click)="nextPage()">Next</Button>
    </StackLayout>
  `
})
export class Pager {
  currentPage = 0;

  constructor(private algoliaService: AlgoliaService) {
    this.algoliaService = algoliaService;

    this.algoliaService.helper.on('change', () => {
      this.currentPage = algoliaService.helper.getPage();
    });
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.algoliaService.helper.previousPage().search();
    }
  }

  nextPage() {
    this.algoliaService.helper.nextPage().search();
  }
}

@Component({
  selector: 'my-app',
  template: `
    <StackLayout class="app">
      <search-box></search-box>
      <refinement-list></refinement-list>
      <results></results>
      <pager></pager>
    </StackLayout>
  `
})
export class AppComponent { }
