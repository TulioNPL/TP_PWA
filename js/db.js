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

