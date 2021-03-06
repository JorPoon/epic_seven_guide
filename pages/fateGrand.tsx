import fetch from 'isomorphic-unfetch'
// import HeroesDetail from "../components/heroes/HeroesDetail"
import { Container, Grid } from "@material-ui/core";
import NavBar from "../components/nav/NavBar"
import BackToTop from "../components/nav/BackToTop"


const FateGrand = (props) => {

    return (
        <Container >
            <NavBar/>
            <h1>Exos Heroes</h1>
            <Grid container justify="space-evenly" alignItems="center" direction="row" alignContent="space-around">
                {/* {props.results.map(hero => {
                    return (  
                                <HeroesDetail 
                                    attribute={hero.attribute}
                                    name={hero.name}
                                    role={hero.role}
                                    assets={hero.assets.icon}
                                    rarity={hero.rarity}
                                />
                            )
                })} */}
                <BackToTop/>
            </Grid>
        </Container>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch('FGO API")
// Url: https://api.atlasacademy.io/redoc
// need to figure out how to access the api
//     const list = await res.json() 

//     return {
//         props: list
//     }
// }



export default FateGrand
