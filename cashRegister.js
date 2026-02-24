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
        }
    }
cashRegister.addItem('Phone');
cashRegister.addItem('Console');
cashRegister.addItem('Tablet');
console.log(cashRegister.shoppingCart);