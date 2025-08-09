class nodo{
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}
class cola{ 
    constructor() {
        this.frente = null;
        this.final = null;
        this.tamaño = 0;
    }
    enqueue(dato) { //Funcion que agrega un elemento a la cola
        let nuevoNodo = new nodo(dato);
        if (this.final == null) {
            this.frente = nuevoNodo;
            this.final = nuevoNodo;
        } else {
            this.final.siguiente = nuevoNodo;
            this.final = nuevoNodo;
        }
        this.tamaño++;
    }
    dequeue() { //Funcion que elimina el elemento en este caso el primero en entrar
        if (this.frente == null) {
            return null;
        } else {
            let dato = this.frente.dato;
            this.frente = this.frente.siguiente;
            if (this.frente == null) {
                this.final = null;
            }
            this.tamaño--;
            return dato;
        }
    }
    peek() { //Funcion que retorna el elemento al frente de la cola sin eliminarlo
        if (this.frente == null) {
            return null;
        } else {
            return this.frente.dato;
        }
    }
    print() { //Funcion que imprime los elementos de la cola
        let aux = this.frente;
        let resultado = "";
        while (aux != null) {
            resultado += aux.dato + " ";
            aux = aux.siguiente;
        }
        console.log(resultado);
    }
}
const cola1 = new cola();
cola1.enqueue(10);
cola1.enqueue(20);
cola1.enqueue(30);
console.log("Cola después de agregar elementos:");
cola1.print();
cola1.dequeue();
console.log("Cola después de eliminar un elemento:");
cola1.print();
console.log("Elemento al frente de la cola:", cola1.peek());
