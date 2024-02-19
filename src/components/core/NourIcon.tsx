
import React from 'react'

export default function NourIcon({id, width = 24, path = '/icon'}: any) {
  // console.log(`${window.location.protocol}//${window.location.host}/icon/sprite.svg#${id}`)
  return (
    <svg id={id} width={width} height={width}>
      <use xlinkHref={`${path}/sprite.svg#${id}`} />
    </svg>
  )
}
