import React from 'react'
import { useParams } from 'react-router'


export function VanDetail() {
  const params = useParams()
  console.log(params)

  return (
    <h1>Hello Vans</h1>
  )
}