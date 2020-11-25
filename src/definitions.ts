
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

type TransactionEntryId = string;

type TransactionEntry = {
  id: TransactionEntryId;
  createdAt: Date;
  updatedAt: Date;
  amount: number;
  category: TransactionCategoryId;
  from?: BoxId;
  to?: BoxId;
};


type AccountInfo = {
  uid: string;
  displayName: string;
  email: string;
  avatarURL?: string;
}


type AppData = {
  entries: TransactionEntry[];
  categories: TransactionCategory[];
  boxes: Box[];
  account?: AccountInfo;
};
