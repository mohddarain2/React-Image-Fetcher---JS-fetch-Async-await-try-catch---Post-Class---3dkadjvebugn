import React, { useState ,useEffect} from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const [image, setImage] = useState({});
    const [loading, setLoading] = useState(false);
    
    const callApi = (number) => {
        setLoading(true)
        //
        fetch('https://jsonplaceholder.typicode.com/photos/' + number)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setImage(data)
                setLoading(false)
            })
    }
    
    useEffect(() => {
        console.log('image - ', image);
    }, [image])

    const updateInput = (e) => {
        console.log(e.target.value)
        callApi(e.target.value)
    }
   
    
    return (
        <>
            Id number <input type="number" onChange={updateInput} />
            {(loading) && <Loader />}
            {(Object.keys(image).length > 0) && <PhotoFrame url={image.url} title={image.title} />
            }
        </>
    )
}


export default App;
