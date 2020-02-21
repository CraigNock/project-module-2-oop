

class Player {
    constructor(root) {
        this.x = 4 * PLAYER_WIDTH;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        this.lives = 3;
        this.domElement = document.createElement("img");
        this.domElement.src = 'images/siren.gif';
        this.domElement.style.position = 'absolute';
        this.domElement.style.height = PLAYER_HEIGHT;
        this.domElement.style.width = PLAYER_WIDTH;
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.domElement.style.zIndex = '10';
        root.appendChild(this.domElement);
    }
    
    moveLeft() {
        if (this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        this.domElement.style.left = `${this.x}px`;
    }
    moveRight() {
        if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
        this.domElement.style.left = `${this.x}px`;
    }

    // flasher = () => {
    //     setInterval(() => {
    //     switch (this.domElement.src) {
    //         case `${coplight[0]}`:
    //             this.domElement.src = `${coplight[1]}`;
    //             break;
    //         case `${coplight[1]}`:
    //             this.domElement.src = `${coplight[2]}`;
    //             break;
    //         case `${coplight[2]}`:
    //             this.domElement.src = `${coplight[0]}`;
    //             break;
    //         default:
    //             break;
    //     }
    //     },500)
    // }
}






