"use strict";
var core_1 = require("@angular/core");
var algolia_service_1 = require("./services/algolia.service");
var SearchBox = (function () {
    function SearchBox(algoliaService) {
        this.algoliaService = algoliaService;
        this.query = '';
        this.placeholder = 'Search...';
        this.algoliaService = algoliaService;
        this.algoliaService.helper.setQuery(this.query).search();
    }
    SearchBox.prototype.search = function () {
        this.algoliaService.helper.setQuery(this.query).search();
    };
    return SearchBox;
}());
SearchBox = __decorate([
    core_1.Component({
        selector: 'search-box',
        template: "\n   <StackLayout class=\"form\">\n     <input \n        type=\"text\"\n        class=\"search-box\" \n        placeholder=\"{{placeholder}}\"\n        (keyup)=\"search()\"\n        [(ngModel)]=\"query\"\n     />\n    </StackLayout>\n   "
    }),
    __metadata("design:paramtypes", [algolia_service_1.AlgoliaService])
], SearchBox);
exports.SearchBox = SearchBox;
// const {Component, Injectable, Inject} = ng.core;
// const {bootstrap} = ng.platform.browser;
var RefinementList = (function () {
    function RefinementList(algoliaService) {
        var _this = this;
        this.algoliaService = algoliaService;
        this.facets = [];
        this.algoliaService = algoliaService;
        algoliaService.helper.on('result', function (results) {
            _this.facets = results.getFacetValues('category', ['selected', 'count:desc']).slice(0, 5);
        });
    }
    RefinementList.prototype.toggleFacet = function (facetName) {
        this.algoliaService.helper.toggleRefinement('category', facetName).search();
    };
    return RefinementList;
}());
RefinementList = __decorate([
    core_1.Component({
        selector: 'refinement-list',
        template: "\n    <ul class=\"facet-list\" [class.no-results]=\"facets.length === 0\">\n      <li \n        *ngFor=\"let facet of facets\"\n        [class.active]=\"facet.isRefined\"\n        (click)=\"toggleFacet(facet.name)\"\n      >\n        <input type=\"checkbox\" [name]=\"facet.name\"/>\n        {{facet.name}}\n        <span class=\"badge\">{{facet.count}}</span>\n      </li>\n      <li *ngIf=\"facets.length === 0\">No results.</li>\n    </ul>\n  "
    }),
    __metadata("design:paramtypes", [algolia_service_1.AlgoliaService])
], RefinementList);
exports.RefinementList = RefinementList;
var Results = (function () {
    function Results(algoliaService) {
        var _this = this;
        this.algoliaService = algoliaService;
        this.hits = [];
        algoliaService.helper.on('result', function (results) {
            _this.hits = results.hits;
        });
    }
    return Results;
}());
Results = __decorate([
    core_1.Component({
        selector: 'results',
        template: "\n    <StackLayout class=\"results\">\n      <StackLayout *ngFor=\"let hit of hits\" \n        class=\"list-group-item\" \n        [innerHTML]=\"hit._highlightResult.name.value\"\n      >\n      crap\n      </StackLayout>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [algolia_service_1.AlgoliaService])
], Results);
exports.Results = Results;
var Pager = (function () {
    function Pager(algoliaService) {
        var _this = this;
        this.algoliaService = algoliaService;
        this.currentPage = 0;
        this.algoliaService = algoliaService;
        this.algoliaService.helper.on('change', function () {
            _this.currentPage = algoliaService.helper.getPage();
        });
    }
    Pager.prototype.prevPage = function () {
        if (this.currentPage > 0) {
            this.algoliaService.helper.previousPage().search();
        }
    };
    Pager.prototype.nextPage = function () {
        this.algoliaService.helper.nextPage().search();
    };
    return Pager;
}());
Pager = __decorate([
    core_1.Component({
        selector: 'pager',
        template: "\n    <StackLayout class=\"pager\">\n      <Button class=\"previous\" (click)=\"prevPage()\">Previous</Button>\n      <span class=\"current=page\">{{currentPage+1}}</span>\n      <Button class=\"next\" (click)=\"nextPage()\">Next</Button>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [algolia_service_1.AlgoliaService])
], Pager);
exports.Pager = Pager;
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <StackLayout class=\"app\">\n      <search-box></search-box>\n      <refinement-list></refinement-list>\n      <results></results>\n      <pager></pager>\n    </StackLayout>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFzRDtBQUN0RCw4REFBNEQ7QUFpQjVELElBQWEsU0FBUztJQUdwQixtQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRmxELFVBQUssR0FBRyxFQUFFLENBQUE7UUFDVixnQkFBVyxHQUFHLFdBQVcsQ0FBQTtRQUV2QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNELENBQUM7SUFDRCwwQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLFNBQVM7SUFkckIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSwrT0FVUjtLQUNILENBQUM7cUNBSW9DLGdDQUFjO0dBSHZDLFNBQVMsQ0FVckI7QUFWWSw4QkFBUztBQWF0QixtREFBbUQ7QUFDbkQsMkNBQTJDO0FBcUIzQyxJQUFhLGNBQWM7SUFHekIsd0JBQW9CLGNBQThCO1FBQWxELGlCQU1DO1FBTm1CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUZsRCxXQUFNLEdBQUcsRUFBRSxDQUFBO1FBR1QsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFFckMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUEsT0FBTztZQUN4QyxLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksU0FBaUI7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlFLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksY0FBYztJQWpCMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFLGdjQWFUO0tBQ0YsQ0FBQztxQ0FJb0MsZ0NBQWM7R0FIdkMsY0FBYyxDQWMxQjtBQWRZLHdDQUFjO0FBNkIzQixJQUFhLE9BQU87SUFHbEIsaUJBQW9CLGNBQThCO1FBQWxELGlCQUlDO1FBSm1CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUZsRCxTQUFJLEdBQUcsRUFBRSxDQUFBO1FBR1AsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUEsT0FBTztZQUN4QyxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksT0FBTztJQWJuQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLHVQQVNUO0tBQ0YsQ0FBQztxQ0FJb0MsZ0NBQWM7R0FIdkMsT0FBTyxDQVFuQjtBQVJZLDBCQUFPO0FBb0JwQixJQUFhLEtBQUs7SUFHaEIsZUFBb0IsY0FBOEI7UUFBbEQsaUJBTUM7UUFObUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRmxELGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBR2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFFckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0JBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyRCxDQUFDO0lBQ0gsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksS0FBSztJQVZqQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLHdRQU1UO0tBQ0YsQ0FBQztxQ0FJb0MsZ0NBQWM7R0FIdkMsS0FBSyxDQW9CakI7QUFwQlksc0JBQUs7QUFpQ2xCLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFYeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSx5TEFPVDtLQUNGLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWxnb2xpYVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hbGdvbGlhLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWFyY2gtYm94JyxcbiAgdGVtcGxhdGU6IGBcbiAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cbiAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzPVwic2VhcmNoLWJveFwiIFxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgIChrZXl1cCk9XCJzZWFyY2goKVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwicXVlcnlcIlxuICAgICAvPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gICBgXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveCB7XG4gIHF1ZXJ5ID0gJydcbiAgcGxhY2Vob2xkZXIgPSAnU2VhcmNoLi4uJ1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZ29saWFTZXJ2aWNlOiBBbGdvbGlhU2VydmljZSkge1xuICAgIHRoaXMuYWxnb2xpYVNlcnZpY2UgPSBhbGdvbGlhU2VydmljZTtcbiAgICB0aGlzLmFsZ29saWFTZXJ2aWNlLmhlbHBlci5zZXRRdWVyeSh0aGlzLnF1ZXJ5KS5zZWFyY2goKTtcbiAgfVxuICBzZWFyY2goKSB7XG4gICAgdGhpcy5hbGdvbGlhU2VydmljZS5oZWxwZXIuc2V0UXVlcnkodGhpcy5xdWVyeSkuc2VhcmNoKCk7XG4gIH1cbn1cblxuXG4vLyBjb25zdCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBJbmplY3R9ID0gbmcuY29yZTtcbi8vIGNvbnN0IHtib290c3RyYXB9ID0gbmcucGxhdGZvcm0uYnJvd3NlcjtcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JlZmluZW1lbnQtbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHVsIGNsYXNzPVwiZmFjZXQtbGlzdFwiIFtjbGFzcy5uby1yZXN1bHRzXT1cImZhY2V0cy5sZW5ndGggPT09IDBcIj5cbiAgICAgIDxsaSBcbiAgICAgICAgKm5nRm9yPVwibGV0IGZhY2V0IG9mIGZhY2V0c1wiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiZmFjZXQuaXNSZWZpbmVkXCJcbiAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUZhY2V0KGZhY2V0Lm5hbWUpXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtuYW1lXT1cImZhY2V0Lm5hbWVcIi8+XG4gICAgICAgIHt7ZmFjZXQubmFtZX19XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e2ZhY2V0LmNvdW50fX08L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgPGxpICpuZ0lmPVwiZmFjZXRzLmxlbmd0aCA9PT0gMFwiPk5vIHJlc3VsdHMuPC9saT5cbiAgICA8L3VsPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFJlZmluZW1lbnRMaXN0IHtcbiAgZmFjZXRzID0gW11cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZ29saWFTZXJ2aWNlOiBBbGdvbGlhU2VydmljZSkge1xuICAgIHRoaXMuYWxnb2xpYVNlcnZpY2UgPSBhbGdvbGlhU2VydmljZTtcblxuICAgIGFsZ29saWFTZXJ2aWNlLmhlbHBlci5vbigncmVzdWx0JywgcmVzdWx0cyA9PiB7XG4gICAgICB0aGlzLmZhY2V0cyA9IHJlc3VsdHMuZ2V0RmFjZXRWYWx1ZXMoJ2NhdGVnb3J5JywgWydzZWxlY3RlZCcsICdjb3VudDpkZXNjJ10pLnNsaWNlKDAsIDUpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRmFjZXQoZmFjZXROYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFsZ29saWFTZXJ2aWNlLmhlbHBlci50b2dnbGVSZWZpbmVtZW50KCdjYXRlZ29yeScsIGZhY2V0TmFtZSkuc2VhcmNoKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwicmVzdWx0c1wiPlxuICAgICAgPFN0YWNrTGF5b3V0ICpuZ0Zvcj1cImxldCBoaXQgb2YgaGl0c1wiIFxuICAgICAgICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIFxuICAgICAgICBbaW5uZXJIVE1MXT1cImhpdC5faGlnaGxpZ2h0UmVzdWx0Lm5hbWUudmFsdWVcIlxuICAgICAgPlxuICAgICAgY3JhcFxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdHMge1xuICBoaXRzID0gW11cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZ29saWFTZXJ2aWNlOiBBbGdvbGlhU2VydmljZSkge1xuICAgIGFsZ29saWFTZXJ2aWNlLmhlbHBlci5vbigncmVzdWx0JywgcmVzdWx0cyA9PiB7XG4gICAgICB0aGlzLmhpdHMgPSByZXN1bHRzLmhpdHNcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwicGFnZXJcIj5cbiAgICAgIDxCdXR0b24gY2xhc3M9XCJwcmV2aW91c1wiIChjbGljayk9XCJwcmV2UGFnZSgpXCI+UHJldmlvdXM8L0J1dHRvbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY3VycmVudD1wYWdlXCI+e3tjdXJyZW50UGFnZSsxfX08L3NwYW4+XG4gICAgICA8QnV0dG9uIGNsYXNzPVwibmV4dFwiIChjbGljayk9XCJuZXh0UGFnZSgpXCI+TmV4dDwvQnV0dG9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGFnZXIge1xuICBjdXJyZW50UGFnZSA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGdvbGlhU2VydmljZTogQWxnb2xpYVNlcnZpY2UpIHtcbiAgICB0aGlzLmFsZ29saWFTZXJ2aWNlID0gYWxnb2xpYVNlcnZpY2U7XG5cbiAgICB0aGlzLmFsZ29saWFTZXJ2aWNlLmhlbHBlci5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGFsZ29saWFTZXJ2aWNlLmhlbHBlci5nZXRQYWdlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IDApIHtcbiAgICAgIHRoaXMuYWxnb2xpYVNlcnZpY2UuaGVscGVyLnByZXZpb3VzUGFnZSgpLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIHRoaXMuYWxnb2xpYVNlcnZpY2UuaGVscGVyLm5leHRQYWdlKCkuc2VhcmNoKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJhcHBcIj5cbiAgICAgIDxzZWFyY2gtYm94Pjwvc2VhcmNoLWJveD5cbiAgICAgIDxyZWZpbmVtZW50LWxpc3Q+PC9yZWZpbmVtZW50LWxpc3Q+XG4gICAgICA8cmVzdWx0cz48L3Jlc3VsdHM+XG4gICAgICA8cGFnZXI+PC9wYWdlcj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cbiJdfQ==