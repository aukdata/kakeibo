
type BoxId = string;

type Box = {
  id: BoxId;
  name: string;
  amount: number;
};


type TransactionCategoryId = string;

type TransactionCategory = {
  id: TransactionCategoryId;
  name: string;
};


type TransactionEntry = {
  createdAt: Date;
  updatedAt: Date;
  amount: number;
  category: TransactionCategoryId;
  from?: BoxId;
  to?: BoxId;
};


type AppData = {
  entries: TransactionEntry[];
  categories: TransactionCategory[];
  boxes: Box[];
};
