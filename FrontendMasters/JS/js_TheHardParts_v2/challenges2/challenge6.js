function delay(func, wait) {

    setTimeout(func,wait)

}

fiveSec = () => console.log('5 seconds later')
const timeToWait = 5000;

delay(fiveSec,timeToWait);