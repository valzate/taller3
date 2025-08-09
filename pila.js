class nodo{
    constructor(dato) {
        this.dato = dato;
        this.anterior = null;
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
    peek() {//Funcion que retorna el elemento en la cima de la pila sin eliminarlo
        if (this.cima == null) {
            return null;
        } else {
            return this.cima.dato;
        }
    }
    print() {//Funcion que imprime los elementos de la pila
        let aux = this.cima;
        let resultado = "";
        while (aux != null) {
            resultado += aux.dato + " ";
            aux = aux.siguiente;
        }
        console.log(resultado);
    }
}
const pila1 = new pila();
pila1.push(10);
pila1.push(20);
pila1.push(30);
console.log("Pila después de agregar elementos:");
pila1.print();
pila1.pop();
console.log("Pila después de eliminar un elemento:");
pila1.print();
console.log("Elemento en la cima de la pila:", pila1.peek());