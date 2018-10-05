import React from 'react';


const MemoryCard = props => (
    <div className="card">
        <div className="img-container" onClick={() => props.markFriend(props.id)} className="friend">>
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

export default MemoryCard;