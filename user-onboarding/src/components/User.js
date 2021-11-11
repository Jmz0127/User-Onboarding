import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>{details.firstName}</h2>
      <h2>{details.lastName}</h2>
      <p>Password: {details.password}</p>

      {
        !!details.checked && !!details.checked.length &&
        <div>
          Agree:
          <ul>
            {details.checked.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default User