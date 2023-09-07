import React from 'react'
import ActionButton from './ActionButton'
import Rating from "./Rating"

export default function BookCard({book}) {
  const {id, name, author, thumbnail, price, rating, featured} = book || {};

  const ratings = [];

  for (let index = 1; index <= rating; index++) {
    ratings.push(<Rating />)         
  }
  return (
        <div className="book-card">
          <img className="h-[240px] w-[170px] object-cover"
            src={thumbnail} alt="book" />
          <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
            <div className="flex items-center justify-between">
              {featured ? (<span className="lws-badge">featured</span>) : '' }
              <ActionButton id={id} />
            </div>

            <div className="space-y-2 mt-4 h-full">
              <h4 className="lws-book-name">{name}</h4>
              <p className="lws-author">{author}</p>
              <div className="lws-stars">
                {ratings}
              </div>
              <p className="lws-price">BDT {price}</p>
            </div>
          </div>
        </div>
  )
}
