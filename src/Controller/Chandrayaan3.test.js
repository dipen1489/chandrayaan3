import ControllerChandrayaan from './Chandrayaan3'

describe('Chandrayaan 3 tests', () => {

    let controller

    beforeEach(() => {
        controller = new ControllerChandrayaan([0, 0, 0], 'N')
    });

    it('should move forward in N direction', async() => {
        const commands = ['f']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,1,0])
        expect(result.direction).toEqual('N')
    });

    it('should turn right and move forward in E direction', async() => {
        const commands = ['r', 'f']
        const result = controller.execute(commands);
        expect(result.position).toEqual([1,0,0])
        expect(result.direction).toEqual('E')
    });

    it('should turn twise right and move forward in S direction', async() => {
        const commands = ['r', 'r', 'f']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,-1,0])
        expect(result.direction).toEqual('S')
    });
    
    it('should turn left and move forward in W direction', async() => {
        const commands = ['l', 'f']
        const result = controller.execute(commands);
        expect(result.position).toEqual([-1,0,0])
        expect(result.direction).toEqual('W')
    });

    it('should rotate upward and move forward in U direction', async() => {
        const commands = ['u', 'f']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,0,1])
        expect(result.direction).toEqual('U')
    });

    it('should rotate downward and move forward in D direction', async() => {
        const commands = ['d', 'f']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,0,-1])
        expect(result.direction).toEqual('D')
    });

    it('should rotate downward and move backward in D direction', async() => {
        const commands = ['d', 'b']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,0,1])
        expect(result.direction).toEqual('D')
    });

    it('should run example scenario successfully : f,r,u,b,l', async() => {
        const commands = ['f', 'r', 'u', 'b', 'l']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,1,-1])
        expect(result.direction).toEqual('N')
    });

    it('should ignore other commands', async() => {
        const commands = ['f', 'up', 'r', 'hello world', 'u', 'left', 'b', 'l']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,1,-1])
        expect(result.direction).toEqual('N')
    });

    it('should not move or rotate if all given commands are wrong', async() => {
        const commands = ['hello world', 'left', 'right', 'go', 'down', 'forward']
        const result = controller.execute(commands);
        expect(result.position).toEqual([0,0,0])
        expect(result.direction).toEqual('N')
    });
})