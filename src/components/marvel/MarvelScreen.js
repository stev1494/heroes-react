import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>MarvelScreen</h1>
            <hr></hr>
            <HeroList publisher={'Marvel Comics'}/>

        </div>
    )
}
