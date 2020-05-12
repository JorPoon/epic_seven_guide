import fetch from 'isomorphic-unfetch'
import HeroesDetail from "../components/HeroesDetail"



const Hero = (props) => {
    console.log(props.results)
    return (
        <div>
            Heroes of Epic Seven
            {props.results.map(hero => {
                return <HeroesDetail 
                        attribute={hero.attribute}
                        name={hero.name}
                        role={hero.role}
                        />
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.epicsevendb.com/hero')
    const list = await res.json() 

    return {
        props: list
    }
}

export default Hero