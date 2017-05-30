<?php
$baseUrl = Yii::app()->theme->baseUrl;
?> 
<div class="clearfix"></div>
<!-- // BANNER AREA START // -->
<div id="jssor_1" style="position: relative; margin: 0 auto; top: 0; left: 0px; width: 960px; height: 300px; overflow: hidden; visibility: hidden;">
    <!-- Loading Screen -->
    <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
        <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
        <div style="position:absolute;display:block;background: url(<?php echo $baseUrl; ?>/img/loading.gif) no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
    </div>
    <?php
    if (!empty($banner_list)) {
        ?>     
        <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 960px; height: 300px; overflow: hidden;">
            <?php
            ?>     
            <?php
            foreach ($banner_list as $banner) {
                $link = "#";
                if (!empty($banner->link)) {
                    $link = $banner->link;
                }
                ?>   
                <div> <a  href="<?php echo $link; ?>"><img data-u="image" src="<?php echo $baseUrl; ?>/img/<?php echo $banner->banner; ?>" /></a> </div>
                <?php
            }
            ?>
        </div>
        <?php
    }
    ?>
    <div data-u="navigator" class="jssorb13" style="bottom:16px;right:16px;" data-autocenter="1">
        <div data-u="prototype" style="width:21px;height:21px;"></div>
    </div>
</div>
<!-- // BANNER AREA END // -->
<!-- // ABOUTUS CONT AREA START // -->
<div class="aboutus_area">
    <div class="container">
        <div class="row">
            <div class="about_inner animatedParent">        
                <div class="col-md-12">
                    <div class="col-md-6">
                        <div class="box_left">
                            <h1>ABOUT US</h1>
                            <p class="animated bounceInRight go">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus molestie velit ut urna facilisis gravida. Aliquam erat volutpat. Maecenas sed hendrerit enim. Praesent eu dignissim augue. Integer odio lectus, sodales sit amet scelerisque a, condimentum at magna. Fusce laoreet tellus ut volutpat molestie.</p>
                            <div class="box_right animated bounceInLeft go"><img src="<?php echo $baseUrl; ?>/img/img1.png" alt=""></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box_right2">
                            <h1>AYURVEDA</h1>
                            <p class="animated bounceInRight go">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus molestie velit ut urna facilisis gravida. Aliquam erat volutpat. Maecenas sed hendrerit enim. Praesent eu dignissim augue. Integer odio lectus, sodales sit amet scelerisque a, condimentum at magna.</p>            
                        </div>
                        <div class="box_right3">
                            <h1>SHOP</h1>
                            <p class="animated bounceInRight go">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus molestie velit ut urna facilisis gravida. Aliquam erat volutpat. Maecenas sed hendrerit enim. Praesent eu dignissim augue. Integer odio lectus, sodales sit amet scelerisque a, condimentum at magna.</p>            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- // ABOUTUS AREA END // -->
<div class="clearfix"></div>
<!-- // PRODUCTS CONT AREA START // -->
<div class="product_area">
    <div class="container">
        <div class="row">
            <div class="product_inner">
                <h1>ALL PRODUCTS</h1>
                <h2>Healthcare</h2>        
                <div class="col-md-12">        
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img6.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img7.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img8.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img9.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product_inner">
                <h2>Nutraceutical</h2>        
                <div class="col-md-12">        
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img6.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img7.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img8.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img9.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product_inner">
                <h2>Oral care</h2>        
                <div class="col-md-12">        
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img6.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img7.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img8.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img9.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product_inner">
                <h2>Body care</h2>        
                <div class="col-md-12">        
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img6.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img7.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img8.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box_pro">
                            <div class="price_tag">$30</div>
                            <div><a href="product_details.html"><img src="<?php echo $baseUrl; ?>/img/img9.jpg" alt=""></a></div>
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- // PRODUCTS AREA END // -->
<div class="clearfix"></div>
<!-- // CLINIC CONT AREA START // -->
<div class="clinic_area">
    <div class="clinic_inner animatedParent">
        <div class="container">
            <div class="row">
                <h1>CLINIC</h1>
                <div class="col-md-12">
                    <div class="box_left">
                        <p class="animated bounceInRight go">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus molestie velit ut urna facilisis gravida. Aliquam erat volutpat. Maecenas sed hendrerit enim. Praesent eu dignissim augue. Integer odio lectus, sodales sit amet scelerisque a, condimentum at magna. Fusce laoreet tellus ut volutpat molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus molestie velit ut urna facilisis gravida. Aliquam erat volutpat. Maecenas sed hendrerit enim. Praesent eu dignissim augue. Integer odio lectus, sodales sit amet scelerisque a, condimentum at magna. Fusce laoreet tellus ut volutpat molestie. </p>
                    </div>
                    <div class="box_right animated bounceInLeft go"><img src="<?php echo $baseUrl; ?>/img/img4.jpg" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- // CLINIC AREA END // -->
<div class="clearfix"></div>
<!-- // CONSUMER CONT AREA START // -->
<div class="consumer_area">
    <div class="container">
        <div class="row">
            <div class="consumer_inner animatedParent">        
                <div class="col-md-12">
                    <div class="col-md-6">
                        <div class="box_right2">
                            <h1>Consumer Experience</h1>
                            <p class="animated bounceInRight go">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus molestie velit ut urna facilisis gravida. Aliquam erat volutpat. Maecenas sed hendrerit enim. Praesent eu dignissim augue. Integer odio lectus, sodales sit amet scelerisque a, condimentum at magna. Fusce laoreet tellus ut volutpat molestie.</p>           
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box_right3">
                            <a href="joinus.html">JOIN US</a>            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- // CONSUMER AREA END // -->
<div class="clearfix"></div>