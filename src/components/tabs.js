const data = ['javascript', 'bootstrap', 'technology']
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topic = document.createElement('div')
  topic.classList.add('topics')
  const div = document.createElement('div')
  div.classList.add('tab')
  div.textContent = topics.data[0]
  const tab = document.createElement('div')
  tab.classList.add('tab')
  tab.textContent = topics.data[1]
const tab1 = document.createElement('div')
tab1.classList.add('tab')
tab1.textContent = topics.data[2]
topic.appendChild(div)
topic.appendChild(tab)
topic.appendChild(tab1)
}

import axios from 'axios'
const tabsAppender = (selector) => {
  
  console.log('I about to fetch data with axios')
  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
  
  .then(futureData => {

    console.log('1 here is the future data', futureData)
    console.log('here is the Responde BODY', futureData)
  })

  .cacth(drama => {
    console.log(drama)
  })
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  // console.log(result)
}
console.log('3 here data')
export { Tabs, tabsAppender }
