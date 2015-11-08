//Landscape Calc

window.onload = function(){

var imagewidth;
var imageheight;
var ImageRatio;
var screenWidth;
var screenHeight;
var screenRatio;
var newimagewidth;
var screenHeight;
var hotspotMultiplier;

imagewidth = 534;
imageheight = 320;
ImageRatio = imagewidth / imageheight;

screenWidth = [[sys:devicePortraitHeight]];
screenHeight = [[sys:devicePortraitWidth]];
screenRatio = screenWidth / screenHeight;

If ImageRatio = screenRatio {
	newimagewidth = imagewidth;
	newimageheight = imageheight;
	hotspotMultiplier = [[sys:devicePortraitHeight]] / 534;
}

else {

	If ImageRatio > screenRatio {
		newimagewidth = [[sys:devicePortraitHeight]];
		hotspotMultiplier = [[sys:devicePortraitHeight]] / 534;
		newimageheight = hotspotMultiplier * imageheight;
		}

	}

	else {
		newimageheight = [[sys:devicePortraitWidth]];
		hotspotMultiplier = [[sys:devicePortraitWidth]] / 320;
		newimagewith = hotspotMultiplier * imagewidth;
	}

}

window.location.assign("script:SetImageHeight?newimageheight=" + newimageheight);
}




