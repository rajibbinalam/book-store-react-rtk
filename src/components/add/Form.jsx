import React, { useState } from 'react'
import { useAddBookMutation } from '../../features/api/apiSlice'
import Rating from '../books/Rating'

export default function Form() {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [rating, setRating] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [price, setPrice] = useState('')
    const [featured, setFeatured] = useState(false)

    const [addBook, {isLoading, isSuccess}] = useAddBookMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({
            name,
            author,
            rating,
            thumbnail,
            price,
            featured
        })
        resetForm();

        // if(isSuccess){
        // }
    }

    const resetForm = () => {
        setName('')
        setAuthor('')
        setRating('')
        setThumbnail('')
        setPrice('')
        setFeatured(false)
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
                    <input required className="text-input" type="number" value={rating} id="lws-rating" name="rating" min="1"  onChange={(e)=> setRating(Number(e.target.value))}
                        max="5" />
                </div>
            </div>

            <div className="flex items-center">
                <input id="lws-featured" type="checkbox" name="featured" checked={featured} className="w-4 h-4" onChange={(e)=> setFeatured(e.target.value === "on" ? true : false)} />
                <label htmlFor="lws-featured" className="ml-2 text-sm" > This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">Add Book</button>
        </form>
  )
}
