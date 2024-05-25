import { useState , useEffect } from "react" 
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./all.css"

function ALL() {
    const [img , setImg] = useState([""])
    const [title , setTitle] = useState([""])
    const navigate = useNavigate(); // Declare useNavigate at the component level

    useEffect(() => {
        axios.get('/api/anime').then((res)=>{
            const data = res.data; 
            let imageUrls = []
            let titles = [] // Changed variable name to 'titles'
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const item = data[key];
                    if (item && item.image && item.title) {
                       imageUrls.push(item.image)
                       titles.push(item.title) // Changed variable name to 'titles'
                    }
                }
            }
            setImg(imageUrls)
            setTitle(titles) // Changed variable name to 'titles'
        })
    }, []);

    const handleClick = (index) => {

        axios.get("/api/post", { params: { "title": title[index] } })
            .then((response) => {
                navigate("/krooz", { state: response.data });
            })
    }

    return (
        <div>
            {img.map((imageUrl, index) => (
                <button key={index} className="cool" onClick={() => handleClick(index)}>
                    <img src={imageUrl} alt={`Image ${index}`} />
                </button>
            ))}
        </div>
    )
}

export default ALL
