//offline
db.enablePersistence()
    .catch(err => {
        if(err.code == 'failed-precondition') {
            console.log('Falha na persistencia de dados');
        } else if(err.code == 'unimplemented') {
            console.log('Navegador sem suporte para persistencia de dados');
        }
    })

//listener
db.collection('Eventos').onSnapshot((snapshot) => {
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        //console.log(change, change.doc.data());
        if(change.type === 'added') {
            renderEvent(change.doc.data(),change.doc.id);
        } else if (change.type === 'removed') {
            //remove doc
        }
    })
})

//add novo evento
const form = document.querySelector('form');

form.addEventListener('submit', evt => {
    evt.preventDefault();

    const event = {
        title: form.title.value,
        date: form.date.value
    };

    db.collection('Eventos').add(event)
        .catch(err => console.log(err));

    form.title.value = '';
    form.date.value = '';
})