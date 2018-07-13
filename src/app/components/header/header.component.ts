// Se importa Component para definir el componente
import { Component } from '@angular/core';

// Para decirle a typescript que es un componente usamos el decorador
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})


// Se define una clase y se necesita exportar para poder ser utilizado
export class HeaderComponent {
}
