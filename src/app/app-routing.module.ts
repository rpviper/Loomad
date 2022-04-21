import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { HiiredComponent } from './hiired/hiired.component';
import { KoeradComponent } from './koerad/koerad.component';
import { KokkuComponent } from './kokku/kokku.component';

const routes: Routes = [
  {path: "avaleht", component: AvalehtComponent},
  {path: "koerad", component: KoeradComponent},
  {path: "hiired", component: HiiredComponent},
  {path: "kokku", component: KokkuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
