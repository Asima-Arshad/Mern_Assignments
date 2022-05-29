//Assignent # 2
// Print true for weel days and false for Saturday and Sunday.

let param = day => {
    const expr = day;
    switch (day) {
        case 'monday':
        case 'tuesday':
        case 'Wednesday':
        case 'thursdar':
        case 'Friday':
            console.log("true");
            break;
    
        default:
            console.log("false");
    }
}
param("saturday");
