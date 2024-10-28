import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

// Lo normal será que esto sea lo que nos devuelva el fetch, un array de objetos con los datos que queremos renderizar:
const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Heredia',
        isFollowing: false
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    }
]

export function App(){
    return(
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            )
            }
        </section>
    )
}