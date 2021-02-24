const PHONE = '+380975079115'
const EMAIL = 'dfgshte@gmail.com'

const person = {
    name: 'Myroslav'
}

function info(phone, email) {
    console.log(`Name: ${this.name}`)
    console.log(`Phone: ${phone}`)
    console.log(`Email: ${email}`)
}

// Test

// info.bind(person)('+380975079115', 'dfgshte@gmail.com')
// info.bind(person, '+380975079115')('dfgshte@gmail.com')
// info.bind(person, '+380975079115', 'dfgshte@gmail.com')()


// 1

// function bind(fn, context, ...rest) {
//     return fn.bind(context, ...rest)
// }

// 2

// function bind(fn, context, ...rest) {
//     return function(...args) {
//         const uniqId = Date.now().toString()

//         context[uniqId] = fn

//         result = context[uniqId](...rest, ...args)

//         delete context[uniqId]

//         return result
//     }
// }

// 3

// function bind(fn, context) {
//     const rest = Array.prototype.slice.call(arguments, 2)
//     return function() {
//         const args = Array.prototype.slice.call(arguments)
//         return fn.apply(context, rest.concat(args))
//     }
// }

// 4

function bind(fn, context, ...rest) {
    return function(...args) {
        // return fn.apply(context, [...rest, ...args])
        return fn.call(context, ...rest, ...args)
    }
}

bind(info, person)(PHONE, EMAIL)
bind(info, person, PHONE)(EMAIL)
bind(info, person, PHONE, EMAIL)()

// console.log(person)


// Call 

function call(fn, context, ...rest) {
    const uniqId = Date.now().toString()

    context[uniqId] = fn

    result = context[uniqId](...rest)

    delete context[uniqId]

    return result
}

call(info, person, PHONE, EMAIL)


// Apply 

function apply(fn, context, args) {
    const uniqId = Date.now().toString()

    context[uniqId] = fn

    result = context[uniqId](...args)

    delete context[uniqId]

    return result
}

apply(info, person, [PHONE, EMAIL])