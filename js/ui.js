document.addEventListener('DOMContentLoaded', function() {
    //menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus,{edge: 'right'});

    //add event form
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'left'});
});