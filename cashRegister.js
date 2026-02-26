const cashRegister = {
    itemsForSale: [
        { name: 'Phone', price : 300},
        { name: 'Laptop', price : 800},
        { name: 'Console', price : 150},
    ],
    shoppingCart: [],
    addItem: function(name) {
        let foundItem = this.itemsForSale.find(function(item) {
            return item.name === name
        })
        if (foundItem){
            this.shoppingCart.push(foundItem)
            console.log(foundItem.name + ' added to cart')
        } else {
            console.log(name + ' not found in items for sale')
        }
    },
    itemTotal: function(){
        let total = 0;
        this.shoppingCart.forEach(function(purchased){
            total += purchased.price;
        });
        return total;
    },
    pay: function(cash){
        let totalCashAmount = this.itemTotal();
        if (cash >= totalCashAmount) {
            console.log("Payment successful. Change: $" + (cash - totalCashAmount));
        } else {
            console.log("Insufficient funds.");
        }
    }
};
cashRegister.addItem('Phone');
cashRegister.addItem('Console');
cashRegister.addItem('Tablet');
console.log(cashRegister.shoppingCart);
console.log("Total: $" + cashRegister.itemTotal());
cashRegister.pay(500);