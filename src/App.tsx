import React, { useEffect, useState } from 'react'
import Notification from './components/Notification'
import NotificationList from './components/NotificationList'

function App() {

  return (
    <div className="page-wrapper">
      <NotificationList>
        <Notification name="Mark Webber" action="reacted to your post" link="My first tournament today!" imgsrc="/avatar-mark-webber.webp" time="1m" unread={true}/>
        <Notification name="Angela Gray" action="followed you" imgsrc="/avatar-angela-gray.webp" time="5m" unread={true}/>
        <Notification name="Jacob Thompson" action="has joined your group" link="Chess Club" imgsrc="/avatar-jacob-thompson.webp" time="1 day" unread={true}/>
        <Notification name="Rizky Hasanuddin" action="has sent you a private message." link="Click here to see more" imgsrc="/avatar-rizky-hasanuddin.webp" time="5 days"/>
        <Notification name="Kimberly Smith" action="commented on your picture." imgsrc="/avatar-kimberly-smith.webp" time="1 week"/>
        <Notification name="Nathan Peterson" action="reacted to your recent post" link="5 end-game strategies to increase your win rate" imgsrc="/avatar-nathan-peterson.webp" time="2 weeks"/>
        <Notification name="Anna Kim" action="left the group" link="Chess Club" imgsrc="/avatar-anna-kim.webp" time="2 weeks"/>
      </NotificationList>
    </div>
  )
}

export default App
