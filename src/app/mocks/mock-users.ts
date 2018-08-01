import { User } from '../models/user';

export const USERS: User[] = [
  { coins: 300, validated: true, level: 1, lastname: 'Popov', id: 1, email: 'test@mail.ru', name: 'Ivan', type: 'Business', company: 'green', country: 'Koree', subscription: new Date()},
  { coins: 240, validated: true, level: 2, lastname: 'VanDam', id: 2, email: 'denton@me.com', name: 'Kate', type: 'Private', company: 'yellow', country: 'Japan', subscription: new Date()},
  { coins: 343, validated: true, level: 3, lastname: 'Egorov', id: 3, email: 'knorr@yahoo.ca', name: 'Alex', type: 'Private', company: 'red', country: 'Belarus', subscription: new Date()},
  { coins: 346, validated: true, level: 4, lastname: 'Smirnod', id: 4, email: 'sisyphus@att.net', name: 'Misha', type: 'Private', company: 'blue', country: 'USA', subscription: new Date()},
  { coins: 876, validated: true, level: 5, lastname: 'McMatt', id: 5, email: 'whimsy@sbcglobal.net', name: 'Sergey', type: 'Business', company: 'coandco', country: 'UK', subscription: new Date()},
  { coins: 324, validated: true, level: 6, lastname: 'Donald', id: 6, email: 'jsnover@icloud.com', name: 'Tima', type: 'Private', company: 'black', country: 'Greece', subscription: new Date()},
  { coins: 234, validated: true, level: 7, lastname: 'Obama', id: 7, email: 'goldberg@verizon.net', name: 'Andre', type: 'Business', company: 'frea', country: 'Armenia', subscription: new Date()},
  { coins: 132, validated: true, level: 8, lastname: 'Daus', id: 8, email: 'vertigo@mac.com', name: 'Viktor', type: 'Private', company: 'opla', country: 'UK', subscription: new Date()},
  { coins: 545, validated: true, level: 9, lastname: 'Geraa', id: 9, email: 'dexter@gmail.com', name: 'Dasha', type: 'Business', company: 'lkasa', country: 'USA', subscription: new Date()},
  { coins: 878, validated: true, level: 10, lastname: 'Michel', id: 10, email: 'msherr@comcast.net', name: 'Oleg', type: 'Private', company: 'asdzxc', country: 'Russia', subscription: new Date()},
  { coins: 899, validated: true, level: 11, lastname: 'Qoper', id: 11, email: 'jyoliver@yahoo.ca', name: 'Fredd', type: 'Business', company: 'company', country: 'Belarus', subscription: new Date()},
];
