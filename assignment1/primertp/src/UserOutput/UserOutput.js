import React from 'react';

const userOutput = ({
    usersState
}) => {

    return (
        <div className="userOutput">
            {usersState.map(pepe => (
                <div
                    key={pepe.user + `${Math.random(10)}`}>
                    <p>My Username is: {pepe.user}</p>
                    <p></p>
                </div>
            ))}
        </div>
    )
};

export default userOutput;