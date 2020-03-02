import React, {Component} from 'react'
import data from './data'

class Buttons extends Component{
    constructor(props){
        super(props)

        this.state = {
            index: 0
        }

        // this.state.index = this.state.index.bind(this)f
    }

    handleNext = () => {
        this.setState({
            index: this.state.index === 24 ? 0: this.state.index +1})
    }

    handlePrevious = () => {
        this.setState({
            index: this.state.index === 0? 24: this.state.index -1})
    }



    render(){
        return(
            <div class='contentContainer'>
                <section>
                    <div class='id'>
                        <h1>
                           {data[this.state.index].id}/25
                        </h1>
                    </div>
                    <h1 class='name'>
                        {data[this.state.index].name.first} {' '}
                        {data[this.state.index].name.last}
                    </h1>
                    <h1>
                        From: <span>{data[this.state.index].city}</span>
                    </h1>
                    <h1>
                        Job Title: <span>{data[this.state.index].title}</span>
                    </h1>
                    <h1>
                        Employer: <span>{data[this.state.index].employer}</span>
                    </h1>
                    <h1>
                        Favorite Movies: 
                    </h1>
                        <ol class='list'>
                            <li>{data[this.state.index].favoriteMovies[0]}</li>
                            <li>{data[this.state.index].favoriteMovies[1]}</li>
                            <li>{data[this.state.index].favoriteMovies[2]}</li>
                        </ol>
                </section>
                <div class='buttons'>                
                    <div>
                         <button onClick={this.handlePrevious}   >Previous</button>
                    </div>
                    <div>
                        {/* <button>Edit</button>
                        <button>Delete</button>
                        <button>New</button> */}
                    </div>
                    <div>
                        <button onClick={this.handleNext}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buttons