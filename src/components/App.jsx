import user from '../data/user.json';
import { Profile } from './profile/Profile';

console.log("🚀 ~ Profile:", Profile);
console.log("🚀 ~ user:", user);

export const App = () => {
  return (<>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>

  </>);
};
