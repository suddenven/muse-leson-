/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Google_SEA}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://maps.google.com/maps?q=Seattle,+WA&hl=en&sll=32.715329,-117.157255&sspn=0.924343,1.366425&oq=seattle&hnear=Seattle,+King+County,+Washington&t=m&z=11", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Google_SD}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://maps.google.com/maps?q=San+Diego,+CA&hl=en&sll=47.60621,-122.332071&sspn=0.370362,0.683212&oq=san+dieg&hnear=San+Diego,+San+Diego+County,+California&t=m&z=10", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Google_FL}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://maps.google.com/maps?q=Clearwater,+FL&hl=en&sll=32.715329,-117.157255&sspn=0.924343,1.366425&oq=clearw&hnear=Clearwater,+Pinellas,+Florida&t=m&z=12", "_blank");

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-4065580");