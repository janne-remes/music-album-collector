import React, { Component } from 'react'
import MusicAlbumContainerData from './MusicAlbumContainerData'
import MusicAlbumContainerImage from './MusicAlbumContainerImage'

export class MusicAlbumContainer extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             showFull: false
        }

        this.buttonClicked = this.buttonClicked.bind(this)
    }

    buttonClicked = () => {
        var { showFull } = this.state;
        this.setState({ showFull : !showFull })
    }
    
    
    render() {
        return (
            
            <div>
                <div className = "MusicAlbumContainerHeader">
                    Albumi
                </div>
                <div hidden onClick={this.buttonClicked}>
                    <MusicAlbumContainerData album = {this.props.album} />
                    <MusicAlbumContainerImage album = {this.props.album} />
                </div>
            </div>
        )
    }
}

export default MusicAlbumContainer
