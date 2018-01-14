//DONE: Max-Heap
// Create a MaxHeap Prototype using lecture code as a starting point.


// Sorting Method
// Research and implement one of the following Sorting Methods:
// TODO: Bubble Sort
// TODO: Insertion Sort
// TODO: Selection Sort
// Your function should take an integer array and a single argument and sort it in -place(e.g.mutate the array).You can use helper functions if you need extra arguments in your sorting procedure.

// Tests
// TODO: Unit test each method of your prototype.
// TODO: Unit test your sorting method.

'use strict';

class MaxHeap {
  constructor() {
    this._data = [];
  }

  _getParentIndex(index) {
    if (index === 0)
      return null;

    return Math.floor((index - 1) / 2);
  }

  _getLeftIndex(index) {
    return (2 * index) + 1;
  }

  _getRightIndex(index) {
    return (2 * index) + 2;
  }

  // lg n
  insert(value) {
    if (typeof value !== 'number')
      throw new TypeError('__ERROR__ value should be numeric for insert()');

    this._data.push(value);
    this._bubbleUp(this._data.length - 1);
  }

  insertMultiple(array) {
    if (typeof array !== 'object') throw new TypeError('__ERROR__ Input must be an array for insertMultiple()');
   
    for(let value in array){
      this._data.push(value);
      this._bubbleUp(this._data.length - 1);
    }
  }

  _swapValues(indexA, indexB) {
    let tempSwapValue = this._data[indexA];

    this._data[indexA] = this._data[indexB];
    this._data[indexB] = tempSwapValue;
  }

  _bubbleUp(index) {
    if (this._getParentIndex(index) === null)
      return;

    let parentIndex = this._getParentIndex(index);

    if (this._data[parentIndex] < this._data[index]) {
      this._swapValues(parentIndex, index);
      this._bubbleUp(parentIndex);
    }
  }

  _bubbleDown(index) {
    let maxIndex = index;
    let leftIndex = this._getLeftIndex(index);
    let rightIndex = this._getRightIndex(index);

    if (leftIndex >= this._data.length - 1) {
      if (this._data[maxIndex] < this._data[leftIndex])
        maxIndex = leftIndex;
    }
    if (rightIndex >= this._data.length - 1) {
      if (this._data[maxIndex] < this._data[rightIndex])
        maxIndex = rightIndex;
    }

    if (maxIndex != index) {
      this._swapValues(index, maxIndex);
      this._bubbleDown(maxIndex);
    }
  }

  extractMax() {
    if (this._data.length <= 0)
      return null;

    let min = this._data[0];
    let lastValue = this._data.pop();
    this._data[0] = lastValue;
    this._bubbleDown(0);
    return min;
  }

  peek() {
    if (this._data.length <= 0)
      return null;

    return this._data[0];
  }
}

module.exports = MaxHeap;