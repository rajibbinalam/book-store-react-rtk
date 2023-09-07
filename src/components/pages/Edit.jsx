import React from 'react'
import Form from '../edit/Form'
import { useParams } from 'react-router-dom'
import { useGetBookQuery } from '../../features/api/apiSlice';

export default function Edit() {
  const {id} = useParams();
  const {data: book, isLoading, isError, isSuccess } = useGetBookQuery(id);
  let content = null;
  if(isLoading) content = <>Loading ...</>;
  if(!isLoading && isError) content = <div className='error'>There Was an Error</div>;
  if(isSuccess && id){
    content = <Form  book={book}/>
  }
  return (
    <main className="py-6 2xl:px-6">
        <div className="container">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
                {content}
            </div>
        </div>
    </main>
  )
}
