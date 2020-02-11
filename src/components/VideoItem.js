import React from 'react'
import './VideoItem.css'

const VideoItem = (props) => {
  const onSelect = () => {
    props.onVideoSelect(props.video)
  }
  return (
    <div className=" video-item item" onClick={onSelect}>
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.description}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem
