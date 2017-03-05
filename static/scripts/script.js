$(function() {
	postsList();
});

function postsList() {
	var template = $('#post-template').html();
	$.ajax({
		url: '/posts'
	}).done(function(response){
		response.forEach(function(post) {
			var newPost = $(template).clone();
			$(newPost).find('.hidden-id').html(post[4]);
			$(newPost).find('.title').html(post[1]);
			$(newPost).find('.author').html(post[0]);
			$(newPost).find('.body').html(post[2]);
			$(newPost).find('.likes').html(post[3]);
			$(newPost).find('.like-button').on('click', oneMoreLike);
			$('#post-list').append(newPost);
		});
	});
}

function oneMoreLike() {
	var id = $(this).find('.hidden-id').html();
	$.ajax({
		url: '/like/' + id
	})
}