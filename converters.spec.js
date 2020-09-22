// import functions to be tested
const { psi2kpa, kpa2psi, mpg2lp100k, lp100k2mpg, } = require('./converters.js',)

describe('A library of units converters', () => {
  it('can blow smoke', () => {
    expect(true,).toBe(true,)
  },)

  it('should convert PSI to KPa', () => {
    expect(psi2kpa(32,),).toBe(220.631712,)
    expect(psi2kpa(1,),).toBe(6.894741,)
  },)

  it('should convert KPa to PSI', () => {
    expect(kpa2psi(101.325,),).toBe(14.695952495133,)
    expect(kpa2psi(1,),).toBe(0.14503777444,)
  },)

  it('should convert MPG to liters per 100km', () => {
    expect(mpg2lp100k(40,),).toBe(5.8803694563,)
    expect(mpg2lp100k(25,),).toBe(9.408591130080001,)
  },)

  it('should convert liters per 100km to MPG', () => {
    expect(lp100k2mpg(9.4,),).toBe(25.022895167663442,)
    expect(lp100k2mpg(5.1,),).toBe(46.12063030902673,)
  },)
},)
