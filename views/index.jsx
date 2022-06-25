const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, bakers, title}) {
    return (
        <Default title={title}>
            <h2>Index Page for Breads</h2>
            <h3>Bakers</h3>
            <ul>
                {
                    bakers.map((baker) =>{
                        return (
                            <li key={baker.id}>
                                <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            {/* <p>I have {breads[0].name} bread!</p> */}
             
           <h3>Breads</h3>
            <ul>
                {
                    breads.map((bread, index) =>{
                        //key = {index} assisted in removing the each child unique "key" warning.  {bread.name}pulls in the name to the list
                        return(<li key = {index}>
                           {/* <a href={}></a> first bread will link to /breds/o */}
                           <a href={`/breads/${bread.id}`}>
                                {bread.name}
                            </a>

                        </li>)
                    })
                }
            </ul>
            <div className='newButton'>
                <a href='/breads/new'><button>Add Bread</button></a>
            </div>
        </Default>
    )
}

module.exports = Index