/********************************************************************************************/
/********************************************************************************************/
/*******************************       WINDOWS METRO           ******************************/
/********************************************************************************************/
/********************************************************************************************/

var components = {
	items : {
		basic : {
			title :'Basic',
			items : [ prx.components.text, prx.components.richtext,
					prx.components.rectangle, prx.components.circle, prx.components.horizontalline,
					prx.components.verticalline, prx.components.actionarea, prx.components.animationtarget,
					prx.components.image, prx.components.icon, prx.components.placeholder, prx.components.webview,
					prx.components.html, prx.components.audio, prx.components.video,
					prx.components.tooltip
			]
		},

		common : {
			title :'Common UI Elements',
			items : [ 
			         prx.components.metro_button,
			         prx.components.metro_icon,
			         prx.components.metro_badge,
			         prx.components.metro_tile_user,
			         prx.components.metro_tile_systeminfo
			         ]
		},
		tiles : {
			title :'Tiles',
			items : [ 
			         prx.components.metro_tile_plain,
			         prx.components.metro_tile_icon,
			         prx.components.metro_tile_image,
			         prx.components.metro_tile_image_withcaption,
			         prx.components.metro_tile_text
			         
			         ]
		},
		interactions : {
			title :'Menus',
			items : [ 
			         prx.components.metro_appbar,
			         prx.components.metro_appbar_mini,
			         prx.components.metro_charms,
			         prx.components.metro_filters,
			         prx.components.metro_contextmenu,
			         prx.components.metro_dropdown,
			         prx.components.metro_dropdown_withselection
			         ]
		},
		forms : {
			title :'Forms',
			items : [ 
					prx.components.metro_textfield,
					prx.components.metro_passwordfield, 
					prx.components.metro_textarea,
					prx.components.metro_select,
					prx.components.metro_radiobutton,
					prx.components.metro_checkbox, 
					prx.components.metro_onoff,
					prx.components.metro_slider,
					prx.components.metro_range,
					prx.components.metro_progress,
			         
			         ]
		},

		notifications : {
			title :'Notifications',
			items : [ 
			         prx.components.metro_dialog,
			         prx.components.metro_flyout,
			         prx.components.metro_warningbar,
			         prx.components.metro_toast_mini,
			         prx.components.metro_toast
			         ]
		}
	}
};
