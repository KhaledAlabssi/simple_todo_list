// alert("Hello")

// creating array of object
let todos = [
    {'text': 'Walk the dog'},
    {'text': 'Buy some milk'},
    {'text': 'Call the doctor'}
]


// Update todos list
function updateTodos () {
    console.log('The Array Is:')
    todos.forEach(i => console.log(i.text))
}
// updateTodos()

const newTodo = "I'm new todo :)"


// Add new todo to the array
function addTodo (todo) {
    todos.unshift({'text': todo})
    // updateTodos()
}

console.log('===addTodo====')

addTodo(newTodo)
updateTodos()

// Mark todo as done

function doneItem (todo) {
    todos.forEach(i => {
        if (i.text === todo) {
            console.log(i.text + '..to be done here :))))')
        }
    })
    updateTodos
}

const itemToDone = 'Call the doctor'
doneItem(itemToDone)



function deleteTodo (todo) {
    for (let i=0; i<todos.length; i++) {
        if (todos[i].text === todo) {
            
            todos.splice(i, 1)
            break
        }
    }

    console.log('===deleteTodo===')
    updateTodos()
        
}

const itemToDelete = 'Buy some milk'
// deleteTodo(itemToDelete)
updateTodos()
deleteTodo(itemToDelete)