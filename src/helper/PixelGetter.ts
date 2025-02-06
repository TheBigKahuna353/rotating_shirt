

const getPixel = (url:string, x:number, y:number) => {
    var img = new Image();
    img.src = url;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context!.drawImage(img, 0, 0);
    return context!.getImageData(x, y, 1, 1).data;
  }

export default getPixel;