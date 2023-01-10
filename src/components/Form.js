import React from 'react'
import '../css/form.css';

// import MemeData from './MemeData';
export const Form = () => {

    
    // const [url,seturl] = React.useState("")
    // console.log(memeArr);

    const[meme,setmeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const[allMemes,setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    },[])
    function getnewimg(){
        const memeArr = allMemes;
        const randomNumber = Math.floor(Math.random() * memeArr.length);
        const newurl = memeArr[randomNumber].url;
        
        setmeme((prevmeme)=>{
            return {
                ...prevmeme,
                randomImage:newurl
            }
        })
    }

    function handleChange(event){
        setmeme((prevmeme)=>{
            const{name,value}=event.target
            
            return{
                    ...prevmeme,
                    [name]:value
            }
        })
    }
  return (
    <main>
        <div className='input-form'>
            <div className="inputs">
                <input 
                    type="text" 
                    className='toptext' 
                    placeholder='Top text'
                    name='topText'
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className='bottomtext' 
                    placeholder='Bottom text'
                    name='bottomText'
                    onChange={handleChange} 
                    value={meme.bottomText}   
                />
            </div>
            
            <button className='newimage-btn' onClick={getnewimg}>Get a new meme image</button>
            
            <div className="meme">
                <img src={meme.randomImage} alt="" className='meme-img'/>
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </div>

        

    </main>
  )
}
