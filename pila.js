class nodo{
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}
class pila{
    constructor() {
        this.cima = null;
        this.tamaño = 0;
    }
    push(dato) { //Funcion que agrega un elemento a la pila
        let nuevoNodo = new nodo(dato);
        if (this.cima == null) {
            this.cima = nuevoNodo;
        } else {
            nuevoNodo.siguiente = this.cima;
            this.cima = nuevoNodo;
        }
        this.tamaño++;
    }
    pop() { //Funcion que elimina el elemento en este caso el primero en entrar
        if (this.cima == null) {
            return null;
        } else {
            let dato = this.cima.dato;
            this.cima = this.cima.siguiente;
            this.tamaño--;
            return dato;
        }
    }
    peek() {
        if (this.cima == null) {
            return null;
        } else {
            return this.cima.dato;
        }
    }
    print() {
        let aux = this.cima;
        let resultado = "";
        while (aux != null) {
            resultado += aux.dato + " ";
            aux = aux.siguiente;
        }
        console.log(resultado);
    }
}
