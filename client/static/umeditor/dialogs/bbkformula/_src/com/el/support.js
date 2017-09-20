com.wiris.support = v91["com.wiris.support"] = function() {

};

com.wiris.support.__name__ = ["com", "wiris", "support"];
com.wiris.support.prototype = {
    svg: (function() {
        // var isSupportSvg = true;
        // var img = new Image();

        // img.onerror = function () {
        //     isSupportSvg = false;
        // };

        // img.onload = function () {
        //     if (img.width == 1 && img.height == 1) {
        //         isSupportSvg = true;
        //     } else {
        //         isSupportSvg = false;
        //     }
        // };

        // // 1px x 1px SVG; must be base64 or URI encoded for IE9... base64 is shorter
        // if(this._svgImg){
        //     img.src = this._svgImg;
        // }else{
        //     img.src = this._svgImg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==';
        // }

        return function() {
            return !!document.createElement('svg').getAttributeNS;
        };
    })(),
    __class__: com.wiris.support
}