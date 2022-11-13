import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { DonutLarge, SearchOutlined } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarChat from './SidebarChat';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';
import { useStateValue } from './Stateprovider';




export default function Sidebar() {

  const [rooms, set_rooms] = useState([])

  const [{user} ,]  = useStateValue()

  useEffect(() => { 
    async function getRooms() {
      const Rooms = collection(db, 'rooms');
      const roomSnapshot = await getDocs(Rooms);
      set_rooms(roomSnapshot.docs.map(doc => (
        {
          id : doc.id,
          data: doc.data()
        }
      ))
      ) 
    }
    return () => {
      getRooms()
    }
  }, [])

  function createChat(){

  }


  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar className='sidebar__avatar'  src = {user?.photoURL} alt = {"no img found"}/>
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input placeholder='search or start new chat' type="text" />
        </div>


      </div>
      <div className='sidebar__chats'>
        <SidebarChat addnewchat onClick = {createChat}/>
        {console.log("this is the new production")}
        {rooms.map((room)=>{
          console.log("room data is ",room.data)
          return(
            <SidebarChat  key = {room.id} id = {room.id} name = {room.data.name}/>
          )
        })}
      </div>
    </div>
  )
}
