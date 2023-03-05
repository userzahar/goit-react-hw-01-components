
function FriendListItem({ avatar, name, isOnline, id }) {
    return <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li >
}

export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
        {friends.map(fre => {
            return <FriendListItem avatar={fre.avatar} name={fre.name} isOnline={fre.isOnline} id={fre.id} />;
        })}
    </ul >
}
