$(function(){
	for(var i in config){
		var conf = config[i];
		$("#ticker").append('<tr id="'+conf.name+'"><td class="name"><a target="_blank" href="'+conf.site+'">'+conf.name+'</a></td><td class="last">-</td><td class="buy">-</td><td class="sell">-</td><td class="high">-</td><td class="low">-</td><td class="vol">-</td></tr>');
		getTicker(conf);
	}
});

function getTicker(conf){
	$.ajax({
		type: 'GET',
		url: conf.url,
		data: conf.params,
		dataType: 'json',
		success: function (data) {
			var res = conf.getResponse(data);
			showTicker(conf,res);
		}
	});
}

function showTicker(conf,res){
	for(var i in res){
		$("#"+conf.name+" ."+i).text(res[i]);
	}
}

var config = [{
	name:"OKCoin",
	site:"http://www.okcoin.com/",
	url:"https://www.okcoin.com/api/ticker.do",
	params:{"symbol":"ltc_cny"},
	getResponse:function(data){
		return data.ticker;
	}
},{
	name:"BTER",
	site:"http://bter.com/",
	url:"https://bter.com/api/1/ticker/ltc_cny",
	getResponse:function(data){
		return $.extend(data,{"vol":data.vol_ltc});
	}
},{
	name:"FXBTC",
	site:"http://data.fxbtc.com/",
	url:"https://data.fxbtc.com/api",
	params:{"op":"query_ticker","symbol":"ltc_cny"},
	getResponse:function(data){
		var data = data.ticker;
		return $.extend(data,{"last":data.last_rate,"buy":data.bid,"sell":data.ask});
	}
}]
