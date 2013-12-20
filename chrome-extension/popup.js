$(function() {
	getOKCoinTicker();
	getBterTicker();
	getFXBTCTicker();
});

function getOKCoinTicker(){
	$.ajax({
			type: 'GET',
			url: "https://www.okcoin.com/api/ticker.do",
			data: {"symbol":"ltc_cny"},
			dataType: 'json',
			success: function (data) {
				var t=data.ticker;
				var tr = $("<tr></tr>");
				tr.append($("<td>OKCoin</td>"))
				tr.append($("<td>"+t.last+"</td>"))
				tr.append($("<td>"+t.buy+"</td>"))
				tr.append($("<td>"+t.sell+"</td>"))
				tr.append($("<td>"+t.high+"</td>"))
				tr.append($("<td>"+t.low+"</td>"))
				tr.append($("<td>"+t.vol+"</td>"))
				$("#ticker").append(tr);
			}
	});
}

function getBterTicker(){
	$.ajax({
			type: 'GET',
			url: "https://bter.com/api/1/ticker/ltc_cny",
			dataType: 'json',
			success: function (data) {
				var t=data;
				var tr = $("<tr></tr>");
				tr.append($("<td>Bter</td>"))
				tr.append($("<td>"+t.last+"</td>"))
				tr.append($("<td>"+t.buy+"</td>"))
				tr.append($("<td>"+t.sell+"</td>"))
				tr.append($("<td>"+t.high+"</td>"))
				tr.append($("<td>"+t.low+"</td>"))
				tr.append($("<td>"+t.vol_ltc+"</td>"))
				$("#ticker").append(tr);
			}
	});
}

function getFXBTCTicker(){
	$.ajax({
			type: 'GET',
			url: "https://data.fxbtc.com/api",
			data: {"op":"query_ticker","symbol":"ltc_cny"},
			dataType: 'json',
			success: function (data) {
				var t=data.ticker;
				var tr = $("<tr></tr>");
				tr.append($("<td>FXBTC</td>"))
				tr.append($("<td>"+t.last_rate+"</td>"))
				tr.append($("<td>"+t.bid+"</td>"))
				tr.append($("<td>"+t.ask+"</td>"))
				tr.append($("<td>"+t.high+"</td>"))
				tr.append($("<td>"+t.low+"</td>"))
				tr.append($("<td>"+t.vol+"</td>"))
				$("#ticker").append(tr);
			}
	});
}

