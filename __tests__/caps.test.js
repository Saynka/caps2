const testy = require('../testy.js');


let logSpy = jest.spyOn(console, 'log').mockImplementation();

afterAll(() => {
  logSpy.mockRestore();
});


describe('should test testy/vender/driver console log', () => {

  it('checks new order console.logs', () => {
    testy.on(payload);
    setTimeout(() => {
      expect(logSpy).toHaveBeenCalled()
    }, 2000)
  });

  it('checks delievered console.logs', () => {
    testy.on(payload);
    setTimeout(() => {
      expect(logSpy).toHaveBeenCalled()
    }, 4000)
  });

  it('checks new order console.logs', () => {
    testy.on(payload);
    setTimeout(() => {
      expect(logSpy).toHaveBeenCalled()
    }, 6000)
  });

  it('checks delievered console.logs', () => {
    testy.on(payload);
    expect(logSpy).toHaveBeenCalled();
  });

});