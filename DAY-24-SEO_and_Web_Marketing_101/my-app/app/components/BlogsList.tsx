"use client"
import useSWR from "swr"

interface PostProps {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
}

async function fetcher(url: string) {
  return await fetch(url).then((res) => res.json())
}
function BlogsList() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/posts",
    fetcher,
  )
  return (
    <div>
      <ul>
        {error && <div>Failed to load</div>}
        {isLoading && <div>Loading...</div>}
        {data &&
          data.posts.map((post: PostProps) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </div>
  )
}

export default BlogsList
