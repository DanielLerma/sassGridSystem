import { Photo } from './photo';

const photo = new Photo;
photo.getAll().then(response => {
    console.log('Results: ', response);
});