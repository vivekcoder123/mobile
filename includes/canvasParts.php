<?php

function get_proper_value($values, $search_key, $default_value = "") {
    if (isset($values[$search_key]))
        $default_value = $values[$search_key];
        return $default_value;
}

function get_parts() {

    // $part1 = array('name' => "Front",'icon' => '','bg-not-inc' => SITE_BASE_URL.'images/customize-images/product/pixel.png','bg-inc' => '','ov-img' => '','ov-inc' => '');
    $part1 = array('name' => "Back",'icon' => '','bg-not-inc' => SITE_BASE_URL.'images/product/mobile-cover/Apple-Iphone-8/Apple-Iphone-8.png','bg-inc' => '','ov-img' => '','ov-inc' => '');
    $part2 = array('name' => "Back1",'icon' => '','bg-not-inc' => SITE_BASE_URL.'images/product/mobile-cover/Apple-Iphone-8/pixel.png','bg-inc' => '','ov-img' => '','ov-inc' => '');
    $parts=array($part1,$part2);
    $jsonPhp=json_encode($parts);
    return $jsonPhp;
    $is_first = true;
    $get_editor_parts = '';
    $get_editor_parts .= '';
    $get_editor_parts .= '<div id="product-part-container">';
    $get_editor_parts .= '<ul id="gs-parts-bar" class="list-inline">';

    foreach ($parts as $part_data) {
        $part_key = $part_data['name'];
        $part_part=$part_data['part'];
        $icon = get_proper_value($part_data, 'icon');
        $bg_included_id = get_proper_value($part_data, 'bg-inc');
        $bg_not_included_id = get_proper_value($part_data, 'bg-not-inc');
        $part_ov_img = get_proper_value($part_data, 'ov-img');
        $overlay_included = get_proper_value($part_data, 'ov-inc', "-1");

        $class = "";
        if ($is_first)
            $class = "class='active awesome'";
        else {
          $class="class='awesome'";
        }
            $is_first = false;
            $img_ov_src = "";

            if (isset($part_ov_img)) {
                $img_ov_src =$part_ov_img;
            }
            $bg_not_included_src = "";
            if (!empty($bg_not_included_id))
                $bg_not_included_src = $bg_not_included_id;
                $bg_included_src = "";
                if (!empty($bg_included_id))
                    $bg_included_src = $bg_included_id;
                    $part_img = $part_data['name'];
                    if (!$icon) {
                        $part_img = $part_data['name'];
                    } else {
                        $icon_src =$icon;
                        if ($icon_src)
                            $part_img = '<img src="' . $icon_src . '">';
                    }
                    $get_editor_parts .= '<li data-id="'.$part_key.'" data-url="'.$bg_not_included_src.'" data-bg="'.$bg_included_src.'" '.$class.' data-toggle="tooltip" data-placement="top" title="'.$part_data['name'].'" data-ov="'.$img_ov_src.'" data-ovni="'.$overlay_included.'">'.$part_img.'
                </li>';
    }
    $get_editor_parts .= '</ul>';
    $get_editor_parts .= '</div>';

    return $get_editor_parts;
}
?>
