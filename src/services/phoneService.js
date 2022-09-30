import Phone from '../models/Phone.js';

export default function getPhoneInstance(id, brand, title, img, price) {
    return new Phone(id, brand, title, img, price);
}
