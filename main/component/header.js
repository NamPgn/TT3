const header={
    render:function(){
        return /*html */`
        <div class="header_conten fl_ aic  back_gr_cl_main cl_fff jcsa ">
            <div class="fl_  gap_20 aic jc_st mlr75 col-sm-4 col-xs-4">
                <div class="header_icon btn pa15 
                back_fff fs2vw cl_main">
                    <ion-icon class="" name="home-outline"></ion-icon>
                </div>
                <div class="header_title ttu cpi">
                    <h5 >Trường Đại học Hà Nội</h5>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="header_ip relative ">
                    <input class="fieldset pad_3_15 bs01d bra50p w1" type="text" placeholder="Tìm kiếm">
                    <div class="seach pa w3  t0 cpi">
                        <img src="./main/img/tìm kiến.png" alt="">
                    </div>
                </div>
            </div>
            <div class="menu_item dn relative col-sm-4">
                <ion-icon class="fs_20 clicked" name="menu-outline"></ion-icon>
                <div class="header_sign_auth trs aic pf t0 r0 b0 back_fff pa25 cl_000 z5 ta2">
                <ion-icon class="close" name="close-outline" class="pa t0 l0 pa10"></ion-icon>
                    <div class="user_icon w6 fs1r cpi pa">
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <div class="user_tt cpi" style="margin:30px 0px;">
                        <h5>Đăng nhập</h5>
                    </div>
                    <div class="user_st w6 fs1r cpi">
                        <ion-icon name="settings-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="col-sm-4   db">
                <div class="header_sign_auth df gap_20 aic jcsc">
                    <div class="user_icon w6 fs1r cpi">
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <div class="user_tt cpi">
                        <h5>Đăng nhập</h5>
                    </div>
                    <div class="user_st w6 fs1r cpi">
                        <ion-icon name="settings-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>

        `
    }
}
export default header