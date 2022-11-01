</body>
<footer class="footer">
    <div class="nav_wrap">
        <div class="_left">
            <div class="top">
                <div class="_item">
                    <div class="title">Bảo hiểm Du lịch Toàn cầu Travel Mate</div>
                    <div class="wrap">
                        <ul>
                            <li><a href="#uu_dai">Ưu đãi riêng cho bạn</a></li>
                            <li><a href="#hotline">Hotline</a></li>
                        </ul>
                        <ul>
                            <li><a href="#quy_dinh">Quy định bồi thường</a></li>
                            <li><a href="#cau_hoi">Câu hỏi thường gặp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="_item">
                    <div class="title">Trụ sở chính</div>
                    <ul>
                        <li>P.601, Tầng 6, Tòa nhà Mặt Trời Sông Hồng, 23 Phan Chu Trinh, Quận Hoàn Kiếm, Hà Nội</li>
                        <li><a href="tel:+842439330704">Điện thoại : (84-24) 3933 0704</a></li>
                    </ul>
                </div>
                <div class="_item">
                    <div class="title">Chi nhánh
                    </div>
                    <ul>
                        <li>Tầng 14, Lim Tower 3, 29A Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh,
                            Việt Nam.</li>
                        <li><a href="tel:+842838221340">Điện thoại: (84-28) 38221 340</a></li>
                    </ul>
                </div>
            </div>
            <div class="end">
                <p class="__copyright">
                    Copyright @ Tokio Marine Insurance Vietnam Co., Ltd.
                </p>


                <p class="folow-facebook">
                    Theo dõi chúng tôi qua
                    <a href="#"><img src='./assets/images/home/logo-ft3.png' alt=""></a>

                </p>
            </div>
        </div>
        <div class="_right">
            <div class="_decor"><img src="./assets/images/home/vector.png" alt=""></div>
            <div class="tokio_marine">
                <p>Tokio Marine<br>Insuarance Vietnam Co., Ltd.</p>
                <p>A member of the<br>Tokio Marine Group</p>
            </div>
        </div>
    </div>
</footer>
<script>
jQuery(document).ready(function($) {
    $(".top ._item .wrap ul li a").click(function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });
});
</script>