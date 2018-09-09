/**
 * Решение задачи №5
 * @returns {Array}
 */
function promises() {
    let arr = [];
    for (let i = 1; i < 11; i++) {
        fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                arr.push(response);
            });
    }
    return arr;
}

console.log(promises());


