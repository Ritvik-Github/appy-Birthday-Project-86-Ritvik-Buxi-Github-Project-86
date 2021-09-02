var canvas = new fabric.Canvas('myCanvas');
var  x= document.getElementById("myAudio");
var new_birthday_image = "";
function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
        new_birthday_image = Img;

        new_birthday_image.scaleToWidth(canvas.width);
        new_birthday_image.scaleToHeight(canvas.height);
        new_birthday_image.set({
            top:0,
            left:0
        });
        canvas.add(new_birthday_image);
    });
    x.play();
}