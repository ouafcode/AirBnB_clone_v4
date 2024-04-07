$(document).ready(function () {
	console.log('amenities');
	let $checkbox = $(".amenities input[type='checkbox']");
	let checked_amenity = [];
  
	$checkbox.on('change', function () {
	  amenity_id = $(this).data('id');
	  amenity_name = $(this).data('name');
  
	  if ($(this).is(':checked')) {
		checked_amenity.push({
		  'id': amenity_id,
		  'name': amenity_name
  
		});
	  }else {
		checked_amenity = checked_amenity.filter(function (amenity) {
		  return amenity.id != amenity_id;
		});
	  }
	  $('.amenities h4').empty();
	  for (let index = 0; index < checked_amenity.length; index++) {
		if (checked_amenity.length == 1 || index == checked_amenity.length - 1) {
		  $('.amenities h4').append(checked_amenity[index].name);
		}else {
		  $('.amenities h4').append('' + checked_amenity[index].name + ', ');
		}
	  }
	  if (checked_amenity.length >= 3) {
		$('.amenities h4').addClass('text-ellipsis');
	  } else {
		$('.amenities h4').removeClass('text-ellipsis');
	  }
	});
  });
