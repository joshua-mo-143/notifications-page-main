import React from 'react'

type Props = {
    name?: string;
    imgsrc?: string;
    action?: string;
    link?: string;
    time?: string;
    unread?: boolean;
}

const Notification = ({name, imgsrc, action, link, time, unread}: Props) => {

  return (
    <div className={`notif-container ${unread ? "unread" : ""}`}>
        <img src={imgsrc} className="user-avatar" alt={`Avatar for ${name}`}/>
        <div className='notif-text'>
            <div className="notif-activity">
            <p className=""><span>{name}</span> <span>{action}</span> <span>{link}</span></p>
            </div>
            <p className='time-marker'>{time} ago</p>
        </div>
    </div>
  )
}

export default Notification