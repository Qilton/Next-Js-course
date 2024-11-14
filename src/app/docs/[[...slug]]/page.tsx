import React from 'react'

const page = ({params}:{params:{slug:string[]}}) => {
    if (params.slug?.length==2){
  return (
    <div>
      Viewing Docs for Feature {params.slug[0]} and concept {params.slug[1]}
    </div>
  )}
  else{
    return (
      <div>
        Docs Home Page
      </div>
    )
  }
}

export default page
