import React from "react"


export default function Header() {
    return (
        <header className="header">
            <img
                alt="troll"
                src={require('./images/troll-face.png')}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Learning - Michael Monteiro</h4>
        </header>
    )
}