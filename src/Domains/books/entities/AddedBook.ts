type AddedBookType = {
  id: string;
  bookName: string;
};

class AddedBook {
  readonly id: string;
  readonly bookName: string;

  constructor(payload: AddedBookType) {
    this._verifyPayload(payload);

    this.id = payload.id;
    this.bookName = payload.bookName;
  }

  private _verifyPayload(payload: AddedBookType): void {
    if (!payload.id || !payload.bookName) {
      throw new Error("ADDED_BOOK.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (typeof payload.id !== "string" || typeof payload.bookName !== "string") {
      throw new Error("ADDED_BOOK.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}

export default AddedBook;
