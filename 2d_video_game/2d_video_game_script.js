const player = document.querySelector(".player");

let p = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    vel_x_left: 0,
    vel_x_right: 0,
    vel_y_up: 0,
    vel_y_down: 0,
}

let vel = 5;

// Coordinates and velocity.

function animate(){
    requestAnimationFrame(animate);

    p.x += p.vel_x_left;
    p.x += p.vel_x_right;
    p.y += p.vel_y_up;
    p.y += p.vel_y_down;

    player.style.position = "absolute";
    player.style.left = p.x + "px";
    player.style.top = p.y + "px";
}

animate();

// Creatinf the function for animation.

addEventListener("keydown", (event) => {
    switch(event.code){
        case "KeyW":
            p.vel_y_up = -vel;
            break;
        case "KeyS":
            p.vel_y_down = vel;
            break;
        case "KeyA":
            p.vel_x_left = -vel;
            break;
        case "KeyD":
            p.vel_x_right = vel;
            break;
    }
})

addEventListener("keyup", (event) => {
    switch(event.code){
        default:
            p.vel_x_left = 0;
            p.vel_x_right = 0;
            p.vel_y_down = 0;
            p.vel_y_up = 0;
            break;
    }
})

// Event listeners for controls...