import axios from 'axios'
import { data } from './data'

const getRequest = url => {
    return axios.get(url);
}


const getFlickrImagesByTag = tag => { 
    // return data
    // return getRequest(`http://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&jsoncallback=?`)

    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve(data)
        })
    })
}

export {
    getRequest,
    getFlickrImagesByTag
}