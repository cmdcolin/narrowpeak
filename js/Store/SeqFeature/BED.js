define([
    'dojo/_base/declare',
    'JBrowse/Store/SeqFeature/BEDTabix',
    'JBrowse/Model/SimpleFeature'
],
function (
    declare,
    BEDTabix,
    SimpleFeature
) {
    return declare(BEDTabix, {
        lineToFeature: function (line) {
            var fields = line.fields;
            for (var l = 0; l < fields.length; l++) {
                if (fields[l] === '.') {
                    fields[l] = null;
                }
            }

            var featureData = {
                start: line.start,
                end: line.end,
                seq_id: line.ref,
                name: fields[3],
                score: +fields[4],
                strand: fields[5],
                signalValue: +fields[6],
                pValue: +fields[7],
                qValue: +fields[8],
                peak: +fields[9],
            };

            var f = new SimpleFeature({
                id: fields.slice(0, 5).join('/'),
                data: featureData,
                fields: fields
            });

            return f;
        }
    });
});
