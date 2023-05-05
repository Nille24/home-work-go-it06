
// const categoriesList = document.getElementById("categories");

// const newArray = categoriesList.children;

// console.log(`Number of categories: ${newArray.length}`)

// const subCatList = categoriesList.querySelectorAll(".item");

// subCatList.forEach( item =>
//  {
//      const elementName = item.querySelector('h2').textContent;
//      const elementsCount = item.querySelectorAll("li").length;
//      console.log(`Category: ${elementName}`);
//      console.log(`Elements: ${elementsCount}`);
//  });

 const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

console.log(items);

items.forEach(item => 
    {
console.log(`Category: ${item.firstElementChild.textContent}`);

console.log(`Elements: ${item.lastElementChild.children.length}`);
});