import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent, SearchBox, RefinementList, Results, Pager } from "./app.component";
import { AlgoliaService } from "./services/algolia.service";

@NgModule({
  declarations: [AppComponent,
    SearchBox,
    RefinementList,
    Results,
    Pager],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  providers: [AlgoliaService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
