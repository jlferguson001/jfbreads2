const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    // console.log(bread.name)
    return (
        <Default>
            <h2>Show Bread Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                    bread.hasGluten
                    ?<span> does </span>
                    :<span> does NOT</span>
                }
                have gluten.
            </p>

            <form action={`/breads/${index}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
            </form>

            <img src={bread.image} alt={bread.name}/>
            <li><a href='/breads'>Go Home Now</a></li>
           
           <a href={`/breads/${index}/edit`}><button>Edit</button></a>


        </Default>
    )
}

module.exports = Show
