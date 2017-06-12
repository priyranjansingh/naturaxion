<script language="javascript">
    function sliderType(slider_type)
    {
        if (slider_type != '')
        {
            if (slider_type == 'normal_with_color_code')
            {
                $("#normal_with_color_code").show();
                $("#normal_with_background_image").hide();
                $("#image").hide();
                $("#video").hide();
            }
            else if (slider_type == 'normal_with_background_image')
            {
                $("#normal_with_background_image").show();
                $("#normal_with_color_code").hide();
                $("#image").hide();
                $("#video").hide();
            }
            else if (slider_type == 'image')
            {
                $("#normal_with_color_code").show();
                 $("#normal_with_background_image").hide();
                $("#image").show();
                $("#video").hide();
            }
            else if (slider_type == 'video')
            {
                $("#normal_with_color_code").hide();
                $("#normal_with_background_image").hide();
                $("#image").hide();
                $("#video").show();
            }
        }
    }




</script>
<script src="<?php echo base_url(); ?>/assets/js/colorpicker/jscolor.js"></script>
    
<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'slider-form',
    'enableAjaxValidation' => false,
    'htmlOptions' => array('enctype' => 'multipart/form-data'),
        ));
?>
<div class="box-body">
    <div class="form-group">
        <div class="col-xs-12">
            <?php
            if (empty($model->type)) {
                $model->type = 'normal_with_color_code';
            }
            ?>
            <?php echo $form->labelEx($model, 'type'); ?>
            <?php echo $form->radioButtonList($model, 'type', array('normal_with_color_code' => 'Normal(Color Code)','normal_with_background_image' => 'Normal(Background Image)', 'image' => 'Image', 'video' => 'Video'), array('separator' => '&nbsp;&nbsp;', 'onchange' => 'sliderType(this.value);')); ?>
            <?php echo $form->error($model, 'type'); ?>
        </div>
    </div>
    <div style="clear:both"></div>
    <div class="form-group">
        <div class="col-xs-12">
            <?php echo $form->labelEx($model, 'label'); ?>
            <?php echo $form->textField($model, 'label', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'label'); ?>
        </div>
    </div>
    <div style="clear:both"></div>
    <div class="form-group" id="normal_with_color_code" style="display:<?php echo ($model->type == 'normal_with_color_code') ? 'block' : 'none'; ?>">
        <div class="col-xs-12">
            <?php echo $form->labelEx($model, 'color_code'); ?>
            <?php echo $form->textField($model, 'color_code', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control jscolor{required:false}')); ?>
            <?php echo $form->error($model, 'color_code'); ?>
        </div>

    </div>
    <?php  
    // for the case of edit
    if(!empty($model->background_image))
    {
    ?>   
    <div style="clear:both"></div>
    <div class="form-group" style="margin-top:15px;">
        <div class="col-xs-12">
            <img height="50" width="50" src="<?php echo base_url(); ?>/assets/slider/background_image/<?php echo $model->background_image; ?>" >
        </div>
    </div>
    <?php    
    }    
    ?>
    
    <div style="clear:both"></div>
    <div class="form-group" id="normal_with_background_image" style="display:<?php echo ($model->type == 'normal_with_background_image') ? 'block' : 'none'; ?>">
        <div class="col-xs-12">
            <?php echo $form->labelEx($model, 'background_image'); ?>
            <?php echo $form->fileField($model, 'background_image', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'background_image'); ?>
        </div>

    </div>
    
     <?php  
    // for the case of edit
    if(!empty($model->image))
    {
    ?>   
    <div style="clear:both"></div>
    <div class="form-group" style="margin-top:15px;">
        <div class="col-xs-12">
            <img height="50" width="50" src="<?php echo base_url(); ?>/assets/slider/image/<?php echo $model->image; ?>" >
        </div>
    </div>
    <?php    
    }    
    ?>
    
    
    <div style="clear:both"></div>
    <div class="form-group" id="image" style="display:<?php echo ($model->type == 'image') ? 'block' : 'none'; ?>">
        <div class="col-xs-12" >
            <?php echo $form->labelEx($model, 'image'); ?>
            <?php echo $form->fileField($model, 'image', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'image'); ?>
        </div>
        <div class="col-xs-12" style="margin-top:10px;">
            <?php echo $form->labelEx($model, 'alignment'); ?>
            <?php echo $form->radioButtonList($model, 'alignment', array('L' => 'Left', 'R' => 'Right'), array('separator' => '&nbsp;&nbsp;')); ?>
            <?php echo $form->error($model, 'alignment'); ?>
        </div>
    </div>
    
     
     <?php  
    // for the case of edit
    if(!empty($model->video))
    {
    ?>   
    <div style="clear:both"></div>
    <div class="form-group" style="margin-top:15px;">
        <div class="col-xs-12">
            <a target="_blank" href="<?php echo base_url(); ?>/assets/slider/video/<?php echo $model->video; ?>">Video Link</a>
        </div>
    </div>
    <?php    
    }    
    ?>
    
    <div style="clear:both"></div>
    <div class="form-group" id="video" style="display:<?php echo ($model->type == 'video') ? 'block' : 'none'; ?>">
        <div class="col-xs-12" >
            <?php echo $form->labelEx($model, 'video'); ?>
            <?php echo $form->fileField($model, 'video', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'video'); ?>
        </div>
    </div>
    <div style="clear:both"></div>
    <div class="form-group">
        <div class="col-xs-6">
            <?php echo $form->labelEx($model, 'title'); ?>
            <?php echo $form->textField($model, 'title', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'title'); ?>
        </div>
        <div class="col-xs-6">
            <?php echo $form->labelEx($model, 'sub_title'); ?>
            <?php echo $form->textField($model, 'sub_title', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'sub_title'); ?>
        </div>
    </div>
    <div style="clear:both"></div>
    <div class="form-group">
        <div class="col-xs-6">
            <?php echo $form->labelEx($model, 'link1'); ?>
            <?php echo $form->textField($model, 'link1', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'link1'); ?>
        </div>
        <div class="col-xs-6">
            <?php echo $form->labelEx($model, 'link1_text'); ?>
            <?php echo $form->textField($model, 'link1_text', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'link1_text'); ?>
        </div>
    </div>
    <div style="clear:both"></div>
    <div class="form-group">
        <div class="col-xs-6">
            <?php echo $form->labelEx($model, 'link2'); ?>
            <?php echo $form->textField($model, 'link2', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'link2'); ?>
        </div>
        <div class="col-xs-6">
            <?php echo $form->labelEx($model, 'link2_text'); ?>
            <?php echo $form->textField($model, 'link2_text', array('size' => '60', 'maxlength' => '128', 'class' => 'form-control')); ?>
            <?php echo $form->error($model, 'link2_text'); ?>
        </div>
    </div>



</div>
<div class="box-footer">
    <?php echo CHtml::link('Back', array('/admin/slider'), array("class" => 'btn btn-info pull-right', "style" => "margin-left:10px;")); ?>
    <?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save', array("class" => 'btn btn-info pull-right')); ?>
</div>
<?php $this->endWidget(); ?>