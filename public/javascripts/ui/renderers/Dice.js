
class Dice {

    constructor(start,x,y,width,height,img,snd, swaptime) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.snd = snd;
        this.number = start;
        this.rolled = start;
        this.dicex = img.width/6;
        this.dicey = img.height;
        this.swaptime = swaptime || 200;
    }

    roll (number) {
        this.snd.play();
        this.rolled = number;
        this.time = millis();
    }
    draw () {
        if (this.snd.isPlaying()) {
            let ellapsed = millis() - this.time;
            if (ellapsed > this.swaptime) {
                this.number = Math.ceil(Math.random()*6);
                this.time = millis();
            }
        } else {
            this.number = this.rolled; 
        }
        image(this.img,this.x,this.y,this.width,this.height,this.dicex*(this.number-1),0,this.dicex,this.dicey);
    }
}