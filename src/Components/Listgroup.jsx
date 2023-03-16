import React from 'react'

function Listgroup(props) {

    return (
        <div>
            <ul className="list-group">
                {/* {props.genitems.map(genitem =>(
                    <li key={genitem._id} className="list-group-item">{props.genitem}</li>
                ))} */}
        
                <li class="list-group-item">All Genres</li>
                <li class="list-group-item">Thriller</li>
                <li class="list-group-item">Action</li>
                <li class="list-group-item">Comedy</li>

            </ul>
        </div>
    )
}
export default Listgroup; 