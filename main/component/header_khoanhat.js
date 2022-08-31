const header_kh={
    render:function(){
        return `
        <div class="header_img relative">
        <div class="khoanhat_img pai col-md-12 col-sm-12 col-xs-12 col-lg-12 z_1">
            <img class="w100_ h500 ofc " src="./main/khoanhat_img/Hearder_web_Nhật.png" alt="">
        </div>
    </div>
    <header>
        <div class="header_auth fl_ jcsb pa10">
            <div class="autt col-xs-3 col-sm-3 col-lg-3">
                <h3 class="cf">TRƯỜNG ĐẠI HỌC HÀ NỘI</h3>
            </div>
            <div class="auth_conten fl_  aic">
                <div class="auth_ip">
                    <input class="bgct fieldset cf" type="text"
                        placeholder="....................................................">
                </div>
                <div class="auth_seach wmx20 cf" style="margin-right: 20px;">
                    <img class="col-md-12 col-sm-12 col-xs-12 col-lg-12 fibr_"
                        src="./main/khoanhat_icon/Icon_Kính lúp.png" alt="">
                </div>
                <div class="auth_icon wmx50 cf">
                    <img class="col-md-12 col-sm-12 col-xs-12 col-lg-12 fibr_"
                        src="./main/khoanhat_icon/Icon_người_mục tìm kiếm.png" alt="">
                </div>
                <div class="sing_in wmx1 cf relative">
                    <img class="col-md-12 col-sm-12 col-xs-12 col-lg-12 fibr_"
                        src="./main/khoanhat_icon/2-removebg-preview.png" alt="">
                    <p class="pa tac t50 l50 tt" style="width: 67px;">Đăng nhập</p>
                </div>
                <div class="auth_st wmx20 cf ">
                    <img class="col-md-12 col-sm-12 col-xs-12 col-lg-12 fibr_"
                        src="./main/khoanhat_icon/Icon_Bánh xe.png" alt="">
                </div>
            </div>
        </div>
        <nav class="fl_ aic jcsb">
            <div class="tt_home wmx150 relative col-xs-3 col-sm-3 col-lg-3">
                <img class="col-md-12 col-sm-12 col-xs-12 col-lg-12 back_gr_cl_main"
                    src="./main/khoanhat_icon/1-removebg-preview.png" alt="">
                <p class="pa t50 l50 tt cf" style="width: 80px;">TRANG CHỦ</p>
            </div>
            <div class="icon_nhat wmx1 relative col-xs-2 col-sm-2 col-lg-2">
                <img style="margin-bottom: 30px;"
                    src="./main/khoanhat_img/logo_Khoa_Nhật_-_HANU-removebg-preview.png" alt="">
                <p class="pa col-md-12 col-sm-12 col-xs-12 col-lg-12 l50 tt cl_main fw_700 tac ">KHOA TIẾNG NHẬT
                </p>
            </div>
            <div class="tt_home relative w70">
                <img class="back_gr_cl_main col-md-12 col-sm-12 col-xs-12 col-lg-12 "
                    src="./main/khoanhat_icon/Thiết_kế_không_tên__1_-removebg-preview.png" alt="">
                <div class="menu pa t50 l50 tt col-md-12 col-sm-12 col-xs-12 col-lg-12 pai tac cf">
                    <p class="dib">THÔNG BÁO</p>
                    <p class="dib">ĐÀO TẠO</p>
                    <P class="dib">TIN TỨC - SỰ KIỆN</P>
                    <p class="dib">HỢP TÁC</p>
                    <p class="dib">NGHIÊN CỨU KHOA HỌC</p>
                    <p class="dib">HOẠT ĐỘNG KHÁC</p>
                </div>
            </div>
            <div class="menu_item dn relative col-sm-4" >
                <ion-icon class="fs_20 cf clicked md hydrated" name="menu-outline" role="img" aria-label="menu outline"></ion-icon>
                <div class="header_sign_auth trs aic pf t0 r0 b0 back_fff pa25 cl_000 z5 ta2">
                <ion-icon class="close md hydrated" name="close-outline" role="img" aria-label="close outline"></ion-icon>
                    <div class="user_icon w6 fs1r cpi pa">
                        <ion-icon name="person-outline" role="img" class="md hydrated" aria-label="person outline"></ion-icon>
                    </div>
                    <div class="user_tt cpi" style="margin:30px 0px;">
                        <h5>Đăng nhập</h5>
                    </div>
                    <div class="user_st w6 fs1r cpi">
                        <ion-icon name="settings-outline" role="img" class="md hydrated" aria-label="settings outline"></ion-icon>
                    </div>
                </div>
            </div>
        </nav>
    </header>
        `
    }
}
export default header_kh