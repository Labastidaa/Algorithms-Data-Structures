// Es una tabla de datos asociativa

/* 
Relaciona 1 llave y un valor, utilizando una función de Hash.

Esta función se usa para calcular el índice al que han de ir los elementos que estamos guardando en la tabla.
*/

/*
Una tabla de hash guarda elementos en SLOTS o BUCKETS.
Esta tabla puede tener un numero arbitrario de slots
*/


class hashTable {

    constructor(size){
        this.data = new Array(size);
    }

    hashMethod(key){
        let hash = 0;
        for( i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
    return hash;
    }

    set(key, value){
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key,value]);
        return this.data;
    }

    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
    }    

    delete(key){
        // Obtener el hash del address
        const address = this.hashMethod(key);

        // Obtener bucket donde buscar el espacio a eliminar
        const currentBucket = this.data[address];
    

        if(currentBucket){
            // Recorriendo el espacio
            for(let i = 0; i < currentBucket.length; i++){

                if(currentBucket[i][0] === key){
                    // Guardo el espacio para retornarlo luego
                    let deletedSpace = currentBucket[i];

                    // Eliminar el espacio
                    delete currentBucket[i]

                    //Elimino el espacio vacio para que los demas espacios recorran
                    currentBucket.splice(i, 1);
                    return deletedSpace;
                }
            }
        }
    }
    
    getAllKeys() {
        return this.data

        // Creates new array with all the elements of sub-array concatenated recursivily to the specified depth. In this case default depth is 1.
        .flat()
        // Creates new array with each key as a name parameter 
        .map(([name]) => name)
      } 

}

const myHashTable = new hashTable(50);