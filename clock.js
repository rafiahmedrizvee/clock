/* function clock() {
    const time = new Date();
    console.log(time);
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    let ampm = 'AM'
    if (hours > 12) {
        ampm = 'PM'
        
    }

    //12 hours format

    if (hours > 12) {
        hours = hours - 12 ;
    }

    if (hours == 0) {
        hours = 12;
    }

    document.getElementById('show-time').innerText = hours+ ':' + minutes + ':' + seconds + ampm
    
}
setInterval(clock,1000)
 */