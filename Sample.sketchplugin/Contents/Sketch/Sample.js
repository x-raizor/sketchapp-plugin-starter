
var onRun = function(context) {

	var doc = context.document;
	var selectedLayers = context.selection;
	var selectedCount = selectedLayers.count();

	var loop = [selectedLayers objectEnumerator]
	while (layer = [loop nextObject]) {
		layer.frame().setConstrainProportions(false);
	    var fNoise = 20 * Math.random();
	    layer.frame().setHeight(fNoise);
	}

	log(selectedLayers[0].treeAsDictionary());
}