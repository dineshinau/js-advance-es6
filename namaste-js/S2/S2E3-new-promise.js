// New Promise-based function to fetch data from an API

// const cart = ["shoes", "glasses","tshirt"];

// function createOrder (cart)   {
//    const pr = new Promise ( (resolve, reject) => {
//         if(!validateCart(cart)){
//             const err = new Error('Cart is not valid');
//             reject(err);
//         }
//         const orderId = '12345';

//         setTimeout(() => {
//             resolve(orderId);
//         }, 3000);
//     });
//     return pr
// }
// function validateCart  () {
//   return  true;
// }

const cart = ["shoes", "glasses","tshirt"];

const createOrder = (cart) => {
    return new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "12345";

        setTimeout(() => {
            resolve(orderId);
        }, 3000);
    });
};

const validateCart = () => {
    return true;
};
const processPayment = (orderId) => {
    return new Promise ((resolve, reject) => {
        resolve("Payment successfull");
    })
}

const orderObj = createOrder(cart);
console.log(orderObj);

orderObj.then( orderId => console.log(orderId))
.then((orderId) => processPayment(orderId))
.then((paymentInfo)=>console.log(paymentInfo))
.catch( (err) =>  console.log(err.message))
.then(() => console.log('No matter what happens, I will definetly called. Just like finally'))
