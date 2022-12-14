import Player from '@vimeo/player';
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');

    
    const player = new Player(iframe);
    const STORAGE_KEY = 'videoplayer-current-time';
    
    player.on('timeupdate', throttle(timeUpdateValue, 500))
    
    function timeUpdateValue (data) {
        const secondValue = data.seconds;

        localStorage.setItem(STORAGE_KEY, secondValue);
        console.log(secondValue);
    };

    setCurrentTime();

    function setCurrentTime() {
        const сurrentTime = localStorage.getItem(STORAGE_KEY)
    
        if (сurrentTime) {
            player.setCurrentTime(сurrentTime)
        }
    }