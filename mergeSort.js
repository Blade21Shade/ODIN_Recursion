function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }

    // Split arrays for further sorting
    let arr1 = [];
    let arr2 = [];

    let arr1Limit;

    if (array.length % 2 === 0) { // Get rid of floating division error
        arr1Limit = array.length/2;
    } else {
        arr1Limit = (array.length - 1)/2;
    }

    for (let i = 0; i < arr1Limit; i++) {
        arr1.push(array[i]);
    }

    for (let i = arr1Limit; i < array.length; i++) { // Note: If array.length is odd arr2 will have one more entry than arr1
        arr2.push(array[i]);
    }

    let sorted1 = mergeSort(arr1);
    let sorted2 = mergeSort(arr2);

    // Split arrays are sorted, merge them and return the merged array

    let sorted1CurrentIndex = 0;
    let sorted2CurrentIndex = 0;

    let anArrayEmptied = false;

    let sortedMerged = [];

    let addFromArray; // These are used to add leftover values to the merged array
    let addFromIndex;

    while (anArrayEmptied == false) {
        // Compare array entries and add the smaller one to sortedMerged, increment that array's current index
        if (sorted1[sorted1CurrentIndex] < sorted2[sorted2CurrentIndex]) {
            sortedMerged.push(sorted1[sorted1CurrentIndex]);
            sorted1CurrentIndex++;
        } else {
            sortedMerged.push(sorted2[sorted2CurrentIndex]);
            sorted2CurrentIndex++;
        }

        // See if the loop should exit, if so, setup for adding leftover values
        if (sorted1CurrentIndex === sorted1.length) {
            addFromArray = sorted2;
            addFromIndex = sorted2CurrentIndex;

            anArrayEmptied = true;
        } else if (sorted2CurrentIndex === sorted2.length) {
            addFromArray = sorted1;
            addFromIndex = sorted1CurrentIndex;

            anArrayEmptied = true;
        }
    }

    // Add any leftover values to the sorted array
    for (let i = addFromIndex; i < addFromArray.length; i++) {
        sortedMerged.push(addFromArray[i]);
    }

    return sortedMerged;
}

let arr1 = [1, 3, 2, 4, 6, 5];
let arr2 = [15, 9, 8, 2, 5, 14, 1, 7, 6, 3, 12, 11, 4, 10, 13]

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));