

const Character = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}


export async function getStaticPaths() {

  const res = await fetch('https://api.epicsevendb.com/hero')
  const lists = await res.json() 

  const paths = lists.results.map(list => ({
    params: {id: list["_id"]},
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const res = await fetch(`https://api.epicsevendb.com/hero/${params.id}`)
  const characterData = await res.json()

  return {
    props: {
      characterData
    }
  }
}

export default Character

