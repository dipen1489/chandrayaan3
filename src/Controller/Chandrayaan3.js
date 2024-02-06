export default class Chandrayaan3 {
    
    constructor(initialPosition, initialDirection) {
        this.position = initialPosition;
        this.direction = initialDirection;
    }

    leftDir = ['N', 'W', 'S', 'E']
    rightDir = ['S', 'W', 'N', 'E']

    moveForwardBackward(multiplier) {
        if (this.direction === 'N') {
            this.position[1] = this.position[1] + multiplier;
        } else if (this.direction === 'S') {
            this.position[1] = this.position[1] - multiplier
        } else if (this.direction === 'E') {
            this.position[0] = this.position[0] + multiplier
        } else if (this.direction === 'W') {
            this.position[0] = this.position[0] - multiplier
        } else if (this.direction === 'U') {
            this.position[2] = this.position[2] + multiplier
        } else if (this.direction === 'D') {
            this.position[2] = this.position[2] - multiplier
        }
    }

    turnLeftRight(directions) {
        const currentIdx = directions.indexOf(this.direction);
        this.direction = directions[(currentIdx + 1) % 4];
    }

    turnUpDown(direction) {
        this.direction = direction;
    }

    execute(commands) {
        for (const command of commands) {
            switch (command) {
                case 'f':
                    this.moveForwardBackward(1);
                    break;
                case 'b':
                    this.moveForwardBackward(-1);
                    break;
                case 'l':
                    this.turnLeftRight(this.leftDir);
                    break;
                case 'r':
                    this.turnLeftRight(this.rightDir);
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