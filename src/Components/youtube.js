import axios from 'axios'

const KEY = 'AIzaSyDq6UXakKuzqRLqAwInSg1VHxC7IU1gojE'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});