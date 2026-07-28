function completeTask(taskName,callback)
{
    console.log(`Working on ${taskName}...`);
    console.log(`${taskName} completed`);
    callback();
}
function notifyManager()
{
    console.log("Email sent to Project Manager");
}

completeTask("React Dashboard Development",notifyManager);