document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert('plese enter a task')
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
        <i class="fas fa-trash-alt"></i>
        </button>
        </div>
        `;
        // elimina al dar click la lista
        var current_tasks = document.querySelectorAll('.delete');
        for (i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }

}







// document.addEventListener('click', (e) => {
//     if (e.target.id == 'push') {
//         let entrada = document.getElementById('entrada')
//         let tasks = document.getElementById('tasks')
//         if (entrada.value.length == '') {
//             alert('entra as tsk')
//         } else {
//             tasks.innerHTML += ` <div class="task">
//             <span id="taskname">
//              ${entrada.value}
//               </span>
//               </div>`
//             entrada.value = ''
//         }
//     }
// })
