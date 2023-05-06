import React, { useState,useEffect } from 'react'
import "./app.css"
const Middle = () => {
    const [quoteText, setQuoteText] = useState("loading...")
    const [quoteAuthor, setQuoteAuthor] = useState("loading...")
    // useEffect(() => {
     
    //   fetch
    // },[])
    const getQuote = async () => {
      let response = await fetch("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
      let data =await response.json()
      console.log(data?.quoteAuthor,"\n",data?.quoteText);
      setQuoteText(data.quoteText)
     setQuoteAuthor(data.quoteAuthor? data.quoteAuthor:"unknown")
      }
  return (
    <div>
    <div className='made-by'>
      <p>Made with ❤️ by Atul </p>
    </div>
    <div className="center">
      <p> Quotes Generator</p>
      <div className="quote-box">
        <div className='quote-open quote-icon'>
          <i className="fa-solid fa-quote-left" />
        </div>
        <p className="quote-text">
         {quoteText}
        </p>
        <div className='quote-close quote-icon'>
          <i className="fa-solid fa-quote-right" />
        </div>
      </div>
      <div className="author">{quoteAuthor}</div>
      <div className="buttons">
        <div className="functions">
          <div>
            <button>
              <i className="fa-solid fa-volume-high" />
            </button>
            <button>
            <i className="fa-solid fa-share-nodes"></i>
            </button>
            <button>
              <i className="fa-solid fa-copy" />
            </button>
          </div>
          <button onClick={getQuote} className='new-quote-btn'>New Quote +</button>
        </div>
      </div>
    </div>
    <div className="box">
      <span className="dot1" />
      <span className="dot2" />
      <span className="dot3" />
      <span className="dot4" />
      <span className="dot5" />
      <span className="dot6" />
      <span className="dot7" />
      <span className="dot8" />
      <span className="dot9" />
    </div>
  </div>
  

  )
}

export default Middle