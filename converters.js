/**
 * converters.js
 *
 * A library of units conversion functions
 */

// create necessary/useful constants
const NPL = 4.44822 // newtons per pound-force
const IPM = 1550 // square inches per square meter
const LPN = 0.224809 // pound-force per newton
const MPI = 0.00064516 // meters square per square inch
const KPM = 1.60934 // kilometers per mile
const MPK = 0.621372 // miles per kilometer
const LPG = 3.78541 // liters per gallon
const GPL = 0.264172 // gallons per liter

/**
 * A function to convert PSI to KPa
 * ToDo: Investigate the best possible constant values
 *       to explain discrepancy between expected value (from Google)
 *       and what our computer (and calculator) calculated
 *
 * @param   {number} psi The input pounds per square inch value
 * @returns {number}     The psi converted to kilopascals
 */
function psi2kpa (psi,) {
  // return the converted value
  return psi * NPL * IPM / 1000
}

/**
 * A function to convert KPa to PSI
 *
 * @param   {number} kpa The input kilopascals value
 * @returns {number}     The kpa converted to pounds per square inch
 */
function kpa2psi (kpa,) {
  // return the converted value
  return kpa * 1000 * LPN * MPI
}

/**
 * A function to convert MPG to liters per 100km
 *
 * @param   {number} mpg The miles-per-gallon value
 * @returns {number}     The mpg converted to liters per 100 km
 */
function mpg2lp100k (mpg,) {
  // return the converted value
  return (1 / mpg) * MPK * LPG * 100
}

/**
 * A function to convert liters per 100km to mpg
 *
 * @param   {number} lp100k The liters-per-100km value
 * @returns {number}        The lp100k converted to mpg
 */
function lp100k2mpg (lp100k,) {
  // return the converted value
  return 1 / (lp100k * 0.01 * KPM * GPL)
}

module.exports = {
  psi2kpa,
  kpa2psi,
  mpg2lp100k,
  lp100k2mpg,
}
