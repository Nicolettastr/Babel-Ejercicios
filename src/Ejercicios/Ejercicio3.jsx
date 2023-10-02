import React from 'react'

const Ejercicio3 = () => {

    const simpleArray = [ 
        "Rick", "Morty", "Jerry", "Beth", "Summer", "Mr. Meeseeks", "Birdperson", "Squanchy", 
        "Tammy", "Unity", "Evil Morty", "Phoenixperson", "Noob Noob", "Abradolf Lincler", 
        "Pickle Rick", "Scary Terry", "Mr. Poopybutthole", "Snowball", "Mr. Goldenfold", "Jessica"
      ];
      
      const objectArray = [
        {
          firstName: "Erica",
          lastName: "Davenhill",
          age: 62,
          gender: "Female",
          city: "Le Bourget-du-Lac",
        },
        {
          firstName: "Alissa",
          lastName: "Shakshaft",
          age: 94,
          gender: "Female",
          city: "Tangzhuang",
        },
        {
          firstName: "Viva",
          lastName: "Bishopp",
          age: 2,
          gender: "Female",
          city: "Abengourou",
        },
        {
          firstName: "August",
          lastName: "Bend",
          age: 40,
          gender: "Male",
          city: "Natarleba",
        },
        {
          firstName: "Bartholomeo",
          lastName: "Cosens",
          age: 29,
          gender: "Male",
          city: "Madrid",
        },
        {
          firstName: "Luci",
          lastName: "Dudenie",
          age: 51,
          gender: "Female",
          city: "Mayisyan",
        },
        {
          firstName: "Cris",
          lastName: "Diver",
          age: 58,
          gender: "Male",
          city: "Jinhe",
        },
        {
          firstName: "Rawley",
          lastName: "Trappe",
          age: 34,
          gender: "Male",
          city: "Madrid",
        },
        {
          firstName: "Lavena",
          lastName: "Devall",
          age: 16,
          gender: "Female",
          city: "Dolní Sloupnice",
        }
      ];

      const toUpperCase = (array) => {
        return array.map((element) => <li key={element}>{element.toUpperCase()}</li>)
      }

      // # Transformando la lista de objetos en una lista de objetos que tenga esta estructura:

        // {

        //   fullName: firstName + lastName,

        //   description: firstName is age years old and lives in city. Pronoun: [he/she],

        // }


        function newList(array) {
            return array.map((element) => (
                {
                    fullName: element.firstName + element.lastName,
                    description: `${element.firstName} is ${element.age} years old and lives in city. Pronoun: ${element.gender === 'Female' ? 'she' : 'he'} ` 
                }
            ))
        }

        console.log(newList(objectArray))

        function sortList(array) {
            return array.sort()
        }

        // # Encontrando el índice de la persona que viva en Madrid en la lista de objetos.

        function viveMadrid() {
            return objectArray.findIndex((element) => element.city === 'Barcelona')
        }

        const listName = (array) => {
          return array.map((item) => <li key={item}>{`${item}ss`}</li>)
        }
  
        function renderComplexList() {
          return objectArray.map((element) => (
              <li className='listCity' key={element.lastName}>
                  <p>{`${element.firstName} ${element.lastName} is from ${element.city}`}</p>
              </li>
          ))
        }

    return (
      <>
       <div className='d-flex-row listContainer'>
          <div>
              <h2>First List</h2>
              {toUpperCase(simpleArray)}
          </div>
          <div>
              <h2>Simple List</h2>
              {listName(simpleArray)}
          </div>
          <div>
              <h2>complex List</h2>
              {renderComplexList()}
          </div>
       </div>
      </>
  )
}

export default Ejercicio3

