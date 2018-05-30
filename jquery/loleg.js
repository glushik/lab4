animate(function(timePassed){
    loleg.style.left = timePassed / 5 + 'px';
}, 2000);

function animate(draw, duration){
    var start = performance.now();
    requestAnimationFrame(function animate(time){
        var timePassed = time - start;
        console.log(time, start);
        if (timePassed > duration ) timePassed = duration;
        draw(timePassed);
        if (timePassed<duration){
            requestAnimationFrame(animate);
        }
    });
}
