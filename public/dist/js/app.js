"use strict";function _classCallCheck(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var box={color:"red",color2:"blue",clickMe:function(){}};box.clickMe();var Person=function n(o){_classCallCheck(this,n),this.name=o},numList=function(n,o,c,l){return n+o+c+l};console.log(numList(23,34,66,88));var numArr=[23,34,66,88],sum2=numList.apply(null,numArr);console.log(sum2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJib3giLCJjb2xvciIsImNvbG9yMiIsImNsaWNrTWUiLCJQZXJzb24iLCJuYW1lIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIm51bUxpc3QiLCJhIiwiYiIsImMiLCJkIiwiY29uc29sZSIsImxvZyIsIm51bUFyciIsInN1bTIiLCJhcHBseSJdLCJtYXBwaW5ncyI6InlIQXdCQSxJQUFNQSxJQUFNLENBQ1JDLE1BQU8sTUFIWEMsT0FBQSxPQUNBQyxRQUFBLGNBT1FILElBQUFHLGNBSUpBLE9BS0EsU0FBQUMsRUFBWUMsR0FBTUMsZ0JBQUFDLEtBQUFILEdBRnRCRyxLQUFBRixLQUFBQSxHQXVHTUcsUUFBVSxTQUFBQyxFQUFBQyxFQUFBQyxFQUFWSCxHQUNGLE9BQU9DLEVBQUFBLEVBQUVDLEVBQUZFLEdBRVhDLFFBQVFDLElBQUlOLFFBQVEsR0FBUixHQUFBLEdBQWMsS0FDMUIsSUFBSU8sT0FBUyxDQUFDLEdBQUQsR0FBQSxHQUFPLElBQ2RDLEtBQU9SLFFBQVFTLE1BQU0sS0FBTUYsUUFDakNGLFFBQVFDLElBQUlFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0Jyk7XG4vLyBsZXQgc3RyTWV0aG9kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RyaW5nczJcIik7XG4vLyBjb25zdCB0aGlzV29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhpc1dvcmRcIik7XG4vLyBjb25zdCBhcnJheTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycmF5MVwiKTtcbi8vIGxldCBmaXNydG5hbWUgPSBcIkNhcmxvc1wiO1xuLy8gbGV0IGxhc3RuYW1lID0gXCJNYXJ4XCI7XG4vLyBjb25zdCB5ZWFyT2ZCaXJ0aCA9IDE5Nzg7XG5cbi8vICBbICsgXSBbICsgXSBbICsgXSBbICsgXSBUZW1wbGF0ZSBzdHJpbmdzXG4vLyBmdW5jdGlvbiBjYWxjQWdlKHllYXIpIHtcbi8vICAgICByZXR1cm4gMjAxNiAtIHllYXI7XG4vLyB9XG4vLyByZXN1bHQuaW5uZXJIVE1MID0gYCR7Y2FsY0FnZSh5ZWFyT2ZCaXJ0aCl9YDtcblxuLy8gLy8gU3RyaW5nIG1ldGhvZHNcblxuLy8gY29uc3QgbiA9IGAke2Zpc3J0bmFtZX0gJHtsYXN0bmFtZX1gO1xuLy8gc3RyTWV0aG9kcy5pbm5lckhUTUwgPSBuLnN0YXJ0c1dpdGgoJ3dlJyk7XG4vLyBzdHJNZXRob2RzLmlubmVySFRNTCArPSBuLmVuZHNXaXRoKCdDYXInKTtcbi8vIHN0ck1ldGhvZHMuaW5uZXJIVE1MICs9IG4uaW5jbHVkZXMoJ2EnKTtcblxuXG4vLyAgWyArIF0gWyArIF0gWyArIF0gWyArIF0gXG4vLyBUaGlzIHdvcmRcbmNvbnN0IGJveCA9IHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgY29sb3IyOiAnYmx1ZScsXG4gICAgY2xpY2tNZTogKCkgPT4ge1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1kYW5nZXJcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAvLyB0aGlzV29yZC5pbm5lckhUTUwgPSAnJ2Ake3RoaXMuY29sb3J9IGFuZCAke3RoaXMuY29sb3IyfWAnJztcbiAgICAgICAgLy8gICAgIHRoaXNXb3JkLmlubmVySFRNTCA9IHRoaXMuY29sb3I7IC8vZG9lc24ndCBzaG93IHNob3cgdGhlIGJveC5jb2xvciBwcm9wZXJ0eSBidWNvdXNlIFRoaXMgaW5zaWRlIGFyb29ydyBmdW5jdGlvbnMgcG9pbnQgdG8gdGhlIEdsb2JhbCBvYnNcbiAgICAgICAgLy8gfSk7XG4gICAgfVxufTtcbmJveC5jbGlja01lKCk7XG5cblxuLy8gIFsgKyBdIFsgKyBdIFsgKyBdIFsgKyBdICBBcnJheSBleGVtcGxlXG5jbGFzcyBQZXJzb24ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59XG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIFNlY3Rpb24gMDcgLSAxMDkgLSBEZXN0cnVjdHVyaW5nIEFycmF5XG4vLyBjb25zdCBbIG15bmFtZSwgbXlhZ2VdID0gWydqb3PDqSBDYXJsb3MgRGVzdHInLCAxMl07XG4vLyBjb25zb2xlLmxvZyhteW5hbWUpO1xuXG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIFNlY3Rpb24gMDcgLSAxMDkgLSBEZXN0cnVjdHVyaW5nIE9ialxuLy8gY29uc3QgYmVsb25naW5nPXtcbi8vICAgICBob3VzZTogJ01pY2hpZ2FuJyxcbi8vICAgICBjYXI6ICdCZW50bGV5J1xuLy8gfTtcbi8vIGNvbnN0IHsgaG91c2UsIGNhciB9ID0gYmVsb25naW5nO1xuLy8gY29uc29sZS5sb2coaG91c2UgKyAgJyAgJyArIGNhciApO1xuXG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIFNlY3Rpb24gMDcgLSAxMDkgLSBEZXN0cnVjdHVyaW5nIGZ1bmN0aW9uXG4vLyBmdW5jdGlvbiBteUFnZWFuZHJldGlyZW1lbnQoeWVhcnMpe1xuLy8gICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4vLyAgICAgbGV0IGFnZSA9IG5vdyAtIHllYXJzO1xuLy8gICAgIHJldHVybiBbYWdlLCA5MCAtIGFnZSBdOyBcbi8vIH1cbi8vIGNvbnN0IFsgYWdlLCByZXRpcmVtZW50IF0gPSBteUFnZWFuZHJldGlyZW1lbnQoMTk3OCk7XG5cbi8vIGNvbnNvbGUubG9nKGBNeSBhZ2UgaXMgJHthZ2V9IGFuZCBpIGhhdmUgJHtyZXRpcmVtZW50fSB5ZWFycyB0byByZXRpcmUuYCk7XG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIC0gTm9kZSBMaXN0IHRvIGFycmF5IEVTNVxuLy8gY29uc3QgbGluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucC0zJyk7XG4vLyBjb25zdCBsaW5lc0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpbmVzKTtcbi8vIGNvbnNvbGUubG9nKGxpbmVzQXJyKTtcbi8vIGxpbmVzQXJyLmZvckVhY2goY3Vycj0+e1xuLy8gICAgIGN1cnIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4vLyB9KTtcblxuXG4vLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgLSBOb2RlIExpc3QgdG8gYXJyYXkgRVM2XG4vLyBjb25zdCBsaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wLTMnKTtcbi8vIEFycmF5LmZyb20obGluZXMpLmZvckVhY2goY3Vycj0+e1xuLy8gICAgIGN1cnIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuLy8gICAgIGN1cnIuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuLy8gfSk7XG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIC0gTm9kZSBMaXN0IHRvIGFycmF5IEVTNSAtIENvbnRpbnVlIEJyZWFrXG4vLyBjb25zdCBsaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wLTMnKTtcbi8vIGNvbnN0IGxpbmVzQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGluZXMpO1xuLy8gZm9yKGxldCBpPTA7aTxsaW5lc0Fyci5sZW5ndGg7aSsrKXtcbi8vICAgICBpZihsaW5lc0FycltpXS5jbGFzc05hbWUgPT09ICdibHVlLWJsb3gnKXtcbi8vICAgICAgICAgbGluZXNBcnJbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vICAgICBsaW5lc0FycltpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbi8vICAgICBsaW5lc0FycltpXS50ZXh0Q29udGVudCA9ICdDZWx0YXMnO1xuLy8gfVxuXG5cbi8vICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCAtIE5vZGUgTGlzdCB0byBhcnJheSBFUzYgLSBDb250aW51ZSBCcmVha1xuLy8gY29uc3QgbGluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucC0zJyk7XG4vLyBjb25zdCBsaW5lc0FyciA9IEFycmF5LmZyb20obGluZXMpO1xuLy8gZm9yKGNvbnN0IGN1cnIgb2YgbGluZXNBcnIpe1xuLy8gICAgIGlmKGN1cnJbaV0uY2xhc3NOYW1lID09PSAnYmx1ZS1ibG94Jyl7XG4vLyAgICAgICAgIGxpbmVzQXJyW2ldLnRleHRDb250ZW50ID0gJ0NlbHRhcyc7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vICAgICBsaW5lc0FycltpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbi8vICAgICBsaW5lc0FycltpXS50ZXh0Q29udGVudCA9ICdDZWx0YXMnO1xuLy8gfVxuXG5cblxuLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXG4vLyBBcnJheSBFUzUgLSBDaGVraW5nIG9uZSBlbGVtZW50IG9mIHRoZSBBcnJheVxuLy8gY29uc3QgYWdlcyA9IFsgMjIsIDE2LCAxMiwgMTcsIDksIDEwLCAxMyBdO1xuLy8gY29uc3QgZnVsbEFnZSA9IGFnZXMubWFwKGN1cnI9Pntcbi8vICAgICBjb25zb2xlLmxvZyhjdXJyID49IDE4KTtcbi8vIH0pO1xuLy8gY29uc29sZS5sb2coYWdlc1tmdWxsQWdlLmluZGV4T2YodHJ1ZSldKTtcblxuXG4vLyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcbi8vIEFycmF5IEVTNiAtIENoZWtpbmcgb25lIGVsZW1lbnQgb2YgdGhlIEFycmF5XG4vLyBjb25zdCBhZ2VzID0gWyAxNiwgMTIsIDE3LCA5LCAxMCwgMjIsICAxMyBdO1xuXG4vLyBjb25zdCBmdWxsQWdlID0gYWdlcy5tYXAoY3VyciA9PiBjdXJyID49IDE4KTtcbi8vIGNvbnNvbGUubG9nKGZ1bGxBZ2UpO1xuXG4vLyBjb25zb2xlLmxvZyhhZ2VzLmZpbmQoY3VyciA9PiBjdXJyID49IDE4KSk7XG5cbi8vIGNvbnNvbGUubG9nKGFnZXMuZmluZEluZGV4KGN1cnIgPT4gY3VyciA+PSAxOCkpO1xuXG5cbi8vICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCBQYXNzaW5nIGEgZW50aXJlIEFycmF5IGludG8gYSBmdW5jdGlvblxuLy8gZXM1XG5cbmNvbnN0IG51bUxpc3QgPSAoYSxiLGMsZCk9PntcbiAgICByZXR1cm4gYStiK2MrZDtcbn1cbmNvbnNvbGUubG9nKG51bUxpc3QoMjMsMzQsNjYsODgpKTtcbnZhciBudW1BcnIgPSBbMjMsMzQsNjYsODhdO1xuY29uc3Qgc3VtMiA9IG51bUxpc3QuYXBwbHkobnVsbCwgbnVtQXJyKTtcbmNvbnNvbGUubG9nKHN1bTIpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
