const intervalo = setInterval(() => {

    console.log('test one second')
    
}, 1000);

setTimeout(() => {

    clearInterval(intervalo)
    
}, 6000);