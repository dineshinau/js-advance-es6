// callbak hell

const cart  = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

const api = {
    createOrder: function (cart, callback) {
        // Simulate API call
        setTimeout(function () {
            console.log("Order created");
            callback();
        }, 1000);
    },
    proceedToPayment: function (callback) {
        // Simulate API call
        setTimeout(function () {
            console.log("Payment processed");
            callback();
        }, 1000);
    },
    showOrderDetails: function (callback) {
        // Simulate API call
        setTimeout(function () {
            console.log("Order details shown");
            callback();
        }, 1000);
    },
    updateWallet: function () {
        // Simulate API call
        setTimeout(function () {
            console.log("Wallet updated");
        }, 1000);
    }
};

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderDetails(function () {
            api.updateWallet();
        });
    });
})

