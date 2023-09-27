import React from 'react'
import Logo from './Logo';
import Title from './Title';
import Subtitle from './Subtitle';
import '../styles/card.css'

const Card = () => {

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

      const eachCard = () => {
        return objectArray.map((item) => {
            return (
                <div className='cardContainer' key={item}>
                    <Logo className={'cardImage'}/>
                    <div>
                        <Title className={'cardTitle'} title={`${item.firstName} ${item.lastName}`}/>
                        <Subtitle className={'cardSubtitle'} subtitle={`${item.gender === 'Female' ? 'She' : 'He'} is ${item.age} years old    and lives in ${item.city}`}/>
                    </div>
                </div>
            )
        })
      }

  return (
    <>
      {eachCard()}
    </>
  )
}

export default Card
