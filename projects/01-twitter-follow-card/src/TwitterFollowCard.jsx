import { useState } from 'react' 
import './index.css'
export function TwitterFollowCard( {children, userName, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de midudev" src= {`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong> {children} </strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-buttonText'>{buttonText}</span>
                    <span className='tw-followCard-unfollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}