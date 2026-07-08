let name="Hanzala";

{
    let name="Ali"
    console.log(name);
}

console.log(name);
//first Hanzal will be printed 
//then Ali 

//now with var

var age=24;

{
    var age=25;
    console.log(age);
}

console.log(age);

//with var js printed 25 both times bcz var is not block scoped so no new scope has created  so second var has overridden the first var 
