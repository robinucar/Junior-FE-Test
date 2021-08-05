//LEVEL1 TEST

//question one
const testArray = [
  {
    name: 'John',
    id: 1,
  },
  {
    name: 'Mary',
    id: 2,
  },
  {
    name: 'Terry',
    id: 3,
  },
].map((e) => e.id);

console.log(testArray);

//in the console we will see the ids of elements.
/**
 * 0: 1
 * 1: 2
 * 2: 3
 */

//question2
const numberChecker = (num) => {
  //if statement (first way)
  /*if (num < 10) {
    return false;
  } else {
    return true;
  }*/

  //ternary operator (second and short way -ecmascript6)
  return num < 10 ? false : true;
};
console.log(numberChecker(10));

//question3;
class TestComponent extends Component {
    render() {
      return (
        
      );
    }
  }
  
  export default TestComponent;

//&

const TestComponent = () => (
  
    );
    
    export default TestComponent;

/**
 * First component is class base component. Second component is functional component. Before React hooks
 * we were using functional components for only stateless components. If a component has state we were using class base components
 * however since hooks was introduced by react we were using functional components for either stateless or stateful components
 *
 */



//question4



//get request with react. firstly i installed axios.
// Axios is promise-based, which gives you the ability to take advantage of JavaScript’s async and await for more readable asynchronous code.
//then I created state object which has persons empty array.
//and then inside componentDidMount lifecycle method i send get request to api. 
//then i created a persons variable and equalize to response data. 
// then i pushed persons inside the state.
//in the end i used data inside jsx.


//important:  in the functional components we use useEffect hooks instead of componentDidMount. And Also we use useState Hooks to define our states. 

///classbase component
import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}



//question 5

//A JavaScript Promise object contains both the producing code and calls to the consuming code

//common promise syntax: 
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

    /**Promises are the ideal choice for handling asynchronous operations in the simplest manner. 
     * They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events. 
     * 
     * Benefits of Promises
            Improves Code Readability
            Better handling of asynchronous operations
            Better flow of control definition in asynchronous logic
            Better Error Handling
*/