import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { collection, getDocs, doc, getDoc, addDoc, serverTimestamp, orderBy, query} from 'firebase/firestore'
import db from './firebase'
import { useStateValue } from './Stateprovider'
import { v4 as uuid } from 'uuid';

export default function Chat() {

    const [seed, set_seed] = useState("")

    const [triggerstate , set_triggerstate] = useState()

    const [{user} ]  = useStateValue()

    const [roomName, setroomName] = useState("")

    const [input, set_input] = useState("")

    const [messages, set_messages] = useState([])

    let {roomsId} = useParams()    

    // console.log("user is : ",user)

    async function sendmessage(e) {
        e.preventDefault();
        console.log("you typed ", input)

        const chatRef = await addDoc(collection(db, `/rooms/${roomsId}/messages`), {
            message:e.target.value,
            name: user.displayName,
            timestamp: serverTimestamp()
        });
        chatRef()
        set_input("")
        set_triggerstate((prev)=>(prev+1))
    }

    useEffect(() => {
        // if (roomsId) {
            const unsub = async () => {
                const roomRef = doc(db, "rooms", roomsId)
                const roomSnap = await getDoc(roomRef)
                setroomName(roomSnap.data().name)


                
                // this code below gives the id of the message we want to access
                // this is to access a collection
                
                const DataCollectionref = query(collection(db, `/rooms/${roomsId}/messages`) , orderBy("timestamp"))
                const data_got = await getDocs(DataCollectionref)
                console.log(data_got.docs)
                const imp_data = data_got.docs
                
                set_messages(imp_data.map(something =>
                    something.data()
                ))



                // const messages_id = data_got.docs[0].id
                // code to access the things inside message
                // this is to access a document
                // const docRef = doc(db, "rooms", roomsId, "messages", messages_id)
                // const docSnap = await getDoc(docRef)
                // console.log(docSnap.data())
                      
            // }

    }
    unsub()
      return () => {
        unsub()
      }
    }, [roomsId,triggerstate])

    useEffect(() => {
        set_seed(Math.floor(Math.random() * 5000))
    }, [roomsId])

    return (
        <div className='chat'>
            <div className='chat__header'>
                <IconButton>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                </IconButton>

                <div className='chat__headerinfo'>
                    <h3>{roomName}</h3>
                    <p>last seen at ...</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                {messages.map((message)=>(
                    <p className={`chat__message ${(message.name === user.displayName) && "chat__reciever"} `} key = {uuid()} >
                        <span className='chat__name'>
                            {message.name}
                        </span>
                        {message.message}
                        <span className='chat__timestamp'>
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
                
            </div>
            <div className='chat__footer'>
                <InsertEmoticon />
                <form>
                    <input type="text" value={input} onChange={e => { set_input(e.target.value) }} />
                    <button type="submit" onClick={sendmessage}>send message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}
