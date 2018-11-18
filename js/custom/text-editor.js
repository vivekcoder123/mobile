var G_EDITOR = (function($, g_editor) {

    $(document).ready(function() {

        if (Modernizr.mq('(max-width: 500px)')) {
            if (Modernizr.mq('(min-height: 800px)')) {
                $('.allShapeTextModals').css('margin-top', '180%');
                $('.allImageTextModals').css('margin-top', '180%');
                $('.allTextModals').css('margin-top', '170%');
            }
        }


        if (Modernizr.mq('(min-width: 340px)')) {
            if (Modernizr.mq('(min-height:750px)')) {
                if (Modernizr.mq('(max-height:840px)')) {
                    $('#navbarCss').css('margin-bottom', '20%');
                } else {
                    $('#navbarCss').css('margin-bottom', '25%');
                }
            } else {
                // $('#navbarCss').css('margin-bottom','15%');
            }
        }

        if (Modernizr.mq('(max-width: 500px)')) {
            if (Modernizr.mq('(max-height:800px)')) {
                $('#shapesSettingModalColors').click(function() {
                    $('#colorShapes').toggle();
                    if ($('#colorShapes').is(":visible")) {
                        $('.allShapeTextModals').css('margin-top', '135%')
                        $('#shapesSettingModal .well').css('margin-bottom', '12px');
                    } else {
                        $('.allShapeTextModals').css('margin-top', '150%')
                        $('.well').css('margin-bottom', '0px');
                    }
                });
            } else {
                $('#shapesSettingModalColors').click(function() {
                    $('#colorShapes').toggle();
                    if ($('#colorShapes').is(":visible")) {
                        $('.allShapeTextModals').css('margin-top', '170%')
                        $('.well').css('margin-bottom', '12px');
                    } else {
                        $('.allShapeTextModals').css('margin-top', '180%')
                        $('.well').css('margin-bottom', '0px');
                    }
                });
            }

        } else {
            $('#shapesSettingModalColors').click(function() {
                $('#colorShapes').toggle();
                if ($('#colorShapes').is(":visible")) {
                    $('.allShapeTextModals').css('margin-top', '112%')
                    $('.well').css('margin-bottom', '12px');
                } else {
                    $('.allShapeTextModals').css('margin-top', '120%')
                    $('.well').css('margin-bottom', '0px');
                }
            });
        }

        $(document).on("click", "#cancelBtnText", function() {
            $("#textModal").modal("hide");
            $("#firstlook").show();
        });

        $(document).on("click", "#imagesModalFirstlook", function() {
            $('#firstlook').hide();
        });

        $(document).on("click", "#imagesrealdiv", function() {
            g_editor.canvas.discardActiveObject();
            g_editor.canvas.renderAll();
            $('#firstlook').show();
            $('#imagesModal').modal("hide");
        });

        $(document).on("click", "#buynowdiv", function() {
            $('#firstlook').show();
            $('#buyNowModal').modal("hide");
        });

        $(document).on("click", "#canceldivbuy", function() {
            $('#firstlook').show();
            $('#buyNowModal').modal("hide");
        });

        $(document).on("click", "#shapesModalFirstlook", function() {
            $('#firstlook').hide();
        });

        $(document).on("click", "#shapesCloseModal", function() {
            $('#firstlook').show();
            $('#shapesModal').modal("hide");
        });




        $(document).on("click", "#fontContainer", function() {


            if (Modernizr.mq('(max-width: 500px)')) {

                $('#containerSame').toggle();
                $('#fontTextModal').toggle();
                if ($("#containerSame").is(":visible")) {
                    $('.allTextModals').css('margin-top', '125%');
                } else {
                    $('.allTextModals').css('margin-top', '110%');
                }


            } else {
                $('#containerSame').toggle();
                $('#fontTextModal').toggle();
                if ($("#containerSame").is(":visible")) {
                    $('.allTextModals').css('margin-top', '100%');
                } else {
                    $('.allTextModals').css('margin-top', '90%');
                }
            }


        });

        $(document).on("click", ".yo", function() {
            if (Modernizr.mq('(max-width: 500px)')) {
                if (Modernizr.mq('(max-height:800px)')) {
                    $('.allTextModals').css('margin-top', '125%');
                } else {
                    $('.allTextModals').css('margin-top', '170%');
                }

            } else {
                $('.allTextModals').css('margin-top', '100%');
            }
            $('#containerSame').show();
            $('#fontTextModal').hide();
        });


        // $('#inputfile').change(function(){
        //     var file_data = $('#inputfile').prop('files')[0];
        //     var form_data = new FormData();
        //     form_data.append('file', file_data);
        //     $.ajax({
        //         url: "upload.php",
        //         type: "POST",
        //         data: form_data,
        //         contentType: false,
        //         cache: false,
        //         processData:false,
        //         success: function(data){
        //             console.log("successful upload");
        //         }
        //     });
        // });

        // function readURL(input) {
        // 	 if (input.files && input.files[0]) {
        // 			 var reader = new FileReader();
        // 			 var name=input.files[0]['name'];
        // 			 var ext = name.split('.').pop().toLowerCase();
        //
        // 			  if(jQuery.inArray(ext, ['gif','png','jpg','jpeg']) == -1)
        // 			  {
        // 			   $('#showError').append("<label class='alert alert-danger'>Invalid image type</label>");
        // 			  }
        // 				else{
        // 			 reader.onload = function (e) {
        // 				 $('#showError label').remove();
        // 					 $('#image_preview')
        // 					 .append("<div class='col-sm-4 col-xs-4'><img height='100' width='100' src='"+e.target.result+"'></div>");
        // 			 }
        //
        // 			 reader.readAsDataURL(input.files[0]);
        // 			 }
        // 		 }
        // }
        //
        // $("#inputFile").change(function () {
        // 	 readURL(this);
        // 	 var file_data = $('#inputFile').prop('files')[0];
        // 	    var form_data = new FormData();
        // 	    form_data.append('file', file_data);
        // 	    $.ajax({
        // 	        url: "upload.php",
        // 	        type: "POST",
        // 	        data: form_data,
        // 	        contentType: false,
        // 	        cache: false,
        // 	        processData:false,
        // 					beforeSend:function(){
        // 	     $('#showUploading').append("<label class='alert alert-success'>Image is Uploading...</label>");
        // 	    },
        // 	        success: function(data){
        // 							$('#showUploading label').remove();
        // 	        }
        // 	    });
        //
        //
        // });


        $("#downloadImage").click(function() {
            $("#editor").get(0).toBlob(function(blob) {
                saveAs(blob, "customizedImage.png");
            });
        });

        $(".column-tabs").click(function() {
            $(".column-tabs").removeClass("activemanual");
            $(this).addClass("activemanual");
        });

        $(".text-tabs").click(function() {
            $(".text-tabs").removeClass("activemanualtext");
            $(this).addClass("activemanualtext");
        });

        $(document).on('click', '.realdiv', function() {
            g_editor.canvas.discardActiveObject();
            g_editor.canvas.renderAll();
            $("#textSettingModal").modal("hide");
            $("#firstlook").show();

        });

        $(document).on('click', '.realdivShapes', function() {
            g_editor.canvas.discardActiveObject();
            g_editor.canvas.renderAll();
            $("#shapesSettingModal").modal("hide");
            $("#firstlook").show();

        });

        $(document).on('click', '#addTextSetting', function() {
            $("#textSettingModal").modal("hide");
            $("#textModal").modal("show");
        });

        $(document).on("click", "#textModalFirstlook", function() {
            $('#firstlook').hide();
        });

        $(document).on('click', '.add_text', function() {
            //alert("Hi");
            var selected_object = g_editor.canvas.getActiveObject();

            var new_text = $('#new_text').val();
            if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
                selected_object.set("text", new_text);
                // g_editor.canvas.sendToBack(selected_object);
                g_editor.canvas.renderAll();
                g_editor.save_canvas();
            } else if ((selected_object != null) && (selected_object.type == "group")) {
                selected_object.set("originalText", new_text);
                add_curved_text(selected_object.get("originalText"), selected_object.get("top"), selected_object.get("left"));
                // g_editor.canvas.sendToBack(selected_object);
                g_editor.canvas.renderAll();
                g_editor.save_canvas();
            } else {
                add_text(new_text, false, false);
            }
            $("#textModal").modal("hide");
            $("#firstlook").hide();
            $("#textSettingModal").modal("show");
        });

        function add_text(txt, left, right) {
            var text = create_text_elmt(txt);


            g_editor.canvas.add(text);
            g_editor.canvas.setActiveObject(text);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(text);
            g_editor.save_canvas();

            text.on("selected", function() {
                $('#firstlook').hide();
                $('#textSettingModal').modal('hide');
                $('#shapesSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#textModal").modal("show");
            });

        }


        //
        // $(document).on('change','#angle-control',function(){
        //
        //   var sliderValue=$('#angle-control').val();
        //
        // 	var flipped=false;
        // 	var selected_object = g_editor.canvas.getActiveObject();
        //  if ((selected_object != null) && (selected_object.type == "text"))
        //  {
        // 	 if(sliderValue>55)
        // 		 flipped=true;
        // 		 var CurvedText = new fabric.CurvedText(selected_object.get("text"),{
        // 	        // width: 100,
        // 	        // height: 50,
        // 				 left: selected_object.get("left"),
        // 				 top: selected_object.get("top"),
        // 				 textAlign: 'center',
        // 				 fill: selected_object.get("fill"),
        // 				 radius: 50+10*(sliderValue-55),
        // 				 fontSize: 20,
        // 				 spacing: 20+5*(sliderValue-55),
        // 				 flipped:flipped,
        // 	       fontFamily:selected_object.get("fontFamily"),
        // 				 originX:selected_object.get("originX"),
        // 				 kerning:0.5*(sliderValue-55),
        // 		 });
        //
        // 		 g_editor.canvas.remove(selected_object);
        // 		 g_editor.canvas.setActiveObject(CurvedText);
        //
        // 		 g_editor.canvas.add(CurvedText).renderAll();
        // 		 CurvedText.on('selected', function() {
        // 			 console.log(typeof CurvedText);
        // 			 $("#textModal").modal("show");
        //
        // 		 });
        // 	}
        //  else{
        //
        // 	if((selected_object != null) && (selected_object.type == "curved-text")){
        // 		if(sliderValue>=55){
        // 			// selected_object.set("fontSize",selected_object.get("fontSize")+0.1*(sliderValue-55));
        // 			selected_object.set("radius",50+10*(sliderValue-55));
        // 			selected_object.set("kerning",0.5*(sliderValue-55));
        // 			// selected_object.set("angle",-Math.PI*(sliderValue-55));
        // 			selected_object.set("spacing",20+10*(sliderValue-55));
        // 			selected_object.set("flipped",true);
        // 			selected_object.set("originX",selected_object.get("originX"));
        //
        // 		}else if(sliderValue<=45){
        // 			// selected_object.set("fontSize",selected_object.get("fontSize")+(45-sliderValue));
        // 			selected_object.set("radius",50+10*(45-sliderValue));
        // 			selected_object.set("kerning",0.5*(45-sliderValue));
        // 			selected_object.set("flipped",false);
        // 			selected_object.set("originX",selected_object.get("originX"));
        //
        // 		}
        // 		else{
        // 			var text = new fabric.Text(selected_object.get("text"),{
        //
        // 					left: selected_object.get("left"),
        // 					top: selected_object.get("top"),
        // 					textAlign: 'center',
        // 					fill: selected_object.get("fill"),
        // 					radius: 50,
        // 					fontSize: 20,
        // 					spacing: 20,
        // 		      fontFamily:selected_object.get("fontFamily"),
        // 					originX:selected_object.get("originX")
        // 			});
        //
        // 			g_editor.canvas.remove(selected_object);
        // 			g_editor.canvas.setActiveObject(text);
        // 			g_editor.canvas.add(text);
        //
        // 								text.on("selected",function(){
        // 									console.log(typeof text);
        // 									$("#textModal").modal("show");
        // 								});
        //
        //
        // 		}
        // 		g_editor.canvas.renderAll();
        // 	}
        // }
        //
        // });

        $(document).on('change', '#angle-control', function() {
            var sliderValue = $('#angle-control').val();
            var is_curved = $("#cb-curved").is(":checked");
            var selected_object = g_editor.canvas.getActiveObject();
            if (is_curved) {
                if (selected_object != null) {
                    var left = selected_object.get("left");
                    var top = selected_object.get("top");
                    if (selected_object.type == "text") {
                        var text = selected_object.get("text");
                        // g_editor.canvas.remove(selected_object);
                        add_curved_text(text, top, left);
                        //g_editor.save_canvas();
                        g_editor.canvas.renderAll();
                        g_editor.save_canvas();
                        $("#cb-curved").attr('checked', 'checked');
                    }
                }
            } else {
                if (selected_object != null) {
                    var left = selected_object.get("left");
                    var top = selected_object.get("top");
                    if (selected_object.type == "group") {
                        var text = selected_object.get("originalText");
                        // g_editor.canvas.remove(selected_object);
                        add_text(text, top, left);
                        //g_editor.save_canvas();
                        g_editor.canvas.renderAll();
                        g_editor.save_canvas();
                    }
                }
            }
        });

        $("#angle-control").change(function() {
            var selected_object = g_editor.canvas.getActiveObject();
            if ((selected_object != null) && (selected_object.type == "group"))
                recreate_group(selected_object);
        });

        function recreate_group(group) {
            var left = group.get("left");
            var top = group.get("top");
            // g_editor.canvas.remove(group);
            add_curved_text(group.originalText, top, left);
        }

        function add_curved_text(str, custom_top, custom_left) {
            var len = str.length;
            var s;
            var selected_object = g_editor.canvas.getActiveObject();

            var color = selected_object.get("fill");

            if ($('#angle-control').val() > 50) {

                var radius = 50 + ($("#angle-control").val() - 50);
                // var kerning=0.5*($('#angle-control').val()-55);
                var spacing = 10 + ($("#angle-control").val() - 50);
                var fontFamily = selected_object.get("fontFamily");
                g_editor.canvas.remove(selected_object);
                var textH = true;
            } else if ($('#angle-control').val() < 45) {

                var radius = 50 + (45 - $("#angle-control").val());
                var spacing = 10 + (45 - $("#angle-control").val());
                var fontFamily = selected_object.get("fontFamily");
                g_editor.canvas.remove(selected_object);
                var textH = true;
            } else {
                if (selected_object.type == "group") {
                    var txt = selected_object.get("originalText");
                } else {
                    var txt = selected_object.get("text");
                }
                var text = new fabric.Text(txt, {
                    top: selected_object.get("top"),
                    left: selected_object.get("left"),
                    fontSize: 20,
                    textAlign: 'center',
                    fontWeight: 'normal',
                    fontStyle: 'bold',
                    textDecoration: 'none',
                    fill: selected_object.get("fill"),
                    fontFamily: selected_object.get("fontFamily"),
                    opacity: 1,
                    // originX:'center'

                    //backgroundColor: bgColor

                });

                g_editor.canvas.remove(selected_object);
                g_editor.canvas.add(text);
                g_editor.canvas.setActiveObject(text);

                g_editor.canvas.renderAll();
                // g_editor.canvas.sendToBack(text);
                g_editor.save_canvas();
                text.on("selected", function() {
                    $('#firstlook').hide();
                    $('#textSettingModal').modal('hide');
                    $('#shapesSettingModal').modal('hide');
                    $('#imageSettingModal').modal('hide');
                    $('#textModal').modal('show');
                });
                var textH = false;

            }

            if (textH) {

                if (!radius)
                    radius = 150;
                if (!spacing)
                    spacing = 10;
                var curAngle = 0;
                var angleRadians = 0;
                var align = 0;
                var centerX = g_editor.canvas.getWidth() / 2;
                var centerY = g_editor.canvas.getHeight() - 30;
                align = (spacing / 2) * (len - 1);
                var reverse = false;
                if ($('#angle-control').val() > 50) {
                    reverse = true;
                }
                var coef = 1;
                if (reverse)
                    coef = -1;
                var items = [];
                for (var n = 0; n < len; n++) {
                    s = str[n];
                    var text = create_text_elmt(s);
                    curAngle = (n * parseInt(spacing, 10)) - align;
                    angleRadians = curAngle * (Math.PI / 180);
                    if (reverse) {
                        curAngle = (-n * parseInt(spacing, 10)) + align;
                        angleRadians = curAngle * (Math.PI / 180);
                    }

                    var top = (centerX + (-Math.cos(angleRadians) * radius)) * coef;
                    var left = (centerY + (Math.sin(angleRadians) * radius)) * coef;
                    text.set('top', top);
                    text.set('left', left);
                    text.set('Angle', curAngle);
                    text.set('fill', color);
                    text.set('fontFamily', fontFamily);
                    items.push(text);
                }

                var group = new fabric.Group(items, {

                    left: 150,
                    top: 100,
                    // fontFamily: fontFamily,
                    //                fontSize: font_size,
                    //                fontWeight: fontWeight,
                    //                fontStyle: fontStyle,
                    //                textDecoration: textDecoration,
                    // selectable: true,
                    // fill: 'blue',
                    //                opacity: opacity,
                });

                if (custom_top != null)
                    g_editor.canvas.setActiveObject(group);
                group.on("selected", function() {
                    $('#firstlook').hide();
                    $('#textSettingModal').modal('hide');
                    $('#shapesSettingModal').modal('hide');
                    $('#imageSettingModal').modal('hide');
                    $("#textModal").modal("show");
                });
                //g_editor.setCustomProperties(group);
                group["originalText"] = str;
                group["radius"] = radius;
                group["spacing"] = spacing;
                group["fill"] = color;
                group["fontFamily"] = fontFamily,
                    g_editor.canvas.add(group);
                if (custom_top == null)
                    group.center();
                else {
                    group.set("left", custom_left);
                    group.set("top", custom_top);
                    group.set("fontFamily", fontFamily);
                    group.set("fill", color);
                }


                g_editor.canvas.renderAll();
                // g_editor.canvas.sendToBack(group);
                g_editor.save_canvas();
                // g_editor.canvas.sendBackwards(group);
                group.setCoords();
            }

        }

        $(document).on("click", "#rectangle", function() {


            var rect = new fabric.Rect({
                top: 150,
                left: 180,
                width: 75,
                height: 50,
                fill: 'blue',


                originX: 'center'
            });


            rect.on("selected", function() {
                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });


            g_editor.canvas.add(rect);
            g_editor.canvas.setActiveObject(rect);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(rect);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");



        });

        $(document).on("click", "#square", function() {


            var square = new fabric.Rect({
                top: 150,
                left: 180,
                width: 50,
                height: 50,
                fill: 'blue',


                originX: 'center'
            });

            square.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });


            g_editor.canvas.add(square);
            g_editor.canvas.setActiveObject(square);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(square);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");

        });

        $(document).on("click", "#rounded_square", function() {


            var rsquare = new fabric.Rect({
                top: 150,
                left: 180,
                width: 50,
                height: 50,
                cornersize: 100,
                fill: 'blue',
                rx: 10,
                ry: 10,
                originX: 'center'
            });

            rsquare.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });


            g_editor.canvas.add(rsquare);
            g_editor.canvas.setActiveObject(rsquare);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(square);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");

        });

        $(document).on("click", "#ellipse", function() {

            var eli = new fabric.Ellipse({
                top: 150,
                left: 110,
                rx: 50,
                ry: 25,
                fill: 'blue',

                strokeWidth: 4,
            });

            eli.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });


            g_editor.canvas.add(eli);
            g_editor.canvas.setActiveObject(eli);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(eli);
            g_editor.save_canvas();

            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");

        });

        $(document).on("click", "#circle", function() {

            var cir = new fabric.Circle({
                top: 100,
                left: 180,
                radius: 25,
                fill: 'blue',


                originX: 'center'
            });
            cir.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });


            g_editor.canvas.add(cir);
            g_editor.canvas.setActiveObject(cir);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(cir);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");
        });

        $(document).on("click", "#triangle", function() {

            var tri = new fabric.Triangle({
                top: 100,
                left: 180,
                width: 50,
                height: 50,
                fill: 'blue',


                originX: 'center'
            });
            tri.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });


            g_editor.canvas.add(tri);
            g_editor.canvas.setActiveObject(tri);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(tri);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");

        });

        $(document).on("click", "#heart", function(e) {

            var heart = new fabric.Path('M 272.70141,238.71731 \
						C 206.46141,238.71731 152.70146,292.4773 152.70146,358.71731  \
						C 152.70146,493.47282 288.63461,528.80461 381.26391,662.02535 \
						C 468.83815,529.62199 609.82641,489.17075 609.82641,358.71731 \
						C 609.82641,292.47731 556.06651,238.7173 489.82641,238.71731  \
						C 441.77851,238.71731 400.42481,267.08774 381.26391,307.90481 \
						C 362.10311,267.08773 320.74941,238.7173 272.70141,238.71731  \
						z ');
            var scale = 100 / heart.width;
            heart.set({
                left: 140,
                top: 140,
                scaleX: scale,
                scaleY: scale,
                fill: 'blue',
                opacity: 1,
                selectable: true
            });


            heart.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });


            g_editor.canvas.add(heart);
            g_editor.canvas.setActiveObject(heart);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(heart);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");
        });


        var trapezoid = [{
            x: -100,
            y: -50
        }, {
            x: 100,
            y: -50
        }, {
            x: 150,
            y: 50
        }, {
            x: -150,
            y: 50
        }];
        var emerald = [{
                x: 35,
                y: 90
            },
            {
                x: 63,
                y: 90
            },
            {
                x: 86,
                y: 74
            },
            {
                x: 95,
                y: 47
            },
            {
                x: 86,
                y: 19
            },
            {
                x: 63,
                y: 0
            },
            {
                x: 35,
                y: 0
            },
            {
                x: 11,
                y: 19
            },
            {
                x: 0,
                y: 45
            },
            {
                x: 11,
                y: 72
            },
        ];
        var star4 = [{
                x: 26,
                y: 90
            },
            {
                x: 65,
                y: 90
            },
            {
                x: 88,
                y: 57
            },
            {
                x: 81,
                y: 18
            },
            {
                x: 45,
                y: 0
            },
            {
                x: 12,
                y: 18
            },
            {
                x: 0,
                y: 58
            }
        ];
        var star5 = [{
                x: 46,
                y: 90
            },
            {
                x: 58,
                y: 56
            },
            {
                x: 93,
                y: 55
            },
            {
                x: 65,
                y: 35
            },
            {
                x: 77,
                y: 0
            },
            {
                x: 48,
                y: 22
            },
            {
                x: 19,
                y: 0
            },
            {
                x: 30,
                y: 35
            },
            {
                x: 0,
                y: 56
            },
            {
                x: 37,
                y: 56
            }
        ];
        var polygon3 = [{
                x: 0,
                y: 50
            },
            {
                x: 45,
                y: 80
            },
            {
                x: 85,
                y: 50
            },
            {
                x: 70,
                y: 0
            },
            {
                x: 17,
                y: 0
            }
        ];
        var polygon4 = [{
                x: 45,
                y: 90
            },
            {
                x: 90,
                y: 70
            },
            {
                x: 90,
                y: 20
            },
            {
                x: 45,
                y: 0
            },
            {
                x: 0,
                y: 20
            },
            {
                x: 0,
                y: 70
            }
        ];
        var star8 = [{
                x: 46,
                y: 90
            },
            {
                x: 52,
                y: 63
            },
            {
                x: 77,
                y: 78
            },
            {
                x: 61,
                y: 53
            },
            {
                x: 89,
                y: 46
            },
            {
                x: 61,
                y: 40
            },
            {
                x: 77,
                y: 14
            },
            {
                x: 52,
                y: 30
            },
            {
                x: 46,
                y: 0
            },
            {
                x: 37,
                y: 30
            },
            {
                x: 14,
                y: 14
            },
            {
                x: 27,
                y: 39
            },
            {
                x: 0,
                y: 46
            },
            {
                x: 27,
                y: 53
            },
            {
                x: 13,
                y: 77
            },
            {
                x: 37,
                y: 62
            }
        ];
        var star10 = [{
                x: 35,
                y: 90
            },
            {
                x: 50,
                y: 81
            },
            {
                x: 63,
                y: 90
            },
            {
                x: 69,
                y: 73
            },
            {
                x: 88,
                y: 73
            },
            {
                x: 82,
                y: 56
            },
            {
                x: 96,
                y: 46
            },
            {
                x: 82,
                y: 36
            },
            {
                x: 87,
                y: 18
            },
            {
                x: 70,
                y: 18
            },
            {
                x: 63,
                y: 0
            },
            {
                x: 49,
                y: 12
            },
            {
                x: 35,
                y: 0
            },
            {
                x: 28,
                y: 18
            },
            {
                x: 11,
                y: 18
            },
            {
                x: 17,
                y: 35
            },
            {
                x: 0,
                y: 46
            },
            {
                x: 17,
                y: 56
            },
            {
                x: 11,
                y: 73
            },
            {
                x: 28,
                y: 73
            }
        ];
        var shape = new Array(trapezoid, emerald, star4, star5, polygon3, polygon4, star8, star10);


        $(document).on("click", "#polygon", function() {
            var polyg = new fabric.Polygon(shape[1], {
                top: 100,
                left: 100,
                fill: 'blue',

                strokeWidth: 2
            });
            polyg.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });


            g_editor.canvas.add(polyg);
            g_editor.canvas.setActiveObject(polyg);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(polyg);
            g_editor.save_canvas();

            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");
        });

        $(document).on("click", "#polygon3", function() {
            var polyg3 = new fabric.Polygon(shape[4], {
                top: 200,
                left: 225,
                fill: 'blue',

                angle: 180,
                strokeWidth: 2
            });
            polyg3.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });


            g_editor.canvas.add(polyg3);
            g_editor.canvas.setActiveObject(polyg3);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(polyg3);
            g_editor.save_canvas();

            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");
        });

        $(document).on("click", "#polygon1", function() {
            var polyg1 = new fabric.Polygon(shape[2], {
                top: 220,
                left: 240,
                angle: 180,
                fill: 'blue',

                strokeWidth: 2
            });
            polyg1.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });



            g_editor.canvas.add(polyg1);
            g_editor.canvas.setActiveObject(polyg1);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(polyg1);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");

        });

        $(document).on("click", "#polygon4", function() {
            var polyg4 = new fabric.Polygon(shape[5], {
                top: 220,
                left: 240,
                angle: 180,
                fill: 'blue',

                strokeWidth: 2
            });
            polyg4.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });



            g_editor.canvas.add(polyg4);
            g_editor.canvas.setActiveObject(polyg4);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(polyg4);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");

        });

        $(document).on("click", "#star", function() {
            var star = new fabric.Polygon(shape[3], {
                top: 220,
                left: 240,
                angle: 180,
                fill: 'blue',

                strokeWidth: 2
            });
            star.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });



            g_editor.canvas.add(star);
            g_editor.canvas.setActiveObject(star);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(star);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");

        });

        $(document).on("click", "#star1", function() {
            var star1 = new fabric.Polygon(shape[6], {
                top: 220,
                left: 240,
                angle: 180,
                fill: 'blue',

                strokeWidth: 2
            });
            star1.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });



            g_editor.canvas.add(star1);
            g_editor.canvas.setActiveObject(star1);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(star1);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");

        });


        $(document).on("click", "#star2", function() {
            var star2 = new fabric.Polygon(shape[7], {
                top: 220,
                left: 240,
                angle: 180,
                fill: 'blue',

                strokeWidth: 2
            });
            star2.on("selected", function() {

                $('#textSettingModal').modal('hide');
                $('#imageSettingModal').modal('hide');
                $("#firstlook").hide();
                $("#shapesSettingModal").modal("show");
            });



            g_editor.canvas.add(star2);
            g_editor.canvas.setActiveObject(star2);

            g_editor.canvas.renderAll();
            // g_editor.canvas.sendToBack(star2);
            g_editor.save_canvas();


            $("#shapesModal").modal("hide");
            $('#firstlook').hide();
            $("#shapesSettingModal").modal("show");

        });

        $(document).on("click", "#cloneShape", function() {
            var Aobj = g_editor.canvas.getActiveObject(); //canLayer.item(0);
            Aobj.clone(function(o) {
                var vobj = o;
                if (vobj) {
                    vobj.set({
                        left: Aobj.get('left') + 5,
                        top: Aobj.get('top') + 5
                    });
                    g_editor.canvas.add(vobj);
                    // vobj.set('fill', '#fff');
                    // vobj.set('width', 60);
                    g_editor.canvas.renderAll();
                    g_editor.save_canvas();
                    vobj.on("selected", function() {

                        if (vobj.type == "text" || vobj.type == "group") {
                            $('#imageSettingModal').modal("hide");
                            $('#shapesSettingModal').modal("hide");
                            $('#textModal').modal('show');
                        } else if (vobj.type == "image") {
                            $('#firstlook').hide();
                            $('#textSettingModal').modal("hide");
                            $('#shapesSettingModal').modal("hide");
                            $('#imageSettingModal').modal('show');
                        } else {
                            $('#firstlook').hide();
                            $('#imageSettingModal').modal("hide");
                            $('#textSettingModal').modal("hide");
                            $('#shapesSettingModal').modal('show');
                        }
                    });
                } else {
                    alert("Sorry Object Not Initialized");
                }
            });
            // var object = fabric.util.object.clone(g_editor.canvas.getActiveObject());
            // object.set("top", object.top+5);
            // object.set("left", object.left+5);
            // g_editor.canvas.add(object);
            // g_editor.canvas.renderAll();

        });

        $(document).on("click", "#deleteShapesObject", function() {

            if (g_editor.canvas.getActiveObject().type == "text" || g_editor.canvas.getActiveObject().type == "group") {
                $('#textSettingModal').modal('hide');
                $('#firstlook').show();
            } else if (g_editor.canvas.getActiveObject().type == "image") {
                $('#imageSettingModal').modal('hide');
                $('#firstlook').show();
            } else {
                $('#shapesSettingModal').modal('hide');
                $('#firstlook').show();
            }
            g_editor.canvas.remove(g_editor.canvas.getActiveObject());
            g_editor.canvas.renderAll();
            g_editor.save_canvas();
        });

        $(document).on("click", "#sendBackward", function() {
            g_editor.canvas.sendToBack(g_editor.canvas.getActiveObject());
        });

        $(document).on("click", "#sendForward", function() {
            g_editor.canvas.bringToFront(g_editor.canvas.getActiveObject());
        });

        $(document).on("click", "#redShape", function() {
            g_editor.canvas.getActiveObject().set("fill", "red");
            g_editor.canvas.renderAll();
            g_editor.save_canvas();
        });

        $(document).on("change", "input[name=color]", function() {

            var selected_object = g_editor.canvas.getActiveObject();
            if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
                var value = $('input[name=color]:checked').val();
                selected_object.set({
                    fill: value
                });
                g_editor.canvas.renderAll();
                g_editor.save_canvas();
            } else if (selected_object.type == "group") {
                var value = $('input[name=color]:checked').val();
                selected_object.set("fill", value);
                add_curved_text(selected_object.get("originalText"), selected_object.get("top"), selected_object.get("left"));
                g_editor.canvas.renderAll();
                g_editor.save_canvas();
            }

        });

        $(document).on("change", "input[name=shapesColor]", function() {
            var selected_object = g_editor.canvas.getActiveObject();
            if ((selected_object != null)) {
                var value = $('input[name=shapesColor]:checked').val();
                selected_object.set({
                    fill: value
                });
                g_editor.canvas.renderAll();
                g_editor.save_canvas();
            }

        });

        $("#fontModalList li").on('click', function() {

            var selected_object = g_editor.canvas.getActiveObject();
            if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
                var value = $(this).attr("data-id");
                selected_object.set("fontFamily", value);
                g_editor.canvas.renderAll();
                g_editor.save_canvas();
            } else if ((selected_object != null) && (selected_object.type == "group")) {
                var value = $(this).attr("data-id");
                selected_object.forEachObject(function(a) {
                    a.set('fontFamily', value);

                    g_editor.canvas.renderAll();
                    g_editor.save_canvas();

                });
                // add_curved_text(selected_object.get("originalText"),selected_object.get("top"),selected_object.get("left"));
                // g_editor.canvas.renderAll();
            }

        });

        $(document).on("click", "#alignTextLeft", function() {
            var selected_object = g_editor.canvas.getActiveObject();
            if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
                selected_object.set("textAlign", "left");
                g_editor.canvas.renderAll();
                g_editor.save_canvas();
            } else if ((selected_object != null) && (selected_object.type == "group")) {

                selected_object.forEachObject(function(a) {
                    a.set("textAlign", 'left');
                    g_editor.canvas.renderAll();
                    g_editor.save_canvas();
                });
            }
        });

        $(document).on("click", "#alignTextCenter", function() {
            var selected_object = g_editor.canvas.getActiveObject();
            if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
                selected_object.set("textAlign", "center");
                g_editor.canvas.renderAll();
                g_editor.save_canvas();
            } else if ((selected_object != null) && (selected_object.type == "group")) {

                selected_object.forEachObject(function(a) {
                    a.set("textAlign", 'center');
                    g_editor.canvas.renderAll();
                    g_editor.save_canvas();
                });
            }
        });

        $(document).on("click", "#alignTextRight", function() {
            var selected_object = g_editor.canvas.getActiveObject();
            if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {

                selected_object.set("textAlign", "right");
                g_editor.canvas.renderAll();
                g_editor.save_canvas();
            } else if ((selected_object != null) && (selected_object.type == "group")) {

                selected_object.forEachObject(function(a) {
                    a.set("textAlign", 'right');
                    g_editor.canvas.renderAll();
                    g_editor.save_canvas();
                });
            }
        });



        g_editor.canvas.on('object:moving', function(o) {
            var activeObj = o.target;
            g_editor.canvas.sendToBack(activeObj);
            activeObj.set({
                'borderColor': 'green',
                'cornerColor': 'green'
            });


        });

        function create_text_elmt(txt) {
            var text = new fabric.Text(txt, {
                top: 170,
                left: 150,
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'normal',
                fontStyle: 'bold',
                textDecoration: 'none',
                fill: 'black',
                opacity: 1,
                // originX:'center'

                //backgroundColor: bgColor

            });
            // text.set("originX", "center");
            // text.set("originY", "center");
            return text;
        }



    });
    return g_editor;
}(jQuery, (G_EDITOR || {})));
