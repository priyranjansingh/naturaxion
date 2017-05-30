<?php

class DefaultController extends Controller {

    public $layout = '//layouts/home_main';
    public $param = 'value';

    public function actionIndex() {
        $banner_list = Banners::model()->findAll(array("condition"=>"status ='1' AND deleted = '0'"));
        $this->render('index',array('banner_list'=>$banner_list));
    }

    public function actionLoginCheck() {
        if (Yii::app()->user->isGuest) {
            echo "GUEST";
        } else {
            echo "USER";
        }
    }

    public function actionAbout() {
        $this->render('about');
    }

}
