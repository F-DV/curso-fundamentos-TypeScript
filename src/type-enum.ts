//Orientacion para Fotogfrafias
enum PhotoOrientation {
    Landscape, // posicion 0
    Portrait, //posicion 1
    Square, //posicion 2
    Panorama, //posicion 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape',landscape);                    //-> 0
console.log('Landscape',PhotoOrientation[landscape]); // Landscape

enum PictureOrientation {
    Landscape = 10, //posicion 10
    Portrait,//posicion 11
    Square, //posicion 12
    Panorama, //posicion 13
}
console.log('portrait',PictureOrientation.Portrait); //11

enum Country{
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp',
}
const country = Country.Colombia
console.log('Country; ', country);  // col