
let book1={
  author:'God',
  year:-3000,
  title:'Bible',
  binding:'Soft',
  picture:false
}
function book(obj){
  return `The book ${obj.title} was written by ${ obj.author } in the year ${obj.year} it has ${obj.binding} cover and have ${obj.picture?'picture':'no pictur'}`;

}
console.log(book(book1));