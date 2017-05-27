<?php

class DefaultController extends Controller {

    public $layout = '//layouts/home_main';
    public $param = 'value';

    public function actionIndex() {
        $this->render('index');
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
