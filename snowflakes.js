
 setInterval(createSnowFlakes,100)

console.log('pop');
function createSnowFlakes(){
    const snow_flakes = document.createElement('i');
    snow_flakes.classList.add('fa');
    snow_flakes.classList.add('fa-snowflake-o');
    snow_flakes.style.left = Math.random()*window.innerWidth + 'px';
    snow_flakes.style.animationDuration = Math.random() * 3 + 2 +'s';
    snow_flakes.style.opacity = Math.random();
    snow_flakes.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snow_flakes);

    setTimeout(() => {
        snow_flakes.remove();
    },5000)
}