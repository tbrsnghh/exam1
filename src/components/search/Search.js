import React, { useState } from 'react'
import { Container, Input } from 'reactstrap'

export default function Search() {
    const [text, setText]=useState("")
  return (
    <Container>
        <Input placeholder='Search' onChange={(e)=>setText(e.target.value)}/>
    </Container>
  )
}
