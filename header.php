<?php

define('THEME_ASSETS',   './assets/images');
define('HOME_URL',   'https://go2e.io/');
define('FAVICON',  '/images/favicon.ico');
define('LOGO_LOGIN_ADMIN', '/images/logo-admin.png');
define('SCREEN_SHOT', '/screenshot.png');
define('NOT_IMAGE',  '/images/image-placeholder.png');
define('FACEBOOK_APP_ID', '');

$_siteInfo = array(
    'app_id' => FACEBOOK_APP_ID, // App Name: WEB
    'type' => 'website', // Need to be changed with each type of pages
    // 'title' => "Go to earn - Go to enjoy - Go to expand", // Site Title
    'url' =>  HOME_URL, // Permalink
    'image' => SCREEN_SHOT, // Screenshot, Thumbnail
    // 'description' => "Go2E is an innovative mobile solution for the next generation of fitness enthusiasts who want to be active on all levels: virtuality, socializing, and reality.", // Tagline, Excerpt
    // 'author' => 'go2e', // Change manually
);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tokio Marine</title>
    <link rel="shortcut icon" type="image/png" href="./assets/images/favicon.png">

    <link rel="stylesheet" href="./assets/stylesheets/sass/dist/agent.css">
    <link rel="stylesheet" href="./assets/stylesheets/sass/dist/font_en.css">
    <link rel="stylesheet" href="./assets/stylesheets/sass/dist/font_vi.css">
    <link rel="stylesheet" href="./assets/stylesheets/sass/dist/partials.css">
    <link rel="stylesheet" href="./assets/stylesheets/sass/dist/main.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="./assets/bower_components/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="./assets/bower_components/wowjs/css/libs/animate.css">
    <link rel="stylesheet" href="./assets/bower_components/aos/dist/aos.css">
    <link rel="stylesheet" href="./assets/bower_components/Swiper/dist/css/swiper.min.css">
    <link rel="stylesheet" href="./assets/bower_components/fancybox/dist/jquery.fancybox.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/scripts/daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" type="text/css"
        href="./assets/bower_components/jQuery.filer/jQuery.filer-1.3.0/css/jquery.filer.css" />
    <link rel="stylesheet" type="text/css"
        href="./assets/bower_components/jQuery.filer/jQuery.filer-1.3.0/css/themes/jquery.filer-dragdropbox-theme.css" />
    <link rel="stylesheet" type="text/css" href="./assets/scripts/jquery.autocomplete.css">

    <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js" type="text/javascript"> </script>
    <script src="./assets/scripts/main.js" type="text/javascript"></script>
    <script src="./assets/bower_components/jquery/dist/jquery.min.js" type="text/javascript"></script>
    <script src="./assets/bower_components/cascading-dropdown/src/jquery.cascading-drop-down.min.js"
        type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="./assets/bower_components/wowjs/dist/wow.min.js" type="text/javascript"></script>
    <script src="./assets/bower_components/aos/dist/aos.js" type="text/javascript"></script>
    <script src="./assets/bower_components/Swiper/dist/js/swiper.min.js" type="text/javascript"></script>
    <script src="./assets/bower_components/fancybox/dist/jquery.fancybox.min.js" type="text/javascript"></script>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="./assets/scripts/daterangepicker/daterangepicker.js"></script>
    <script type="text/javascript"
        src="./assets/bower_components/jQuery.filer/jQuery.filer-1.3.0/js/jquery.filer.min.js"></script>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="assets/scripts/main.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.js"></script>
    <link rel="stylesheet" href="./assets/bower_components/t_datepicker/css/t-datepicker.min.css">
    <link rel="stylesheet" href="./assets/bower_components/t_datepicker/css/t-datepicker-main.css">
    <script type="text/javascript" src="./assets/bower_components/t_datepicker/js/t-datepicker.min.js"></script>
    <script type="text/javascript" src="./assets/scripts/jquery.autocomplete.js"></script>
    <script type="text/javascript"
        src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>
    <script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHzMKxFZwvDfPecAj-67F7C6q5EnweVQE"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
</head>

<body>

    <header>
        <div class="wrap_menu">
            <a href="https://tokiomarine.com.vn/" class="main_logo_menu">
                <img src="./assets/images/home/logo.png" alt="">
            </a>
            <div class="main_menu">
                <ul class="menu">
                    <li><a href="#uu_dai">Ưu đãi riêng cho bạn</a></li>
                    <li><a href="#hotline">Hotline</a></li>
                    <li><a href="#quy_dinh">Quy định bồi thường</a></li>
                    <li><a href="#cau_hoi">Câu hỏi thường gặp</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div class="logo_mobile">
        <a href="#"><img src="./assets/images/home/logo.png" alt=""></a>
    </div>
    <div class="_coating_mobile"></div>
    <!-- <div class="_hotline _hotline_navigator">
        <a href="javascript:void(0)" class="_navigator js_pull">
            <span class="__pull"></span>
            <span class="__pull"></span>
            <span class="__pull"></span>
            <p class="open_menu open_close">Danh mục</p>
            <p class="close_menu open_close not_active">Close</p>
        </a>
        <a href="tel:0915341499" class="_call">
            <img src="./assets/images/home/call.png" alt="">
            <div class="__hotline">
                <p>Tư vấn</p>
                <p>0915 341 499</p>
            </div>
        </a>

        <a href="tel:19000000" class="_support">
            <img src="./assets/images/home/support.png" alt="">
            <div class="__hotline">
                <p>Hỗ trợ</p>
                <p>1900 0000</p>
            </div>
        </a>
    </div> -->
    <script>
    jQuery(document).ready(function($) {



        $('.wrap_menu .menu li a').click(function(e) {
            e.preventDefault();
            // alert('ok');
            let id_data_scroll = $(this).attr('href');
            console.log(id_data_scroll);
            $('html, body').animate({
                scrollTop: $(id_data_scroll).offset().top
            });
        });




        var screen_width = $(window).width();

        if (screen_width <= 768) {
            $('.js_pull').click(function() {
                $('.js_pull .__pull, header, ._coating_mobile').toggleClass('change');
                $('.js_pull .open_close').toggleClass('not_active');
            });
            $('._coating_mobile').click(function() {
                $('.js_pull .__pull, header, ._coating_mobile').toggleClass('change');
                $('.js_pull .open_close').toggleClass('not_active');
            });
        }

        if (screen_width <= 1024) {
            $('#js_menu>li>a>i').click(function(e) {
                e.preventDefault();
                $(this).parent().parent().find('ul').first().slideToggle(300);
                $(this).parent().parent().siblings().find('ul').slideUp(300);
            });

            $('._header_top > .nav_wrap > ul > li > a > i').on('click', function(e) {
                e.preventDefault();
                $(this).parent().parent().find('ul').first().slideToggle(300);
                $(this).parent().parent().siblings().find('ul').slideUp(300);
            });
        }

        // FIXME: show/hide search
        if (screen_width > 768) {
            $('.js_search').click(function() {
                $('.js_form_search').toggleClass('active');
            });
            $(document).bind('click', function(e) {
                const $clicked = $(e.target);
                if (!$clicked.parents().hasClass("_search")) {
                    $('.js_form_search').removeClass('active');
                }
            })
        }

        // FIXME: js check select lang
        $('#js_select').click(function() {
            $('#_mutliSelect').toggleClass('active_lang');
        });

        $(document).bind('click', function(e) {
            const $clicked = $(e.target);
            if (!$clicked.parents().hasClass("_language")) {
                $("#_mutliSelect").removeClass('active_lang');
            }
        });

        $('[data-lang]').click(function() {
            var data_lang = $(this).attr('data-lang');
            var data_selected = $('[data-lang= "' + data_lang + '"]');
            $(data_selected).siblings().removeClass('_selected');
            $(data_selected).addClass('_selected');
            var text = $(data_selected).html();
            //console.log(text);
            $('#multiSel span').html(text);
            $('#_mutliSelect').removeClass('active_lang');
        });
        var countries = [{
                value: 'Chicago Blackhawks',
                data: {
                    category: 'NHL'
                }
            },
            {
                value: 'Chicago Bulls',
                data: {
                    category: 'NBA'
                }
            },
            {
                value: 'Viet Nam',
                data: {
                    category: 'LCK'
                }
            },
        ];

        $('input[name=key]').focus(function(e) {
            let Elcomponent = $(this).hasClass('txt_search') ? "body" : ".search";
            $('input[name=key]').autocomplete({
                lookup: countries,
                groupBy: 'category',
                minChars: 1,
                showNoSuggestionNotice: true,
                forceFixPosition: true,
                appendTo: Elcomponent
            }).keyup(function(e) {
                if (e.which === 13) {
                    $(this).parent().parent().parent().find('button').trigger('click');
                }
            });
        });
    });
    </script>