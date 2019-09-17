import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const details = [
    {name: 10, age: "ageage"},
    {name: "Tarou"},
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

Cat.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
