import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return(
        <section className='App'>
            <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb">
                Pablo Hernández
            </TwitterFollowCard>

            <TwitterFollowCard userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>
        </section>
    )
}