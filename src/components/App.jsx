import user from '../data/user.json';
import data from '../data/data.json'
import transactions from '../data/transactions.json';
// import friends from '../data/friends.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
// import { FriendList } from './friendList/FriendList'

export const App = () => {
  return (<>
    <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
    <Statistics title="Upload stats" stats={data} />
    <TransactionHistory items={transactions} />
    {/* <FriendList friends={friends} /> */}
  </>);
};