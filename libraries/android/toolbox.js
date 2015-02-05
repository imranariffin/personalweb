/********************************************************************************************/
/********************************************************************************************/
/*******************************       ANDROID       ******************************/
/********************************************************************************************/
/** ***************************************************************************************** */

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
		}
		
		,
		toolbars : {
			title :'Toolbars',
			items : [ 
			         	//prx.components.android_toolbar,
			         	prx.components.android_actionbar,
			         	prx.components.android_actionbar_contextual,
			         	prx.components.basic_tabbar,
			         	prx.components.android_fixedtabbar,
			         	prx.components.android_scrollabletabbar,
			         	prx.components.android_statusbar,
			         	prx.components.android_navigationbar
			]
		}
		,
		buttons : {
			title :'Buttons',
			items : [ 
			         prx.components.android_button
			         ,prx.components.android_borderlessbutton
			         ,prx.components.android_actionoverflow,
			]
		}
		,
		forms : {
			title :'Forms',
			items : [ 
			         prx.components.android_label
			         ,prx.components.android_textfield
			         ,prx.components.android_textarea
			         ,prx.components.android_passwordfield
			         ,prx.components.android_checkbox
			         ,prx.components.android_radiobutton
			         ,prx.components.android_spinner
			         ,prx.components.android_dropdown
			         ,prx.components.android_onoffswitch
			         ,prx.components.android_onoffswitch_kitkat
			         ,prx.components.android_slider
			]
		}
		,
		lists : {
			title :'Lists',
			items : [ 
			         prx.components.android_listdivider
			         ,prx.components.android_listbasic
			         ,prx.components.android_listwithsubtitle
			         ,prx.components.android_listwithicon
			         ,prx.components.android_listwithiconandsubtitle
			         ,prx.components.android_listwiththumbnail
			         ,prx.components.android_listwiththumbnailandsubtitle
			         ,prx.components.android_listradio
			         ,prx.components.android_listcheckbox
			         ,prx.components.android_listcomplex
			]
		}
		,
		bars : {
			title :'Progress Bars',
			items : [ 
			         prx.components.android_progressbasic
			         ,prx.components.android_progressestimating
			]
		}
		,
		cards : {
			title :'Cards',
			items : [ 
				prx.components.android_card_small,
				prx.components.android_card_medium,
				prx.components.android_card_big
			]
		}
		,
		other : {
			title :'Other',
			items : [ 
				prx.components.android_toast,
				prx.components.android_notification_item,
				prx.components.android_crouton,
				prx.components.android_alert_dialog
			]
		}
		
	},
	otherProperties :'insert here'
};
