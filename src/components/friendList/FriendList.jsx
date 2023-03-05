
function FriendListItem({ avatar, name, isOnline, id }) {
    return <li key={id} className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li >
}

export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => {
            return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
        })}
    </ul >
}


