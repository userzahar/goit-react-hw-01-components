import user from '../data/user.json';
import data from '../data/data.json'
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';

console.log("🚀 ~ Profile:", Profile);
console.log("🚀 ~ user:", user);

export const App = () => {
  return (<>
    <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
    <Statistics title="Upload stats" stats={data} />
  </>);
};