



function showNotification(type,message){
    const notification = document.createElement('div');
    notification.className =`notification ${type}`;
    notification.textContent=message;
const notifications =document.getElementById('notification-container');
notifications.append(notification);
requestAnimationFrame(()=>{
    notification.classList.add('show');
})
setTimeout(()=>{
    notification.classList.remove('show');
    notification.classList.add('hide');
    setTimeout(() => {
        notifications.removeChild()        
    }, timeout);
},4000)
document.querySelector('button')
}