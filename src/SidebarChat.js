import { Avatar } from '@mui/material'
import { collection, addDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import db from './firebase'
import { v4 as uuid } from 'uuid';

export default function SidebarChat({ addnewchat, id, name }) {

    const [seed, set_seed] = useState('')


    async function createchat() {

        const roomName = prompt("please enter a name for a chat")
        if (roomName) {
            // do some clever database stuff
            // const Rooms = collection(db, 'rooms');
            const docRef = await addDoc(collection(db, "rooms"), {
                name: roomName
            });
            console.log("Document written with ID: ", docRef.id);
        }

    }

    useEffect(() => {
        set_seed(Math.floor(Math.random() * 5000))
    }, [])


    return !addnewchat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat' onClick = {()=>{console.log("meow")}} key = {uuid()}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='sidebarChat__info'>
                    <h2>{name}</h2>
                    <p>last message</p>
                </div>
            </div>
        </Link>

    )
        :
        (<div onClick={createchat} className='sidebarChat'>
            <h2>add new chat</h2>
        </div>
        )
}
