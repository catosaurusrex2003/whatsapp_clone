import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton , } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, onSnapshot , doc } from 'firebase/firestore'
import db from './firebase'

export default function Chat() {

    const [ seed , set_seed] = useState("")
    
    const [roomName, setroomName] = useState("")

    const [input , set_input] = useState("")

    const { roomId } = useParams()

    console.log(roomId)

    function sendmessage(e){
        e.preventDefault();
        console.log("you typed ",input)
        set_input("")
    }

    useEffect(() => {
    
      if(roomId){
        db.collection("rooms").doc(roomId).onSnapshot(snapshot => {
            setroomName(snapshot.data().name)
            console.log(snapshot.data().name)
      })
      }
    
      
    }, [roomId])
    

    useEffect(()=>{
        set_seed(Math.floor(Math.random()*5000))
    },[])

    return (
        <div className='chat'>
            <div className='chat__header'>
                <IconButton>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                </IconButton>
                
                <div className='chat__headerinfo'>
                    <h3>{roomName}</h3>
                    <p>last seen at ... </p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
            <p className={`chat__message ${false && "chat__reciever"} `}>
                    <span className='chat__name'>
                        Mohammed
                    </span>
                    Hey guys
                    <span className='chat__timestamp'>
                        4:20am
                    </span>
                </p>
                <p className={`chat__message ${true && "chat__reciever"} `}>
                    <span className='chat__name'>
                        mehdi
                    </span>
                    hello
                    <span className='chat__timestamp'>
                        3:00am
                    </span>
                </p>
            </div>
            <div className='chat__footer'>
                <InsertEmoticon/>
                <form>
                    <input type = "text" value = {input} onChange = {e => {set_input(e.target.value)}}/>
                    <button type = "submit" onClick = {sendmessage}>send message</button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}
