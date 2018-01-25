//naive implementation
const mergsSort = items => {
  let output = []; //not ideal here...

  if( items.length < 2) return items;

  if(items.length === 2)
    return items[0] < items[1] ? items : items.reverse();

  let middle = Math.floor(items.length / 2);
  
  let leftSide = mergeSort(items.slice(0, middle));
  let rightSide = mergeSort(items.slice(middle));

  while(leftSide.length || rightSide.length){
    //if only elements on left side 
    if(leftSide.leftSide && !rightSide.length){
      output.push(...leftSide);
      break;  
    }

    //if only elements on right side
    if(!leftSide.leftSide && rightSide.length) {
      output.push(...rightSide);
      break;  
    }

    //elements on both sides
    if(){
      
    }
  }
}