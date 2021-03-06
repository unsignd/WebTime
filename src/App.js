import { useEffect, useState } from 'react'

import styled, { createGlobalStyle } from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    padding: 25px 0;
    font-family: 'Y_Spotlight', sans-serif;
    text-align: center;
`

const Title = styled.h1`
    font-size: calc(2.75rem + 1.75vw);
    margin: 1rem 0;
`

const NowDate = styled.p`
    font-size: calc(1.25rem + 1vw);
    margin: .5rem 0;
`

const NowTime = styled(NowDate)`
    font-size: calc(3rem + 1vw);
`

const Line = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 12px;
    background-color: #000;
    border-radius: 10px;
`

const Style = createGlobalStyle`
    @font-face {
        font-family: 'Y_Spotlight';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/Y_Spotlight.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

const App = () => {
    const [dateString, setDateString] = useState(null)
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        setInterval(() => {
            const date = new Date()

            setDateString(date.toLocaleDateString())
            setTimeString(date.toLocaleTimeString(undefined, {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }))
        }, 1000)
    }, [])

    return (
        <Container>
            <Style />
            <div>
                <Title>Web Time</Title>
                <Line />
            </div>
            <div>
                <NowDate>{dateString ?? 'Calculating...'}</NowDate>
                <NowTime>{timeString}</NowTime>
            </div>
            <div>
                <p>Copyright {new Date().getFullYear()} ERRrOR, All rights reserved.</p>
            </div>
        </Container>
    )
}

export default App
