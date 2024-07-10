import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  {
    path: "",
    component: HeaderComponent,
    children: [
      {
        path: "",
        component: IndexComponent,
      },
      {
        path: "favoritos",
        component: FavoritesComponent,
      }
    ]
  }
];
