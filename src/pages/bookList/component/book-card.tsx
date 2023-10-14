import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Book } from "@/types/book";

type BookCardProps = {
  book: Book;
};

function BookCard({ book }: BookCardProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="w-[300px]">
            <CardHeader>
              <CardContent>
                <img
                  src={
                    book?.cover ??
                    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  }
                  height={50}
                  width={300}
                />
              </CardContent>
              <CardTitle>{book?.title ?? ""}</CardTitle>
              <CardDescription>{book?.status ?? ""}</CardDescription>
            </CardHeader>
          </Card>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Général conditions</DialogTitle>
            <DialogDescription>
              <ul>
                <li>
                  After barrowing the book you have two weeks to return it other
                  ways you goin to pay ovrdue fee
                </li>
                <li>- Up to 3 days after due date 5 MAD / Day </li>
                <li>- More than 3 days after due date 10 MAD / Day</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Barrow</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default BookCard;
