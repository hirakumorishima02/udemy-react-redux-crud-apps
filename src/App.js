import React from 'react';

const App = () => {
  const details = [
    {name: "Meow", age: 10},
    {name: "Hanada", age: 20},
    {}
  ]
  return (
    <div>
      {
        details.map((detail, index) => {
          return <Cat name={detail.name} age={detail.age} key={index}/>
        })
      }
    </div>
  )
}

const Cat = (props) => {
  return <div>My name is {props.name}.My age is {props.age}</div>
}

Cat.defaultProps = {
  name: "Nanashi",
  age: 0
}

export default App;
