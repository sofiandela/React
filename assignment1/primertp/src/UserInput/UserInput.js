import React from 'react';

const userInput = ({
    initialInputState,
    setInitialInputState,
    setUsersState,
    usersState
}) => {

    //method, el preventDefault es para que no se ejecute de una.
    const getUser = e => {
        e.preventDefault();
        setInitialInputState({
            ...initialInputState,
            [e.target.name]: e.target.value
        })
    }

    //method para acualizar el estado. Es como un  "push". Lo que pepe ponga, se pone donde esta pepe
    const putUsers = (pepe) => {
        setUsersState([
            ...usersState,
            pepe
        ])
    }

    return (
        <div className="userInput">
            <p>Please type in your desired username: </p>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    putUsers(initialInputState)
                }}
            >
                <input
                    type="text"
                    placeholder="Type Something"
                    name="user"
                    onBlur={getUser}
                />
                <input type='submit' value="Add" />
            </form>
        </div>
    )
};

export default userInput;