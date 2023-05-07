interface Images {
	[key: string]: string;
  }

const IMAGES: Images = {
	ethanheadshot: new URL("./ethanheadshot.webp", import.meta.url).href,
	genyaheadshot: new URL("./genyaheadshot.webp", import.meta.url).href,
	juniperheadshot: new URL("./juniperheadshot.webp", import.meta.url).href,
	tanguyheadshot: new URL("./tanguyheadshot.webp", import.meta.url).href,
	abandondedpreview: new URL("./abandondedpreview.webp", import.meta.url).href,
	bedroompreview: new URL("./bedroompreview.webp", import.meta.url).href,
	citypreview1: new URL("./citypreview1.webp", import.meta.url).href,
	citypreview2: new URL("./citypreview2.webp", import.meta.url).href,
	citypreview3: new URL("./citypreview3.webp", import.meta.url).href,
	diningroompreview: new URL("./diningroompreview.webp", import.meta.url).href,
	kineticcodepreview: new URL("./kineticcodepreview.webp", import.meta.url).href,
	livingroompreview: new URL("./livingroompreview.webp", import.meta.url).href,
	livingroompreview2: new URL("./livingroompreview2.webp", import.meta.url).href,
	prisonroyalpreview: new URL("./prisonroyalpreview.webp", import.meta.url).href,
	roverseogpreview: new URL("./roverseogpreview.webp", import.meta.url).href,
	squarepreview: new URL("./squarepreview.webp", import.meta.url).href,
	walkwaypreview: new URL("./walkwaypreview.webp", import.meta.url).href,
};

export default IMAGES;

