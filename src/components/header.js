const Header = (title, date, temp) => {
  
  const head1 = document.createElement('div')
  const span = document.createElement('span')
  span.textContent = date.span
  const title1 = document.createElement('h1')
  title1.textContent = title.title1
  const span2 = document.createElement('span')
  span2.textContent = temp.span2


  head1.classList.add('header')
  span.classList('date')
  span2.classList('temp')
  
  return head1;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  console.log(Header)
}


const headerAppender = (selector) => {
  Header.append(title1)
  span.appendChild(span)
  span.appendChild(span2)
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}
console.log(headerAppender)
export { Header, headerAppender}
