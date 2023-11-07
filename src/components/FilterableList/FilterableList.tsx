import { useState } from "react"
import { articles } from "./data"

export function FilterableList() {
  // Stateful/Reactive variables
  const [filter, setFilter] = useState("")

  // Derived values does not need to bee stored in a reactive variable
  const filteredList = articles.filter((article) => {
    const isMatch = article.title.includes(filter)
      || article.body.includes(filter)

    return isMatch
  })

  // Event Handler
  function updateFilter(newFilter: string) {
    setFilter(newFilter)
  }

  return (
    <div>
      <input type="text" onChange={(event) => updateFilter(event.target.value)} />

      <ul>
        {
          filteredList.map((article) => {
            return (
              <li key={article.slug}>
                <ArticleCard data={article} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: null;
    image: string;
    following: boolean;
  }
}

type ArticleCardProps = {
  data: Article
}

function ArticleCard(props: ArticleCardProps) {
  return (
    <div>
      <img src={props.data.author.image} alt="" />
      <h2>{props.data.title}</h2>
      <p>{props.data.body}</p>
    </div>
  )
}