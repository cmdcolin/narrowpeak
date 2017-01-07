# narrowpeak

A (small) JBrowse plugin for reading the narrowpeak format


## Example config

     {
          "label": "narrowPeak tabix",
          "type": "CanvasFeatures",
          "storeClass": "NarrowPeak/Store/SeqFeature/BED",
          "urlTemplate": "ENCFF305VSD.sorted.bed.gz"
     }
    

## Installation


Download to the plugins/NarrowPeak and add to your config file with

    "plugins": ["NarrowPeak"]

See JBrowse FAQ on installing plugins

## Notes

Requires JBrowse master branch at time of writing for BEDTabix functionality
