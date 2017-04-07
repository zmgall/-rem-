(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        console.log("clientWidth:"+clientWidth)
        if(clientWidth < 375){
          clientWidth = 375;
        }

        if(clientWidth > 500){
          clientWidth = 500;
        }

        //console.log("clientWidth:"+clientWidth)
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        //console.log("fontsize:"+(20 * (clientWidth / 375))+ 'px')

        var oView = document.querySelectorAll('.view');
        if(oView.length > 0){
          oView[0].style.height = document.documentElement.clientHeight + 'px';
        }
      };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
