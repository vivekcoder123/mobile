
<?php
require_once dirname(__DIR__).'/includes/mobile-class/class.productDesignUpload.php';
ini_set('display_errors', 1);
//====================== HANDLE FILE UPLOAD BY USER ==========================//
if(isset($_POST['upload'])) {
  try {
  //--------------------- INTIALIZE DETAIL FUNCTION --------------------------//
  // echo json_encode(array('vivek'=>'hi'));
    $uploadImage = new productDesignUpload();

    $return = $uploadImage->upload_user_image($_POST,$_FILES);

    unset($uploadImage);
    if(!empty($return['error'])) {
      echo json_encode(array('error' => $return['error']));
    } else {
      echo json_encode(array('success' => $return['success'],'message' => $return['message'],'img_url' => $return['img_url']));
  }
  }
    catch(Exception $e) {
      $return = "Exception Message ->".$e->getMessage().":Exception Code ->".$e->getCode();
      $return.=":Exception File ->".$e->getFile().":Exception Line ->".$e->getLine();
      echo json_encode(array('error' => $return));
    }
}

//====================== HANDLE FILE DOWNLOAD BY USER ========================//
if(isset($_POST['download'])) {
  try {
  //--------------------- INTIALIZE DETAIL FUNCTION --------------------------//
    $uploadImage = new productDesignUpload();
    $return = $uploadImage->generate_downloadable_file($_POST);
    unset($uploadImage);
    if(!empty($return['error'])) {
      echo json_encode(array('error' => $return['error']));
    } else {
      echo json_encode(array('success' => $return['success'],'message' => $return['message']));
  }
  }
    catch(Exception $e) {
      $return = "Exception Message ->".$e->getMessage().":Exception Code ->".$e->getCode();
      $return.=":Exception File ->".$e->getFile().":Exception Line ->".$e->getLine();
      echo json_encode(array('error' => $return));
    }
}

//====================== HANDLE FILE STORE BY USER ========================//
if(isset($_POST['save'])) {
  try {
  //--------------------- INTIALIZE DETAIL FUNCTION --------------------------//
    $uploadImage = new productDesignUpload();
    $return = $uploadImage->save_user_customization_file($_POST);
    unset($uploadImage);
    if(!empty($return['error'])) {
      echo json_encode(array('error' => $return['error']));
    } else {
      echo json_encode(array('success' => $return['success']));
  }
  }
    catch(Exception $e) {
      $return = "Exception Message ->".$e->getMessage().":Exception Code ->".$e->getCode();
      $return.=":Exception File ->".$e->getFile().":Exception Line ->".$e->getLine();
      echo json_encode(array('error' => $return));
    }
}

//====================== HANDLE FILE STORE BY USER ========================//
if(isset($_POST['save_json'])) {
  try {
  //--------------------- INTIALIZE DETAIL FUNCTION --------------------------//
    $uploadImage = new productDesignUpload();
    $return = $uploadImage->save_user_customization_json_file($_POST);
    unset($uploadImage);

    if(!empty($return['error'])) {
      echo json_encode(array('error' => $return['error']));
    } else {
      echo json_encode(array('success' => $return['success']));
  }
  }
    catch(Exception $e) {
      $return = "Exception Message ->".$e->getMessage().":Exception Code ->".$e->getCode();
      $return.=":Exception File ->".$e->getFile().":Exception Line ->".$e->getLine();
      echo json_encode(array('error' => $return));
    }
}




?>
