import React from "react";
import Header from "../ui/Header";
import BookCard from "../books/BookCard";
import { useGetBooksQuery } from "../../features/api/apiSlice";

export default function Home() {
  const {data: books, isLoading, isError, isSuccess} = useGetBooksQuery();
  let content = null;
  if(isLoading) content = <>Loading ...</>;
  if(!isLoading && isError) content = <div className="error">There was an error occured</div>;
  if(!isLoading && !isError && books?.length === 0) content = <div className="error">No Books Found</div>;
  if(!isLoading && !isError && books?.length > 0){
    content = books.map((book) => <BookCard key={book.id} book={book} />);
  } 
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <Header />
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
}
