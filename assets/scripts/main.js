
//js datepicker
function convert(str, flag = false) {
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    if(flag === true){
        return [mnth, day, date.getFullYear()].join("/");
    }
    return [day, mnth, date.getFullYear()].join("/");
};

function myCopyTo(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

function valueText(Element){
    var value;
    value = Element.value;
    return value;
}

function valueSelect(Element){
    var value;
    for(var i = 0; i < Element.length; i++){
        if(Element[i].selected === true){
            value = Element[i].value;
        }
    }
    return value;
}

function valueRC(Element){
    var value = '';
    for(var i = 0; i < Element.length; i++){
        if(Element[i].checked === true){
            value += `${Element[i].value}, `;
        }
    }
    return value;
}

// format number

function formatNumber(inputEl){
    $(inputEl).on('keyup', function(e){
        // When user select text in the document, also abort.
        var selection = window.getSelection().toString();
        if ( selection !== '' ) {
            return;
        }
        
        // When the arrow keys are pressed, abort.
        if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
            return;
        }

        var $this = $( this );
        var input = $this.val();
        var input = input.replace(/[\D\s\._\-]+/g, "");
            input = input ? parseInt( input, 10 ) : 0;
        $this.val( function() {
            return ( input === 0 ) ? "" : input.toLocaleString();
        } );
    });
}

/*
 * ssdCascadingDropDown jQuery plugin
 * Examples and documentation at: https://github.com/sebastiansulinski/cascading-dropdown
 * Copyright (c) 2016 Sebastian Sulinski
 * Version: 1.4.3 (26-JUN-2017)
 * Licensed under the MIT.
 * Requires: jQuery v1.9 or later
 */
/*
 * ssdCascadingDropDown jQuery plugin
 * Examples and documentation at: https://github.com/sebastiansulinski/cascading-dropdown
 * Copyright (c) 2016 Sebastian Sulinski
 * Version: 1.4.3 (26-JUN-2017)
 * Licensed under the MIT.
 * Requires: jQuery v1.9 or later
 */


// Cacading dropdown

