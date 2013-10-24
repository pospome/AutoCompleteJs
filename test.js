$(function(){
	var config = {
		placeholderHTML: '好きなモノを入力して下さい',
		maxTokenGroups: 2,
  		initialList: 'foods',
  		lists: {
    		foods: [
      			{ value: '果物', children: 'fruits' },
      			{ value: '肉', children: 'meats' },
      			{ value: '野菜', children: 'vegetables' }
    		],
    		fruits: ['りんご', 'バナナ', 'オレンジ'],
    		meats: ['牛肉', '鶏肉', '豚肉'],
    		vegetables: ['人参', 'レタス', '玉ねぎ']
  		}
	};
	var widget = new AutoComplete('search_bar', config);


	//入力した値を取得する。
	$('#get_list').click(function(){
		var lists = widget.getValue();
		var listsCount = lists.length;
		var listStr = '';
		for(var i = 0; i < listsCount; i++){
			var items = lists[i];
			var itemsCount = items.length;
			for(var j = 0; j < itemsCount; j++){
				var value = items[j]['value'];
				var tokenHtml = items[j]['tokenHTML'];
				listStr += 'value:' + value + ', tokenHTML:' + tokenHtml + '<br>';
			}
		}
		$('#list').html(listStr);
	});


	var ajax_config = {
		maxTokenGroups: 2,
		lists:{
			foods:{
				ajaxOpts:{
					url:'http://192.168.11.54/autocomplete_js/ajax.php?q={input}',
				}
			}
		}
	};
	var ajax_widget = new AutoComplete('ajax_search_bar', ajax_config);
});
