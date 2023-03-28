//VERSION=3
function setup() {
  return {
    input: ["RLIE", "dataMask"],
    output: {
      bands: 4,
      sampleType: "Auto"
    }
  };

}

const map = [
  [1, 0x0000FE],  //1 - Open water
  [100, 0x00E8FF],  //100 - Snow-covered or snow-free ice
  [254, 0xFF0000],  //254 - Other features
  [205, 0x7B7B7B],  //205 - Cloud or cloud shadows
  [255, 0xFFFFFF]  //255 - No data
];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  let rgbVis = visualizer.process(sample.RLIE);
  return rgbVis.concat(sample.dataMask);
}
