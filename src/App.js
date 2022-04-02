import styled from 'styled-components';

import Avatar from './components/Avatar/Avatar'
import Name from './components/Name/Name'
import Message from './components/Message/Message'
import Data from './components/Data/Data'

const Dialog = styled.div`
  display: flex;
  padding: 9px;
  max-width: 400px;
  border-radius: 12px;
  transition: background .1s ease-in-out;
  &:hover{
    background: rgba(112,117,121,0.1);
    cursor: pointer;
    transition: background .1s ease-in-out;
  }
`

//Имитация полученния данных 
const users = [
  {
    name: 'Pavel Durov',
    message: 'Telegram is a freeware, cross-platform, cloud-based instant messaging service.',
    date: '01.01.2022',
    avatarUrl: 'Pavel.jpeg',
    online: true,
    key: 1
  },
  {
    name: 'Mark Zuckerberg',
    message: 'Facebook is the largest social network in the world',
    date: '01.01.2022',
    avatarUrl: 'Mark.jpeg',
    online: false,
    key: 2
  },
  {
    name: 'Elon Musk',
    message: 'Check my new Tesla 🏎️;',
    date: '01.01.2022',
    avatarUrl: 'Elon.jpeg',
    online: true,
    key: 3
  }
]

function App() {
  return (
    <>
      {users.map(item=>{
        return(
          <Dialog key={item.key}>
            <Avatar userPhoto={item.avatarUrl} online={item.online} alternativeText={item.name} />
              <div>
                <Name userName={item.name} />
                <Message userLastMessage = {item.message} />
              </div>
            <Data dateLastMessage = {item.date}/>
          </Dialog>
        );
      })}
    </>
  );
}

export default App;
