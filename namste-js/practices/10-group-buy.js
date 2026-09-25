function groupBy(arr, key) {
    if(arr.length < 1){
        return {};
    }

    let res = {};
    for (let i in arr){
        if(arr[i][key] in res) {
            res[arr[i][key]].push(arr[i]);
        }else{
            res[arr[i][key]] = [arr[i]];
        }
    }
    return res;
}


const input1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];
const key1 = 'age';

const input2 = [
    { id: 1, category: 'Electronics' },
    { id: 2, category: 'Clothing' },
    { id: 3, category: 'Electronics' }
];
const key2 = 'category';

const res1 = groupBy(input1, key1)
const res2 = groupBy(input2, key2)

console.table(res1)
console.table(res2)
