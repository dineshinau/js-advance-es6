//Promises
// const cart  = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
// const promise = createOrder(cart);
// {data : undefined}  -> { data: orderDetails}

// promise.then(function (orderId) {
//   proceedPayment(orderId);
// })

// Promise chaining
// createOrder(cart)
// .then((orderId) => processPayment(orderId))
// .then((paymentInfo) => showOrderSummary())
// .then ((paymentInfo) => updateBalance())


// fetch api retrun Promise by default

const GITHUB_USER = 'https://api.github.com/users/dineshinau';

const user = fetch(GITHUB_USER);

console.log(user);

user.then( (data) => {
    console.log(data);
})
