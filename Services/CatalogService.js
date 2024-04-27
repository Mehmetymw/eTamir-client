import { getRequestWithCredentials } from '../Services/RequestService';

export const GetCatalogs = async () => {
  try {
    var catalogs = await getRequestWithCredentials('/catalog/catalog');
    console.log("catalog:"+catalogs);
    if(catalogs){
      return catalogs;
    }
  } catch (error) {
    throw new Error(
      'An error occurred while getting categories: ' + error.message,
    );
  }
};
