jQuery(document).ready(function () {
    // message
    const MESS_ALL = 'Please enter full information!';
    const MESS_IDNUMBER_ERROR = 'Identity card number must not be duplicated';
    const MESS_EMAIL_FORMAT = 'Invalid email format';
    let width = screen.width;
    $(".continue").on("click", function (e) {
        // Form mobile
        if (width <= 768) {
            $('#form_submit_detail').remove();
            let inputCheckMobile = $("#form_submit_detail_mobile .check");
            let flag = true;
            let valueBirthDay = $('#date_birth').val();
            let date = new Date(valueBirthDay);
            let dateArray = valueBirthDay.split('/');
            const fromIndex = dateArray.indexOf(dateArray[0]);
            const toIndex = 1;
            const element = dateArray.splice(fromIndex, 1)[0];
            dateArray.splice(toIndex, 0, element);
            let dNew = new Date(dateArray.join('/'));
            let d = new Date();
            let time = d.getTime();
            let timeNew = dNew.getTime();
            let oldInsurendmain = Math.floor((time - timeNew) / (24 * 3600 * 1000));
            let year = dateArray[2];
            let yearNow = d.getFullYear();
            let birthDay = yearNow - year;
            if (inputCheckMobile && birthDay > 75) {
                console.log("flag75false");
                flag = false;
                return
            }
            $('.mobile_form').find('input').not('#id_citizenship_ms_m , #id_citizenship_mt_m').each(function (index) {
                if ($(this).val() == '') {
                    $(this).css("border-bottom", "1px solid red");
                    $(this).focus();
                    flag = false;
                    return;
                } else {
                    $(this).css("border-bottom", "1px solid #b3b3b3");

                }
            });
            console.log('flag1', flag)

            // Validate email
            const validateEmail = (email) => {
                return email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            };
            const validate = () => {
                const $result = $('._show_error');
                const email = $("input.email").val();
                $result.text('');
                if (validateEmail(email)) {
                    console.log("Email is valid")
                    // flag = true;
                } else if (email == '') {
                    $result.text(MESS_ALL);
                    $result.css('color', 'red');
                    flag = false;
                    return
                } else {
                    console.log("Email is not valid")
                    $result.text(MESS_EMAIL_FORMAT);
                    $result.css('color', 'red');
                    flag = false
                    return
                }
                return flag;
            }
            validate($("input.email"));
            console.log('validate', flag)

            $('.mobile_form').find('select').each(function (index) {

                if ($(this).val() == '') {
                    $(this).css("border-bottom", "1px solid red");
                    $(this).focus();
                    flag = false;
                    return;
                } else {
                    $(this).css("border-bottom", "1px solid #b3b3b3");

                }
            });
            console.log('flag2', flag)

            $('.mobile_insurend_member').find('input').not('.cmnd_m').each(function (index) {

                if ($(this).val() == '') {
                    $(this).css("border-bottom", "1px solid red");
                    $(this).focus();
                    flag = false;
                    return;
                } else {
                    $(this).css("border-bottom", "1px solid #b3b3b3");

                }
            });
            console.log('flag3', flag)
            // Custom border cho the a 
            if ($("#id_citizenship_mt_m").val() == "") {
                $('.mobile_form').find('a:first').css("border-bottom", "1px solid red");
                flag = false;
                // return;
            } else {
                $('.mobile_form').find('a:first').css("border-bottom", "1px solid #b3b3b3");
            }


            $('.mobile_insurend_member').find('select').each(function (index) {
                if ($(this).val() == '') {
                    $(this).css("border-bottom", "1px solid red");
                    $(this).focus();
                    flag = false;
                    return;
                } else {
                    $(this).css("border-bottom", "1px solid #b3b3b3");

                }

            });
            console.log('flag4', flag)
            $('.mobile_insurend_member').find('.cmnd_m').each(function (index) {
                // dateChild = $('input.datefilter_children').eq(index).val();
                // let dChildNew = new Date(dateChild);
                // let timeChild = dChildNew.getTime();
                // let childOld = Math.floor((time - timeChild) / (24 * 3600 * 1000));
                let d = new Date();
                console.log('flag-1', flag);
                let date = $('.mobile_insurend_member').find("input[data-type='date-picker-mb']").eq(index).val();
                console.log("date", date);
                let dateArray = date.split('/');
                const fromIndex = dateArray.indexOf(dateArray[0]);
                const toIndex = 1;
                const element = dateArray.splice(fromIndex, 1)[0];
                dateArray.splice(toIndex, 0, element);
                let year = dateArray[2];
                console.log(year)
                let dNew = new Date(dateArray.join('/'));
                let day = dNew.getMonth();
                let yearNow = d.getFullYear();
                let birthDay = yearNow - year;
                let time = d.getTime();
                let timeNew = dNew.getTime();
                let daysOld = Math.floor((time - timeNew) / (24 * 3600 * 1000));
                if ($(this).val() == '' && date == '') {
                    console.log("123");
                    $(this).css("border-bottom", "1px solid red");
                    flag = false;
                    return
                } else if (daysOld <= 42) {
                    console.log("1")
                    flag = false;
                    return

                } else if (birthDay > 75) {
                    console.log("2")
                    flag = false;
                    return
                }

                // else if (daysOld > 42 && birthDay < 15 && $(this).val() == '') {
                //     console.log("2")
                //     $(this).css("border-bottom", "1px solid red");
                //     flag = false;
                //     return

                // } 
                // console.log("birth",birthDay)
                else if ((42 < daysOld && birthDay <= 75) && $(this).val() == '') {

                    console.log("3")
                    $(this).css("border-bottom", "1px solid red");
                    flag = false;
                    return

                } else {
                    console.log("normar")
                    $(this).css("border-bottom", "1px solid #b3b3b3");


                }
            });
            console.log("flag-enddd", flag);
            // Neu nguoi dung tich vao nhung chua dien thong tin se hien thong bao


            // Check neu duoi 14 tuoi va duoi 42 ngay tuoi thi chan khong cho di tiep
            if (oldInsurendmain == 0) {

                err = "You are not reaching age of 15 to be the policy holder under legal regulation. But you could seek support from your parent to be policy holder while you are the insured."
                flag = false;
                return $('.error-message').text(err);

            } else if (birthDay < 15 || oldInsurendmain < 42) {
                console.log("2")
                flag = false;
            } else {
                console.log("3")
                $('.error-message').text("");
            }


            if (flag) {
                let condition = true
                controlMobileStep(condition);
                // $(".tab.is-active").removeClass("is-active");
                // $('*[data-src="tab-3"]').addClass("is-active");
                // $(".form-policy").find("input").css({
                //     "border-bottom": "none",
                //     'pointer-events': 'none'
                // });
                // // $(".mobile_insurend_member").find("input").css({
                // //     "border-bottom": "none",
                // //     'pointer-events': 'none'
                // // });
                // $(".mobile_insurend_member").find(".date_form_mobile").css({
                //     'pointer-events': 'none',
                // });
                // $(".mobile_form").find("select").css({
                //     "border-bottom": "none",
                //     "-webkit-appearance": "none",
                //     'pointer-events': 'none'
                // });
                // $(".form").find("label").css({
                //     "border-bottom": "none",
                // });

                // $(".mobile_insurend_member").find("select").css({
                //     "border-bottom": "none",
                //     "-webkit-appearance": "none",
                //     'pointer-events': 'none'
                // });

                // $(".form-policy").find('.custom-phone').css('border-bottom', 'none');

                // $('.mobile_form .date').find('i').css('display', 'none');
                // $('.date_form_mobile').find('i').css('display', 'none');


                // $(".mobile_box_form_confirm .box_form_confirm_m").css("display", "block");
                // $(".control").css("display", "none");
                // $(".control_bill.control").css("display", "flex");
                // $(".check_box").find(".check").css("display", "none");
            }

            // Form PC
        } else if (width > 768) {
            $('#form_submit_detail_mobile').remove();
            let flag = true;
            let inputCheck = $("#form_submit_detail .check").find("#checkbox").is(":checked");
            let valueBirthDay = $('#date_birth').val();
            let date = new Date(valueBirthDay);
            let dateArray = valueBirthDay.split('/');
            const fromIndex = dateArray.indexOf(dateArray[0]);
            const toIndex = 1;
            const element = dateArray.splice(fromIndex, 1)[0];
            dateArray.splice(toIndex, 0, element);
            let dNew = new Date(dateArray.join('/'));
            let d = new Date();
            let time = d.getTime();
            let timeNew = dNew.getTime();
            let oldInsurendmain = Math.floor((time - timeNew) / (24 * 3600 * 1000));
            let year = dateArray[2];
            let yearNow = d.getFullYear();
            let birthDay = yearNow - year;
            // xet th tren 75 tuoi va tich vao o chd
            console.log('inputCheck', inputCheck);
            console.log('birthDay', birthDay);
            if (inputCheck && birthDay > 75) {
                flag = false;
                return
            }
            console.log("flag75", flag);
            $('.form').find('input').not('#id_citizenship_ms , #date_birth ,#id_citizenship_mt').each(function (index) {
                var dataInput = $(this);
                if ($(this).val() == '') {
                    dataInput.css("border-bottom", "1px solid red");
                    console.log("border-bottom red")
                    // dataInput.focus();
                    flag = false;
                    return
                } else {
                    dataInput.css("border-bottom", "1px solid #b3b3b3");
                }
            });
            console.log("flagPC1", flag)


            // Validate email
            const validateEmail = (email) => {
                return email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            };
            const validate = () => {
                const $result = $('._show_error');
                const email = $("input.email").val();
                $result.text('');
                if (validateEmail(email)) {
                    console.log("Email is valid")
                    // flag = true;
                } else if (email == '') {
                    $result.text(MESS_ALL);
                    $result.css('color', 'red');
                    flag = false;
                    return

                } else {
                    console.log("Email is not valid")
                    $result.text(MESS_EMAIL_FORMAT);
                    $result.css('color', 'red');
                    flag = false
                    return
                }
                return flag;
            }
            validate($("input.email"));

            // Custom border cho the a 
            if ($("#id_citizenship_mt").val() == "") {
                $('.form').find('a:first').css("border-bottom", "1px solid red");
                flag = false
                // return
            }
            else {
                $('.form').find('a:first').css("border-bottom", "1px solid #b3b3b3");
            }
            console.log("flagPC2", flag);

            $('.form').find('select').each(function (index) {
                let dataSelect = $(this);
                if ($(this).val() == '') {
                    dataSelect.focus();
                    dataSelect.css("border-bottom", "1px solid red");
                    flag = false;
                    return;
                } else {
                    dataSelect.css("border-bottom", "1px solid #b3b3b3");
                }
            });
            console.log("flagPC3", flag);
            // if ($("#form_submit_detail #checkbox").is(":checked") == true) {

            // }

            $('.content_table').find('select').each(function (index) {
                let dataSelect = $(this);
                console.log(dataSelect);
                if ($(this).val() == '') {
                    dataSelect.focus();
                    dataSelect.css("border-bottom", "1px solid red");
                    flag = false;
                    return;
                } else {
                    dataSelect.css("border-bottom", "1px solid #b3b3b3");
                }
            });
            console.log("flagPC4", flag)


            $('.content_table').find('input').not('.cmnd_adults_').each(function (index) {
                let dataInput2 = $(this);
                if (dataInput2.val() == '') {
                    dataInput2.css("border-bottom", "1px solid red");
                    $(this).siblings('.custom-phone').css("border-bottom", "1px solid red");
                    flag = false;
                    return;
                } else {
                    dataInput2.css("border-bottom", "1px solid #b3b3b3");
                    $(this).siblings('.custom-phone').css("border-bottom", "1px solid #b3b3b3");
                }
            });
            console.log("flagPC5", flag)

            $('#insurend_member').find('.cmnd_adults_').each(function (index) {
                // dateChild = $('input.datefilter_children').eq(index).val();
                // let dChildNew = new Date(dateChild);
                // let timeChild = dChildNew.getTime();
                // let childOld = Math.floor((time - timeChild) / (24 * 3600 * 1000));
                let d = new Date();
                let date = $('#insurend_member').find("input[data-type='date-picker']").eq(index).val();
                console.log("date", date);
                let dateArray = date.split('/');
                const fromIndex = dateArray.indexOf(dateArray[0]);
                const toIndex = 1;
                const element = dateArray.splice(fromIndex, 1)[0];
                dateArray.splice(toIndex, 0, element);
                let dNew = new Date(dateArray.join('/'));
                let year = dateArray[2];
                let day = dNew.getMonth();
                let yearNow = d.getFullYear();
                let birthDay = yearNow - year;
                let time = d.getTime();
                let timeNew = dNew.getTime();
                let daysOld = Math.floor((time - timeNew) / (24 * 3600 * 1000));
                if ($(this).val() === '' && date === '') {
                    console.log("1");
                    $(this).css("border-bottom", "1px solid red");
                    flag = false;
                    return
                } else if (daysOld <= 42) {
                    console.log("2");
                    flag = false;
                    return

                } else if (birthDay > 75) {
                    console.log("3");
                    flag = false;
                    return
                }
                // else if (daysOld > 42 && birthDay < 15 && $(this).val() == '') {
                //     console.log("2")
                //     $(this).css("border-bottom", "1px solid red");
                //     flag = false;
                //     return

                // } 
                else if ((42 < daysOld && birthDay <= 75) && $(this).val() == '') {
                    console.log("null")
                    $(this).css("border-bottom", "1px solid red");
                    flag = false;
                    return
                } else {
                    console.log("zzzz")
                    $(this).css("border-bottom", "1px solid #b3b3b3");
                }
            });
            console.log("flagPC6", flag)

            ///js check trùng id khi submit
            var arrrr = [];
            $('.table').find('.cmnd input').each(function (index) {


                var dt_n1 = $(this).val();
                if (index === 0) { } else {
                    // console.log("arrrr", arrrr)
                    arrrr.push(dt_n1);
                }
            });

            var data_top = $('.table').find('.cmnd').first().children("input").val();
            // console.log('flag', data_top);
            // console.log('arrrr', arrrr);
            // console.log(arrrr.includes(data_top));
            if (data_top != "" && arrrr.includes(data_top)) {
                flag = false;
                $('._show_error').text(MESS_IDNUMBER_ERROR);
                return $('#btn_submit_continue_check').addClass('is--hidden');
            }


            // Check neu duoi 14 tuoi va duoi 42 ngay tuoi thi chan khong cho di tiep
            if (oldInsurendmain == 0) {
                // console.log("1")
                err = "You are not reaching age of 15 to be the policy holder under legal regulation. But you could seek support from your parent to be policy holder while you are the insured."
                flag = false;
                return $('.error-message').text(err);

            } else if (birthDay < 14 || oldInsurendmain < 42) {
                console.log("2")
                flag = false;
            } else {
                console.log("3")
                $('.error-message').text("");


            }
            console.log("flag", flag);
            if (flag) {
                // $("#msg_confirm").addClass("is-active");
                let condition = true;
                controlStep(condition);
                $(".check_box").find(".check").css("display", "none");
            }

        }

    });

   
    // console.log(dataurl.width);

    // Back step2 PC
    $("a[data-src='tab-2']").click('on', function () {
        let condition = false;
        controlStep(condition)
        console.log("click back", condition);
    })

    // Back step2 PC
    $("#back-policy-detail").on('click', function (e) {
        let condition = false;
        controlStep(condition);
        console.log("click back", condition);
    });

    // Back step2 mobile 
    $("#back-policy-detail-mobile").on('click', function (e) {
        let condition = false;
        controlMobileStep(condition);
        console.log("click back mobile", condition);
    });


    // Function back data
    function controlStep(condition) {
        // let condition;
        let tabActive = $(".tab.is-active");
        let dtAttr2 = $('*[data-src="tab-2"]');
        let dtAttr3 = $('*[data-src="tab-3"]');
        const inputForm = $(".form").find("input");
        const selectForm = $(".form").find("select");
        const labelForm = $(".form").find(".custom-phone");
        const inputInsurend = $(".insurend_member").find("input")
        const labelInsurend = $(".insurend_member").find(".custom-phone")
        const selectInsurend = $(".insurend_member").find("select")
        const tdInsurend = $(".insurend_member").find("td")
        const iconInsurend = $('.form .date').find('i')
        const formSubmit = $("#form_submit_detail .control_bill.control")
        const boxForm = $(".box_form_confirm")
        // const checkInsurendMain = $(".check_box").find(".check") //Check box confirm insurend main
        const control = $(".control");
        const iconAdults = $(".date-calendear-adults").find("i")
        const iconChildren = $(".date-calendear-children").find("i")
        // var params = [removeClass, css, addClass];
        var elements = [inputForm,
            selectForm, labelForm, inputInsurend, labelInsurend, selectInsurend,
            tdInsurend, iconInsurend, formSubmit, boxForm, //checkInsurendMain,
            control, iconAdults, iconChildren]

        elements.forEach(element => {

            console.log(condition);
            if (condition) {
                console.log("flag next")
                element.css('border-bottom', 'none');
                element.addClass('is-back');
                tabActive.removeClass('is-active');
                dtAttr3.addClass('is-active');
                return elements, tabActive, dtAttr3;
            }

            else {
                console.log("flag back")
                element.css('border-bottom', '1px solid #b3b3b3');
                element.removeClass('is-back');
                tabActive.removeClass('is-active');
                dtAttr2.addClass('is-active');
                let check = $(".check_box").find(".check").css("display", "flex");
                $('.control').css('border-bottom', 'none');
                return elements, tabActive, dtAttr2, check;
            }
        });

        // return;

    }

    // Function mobile back data
    function controlMobileStep(condition) {
        let tabActive = $(".tab.is-active")
        const dtAttr2 = $('*[data-src="tab-2"]')
        const dtAttr3 = $('*[data-src="tab-3"]')
        const inputForm = $(".mobile_form").find("input")
        const inputInsurend = $(".mobile_insurend_member").find("input")
        const dateFormMobile = $(".mobile_insurend_member").find(".date_form_mobile")
        const selectForm = $(".mobile_form").find("select")
        const labelForm = $(".form").find("label")
        const selectInsurend = $(".mobile_insurend_member").find("select")
        const customPhone = $(".form-policy").find('.custom-phone')
        const iconDate = $('.mobile_form .date').find('label')
        const iconDateForm = $('.date_form_mobile').find('i')
        const boxFormMobile = $(".mobile_box_form_confirm .box_form_confirm_m")
        const control = $(".control")
        const controlBill = $(".control_bill.control")
        const check = $(".check_box").find(".check")

        var elements = [tabActive, dtAttr3, inputForm, inputInsurend,
            selectForm, labelForm, selectInsurend, customPhone
            // customPhone,dateFormMobile
            // iconDate, iconDateForm, //boxFormMobile, control, controlBill, check

        ]
        elements.forEach(element => {

            console.log(condition);
            if (condition) {
                console.log("flag next")
                element.css({
                    'border-bottom': 'none',
                    'pointer-events': 'none'
                });
                boxFormMobile.addClass('is-back');
                control.addClass('is-back');
                controlBill.addClass('is-back');
                iconDate.css('display', 'none');
                iconDateForm.css('display', 'none');
                tabActive.removeClass('is-active');
                dtAttr3.addClass('is-active');
                check.css({
                    'display': 'none',
                });
                return elements, tabActive, dtAttr3;
            }
            else {
                console.log("flag back")
                element.css({
                    'border-bottom': '1px solid #b3b3b3',
                    'pointer-events': 'auto'
                });

                boxFormMobile.removeClass('is-back');
                control.removeClass('is-back');
                controlBill.removeClass('is-back');
                iconDate.css('display', 'inline-block');
                iconDateForm.css('display', 'inline-block');
                tabActive.removeClass('is-active');
                dtAttr2.addClass('is-active');
                check.css({
                    'display': 'flex',
                });
                return elements, tabActive, dtAttr2, check;
            }
        });


    }



    // Check confirm cuoi cung
    $("#btn_submit_continue").on("click", function () {
        let flag = true;
        let inputBill = $(".box_form_confirm").find(".check_group .check:last-child");
        let inputBillMobile = $(".box_form_confirm_m").find(".check_group .check:last-child");
        // Confirm dieu khoan
        if (!$("#checkbox1").is(':checked')) {
            $('.message_bill').addClass('is-active');
            flag = false;
            // return false;
        } else {
            $('.message_bill').removeClass('is-active');
        }
        // Check PC if input chua tich thi se thong bao yeu cau xuat hoa don
        if (inputBill.find("input").is(":checked")) {
            const validateEmail = (email) => {
                return email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            };
            const validate = () => {
                const $result = $('._show_error');
                const email = $("input[name='vatinfo[email]']").val();
                $result.text('');
                if (validateEmail(email)) {
                    $('.message_confirm').removeClass('is-active');
                } else if (email == '') {
                    $result.text(MESS_ALL);
                    $result.css('color', 'red');
                    return false;
                } else {
                    console.log("Email không đúng định dạng");
                    $result.text(MESS_EMAIL_FORMAT);
                    $result.css('color', 'red');
                    return false;
                }
                return false;
            }

            validate($("input[name='vatinfo[email]']"));
            console.log('validate', flag)
            $('#form_submit_detail .box_form_confirm .form_container').find('input').each(function (index) {
                if ($(this).val() == "") {
                    console.log('msg null')
                    $('.message_confirm').addClass('is-active');
                    return false;
                } else {
                    console.log('flagMessage', flag);
                    $('.message_confirm').removeClass('is-active');
                }
            });
        }
        console.log('flag end', flag);
    });

    $("#btn_submit_confirm_m").on("click", function () {
        // Confirm dieu khoan
        let flag = true;
        console.log("click done");
        $("#form_submit_detail").remove();
        if (!$("#checkbox1").is(':checked')) {
            flag = false
            $('.message_bill').addClass('is-active');
            return
        } else {
            $('.message_bill').removeClass('is-active');
        };

        // Check mobile if input chua tich thi se thong bao yeu cau xuat hoa don

        if ($('.box_form_confirm_m #checkbox2').is(":checked")) {
            const validateEmail = (email) => {
                return email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            };

            const validate = () => {
                const $result = $('._show_error');
                const email = $("input[name='vatinfo[email]']").val();
                $result.text('');
                if (validateEmail(email)) {
                    flag = true;
                } else if (email == '') {
                    $result.text(MESS_ALL);
                    $result.css('color', 'red');
                    return false;
                } else {
                    console.log("Email is not valid")
                    $result.text(MESS_EMAIL_FORMAT);
                    $result.css('color', 'red');
                    return false;
                }
                return flag;
            }

            validate($("input[name='vatinfo[email]']"));
            console.log('validate', flag)

            $('.box_form_confirm_m .form_container').find('input').each(function (index) {
                if ($(this).val() == "") {
                    console.log("falseeeeeeeeeeeee")
                    $('.box_form_confirm_m').find('.message_confirm').addClass('is-active');
                    return false;
                } else {
                    console.log("aaaaaaaaaaaaaaaaaaaaaaaa")
                    $('.box_form_confirm_m .message_confirm').removeClass('is-active');
                }
            });
        }
        console.log("flagEnd", flag);
    });
});