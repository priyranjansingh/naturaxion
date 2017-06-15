<?php

class DefaultController extends Controller {

    public $layout = '//layouts/home_main';
    public $param = 'value';

    public function actionIndex() {
        Yii::import('application.modules.admin.models.Category');
        Yii::import('application.modules.admin.models.Product');
        Yii::import('application.modules.admin.models.ProductGallery');
        $category_list = Category::model()->findAll(array("condition"=>"status ='1' AND deleted='0'"));
        $banner_list = Banners::model()->findAll(array("condition"=>"status ='1' AND deleted = '0'"));
        $this->render('index',array('banner_list'=>$banner_list,'category_list'=>$category_list));
    }

    public function actionLoginCheck() {
        if (Yii::app()->user->isGuest) {
            echo "GUEST";
        } else {
            echo "USER";
        }
    }

    public function actionAbout() {
        Yii::import('application.modules.admin.models.Pages');
        $about_us_content = Pages::model()->find(array("condition"=>"page_name='a' AND status ='1' AND deleted = '0'"));
        //pre($about_us_content,true);
        $this->render('about',array('about_us_content'=>$about_us_content));
    }
    
    public function actionContact() {
        Yii::import('application.modules.admin.models.Pages');
        $contact_us_content = Pages::model()->find(array("condition"=>"page_name='c' AND status ='1' AND deleted = '0'"));
        $this->render('contact',array('contact_us_content'=>$contact_us_content));
    }
    
    

}
