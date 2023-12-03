import axios from 'axios'

const BOOK_IMAGE_URL = 'https://iss.ndl.go.jp/thumbnail/';

/**
 * 書誌画像取得実行
 * @param {string}  isbn - ISBNコード
 * @return {string} 書誌画像URL
 */
const getBookImage = (isbn:string) => {
  return new Promise((resolve, reject) => {
    axios.get(BOOK_IMAGE_URL + isbn)
    .then(response => {
      const result = response.data;
      resolve(result);
    })
    .catch(error => {
      reject(error);
    });
  })
} 


export {
  getBookImage
}