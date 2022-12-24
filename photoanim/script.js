const link = document.querySelectorAll('.link');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');


for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('mousemove', (e) => {
        linkHoverReveal[i].style.opacity = 1;
        linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
        linkImages[i].style.transform = 'scale(1, 1)';
        linkHoverReveal[i].style.left = e.clientX + "px";
    })

    link[i].addEventListener('mouseleave', (e) => {
        linkHoverReveal[i].style.opacity = 0;
        linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
        linkImages[i].style.transform = 'scale(0.8, 0.8)';
    })
}


const centerdiv = document.getElementById("centerdiv");
fetch("https://jsonplaceholder.typicode.com/photos?_limit=6").then((apidata) => {
    return apidata.json();
}).then((jsondata) => {
    jsondata.map((val) => {
        key = val.id;
        let img = document.createElement('img')
        img.src = `https://picsum.photos/200/300?random=${val.id}`
        centerdiv.appendChild(img)
        console.log(val.url);
    })
});


$(document).ready(function() {
    $("button").click(function() {
        $(".center_div").animate({
            left: '-25%'
        }, 1000);
    });
});

$(document).ready(function() {
    $("button").click(function() {
        $(".button").hide();
    });
});

$(document).ready(function() {
    $("button").click(function() {
        $(".content").animate({
            top: '0',
            opacity: '1'

        }, 1200);
    });
});