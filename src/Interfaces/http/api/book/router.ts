import { NextFunction, Request, Response, Router } from "express";
import BookService from "./service";
import container from "../../../../Infrastructures/container";
import runValidation from "../../../../Infrastructures/middleware/validation/runValidation";
import { addBookSchema } from "../../../../Infrastructures/middleware/validation/schema/bookSchema";

const bookService: BookService = new BookService(container);

const router: Router = Router();
// POST | /book
router.post(
  "/book",
  (req: Request, res: Response, next: NextFunction) => {
    runValidation(req, res, next, addBookSchema);
  },
  bookService.addBookService
);
// GET | /books
router.get("/books", bookService.findAllBookService);

export default router;
