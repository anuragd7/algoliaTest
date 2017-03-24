"use strict";
var core_1 = require("@angular/core");
var algoliasearch = require('algoliasearch');
var algoliasearchHelper = require('algoliasearchHelper');
var AlgoliaService = (function () {
    function AlgoliaService() {
        this.client = algoliasearch('latency', '249078a3d4337a8231f1665ec5a44966');
        this.helper = algoliasearchHelper(this.client, 'bestbuy', {
            disjunctiveFacets: ['category'],
            hitsPerPage: 7,
            maxValuesPerFacet: 3
        });
    }
    return AlgoliaService;
}());
AlgoliaService = __decorate([
    core_1.Injectable()
], AlgoliaService);
exports.AlgoliaService = AlgoliaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxnb2xpYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxnb2xpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdDLElBQUksbUJBQW1CLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFJekQsSUFBYSxjQUFjO0lBRDNCO1FBRUksV0FBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztRQUN0RSxXQUFNLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUU7WUFDakQsaUJBQWlCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDL0IsV0FBVyxFQUFFLENBQUM7WUFDZCxpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksY0FBYztJQUQxQixpQkFBVSxFQUFFO0dBQ0EsY0FBYyxDQU8xQjtBQVBZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbnZhciBhbGdvbGlhc2VhcmNoID0gcmVxdWlyZSgnYWxnb2xpYXNlYXJjaCcpO1xyXG52YXIgYWxnb2xpYXNlYXJjaEhlbHBlciA9IHJlcXVpcmUoJ2FsZ29saWFzZWFyY2hIZWxwZXInKTtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbGdvbGlhU2VydmljZSB7XHJcbiAgICBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCdsYXRlbmN5JywgJzI0OTA3OGEzZDQzMzdhODIzMWYxNjY1ZWM1YTQ0OTY2Jyk7XHJcbiAgICBoZWxwZXIgPSBhbGdvbGlhc2VhcmNoSGVscGVyKHRoaXMuY2xpZW50LCAnYmVzdGJ1eScsIHtcclxuICAgICAgICBkaXNqdW5jdGl2ZUZhY2V0czogWydjYXRlZ29yeSddLFxyXG4gICAgICAgIGhpdHNQZXJQYWdlOiA3LFxyXG4gICAgICAgIG1heFZhbHVlc1BlckZhY2V0OiAzXHJcbiAgICB9KTtcclxufSJdfQ==