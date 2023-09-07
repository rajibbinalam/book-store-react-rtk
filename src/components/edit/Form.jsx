import React, { useState } from 'react'
import { useEditBookMutation } from '../../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';

export default function Form({book}) {
    const {id, name:b_name, author:b_author, rating:b_rating, thumbnail:b_thumbnail, price:b_price, featured:b_featured} = book;

    const [name, setName] = useState(b_name)
    const [author, setAuthor] = useState(b_author)
    const [rating, setRating] = useState(b_rating)
    const [thumbnail, setThumbnail] = useState(b_thumbnail)
    const [price, setPrice] = useState(b_price)
    const [featured, setFeatured] = useState(b_featured)

    const navigate = useNavigate()
    const [editBook, {data: updateBook, isLoading, isError, isSuccess}] = useEditBookMutation()

    const handleSubmit = (e) => {
        e.preventDefault();

        editBook({id, data:{
                name,
                author,
                rating,
                thumbnail,
                price,
                featured
            }
        })
        if(!isLoading && !isError && isSuccess){
            navigate('/');
        }
    }
  return (
        <form className="book-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input required className="text-input" type="text" value={name} id="lws-bookName" name="name" onChange={(e)=> setName(e.target.value)} />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input required className="text-input" type="text" value={author} id="lws-author" name="author" onChange={(e)=> setAuthor(e.target.value)} />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input required className="text-input" type="text" value={thumbnail} id="lws-thumbnail" name="thumbnail" onChange={(e)=> setThumbnail(e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input required className="text-input" type="number" value={price} id="lws-price" name="price" onChange={(e)=> setPrice(Number(e.target.value))} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input required className="text-input" type="number" value={rating} id="lws-rating" name="rating" min="1" onChange={(e)=> setRating(Number(e.target.value))}
                        max="5" />
                </div>
            </div>

            <div className="flex items-center">
                <input id="lws-featured" type="checkbox" name="featured" checked={featured} className="w-4 h-4" onChange={(e)=> setFeatured(e.target.value === "on" ? true : false)} />
                <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">Edit Book</button>
        </form>
  )
}
