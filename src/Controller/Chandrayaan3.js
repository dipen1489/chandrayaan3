export default class Chandrayaan3 {
    
    constructor(initialPosition, initialDirection) {
        this.position = initialPosition;
        this.direction = initialDirection;
    }

    moveForwardBackward() {
        this.position = [0,1,0]
    }

    turnLeftRight() {
        this.direction = 'N'
    }

    turnUpDown(direction) {
        this.direction = direction;
    }

    execute(commands) {
        for (const command of commands) {
            switch (command) {
                case 'f':
                    this.moveForwardBackward();
                    break;
                case 'b':
                    this.moveForwardBackward();
                    break;
                case 'l':
                    this.turnLeftRight();
                    break;
                case 'r':
                    this.turnLeftRight();
                    break;
                case 'u':
                    this.turnUpDown('U');
                    break;
                case 'd':
                    this.turnUpDown('D');
                    break;
                default:
                    console.error(`Invalid command : ${command}`);
            }
        }

        return {
            position: this.position,
            direction: this.direction
        };
    }
}