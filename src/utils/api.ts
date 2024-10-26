import { TGiftsResponseType, TSaleResponseType } from '../utils/types';

const axios = require('axios');
axios.defaults.baseURL = process.env.GIFTS_API_URL;

export async function getGiftCards() {
  const gifts = await axios.get('api', {
    params: {
      MethodName: 'OSGetGoodList',
      ApiKey: '011ba11bdcad4fa396660c2ec447ef14',
      ismob: 0
    }
  });
  return gifts as TGiftsResponseType;
}

export async function postOrder(data: TSaleResponseType) {
  await axios
    .get('api', {
      params: {
        MethodName: 'OSSale',
        ApiKey: '011ba11bdcad4fa396660c2ec447ef14',
        ismob: 0,
        ID: data.ID,
        TABLENAME: data.TABLENAME,
        PRIMARYKEY: data.PRIMARYKEY,
        PRICE: data.PRICE,
        SUMMA: data.SUMMA,
        CLIENTNAME: data.CLIENTNAME,
        PHONE: data.PHONE,
        EMAIL: data.EMAIL,
        PAYMENTTYPEID: data.PAYMENTTYPEID,
        USEDELIVERY: data.USEDELIVERY,
        DELIVERYADDRESS: data.DELIVERYADDRESS,
        ISGIFT: data.ISGIFT,
        MSGTEXT: data.MSGTEXT,
        PNAME: data.PNAME,
        PPHONE: data.PPHONE
      }
    })
    .then((data: { data: { CertNumber: string } }) => data);
}
