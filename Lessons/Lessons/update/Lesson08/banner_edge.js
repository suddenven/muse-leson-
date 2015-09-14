/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['minion-pro, Georgia, serif']='<script type=\"text/javascript\" src=\"http://use.typekit.com/fma0bgx.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';
   fonts['adobe-garamond-pro, Georgia, serif']='<script type=\"text/javascript\" src=\"http://use.typekit.com/fma0bgx.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'panel3_shirtGroup1',
            type:'rect',
            rect:['0','0','0','0','undefined','undefined'],
            transform:[]
         },
         {
            id:'panel3_shirtGroup2',
            type:'rect',
            rect:['240','1','0','0','undefined','undefined'],
            transform:[]
         },
         {
            id:'panel3_shirtGroup3',
            type:'rect',
            rect:['480','0','0','0','undefined','undefined'],
            transform:[]
         },
         {
            id:'panel3_shirtGroup4',
            type:'rect',
            rect:['720','1','0','0','undefined','undefined'],
            transform:[]
         },
         {
            id:'panel3_subHeaderBox',
            type:'image',
            rect:['290','261','378','55','undefined','undefined'],
            fill:["rgba(0,0,0,0)",im+"panel3_subHeader_box.png"],
            transform:[]
         },
         {
            id:'txt_subHeader',
            type:'text',
            rect:['309','212','0','0','undefined','undefined'],
            text:"PRODUCTS",
            align:"center",
            font:['adobe-garamond-pro, Georgia, serif',53,"rgba(255,255,255,1.00)","bold","none","normal"],
            transform:[]
         },
         {
            id:'panel3_headerBox',
            type:'image',
            rect:['357','238','245','19','undefined','undefined'],
            fill:["rgba(0,0,0,0)",im+"panel3_header_box.png"],
            transform:[]
         },
         {
            id:'txt_header',
            type:'text',
            rect:['413','239','0','0','undefined','undefined'],
            text:"KEVIN'S KOFFEE KART",
            align:"center",
            font:['adobe-garamond-pro, Georgia, serif',15,"rgba(225,80,82,1.00)","normal","none","italic"],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'panel3_shirtGroup3',
            symbolName:'panel3_Group3'
         },
         {
            id:'panel3_shirtGroup2',
            symbolName:'panel3_Group2'
         },
         {
            id:'panel3_shirtGroup1',
            symbolName:'panel3_Group1'
         },
         {
            id:'panel3_shirtGroup4',
            symbolName:'panel3_Group4'
         }
         ]
      },
   states: {
      "Base State": {
         "${_panel3_subHeaderBox}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '290.99px'],
            ["style", "top", '261px']
         ],
         "${_txt_header}": [
            ["style", "top", '239px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(225,80,82,1.00)'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '405.12px'],
            ["style", "font-size", '15px']
         ],
         "${_txt_subHeader}": [
            ["style", "top", '257px'],
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '338.01px'],
            ["style", "font-size", '53px']
         ],
         "${_panel3_headerBox}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '357.44px'],
            ["style", "top", '238.99px']
         ],
         "${_panel3_shirtGroup2}": [
            ["style", "top", '0.08px'],
            ["transform", "skewY", '-20deg'],
            ["transform", "scaleX", '0'],
            ["style", "display", 'block'],
            ["style", "left", '240px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '958px'],
            ["style", "height", '350px'],
            ["style", "overflow", 'hidden']
         ],
         "${_panel3_shirtGroup3}": [
            ["style", "top", '-0.6px'],
            ["transform", "skewY", '-20deg'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '0'],
            ["style", "left", '480px'],
            ["style", "cursor", 'pointer']
         ],
         "${_panel3_shirtGroup1}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "skewY", '-20deg'],
            ["transform", "scaleX", '0']
         ],
         "${_panel3_shirtGroup4}": [
            ["style", "top", '0.04px'],
            ["transform", "skewY", '-20deg'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '0'],
            ["style", "left", '720px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1788,
         autoPlay: true,
         timeline: [
            { id: "eid13", tween: [ "style", "${_txt_subHeader}", "opacity", '1', { fromValue: '0'}], position: 1149, duration: 500, easing: "easeInSine" },
            { id: "eid10", tween: [ "style", "${_panel3_headerBox}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_panel3_headerBox}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInSine" },
            { id: "eid37", tween: [ "transform", "${_panel3_shirtGroup1}", "skewY", '0deg', { fromValue: '-20deg'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid16", tween: [ "style", "${_panel3_subHeaderBox}", "opacity", '1', { fromValue: '0'}], position: 1149, duration: 500, easing: "easeInSine" },
            { id: "eid44", tween: [ "style", "${_txt_subHeader}", "top", '257px', { fromValue: '257px'}], position: 1788, duration: 0, easing: "easeInSine" },
            { id: "eid43", tween: [ "style", "${_txt_subHeader}", "left", '338.01px', { fromValue: '338.01px'}], position: 1788, duration: 0, easing: "easeInSine" },
            { id: "eid1", tween: [ "style", "${_panel3_shirtGroup1}", "top", '0px', { fromValue: '0px'}], position: 1788, duration: 0 },
            { id: "eid42", tween: [ "style", "${_txt_header}", "left", '405.12px', { fromValue: '405.12px'}], position: 1788, duration: 0, easing: "easeInSine" },
            { id: "eid7", tween: [ "style", "${_txt_header}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_txt_header}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInSine" },
            { id: "eid35", tween: [ "style", "${_panel3_shirtGroup2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid36", tween: [ "style", "${_panel3_shirtGroup2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid17", tween: [ "style", "${_panel3_subHeaderBox}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_panel3_subHeaderBox}", "display", 'block', { fromValue: 'none'}], position: 1149, duration: 0, easing: "easeInSine" },
            { id: "eid12", tween: [ "style", "${_panel3_headerBox}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInSine" },
            { id: "eid9", tween: [ "style", "${_txt_header}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInSine" },
            { id: "eid29", tween: [ "style", "${_panel3_shirtGroup3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "style", "${_panel3_shirtGroup3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid31", tween: [ "transform", "${_panel3_shirtGroup3}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 1000, easing: "easeOutBack" },
            { id: "eid33", tween: [ "transform", "${_panel3_shirtGroup2}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 1000, easing: "easeOutBack" },
            { id: "eid38", tween: [ "transform", "${_panel3_shirtGroup1}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid25", tween: [ "transform", "${_panel3_shirtGroup4}", "skewY", '0deg', { fromValue: '-20deg'}], position: 750, duration: 1000, easing: "easeOutBack" },
            { id: "eid14", tween: [ "style", "${_txt_subHeader}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_txt_subHeader}", "display", 'block', { fromValue: 'none'}], position: 1149, duration: 0, easing: "easeInSine" },
            { id: "eid26", tween: [ "transform", "${_panel3_shirtGroup4}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 1000, easing: "easeOutBack" },
            { id: "eid34", tween: [ "transform", "${_panel3_shirtGroup2}", "skewY", '0deg', { fromValue: '-20deg'}], position: 250, duration: 1000, easing: "easeOutBack" },
            { id: "eid27", tween: [ "style", "${_panel3_shirtGroup4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_panel3_shirtGroup4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid32", tween: [ "transform", "${_panel3_shirtGroup3}", "skewY", '0deg', { fromValue: '-20deg'}], position: 500, duration: 1000, easing: "easeOutBack" }         ]
      }
   }
},
"panel3_Group3": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'red_panel_3',
      type: 'rect',
      rect: ['0','-1','0','0','undefined','undefined'],
      transform: {}
   },
   {
      transform: {},
      id: 'panel3_infoBox',
      type: 'image',
      rect: ['0','-120','239','120','undefined','undefined'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png']
   },
   {
      transform: {},
      id: 'panel3_shirt3',
      type: 'image',
      rect: ['56px','49','136px','183px','undefined','undefined'],
      fill: ['rgba(0,0,0,0)','coffeepot.png','0px','0px']
   },
   {
      transform: {},
      type: 'text',
      align: 'auto',
      id: 'title',
      text: 'COFFEE POTS',
      rect: ['26','15','0','0','undefined','undefined'],
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic']
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: ['0','-118','0','0','undefined','undefined']
   }],
   symbolInstances: [
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   },
   {
      id: 'red_panel_3',
      symbolName: 'panel3_redPanel'
   }   ]
   },
   states: {
      "Base State": {
         "${_red_panel_3}": [
            ["style", "left", '-0.15px'],
            ["style", "top", '0.16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330.0087px'],
            ["style", "width", '239px']
         ],
         "${_title}": [
            ["style", "top", '-95.93px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(195,193,191,1.00)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "height", '30px'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '64.92px'],
            ["style", "font-size", '15px']
         ],
         "${_panel3_shirt3}": [
            ["style", "-webkit-transform-origin", [47.96,4.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47.96,4.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47.96,4.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47.96,4.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47.96,4.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68.08px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '182.90625px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '56px'],
            ["style", "width", '136.28308823529px']
         ],
         "${_panel3_infoBox}": [
            ["style", "top", '-120px']
         ],
         "${_description}": [
            ["style", "height", '84px'],
            ["transform", "translateX", '14px'],
            ["transform", "translateY", '-124.43px'],
            ["style", "width", '190px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid5017", tween: [ "transform", "${_description}", "translateY", '-4px', { fromValue: '-124.43px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5018", tween: [ "transform", "${_description}", "translateX", '15px', { fromValue: '14px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5016", tween: [ "style", "${_title}", "top", '61.44px', { fromValue: '-95.93px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid4110", tween: [ "style", "${_red_panel_3}", "top", '120.16px', { fromValue: '0.16px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2152", tween: [ "style", "${_panel3_infoBox}", "top", '1.06px', { fromValue: '-120px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5015", tween: [ "style", "${_title}", "left", '65.91px', { fromValue: '64.92px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2224", tween: [ "style", "${_panel3_shirt3}", "top", '137.82px', { fromValue: '68.08px'}], position: 0, duration: 500 },
            { id: "eid5019", tween: [ "style", "${_description}", "height", '84px', { fromValue: '84px'}], position: 499, duration: 0 }         ]
      }
   }
},
"panel3_Group2": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'red_panel_2',
      type: 'rect',
      rect: ['0','-1','0','0','undefined','undefined'],
      transform: {}
   },
   {
      transform: {},
      id: 'panel3_infoBox',
      type: 'image',
      rect: ['0','-120','239','120','undefined','undefined'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png']
   },
   {
      transform: {},
      id: 'panel3_shirt2',
      type: 'image',
      rect: ['20','0','200','255','undefined','undefined'],
      fill: ['rgba(0,0,0,0)','grinders.png']
   },
   {
      transform: {},
      type: 'text',
      align: 'auto',
      id: 'title',
      text: 'COFFEE GRINDERS',
      rect: ['26','15','0','0','undefined','undefined'],
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic']
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: ['0','-118','0','0','undefined','undefined']
   }],
   symbolInstances: [
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   },
   {
      id: 'red_panel_2',
      symbolName: 'panel3_redPanel'
   }   ]
   },
   states: {
      "Base State": {
         "${_red_panel_2}": [
            ["style", "left", '-0.15px'],
            ["style", "top", '0.16px']
         ],
         "${_panel3_infoBox}": [
            ["style", "top", '-120px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330.0087px'],
            ["style", "width", '239px']
         ],
         "${_panel3_shirt2}": [
            ["style", "-webkit-transform-origin", [49.02,4.59], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.02,4.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.02,4.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.02,4.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.02,4.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '174.27293395996px'],
            ["style", "background-position", [1,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '20px'],
            ["style", "top", '66.7px']
         ],
         "${_title}": [
            ["style", "top", '-97.32px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(195,193,191,1.00)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "height", '30px'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '43.91px'],
            ["style", "font-size", '15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid4109", tween: [ "style", "${_red_panel_2}", "top", '120.16px', { fromValue: '0.16px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5003", tween: [ "style", "${_title}", "top", '61.43px', { fromValue: '-97.32px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2401", tween: [ "style", "${_panel3_shirt2}", "top", '124.8px', { fromValue: '66.7px'}], position: 0, duration: 500 },
            { id: "eid2151", tween: [ "style", "${_panel3_infoBox}", "top", '1.06px', { fromValue: '-120px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid20", tween: [ "style", "${_panel3_shirt2}", "height", '174.27293395996px', { fromValue: '174.27293395996px'}], position: 0, duration: 0, easing: "easeInSine" },
            { id: "eid6", tween: [ "style", "${_panel3_shirt2}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 499, duration: 0 },
            { id: "eid5002", tween: [ "style", "${_title}", "left", '43.92px', { fromValue: '43.91px'}], position: 0, duration: 499, easing: "easeInSine" }         ]
      }
   }
},
"panel3_Group1": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'red_panel_1',
      type: 'rect',
      rect: ['0','-1','0','0','undefined','undefined'],
      transform: {}
   },
   {
      transform: {},
      id: 'panel3_infoBox',
      type: 'image',
      rect: ['0','-120','239','120','undefined','undefined'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png']
   },
   {
      transform: {},
      id: 'panel3_shirt1',
      type: 'image',
      rect: ['26','49','190','243','undefined','undefined'],
      fill: ['rgba(0,0,0,0)','coffee_beans.png']
   },
   {
      transform: {},
      type: 'text',
      align: 'auto',
      id: 'title',
      text: 'ROAST COFFEE',
      rect: ['26','15','0','0','undefined','undefined'],
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic']
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: ['0','-118','0','0','undefined','undefined']
   }],
   symbolInstances: [
   {
      id: 'red_panel_1',
      symbolName: 'panel3_redPanel'
   },
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel3_shirt1}": [
            ["style", "top", '72.88px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '206.58850097656px'],
            ["style", "left", '25.85px'],
            ["style", "background-position", [0,7.2000001757813], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "-webkit-transform-origin", [48.79,4.41], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [48.79,4.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [48.79,4.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [48.79,4.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [48.79,4.41],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_panel3_infoBox}": [
            ["style", "top", '-120px']
         ],
         "${_red_panel_1}": [
            ["style", "left", '-0.15px'],
            ["style", "top", '-0.15px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330.0087px'],
            ["style", "width", '239px']
         ],
         "${_title}": [
            ["style", "top", '-97.96px'],
            ["color", "color", 'rgba(195,193,191,1.00)'],
            ["style", "height", '30px'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "left", '48.99px'],
            ["style", "font-size", '15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid4987", tween: [ "style", "${_title}", "top", '54.94px', { fromValue: '-97.96px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid41", tween: [ "style", "${_title}", "top", '54.05px', { fromValue: '54.94px'}], position: 499, duration: 0, easing: "easeInSine" },
            { id: "eid2035", tween: [ "style", "${_red_panel_1}", "top", '119.85px', { fromValue: '-0.15px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2038", tween: [ "style", "${_panel3_infoBox}", "top", '1.06px', { fromValue: '-120px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid4985", tween: [ "style", "${_title}", "left", '49px', { fromValue: '48.99px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2037", tween: [ "style", "${_panel3_shirt1}", "top", '115.7px', { fromValue: '72.88px'}], position: 0, duration: 500 },
            { id: "eid2", tween: [ "style", "${_panel3_shirt1}", "height", '206.58850097656px', { fromValue: '206.58850097656px'}], position: 2000, duration: 0 }         ]
      }
   }
},
"panel3_redPanel": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '328.9992px'],
            ["style", "width", '238px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"panel3": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'panel3_black',
      stroke: [0,'rgba(0,0,0,0.00)','none'],
      rect: [0,0,958,345],
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'panel3_shirtGroup1',
      type: 'rect',
      rect: [0,0,0,0],
      transform: [[0,0]]
   },
   {
      rect: [240,1,0,0],
      display: 'none',
      transform: [[0,0]],
      id: 'panel3_shirtGroup2',
      type: 'rect'
   },
   {
      rect: [480,0,0,0],
      display: 'none',
      transform: [[0,0]],
      id: 'panel3_shirtGroup3',
      type: 'rect'
   },
   {
      rect: [720,1,0,0],
      display: 'none',
      transform: [[0,0]],
      id: 'panel3_shirtGroup4',
      type: 'rect'
   },
   {
      transform: [[0,0]],
      rect: [293,280,370,27],
      display: 'none',
      id: 'panel3_description_box2',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_description_box2.png']
   },
   {
      type: 'text',
      rect: [313,285,0,0],
      display: 'none',
      id: 'txt_description',
      align: 'center',
      text: ' A fresh, colorful and feminine line up to welcome the fall season.',
      font: ['minion-pro, Georgia, serif',12,'rgba(185,175,167,1.00)','normal','none','normal'],
      transform: [[0,0]]
   },
   {
      transform: [[0,0]],
      rect: [290,221,378,55],
      display: 'none',
      id: 'panel3_subHeaderBox',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_subHeader_box.png']
   },
   {
      type: 'text',
      rect: [309,212,0,0],
      display: 'none',
      id: 'txt_subHeader',
      align: 'center',
      text: 'COLLECTION',
      font: ['adobe-garamond-pro, Georgia, serif',53,'rgba(255,255,255,1.00)','bold','none','normal'],
      transform: [[0,0]]
   },
   {
      transform: [[0,0]],
      rect: [357,198,245,19],
      display: 'none',
      id: 'panel3_headerBox',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_header_box.png']
   },
   {
      type: 'text',
      rect: [413,199,0,0],
      display: 'none',
      id: 'txt_header',
      align: 'center',
      text: 'THE ALICE RITTER',
      font: ['adobe-garamond-pro, Georgia, serif',15,'rgba(225,80,82,1.00)','normal','none','italic'],
      transform: [[0,0]]
   }],
   symbolInstances: [
   {
      id: 'panel3_shirtGroup3',
      symbolName: 'panel3_Group3'
   },
   {
      id: 'panel3_shirtGroup2',
      symbolName: 'panel3_Group2'
   },
   {
      id: 'panel3_shirtGroup1',
      symbolName: 'panel3_Group1'
   },
   {
      id: 'panel3_shirtGroup4',
      symbolName: 'panel3_Group4'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel3_subHeaderBox}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '290.99px'],
            ["style", "top", '221px']
         ],
         "${_panel3_shirtGroup3}": [
            ["style", "top", '-0.6px'],
            ["transform", "skewY", '-20deg'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0'],
            ["style", "left", '480px'],
            ["style", "cursor", 'pointer']
         ],
         "${_txt_subHeader}": [
            ["style", "top", '212.99px'],
            ["style", "font-weight", 'bold'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "left", '308.06px'],
            ["style", "font-size", '53px']
         ],
         "${_panel3_black}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "width", '958px']
         ],
         "${_txt_header}": [
            ["style", "top", '199px'],
            ["color", "color", 'rgba(225,80,82,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "left", '413.05px'],
            ["style", "font-size", '15px']
         ],
         "${_panel3_shirtGroup1}": [
            ["style", "top", '-0.6px'],
            ["transform", "skewY", '-20deg'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '0']
         ],
         "${_txt_description}": [
            ["style", "top", '285.8px'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(185,175,167,1.00)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "left", '312.49px'],
            ["style", "font-size", '12px']
         ],
         "${_panel3_shirtGroup2}": [
            ["style", "top", '0.08px'],
            ["transform", "skewY", '-20deg'],
            ["transform", "scaleX", '0'],
            ["style", "display", 'none'],
            ["style", "left", '240px'],
            ["style", "cursor", 'pointer']
         ],
         "${_panel3_shirtGroup4}": [
            ["style", "top", '0.04px'],
            ["transform", "skewY", '-20deg'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0'],
            ["style", "left", '720px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '345px'],
            ["style", "width", '956px']
         ],
         "${_panel3_description_box2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '293px'],
            ["style", "top", '280px']
         ],
         "${_panel3_headerBox}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '357.44px'],
            ["style", "top", '198.99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1788,
         autoPlay: false,
         timeline: [
            { id: "eid3860", tween: [ "style", "${_txt_subHeader}", "opacity", '1', { fromValue: '0'}], position: 1149, duration: 500, easing: "easeInSine" },
            { id: "eid3870", tween: [ "style", "${_panel3_headerBox}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3867", tween: [ "style", "${_panel3_headerBox}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInSine" },
            { id: "eid1703", tween: [ "transform", "${_panel3_shirtGroup1}", "skewY", '0deg', { fromValue: '-20deg'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid3859", tween: [ "style", "${_panel3_subHeaderBox}", "opacity", '1', { fromValue: '0'}], position: 1149, duration: 500, easing: "easeInSine" },
            { id: "eid5121", tween: [ "style", "${_panel3_description_box2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInSine" },
            { id: "eid4860", tween: [ "style", "${_panel3_description_box2}", "display", 'block', { fromValue: 'none'}], position: 1288, duration: 0, easing: "easeInSine" },
            { id: "eid3858", tween: [ "style", "${_txt_description}", "opacity", '1', { fromValue: '0'}], position: 1288, duration: 500, easing: "easeInSine" },
            { id: "eid1709", tween: [ "transform", "${_panel3_shirtGroup4}", "skewY", '0deg', { fromValue: '-20deg'}], position: 750, duration: 1000, easing: "easeOutBack" },
            { id: "eid1947", tween: [ "style", "${_panel3_shirtGroup3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1743", tween: [ "style", "${_panel3_shirtGroup3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid3869", tween: [ "style", "${_txt_header}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3868", tween: [ "style", "${_txt_header}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInSine" },
            { id: "eid1946", tween: [ "style", "${_panel3_shirtGroup2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1742", tween: [ "style", "${_panel3_shirtGroup2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid3872", tween: [ "style", "${_panel3_subHeaderBox}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3865", tween: [ "style", "${_panel3_subHeaderBox}", "display", 'block', { fromValue: 'none'}], position: 1149, duration: 0, easing: "easeInSine" },
            { id: "eid3861", tween: [ "style", "${_panel3_headerBox}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInSine" },
            { id: "eid3862", tween: [ "style", "${_txt_header}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInSine" },
            { id: "eid4859", tween: [ "style", "${_panel3_description_box2}", "opacity", '1', { fromValue: '0'}], position: 1288, duration: 500, easing: "easeInSine" },
            { id: "eid1706", tween: [ "transform", "${_panel3_shirtGroup3}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 1000, easing: "easeOutBack" },
            { id: "eid1708", tween: [ "transform", "${_panel3_shirtGroup4}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 1000, easing: "easeOutBack" },
            { id: "eid1704", tween: [ "transform", "${_panel3_shirtGroup2}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 1000, easing: "easeOutBack" },
            { id: "eid1705", tween: [ "transform", "${_panel3_shirtGroup2}", "skewY", '0deg', { fromValue: '-20deg'}], position: 250, duration: 1000, easing: "easeOutBack" },
            { id: "eid3871", tween: [ "style", "${_txt_subHeader}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3866", tween: [ "style", "${_txt_subHeader}", "display", 'block', { fromValue: 'none'}], position: 1149, duration: 0, easing: "easeInSine" },
            { id: "eid1701", tween: [ "transform", "${_panel3_shirtGroup1}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid3873", tween: [ "style", "${_txt_description}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3864", tween: [ "style", "${_txt_description}", "display", 'block', { fromValue: 'none'}], position: 1288, duration: 0, easing: "easeInSine" },
            { id: "eid1948", tween: [ "style", "${_panel3_shirtGroup4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1744", tween: [ "style", "${_panel3_shirtGroup4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid1707", tween: [ "transform", "${_panel3_shirtGroup3}", "skewY", '0deg', { fromValue: '-20deg'}], position: 500, duration: 1000, easing: "easeOutBack" }         ]
      }
   }
},
"panel3_hit": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: [0,-1,238,449],
      transform: [[0,0]],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(70,200,55,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '-1.83px'],
            ["color", "background-color", 'rgba(70,200,55,0.00)'],
            ["style", "left", '-0.83px'],
            ["style", "height", '449px']
         ],
         "${symbolSelector}": [
            ["style", "height", '449px'],
            ["style", "width", '238px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"panel3_Group4": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'red_panel_4',
      type: 'rect',
      rect: ['0','120','0','0','undefined','undefined'],
      transform: {}
   },
   {
      transform: {},
      id: 'panel3_infoBox',
      type: 'image',
      rect: ['0','-120','239','120','undefined','undefined'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png']
   },
   {
      transform: {},
      id: 'panel3_shirt4',
      type: 'image',
      rect: ['34px','49','161px','216px','undefined','undefined'],
      fill: ['rgba(0,0,0,0)','coffeecup.png']
   },
   {
      transform: {},
      type: 'text',
      align: 'auto',
      id: 'title',
      text: 'COFFEE CUPS',
      rect: ['26','15','0','0','undefined','undefined'],
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic']
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: ['0','-118','0','0','undefined','undefined']
   }],
   symbolInstances: [
   {
      id: 'red_panel_4',
      symbolName: 'panel3_redPanel'
   },
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '330.0087px'],
            ["style", "width", '239px']
         ],
         "${_panel3_infoBox}": [
            ["style", "top", '-120px']
         ],
         "${_panel3_shirt4}": [
            ["style", "-webkit-transform-origin", [50.07,5.24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.07,5.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.07,5.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.07,5.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.07,5.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '74.99px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '215.78649902344px'],
            ["style", "background-position", [16,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '34.22px'],
            ["style", "width", '160.78209731158px']
         ],
         "${_red_panel_4}": [
            ["style", "left", '-0.15px'],
            ["style", "top", '0.16px']
         ],
         "${_title}": [
            ["style", "top", '-94.09px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(195,193,191,1.00)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "height", '30px'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '65.91px'],
            ["style", "font-size", '15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid5029", tween: [ "style", "${_title}", "top", '61.43px', { fromValue: '-94.09px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2153", tween: [ "style", "${_panel3_infoBox}", "top", '1.06px', { fromValue: '-120px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2237", tween: [ "style", "${_panel3_shirt4}", "top", '121.5px', { fromValue: '74.99px'}], position: 0, duration: 500 },
            { id: "eid4121", tween: [ "style", "${_red_panel_4}", "top", '120.16px', { fromValue: '0.16px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5028", tween: [ "style", "${_title}", "left", '65.91px', { fromValue: '65.91px'}], position: 0, duration: 499, easing: "easeInSine" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-23129595");
