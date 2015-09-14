/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'RoundRect',
            type:'rect',
            rect:['1px','1px','385px','385px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:0.43008422851562,
            fill:["rgba(255,255,255,1.00)"],
            stroke:[7,"rgba(165,173,72,1.00)","solid"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['12px','217px','377px','119px','auto','auto'],
            opacity:0.24160766601562,
            fill:["rgba(165,173,72,1.00)"],
            stroke:[1,"rgb(165, 173, 72)","none"]
         },
         {
            id:'usmap',
            type:'image',
            rect:['50px','19px','300px','187px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"usmap.png",'0px','0px']
         },
         {
            id:'Seattle_text',
            type:'group',
            rect:['39','229','323','64','auto','auto'],
            c:[
            {
               id:'Property_located_SEA',
               type:'text',
               rect:['0px','0px','323px','49px','auto','auto'],
               text:"This property is located in the Northwest:",
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'Seattle',
               type:'text',
               rect:['11px','31px','300px','76px','auto','auto'],
               text:"Seattle, WA<br>$3,000/mo",
               align:"center",
               font:['Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'dot_SEA',
            type:'ellipse',
            rect:['62px','11px','35px','33px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(239,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Google_SEA',
            type:'text',
            rect:['63px','355px','278px','33px','auto','auto'],
            cursor:['pointer'],
            text:"view it on Google maps",
            align:"center",
            font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'SD_text',
            display:'none',
            type:'group',
            rect:['39','229','323','64','auto','auto'],
            c:[
            {
               id:'Property_located_SD',
               display:'none',
               type:'text',
               rect:['0px','0px','323px','49px','auto','auto'],
               text:"This property is located in California:",
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'San_Diego',
               display:'none',
               type:'text',
               rect:['11px','31px','300px','33px','auto','auto'],
               text:"San Diego, CA<br>$6,000/mo",
               align:"center",
               font:['Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'dot_SD',
            display:'none',
            type:'ellipse',
            rect:['46px','107px','35px','33px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(239,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Google_SD',
            display:'none',
            type:'text',
            rect:['63px','355px','278px','33px','auto','auto'],
            cursor:['pointer'],
            text:"view it on Google maps",
            align:"center",
            font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'FL_text',
            display:'none',
            type:'group',
            rect:['39','229','323','64','auto','auto'],
            c:[
            {
               id:'Property_located_FL',
               display:'none',
               type:'text',
               rect:['0px','0px','323px','49px','auto','auto'],
               text:"This property is located in Florida:",
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'Florida',
               display:'none',
               type:'text',
               rect:['11px','31px','300px','33px','auto','auto'],
               text:"Clearwater, FL<br>$4000/mo",
               align:"center",
               font:['Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'dot_FL',
            display:'none',
            type:'ellipse',
            rect:['272px','167px','35px','33px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(239,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Google_FL',
            display:'none',
            type:'text',
            rect:['63px','355px','278px','33px','auto','auto'],
            cursor:['pointer'],
            text:"view it on Google maps",
            align:"center",
            font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'map_icon',
            type:'image',
            rect:['81px','350px','27px','28px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"map.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0.43008422851562'],
            ["style", "border-style", 'solid'],
            ["style", "height", '385px'],
            ["color", "border-color", 'rgba(165,173,72,1.00)'],
            ["style", "border-width", '7px'],
            ["style", "width", '385px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '31px'],
            ["style", "height", '33px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '11px'],
            ["style", "font-size", '26px']
         ],
         "${_Property_located_FL}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '49px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_Seattle_text}": [
            ["style", "opacity", '1']
         ],
         "${_Google_SEA}": [
            ["style", "top", '355px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '63px'],
            ["style", "font-size", '17px']
         ],
         "${_FL_text}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_Google_FL}": [
            ["style", "top", '355px'],
            ["style", "left", '63px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '17px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '0px'],
            ["style", "height", '49px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(165,173,72,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'none'],
            ["style", "height", '119px'],
            ["style", "opacity", '0.24160766601562'],
            ["style", "left", '12px'],
            ["style", "top", '217px']
         ],
         "${_SD_text}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_Property_located_SEA}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "height", '49px'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_Google_SD}": [
            ["style", "top", '355px'],
            ["style", "left", '63px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '17px']
         ],
         "${_dot_FL}": [
            ["color", "background-color", 'rgba(239,0,0,1)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '272px'],
            ["style", "top", '167px']
         ],
         "${_Property_located_SD}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "height", '49px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_usmap}": [
            ["style", "top", '19px'],
            ["style", "left", '50px']
         ],
         "${_dot_SEA}": [
            ["color", "background-color", 'rgba(239,0,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '63px'],
            ["style", "top", '19px']
         ],
         "${_San_Diego}": [
            ["style", "top", '31px'],
            ["style", "text-align", 'center'],
            ["style", "height", '77px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '11px'],
            ["style", "font-size", '26px']
         ],
         "${_Florida}": [
            ["style", "top", '31px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '75px'],
            ["style", "opacity", '0'],
            ["style", "left", '11px'],
            ["style", "font-size", '26px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '400px']
         ],
         "${_map_icon}": [
            ["style", "height", '28px'],
            ["style", "top", '350px'],
            ["style", "left", '81px'],
            ["style", "width", '27px']
         ],
         "${_Seattle}": [
            ["style", "top", '31px'],
            ["style", "text-align", 'center'],
            ["style", "height", '76px'],
            ["style", "left", '11px'],
            ["style", "font-size", '26px']
         ],
         "${_dot_SD}": [
            ["style", "top", '107px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '46px'],
            ["color", "background-color", 'rgba(239,0,0,1)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid12", tween: [ "style", "${_dot_SD}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Google_FL}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
            { id: "eid11", tween: [ "style", "${_dot_FL}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
            { id: "eid9", tween: [ "style", "${_dot_FL}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid20", tween: [ "style", "${_SD_text}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Google_SD}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Florida}", "height", '75px', { fromValue: '75px'}], position: 2131, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Seattle_text}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid21", tween: [ "style", "${_San_Diego}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid1", tween: [ "style", "${_dot_SEA}", "top", '19px', { fromValue: '19px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_dot_SEA}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_Florida}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid49", tween: [ "style", "${_Florida}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
            { id: "eid29", tween: [ "style", "${_Property_located_SD}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid44", tween: [ "style", "${_Property_located_FL}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid42", tween: [ "style", "${_FL_text}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Google_FL}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid89", tween: [ "style", "${_San_Diego}", "height", '77px', { fromValue: '77px'}], position: 2131, duration: 0 },
            { id: "eid30", tween: [ "style", "${_San_Diego}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid17", tween: [ "style", "${_dot_SEA}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid15", tween: [ "style", "${_dot_SD}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid19", tween: [ "style", "${_dot_SD}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250 },
            { id: "eid48", tween: [ "style", "${_FL_text}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
            { id: "eid22", tween: [ "style", "${_Property_located_SD}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid31", tween: [ "style", "${_SD_text}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid41", tween: [ "style", "${_SD_text}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250 },
            { id: "eid50", tween: [ "style", "${_Property_located_FL}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
            { id: "eid70", tween: [ "style", "${_Google_SD}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid76", tween: [ "style", "${_Google_SD}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-4065580");
