import React, { useEffect, useState } from 'react';
import { baseURL } from "../config"
import {IArticle} from "../interfaces"
import { useParams } from "react-router-dom";
import  axios  from "axios";



export default function ArticleDetail() {
    const [articleLoading, setArticleLoading] = useState(false);
    const [articleError, setArticleError] = useState("");
    const [article, setArticle] = useState<IArticle | undefined>()

    const {id} = useParams();

useEffect(() => {
    setArticleLoading(true)
    axios(baseURL + id)
    .then(res => {
        if(res.status === 200){
            console.log(res)
            setArticle(res.data)
            setArticleError("")
            setArticleLoading(false)
        } else {
            setArticleLoading(false)
            setArticleError(res.request.status)

        }
    }).catch(err => {
        setArticleError(err.message);
        setArticleLoading(false)
    })
    
  }, [])


  return (
    <article>
        {articleLoading && <p>Loading...</p>}
        {article && <p>{article.title}</p>}
        {articleError && <p>errore! {articleError}</p>}
    </article>
  )
}
