function Pizza(
	size,
	sauce,
	top1,
	top2,
	top3,
	top4,
	top5,
	top6,
	top7,
	top8,
	top9,
	top10
) {
	this.cost = 10;
	this.size = size;
	this.sauce = sauce;
	this.top1 = top1;
	this.top2 = top2;
	this.top3 = top3;
	this.top4 = top4;
	this.top5 = top5;
	this.top6 = top6;
	this.top7 = top7;
	this.top8 = top8;
	this.top9 = top9;
	this.top10 = top10;
}
Pizza.prototype.changePrice = function () {
	if (this.size === 'Personal') {
		this.cost += 1;
	} else if (this.size === 'Small') {
		this.cost += 2;
	} else if (this.size === 'Medium') {
		this.cost += 3;
	} else if (this.size === 'Large') {
		this.cost += 4;
	} else if (this.size === 'XL') {
		this.cost += 5;
	}
};

Pizza.prototype.changeSauce = function () {
	if (this.sauce === 'Red') {
		this.cost += 1;
	} else if (this.sauce === 'White') {
		this.cost += 1;
	} else if (this.sauce === 'Pesto') {
		this.cost += 1;
	}
};
