const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=trees'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
  baseURL: apiUrl,
  timeout: 3000
});

// let _image = {}

export default class ImageService {
  getImage(_draw) {
    // ^^^^^^^ How do you call this function?
    console.log("Looking for a good pic")
    imgApi.get().then(res => {
      let pictures = res.data.images;
      let picture = pictures[Math.floor(Math.random() * pictures.length - 1)];
      console.log('Image Data:', picture);
      _draw(picture);
    })
  }
}
