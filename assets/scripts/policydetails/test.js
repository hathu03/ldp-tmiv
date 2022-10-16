
jQuery(document).ready(function () {

    let width = screen.width;
    let inputBill = $(".box_form_confirm").find(".check_group .check:last-child");
    let inputBillMobile = $(".box_form_confirm_m").find(".check_group .check:last-child");

    // Check neu tren 75 tuoi thi khong duoc phep tham gia bao hiem PC
    $("#form_submit_detail #date_birth").change(function () {
        const d = new Date();
        const year_now = d.getFullYear();
        date = $("input[name='insured[dateOfBirth]']").val();
        year = date.split("/");
        const birthDay = year_now - year[2];
        if (birthDay > 75) {
            $('#form_submit_detail .check_box .check').css("display", "none");
        } else {
            $('#form_submit_detail .check_box .check').css("display", "flex");
        }
    })



    // Check neu tren 75 tuoi thi khong duoc phep tham gia bao hiem mobile
    $("#form_submit_detail_mobile #date_birth").change(function () {
        const d = new Date();
        const year_now = d.getFullYear();
        date = $("input[name='insured[dateOfBirth]']").val();
        year = date.split("/");
        const birthDay = year_now - year[2];
        if (birthDay > 75) {
            $('#form_submit_detail_mobile .check_box .check').css("display", "none");
        } else {
            $('#form_submit_detail_mobile .check_box .check').css("display", "flex");
        }
    })

    // Check khi chua click o 2 man hinh
    if (width <= 768) {
        $('#form_submit_detail').remove();

        // DOM khi click se xuat hien mobile
        ///js add row to table ->start//
        var indexMobile = 0;
        $(".mobile_insurend_member").find(".form_mobile").each(function (index) {
            indexMobile = indexMobile + 1;

        });
        var l10n = { getText: function (e) { return e; } }
        $('.table.adults').append($(` <div id="insurend_main_m" class="form_mobile">
        <div class="form_group_mobile">
            <label for="">${l10n.getText('Full name')} <span>*</span></label>
            <input autocomplete="off" required type="text" name="additionalinsured[${indexMobile}][insuredName]">
        </div>
        <div class="form_group_mobile">
            <label for="">${l10n.getText('Date of birth')} <span>*</span></label>
            <div class="date_form_mobile">
                <label for="" class="custom-phone"></label>
                <input autocomplete="off" required type="text" data-type="date-picker-mb" name="additionalinsured[${indexMobile}][dateOfBirth]" id="datefilter_adults[0]" class="date_m" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
                <i class="fa fa-calendar" aria-hidden="true"></i>
            </div>
        </div>
        <div class="form_group_mobile cmnd_mobile">
            <label for="">${l10n.getText('ID number')} <span>*</span></label>
            <input autocomplete="off" required type="text" name="additionalinsured[${indexMobile}][insuredIDNumber]" class="cmnd_m js-cmnd-duplicate-m">
            <p></p>
        </div>
        <div class="form_group_mobile">
            <div class="gender">
                <label for="">${l10n.getText('Gender')} <span>*</span></label>
                <select required name="additionalinsured[${indexMobile}][gender]">
                    <option value=""></option>
                    <option value="1">${l10n.getText('Male')}</option>
                    <option value="2">${l10n.getText('Female')}</option>
                </select>
            </div>

            <div class="gender">
                <label for="">${l10n.getText('Relationship with Policy Holder')}<span>*</span></label>
               <input type="hidden" name="additionalinsured[${indexMobile}][Adult]" value="1" />
                <select required name="additionalinsured[${indexMobile}][relationship]">
                    <option value=""></option>
                    <option value="Husband">${l10n.getText('Husband')}</option>
                    <option value="Wife">${l10n.getText('Wife')}</option>
                    <option value="Father">${l10n.getText('Father')}</option>
                    <option value="Mother">${l10n.getText('Mother')}</option>
                    <option value="Relative">${l10n.getText('Relative')}</option>
                    <option value="Group's Member">${l10n.getText('Group"s Member')}</option>
                </select>
            </div>
        </div>
        <div class="form_group_mobile">
            <div class="nationlity">
                <label for="">${l10n.getText('Nationality')} <span>*</span></label>
                <select required id="nationality2" class="nationality" name="additionalinsured[${indexMobile}][nationality]">
                    <option value=""></option>
                    <option value="VN">Viet Nam</option>
                    <option value="TL">Thai Lan</option>
                </select>
            </div>
        </div>

    </div>`));


        // Check xem co phai la nguoi lam bao hiem khong , se tu dong xoa 1 cot khi tich vao mobile
        $("#form_submit_detail_mobile .check").find("#checkbox").on('change', function () {
            if ($("#form_submit_detail_mobile #checkbox").is(":checked") == true) {
                $("._dom-out-m").html("");
                $('.mobile_insurend_member').find('#insurend_main_m').appendTo("._dom-out-m");
                $("#insurend_main_m .form_group_mobile").find("input").val("");
                $("#insurend_main_m .form_group_mobile").find("select").val("");
                $("#insurend_main_m .form_group_mobile").find("p").text("");
                $(".table.adults #insurend_main_m .form_group_mobile").find(".cmnd_m").prop("disabled", false);
                $("#insurend_main_m .form_group_mobile").find(".cmnd_mobile").removeClass("is-active");
                $("#msg_confirm").addClass('is-active');

            } else {
                $("#msg_confirm").removeClass('is-active');
                $trLast = $(".table.adults .form_mobile:first-child");
                $("._dom-out-m .form_group_mobile").find("input").val("");
                $("._dom-out-m .form_group_mobile").find("select").val("");
                $("._dom-out-m .form_group_mobile").find("p").text("");
                $("._dom-out-m .form_group_mobile").find(".cmnd_m").prop("disabled", false);
                $("._dom-out-m .form_mobile").find(".cmnd_mobile").removeClass("is-active");
                $trNew = $("._dom-out-m .form_mobile").appendTo($(".table.adults"));
                $trLast.after($trNew);
                return
                // end
            }
        });

    } else if (width > 768) {
        $('#form_submit_detail_mobile').remove();
        ///index_totaljs add row to table ->start//
        var index_total = 0;

        if ($("#form_submit_detail .children").length > 0) {
            var index_total = $("#insurend_member").find("tr").length;
            index_total = index_total - 2;


        } else {
            var index_total = $("#insurend_member").find("tr").length;
            index_total = index_total - 1;
        }


        var l10n = { getText: function (e) { return e; } }
        // DOM khi click thi se xuat hien PC 
        $(".adults .content_table tbody").append($(`<tr id="insurend_main">
        <td><input autocomplete="off" required type="text" name="additionalinsured[${index_total}][insuredName]"></td>
        <td class="date-calendear-adults">
           <label for="" class="custom-phone"></label>
            <input autocomplete="off" required type="text" name="additionalinsured[${index_total}][dateOfBirth]" id="datefilter_adults[${index_total - 2}]" class="datefilter_adults" data-type="date-picker" onkeypress='return event.charCode >1000 && event.charCode <= -10000' class="phone_number">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <div class="_error_msg"></div>
        </td>
        <td class="cmnd">
            <p></p><input autocomplete="off" required type="text" name="additionalinsured[${index_total}][insuredIDNumber]" class="cmnd_adults_ js-cmnd-duplicate">
        </td>
        <td>
            <select required name="additionalinsured[${index_total}][gender]">
                <option value=""></option>
                <option value="1">${l10n.getText('Male')}</option>
                <option value="2">${l10n.getText('Female')}</option>
            </select>
            <div class="_error_msg"></div>
        </td>
        <td>
           <input type="hidden" name="additionalinsured[${index_total}][Adult]" value="1" />
            <select required name="additionalinsured[${index_total}][relationship]">
                <option value=""></option>
                <option value="Husband">${l10n.getText('Husband')}</option>
                <option value="Wife">${l10n.getText('Wife')}</option>
                <option value="Father">${l10n.getText('Father')}</option>
                <option value="Mother">${l10n.getText('Mother')}</option>
                <option value="Relative">${l10n.getText('Relative')}</option>
                <option value="Group's Member">${l10n.getText('Group"s Member')}</option>
            </select>
            <div class="_error_msg"></div>
        </td>
        <td>
            <select required id="nationality${index_total}" class="nationality" name="additionalinsured[${index_total}][nationality]">
                <option value=""></option>
                <option value="VN">Viet Nam</option>
                <option value="TL">Thai Lan</option>
            </select>
            <div class="_error_msg"></div>

        </td>
    </tr>`));

    }

    //Auto fill when checked
    $("#form_submit_detail .check").find("#checkbox").on('change', function () {

        function inputKeyUp(inputValue, param) {
            let trInsurendMain = $(".table.adults #insurend_main")
            return trInsurendMain.find(param).val(inputValue);
        }

        function inputUnbind(param, event) {
            return param.unbind(event);
        }


        if ($(this).is(':checked')) {
            $("#full_name").keyup(function () {
                inputKeyUp($(this).val(), "input[name='additionalinsured[3][insuredName]");
            })

            $(".id_citizenship").keyup(function () {
                inputKeyUp($(this).val(), "input[name='additionalinsured[3][insuredIDNumber]");
            })

            $("#date_birth").keyup(function () {
                let trInsurendMain = $(".table.adults #insurend_main")
                trInsurendMain.find('.custom-phone').text($(this).val());
            });

            $(".gender").keyup(function () {
                inputKeyUp($(this).val(), "select[name='additionalinsured[3][gender]");
            });
        }


        else {
            inputUnbind($("#full_name"), 'keyup')
            $("input[name='additionalinsured[3][insuredName]").val("");


            inputUnbind($(".id_citizenship"), 'keyup')
            $("input[name='additionalinsured[3][insuredIDNumber]").val("");

            inputUnbind($("#date_birth"), 'keyup')
            $(".table.adults #insurend_main").find('.custom-phone').text("");


            inputUnbind($(".gender"), 'keyup')
            $("select[name='additionalinsured[3][gender]").val("");
        }
    });



    $(".nationality").each(function (index) {
        $(this).hover(function () {
            // console.log($(this).children("option:selected").text());
            let optionSelected = $(this).children("option:selected").text();
            if (optionSelected != '') {
                $(this).siblings('.__tootip').html(optionSelected);
                $(this).siblings('.__tootip').addClass('is-hover');
            }
            // console.log(optionSelected);

        }, function () {
            $(this).siblings('.__tootip').removeClass('is-hover');
        });
    });

    // Check onchange bill confirm
    inputBill.on("change", function () {
        if (inputBill.find("input").is(':checked')) {
            $(".box_form_confirm").find(".form_container").css("display", "block");
        } else {
            $(".box_form_confirm").find(".form_container").css("display", "none");
        }
    });

    // Check onchange mobile
    inputBillMobile.on("change", function () {
        if (inputBillMobile.find("input").is(':checked')) {
            $(".box_form_confirm_m").find(".form_container").css("display", "block");
        } else {
            $(".box_form_confirm_m").find(".form_container").css("display", "none");
        }
    });

    // Fill data custom input file PC
    if (width > 769) {
        $("#id_citizenship_mt").on("change", function () {
            $(this).siblings('a').text($(this).val().split('\\').pop());
            let dataImg = document.getElementById("id_citizenship_mt");
            href = window.URL.createObjectURL(dataImg.files[0])
            $(this).siblings('a').attr('href', href);

        });

        $("#id_citizenship_ms").on("change", function () {
            $(this).siblings('a').text($(this).val().split('\\').pop());
            let dataImg = document.getElementById("id_citizenship_ms");
            href = window.URL.createObjectURL(dataImg.files[0])
            $(this).siblings('a').attr('href', href);

        });

        $("#date_birth").on("change", function () {
            $(this).siblings('.custom-phone').text($(this).val());
        });




    }
    //Fill data custom input mobile
    else if (width <= 768) {
        $("#id_citizenship_mt_m").on("change", function () {
            const nameHref = $(this).siblings('a').text($(this).val().split('\\').pop());
            let dataImg = document.getElementById("id_citizenship_mt_m");
            href = window.URL.createObjectURL(dataImg.files[0])
            $(this).siblings('a').attr('href', href);
        });

        $("#id_citizenship_ms_m").on("change", function () {
            $(this).siblings('a').text($(this).val().split('\\').pop());
            let dataImg = document.getElementById("id_citizenship_ms_m");
            href = window.URL.createObjectURL(dataImg.files[0])
            $(this).siblings('a').attr('href', href);

        });

        $("#date_birth").on("change", function () {
            $(this).siblings('.custom-phone').text($(this).val());
        });
    }


    // CHeck Quan He Gia Dinh
    var data_check = $("#check_family").attr("data-head");
    if (data_check == 'faild') {
        $("option[value=other]").prop('disabled', true);

    }
    $('#form_submit_detail_mobile').submit(function (e) {
        e.preventDefault();
    });

    // Show mock up PC
    $("#popup_bill_confirm").on("click", function (e) {
        $(".overlay_container").css("display", "flex");
    });

    $(".overlay_container").on("click", function (e) {
        $(this).css("display", "none");

    })
    $('.contract_form').on("click", function (e) {
        e.stopPropagation();
    })
    // Show mock up mobile
    $(".mobile_box_form_confirm #popup_bill_confirm_m").on("click", function (e) {
        $(".overlay_container").css("display", "flex");
    });

    $(".mobile_box_form_confirm .overlay_container").on("click", function (e) {
        $(this).css("display", "none");

    })
    $('.mobile_box_form_confirm .contract_form').on("click", function (e) {
        e.stopPropagation();
    })



    // message
    const MESS_IDNUMBER = 'Citizens who are less than 14 years old do not need to declare ID';
    const MESS_BIRTHDAY = 'You are over 75 years of age to be insured under this insurance policy.';
    const MESS_BIRTHDAY_1 = 'You are over 75 years of age to be insured under this insurance policy. But you could still be the policy holder to help other members in your group apply for this insurance.';
    const MESS_BIRTHDAY_CHILDREN = 'You are not reaching age of 15 to be the policy holder under legal regulation. But you could seek support from your parent to be policy holder while you are the insured.'
    const MESS_CHILDREN = 'Only kids from 42 days of age or above could be insured under this policy.';
    const MESS_ALL = 'Please enter full information!';
    const MESS_IDNUMBER_ERROR = 'Identity card number must not be duplicated';

    // ---------------------------
    const width_content = $(window).width();
    const number_tr_adults_ = $('.adults .content_table table tbody tr').length;
    const number_tr_adults = number_tr_adults_ - 1;
    const number_tr_children_ = $('.children .content_table table tbody tr').length;
    const number_tr_children = number_tr_children_ - 1;

    //mobile
    const number_form_adults = $('.adults .form_mobile').length;
    const number_form_children = $('.children .form_mobile').length;




    $('input[class="date-picker"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        autoApply: true,
        maxYear: parseInt(moment().format('DD'), 10),
        maxDate: new Date(),
        locale: {
            format: 'DD/MM/YYYY'
        }

    });



    $('input[class="date-picker"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
        var date = picker.startDate.format('YYYY');
        var d = new Date();
        var year_now = d.getFullYear();
        var birthDay = year_now - date;
        // console.log('inputCheck', inputCheck);

        if (birthDay > 75) {
            console.log("2")
            $('#btn_submit_continue_m').removeClass('is--hidden')
            $('#btn_submit_continue_check').removeClass('is--hidden')
            return $('.error-message').text(MESS_BIRTHDAY_1);
        }

        if (birthDay < 15) {
            $('#btn_submit_continue_m').addClass('is--hidden')
            $('#btn_submit_continue_check').addClass('is--hidden')
            return $('.error-message').text(MESS_BIRTHDAY_CHILDREN);
        }
        console.log('222')
        $('#btn_submit_continue_check').removeClass('is--hidden')
        $('#btn_submit_continue_m').removeClass('is--hidden')
        return $('.error-message').text('');
    });


    $('.date-calendear-adults').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1910,
        autoApply: true,
        maxYear: parseInt(moment().format('YYYY'), 10),
        maxDate: new Date(),
        locale: {
            format: 'YYYY/MM/DD'
        }
    });

    $(".content_travelmate").find('.date-calendear-adults').on('apply.daterangepicker', function (ev, picker) {
        $(this).find('input[class="datefilter_adults"]').val(picker.startDate.format('DD/MM/YYYY'));
        let date = picker.startDate.format('YYYY');
        let d = new Date();
        let year_now = d.getFullYear();
        let birthday = year_now - date;

        let time = d.getTime();
        let day = picker.startDate.format('DD-MM-YYYY');
        let dNew = new Date(picker.startDate);
        let timeNew = dNew.getTime();
        let daysOld = Math.floor((time - timeNew) / (24 * 3600 * 1000));

        // Fill data 
        $('input[class="datefilter_adults"]').each(function (index, input) {
            $('.date-calendear-adults').eq(index).find('.custom-phone').text($(this).val());
        })

        if (daysOld < 42) {
            $(this).parent().find('.cmnd p').text(MESS_CHILDREN);
            $(this).next().find('p').css('color', 'red');
            $(this).next('td').find('input').val("");
            $(this).next('td').find('input').prop('disabled', true);
            $(this).parent().find('.cmnd').addClass('is-active');
            return $('#btn_submit_continue').addClass('is--hidden');
        } else if (birthday > 75) {
            $(this).parent().find('.cmnd p').text(MESS_BIRTHDAY);
            $(this).next().find('p').css('color', 'red');
            $(this).next('td').find('input').val("");
            $(this).next('td').find('input').prop('disabled', true);
            $(this).parent().find('.cmnd').addClass('is-active');
            return
            $('#btn_submit_continue').addClass('is--hidden');
        } else if (birthday < 14) {
            $(this).parent().find('.cmnd p').text(MESS_IDNUMBER);
            $(this).next().find('p').css('color', '#1B1B1B');
            $(this).next('td').find('input').val("");
            $(this).next('td').find('input').prop('disabled', true);
            $(this).parent().find('.cmnd').addClass('is-active');
            return $('#btn_submit_continue').removeClass('is--hidden');

        } else {
            $(this).parent().find('.cmnd p').text('');
            $(this).next().find('.cmnd p').css('color', '#1B1B1B')
            $(this).next('td').find('input').prop('disabled', false);
            $(this).parent().find('.cmnd').removeClass('is-active');
            return $('#btn_submit_continue').removeClass('is--hidden');

        }
        return $('#btn_submit_continue').removeClass('is--hidden');

    });


    $('.date-calendear-children').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        autoApply: true,
        maxYear: parseInt(moment().format('YYYY'), 10),
        maxDate: new Date(),
        locale: {
            format: 'DD/MM/YYYY'
        }
    });

    $('.date-calendear-children').on('apply.daterangepicker', function (ev, picker) {
        $(this).find('input[class="datefilter_children"]').val(picker.startDate.format('DD/MM/YYYY'));
        var date = picker.startDate.format('YYYY');
        var d = new Date();
        var year_now = d.getFullYear();
        var birthday = year_now - date;
        let time = d.getTime();
        let day = picker.startDate.format('DD-MM-YYYY');
        let dNew = new Date(picker.startDate);
        let timeNew = dNew.getTime();
        let daysOld = Math.floor((time - timeNew) / (24 * 3600 * 1000));
        // Fill data 
        $('input[class="datefilter_children"]').each(function (index, input) {
            $('.date-calendear-children').eq(index).find('.custom-phone').text($(this).val());
        })
        if (daysOld < 42) {
            $(this).parent().find('.cmnd p').text(MESS_CHILDREN);
            $(this).next().find('p').css('color', 'red');
            $(this).next('td').find('input').val("");
            $(this).next('td').find('input').prop('disabled', true);
            $(this).parent().find('.cmnd').addClass('is-active');
            return $('#btn_submit_continue').addClass('is--hidden');
        } else if (birthday < 14) {
            $(this).parent().find('.cmnd p').text(MESS_IDNUMBER);
            $(this).next().find('p').css('color', '#1B1B1B')
            $(this).next('td').find('input').val("");
            $(this).next('td').find('input').prop('disabled', true);
            $(this).parent().find('.cmnd').addClass('is-active');
            return $('#btn_submit_continue').removeClass('is--hidden');
        } else if (birthday > 75) {
            $(this).parent().find('.cmnd p').text(MESS_BIRTHDAY);
            $(this).next().find('p').css('color', 'red');
            $(this).next('td').find('input').val("");
            $(this).next('td').find('input').prop('disabled', true);
            $(this).parent().find('.cmnd').addClass('is-active');
            return $('#btn_submit_continue').addClass('is--hidden');
        } else {
            $(this).parent().find('.cmnd p').text('');
            $(this).next().find('p').css('color', '#1B1B1B')
            $(this).next('td').find('input').prop('disabled', false);
            $(this).parent().find('.cmnd').removeClass('is-active');
            return $('#btn_submit_continue').removeClass('is--hidden');
        }
        return $('#btn_submit_continue').removeClass('is--hidden');
    });

    $('.date_form_mobile').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        autoApply: true,
        maxYear: parseInt(moment().format('YYYY'), 10),
        maxDate: new Date(),
        locale: {
            format: 'DD/MM/YYYY'
        }
    });

    $('.date_form_mobile').on('apply.daterangepicker', function (ev, picker) {

        $(this).find('input[class="date_m"]').val(picker.startDate.format('DD/MM/YYYY'));
        var date = picker.startDate.format('YYYY');
        var d = new Date();
        var year_now = d.getFullYear();
        var birthday = year_now - date;

        let time = d.getTime();
        let day = picker.startDate.format('DD-MM-YYYY');
        let dNew = new Date(picker.startDate);
        let timeNew = dNew.getTime();
        let daysOld = Math.floor((time - timeNew) / (24 * 3600 * 1000));

        if (daysOld < 42) {
            $(this).parent().parent().find('.cmnd_mobile p').text(MESS_CHILDREN);
            $(this).parent().next().find('p').css('color', 'red');
            $(this).parent().next().find('.cmnd_m').val("");
            $(this).parent().next().find('input').prop('disabled', true);
            $(this).parent().parent().find('.cmnd_mobile').addClass('is-active');
            return $('#btn_submit_continue').addClass('is--hidden');
        } else if (birthday < 14) {
            $(this).parent().parent().find('.cmnd_mobile p').text(MESS_IDNUMBER);
            $(this).parent().next().find('p').css('color', '#1B1B1B')
            $(this).parent().next().find('.cmnd_m').val("");
            $(this).parent().next().find('input').prop('disabled', true);
            $(this).parent().parent().find('.cmnd_mobile').addClass('is-active');
            return $('#btn_submit_continue').removeClass('is--hidden');
        } else if (birthday > 75) {
            $(this).parent().parent().find('.cmnd_mobile p').text(MESS_BIRTHDAY);
            $(this).parent().next().find('p').css('color', 'red')
            $(this).parent().next().find('.cmnd_m').val("");
            $(this).parent().next().find('input').prop('disabled', true);
            $(this).parent().parent().find('.cmnd_mobile').addClass('is-active');
            return $('#btn_submit_continue').addClass('is--hidden');
        } else {
            $(this).parent().parent().find('.cmnd_mobile p').text('');
            $(this).parent().next().find('p').css('color', '#1B1B1B');
            $(this).parent().next().find('input').prop('disabled', false);
            $(this).parent().parent().find('.cmnd_mobile').removeClass('is-active');
            return $('#btn_submit_continue').removeClass('is--hidden');
        }
        return $('#btn_submit_continue').removeClass('is--hidden');
    });

    checkbox.onclick = function (e) {
        let valueBirthDay = $('#date_birth').val();
        let date = new Date(valueBirthDay);
        let year = date.getFullYear();
        let d = new Date();
        let yearNow = d.getFullYear();
        let birthDay = yearNow - year;
        if (this.checked && birthDay > 75) {
            $('#btn_submit_continue_check').addClass('is--hidden')
            $('.error-message').text(MESS_BIRTHDAY_1);
            return $('#btn_submit_continue_check').addClass('is--hidden');
        }
        if (birthDay < 15) {
            $('#btn_submit_continue_check').addClass('is--hidden')
            $('.error-message').text(MESS_BIRTHDAY_CHILDREN);
            return $('#btn_submit_continue_check').addClass('is--hidden');
        };
        $('#btn_submit_continue_check').removeClass('is--hidden')
        $('.error-message').text('');
        return $('#btn_submit_continue_check').removeClass('is--hidden');
    };

    keyUpIDNumber = (El) => {
        $(El).keyup(function () {
            let valueArr = [];
            const citizenshipIDValue = $('.id_citizenship').val();
            if (citizenshipIDValue) {
                valueArr.push(citizenshipIDValue);
            }
            let cmndDuplicateObj = $(El);
            cmndDuplicateObj.each(index => {
                const value = cmndDuplicateObj[index].value;
                if (value) {
                    valueArr.push(value);
                }
            });

            let valueDuplicator = valueArr.filter((item, index) => valueArr.indexOf(item) !== index);
            if (valueDuplicator && valueDuplicator.length !== 0) {
                $('._show_error').text(MESS_IDNUMBER_ERROR);
                return $('#btn_submit_continue_check').addClass('is--hidden');
            }
            $('._show_error').text('');
            return $('#btn_submit_continue_check').removeClass('is--hidden');
        });
    }

    // Mobile
    keyUpIDNumberMobile = (El) => {
        $(El).keyup(function () {
            let valueArr = [];
            const citizenshipIDValue = $('.id_citizenship').val();
            if (citizenshipIDValue) {
                valueArr.push(citizenshipIDValue);
            }
            let cmndDuplicateObj = $(El);
            cmndDuplicateObj.each(index => {
                const value = cmndDuplicateObj[index].value;
                if (value) {
                    valueArr.push(value);
                }
            });

            let valueDuplicator = valueArr.filter((item, index) => valueArr.indexOf(item) !== index);
            if (valueDuplicator && valueDuplicator.length !== 0) {
                $('._show_error').text(MESS_IDNUMBER_ERROR);
                return $('#btn_submit_continue_m').addClass('is--hidden');
            }
            $('._show_error').text('');
            return $('#btn_submit_continue_m').removeClass('is--hidden');
        });
    }

    if (width_content < 769) {
        $('table input').prop('disabled', true);
        keyUpIDNumberMobile('.js-cmnd-duplicate-m')
    } else {
        keyUpIDNumber('.js-cmnd-duplicate');
    }

    $('#form_submit_detail').submit(function (e) {
        e.preventDefault();
        let flag = true;

        // const full_name = $('#form_submit_detail [type="text"].insured[insuredName]').val();
        // const email = $('[#form_submit_detail type="mail"].insured[email]').val();
        // const phone_number = $('#form_submit_detail [type="text"].insured[atPhoneNo]').val();
        // const date_picker = $('#form_submit_detail [type="text"].insured[dateOfBirth]').val();
        // const city = $('#form_submit_detail select[name=stateprovinceid]').val();
        // const district = $('#form_submit_detail select[name=districtid]').val();
        // const gender = $('#form_submit_detail select[name=insured[gender]]').val();

        // if ((full_name == "") || (email == "") || (phone_number == "") || (date_picker == "") || (city == "") || (district == "") || (gender == "")) {
        //     flag = false;
        // }


        if (width_content > 768) {
            for (var i = 0; i < number_tr_adults; i++) {
                const Fullname_adults = $('#form_submit_detail input[name="additionalinsured[' + i + '][insuredName]"]').val();
                const datefilter_adults = $('#form_submit_detail input[name="additionalinsured[' + i + '][dateOfBirth]"]').val();
                const cmnd_id_adults = $('#form_submit_detail input[name="additionalinsured[' + i + '][insuredIDNumber]"]').val();
                const attr_cmnd_id_adults = $('#form_submit_detail input[name="cmnd_id_adults[' + i + ']"]').attr('disabled');
                const gender_adults = $('#form_submit_detail select[name="additionalinsured[' + i + '][gender]"]').val();
                const relation_adults = $('#form_submit_detail input[name="additionalinsured[' + i + '][relationship]"]').val();
                const nationality_adults = $('#form_submit_detail input[name="additionalinsured[' + i + '][nationality]"]').val();

                // if ((Fullname_adults == "") || (relation_adults == "") || (datefilter_adults == "") || (cmnd_id_adults == "" && attr_cmnd_id_adults == undefined) || (gender_adults == "") || (nationality_adults == "")) {
                //     flag = false;
                // }
            }

            // for (var j = 0; j < number_tr_children; j++) {
            //     var Fullname_children = $('input[name="fullname_children_[' + j + ']"]').val();
            //     var datefilter_children = $('input[name="datefilter_children[' + j + ']"]').val();
            //     var cmnd_id_children = $('input[name="cmnd_children_[' + j + ']"]').val();
            //     var attr_cmnd_id_children = $('input[name="cmnd_children_[' + j + ']"]').attr('disabled');
            //     var gender_children = $('select[name="gender_children_[' + j + ']"]').val();
            //     var nationality_children = $('input[name="nationality_children_[' + j + ']"]').val();
            //     if ((Fullname_children == "") || (datefilter_children == "") || (cmnd_id_children == "" && attr_cmnd_id_children == undefined) || (gender_children == "") || (nationality_children == "")) {
            //         flag = false;
            //     }
            // }
        } else {
            for (a = 0; a < number_form_adults; a++) {
                const Fullname_children = $('#form_submit_detail_mobile input[name="additionalinsured[' + a + '][insuredName]"]').val();
                const datefilter_children = $('#form_submit_detail_mobile input[name="additionalinsured[' + a + '][dateOfBirth]"]').val();
                const cmnd_id_children = $('#form_submit_detail_mobile input[name="additionalinsured[' + a + '][insuredIDNumber]"]').val();
                const attr_cmnd_id_children = $('#form_submit_detail_mobile input[name="cmnd_id_adults[' + a + ']"]').attr('disabled');
                const gender_children = $('#form_submit_detail_mobile select[name="additionalinsured[' + a + '][gender]"]').val();
                const relation_children = $('#form_submit_detail_mobile input[name="additionalinsured[' + a + '][relationship]"]').val();
                const nationality_children = $('#form_submit_detail_mobile input[name="additionalinsured[' + a + '][nationality]"]').val();

                // if ((Fullname_children == "") || (relation_children == "") || (datefilter_children == "") || (cmnd_id_children == "") || (gender_children == "") || (nationality_children == "")) {
                //     flag = false;
                // }
            }
            // for (b = 0; b < number_form_children; b++) {
            //     var fullname_children_m_ = $('input[name="fullname_children_m_[' + b + ']"]').val();
            //     var date_children_m = $('input[name="date_children_m[' + b + ']"]').val();
            //     var cmnd_m_children = $('input[name="cmnd_m_children[' + b + ']"]').val();
            //     var attr_cmnd_m_children = $('input[name="cmnd_m_children[' + b + ']"]').attr('disabled');
            //     var gender_children_m_ = $('select[name="gender_children_m_[' + b + ']"]').val();
            //     var nationlity_children_m = $('input[name="nationlity_children_m[' + b + ']"]').val();
            //     if ((fullname_children_m_ == "") || (date_children_m == "") || (cmnd_m_children == "" && attr_cmnd_m_children == undefined) || (gender_children_m_ == "") || (nationlity_children_m == "")) {
            //         flag = false;
            //     }
            // }
        }

        if (!flag) {
            return $('._show_error').text(MESS_ALL);
        }
        return $('._show_error').text('');
    });

    // Fech data JSON Country
    fetch('./countries.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const newData = $.map(data, function (item) {
                return {
                    text: item.name,
                    id: item.code,
                };
            });
            newData.sort(function (a, b) {
                return a.id - b.id;
            });
            newData.sort(function (a, b) {
                var nameA = a.text;
                var nameB = b.text;
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
            var listItems = newData.map(function (element) {
                return (`<option value=${element.id}>` + element.text + '</option>');
            })
            listItems.unshift(`<option value=""></option>`);
            // document.getElementById('nationality3').innerHTML = listItems.join('');
            // document.getElementById('nationality').innerHTML = listItems.join('');
            // // $("#nationality").innerHTML = listItems.join('');
            // document.getElementById('nationality1').innerHTML = listItems.join('');
            // // document.getElementById('nationality2').innerHTML = listItems.join('');

            // document.getElementById('nationality4').innerHTML = listItems.join('');

            $(".content_table").find("select[class='nationality']").each(function (index) {
                document.getElementById(`${$(this).attr("id")}`).innerHTML = listItems.join('');
            });

            $(".form_mobile").find("select[class='nationality']").each(function (index) {
                document.getElementById(`${$(this).attr("id")}`).innerHTML = listItems.join('');
            });
            $(".mobile_insurend_member .form_mobile").find("select[class='nationality']").each(function (index) {
                $(this).html(listItems.join(''));
            });
        })
        .catch(function (err) {
            console.log(err);
        });



    // Fetch data JSON City
    fetch('http://bvm.timevn.com/api/general/get-state-province-by?countryid=1&lang=vi')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const newData = $.map(data, function (item) {
                return {
                    text: item.name,
                    id: item.code,
                };
            });
            // sort by value
            newData.sort(function (a, b) {
                return a.id - b.id;
            });
            newData.sort(function (a, b) {
                var nameA = a.text;
                var nameB = b.text;
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });

            var listItems = newData.map(function (element) {
                return (`<option value=${element.id}>` + element.text + '</option>');
            })

            listItems.unshift(`<option value="">--</option>`);
            document.getElementById('city').innerHTML = listItems.join('');
            $("#form_submit_detail_mobile").find(".city").html(listItems.join(''));
        })
        .catch(function (err) {
            console.log(err);
        });



    // Fetch data JSON DIstrict
    fetch('http://bvm.timevn.com/api/general/get-state-province-by?countryid=1&lang=vi')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const newData = $.map(data, function (item) {
                return {
                    text: item.name,
                    id: item.code,
                };
            });
            newData.sort(function (a, b) {
                return a.id - b.id;
            });
            newData.sort(function (a, b) {
                var nameA = a.text;
                var nameB = b.text;
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });


            var listItems = newData.map(function (element) {
                return (`<option value=${element.id}>` + element.text + '</option>');
            });
            listItems.unshift(`<option value="">--</option>`);

            document.getElementById('state').innerHTML = listItems.join('');
            $("#form_submit_detail_mobile").find("#state").html(listItems.join(''));

        })
        .catch(function (err) {
            console.log(err);
        });



    // Cascading Dropdown Library Jquery
    $('.cascadingDropDown').ssdCascadingDropDown({
        nonFinalCallback: function (trigger, props, data, self) {

            if ($("." + props.group + "-" + props.target).attr("data-ready") != "yes") {
                setTimeout(function () {
                    $("." + props.group + "-" + props.target).val($("." + props.group + "-" + props.target).attr("data-val")).attr("data-ready", "yes").trigger("change");
                }, 120);
            }

            trigger.closest('form')
                .find('input[type="submit"]')
                .attr('disabled', true);

        },
        finalCallback: function (trigger, props, data) {

            if (props.isValueEmpty()) {
                trigger.closest('form')
                    .find('input[type="submit"]')
                    .attr('disabled', true);
            } else {
                trigger.closest('form')
                    .find('input[type="submit"]')
                    .attr('disabled', false);
            }

        }
    });
    setTimeout(function () {
        $(".CountryId").val(1).trigger("change");
    }, 12);


});
