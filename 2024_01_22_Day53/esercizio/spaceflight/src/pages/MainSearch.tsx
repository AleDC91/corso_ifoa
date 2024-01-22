import React from 'react'
import { useState, useEffect } from "react"
import { baseURL } from "../config";
import axios from "axios";
import { IArticle } from "../interfaces";
import SingleArticle from "../components/SingleArticle"


export default function MainSearch() {



  const [articles, setArticles] = useState<IArticle[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    setLoading(true)
    axios(baseURL)
    .then(res => {
      console.log(res);
      if(res.status === 200){
        setArticles(res.data.results)
        setLoading(false)
      } else {
        console.error("Errore")
        setError(res.request.status)
        setLoading(false)
      }
    })
    .catch(err => {
        console.log(err)
        setLoading(false)
        setError(err)
    })
  

  }, [])
  

  return (
    <main className="main-search">
        {loading && <p>Loading...</p>}
        {articles.map(article => <SingleArticle key={article.id} title={article.title} id={article.id}/>)}
    </main>
  )
}
