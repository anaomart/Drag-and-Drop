const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    let item = list_items[i];

    item.addEventListener('dragstart', function(e) {
            draggedItem = e.target;
            console.log('dragstart', e, draggedItem)
            setTimeout(function() {
                e.target.style.display = 'none';
            })
        })
        // 
    item.addEventListener('dragend', function(e) {
        e.target.style.display = 'block';
        setTimeout(function() { draggedItem = null; })
        console.log('dragend', e)
    })

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        list.addEventListener('dragenter', function(e) {
            e.preventDefault();
        })
        list.addEventListener('drop', function(e) {
            e.target.append(draggedItem)

        })
    }
}