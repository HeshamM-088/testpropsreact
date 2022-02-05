import React from 'react';

function Member(props) {
  return (
      <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
          <div className='card' style={{marginBottom: '20px'}}>
              <div className='card-header bg-dark'>
                <img src={props.img} alt='avatar' style={{maxWidth: '100%', borderRadius: '50%'}}/>
              </div>
              <div className='card-body' style={{height: '200px', backgroundColor: props.name === 'Hesham' ? 'darkGray' : '#777', textAlign: 'center', fontWeight: 'bold'}}>
                <h2 className='text-light'>{props.name}</h2>
                <h3 className='text-dark'>{props.title}</h3>
                <p className='text-info'>{props.phone}</p>
                <p className='text-info'>{props.mail}</p>
              </div>
          </div>
      </div>
  )
}

export default Member;
