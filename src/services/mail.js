import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'production' ? 'https://danielgarcia.xyz' : 'http://localhost:3000/api/';

const SERVICE = axios.create({ baseURL });

const MAIL_SERVICE = {
  sendMail: (data) => {
    return SERVICE.post('mail', data);
  }
}

export default MAIL_SERVICE