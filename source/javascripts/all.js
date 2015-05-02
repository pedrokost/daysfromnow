//= require_tree .


function compute(number, type, from) {
	return from.add(number, type);
}


jQuery.noConflict();

(function($){
	var $num = $('.input-number');
	var $type = $('.input-type');
	var $out = $('.outputbox');
	var val = compute(0, 'days', moment());
	$out.html(val.format('D/M/YYYY'));

	function updateTime () {
		var val = compute($num.val() || 0, $type.val(), moment());
		var format = 'D/M/YYYY';
		if (['seconds', 'minutes', 'hours'].indexOf($type.val()) !== -1) {
			format = format + ' H:m:s';
		};

		$out.html(val.format(format));
	}

	$num.change(updateTime);
	$type.change(updateTime);

	$num.on('keydown', updateTime);

})(jQuery); 
