import ImageService from "./image-service.js";

let _is = new ImageService();
//Your ImageService is a global class what can you do here to instantiate it?


function _draw() {

}

export default class ImageController {
  constructor() {
    _is.getImage(_draw);
  }

}

