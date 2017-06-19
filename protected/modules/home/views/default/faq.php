<?php
$baseUrl = Yii::app()->theme->baseUrl;
?> 
<div class="clearfix"></div>
<!-- // CONT AREA START  // -->
<div class="clinic_area">
    <div class="clinic_inner animatedParent">
        <div class="container">
            <div class="row">
                <h1>FREQUENTLY ASKED QUESTIONS</h1> 
                <div class="col-md-12">
                    <div class="cat_box mrg-top-4">
                        <?php
                        if (!empty($faq)) {
                            foreach ($faq as $f) {
                                ?>   
                                <button class="accordion"><h3><?php echo $f->question; ?></h3></button>
                                <div class="panel">
                                    <?php echo $f->answer; ?>
                                </div>
                                <?php
                            }
                        }
                        ?>
                    </div>				
                </div>

            </div>
        </div>
    </div>
</div>
<!-- // CONT AREA END  // -->
<div class="clearfix"></div>
<!-- // CONT AREA START  // -->
<div class="practice_area2">
    <div class="container">
        <div class="row">
            <div class="practice_inner2 animatedParent"> 	  
                <h1>The scope of practice</h1>           
                <div class="col-md-12">
                    <div class="col-md-4">
                        <div class="box_right">           
                            <div class="animated bounceInRight go"><img src="<?php echo $baseUrl ?>/img/icon1.png" alt="">
                                <h2>Lorem ipsum dolor sit amet</h2>  
                                <p class="animated bounceInRight go"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus molestie velit ut urna facilisis gravida. Aliquam erat volutpat.</p>
                            </div>       
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box_right">            
                            <div class="animated bounceInRight go"><img src="<?php echo $baseUrl ?>/img/icon2.png" alt="">
                                <h2>Lorem ipsum dolor sit amet</h2>  
                                <p class="animated bounceInRight go"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus molestie velit ut urna facilisis gravida. Aliquam erat volutpat.</p>
                            </div>       
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box_right">             
                            <div class="animated bounceInRight go"><img src="<?php echo $baseUrl ?>/img/icon3.png" alt="">
                                <h2>Lorem ipsum dolor sit amet</h2>  
                                <p class="animated bounceInRight go"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lobortis ex, vel luctus ligula. Vivamus molestie velit ut urna facilisis gravida. Aliquam erat volutpat.</p>
                            </div>       
                        </div>
                    </div>		  
                </div>
            </div>
        </div>
    </div>
</div>
<!-- // CONT AREA END  // -->
<div class="clearfix"></div>
<script type="text/javascript">
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            /* Toggle between adding and removing the "active" class,
             to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }
</script>