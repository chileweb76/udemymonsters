import React from 'react';
import Card from '../card/card'

const CardList = ({ monsters }) => {
    return (
        <div className='card-list'>
            {monsters.map((user) => {
           
            return (
                <Card key={user.id} monster={user} />
            )})}
        </div>
    )
}
export default CardList;