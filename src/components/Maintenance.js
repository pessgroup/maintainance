import React from 'react'
import './style.css'
import support from './assets/support-maintenance.png'

function Maintenance() {
    return (
        <div>
            <article>
                <img src={support} />
                <h1>We&rsquo;ll be back soon!</h1>
                <div>
                    <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:#">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
                    <p>&mdash; The Team</p>
                </div>
            </article>
        </div>
    )
}

export default Maintenance
