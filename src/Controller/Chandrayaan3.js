export default class Chandrayaan3 {
    
    constructor(initialPosition, initialDirection) {
        this.position = initialPosition;
        this.direction = initialDirection;
    }

    leftDir = ['N', 'W', 'S', 'E']
    rightDir = ['S', 'W', 'N', 'E']
    axisPair = {
        'E': { index: 0, pos : 1 },
        'W': { index: 0, pos : -1 },
        'N': { index: 1, pos : 1 },
        'S': { index: 1, pos : -1 },
        'U': { index: 2, pos : 1 },
        'D': { index: 2, pos : -1 }
    }

    moveForwardBackward(multiplier) {
        const indVal = this.axisPair[this.direction].index
        const posVal = this.axisPair[this.direction].pos
        this.position[indVal] = this.position[indVal] + posVal * multiplier
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