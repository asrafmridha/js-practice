const names = ['Tahmina', 'Priyanka', 'Sampa', 'Tahmina', 'Priyanka', 'Setu', 'Nupur', 'Setu'];

function noDuplicate(arr) {
    const unique = [];
    for (const item of arr) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
    
}
const uniqueArray = noDuplicate(names);
console.log(uniqueArray);