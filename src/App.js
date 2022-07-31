import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import CardSkeleton from './CardSkeleton'

function App() {
    const [userList, setUserList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole').then((res) => {
                setUserList(res.data)
                setIsLoading(false)
            })
        }, 2000)
    }, [])

    console.log(userList)

    return (
        <div className="App">
            {isLoading ? (
                <div>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            ) : (
                userList.map((user) => (
                    <div className="card">
                        <img src={'https://joeschmoe.io/api/v1/' + user.first} alt="user" />
                        <h1>
                            {user.first} {user.last}
                        </h1>
                        <h2>{user.email}</h2>
                        <h3>{user.address}</h3>
                    </div>
                ))
            )}
        </div>
    )
}

export default App
