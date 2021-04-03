const caps = require('../caps.js');


let logSpy = jest.spyOn(console, 'log').mockImplementation();

afterAll(() => {
  logSpy.mockRestore();
});


describe('should test caps/vender/driver console log', () => {

  it('checks new order console.logs', () => {
    caps.pickUp();
    setTimeout(() => {
      expect(logSpy).toHaveBeenCalled()
    }, 2000)
  });

  it('checks delievered console.logs', () => {
    caps.inTransit();
    setTimeout(() => {
      expect(logSpy).toHaveBeenCalled()
    }, 4000)
  });

  it('checks new order console.logs', () => {
    caps.start(fake);
    setTimeout(() => {
      expect(logSpy).toHaveBeenCalled()
    }, 6000)
  });

  it('checks delievered console.logs', () => {
    caps.delievered(fake);
    expect(logSpy).toHaveBeenCalled();
  });

});