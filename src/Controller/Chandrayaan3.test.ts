import ControllerChandrayaan from './Chandrayaan3'

describe('Chandrayaan 3 tests', () => {

    let controller

    beforeEach(() => {
        controller = new ControllerChandrayaan([0, 0, 0], 'N')
    });

    it('should move forward in default N direction', async() => {
        const commands = ['f']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,1,0])
        expect(result.direction).toEqual('N')
    });

    it('should rotate upward', async() => {
        const commands = ['u']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,0,0])
        expect(result.direction).toEqual('U')
    });

    it('should rotate downward', async() => {
        const commands = ['d']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,0,0])
        expect(result.direction).toEqual('D')
    });

    it('should not move or rotate if all given commands are wrong', async() => {
        const commands = ['hello world', 'left', 'right', 'go', 'down', 'forward']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,0,0])
        expect(result.direction).toEqual('N')
    });
})