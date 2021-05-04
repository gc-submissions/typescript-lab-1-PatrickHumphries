export interface Product {
    name: string;
    price: number;
}

export let products: Product[] = [{name: 'tofu', price: 2.50}, 
{name: 'bread', price: 1.59},
{name: 'lettuce', price: 2.99}
];

export function calcAverageProductPrice(array: Product[]): number {
    let sum: number = 0;
    if (array.length === 0) {
        return 0;
    }
    for (let i: number = 0; i < array.length; i++) {
        sum += array[i].price;
    }
    return sum / array.length;
}

let result = calcAverageProductPrice(products);
console.log(result);