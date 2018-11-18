<?php

/**
 * Class to handle all File Uploads by user
 * @return array
 */

require_once dirname(__DIR__).'/../public/appVars.php';
// require_once dirname(__DIR__).'/../connect/class.greetstorePDO.php';
// require_once dirname(__DIR__).'/../functions/class.greetstoreCart.php';
ini_set('display_errors',1);
date_default_timezone_set('Asia/Kolkata');

class productDesignUpload
{

public function upload_user_image($user_info,$user_file) {
        $return = array();
        $image_upload_path = "";
        $message = "";
        $product_code = "";
        $file_exist = 0;

        $new_image = $user_file['file']['name'];
        $new_image_type = $user_file['file']['type'];
        $new_image_size = $user_file['file']['size'];
        $new_image_path = pathinfo($user_file['file']['name']);
        $new_image_type = $new_image_path["extension"];
        list($new_image_width, $new_image_height) = getimagesize($user_file['file']['tmp_name']);
        $error = false;
        $error_message = '<p class="error">Your file '.$new_image.' must be a GIF, JPEG, or PNG format file no greater than ' . round((MM_MAXFILESIZE / 1024000),0).
          ' MB and greater than ' . MM_MINIMGWIDTH . 'x' . MM_MINIMGHEIGHT . ' pixels in size.</p>';
        //---- VALIDATE AND MOVE THE UPLOADED IMAGES IN THE FOLDER -----------//
        if (!empty($new_image)) {
                // Check Constraints
            if(($new_image_size > 0) && ($new_image_size <= MM_MAXFILESIZE) &&
            (($new_image_width >= MM_MINIMGWIDTH) || ($new_image_height >= MM_MINIMGHEIGHT))) {
            //------------------MOVE THE FILE TO TARGET UPLOAD FOLDER -------------//
            if(!isset($_SESSION)) {
                session_start();
            }
            if(isset($_SESSION['order_folder'])) {
                $order_folder = $_SESSION['order_folder'];
            } else {
                $order_folder = "";
            }
            // GET INFO
            // $extension=explode(".",$new_image);
            // $extension=end($extension);
            // $new_file_name = str_replace(".".$extension,"",$new_image);
            // $new_image_name=$new_file_name."_".date("(Ymdhis)").".".$extension;
            $product_code = $user_info['product_code'];
            $target = $this->moveUploadedFileToDestination($product_code,$order_folder,$new_image);
            if(file_exists($target)) {
                $file_exist = 1;
            }
            // $old = getcwd();
            // chdir($target);
            //--------------------- MOVE THE UPLOADED FILE -------------------------------//
            if (move_uploaded_file($user_file['file']['tmp_name'], $target)) {
                        // The new image file move was successful
                        $image_upload_path = SITE_BASE_URL."uploads/".$_SESSION['order_folder']."/".$product_code."/customization/".$new_image;
                        if($file_exist == 0) {
                            $message .= '';
                            // IMAGE HEADER
                            $message .= '<div class="repository-image-wrapper checked col-md-6 col-sm-6 col-xs-6">';
                            $message .= '<div class="repository-image-header">';
                            $message .= '<div class="rotate-icon repository-image-header-icon"></div>';
                            $message .= '<div class="zoom-icon repository-image-header-icon"></div>';
                            $message .= '<div class="delete-icon repository-image-header-icon"></div>';
                            $message .= '</div>';
                            // IMAGE WRAPPER
                            $message .= '<span class="image-wrapper">';
                            $message .= '<img class="repository-image img-responsive" unselectable="on" src="'.$image_upload_path.'" title="'.$new_image.'" alt="'.$new_image.'">';
                            $message .= '</span>';
                            $message .= '</div>';
                            $message .= '';
                            $message .= '';
                            $message .= '';
                        }
                        // chdir($old);
                        $return['success'] = '1';
                        $return['message'] = $message;
                        $return['img_url'] = $image_upload_path;
                        return $return;
            } else {
                    // chdir($old);
                    $return['error'] = "File upload Failed.";
                    return $return;
            }
            return $return;

            } else {
                $return['error'] = $error_message;
                return $return;
            }
        } else {
        // The new image file is not valid, so delete the temporary file and set the error flag
        @unlink($user_file['file']['tmp_name']);
        $error = true;
        $return['error'] = $error_message;
        return $return;
        }

    return 0;
}

//=================== MOVE UPLOAD FILE TO DESTINATION  ===========================//
        public function moveUploadedFileToDestination($product_code,$order_folder,$new_image) {
            $return = array();
            //---------------------- CHECK USER SESSION --------------------------------//
            $path = $this->createFolder($product_code,$order_folder);
            //---------------------- MOVE FILE TO DESTINATION ----------------------------//
            $target = $path['order_folder_path']."\\".$new_image;
            // $target=dirname(__DIR__,2).'/uploads/'.$new_image;

            return $target;
        }

        //=================== CREATE PRODUCT FOLDER  ===========================//
        public function createFolder($product_code,$order_folder) {
            $return = array();
            $order_folder_path = "";
              $order_folder = "delete_Order-".$product_code;
            // Check if the order_folder is present
            if(empty($order_folder) || !isset($_SESSION['order_folder'])) {
              // $order_folder = "delete_Order-".date("(Y-m-d h:i:s)");

                $order_folder_path = dirname(__DIR__,2).'\uploads\\'.$order_folder;
                mkdir($order_folder_path);
                mkdir($order_folder_path.'\\'.$product_code);
                mkdir($order_folder_path.'\\'.$product_code.'\customization');
                $_SESSION['order_folder'] = $order_folder;
                $order_folder_path = dirname(__DIR__,2).'\uploads\\'.$order_folder.'\\'.$product_code.'\customization';
                $return['order_folder_path'] = $order_folder_path;
                return $return;
            } else {
                // Do
                // $order_folder = "delete_Order-".$product_code;
                 // mkdir(dirname(__DIR__,2).'\uploads\\'.$order_folder);
                 $_SESSION['order_folder'] = $order_folder;
                $product_path = dirname(__DIR__,2).'\uploads\\'.$order_folder.'\\'.$product_code;
                if (!is_dir($product_path)) {
                    mkdir($product_path);
                }
                // CHECK CUSTOMIZATION DIRECTORY
                $order_folder_path = dirname(__DIR__,2).'\uploads\\'.$order_folder.'\\'.$product_code.'\customization';
                if(!is_dir($order_folder_path)) {
                    mkdir($order_folder_path);
                    $order_folder_path = dirname(__DIR__,2).'\uploads\\'.$order_folder.'\\'.$product_code.'\customization';
                    $return['order_folder_path'] = $order_folder_path;
                    return $return;
                } else {
                    $order_folder_path = dirname(__DIR__,2).'\uploads\\'.$order_folder.'\\'.$product_code.'\customization';
                    $return['order_folder_path'] = $order_folder_path;
                    return $return;
                }
            }
        }

        //=================== DELETE FILE FROM PRODUCT FOLDER  ===========================//
        public function delete_product_file($user_info) {
            //-------------------------- GET THE DETAILS --------------------------------//
            $filename = $user_info['filename'];
            $product_code = $user_info['product_code'];
            $return = array();
            //---------------------- START SESSION ----------------------------------//
            if(!isset($_SESSION)) {
                session_start();
            }
            //--------------------- CHECK SESSION -----------------------------------//
            if(isset($_SESSION['order_folder'])) {
                $old = getcwd(); // Save the current directory
                if(file_exists("../uploads/".$_SESSION['order_folder']."/".$product_code)) {
                    chdir("../uploads/".$_SESSION['order_folder']."/".$product_code);
                     @unlink($filename);
                    chdir($old); // Restore the old working directory
                    $return['success'] = "File Deleted";
                } else {
                    $return['success'] = "File Already Deleted";
                }

            } else {
                $return['error'] = "File Not Found";
            }
            return $return;
        }

        //=================== MOVE UPLOAD FILE TO DESTINATION  ===========================//
        public function delete_product_folder($user_info) {
            //-------------------------- GET THE DETAILS --------------------------------//
            $product_code = $user_info['product_code'];
            $return = array();
            $status = 0;
            //---------------------- START SESSION ----------------------------------//
            if(!isset($_SESSION)) {
                session_start();
            }
            //--------------------- CHECK SESSION -----------------------------------//
            if(isset($_SESSION['order_folder'])) {
                $target = "../uploads/".$_SESSION['order_folder']."/".$product_code;
                $status = $this->delete_product_folder_files($target);
                if($status == 1) {
                    rmdir($target);
                    $return['success'] = "Folder Deleted";
                } else {
                    $return['error'] = "Folder Not Found";
                }
            } else {
                $return['error'] = "Folder Not Found";
            }
            return $return;
        }

        // CONVERT TO XML
        private function array2xml($array, $xml = false){

            if($xml === false){
                $xml = new SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?><result/>');
            }
            /*<?xml version="1.0" encoding="utf-8"?>*/
            foreach($array as $key => $value) {
                if(is_array($value)){
                    if(!is_numeric($key)) {
                        $subnode = $xml->addChild($key);
                        if(count($value) >1 && is_array($value)){
                            $jump = false;
                            $count = 1;
                            foreach($value as $k => $v) {
                                if(is_array($v)){
                                    if($count++ > 1)
                                        $subnode = $xml->addChild($key);
                                    $this->array2xml($v, $subnode);
                                    $jump = true;
                                }
                            }
                            if($jump) {
                                goto LE;
                            }
                            $this->array2xml($value, $subnode);
                        }
                        else
                            $this->array2xml($value, $subnode);
                    } else {
                        $this->array2xml($value, $xml);
                    }
                } else {
                    $xml->addChild($key, $value);
                }
                LE: ;
            }

            return $xml->asXML();
        }

        // EXPORT DATA TO FILES
        private function export_data_to_files($generation_dir, $data, $variation_id, $zip_name, $pdf_watermark = false) {
                $generate_pdf = false;
                $generate_zip = false;
                $output_format = "pdf";
                $wpc_cmyk_conversion="yes";
                // $watermark_id = get_proper_value($product_metas, "watermark", false);
                // $watermark = false;
                // if ($watermark_id)
                //     $watermark = o_get_proper_image_url($watermark_id);

                // if ($product_output_settings['zip-output']=='yes')
                //     $generate_zip = true;

                // $wpc_cmyk_conversion=$wpd_product->get_option($product_output_settings, $global_output_settings, "wpc-cmyk-conversion", "no");
                if(!class_exists("Imagick"))
                    $wpc_cmyk_conversion="no";

                $wpc_img_format = "png";
                // $wpc_img_format = $_POST["format"];
                $allowed_extensions=array('png', 'jpg');
                if(!in_array( $wpc_img_format, $allowed_extensions))
                    return false;

                $output_arr = array();
                foreach ($data as $part_key => $part_data) {
                    $part_dir = $generation_dir."/".$part_key;
                    //$part_dir = dirname(__DIR__)."/zip/".$part_key;
                    if (!is_dir($part_dir)) {
                        mkdir($part_dir);
                        //Part image
                        $output_file_path = $part_dir."/".$part_key.".".$wpc_img_format;
                        $moved = move_uploaded_file($_FILES[$part_key]['tmp_name']['image'], $output_file_path);
                    } else {
                       //Part image
                        $output_file_path = $part_dir."/".$part_key.".".$wpc_img_format;
                        $moved = move_uploaded_file($_FILES[$part_key]['tmp_name']['image'], $output_file_path);
                    }



                    if ($wpc_cmyk_conversion == "yes") {
                        $wpc_cmyk_profil = get_proper_value($global_output_settings, "wpc-cmyk-profil", false);

                        if ($wpc_cmyk_profil) {
                            $wpc_cmyk_profil = get_home_path() . $wpc_cmyk_profil;
                            $cmd = "convert $output_file_path -colorspace cmyk -profile " . $wpc_cmyk_profil . " $output_file_path";
                        } else {
                            $cmd = "convert $output_file_path -colorspace cmyk $output_file_path";
                        }

                        $exec_result = $this->gs_exec($cmd);
                        // if(!empty($exec_result))
                        // {
                        //     echo $exec_result[0]."<br>";
                        // }
                    }
                    $output_arr[$part_key]["image"] = "$part_key.$wpc_img_format";

                    //Preview
                    $watermark_id = false;
                    if ($watermark_id) {
                        $preview_filename = uniqid("preview_") . ".$wpc_img_format";
                        $preview_file_path = "$part_dir/" . $preview_filename;
                        $this->merge_pictures($output_file_path, $watermark, $preview_file_path, $variation_id);
                        $output_arr[$part_key]["preview"] = $preview_filename;
                    } else
                        $output_arr[$part_key]["preview"] = $output_arr[$part_key]["image"];

                    if (!$generate_pdf && !$generate_zip)
                        $output_arr[$part_key]["file"] = "$part_key.$wpc_img_format";

                    $fonts = array();
                    //SVG
                    if ($output_format=='svg'||$output_format=='pdf+svg') {
                        $svg_path = $part_dir . "/$part_key.svg";

                        file_put_contents($svg_path, stripcslashes($part_data["svg"]), FILE_APPEND | LOCK_EX);
                        $this->embbed_images_in_svg($svg_path, $svg_path);
                        $output_file_path = $svg_path;

                        //Fonts extraction
                        $raw_json = $part_data["json"];
                        $json = str_replace("\n", "|n", $raw_json);
                        $unslashed_json = stripslashes_deep($json);
                        $decoded_json = json_decode($unslashed_json);
                        if (!is_object($decoded_json))
                            continue;
                        $map = array_map(create_function('$o', 'return $o->type;'), $decoded_json->objects);
                        foreach ($decoded_json->objects as $object) {
                            $object_type = $object->type;
                            if ($object_type == "text" || $object_type == "i-text") {
                                if (!in_array($object->fontFamily, $fonts))
                                    array_push($fonts, $object->fontFamily);
                            }
                        }

                        $output_arr[$part_key]["file"] = "$part_key.svg";
                    }
                }

                // $result = $this->generate_design_archive($generation_dir, "$generation_dir/$zip_name");
                return $output_arr;
        }

        // EMBEDDED IMAGES IN SVG
        private function embbed_images_in_svg($input, $output) {
                $xdoc = new DomDocument;
                $xdoc->Load($input);
                $images = $xdoc->getElementsByTagName('image');
                //var_dump($images->length);
                for ($i = 0; $i < $images->length; $i++) {
                    $tagName = $xdoc->getElementsByTagName('image')->item($i);
                    $attribNode = $tagName->getAttributeNode('xlink:href');
                    $img_src = $attribNode->value;
                    if(strpos($img_src, "data:image")!==FALSE)
                        continue;

                    $type = pathinfo($img_src, PATHINFO_EXTENSION);
                    $data = $this->url_get_contents($img_src);
                    $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);

                    $tagName->setAttribute('xlink:href', $base64);

                    $new_svg = $xdoc->saveXML();
                    file_put_contents($output, $new_svg);
                }
        }

        // EXEC PART COMMAND
        private function gs_exec($cmd) {
        $output = array();
        exec("$cmd 2>&1", $output);
        return $output;
        }

        //======================== GENERATE DESIGN ZIP =======================//
        private function generate_design_archive($source, $destination) {
                if (!extension_loaded('zip') || !file_exists($source)) {
                    return false;
                }

                $zip = new ZipArchive();
                if (!$zip->open($destination, ZIPARCHIVE::CREATE)) {
                    return false;
                }

                $source = str_replace('\\', DIRECTORY_SEPARATOR, realpath($source));

                if (is_dir($source) === true) {
                    $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source), RecursiveIteratorIterator::SELF_FIRST);

                    foreach ($files as $file) {
                        $file = str_replace('\\', DIRECTORY_SEPARATOR, $file);

                        // Ignore "." and ".." folders
                        if (in_array(substr($file, strrpos($file, '/') + 1), array('.', '..')))
                            continue;

                        $file = realpath($file);

                        if (is_dir($file) === true)
                            $zip->addEmptyDir(str_replace($source . DIRECTORY_SEPARATOR, '', $file . DIRECTORY_SEPARATOR));
                        else if (is_file($file) === true)
                            $zip->addFromString(str_replace($source . DIRECTORY_SEPARATOR, '', $file), $this->url_get_contents($file));
                    }
                }
                else if (is_file($source) === true) {
                    $zip->addFromString(basename($source), $this->url_get_contents($source));
                }

                return $zip->close();
        }

        // REPLACEMENT FOR FAILED FILE GET CONTENTS
        function url_get_contents($Url) {
        //If it's a path, we prefer use the file_get_contents
        if (function_exists('curl_init') && !file_exists($Url)) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $Url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $output = curl_exec($ch);
//                    if(!$output)
//                        var_dump("$Url yes papa");
            curl_close($ch);
        } else
            $output = file_get_contents($Url);

        return $output;
        }

        //======================== GENERATE DOWNLOAD FILE =========================//
        public function save_user_customization_file($data_info) {
            $return = array();
            $output_msg = "Download";
            $zip_name = "";
            $final_canvas_parts = $data_info["final_canvas_parts"];
            $variation_id = $data_info["variation_id"];
            $product_name = $data_info["name"];
            $json_file = $data_info["json_file"];
            //---------------------- START SESSION ----------------------------//
            if(!isset($_SESSION)) {
                session_start();
            }
            // CHECK IF ORDER FOLDER SESSION IS THERE OR NOT
            if(!isset($_SESSION['order_folder'])) {
                // START CREATING DIRECTORIES
                $order_folder = "delete_Order-".$variation_id;
                $order_folder_path = dirname(__DIR__,2)."\uploads\\".$order_folder;
                mkdir($order_folder_path);
                mkdir($order_folder_path."\\".$variation_id);
                mkdir($order_folder_path."\\".$variation_id."\customization");
                $_SESSION['order_folder'] = $order_folder;
            } else {
                // CHECK IF FOLDER EXISTS
                $order_folder_path = dirname(__DIR__,2)."\uploads\\".$_SESSION['order_folder'];
                if(!is_dir($order_folder_path."\\".$variation_id)) {
                    mkdir($order_folder_path."\\".$variation_id);
                    mkdir($order_folder_path."\\".$variation_id."\customization");
                }
            }

            $generation_path = dirname(__DIR__,2)."\uploads\\".$_SESSION['order_folder']."\\".$variation_id."\customization";
            // echo $generation_path;
            $result = $this->export_data_to_files($generation_path, $final_canvas_parts, $variation_id, $zip_name, false);

            // GET THE PRODUCT THUMBNAIL IMAGE
            // $condition_arr1="";
            // $condition_arr2="";
            // $condition_arr1= array(":code");
            // $condition_arr2= array($product_code);
            // $CheckVisitingCard = new GreetstorePDO();
            // $check_sql = "SELECT visiting_card_name,visiting_card_type,visiting_card_description,visiting_card_dimension,visiting_card_weight,visiting_card_orientation,visiting_card_thickness,available_print_sides FROM visiting_card_info WHERE visiting_card_code = :code ";
            // $visiting_card_result=$CheckVisitingCard->selectQuery($check_sql,$condition_arr1,$condition_arr2);
            // $visiting_card_count=sizeof($visiting_card_result);
            // if($visiting_card_count > 0) {

            // }

            // ADD THE PRODUCT TO CART
            $product_content = "";
            $product_preview = "";
            $product_thumbnail = "";
            $product_email = "";
            $thumbnail_path = dirname(__DIR__,2)."\uploads\\".$_SESSION['order_folder']."\\".$variation_id."\customization";
            foreach ($result as $part_key => $part_file_arr) {
                $product_thumbnail = $thumbnail_path."\\".$part_key."\\".$part_file_arr["file"];
                // GENERATE JSON FILE
                // $fp = fopen("../../".$thumbnail_path."/".$part_key."/".$part_key.'_info.json', 'w');
                $fp = fopen($thumbnail_path."\\".$part_key."\\".$part_key.'_info.json', 'w');
                fwrite($fp, $json_file);
                fclose($fp);
                // GENERATE XML FILE
                $xml_data = json_decode($json_file, true);
                $xml = $this->array2xml($xml_data, false);
                $fp = fopen($thumbnail_path."\\".$part_key."\\".$part_key.'_info.xml', 'w');
                fwrite($fp, $xml);
                fclose($fp);
            }
            // $AddCustomizationToCart = new GreetstoreCart();
            // $customization_result = $AddCustomizationToCart->add_product_details($variation_id,$product_name,$product_content,$product_preview,$product_thumbnail,$product_email);
            // unset($AddCustomizationToCart);
            $return['success'] = 1;
            return $return;

        }

        //======================== GENERATE DOWNLOAD FILE ======================//
        public function generate_downloadable_file($data_info) {
                $return = array();
                $output_msg = "";
                $wpc_cmyk_conversion="no";
                if (extension_loaded('imagick') || class_exists("Imagick"))
                    $wpc_cmyk_conversion="yes";
                // SET VARIABLES
                $final_canvas_parts = $data_info["final_canvas_parts"];
                $variation_id = $data_info["variation_id"];
                // GET THE PATH FOR VARIABLE
                $generation_path = "../zip";
                // GENERATE ZIP
                $zip_name = $variation_id.".zip";
                $result = $this->export_data_to_files($generation_path, $final_canvas_parts, $variation_id, $zip_name, true);
                foreach ($result as $part_key => $part_file_arr) {
                $output_msg.="<div>" .ucfirst($part_key).": please click "."<a href='".$generation_path."/".$part_key."/".$part_file_arr["file"]."' download='".$part_file_arr["file"]."'>" ."here"."</a> "."to download".".</div>";
                }
                $return['success'] = $wpc_cmyk_conversion;
                $return['message'] = "<div class='btn-success'>" . $output_msg . "</div>";
                return $return;
        }

        //=================== DELETE PRODUCT FOLDER FILES  =====================//
        public function delete_product_folder_files($target) {
            if(is_dir($target)) {
                    $files = glob( $target . '*', GLOB_MARK ); //GLOB_MARK adds a slash to directories returned
                    foreach( $files as $file )
                    {
                        $this->delete_product_folder_files( $file );
                    }

                    return 1;
            } elseif(is_file($target)) {
                unlink( $target );
            } else {
                return 0;
            }
        }

}


?>
