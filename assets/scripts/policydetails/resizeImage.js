function resizeImageToSpecificWidth(width, input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = new Image();
            img.onload = function () {
                if (img.width > width) {

                    var oc = document.createElement('canvas'), octx = oc.getContext('2d');
                    oc.width = img.width;
                    oc.height = img.height;
                    octx.drawImage(img, 0, 0);
                    while (oc.width * 0.5 > width) {
                        oc.width *= 0.5;
                        oc.height *= 0.5;
                        octx.drawImage(oc, 0, 0, oc.width, oc.height);
                    }
                    oc.width = width;
                    console.log('  oc.width', oc.width);
                    oc.height = oc.width * img.height / img.width;
                    octx.drawImage(img, 0, 0, oc.width, oc.height);
                    input.src = oc.toDataURL();
                    img.width = oc.width;
                    img.height = oc.height;
                    console.log('image width', img.width);
                    console.log('image height', oc.height);
                    console.log(' oc.toDataURL()', oc.toDataURL());
                }
                // else {
                //     document.getElementById('small-image').src = img.src;
                // }
            };
            input.src = event.target.result;
            img.src = event.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        console.log('input.files[0]', input.files[0])
    }
}