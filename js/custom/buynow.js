
var G_EDITOR = (function ($, g_editor) {
//
// 		$(document).ready( function() {
//
//         $('#buynowBtn').click(function(){
//           var i=0;
//           generate_canvas_part(i,false);
//         });
//
//         // GENERATE CANVAS PART
// 	function generate_canvas_part(part_index,preview)
//         {
//
// 	    var watermark = false;
// 	    var generate_svg = true;
// 	    var output_format = "png";
//         g_editor.selected_part = part_index;
//         preview = typeof preview !== 'undefined' ? preview : true;
//         var data_id= testArray[part_index].name;
//         //     var data_part_img = $("#gs-parts-bar > li:eq(" + part_index + ")").attr("data-url");
// 	    var data_part_img = "";
//             g_editor.canvas.clear();
//             if (typeof g_editor.serialized_parts[data_id] == "undefined")
//             {
//                 g_editor.serialized_parts[data_id] = ["{}"];
//             }
// //            console.log(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]]);
//             g_editor.canvas.loadFromJSON(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]],
//                     function () {
//                         // applyImageFilters();
//                         load_background_overlay_if_needed(g_editor.selected_part, function () {
//                             var multiplier = 1;
//                             if (preview)
//                                 multiplier = 1;
//                             //We split the multiplier per 2 if we're in retina mode
//                              if( window.devicePixelRatio !== 1 )
//                                  multiplier=multiplier/2;
//                             var image = g_editor.canvas.toDataURL({format: output_format, multiplier: multiplier, quality: 1});
//                             var svg = "";
// 			                if (generate_svg)
//                                 svg = g_editor.canvas.toSVG();
//                         //     if (g.generate_svg)
//                         //         svg = g_editor.canvas.toSVG();
//                             var blob_image = dataURItoBlob(image);
//                             if (preview)
//                             {
//                                 var modal_content = "";
//                                 if (watermark)
//                                 {
//                                     var frm_data = new FormData();
//                                     frm_data.append("action", "get_watermarked_preview");
//                                     frm_data.append("watermark", g.watermark);
//                                     frm_data.append("product-id", g.global_variation_id);
//                                     frm_data.append("image", blob_image);
// //                                    frm_data = convert_final_canvas_parts_to_blob(frm_data);
//                                     $.ajax({
//                                         type: 'POST',
//                                         url: ajax_object.ajax_url,
//                                         data: frm_data,
//                                         processData: false,
//                                         contentType: false
//                                     }).done(function (data) {
//                                         if (g_editor.is_json(data))
//                                         {
//                                             var response = JSON.parse(data);
//                                             if (data_part_img)
//                                                 modal_content = "<div style='background-image:url(" + data_part_img + ");'><img src='" + response.url + "'></div>";
//                                             else
//                                                 modal_content = "<div><img src='" + response.url + "'></div>";
//                                             $("#gModal .modal-body ").append(modal_content);
//                                         }
//                                         else
//                                         {
//                                             $("#debug").html(data);
//                                         }
//                                     });
//                                 }
//                                 else
//                                 {
//                                     if (data_part_img)
//                                         modal_content = "<div style='background-image:url(" + data_part_img + ");'><img src='" + image + "'></div>";
//                                     else {
// 					//   modal_content = "<div><img src='" + image + "'></div>";
// 					if(g_editor.preview_part == 0) {
// 						modal_content = "<div class='item active'><img src='" + image + "' alt='preview image'></div>";
// 						g_editor.preview_part =1;
// 					} else
// 						modal_content = "<div class='item'><img src='" + image + "' alt='preview image'></div>";
// 				    }
//
//                                     $("#gModal .modal-body .carousel-inner").append(modal_content);
//                                 }
//                             }
//                             else
//                             {
// 				                //alert("inside print else");
//                                 var canvas_obj = $.parseJSON(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]]);
//                               // console.log(canvas_obj);
//                                 var layers = [];
//                 				var print_layers = true;
//                                                 // if (g.print_layers)
//                 				if (print_layers)
//                                 {
//                                     var objects = canvas_obj.objects;
//                                     $.each(objects, function (key, curr_object) {
//                                         g_editor.canvas.clear();
//                                         var tmp_canvas_obj = canvas_obj;
//                                         tmp_canvas_obj.objects = [curr_object];
//                                         var tmp_canvas_json = JSON.stringify(tmp_canvas_obj);
//                                         g_editor.canvas.loadFromJSON(tmp_canvas_json, function () {
//                                             applyImageFilters();
//                                             g_editor.canvas.renderAll.bind(g_editor.canvas);
//                                             //Removes overlay not included from layers
//                                             load_background_overlay_if_needed(g_editor.selected_part, "", true);
//                                             var multiplier = g_editor.canvas.getWidth() / g_editor.canvas.getWidth();
//                                             var layer = g_editor.canvas.toDataURL({format: output_format, multiplier: multiplier, quality: 1});
//                                             //console.log(layer);
//                                             var blob_layer = dataURItoBlob(layer);
//                                             layers.push(blob_layer);
//                                             //Loads the complete canvas before the save later otherwise, we end up with the last layer loaded as part data
//                                             if (key == objects.length - 1)
//                                             {
//                                                 g_editor.canvas.loadFromJSON(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]]);
//                                                 applyImageFilters();
//                                             }
//                                         });
//                                     });
//                                 }
//                                 g_editor.final_canvas_parts[data_id] = {json: g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]], image: blob_image, original_part_img: data_part_img, layers: layers, svg: svg};
//                             }
//                             load_background_overlay_if_needed(g_editor.selected_part);
//                         }, true);
//                     });
//         }
//
//         // LOAD BACKGROUND OVERLAY IF NEEDED
//         function load_background_overlay_if_needed(index, callback, generating_output)
//         {
//           var output_format = generating_output;
//           console.log(output_format);
//           // var canvas_width = $("#gseditorContainer").outerWidth();
//           // var canvas_height = $("#editorContainer").outerHeight();
//           // var selector = $("#gs-parts-bar > li:eq(" + index + ")");
//           var selector=testArray[index];
//
//           // console.log(selector["bg-not-inc"]);
//           var overlay_not_included = selector["ov-inc"];
//           if (typeof generating_output == 'undefined')
//           generating_output = false;
//           var canvas_bg = selector["ov-img"];
//           if (canvas_bg == "")
//           canvas_bg = null;
//           var canvas_ov = selector["ov-inc"];
//           if (canvas_ov == "")
//           canvas_ov = null;
//
//           // var bg_img = new Image();
//           // //Both background and overlay images consider the scale when being defined so we don't need to resize them
//           // bg_img.onload = function () {
//           // 	var dimensions = g_editor.get_img_best_fit_dimensions(bg_img, canvas_width, canvas_height);
//           // 	g_editor.canvas.setBackgroundImage(bg_img.src, g_editor.canvas.renderAll.bind(g_editor.canvas), {
//           // 		left: canvas_width / 2,
//           // 		top: canvas_height/ 2,
//           // 		originX: 'center',
//           // 		originY: 'center',
//           // 		width: dimensions[0],
//           // 		height: dimensions[1]
//           // 	});
//           // };
//           // if (canvas_bg != null)
//           // bg_img.src = canvas_bg;
//           // else
//           // g_editor.canvas.backgroundImage = null;
//
//           // if (overlay_not_included == "-1" && generating_output)
//           // {
//           // 	//White bg if CMYK mode
//           // 	if (output_format == "jpg")
//           // 	{
//           // 		g_editor.canvas.setBackgroundColor("rgba(255, 255, 255, 1)", g_editor.canvas.renderAll.bind(g_editor.canvas));
//           // 	}
//           // 	g_editor.canvas.overlayImage = null;
//           // 	g_editor.canvas.renderAll.bind(g_editor.canvas);
//           // }
//           // else
//           // {
//           // 	//White bg if CMYK mode
//           // 	if (output_format == "jpg")
//           // 	{
//           // 		g_editor.canvas.setBackgroundColor("rgba(255, 255, 255, 1)", g_editor.canvas.renderAll.bind(g_editor.canvas));
//           // 	}
//           // 	var ov_img = new Image();
//           // 	ov_img.onload = function () {
//           // 		var dimensions = g_editor.get_img_best_fit_dimensions(ov_img, canvas_width, canvas_height);
//           // 		g_editor.canvas.setOverlayImage(ov_img.src, g_editor.canvas.renderAll.bind(g_editor.canvas), {
//           // 			left: 180,
//           // 			top: 10,
//           // 			originX: 'center',
//           // 			originY: 'center',
//           // 			width: dimensions[0],
//           // 			height: dimensions[1]
//           // 		});
//           // 	};
//           // 	if (canvas_ov != null)
//           // 	ov_img.src = canvas_ov;
//           // 	else
//           // 	g_editor.canvas.overlayImage = null;
//           //
//           // }
//
//           //Background not included
//           var bg_not_included_url = selector["bg-not-inc"];
//           var bg_id=selector['name'];
//           if (typeof g_editor.set_part_image[bg_id] == "undefined")//Fixe les parts non chargés lorsque le to_load est défini
//               {
//                   g_editor.set_part_image[bg_id] = 0;
//               }
//           if (bg_not_included_url)
//           {
//             if(g_editor.set_part_image[bg_id] == 0) {
//             //     var bg_code = "url('" + bg_not_included_url + "') no-repeat center center";
//             //     $("#editorContainer .canvas-container").css("background", bg_code);
//             // $("#editorContainer .canvas-container").css("background", "none");
//             var width = $("#editorContainer").outerWidth();
//             var height = $("#editorContainer").outerHeight()*1.5;
//             // var backgroundImage1 = new fabric.Image.fromURL(bg_not_included_url, function(myImg) {
//             var backgroundImage1 = new fabric.Image.fromURL(bg_not_included_url, function(myImg) {
//               if (Modernizr.mq('(max-width: 500px)')) {
//               var img1 = myImg.set({ left: -45, top: -40, selectable: false, hoverCursor: 'default',evented : false,id : "mobile"}).scale(0.5);
//             }else{
//                 var img1 = myImg.set({ left: -125, top: -80, selectable: false, hoverCursor: 'default',evented : false,id : "mobile"}).scale(0.7);
//             }
//               g_editor.canvas.add(img1);
//               img1.hasControls = false;
//               img1.hasBorders = false;
//               img1.lockMovementX = true;
//               img1.lockMovementY = true;
//               // img1.scaleToWidth(width);
//               //   		img1.scaleToHeight(height);
//               g_editor.canvas.renderAll();
//             });
//             g_editor.set_part_image[bg_id]=1;
//           }
//           }
//           else
//           $("#editorContainer .editor").css("background", "none");
//           if ($.isFunction(callback))
//           setTimeout(function () {
//             callback(index);
//           }, 200);
//         }
//
//         // CONVERT URL TO BLOB
//         	function dataURItoBlob(dataURI) {
//                     // convert base64/URLEncoded data component to raw binary data held in a string
//                     var byteString;
//                     if (dataURI.split(',')[0].indexOf('base64') >= 0)
//                         byteString = atob(dataURI.split(',')[1]);
//                     else
//                         byteString = unescape(dataURI.split(',')[1]);
//                     // separate out the mime component
//                     var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
//                     // write the bytes of the string to a typed array
//                     var ia = new Uint8Array(byteString.length);
//                     for (var i = 0; i < byteString.length; i++) {
//                         ia[i] = byteString.charCodeAt(i);
//                     }
//                     var blob = new Blob([ia], {type: mimeString});
//                     return blob;
//                 }


		// });
		return g_editor;
}(jQuery,(G_EDITOR || {})));
