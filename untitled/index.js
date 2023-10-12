var in_magic_triangle = false;
var in_magic_triangle = false;
var previous_X = 0;
var MAGIC_A, MAGIC_B, MAGIC_C;

area = function(A, B, C) {
    return Math.abs(( A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y) ) / 2);
}

pointInTriangle = function(D, A, B, C) {
    var ABD = area(A, B, D);
    var BDC = area(B, D, C);
    var CAD = area(C, A, D);
    var ABC = area(A, B, C);
    if (ABC == (ABD + BDC + CAD)) {
        return true;
    }
    return false;
}

$(document).ready(function(){
    $('.menu-item a').on('mousemove', function(e){
        if(!in_magic_triangle){
            $(this).closest('.menu-item').addClass('active').siblings().removeClass('active');
            MAGIC_A = {x:e.pageX,y: e.pageY};
            MAGIC_B = {x:$(this).siblings('.sub-menu').offset().left,y: $(this).siblings('.sub-menu').offset().top};
            MAGIC_C = {x: $(this).siblings('.sub-menu').offset().left, y:$(this).siblings('.sub-menu').offset().top + $(this).siblings('.sub-menu').outerHeight()};
            console.log( MAGIC_A.y +','+MAGIC_A.x +' '+MAGIC_B.y +','+MAGIC_B.x +' '+MAGIC_C.y +','+MAGIC_C.x +' ');
            $('#magic-triangle').attr('points', MAGIC_A.x +','+MAGIC_A.y +' '+MAGIC_B.x +','+MAGIC_B.y +' '+MAGIC_C.x +','+MAGIC_C.y +' ');
            in_magic_triangle = true;
        }else{
            var D = {x: e.pageX, y: e.pageY};
            if (e.pageX < previous_X || !pointInTriangle(D, MAGIC_A, MAGIC_B, MAGIC_C)){
                in_magic_triangle = false;
            }
            previous_X = e.pageX;
        }
    })
})
