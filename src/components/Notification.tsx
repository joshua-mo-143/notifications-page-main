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
    <article className={`notif-container ${unread ? "unread" : ""}`}>
        <img src={imgsrc} className="user-avatar" alt={`Avatar for ${name}`}/>
        <div className='notif-text'>
            <div className="notif-activity">
            <p className="notif-details"><span className='notif-name'>{name}</span> <span className='notif-action'>{action}</span> <span className='notif-link'>{link}</span></p>
            </div>
            <p className='time-marker'>{time} ago</p>
        </div>
    </article>
  )
}

export default Notification