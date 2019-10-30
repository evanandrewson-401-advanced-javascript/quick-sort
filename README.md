# InsertionSort
Coding challenge #28

## Challenge
The challenge is to create a function that will sort an array with the quick sort method.

## Approach & Efficiency 
The solution only uses one loop so it's linear. It uses three functions - partition, swap, and quickSort. Quicksort is the main function that employs the other two. It first finds a pivot point using the partition function then recursively sorts the array to the left and right of the pivot. Partition works by looping through the array and swapping any values lower than the far right value with their values to the left, then after the loop swapping the far right value with the index of the highest value less than the far right value. Swap works by swapping the values at two indices in the array.