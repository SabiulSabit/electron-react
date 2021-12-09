import React from 'react'

const App = () => {
    return (
        <div>
            <h1>
                Hello from APP
            </h1>
            <button onClick={() => { electron.notificationApi.sendNotification("this is the msg") }}>Testing</button>
        </div>

    )
}

export default App

