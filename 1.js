// 1
let array = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"]

sustituir(array)

function sustituir(array) {
    
    array.forEach((array) => {
        if (array == "🍕") {
            array="🥛"   
        }
        
        console.log(array);
    });
}

// 2
let array2= ["🍕","🍕","🍍","🍕","🍕"]
sustituir2(array2)

function sustituir2(array2) {
    
    array2.forEach(array2 => {
        if (array2 == "🍍") {
            
        console.log(array2);
    } 
    });
    
}
// 3
let array3= ["🍕","🍕","🍍","🍕","🍕"]
sustituir3(array3)

function sustituir3(array3) {
    array3.forEach(array3 => {
        if (array3 == "🍍") {
        array3="🍕"

    } 
    
    console.log(array3);

    });
    
}

// 4
let array4= ["🍓","🍋","🍓","🍋","🍓"]
sustituir4(array4)
console.log("4")
function sustituir4(array4) {
    array4.forEach(array4 => {
        if (array4 == "🍓") {
        array4="🍄"

    } 
    
    console.log(array4);

    });
}

// 5
let array5= ["🌶️","🥛","🌶️","🥛","🌶️","🥛"]
sustituir5(array5)
function sustituir5(array5) {
    let i = 0
    array5.forEach(ar5 => {
        i++
        if (ar5 == '🌶️')
        array5.splice(i, 0, '🥵')
    });
    array5.splice(array5.lastIndexOf('🌶️')+1, 0, '🥵')
    
    console.log(array5)
}

// 6

let array6 = ['🎴', '🎴', '🎴', '🃏', '🎴', '🎴', '🎴']
colocar6(array6)
function colocar6 (array6){
    let index = 0
    array6.forEach(ar6 => {
        if(ar6 == '🎴' && array6[index+1] == '🎴'  ){
            array6.splice(index+1, 0, '🃏')
        }
        index++     
    })
    array.splice(array6.lastIndexOf('🎴'), 0, '🃏')
    console.log(array6)

}
