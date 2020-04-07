const events = document.querySelector('.events');

document.addEventListener('DOMContentLoaded', function() {
    //menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus,{edge: 'right'});

    //add event form
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'left'});
});

//Criar evento
const renderEvent = (data, id) => {

    const html = `
        <div class="card-panel event white row" data-id="${id}">
            <img src="/img/Webp.net-resizeimage.png" alt="event thumb">
            <div class="event-details">
                <div class="event-title">${data.title}</div>
                <div class="event-date">${data.date}</div>
            </div>
            <div class="event-delete">
                <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
        </div>         
    `;

    events.innerHTML += html;

};