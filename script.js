Shery.imageEffect("#back", {style: 3,config: {"uFrequencyX":{"value":10.74,"range":[0,100]},"uFrequencyY":{"value":10.74,"range":[0,100]},"uFrequencyZ":{"value":9.92,"range":[0,100]},"geoVertex":{"range":[1,64],"value":64},"zindex":{"value":"","range":[-9999999,9999999]},"aspect":{"value":1.3130890052356021},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.2,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.03,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.2,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.183966,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.53,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.28,"range":[0,2]},"noise_scale":{"value":19.01,"range":[0,100]}}, gooey: true})

var elems = document.querySelectorAll(".elem");

elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
    document.querySelector("#main").addEventListener("click", function(){
        if(!animating){
            animating = true;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1, 
                onComplete: function(){
                    gsap.set(this._targets[0], {top: "100%"})
                    animating = false;
                },
            });
    
            index === h1s.lenght - 1 ? (index = 0) : index++;
    
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1, 
            });
        }
    });
});


