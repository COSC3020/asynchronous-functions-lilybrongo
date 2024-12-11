//array is the array of elements we need to search through
//key is the value that we need to find/countMatches for
//the promise is resolving to the count of matches
async function countMatches(array, key) {
    let promise = new Promise(function (resolve) {
        let count = 0;
        for (i = 0; i < array.length; i++) {
            if (array[i] === key) {
                count++
            }
        }
        resolve(count);
    });
    return promise;
}
//this function will be called in my test cases in order to retrieve the key within the array
//the callback is passed as an argument to testCase, and used as the holder for the count result
//that comes from countMatches
async function testCase(array, key, callback) {
    let count = await countMatches(array, key);
    callback(count);
}