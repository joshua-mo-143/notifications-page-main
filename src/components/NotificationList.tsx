import React, {useEffect} from 'react'

type Props = {
    children: React.ReactNode;
}

const NotificationList = ({children}: Props) => {

    const handleRead = () => {
        const mem = document.querySelectorAll('.notif-container');
        for (let i = 0; i < Array.from(mem).length; i++) {
            if (mem[i].classList.contains('unread')) {
                mem[i].classList.remove('unread');
            }
        }
        setNotifCount(0);
    }

    const [notifCount, setNotifCount] = React.useState<number>();
    let meme = Array.from(document.querySelectorAll('.unread'));

    useEffect(() => {
     setNotifCount(meme.length);
    }, [meme.length])
    
  return (
    <div className='notif-list'>
        <div className='notif-header'>
            <h1 className='notif-title'>Notifications<span>{notifCount}</span></h1>
            <button onClick={handleRead} className="mark-all-read-btn">Mark all as read</button>
        </div>
        {children}
    </div>
  )
}

export default NotificationList