//Left Half Pyramid
console.log("Left Half Pyramid");
let n=4;
for (let i=1; i<=n;i++){   
    let str='* ';
    console.log(str.repeat(i) );
}

//Inverted Left Half Pyramid
console.log("Inverted Left Half Pyramid");
let o=4;
for (let i=o; i>=1;i--){   
    let str='* ';
    console.log(str.repeat(i) );
}


//Right Half Pyramid
console.log("Right Half Pyramid");
let m=4;
for (let i=1; i<=m;i++){   
    let str='* ';
    let space="  ";
    console.log(space.repeat(m-i)+str.repeat(i) );
}

//Inverted Right Half Pyramid
console.log("Inverted Right Half Pyramid");
let p=4;
for (let i=p; i>=1;i--){   
    let str='* ';
    let space="  ";
    console.log(space.repeat(p-i)+str.repeat(i) );
}


//Full Pyramid
console.log("Full Pyramid");

let y = 4;

for (let i = 1; i <= y; i++) {
    let space = " ";
    let star = "* ";

    console.log(space.repeat(y - i) + star.repeat(i));
}

//Inverted Full Pyramid
console.log("Inverted Full Pyramid");
let e=4;

for (let i=4;i>=1;i--){
    let str="* "
    let spc=" "
    console.log(spc.repeat(e-i)+str.repeat(i));
}

//Half Diamond Pattern
console.log("Half Diamond Pattern");
let a=5;
for (let i=1; i<=a;i++)
{
    let str='* ';
    console.log(str.repeat(i));
}
for (let i=5; i>=1;i--)
{
    let str="* ";
    console.log(str.repeat(i));
}

//Full diamond Pattern
console.log("Full Diamond Pattern");
let d=5;
for (let i = 1; i <= d; i++) {
    let space = " ";
    let star = "* ";
    console.log(space.repeat(d - i) + star.repeat(i));
}
for (let i = 5; i >= 1; i--) {
    let space = " ";
    let star = "* ";
    console.log(space.repeat(d - i) + star.repeat(i));
}