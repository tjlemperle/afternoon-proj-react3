import React from 'react'
import data from './data'

function Content(){
    return(
        <div>
            <div style={{float: 'right'}}>over here</div>
            <div>
                <div>{data.name}</div>
                <div>
                    <span>From</span>
                    <span>{data.city}</span>
                </div>
                <div>
                    <span>Job Title</span>
                    <span>Reseach</span>
                </div>
                <div>
                    <span>Employer</span>
                    <span>Skinix</span>
                </div>
                <div>
                    <span>Favorite Movies</span>
                    <div>
                        <ol>Fathom</ol>
                        <ol>Strang</ol>
                        <ol>MArtian</ol>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Content

