import React from 'react'
import PropTypes from 'prop-types'
import Link from 'nextein/link'
import dayjs from 'dayjs'

function PostPreview(props) {
  return (
    <div className="page-preview">
      {false && <div><small className="gray">
        {dayjs(props.date).add(1, 'day').format('DD MMM YYYY')}
      </small></div>}
      <div className="preview-content">
      <Link prefetch href={props.url}>
          <a>
            {props.title}
          </a>
      </Link>
      <p className="gray">{props.summary}</p>
      </div>
    </div>
  )
}

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default PostPreview
