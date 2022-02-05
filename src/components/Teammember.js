/* eslint-disable no-unused-vars */
import React from 'react';
import Member from './members/Member';

function Teammember() {

    const info = [
        {id: 1, img : 'images\\img_avatar-01.png', name : 'Hesham', title : 'Front-end', mail : 'hesham@gmail.com', phone : '01119554463'},
        {id: 2, img : 'images\\img_avatar-01.png', name : 'Abeer', title : 'Teacher', mail : 'abeer@gmail.com'},
        {id: 3, img : 'images\\img_avatar-01.png', name : 'Aseel', title : 'Baby', mail : 'aseel@gmail.com'},
        {id: 4, img : 'images\\img_avatar-01.png', name : 'Haytham', title : 'Engineer', mail : 'haytham@gmail.com'},
    ]

    const member = info.map((person) => {
        return <Member
        key = {person.id} 
        img = {person.img}
        name = {person.name}
        title = {person.title}
        mail = {person.mail}
        phone = {person.phone}
        />
    });

  return (
      <div className='container'>
            <div className='navbar bg-dark text-white shadow-lg p-3 mb-5'>
                <h1 style={{margin: '1px auto'}}>Our Member</h1>
            </div>
            <div className='row'>
                {member}
            </div>
      </div>
  )
}

export default Teammember;
