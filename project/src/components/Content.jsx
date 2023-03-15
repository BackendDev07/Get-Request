import React, { useEffect, useState } from "react";
import styled from 'styled-components'

function Content() {
    const [isLoading, setIsLoading] = useState(false);
    const [ joke, setJoke ] = useState('')
    const getJoke = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
            setJoke(data.setup + ' ... ' + data.punchline)
        })
    }

    
    return <Contact>
        <ContentTop>
            <h1>Get Reaquest Exemples</h1>
            <button onClick={getJoke}>Click for get random data</button>
            <span>
            <span> {joke} </span>
            </span>
        </ContentTop>
        <a href="https://official-joke-api.appspot.com/random_joke">API</a>
    </Contact>
}

export default Content

const ContentTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 13%;
    
    button{
        cursor: pointer;
        padding: 9px 20px;
        font-size: 15px;
        background-color: black;
        border: 1px solid #000;
        color: #fff;
        border-radius: 5px;
        transition: all 0.5s ease;
        margin-bottom: 20px;
        &:hover{
            transition: all 0.5s ease;
            background-color: #fff;
            color: #000;
        }
    }
    span{
        transition: all 1s ease;
        font-size: 20px;
    }

    h1{
        font-weight: 500;
        margin-bottom: 20px;

        font-family: 'Nunito', sans-serif;
        font-family: 'Tilt Neon', cursive;
    }

`

const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    a{
        margin-top: 20%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #000;
        &:hover{
            transition: all 0.5s ease;
            color: #fff;
            background-color: #000;
        }
    }
`