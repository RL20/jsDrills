let book1={
  name:'Bible',
  author:'God',
  year:-3000,
}
let book3={
  name:'Bible',
  author:'God',
  year:-3000,
}
let book2={
  name:'The Boring ,tedious exercise ',
  author:'Bela',
  year:2020,
}
let bookUtils={
  getFirstPublished:function(b1,b2){return b1.year>b2.year?b2:b1},
  setNewEdition:function(book,edition){book.latestEdition=edition},
  setLanguage:function(book,language){book.language=language},
  setTranslation:function(book,language,translator){book.translation={translator:translator,language:language}},
  setPublisher:function(book,name,location,){book.publisher={name,location}},
  isSamePublisher:function isEqual(b1, b2) { return b1.publisher.name === b2.publisher.name &&  b1.publisher.location === b2.publisher.location;}
};
console.log(bookUtils.getFirstPublished(book1,book2));

console.log(bookUtils.setNewEdition(book1,-2500));
console.log(bookUtils.setNewEdition(book2,2021));

console.log(bookUtils.setLanguage(book1,'Hebrew'));
console.log(bookUtils.setLanguage(book2,'English'));
console.log(bookUtils.setLanguage(book3,'Hebrew'));

console.log(bookUtils.setTranslation(book1,));
console.log(bookUtils.setPublisher());
console.log(bookUtils.isSamePublisher());