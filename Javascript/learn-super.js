//We use  super keyword refering parent class method or property from children class
class developer
{
    constructor(name)
    {
        this.name=name;
    }
    code()
    {
        console.log(`${this.name}is wrinting code.`);
    }
}

class seniordeveloper extends developer
{
    constructor(name,technology)
    {
        super(name);
        this.technology=technology;
    }
    code() //parent class referance
    {
        super.code();
        console.log(`${this.name} is reviewing code and mentoring juniors in${this.technology}`);
    }
}
const seniordev=new seniordeveloper("Pathiban","React");
console.log(seniordev);

seniordev.code();