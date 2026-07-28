function createloginsystem() 
{
let password="admin123";

let login=function(userPassword) 
{
    if(userPassword===password)
        {
            console.log("Login Successfully");
        }    
    else
        {
            console.log("Invalid Password");
        }
};

let changePassword=function(oldPassword,newPassword) 
{
    if(oldPassword===password)  
        {
            password=newPassword;
            console.log("Password Updated");
            
        }    
    else
        {
            console.log("Wrong Old Password");
        }
};
return{login,changePassword};
}

const auth=createloginsystem();
auth.login("admin123");

auth.changePassword("admin123","Par123");

auth.login("Par123");
auth.login("admin123");
console.log(auth.password);

