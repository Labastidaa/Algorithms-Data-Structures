// Creation an array class 
// Const Array = [Item1, Item2, Item3]

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }

    // Return item based on index.
    get(index) {
      return this.data[index];
    }

    // Add new item
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }

    // Delete last item.
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }

    delete(index) {
        // we keep record on the item deleted.
      const item = this.data[index];
        //shift indexes and delete last one.
      this.shiftIndex(index);
  
      return item;
    }

    //Function to shift and delete index.
    shiftIndex(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }

      delete this.data[this.length - 1];
      this.length--;
    }


  }
  
  const ArrayLetters = new MyArray;
  ArrayLetters.push('A')
  ArrayLetters.push('B')
  ArrayLetters.push('C')
  ArrayLetters.push('D')
  ArrayLetters.push('E')
  ArrayLetters.push('F')

  // {0: ‘A’, 1: ‘B’, 2: ‘C’, 3: ‘D’, 4: ‘E’, 5: ‘F’}

  // Cambiando el indice 2, lo pasamos como parametro.
  ArrayLetters.shiftIndex(2);