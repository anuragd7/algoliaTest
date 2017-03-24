import { Injectable } from "@angular/core";
var algoliasearch = require('algoliasearch');
var algoliasearchHelper = require('algoliasearchHelper');


@Injectable()
export class AlgoliaService {
    client = algoliasearch('latency', '249078a3d4337a8231f1665ec5a44966');
    helper = algoliasearchHelper(this.client, 'bestbuy', {
        disjunctiveFacets: ['category'],
        hitsPerPage: 7,
        maxValuesPerFacet: 3
    });
}