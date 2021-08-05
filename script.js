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
