<?php

class SliderController extends Controller {

    /**
     * @var string the default layout for the views. Defaults to '//layouts/column2', meaning
     * using two-column layout. See 'protected/views/layouts/column2.php'.
     */
    public $layout = '//layouts/column2';

    protected function beforeAction($action) {
        if (!parent::beforeAction($action)) {
            return false;
        }
        if (isFrontUserLoggedIn()) {
            return true;
        } else {
            $this->redirect(CController::createUrl("/admin/login"));
        }
    }

    /**
     * Displays a particular model.
     * @param integer $id the ID of the model to be displayed
     */
    public function actionView($id) {
        $this->render('view', array(
            'model' => $this->loadModel($id),
        ));
    }

    /**
     * Creates a new model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     */
    public function actionCreate() {
        $model = new Slider;

        // Uncomment the following line if AJAX validation is needed
        // $this->performAjaxValidation($model);

        if (isset($_POST['Slider'])) {

            $model->attributes = $_POST['Slider'];

            if ($_POST['Slider']['type'] == 'normal_with_color_code') {
                $model->scenario = 'normal_with_color_code_scenario';
            } else if ($_POST['Slider']['type'] == 'normal_with_background_image') {
                $model->scenario = 'normal_with_background_image_scenario';
                $background_image = CUploadedFile::getInstance($model, 'background_image');
                if ($background_image !== null) {
                    $rnd = create_guid_section(8);
                    $bgimage_fileName = "{$rnd}-{$background_image}";  // random number + file name
                    $model->background_image = $bgimage_fileName;
                } else {
                    $model->background_image = NULL;
                }
            } else if ($_POST['Slider']['type'] == 'image') {
                $model->scenario = 'image_scenario';
                $slider_image = CUploadedFile::getInstance($model, 'image');
                if ($slider_image !== null) {
                    $rnd = create_guid_section(8);
                    $fileName = "{$rnd}-{$slider_image}";  // random number + file name
                    $model->image = $fileName;
                } else {
                    $model->image = NULL;
                }
            } else if ($_POST['Slider']['type'] == 'video') {
                $model->scenario = 'video_scenario';
                $slider_video = CUploadedFile::getInstance($model, 'video');
                if ($slider_video !== null) {
                    $rnd = create_guid_section(8);
                    $fileName = "{$rnd}-{$slider_video}";  // random number + file name
                    $model->video = $fileName;
                } else {
                    $model->video = NULL;
                }
            }


            if ($model->save()) {
                if (!empty($model->image)) {
                    $slider_image->saveAs('assets/slider/image/' . $model->image);
                } else if (!empty($model->background_image)) {
                    $background_image->saveAs('assets/slider/background_image/' . $model->background_image);
                } else if (!empty($model->video)) {
                    $slider_video->saveAs('assets/slider/video/' . $model->video);
                }
                $this->redirect(array('view', 'id' => $model->id));
            }
        }

        $this->render('create', array(
            'model' => $model,
        ));
    }

    /**
     * Updates a particular model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id the ID of the model to be updated
     */
    public function actionUpdate($id) {
        $model = $this->loadModel($id);
        $old_background_image = $model->background_image;
        $old_image = $model->image;
        $old_video = $model->video;
        // Uncomment the following line if AJAX validation is needed
        // $this->performAjaxValidation($model);
        if (isset($_POST['Slider'])) {
            $model->attributes = $_POST['Slider'];
            if (!empty($old_background_image)) {
                $model->background_image = $old_background_image;
            }
            if (!empty($old_image)) {
                $model->image = $old_image;
            }
            if (!empty($old_video)) {
                $model->video = $old_video;
            }

            if ($_POST['Slider']['type'] == 'normal_with_color_code') {
                $model->scenario = 'normal_with_color_code_scenario';
            } else if ($_POST['Slider']['type'] == 'normal_with_background_image') {
                $model->scenario = 'normal_with_background_image_scenario_update';
                $background_image = CUploadedFile::getInstance($model, 'background_image');
                if (!empty($background_image)) {
                    if ($background_image !== null) {
                        $rnd = create_guid_section(8);
                        $bgimage_fileName = "{$rnd}-{$background_image}";  // random number + file name
                        $model->background_image = $bgimage_fileName;
                    } else {
                        $model->background_image = NULL;
                    }
                }
            } else if ($_POST['Slider']['type'] == 'image') {
                $model->scenario = 'image_scenario_update';
                $slider_image = CUploadedFile::getInstance($model, 'image');
                if (!empty($slider_image)) {
                    if ($slider_image !== null) {
                        $rnd = create_guid_section(8);
                        $fileName = "{$rnd}-{$slider_image}";  // random number + file name
                        $model->image = $fileName;
                    } else {
                        $model->image = NULL;
                    }
                }
            } else if ($_POST['Slider']['type'] == 'video') {
                $model->scenario = 'video_scenario_update';
                $slider_video = CUploadedFile::getInstance($model, 'video');
                if (!empty($slider_video)) {
                    if ($slider_video !== null) {
                        $rnd = create_guid_section(8);
                        $fileName = "{$rnd}-{$slider_video}";  // random number + file name
                        $model->video = $fileName;
                    } else {
                        $model->video = NULL;
                    }
                }
            }


            if ($model->save()) {
                if (!empty($slider_image)) {
                    $slider_image->saveAs('assets/slider/image/' . $model->image);
                } else if (!empty($background_image)) {
                    $background_image->saveAs('assets/slider/background_image/' . $model->background_image);
                } else if (!empty($slider_video)) {
                    $slider_video->saveAs('assets/slider/video/' . $model->video);
                }
                $this->redirect(array('view', 'id' => $model->id));
            }
        }

        $this->render('update', array(
            'model' => $model,
        ));
    }

    /**
     * Deletes a particular model.
     * If deletion is successful, the browser will be redirected to the 'admin' page.
     * @param integer $id the ID of the model to be deleted
     */
    public function actionDelete($id) {
        $this->loadModel($id)->delete();

        // if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
        if (!isset($_GET['ajax']))
            $this->redirect(isset($_POST['returnUrl']) ? $_POST['returnUrl'] : array('manage'));
    }

    /**
     * Lists all models.
     */
    public function actionIndex() {
        $this->redirect(array('manage'));
    }

    /**
     * Manages all models.
     */
    public function actionManage() {
        $model = new Slider('search');
        $model->unsetAttributes();  // clear any default values
        if (isset($_GET['Slider']))
            $model->attributes = $_GET['Slider'];

        $this->render('admin', array(
            'model' => $model,
        ));
    }

    /**
     * Returns the data model based on the primary key given in the GET variable.
     * If the data model is not found, an HTTP exception will be raised.
     * @param integer $id the ID of the model to be loaded
     * @return Slider the loaded model
     * @throws CHttpException
     */
    public function loadModel($id) {
        $model = Slider::model()->findByPk($id);
        if ($model === null)
            throw new CHttpException(404, 'The requested page does not exist.');
        return $model;
    }

    /**
     * Performs the AJAX validation.
     * @param Slider $model the model to be validated
     */
    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'slider-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

}
