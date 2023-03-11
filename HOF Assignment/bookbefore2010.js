const books = [
    { title: "Book 1", author: "author 1", year: 2009 },
    { title: "Book 2", author: "author 2", year: 2011 },
    { title: "Book 3", author: "author 3", year: 2014 },
    { title: "Book 4", author: "author 4", year: 2008 },
  ];
  
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => {
    return {
      title: book.title,
      author: book.author.toUpperCase(),
    };
  });
  
  console.log(filteredBooks);
  