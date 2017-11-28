import React, { Component } from 'react';
import * as R from 'ramda' 
import {getFlickrImagesByTag} from '../api/flickrApi'


var mediaUrl = R.compose(R.prop('m'), R.prop('media'))

var srcs = R.compose(R.map(mediaUrl), R.prop('items'))


getFlickrImagesByTag('cat').then(data => { 
    console.log(data)
    console.log(srcs(data))
    let images = srcs(data).map(d => Image(d))
    console.log(images)
})

// console.log(R.compose(Image , srcs , getFlickrImagesByTag)('cat'))


class Chapter6 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
        getFlickrImagesByTag('cat').then(data => { 
            this.setState({
                images: srcs(data)
            })
            // let images = srcs(data).map(d => Image(d))
        })
    }
    render() {


        return (
            <div>
                <h1>Images</h1>
                {this.state.images && this.state.images.map(im => { 
                    return Image(im)
                })}
                
            </div>
        );
    }
}

const Image = (src) => { 
    return <img src={src} key={src} alt=""/>
}

export default Chapter6;