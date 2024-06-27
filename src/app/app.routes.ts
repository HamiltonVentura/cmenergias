import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


export const routes: Routes = [
  { path:"", component:HomeComponent },
  { path: "servicos", component: ServicosComponent},
  { path: "sobre", component: SobrenosComponent},
  { path: "portfolio", component: PortfolioComponent}
];
