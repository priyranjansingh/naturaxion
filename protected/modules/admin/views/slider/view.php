<section class="content-header">
    <h1>
        Slider
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo base_url() . '/admin/dashboard'; ?>"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li><a href="<?php echo base_url() . '/admin/slider'; ?>"><i class="fa fa-dashboard"></i> Slider</a></li>
        <li class="active">View</li>
    </ol>
</section>
<section class="content">
    <div class="row">
        <div class="col-xs-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">
                        <?php echo $model->label; ?> 
                        <small>
                            <a href="<?php echo base_url() . '/admin/slider/update?id=' . $model->id; ?>">EDIT</a>
                        </small>
                    </h3>
                </div>
                <div class="box-body">
                    <div class="col-xs-12 table-responsive">
                        <?php
                        $this->widget('zii.widgets.CDetailView', array(
                            // 'itemsCssClass' => 'table table-bordered table-hover dataTable',
                            'htmlOptions' => array("class" => "table table-bordered table-hover dataTable"),
                            'data' => $model,
                            'attributes' => array(
                                'type',
                                'label',
                                'color_code',
                                array(
                                    'name' => 'image',
                                    'type' => 'raw',
                                    'value' => $model->getImage($model->image),
                                ),
                                array(
                                    'name' => 'backgound_image',
                                    'type' => 'raw',
                                    'value' => $model->getBgImage($model->background_image),
                                ),
                                array(
                                    'name' => 'video',
                                    'type' => 'raw',
                                    'value' => (!empty($model->video))?'<a target="_blank" href="'.base_url().'/assets/slider/video/'.$model->video.'">Video Link</a>':'',
                                ),
                                'title',
                                'sub_title',
                                'link1',
                                'link1_text',
                                'link2',
                                'link2_text',
                                'alignment',
                                'date_entered',
                                'date_modified',
                            ),
                        ));
                        ?>
                        <div class="col-xs-12">
                            <?php echo CHtml::link('Back', array('/admin/slider'), array("class" => 'btn btn-info pull-right', "style" => "margin-left:10px;")); ?>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>