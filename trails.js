function hem() {
    let a = 5; 
    let b = 10;
if (a++ > 5 && ++b > 10) {
//    console.log(a++);
   a++;
}
console.log("a:",a, "b:", b);
}
hem()

function swapTowNum() {
    let a = 5; 
    let b = 10;

    a=a^b;   
    console.log('a: ', a);
    b=a^b;
    console.log('b: ', b);
    a=a^b;
    console.log('a2: ', a);

    console.log('a :' ,a)
    console.log('b :' ,b)
}
swapTowNum()


const obj = {name: "shadan", age: 1};
Object.freeze(obj);
obj.name = "hemant";
console.log('obj.name: ', obj.name);
