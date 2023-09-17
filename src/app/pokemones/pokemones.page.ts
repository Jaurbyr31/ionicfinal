import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {

  /* Aca estan las variables de los pokemones */
  listPokemones: any[] = [];
  listPokemonesOriginal: any[] = [];
  searchTerm: string = ''; // Define la barra de busqueda para los pokemones

  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute) {}

  navigate(value: any) {
    let id = JSON.stringify(value);
    this.router.navigate(['./detail-noticia', { id }]);
    localStorage.setItem('NotisDetail', JSON.stringify(value));
  }

  ngOnInit() {
    /* Aca se resiven las variables de pokemon */
    this.http.get('../../assets/noticias/pokemones.json').subscribe(data => {
      this.listPokemones = JSON.parse(JSON.stringify(data))[0].detailPokemones;
      this.listPokemonesOriginal = JSON.parse(JSON.stringify(data))[0].detailPokemones;
    });
  }

  // Método para filtrar los pokemones
  filterPokemones(searchTerm: string): void {
    if (!searchTerm.trim()) {
      // Si el término de búsqueda está vacío, muestra todas las tarjetas nuevamente.
      this.listPokemones = this.listPokemonesOriginal;
    } else {
      // Filtra los auidios y videos que coincidan con el término de búsqueda.
      this.listPokemones = this.listPokemonesOriginal.filter(pokemon =>
        pokemon.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pokemon.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  back(){this.router.navigate(['/home']);}
}
