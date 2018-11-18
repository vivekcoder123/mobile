
<!-- Scripts Js -->


<script src="<?php echo SITE_BASE_URL; ?>js/jquery-3.2.1.min.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/bootstrap-3.3.7.min.js" charset="utf-8"></script>
<!-- <script src="js/fabric.min.js" charset="utf-8"></script> -->
<script src="<?php echo SITE_BASE_URL; ?>js/fabric.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/fabric-extension.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/FileSaver.min.js"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/canvas-toBlob.js"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/toast.min.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/jquery.lazyload.min.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/modernizr.min.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/jquery.blockUI.min.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/custom/editor.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/custom/text-editor.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/custom/image-editor.js" charset="utf-8"></script>
<script src="<?php echo SITE_BASE_URL; ?>js/custom/buynow.js" charset="utf-8"></script>









<!-- Modals -->

<!-- Start textModal -->
<div class="modal fade" id="textModal" role="dialog" data-backdrop="static" data-keyboard="false">
   <div class="modal-dialog modal-sm">
     <div class="modal-content">

       <div class="self-modal">
         <form>
         <div class="text-center">
           <textarea class="text-center" name="name" id="new_text" placeholder="Your text here"></textarea>
         </div>
        <div class="row">
         <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6 canceldiv">
         <button type="button" class="btn btn-default col-sm-12 col-xs-12 textModalbtn" id="cancelBtnText">Cancel</button>
         </div>
         <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6 applydiv">
         <button type="button" class="btn btn-primary add_text col-sm-12 col-xs-12 textModalbtn" id="hell" name="add_text" style="border-radius:0px;">Apply</button>
         </div>
       </div>
      </form>
       </div>

     </div>
   </div>
 </div>
<!-- End textModal -->


<!-- shapesModal -->
 <div class="modal fade" id="shapesModal" role="dialog" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
        <button type="button" id="shapesCloseModal" class="close">Close <span style="font-size:14px">X</span></button>

        </div>
        <div class="modal-body">

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
             <div class="well shapesImage" id="rectangle">
               <img src="images/shapes/shapes 8.png" alt="" height="100" >
             </div>

           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="triangle">
               <img src="images/shapes/shapes 11.png" alt="" height="100">
             </div>
           </div>

          </div>

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="polygon">
               <img src="images/shapes/shapes 4.png" alt="" height="100">
             </div>

           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="polygon1">
               <img src="images/shapes/shapes_new.png" alt="" height="100">
             </div>
           </div>

          </div>

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="star">
               <img src="images/shapes/shapes 12.png" alt="" height="100">
             </div>
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="circle">
               <img src="images/shapes/shapes 9.png" alt="" height="100">
             </div>
           </div>



          </div>

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="heart">
               <img src="images/shapes/shapes 13.png" alt="" height="100">
             </div>
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="polygon3">
               <img src="images/shapes/shapes.png" alt="" height="100">
             </div>
           </div>



          </div>

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="star1">
               <img src="images/shapes/shapes 14.png" alt="" height="100">
             </div>
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="star2">
               <img src="images/shapes/shapes 15.png" alt="" height="100">
             </div>
           </div>



          </div>

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="square">
               <img src="images/shapes/shapes 5.png" alt="" height="100">
             </div>
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="ellipse">
               <img src="images/shapes/shapes 10.png" alt="" height="100">
             </div>
           </div>

          </div>

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="polygon4">
               <img src="images/shapes/shapes 1.png" alt="" height="100">
             </div>
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
             <div class="well shapesImage" id="rounded_square">
               <img src="images/shapes/shapes 6.png" alt="" height="100">
             </div>
           </div>

          </div>

        </div>

      </div>
    </div>
  </div>
  <!-- End shapesModal -->

  <!-- imagesModal -->
   <div class="modal fade" id="imagesModal" role="dialog" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
          <button type="button" class="close" id="imagesrealdiv">Close <span style="font-size:14px">X</span></button>

          </div>
          <div class="modal-body">


           <div id="errorImage">

           </div>

           <div class="progress" style="display:none;">
           <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">

           </div>
         </div>

          <div class="uploadedFiles row" id="image_preview" style="min-height:40vh;">


          </div>
          <div class="contentImagesModal">
           <p style="color:grey;font-weight:bold;">I confirm this content does not infringe any laws
             or third-party rights like copyright,trademark,or personality
             rights.I understand Greetstore follows rules and closes the
             accounts of repeat infringers.I have reviewed Greetstore's
             <a href="#">Privacy Policy</a> and design rejection reasons.
           </p>
          </div>
          <br>
          <div class="buttonsImageUpload" style="margin:0px;position:fixed;bottom:0px;width:92%;">
            <div class="col-sm-12 col-xs-12" style="padding:0px;">
            <label class="btn-bs-file btn btn-lg btn-primary btn-block" style="border-radius:0px;margin-bottom:8px;">
                Camera
                <input type="file" name="inputCamera" id="inputCamera" accept="image/*;capture=camera">
            </label>
          </div>

           <div class="col-sm-12 col-xs-12" style="padding:0px;">
           <label class="btn-bs-file btn btn-lg btn-primary btn-block" style="border-radius:0px;">
               Browse
               <input type="file" name='inputFile' id='inputFile'/>
           </label>
         </div>
          </div>
          </div>

        </div>
      </div>
    </div>
    <!-- End imagesModal -->

    <!-- Start buyNowModal -->
    <div class="modal fade" id="buyNowModal" role="dialog" data-backdrop="static" data-keyboard="false">
       <div class="modal-dialog modal-sm">
         <div class="modal-content">
           <div class="modal-header">
           <button type="button" class="close" id="buynowdiv">Close <span style="font-size:14px">X</span></button>

           </div>
           <div class="modal-body">

          <div class="cartContainer" style="margin-top:40%;">
           <h4 class="text-center">Are you sure you want to proceed ? </h4>
           <a>Note : You cannot edit the design later.</a>
           <hr>
           <div class="row">
             <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6">
               <a class="btn btn-success btn-block" id="addToCart">Yes,I m done</a>
             </div>
             <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6">
               <a class="btn btn-danger btn-block" id="canceldivbuy">No,Wait</a>
             </div>
           </div>
          </div>


           </div>
           </div>

         </div>
       </div>
     </div>
    <!-- End buyNowModal -->

<!-- Start textSettingModal -->
<div id="trytext">
<div class="modal fade" id="textSettingModal" role="dialog" data-backdrop="false">
   <div class="modal-dialog modal-sm">
     <div class="modal-content">
   <div class="modal-header">
   <span id="textsetting">Text Setting</span>
  <button type="button" class="realdiv" name="button">Close X</button></span>
   </div>

   <div class="modal-body">
     <div class="containerAll" style="padding:0px;">
        <div class="row tabs text-center" id="containerSame" style="padding:5% 0%;">
          <div class="col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 pointer" id="addTextSetting">
            <i class="fa fa-text-height fa-2x" aria-hidden="true"></i>

          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 pointer" id="cloneShape">
            <i class="fa fa-window-restore fa-2x" aria-hidden="true"></i>

          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 pointer" id="deleteShapesObject">
           <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 pointer" id="sendForward">
            <i class="fa fa-angle-double-up fa-2x" aria-hidden="true"></i>

          </div>

          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 pointer" id="sendBackward">
            <i class="fa fa-angle-double-down fa-2x" aria-hidden="true"></i>

          </div>

        </div>
        <div id="fontTextModal" class="" style="display:none;">
          <!-- <div class="modal-header" style="padding:4%">
          <span id="textsetting">Text Setting</span>
         <button type="button" class="realdiv" name="button">Close X</button></span>
          </div> -->
        <ul class="list-unstyled text-center striped-list" id="fontModalList">
          <li data-id="Alegreya" style="font-family: 'Alegreya', serif;">Algreya</li>
          <li data-id="Alfa Slab One" style="font-family: 'Alfa Slab One', cursive;" >Alfa</li>
          <li data-id="Indie Flower" style="font-family: 'Indie Flower', cursive" >Indie flower</li>
          <li data-id="Poor Story" style="font-family:'Amatic SC', cursive;" >Amatic sc</li>
          <li data-id="Spicy Rice" style="font-family: 'Spicy Rice', cursive;" >Spicy rice</li>
          <li data-id="Open Sans Condensed" style="font-family: 'Open Sans Condensed', sans-serif;" >Open sans condensed</li>
          <li data-id="Roboto Mono" style="font-family: 'Roboto Mono', monospace;" >Roboto mono</li>
          <li data-id="Patrick Hand" style="font-family: 'Patrick Hand', cursive;" >Patrick hand</li>
          <li data-id="Rajdhani" style="font-family: 'Rajdhani', sans-serif;" >Rajdhani</li>
          <li data-id="Pacifico" style="font-family: 'Pacifico', cursive;" >Pacifico</li>

        </ul>
        </div>
        <div id="colorTextModal" class="collapse dropup-content">
         <?php include "includes/colors.php" ?>
        </div>

        <div id="bendTextModal" class="collapse dropup-content" style="background:white;">
          <div class="benddiv">
          <div class="slidecontainer">

             <input type="range"  min="1" max="100" value="50" class="slider" id="angle-control">
          </div>
          <input type="checkbox" id="cb-curved" name="" value="" checked>
        </div>
        </div>
        <div id="alignTextModal" class="collapse dropup-content">
          <div class="row text-center">
            <div class="col-sm-4 col-xs-4 aligntext text-tabs" id="alignTextLeft">
              <i class="fa fa-align-left fa-2x thin" aria-hidden="true"></i>
              <p>Left Justified</p>
            </div>
            <div class="col-sm-4 col-xs-4 aligntext text-tabs" id="alignTextCenter">
              <i class="fa fa-align-center fa-2x" aria-hidden="true"></i>
              <p>Centered</p>
            </div>
            <div class="col-sm-4 col-xs-4 aligntext text-tabs"  id="alignTextRight">
              <i class="fa fa-align-right fa-2x" aria-hidden="true"></i>
              <p>Right Justified</p>
            </div>
          </div>
        </div>
      </div>



     <!-- <div class="container text-center" id="textEdit"> -->
     <div class="row text-center" style="color:#0483c2;border:1px solid;margin-left:0.1%;margin-right:0.1%;">
     <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs port-item yo" data-toggle="collapse" data-target="#colorTextModal">
       <i class="fa fa-tint fa-2x" aria-hidden="true"></i>
       <br>
     <label for="">Colors</label>
     </div>
     <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs port-item" id="fontContainer">
       <i class="fa fa-font fa-2x" aria-hidden="true"></i>
       <br>
     <label for="">Font family</label>
     </div>
     <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs port-item yo" data-toggle="collapse" data-target="#bendTextModal">
       <i class="fa fa-undo fa-2x fa-rotate-90" aria-hidden="true"></i>
       <br>
     <label for="">Text Bend</label>
     </div>
     <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs port-item yo" data-toggle="collapse" data-target="#alignTextModal">
       <i class="fa fa-align-left fa-2x" aria-hidden="true"></i>
       <br>
     <label for="">Align Text</label>
     </div>
   </div>
     <!-- <ul class="nav nav-pills text-center">
       <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3 active">
         <a data-toggle="pill" href="#colorModal">
         <span><i class="fa fa-tint fa-2x" aria-hidden="true"></i></span>
         <p>Colors</p>
         </a>
       </li>
       <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
         <a data-toggle="pill" href="#fontModal">
         <span><i class="fa fa-font fa-2x" aria-hidden="true"></i></span>
         <p>Font-family</p>
       </a>
       </li>
       <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
         <a data-toggle="pill" href="#bendModal">
        <span><i class="fa fa-undo fa-2x fa-rotate-90" aria-hidden="true"></i></span>
        <p>Text Bend</p>
       </a>
       </li>
       <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
         <a data-toggle="pill" href="#alignModal">
         <span><i class="fa fa-align-left fa-2x" aria-hidden="true"></i></span>
         <p>Align Text</p>
       </a>
       </li>
     </ul> -->
     <!-- </div> -->
   </div>

     </div>
   </div>
 </div>
 </div>
<!-- End textSettingModal -->

<!-- Start shapesSettingModal -->
<div id="tryshapes">
<div class="modal fade" id="shapesSettingModal" role="dialog" data-backdrop="false">
   <div class="modal-dialog modal-sm">
     <div class="modal-content">
   <div class="modal-header">
   <span id="textsetting">Shape Setting</span>
  <button type="button" class="realdivShapes" name="button">Close X</button></span>
   </div>

   <div class="modal-body">
     <div class="container-fluid text-center">
     <div class="row tabs">
       <div id="colorShapes" style="display:none;">


       <!-- Startcolors -->
       <div class="well text-center">

         <div class="custom-radios">
           <div>
             <input type="radio" id="color-s-1" name="shapesColor" value="#2ecc71">
             <label for="color-s-1">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-2" name="shapesColor" value="#3498db">
             <label for="color-s-2">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-3" name="shapesColor" value="#f1c40f">
             <label for="color-s-3">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-4" name="shapesColor" value="#e74c3c">
             <label for="color-s-4">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-5" name="shapesColor" value="#000000">
             <label for="color-s-5">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-6" name="shapesColor" value="#ffffff">
             <label for="color-s-6">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-7" name="shapesColor" value="#ffe6cc">
             <label for="color-s-7">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-8" name="shapesColor" value="#660066">
             <label for="color-s-8">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-9" name="shapesColor" value="#4d1a00">
             <label for="color-s-9">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-10" name="shapesColor" value="#66ffff">
             <label for="color-s-10">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-11" name="shapesColor" value="#ff0000">
             <label for="color-s-11">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>

           <div>
             <input type="radio" id="color-s-12" name="shapesColor" value="#993333">
             <label for="color-s-12">
               <span>
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
               </span>
             </label>
           </div>
        </div>

       </div>




       <!-- Endcolors -->

       </div>
       <div class="col-lg-2 col-sm-offset-1 col-xs-offset-1 col-md-2 col-sm-2 col-xs-2 pointer" id="shapesSettingModalColors">
         <i class="fa fa-tint fa-2x" aria-hidden="true"></i>

       </div>
       <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 pointer" id="cloneShape">
         <i class="fa fa-window-restore fa-2x" aria-hidden="true"></i>

       </div>
       <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 pointer" id="deleteShapesObject">
        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

       </div>
       <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 pointer" id="sendForward">
         <i class="fa fa-angle-double-up fa-2x" aria-hidden="true"></i>

       </div>

       <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 pointer" id="sendBackward">
         <i class="fa fa-angle-double-down fa-2x" aria-hidden="true"></i>

       </div>

     </div>
     </div>

   </div>

     </div>
   </div>
 </div>
</div>
 <!-- End shapesSettingModal -->

<!-- Start imageSettingModal -->
<div id="tryimages">
<div class="modal fade" id="imageSettingModal" role="dialog" data-backdrop="false">
   <div class="modal-dialog modal-sm">
     <div class="modal-content">
   <div class="modal-header">
   <span id="textsetting">Image Setting</span>
  <button type="button" class="realImageShapes" name="button">Close X</button></span>
   </div>

   <div class="modal-body">
     <div class="container-fluid text-center">
     <div class="row tabs">

       <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 pointer" id="cloneShape">
         <i class="fa fa-window-restore fa-2x" aria-hidden="true"></i>

       </div>
       <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 pointer" id="deleteShapesObject">
        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

       </div>
       <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 pointer" id="sendForward">
         <i class="fa fa-angle-double-up fa-2x" aria-hidden="true"></i>

       </div>

       <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 pointer" id="sendBackward">
         <i class="fa fa-angle-double-down fa-2x" aria-hidden="true"></i>

       </div>

     </div>
     </div>

   </div>

     </div>
   </div>
 </div>

</div>
<!-- End imageSettingModal -->

<script type="text/javascript">
 $('.port-item').click(function(){
      $('.collapse').collapse('hide');
    });
  </script>

</html>
