module.exports = function($) {
	$('.divider').remove();
	$('.gitbook-link').remove();
	var tpl = `
		<div class="rong-head">
			<div class="rong-head-box">
				<div class="rong-head-box-logo"></div>
			</div>
		<div>
	`;
	$('body').append(tpl);
	return $.html();
}