//VERSION=3
// Reduced Simple Ratio  (abbrv. RSR)
//
// General formula: NIR / RED * MIRmax - MIR / MIRmax - MIRmin
//
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=168&rsindex_id=75

// Initialize parameters
let MIRmin = 0.239;
let MIRmax = 0.442;

let index = B05 / B04 * MIRmax - B07 / MIRmax - MIRmin;
let min = -1.002;
let max = 6.886;
let zero = 0.0;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.
// This index crosses zero, so a diverging color map is used. To tweak the value of the break in the color map, change the variable 'zero'.

var underflow_color = [1, 1, 1];
var low_color = [208/255, 88/255, 126/255];
var high_color = [241/255, 234/255, 200/255];
var zero_color = [0, 147/255, 146/255];
var overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, zero, max],
[
	underflow_color,
	low_color,
	zero_color, // divergent step at zero
	high_color,
	//overflow_color // uncomment to see overflows
]);
