// Import schema and model from mongoose
import { Schema, model, Document } from "mongoose";

// TODO: Add a comment describing the functionality of the code below/ defines a type script interface for book doc, insures type safety
interface IBook extends Document {
  title: string;
  author?: string;
  publisher?: string;
  stockCount?: number;
  price?: number;
  inStock?: boolean;
  lastAccessed: Date;
}

// TODO: Add a comment describing the functionality of the code below/ defining schema for book model title is required everything else is optional
const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below/ makes book model using bookschema, enables this to be added to database
const Book = model("Book", bookSchema);

// TODO: Add a comment describing the functionality of the code below/creating object for book doc then logging new doc creation if true
Book.create({
  title: "Diary of Anne Frank",
  author: "Anne Frank",
  publisher: "Scholastic",
  stockCount: 10,
  price: 10,
  inStock: true,
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => console.log(err));

// TODO: Add a comment describing the difference between this instance being created and the instance that was created above
Book.create({
  title: "Oh the Places You Will Go!",
  author: "Dr. Seuss",
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => console.log(err));

// TODO: Add a comment describing the difference between this instance being created and the instance that was created above
Book.create({ title: "Harold and the Purple Crayon" })
  .then((result) => console.log("Created new document", result))
  .catch((err) => console.log(err));

export default Book;
