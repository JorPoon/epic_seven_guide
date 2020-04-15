import fetch from 'isomorphic-unfetch'



const Hero = (props) => {
    console.log(props.results)
    return (
        <div>
            Heroes of Epic Seven
            {props.results.map(hero => {
                return <h2>{hero.name}</h2>
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.epicsevendb.com/hero')
    const list = await res.json() 
    console.log(list)

    return {
        props: list
    }
}

export default Hero