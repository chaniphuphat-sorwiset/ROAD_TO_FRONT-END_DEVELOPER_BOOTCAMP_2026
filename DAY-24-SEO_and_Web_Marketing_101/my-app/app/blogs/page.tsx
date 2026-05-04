import BlogsList from "../components/BlogsList"

async function page() {
  const res = await fetch("https://dummyjson.com/posts")
  const data = await res.json()
  console.log(data)
  return (
    <div>
      <h1>All Post</h1>
      <BlogsList></BlogsList>
    </div>
  )
}

export default page
