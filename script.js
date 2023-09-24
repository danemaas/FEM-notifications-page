function toggleRead() {
    document.getElementById('unreadCounter').innerHTML = "0";

    const notifCard = document.querySelectorAll('.notif-card');
    const marker = document.querySelectorAll('.marker');

    notifCard.forEach((elements) => {
        elements.classList.remove('unread');
    });

    marker.forEach((elements) => {
        elements.classList.add('d-none');
    });
}


const notifCard = document.querySelectorAll('.notif-card');
const marker = document.querySelectorAll('.marker');

notifCard.forEach((notification) => {
    notification.addEventListener('click', function() {
        if(notification.classList.contains('unread')) {
            const targetId = this.getAttribute('data-target');
            const targetMarker = document.getElementById(targetId);
            const counter = parseInt(document.getElementById('unreadCounter').textContent);
            
            if(targetMarker) {
                targetMarker.classList.add('d-none');
            }
            
            document.getElementById('unreadCounter').innerHTML = (counter-1);
            this.classList.remove('unread');
        }
    });
});
