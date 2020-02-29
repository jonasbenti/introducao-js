const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
    if(item % 2 === 0){
        console.info(`O nº ${item} é par`);
    }else{
        console.info(`O nº ${item} é impar`);
    }
})