
<?php

 include "header.php";
 include "includes/canvasParts.php";

 ?>
<div class="customized-container">

<!-- Start Navbar -->

  <nav class="navbar navbar-inverse" id="navbarCss">
      <div class="">
      <div class="col-lg-10 col-md-10 col-sm-8 col-xs-8">
        <a class="navbar-brand logo" href="#">
          <img src="images/name_logo.png" class="img-responsive" alt="Greetstore.com" title="Greetstore" />
        </a>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-offset-2 col-xs-offset-2  col-sm-2 col-xs-2">
      <button type="button" class="close-customization" title="back to product">&times;</button>
      </div>
      </div>
    </nav>

    <!-- End Navbar -->

<!-- Start Carousel -->

    <div id="myCarousel" class="carousel slide" data-ride="carousel">



      <div class="carousel-inner">
        <div class="item active carousel-image">
              <div id="editorContainer">
                  <canvas id="editor"></canvas>
              </div>
        </div>
      </div>

      <a class="left carousel-control" id="minusSlide">
        <i class="fa fa-angle-left fa-lg"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" id="plusSlide">
          <i class="fa fa-angle-right fa-lg"></i>
        <span class="sr-only" >Next</span>
      </a>
    </div>

    <?php

     $phpJson=get_parts();
      // echo $phpJson;

     ?>

     <script type="text/javascript">
      var jArray=<?php echo json_encode($phpJson); ?>;
      var testArray=JSON.parse(jArray);
     </script>


 <!-- End Carousel -->

<!-- <button type="button" name="button" id="downloadImage" class="btn btn-primary btn-block">Download Image</button> -->

<div class="container-fluid text-center" id="firstlook" style="position:fixed;bottom:0px;width:100%;">
<div class="row tabs">
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs" id="textModalFirstlook" data-toggle="modal" data-target="#textModal">
    <i class="fa fa-text-width fa-2x" aria-hidden="true"></i>
    <label for="">Add Text</label>
  </div>
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs" id="shapesModalFirstlook" data-toggle="modal" data-target="#shapesModal">
    <i class="fa fa-object-ungroup fa-2x" aria-hidden="true"></i>
    <label for="">Shapes</label>
  </div>
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs" id="imagesModalFirstlook" data-toggle="modal" data-target="#imagesModal">
   <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i>
    <label for="">&nbsp;Images</label>
  </div>
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs buynow" id="buynowBtn">
    <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
    <label for="">Buy Now</label>
  </div>

</div>
</div>

<!-- End Column Tabs -->


<?php include "footer.php" ?>
</div>
