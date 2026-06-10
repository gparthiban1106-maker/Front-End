class Notification
{ 
send(){
    console.log("Send Notification...");   
}
}

class EmailNotification extends Notification
{
    send()
    {
        console.log("📧Sending Email");
    }
}

class SMSNotification extends Notification
{
    send()
    {
        console.log("📱Sending SMS");   
    }
}

class PushNotification extends Notification
{
    send()
    {
        console.log("🔔Sending Push Notification");  
    }
}

let email=new EmailNotification();
email.send();

let push=new PushNotification();
push.send();

//Difference form of same method.