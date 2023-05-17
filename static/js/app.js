function buildCharts(sample){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) =>{
        let samples = data.samples;
        let resultArray = samples.filter((sampleDictionary) => sampleDictionary.id == sample);
        let result = resultArray[0];

        let otuIDs = result.otu_ids;
        let otuLabels = result.otu_labels;
        let sampleValues = result.sample_values;

        let bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: {t: 0},
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
            margin: {t: 30}
        };
        let bubbleData = [
            {
                x: otuIDs,
                y: sampleValues,
                text: otuLabels,
                mode: "markers",
                marker: {
                    size: sampleValues,
                    color: otuIDs,
                    colorscale: "Earth"


                }
            }

        ]


        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    });
}

function buildmetadata(sample){

}

function int(){
    let selector = d3.select("#selDataset");
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) =>{
        let sampleNames = data.names;

        for(let i = 0; i < sampleNames.length; i++){
            selector.append("option").text(sampleNames[i]).property("value", sampleNames[i]);
        }

        let firstSample = sampleNames[0];
        buildCharts(firstSample)
        buildmetadata(firstSample);
    })

    

}

int();