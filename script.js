let releases = document.querySelector(".releases");

function add_release(vg_name, image_source, link){
    
    let span = document.createElement("span");

    span.innerText = vg_name;

    let img = new Image();

    img.style.margin = "10px";

    img.src = image_source;

    img.addEventListener("click", () => {
        window.location.href = link
    })
    
    releases.appendChild(img);
    
    
    // Please remember to make releases append the child release, or you won't see the images and text...
}

add_release("Grand Theft Auto San Andreas", "gta_sa.jpg", "2d_video_game/2d_video_game.html");
add_release("Grand Theft Auto IV", "gta_iv.png", "three.js/examples/3d_video_game/index.html");
