

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
  name: string;
  amount: number;
  category: TransactionCategoryId;
  to?: BoxId;
};


type BoxId = string;

type Box = {
  id: BoxId;
  name: string;
  balance: number;
  entries: TransactionEntry[];
};


type AccountInfo = {
  uid: string;
  displayName: string;
  email: string;
  avatarURL?: string;
}


type AppData = {
  categories: TransactionCategory[];
  boxes: Box[];
  account?: AccountInfo;
};
