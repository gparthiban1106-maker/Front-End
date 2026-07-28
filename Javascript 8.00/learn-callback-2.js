function downlaodReport(callback)
{
    console.log("Downloading Report...");
    setTimeout(() => {
        console.log("Report Downloaded");
        callback();
    }, 3000);
}
function sendEmail()
{
    console.log("Email sent to client");
    
}
downlaodReport(sendEmail);
//downlaodReport(()=>{ sendEmail();});