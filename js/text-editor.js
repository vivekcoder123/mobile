var G_EDITOR = (function ($, g_editor) {
		$(document).ready( function() {
			// ADD TEXT
			$(document).on('click','#gs-add-text',function() {
				var new_text = $('#new-text').val();
				add_text(new_text, false, false);

			});
			// CHANGE FONT SIZE
			$(document).on('change','#font-size-selector',function() {
				var selected_object = g_editor.canvas.getActiveObject();
			            var font_size = parseInt($("#font-size-selector").val());
			            if ((selected_object != null) &&(selected_object.type=="text"))
			            {
			                selected_object.set("fontSize",parseInt(font_size));
			                g_editor.canvas.renderAll();
				    }
			            else if ((selected_object != null) && (selected_object.type == "group"))
			            {
			                recreate_group(selected_object);
			            }
			});
			// CHANGE FONT FAMILY
			$("#font-family-selector").trigger('change');
        		$("#font-family-selector").css('font-family', $("#font-family-selector").val());
			$(document).on('change','#font-family-selector',function() {
			    var selected_object=g_editor.canvas.getActiveObject();
		            var font_size=parseInt($("#font-size-selector").val());
		            var font_family=$("#font-family-selector").val();
		            $("#font-family-selector").css('font-family', font_family);
		            if((selected_object!=null)&&(selected_object.type=="text"))
		            {
		                selected_object.set('fontFamily',font_family );
		                if(font_size)
		                    selected_object.set("fontSize",parseInt(font_size));
		                g_editor.canvas.renderAll();
		                // g_editor.save_canvas();
		            }
		            else if((selected_object!=null)&&(selected_object.type=="group"))
		            {
		                selected_object.forEachObject(function(a) {
		                    a.set('fontFamily', font_family);
		                    if(font_size)
		                        a.set("fontSize",parseInt(font_size));
		                    g_editor.canvas.renderAll();
		                //     g_editor.save_canvas();
		                });
		            }
			});
			// ALIGN TEXT
			$(".txt-align").change(function () {
		            var align=$(this).val();
		            var selected_object = g_editor.canvas.getActiveObject();
		            if ((selected_object != null) && (selected_object.type == "text"))
		            {
		                    selected_object.set("textAlign", align);
		                    g_editor.canvas.renderAll();
		            }
		            else if ((selected_object != null) && (selected_object.type == "group"))
		            {
		                selected_object.forEachObject(function (a) {
		                    a.set("textAlign", align);
		                    g_editor.canvas.renderAll();
		                });
		            }
		        });
			// BOLD STYLE
		        $("#bold-cb").change(function () {
		            var selected_object = g_editor.canvas.getActiveObject();
		            var is_bold = $("#bold-cb").is(":checked");
		            if ((selected_object != null) && (selected_object.type == "text"))
		            {
		                if (is_bold)
		                    selected_object.set("fontWeight", "bold");
		                else
		                    selected_object.set("fontWeight", "normal");
		                g_editor.canvas.renderAll();
		            }
		            else if ((selected_object != null) && (selected_object.type == "group"))
		            {
		                selected_object.forEachObject(function (a) {
		                    if (is_bold)
		                        a.set("fontWeight", "bold");
		                    else
		                        a.set("fontWeight", "normal");
		                    g_editor.canvas.renderAll();
		                });
		            }
		        });

			// ITALIC STYLE
			$("#italic-cb").change(function () {
		            var selected_object = g_editor.canvas.getActiveObject();
		            var is_italic = $("#italic-cb").is(":checked");
		            if ((selected_object != null) && (selected_object.type == "text"))
		            {
		                if (is_italic)
		                    selected_object.set("fontStyle", "italic");
		                else
		                    selected_object.set("fontStyle", "normal");
		                g_editor.canvas.renderAll();
		            }
		            else if ((selected_object != null) && (selected_object.type == "group"))
		            {
		                selected_object.forEachObject(function (a) {
		                    if (is_italic)
		                        a.set("fontStyle", "italic");
		                    else
		                        a.set("fontStyle", "normal");
		                    g_editor.canvas.renderAll();
		                });
		            }
		        });

			// THICKNESS SLIDE
			$("#o-thickness-slider").change(function () {
		            var selected_object = g_editor.canvas.getActiveObject();
		            if ((selected_object != null) && (selected_object.type == "text"))
		            {
		                if ($(this).val() > 0)
		                {
		                    var stroke = $("#txt-outline-color-selector").css('background-color');
		                    selected_object.set("strokeWidth", parseInt($(this).val()));
		                    selected_object.set("stroke", stroke);
		                }
		                else
		                    selected_object.set("stroke", false);
		                g_editor.canvas.renderAll();
		            }
		            else if ((selected_object != null) && (selected_object.type == "group"))
		            {
		                recreate_group(selected_object);
		            }
		        });

			// CHECK CURVED ACTIVE
			$("#cb-curved").change(function () {
		            var is_curved = $("#cb-curved").is(":checked");
		            var selected_object = g_editor.canvas.getActiveObject();
		            if (is_curved)
		            {
		                if (selected_object != null)
		                {
		                    var left = selected_object.get("left");
		                    var top = selected_object.get("top");
		                    if (selected_object.type == "text")
		                    {
		                        var text = selected_object.get("text");
		                        g_editor.canvas.remove(selected_object);
		                        add_curved_text(text, top, left);
		                        //g_editor.save_canvas();
		                        g_editor.canvas.renderAll();
		                        $("#cb-curved").attr('checked', 'checked');
		                    }
		                }
		            }
		            else
		            {
		                if (selected_object != null)
		                {
		                    var left = selected_object.get("left");
		                    var top = selected_object.get("top");
		                    if (selected_object.type == "group")
		                    {
		                        var text = selected_object.get("originalText");
		                        g_editor.canvas.remove(selected_object);
		                        add_text(text, top, left);
		                        //g_editor.save_canvas();
		                        g_editor.canvas.renderAll();
		                    }
		                }
		            }
		        });

			// CURVE RADIUS
			$("#curved-txt-radius-slider,#curved-txt-spacing-slider").change(function () {
		            var selected_object = g_editor.canvas.getActiveObject();
		            if ((selected_object != null) && (selected_object.type == "group"))
		                recreate_group(selected_object);
		        });

			// OPACITY SLIDER
			$("[id$='opacity-slider']").change(function () {
		            var selected_object = g_editor.canvas.getActiveObject();
		            if (selected_object != null)
		            {
		                selected_object.set("opacity", $(this).val());
		                g_editor.canvas.renderAll();
		                //g_editor.save_canvas();
		            }
		        });

			// TEXT DECORATION
			$(".txt-decoration").change(function () {
		            var selected_object = g_editor.canvas.getActiveObject();
		            var decoration=$(this).val();
		            if ((selected_object != null) && (selected_object.type == "text"))
		            {
		               var is_underlined = $("#underline-cb").is(":checked");
			       var is_linethrough = $("#strikethrough-cb").is(":checked");
			       var is_overline = $("#overline-cb").is(":checked");
		               if(is_underlined) {
				       selected_object.set("textDecoration", "underline");
			       }
		               else if(is_linethrough) {
				       selected_object.set("textDecoration", "line-through");
			       }
			       else if(is_overline) {
				       selected_object.set("textDecoration", "overline");
			       }
			       else {
				    selected_object.set("textDecoration", "none");
			       }
		                g_editor.canvas.renderAll();
			} else {
				alert("No Text Selected");
			}
		        });

			function add_curved_text(str, custom_top, custom_left) {
		            var len = str.length;
		            var s;
		            var radius = $("#curved-txt-radius-slider").val();
		            var spacing = $("#curved-txt-spacing-slider").val();
		            var font_color = $("#txt-color-selector").css('background-color');
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
		            var coef = 1;
		            if (reverse)
		                coef = -1;
		            var items = [];
		            for (var n = 0; n < len; n++) {
		                s = str[n];
		                var text = create_text_elmt(s);
		                curAngle = (n * parseInt(spacing, 10)) - align;
		                angleRadians = curAngle * (Math.PI / 180);
		                if (reverse)
		                {
		                    curAngle = (-n * parseInt(spacing, 10)) + align;
		                    angleRadians = curAngle * (Math.PI / 180);
		                }
		                var top = (centerX + (-Math.cos(angleRadians) * radius)) * coef;
		                var left = (centerY + (Math.sin(angleRadians) * radius)) * coef;
		                text.set('top', top);
		                text.set('left', left);
		                text.set('Angle',curAngle);
		                items.push(text);
		            }
		            var group = new fabric.Group(items, {
		                left: 150,
		                top: 100,
		//                fontFamily: fontFamily,
		//                fontSize: font_size,
		//                fontWeight: fontWeight,
		//                fontStyle: fontStyle,
		//                textDecoration: textDecoration,
		//                selectable: true,
		                fill: font_color,
		//                opacity: opacity,
		            });
		            if (custom_top != null)
		                g_editor.canvas.setActiveObject(group);
		            //g_editor.setCustomProperties(group);
		            group["originalText"] = str;
		            group["radius"] = radius;
		            group["spacing"] = spacing;
		            g_editor.canvas.add(group);
		            if (custom_top == null)
		                group.center();
		            else
		            {
		                group.set("left", custom_left);
		                group.set("top", custom_top);
		            }
		            //g_editor.save_canvas();
		            g_editor.canvas.renderAll();
			    g_editor.canvas.sendBackwards(group);
		            group.setCoords();
		        }

			$('#new-text').keyup(function()
			{
				var selected_object=g_editor.canvas.getActiveObject();
				var new_text=$('#new-text').val();
				if((selected_object!=null)&&(selected_object.type=="text"))
				{
					selected_object.set("text",new_text);
					//g_editor.save_canvas();
					g_editor.canvas.renderAll();
				}
				else if((selected_object!=null)&&(selected_object.type=="group"))
				{
					var left=selected_object.get("left");
					var top=selected_object.get("top");
					g_editor.canvas.remove(selected_object);
					add_curved_text(new_text, top, left);
				}
			});

			// SET COLOR
			$('[id$="color-selector"]').each(function () {
		            var id = $(this).attr("id");
			    palette_type ="default";
			    palette_tpl ="";
		            var initial_color = $(this).css("background-color");
		            if (!initial_color)
		                initial_color = "#0000ff";
			    if(palette_type == "custom")
		            {
		                $('#' + id).qtip({
		                    content: "<div class='wpc-custom-colors-container' data-id='" + id + "'>" + palette_tpl + "</div>",
		                    position: {
		                        corner: {
		                            target: 'middleRight',
		                            tooltip: 'leftTop'
		                        }
		                    },
		                    style: {
		                        width: 200,
		                        padding: 5,
		                        background: 'white',
		                        color: 'black',
		                        //                        textAlign: 'center',
		                        border: {
		                            width: 1,
		                            radius: 1,
		                            color: '#08AED6'
		                        }
		                    },
		                    tip: 'bottomLeft',
		                    show: 'click',
		                    hide: {when: {event: 'unfocus'}}
		                });
		            }
		            else
		            {
		                $('#' + id).ColorPicker({
		                    color: initial_color,
		                    onShow: function (colpkr) {
		                        $(colpkr).fadeIn(500);
		                        return false;
		                    },
		                    onHide: function (colpkr) {
		                        $(colpkr).fadeOut(500);
		                        var selected_object = g_editor.canvas.getActiveObject();
		                        if ((selected_object != null))
		                        {
		                            //g_editor.save_canvas();
		                        }
		                        return false;
		                    },
		                    onChange: function (hsb, hex, rgb) {
		                        g_editor.change_item_color(id, hex);
		                    }
		                });
		            }
		        });

			function add_text(txt, left, right) {
				var text = create_text_elmt(txt);
				g_editor.canvas.add(text);
				g_editor.canvas.sendBackwards(text);
				g_editor.canvas.renderAll();
			}

			function create_text_elmt(txt) {
			    var strokeWidth = $("#o-thickness-slider").val();
		            var fontWeight = "normal";
		            var textDecoration = "none";
		            var fontStyle = "";
		            var font_color = $("#txt-color-selector").css('background-color');
		            var fontFamily = $("#font-family-selector").val();
		            var font_size = parseInt($("#font-size-selector").val());
		            var opacity = $("#opacity-slider").val();
		            var strokeColor = $("#txt-outline-color-selector").css('background-color');
			    var is_bold = $("#bold-cb").is(":checked");
			    var is_underlined = $("#underline-cb").is(":checked");
		            var is_italic = $("#italic-cb").is(":checked");
		            if (is_bold)
		                fontWeight = "bold";
			    if (is_underlined)
				textDecoration = "underline";
		            if (is_italic)
		                fontStyle = "italic";
		            if (!fontFamily)
		                fontFamily = 'Arial';
		            if (!font_size)
		                font_size = 30;
		            if (!fontWeight)
		                fontWeight = "normal";
		            if (!font_color)
			                font_color = "rgb(198, 196, 196)";
				var text = new fabric.Text(txt, {
		                fontSize: 20,
				fontFamily: fontFamily,
		                fontWeight: fontWeight,
		                fontStyle: fontStyle,
		                textDecoration: textDecoration,
		                fill: font_color,
		                opacity: 1,
				left : g_editor.canvas.getWidth()/2 -30,
				top : g_editor.canvas.getHeight()/2
            			});
				return text;
			}

			function recreate_group(group) {
		            var left = group.get("left");
		            var top = group.get("top");
		            g_editor.canvas.remove(group);
		            add_curved_text(group.originalText, top, left);
		        }
		});
		return g_editor;
}(jQuery,(G_EDITOR || {})));
