import React from 'react'
import ActorCard from './ActorCard'

export default function ActorSection(params) {
    console.log(params)
  return (
    <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
      {params?.data?.cast?.slice(0, 6).map(item =>
        <ActorCard data={item}/>
      )}
      </div>
)       
}
