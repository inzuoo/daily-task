import React from 'react'

const Comp = () => {

  const insaf = [
    { name: "adhilr", age: "Twenty two", class: "oth class" },
    { name: "qwe", age: "Twenty wer", class: "1st class" },
    { name: "vx", age: "Twenty gfd", class: "2nd Class" },
    { name: "fd", age: "Twenty fd", class: "3th Class" },
    { name: "fc", age: "Twenty fd", class: "4th Class" },
    { name: "f", age: "Twenty gf", class: "5th Class" },
    { name: "f", age: "Twenty f", class: "6th Class" },
  ]


  const zerothPosition = insaf[0];
  const FirstPositioin = insaf[1];
  const SecondthPosition = insaf[2];
  const ThirdPostion = insaf[3];
  const FourththPosition = insaf[4];
  const FifththPosition = insaf[5];
  const SeventhPosition = insaf[6];

  return (
    <div>

      <h1>{zerothPosition.name}</h1>
      <h1>{SeventhPosition.class}</h1>
      <div>
        <h2> {SecondthPosition.age} </h2>
        <h2> {ThirdPostion.class} </h2>
        <h2> {SecondthPosition.age} </h2>
      </div>
    </div>
  )
}

