import friendCSS from './FriendList.module.css';
// import PropTypes from 'prop-types';
function FriendListItem({ avatar, name, isOnline }) {
    return <li className={friendCSS.item} >
        <span className={
            isOnline ? friendCSS.statusGreen : friendCSS.statusRed}>{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={friendCSS.name}>{name}</p>
    </li >
}

export const FriendList = ({ friends }) => {
    return <ul className={friendCSS.friendList}>
        {friends.map(fre =>
            <FriendListItem avatar={fre.avatar} name={fre.name} isOnline={fre.isOnline} key={fre.id} />
        )}
    </ul >
}

// FriendListItem.propTypes = {
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     isOnline: PropTypes.bool
// }
// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(PropTypes.object)
// }