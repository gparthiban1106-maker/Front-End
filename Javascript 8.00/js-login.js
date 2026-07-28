let password="admin123";

function login(userpassword) 
{
    if(userpassword===password)
        {
            console.log("Login Successfully");
        }    
    else
        {
            console.log("Invalid Password");
        }
}
password="hacked"; //anyone can change it
login("admin123");