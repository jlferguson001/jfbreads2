const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, title}) {
    return (
        <Default title={title}>
            <h2>Index Page for Breads</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <ul>
                {
                    breads.map((bread, index) =>{
                        //key = {index} assisted in removing the each child unique "key" warning.  {bread.name}pulls in the name to the list
                        return(<li key = {index}>
                           {/* <a href={}></a> first bread will link to /breds/o */}
                            <a href={`/breads/${index}`}>
                            {bread.name}
                            </a>
                        </li>)
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index