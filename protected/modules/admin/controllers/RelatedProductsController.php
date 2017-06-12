<?php

class RelatedProductsController extends Controller
{
	/**
	 * @var string the default layout for the views. Defaults to '//layouts/column2', meaning
	 * using two-column layout. See 'protected/views/layouts/column2.php'.
	 */
	public $layout='//layouts/column2';

	/**
	 * @return array action filters
	 */
	protected function beforeAction($action)
	{
		if (!parent::beforeAction($action)) {
	        return false;
	    }
		if(isFrontUserLoggedIn()){
			return true;
		} else {
			$this->redirect(CController::createUrl("/admin/login"));
		}
	}

	/**
	 * Displays a particular model.
	 * @param integer $id the ID of the model to be displayed
	 */
	public function actionView($id)
	{
		$this->render('view',array(
			'model'=>$this->loadModel($id),
		));
	}

	/**
	 * Creates a new model.
	 * If creation is successful, the browser will be redirected to the 'view' page.
	 */
	public function actionCreate($product = null)
	{
		$model=new RelatedProducts;

		// Uncomment the following line if AJAX validation is needed
		// $this->performAjaxValidation($model);

		if(isset($_POST['RelatedProducts']))
		{
			$r = count($_POST['RelatedProducts']['related']);
			for ($i=0; $i<$r; $i++) {
				$model->product = $_POST['RelatedProducts']['product'];
				$model->related = $_POST['RelatedProducts']['product'][$i];
			}
			//$model->attributes=$_POST['RelatedProducts'];
			if($model->save())
				$this->redirect(array('product/view','id'=>$model->id));
		}

		$this->render('create',array(
			'model'=>$model,
			'product'=>$product
		));
	}

	/**
	 * Updates a particular model.
	 * If update is successful, the browser will be redirected to the 'view' page.
	 * @param integer $id the ID of the model to be updated
	 */
	public function actionUpdate($product)
	{
		$p = Product::model()->findByPk($product);
		if($p === null){
			$model=$this->loadModel($id);
		} else {
			$products = RelatedProducts::model()->findAll(array("condition" => "product = '".$id."'"));
		}

		// Uncomment the following line if AJAX validation is needed
		// $this->performAjaxValidation($model);

		if(isset($_POST['RelatedProducts']))
		{
			RelatedProducts::model()->deleteAll(['product' => $_POST['RelatedProducts']['product']]);
			$r = count($_POST['RelatedProducts']['related']);
			for ($i=0; $i<$r; $i++) {
				$model = new RelatedProducts;
				$model->product = $_POST['RelatedProducts']['product'];
				$model->related = $_POST['RelatedProducts']['product'][$i];
			}
			//$model->attributes=$_POST['RelatedProducts'];
			if($model->save())
				$this->redirect(array('product/view','id'=>$model->id));
		}

		/*if($p === null){
			$this->render('update',array(
				'model'=>$model,
			));
		} else {*/
			$this->render('related-update',array(
				'products'=>$products,
			));
		//}
	}

	/**
	 * Deletes a particular model.
	 * If deletion is successful, the browser will be redirected to the 'admin' page.
	 * @param integer $id the ID of the model to be deleted
	 */
	public function actionDelete($id)
	{
		$this->loadModel($id)->delete();

		// if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
		if(!isset($_GET['ajax']))
			$this->redirect(isset($_POST['returnUrl']) ? $_POST['returnUrl'] : array('manage'));
	}

	/**
	 * Lists all models.
	 */
	public function actionIndex()
	{
		$this->redirect(array("manage"));
	}

	/**
	 * Manages all models.
	 */
	public function actionManage()
	{
		$model=new RelatedProducts('search');
		$model->unsetAttributes();  // clear any default values
		if(isset($_GET['RelatedProducts']))
			$model->attributes=$_GET['RelatedProducts'];

		$this->render('admin',array(
			'model'=>$model,
		));
	}
	
	public function actionPopulateRelated()
	{
		$parent = $_POST['parent'];
		$products = Product::model()->findAll(array("condition" => "id <> '".$parent."'"));
		$html = '<option value="">Select Related Products</option>';
		foreach($products as $product){
			$html .= '<option value="'.$product->id.'">'.$product->name.'</option>';
		}
		
		echo $html;
	}

	/**
	 * Returns the data model based on the primary key given in the GET variable.
	 * If the data model is not found, an HTTP exception will be raised.
	 * @param integer $id the ID of the model to be loaded
	 * @return RelatedProducts the loaded model
	 * @throws CHttpException
	 */
	public function loadModel($id)
	{
		$model=RelatedProducts::model()->findByPk($id);
		if($model===null)
			throw new CHttpException(404,'The requested page does not exist.');
		return $model;
	}

	/**
	 * Performs the AJAX validation.
	 * @param RelatedProducts $model the model to be validated
	 */
	protected function performAjaxValidation($model)
	{
		if(isset($_POST['ajax']) && $_POST['ajax']==='related-products-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}
	}
}