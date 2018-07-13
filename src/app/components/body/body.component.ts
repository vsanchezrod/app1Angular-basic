import { Component } from '@angular/core';

@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    // Se crean propiedades
    frase: any = {
        mensaje: 'No puedes pasar!!!',
        autor: 'Gandalf'
    };

    // Array para usar *ngFor
    personajes: string[] = ['Frodo', 'Gollum', 'Gandalf', 'Legolas'];

}
