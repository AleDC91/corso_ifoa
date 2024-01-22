import React from 'react'
import { useNavigate } from "react-router-dom"


interface ArticleProps { title: string, id: number}


export default function SingleArticle({title, id}: ArticleProps) {

  const navigate = useNavigate()



  return (
    <article onClick={() => navigate(`/${id}`)}>
        {title}
    </article>
  )
}
