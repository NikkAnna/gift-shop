export type TGiftCard = {
  ID: string;
  TABLENAME: string;
  PRIMARYKEY: string;
  NAME: string;
  DESCRIPTION: string;
  PRICE: string;
  SUMMA: string;
  DISCOUNT: number;
};

export type TGiftsResponseType = {
  data: {
    data: TGiftCard[];
    result: number;
    resultdescription: string;
  };
};

export type TSaleResponseType = {
  ID: string;
  TABLENAME: string;
  PRIMARYKEY: string;
  PRICE: string;
  SUMMA: string;
  CLIENTNAME: string;
  PHONE: string;
  EMAIL: string;
  PAYMENTTYPEID: number;
  USEDELIVERY: number;
  DELIVERYADDRESS: string | null;
  ISGIFT: 0;
  MSGTEXT: string | null;
  PNAME: string | null;
  PPHONE: string | null;
};
