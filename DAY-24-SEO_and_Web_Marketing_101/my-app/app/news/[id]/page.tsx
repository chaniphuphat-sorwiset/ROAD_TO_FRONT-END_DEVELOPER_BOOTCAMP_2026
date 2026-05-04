import React from "react"

interface NewsParamsProps {
  params: Promise<{
    id: string
  }>
}

async function page({ params }: NewsParamsProps) {
  const { id } = await params
  return <div>This is Dynamically {id}</div>
}

export default page
