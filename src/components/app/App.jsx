import user from '../../data/user.json';
import data from '../../data/data.json';
import fri from '../../data/friends.json';
import transaction from '../../data/transactions.json';
import { Profile } from '../profile/Profile';
import { Statistics } from '../statistics/Statistics';
import { FriendList } from '../friendList/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';

export const App = () => {
    return <>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics
            title="Upload stats"
            stats={data}
        />
        <FriendList
            friends={fri}
        />
        <TransactionHistory items={transaction} />
    </>
}