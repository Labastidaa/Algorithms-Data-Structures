class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    // TOPE DE LA PILA
    this.top = null;
    // FONDO DE LA PILA
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // DEVUELVE EL TOPE DE LA FILA
    return this.top;
  }

  // RECIBE EL VALOR A AÑADIR
  push(value) {
    // INSTANCIAMOS EL NUEVO NODO
    const newNode = new Node(value);

    // SI EL LARGO DEL STACK ES 0, EJECUTAR...
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } 
    //SI NO
    else {
        // GUARDAMOS EL TOPE DE LA PILA
      const holdingPointer = this.top;
        // EL TOPE AHORA ES EL NUEVO NODO
      this.top = newNode;
        // NEXT ES EL TEMPORAL
      this.top.next = holdingPointer;
    }
    this.length++;

    return this;
  }

  pop() {
    
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return this;
  }

}

const myStack = new Stack();