
import React from "react"

export default function MemesBody(){

    const [meme, setMeme] = React.useState({
        txtTop : "Text Top",
        txtBottom : "Text Bottom",
        img : "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState()


    function generateMeme(event){
        event.preventDefault()
        const memeArr = allMemeImage.data.memes
        const randNum = Math.floor(Math.random() * memeArr.length)
        setMeme(prevSetMeme => ({...prevSetMeme, img : (memeArr[randNum].url)}))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme, [name] : value
        }))
    }

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImage(data))
    }, [])

    return (

            <div className="memesBody justify-content-center p-5">
                <form onSubmit={generateMeme}>
                    <div class="mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            id="txtTop" 
                            name="txtTop" 
                            value={meme.txtTop}
                            onChange={handleChange}     
                            placeholder="Shut Up" 
                        />
                    </div>
                    <div class="mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            id="txtBottom" 
                            name="txtBottom" 
                            value={meme.txtBottom}
                            onChange={handleChange}
                            placeholder="And Take My Money"
                        />
                    </div>

                    <button className="btn btn-primary col-12">Get New Meme Image</button>
                </form>

                <div className="imageDiv">
                    <img src={meme.img} width="900px"></img>
                    <h1 className="textTop">{meme.txtTop}</h1>
                    <h1 className="textBot">{meme.txtBottom}</h1>
                </div>
            </div>
    )
}
