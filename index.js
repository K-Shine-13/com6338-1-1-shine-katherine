function greet() {
    var name = prompt('What is your name?')
    alert('Hello, ' + name)

    var age = prompt('How old are you?')
    console.log(parseInt(age))

    /* var birthday = confirm('Did you have a birthday yet this year?')
    if (birthday = true) {
        alert('You were born in ' + (new Date().getFullYear() - age))
    } else {
        alert('You were born in ' + age)
    }
    */

    if (window.confirm('Did you have a birthday yet this year?')) {
        alert('You were born in ' + (new Date().getFullYear() - age))
    } else {
        alert('You were born in ' + (new Date().getFullYear() - age - 1))
    }
}
