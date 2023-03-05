import friendCSS from './FriendList.module.css'
function FriendListItem({ avatar, name, isOnline, id }) {
    return <li className="item" >
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li >
}

export const FriendList = ({ friends }) => {
    return <ul className={friendCSS.friendList}>
        {friends.map(fre =>
            <FriendListItem avatar={fre.avatar} name={fre.name} isOnline={fre.isOnline} key={fre.id} />
        )}
    </ul >
}
