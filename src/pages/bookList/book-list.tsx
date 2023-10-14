import Header from "@/components/layout/header";
import BookCard from "./component/book-card";
import { useGetBooksQuery } from "@/app/features/bookList/bookApiSlice";

const BookListBorrow = () => {
  const { data } = useGetBooksQuery();
  return (
    <>
      <Header />
      <main className="container p-4 mx-auto flex gap-6">
        {data?.map((book) => (
          <BookCard book={book} />
        ))}
      </main>
    </>
  );
};

export default BookListBorrow;
