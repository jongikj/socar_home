var booking = (function() {
	var init = function() {onCreate();};
	var setContentView = function() {
	};
	
	var onCreate = function() {
		setContentView();
		$('.gnb li:nth-child(6)').click(function() {
			$.ajax({
				url : app.context() + '/booking/content',
				type : 'GET',
				data : {},
				dataType : 'JSON',
				success : function() {
					$('#pub_article').html(BOOKING_FORM);
					booking.booking_search_map();
					booking.init();
				},
				error : function(m) {
					alert("booking/content 이동 중 에러발생" + m);
				}
			});
		});
		
		$('#btn_reserve').click(function() {
			$.ajax({
				url : app.context() + '/booking/reserve',
				type : 'GET',
				data : {},
				dataType : 'JSON',
				success : function() {
					$("#pub_article").html(CONFIRM_FORM);
					booking.init();
				}
			});
		});
		
		$('#btn_reserve_complete').click(function() {
			$.ajax({
				url : app.context() + '/booking/reserve_result',
				type : 'GET',
				data : {},
				dataType : 'JSON',
				success : function(data) {
					$('#pub_article').html(RESULT_FORM);
					booking.init();
				}
			});
		});
		
		$('#booking_result_go_history').click(function() {
			$.ajax({
				url : app.context() + '/member/myHistory',
				type : 'GET',
				data : {},
				dataType : 'JSON',
				success : function(data) {
					$('#pub_article').html(MYHISTORY_FORM);
				}
			});
		});
		
		$('#booking_result_go_main').click(function() {
			controller.home();
		});
	}
	
	return {
		init : init,
		setContentView : setContentView,
		onCreate : onCreate,
		booking_search_map : function() {
			var map;
	        var myCenter = new google.maps.LatLng(37.552615, 126.937665);
	           var mapProp = {
	              center:myCenter,
	              zoom : 13,
	              mapTypeId : google.maps.MapTypeId.ROADMAP
	           };
	           map = new google.maps.Map(document.getElementById("map"),mapProp);
	           google.maps.event.addListener(map, 'click', function(event){
	              placeMarker(event.latLng);
	           });
	        function placeMarker(location){
	           var marker = new google.maps.Marker({
	              position : location,
	              map : map,
	           });
	           var infowindow = new google.maps.InfoWindow({
	              content : 'Latitude: ' + location.lat() + '<br>Longitude : ' + location.lng()
	           });
	           infowindow.open(map,marker);
	         
	           google.maps.event.addListener(map, 'click', function(event){
	              marker.setMap(null);
	           });
	        }
		}
	}
})();

var BOOKING_FORM =
	   '<div id="container" class="box">'
	   +'<div id="content">'
	   +'<h2>'
	   +'<img id="booking_logo" src="resources/img/booking/booking_logo.gif">'
	   +'</h2>'
	   +'<div id="map" style="width: 100%; height: 60%; margin-top: 50px"></div>'
	   +'<!-- 추가 -->'
	   +'<div id="setting" class="open">'
	   +'<div class="setting-box">'
	   +'<h3>'
	   +'<img src="http://socdnw.speedgabia.com/template/asset/images/reservation/setting_title.png" alt="실시간 예약">'
	   +'</h3>'
	   +'<div class="setting-option">'
	   +'<form name="reservation" method="post" action="">'
	   +'<fieldset style="margin: -10px">'
	   +'<div class="group">'
	   +'<table cellspacing="0">'
	   +'<tbody>'
	   +'<tr>'
	   +'<th><img src="http://socdnw.speedgabia.com/template/asset/images/reservation/setting_txt2.gif" alt="대여일"></th>'
	   +'<td>'
	   +'<input id="startDay" type="text"'
	   +'class="input calendar hasDatepicker" style="width: 103px;"'
	   +'value="" readonly="">' 
	   +'<select style="padding: 0;" id="selbox_startTime">'
	   +'<!-- <option selected="selected">10:30</option> -->'
	   +'<option value="00:00">00:00</option>'
	   +'<option value="00:10">00:10</option>'
	   +'<option value="00:20">00:20</option>'
	   +'<option value="00:30">00:30</option>'
	   +'<option value="00:40">00:40</option>'
	   +'<option value="00:50">00:50</option>'
	   +'<option value="01:00">01:00</option>'
	   +'<option value="01:10">01:10</option>'
	   +'<option value="01:20">01:20</option>'
	   +'<option value="01:30">01:30</option>'
	   +'<option value="01:40">01:40</option>'
	   +'<option value="01:50">01:50</option>'
	   +'<option value="02:00">02:00</option>'
	   +'<option value="02:10">02:10</option>'
	   +'<option value="02:20">02:20</option>'
	   +'<option value="02:30">02:30</option>'
	   +'<option value="02:40">02:40</option>'
	   +'<option value="02:50">02:50</option>'
	   +'<option value="03:00">03:00</option>'
	   +'<option value="03:10">03:10</option>'
	   +'<option value="03:20">03:20</option>'
	   +'<option value="03:30">03:30</option>'
	   +'<option value="03:40">03:40</option>'
	   +'<option value="03:50">03:50</option>'
	   +'<option value="04:00">04:00</option>'
	   +'<option value="04:10">04:10</option>'
	   +'<option value="04:20">04:20</option>'
	   +'<option value="04:30">04:30</option>'
	   +'<option value="04:40">04:40</option>'
	   +'<option value="04:50">04:50</option>'
	   +'<option value="05:00">05:00</option>'
	   +'<option value="05:10">05:10</option>'
	   +'<option value="05:20">05:20</option>'
	   +'<option value="05:30">05:30</option>'
	   +'<option value="05:40">05:40</option>'
	   +'<option value="05:50">05:50</option>'
	   +'<option value="06:00">06:00</option>'
	   +'<option value="06:10">06:10</option>'
	   +'<option value="06:20">06:20</option>'
	   +'<option value="06:30">06:30</option>'
	   +'<option value="06:40">06:40</option>'
	   +'<option value="06:50">06:50</option>'
	   +'<option value="07:00">07:00</option>'
	   +'<option value="07:10">07:10</option>'
	   +'<option value="07:20">07:20</option>'
	   +'<option value="07:30">07:30</option>'
	   +'<option value="07:40">07:40</option>'
	   +'<option value="07:50">07:50</option>'
	   +'<option value="08:00">08:00</option>'
	   +'<option value="08:10">08:10</option>'
	   +'<option value="08:20">08:20</option>'
	   +'<option value="08:30">08:30</option>'
	   +'<option value="08:40">08:40</option>'
	   +'<option value="08:50">08:50</option>'
	   +'<option value="09:00">09:00</option>'
	   +'<option value="09:10">09:10</option>'
	   +'<option value="09:20">09:20</option>'
	   +'<option value="09:30">09:30</option>'
	   +'<option value="09:40">09:40</option>'
	   +'<option value="09:50">09:50</option>'
	   +'<option value="10:00">10:00</option>'
	   +'<option value="10:10">10:10</option>'
	   +'<option value="10:20">10:20</option>'
	   +'<option value="10:30">10:30</option>'
	   +'<option value="10:40">10:40</option>'
	   +'<option value="10:50">10:50</option>'
	   +'<option value="11:00">11:00</option>'
	   +'<option value="11:10">11:10</option>'
	   +'<option value="11:20">11:20</option>'
	   +'<option value="11:30">11:30</option>'
	   +'<option value="11:40">11:40</option>'
	   +'<option value="11:50">11:50</option>'
	   +'<option value="12:00">12:00</option>'
	   +'<option value="12:10">12:10</option>'
	   +'<option value="12:20">12:20</option>'
	   +'<option value="12:30">12:30</option>'
	   +'<option value="12:40">12:40</option>'
	   +'<option value="12:50">12:50</option>'
	   +'<option value="13:00">13:00</option>'
	   +'<option value="13:10">13:10</option>'
	   +'<option value="13:20">13:20</option>'
	   +'<option value="13:30">13:30</option>'
	   +'<option value="13:40">13:40</option>'
	   +'<option value="13:50">13:50</option>'
	   +'<option value="14:00">14:00</option>'
	   +'<option value="14:10">14:10</option>'
	   +'<option value="14:20">14:20</option>'
	   +'<option value="14:30">14:30</option>'
	   +'<option value="14:40">14:40</option>'
	   +'<option value="14:50">14:50</option>'
	   +'<option value="15:00">15:00</option>'
	   +'<option value="15:10">15:10</option>'
	   +'<option value="15:20">15:20</option>'
	   +'<option value="15:30">15:30</option>'
	   +'<option value="15:40">15:40</option>'
	   +'<option value="15:50">15:50</option>'
	   +'<option value="16:00">16:00</option>'
	   +'<option value="16:10">16:10</option>'
	   +'<option value="16:20">16:20</option>'
	   +'<option value="16:30">16:30</option>'
	   +'<option value="16:40">16:40</option>'
	   +'<option value="16:50">16:50</option>'
	   +'<option value="17:00">17:00</option>'
	   +'<option value="17:10">17:10</option>'
	   +'<option value="17:20">17:20</option>'
	   +'<option value="17:30">17:30</option>'
	   +'<option value="17:40">17:40</option>'
	   +'<option value="17:50">17:50</option>'
	   +'<option value="18:00">18:00</option>'
	   +'<option value="18:10">18:10</option>'
	   +'<option value="18:20">18:20</option>'
	   +'<option value="18:30">18:30</option>'
	   +'<option value="18:40">18:40</option>'
	   +'<option value="18:50">18:50</option>'
	   +'<option value="19:00">19:00</option>'
	   +'<option value="19:10">19:10</option>'
	   +'<option value="19:20">19:20</option>'
	   +'<option value="19:30">19:30</option>'
	   +'<option value="19:40">19:40</option>'
	   +'<option value="19:50">19:50</option>'
	   +'<option value="20:00">20:00</option>'
	   +'<option value="20:10">20:10</option>'
	   +'<option value="20:20">20:20</option>'
	   +'<option value="20:30">20:30</option>'
	   +'<option value="20:40">20:40</option>'
	   +'<option value="20:50">20:50</option>'
	   +'<option value="21:00">21:00</option>'
	   +'<option value="21:10">21:10</option>'
	   +'<option value="21:20">21:20</option>'
	   +'<option value="21:30">21:30</option>'
	   +'<option value="21:40">21:40</option>'
	   +'<option value="21:50">21:50</option>'
	   +'<option value="22:00">22:00</option>'
	   +'<option value="22:10">22:10</option>'
	   +'<option value="22:20">22:20</option>'
	   +'<option value="22:30">22:30</option>'
	   +'<option value="22:40">22:40</option>'
	   +'<option value="22:50">22:50</option>'
	   +'<option value="23:00">23:00</option>'
	   +'<option value="23:10">23:10</option>'
	   +'<option value="23:20">23:20</option>'
	   +'<option value="23:30">23:30</option>'
	   +'<option value="23:40">23:40</option>'
	   +'<option value="23:50">23:50</option>'
	   +'</select>'
	   +'</td>'
	   +'</tr>'
	   +'<tr>'
	   +'<th><img src="http://socdnw.speedgabia.com/template/asset/images/reservation/setting_txt3.gif" alt="반납일"></th>'
	   +'<td>'
	   +'<input id="endDay" type="text"'
	   +'class="input calendar hasDatepicker" style="width: 103px;"'
	   +'value="" readonly="">' 
	   +'<select style="padding: 0;" id="selbox_endTime">'
	   +'<!-- <option selected="selected">10:30</option> -->'
	   +'<option value="00:00">00:00</option>'
	   +'<option value="00:10">00:10</option>'
	   +'<option value="00:20">00:20</option>'
	   +'<option value="00:30">00:30</option>'
	   +'<option value="00:40">00:40</option>'
	   +'<option value="00:50">00:50</option>'
	   +'<option value="01:00">01:00</option>'
	   +'<option value="01:10">01:10</option>'
	   +'<option value="01:20">01:20</option>'
	   +'<option value="01:30">01:30</option>'
	   +'<option value="01:40">01:40</option>'
	   +'<option value="01:50">01:50</option>'
	   +'<option value="02:00">02:00</option>'
	   +'<option value="02:10">02:10</option>'
	   +'<option value="02:20">02:20</option>'
	   +'<option value="02:30">02:30</option>'
	   +'<option value="02:40">02:40</option>'
	   +'<option value="02:50">02:50</option>'
	   +'<option value="03:00">03:00</option>'
	   +'<option value="03:10">03:10</option>'
	   +'<option value="03:20">03:20</option>'
	   +'<option value="03:30">03:30</option>'
	   +'<option value="03:40">03:40</option>'
	   +'<option value="03:50">03:50</option>'
	   +'<option value="04:00">04:00</option>'
	   +'<option value="04:10">04:10</option>'
	   +'<option value="04:20">04:20</option>'
	   +'<option value="04:30">04:30</option>'
	   +'<option value="04:40">04:40</option>'
	   +'<option value="04:50">04:50</option>'
	   +'<option value="05:00">05:00</option>'
	   +'<option value="05:10">05:10</option>'
	   +'<option value="05:20">05:20</option>'
	   +'<option value="05:30">05:30</option>'
	   +'<option value="05:40">05:40</option>'
	   +'<option value="05:50">05:50</option>'
	   +'<option value="06:00">06:00</option>'
	   +'<option value="06:10">06:10</option>'
	   +'<option value="06:20">06:20</option>'
	   +'<option value="06:30">06:30</option>'
	   +'<option value="06:40">06:40</option>'
	   +'<option value="06:50">06:50</option>'
	   +'<option value="07:00">07:00</option>'
	   +'<option value="07:10">07:10</option>'
	   +'<option value="07:20">07:20</option>'
	   +'<option value="07:30">07:30</option>'
	   +'<option value="07:40">07:40</option>'
	   +'<option value="07:50">07:50</option>'
	   +'<option value="08:00">08:00</option>'
	   +'<option value="08:10">08:10</option>'
	   +'<option value="08:20">08:20</option>'
	   +'<option value="08:30">08:30</option>'
	   +'<option value="08:40">08:40</option>'
	   +'<option value="08:50">08:50</option>'
	   +'<option value="09:00">09:00</option>'
	   +'<option value="09:10">09:10</option>'
	   +'<option value="09:20">09:20</option>'
	   +'<option value="09:30">09:30</option>'
	   +'<option value="09:40">09:40</option>'
	   +'<option value="09:50">09:50</option>'
	   +'<option value="10:00">10:00</option>'
	   +'<option value="10:10">10:10</option>'
	   +'<option value="10:20">10:20</option>'
	   +'<option value="10:30">10:30</option>'
	   +'<option value="10:40">10:40</option>'
	   +'<option value="10:50">10:50</option>'
	   +'<option value="11:00">11:00</option>'
	   +'<option value="11:10">11:10</option>'
	   +'<option value="11:20">11:20</option>'
	   +'<option value="11:30">11:30</option>'
	   +'<option value="11:40">11:40</option>'
	   +'<option value="11:50">11:50</option>'
	   +'<option value="12:00">12:00</option>'
	   +'<option value="12:10">12:10</option>'
	   +'<option value="12:20">12:20</option>'
	   +'<option value="12:30">12:30</option>'
	   +'<option value="12:40">12:40</option>'
	   +'<option value="12:50">12:50</option>'
	   +'<option value="13:00">13:00</option>'
	   +'<option value="13:10">13:10</option>'
	   +'<option value="13:20">13:20</option>'
	   +'<option value="13:30">13:30</option>'
	   +'<option value="13:40">13:40</option>'
	   +'<option value="13:50">13:50</option>'
	   +'<option value="14:00">14:00</option>'
	   +'<option value="14:10">14:10</option>'
	   +'<option value="14:20">14:20</option>'
	   +'<option value="14:30">14:30</option>'
	   +'<option value="14:40">14:40</option>'
	   +'<option value="14:50">14:50</option>'
	   +'<option value="15:00">15:00</option>'
	   +'<option value="15:10">15:10</option>'
	   +'<option value="15:20">15:20</option>'
	   +'<option value="15:30">15:30</option>'
	   +'<option value="15:40">15:40</option>'
	   +'<option value="15:50">15:50</option>'
	   +'<option value="16:00">16:00</option>'
	   +'<option value="16:10">16:10</option>'
	   +'<option value="16:20">16:20</option>'
	   +'<option value="16:30">16:30</option>'
	   +'<option value="16:40">16:40</option>'
	   +'<option value="16:50">16:50</option>'
	   +'<option value="17:00">17:00</option>'
	   +'<option value="17:10">17:10</option>'
	   +'<option value="17:20">17:20</option>'
	   +'<option value="17:30">17:30</option>'
	   +'<option value="17:40">17:40</option>'
	   +'<option value="17:50">17:50</option>'
	   +'<option value="18:00">18:00</option>'
	   +'<option value="18:10">18:10</option>'
	   +'<option value="18:20">18:20</option>'
	   +'<option value="18:30">18:30</option>'
	   +'<option value="18:40">18:40</option>'
	   +'<option value="18:50">18:50</option>'
	   +'<option value="19:00">19:00</option>'
	   +'<option value="19:10">19:10</option>'
	   +'<option value="19:20">19:20</option>'
	   +'<option value="19:30">19:30</option>'
	   +'<option value="19:40">19:40</option>'
	   +'<option value="19:50">19:50</option>'
	   +'<option value="20:00">20:00</option>'
	   +'<option value="20:10">20:10</option>'
	   +'<option value="20:20">20:20</option>'
	   +'<option value="20:30">20:30</option>'
	   +'<option value="20:40">20:40</option>'
	   +'<option value="20:50">20:50</option>'
	   +'<option value="21:00">21:00</option>'
	   +'<option value="21:10">21:10</option>'
	   +'<option value="21:20">21:20</option>'
	   +'<option value="21:30">21:30</option>'
	   +'<option value="21:40">21:40</option>'
	   +'<option value="21:50">21:50</option>'
	   +'<option value="22:00">22:00</option>'
	   +'<option value="22:10">22:10</option>'
	   +'<option value="22:20">22:20</option>'
	   +'<option value="22:30">22:30</option>'
	   +'<option value="22:40">22:40</option>'
	   +'<option value="22:50">22:50</option>'
	   +'<option value="23:00">23:00</option>'
	   +'<option value="23:10">23:10</option>'
	   +'<option value="23:20">23:20</option>'
	   +'<option value="23:30">23:30</option>'
	   +'<option value="23:40">23:40</option>'
	   +'<option value="23:50">23:50</option>'
	   +'</select>'
	   +'</td>'
	   +'</tr>'
	   +'</tbody>'
	   +'</table>'
	   +'</div>'
	   +'<div class="group">'
	   +'<table cellspacing="0">'
	   +'<!-- spock 왕복 설정 UI-->'
	   +'<tbody>'
	   +'<tr id="round_way_wrap">'
	   +'<th rowspan="2"><img src="http://socdnw.speedgabia.com/template/asset/images/reservation/setting_txt4.gif"'
	   +'alt="지역"></th>'
	   +'<td><input id="input_location" type="text"'
	   +'class="input location" placeholder="쏘카존·지역·차종 검색"'
	   +'style="width: 169px;" value=""> <em'
	   +'id="input_location_zone_id" style="display: none;"></em> <em'
	   +'id="input_location_oneway_id" style="display: none;"></em> <em'
	   +'id="input_location_lat" style="display: none;"></em> <em'
	   +'id="input_location_lng" style="display: none;"></em></td>'
	   +'</tr>'
	   +'<!-- spock 편도 설정 UI -->'
	   +'<tr id="one_way_start_wrap" style="display: none;">'
	   +'<th><label style="margin-right: -5px">대여존</label></th>'
	   +'<td><select id="select_one_way_start"'
	   +'style="width: 169px;"><option value="-1">대여존을'
	   +'선택해 주세요</option>'
	   +'</select></td>'
	   +'</tr>'
	   +'<tr id="one_way_end_wrap" style="display: none;">'
	   +'<th><label style="margin-right: -5px">반납존</label></th>'
	   +'<td><select id="select_one_way_end" style="width: 169px;"><option value="-1">반납존을'
	   +'선택해 주세요</option></select></td>'
	   +'</tr>'
	   +'</tbody>'
	   +'</table>'
	   +'</div>'
	   +'<div class="group" id="select_car_wrap">'
	   +'<table cellspacing="0">'
	   +'<tbody>'
	   +'<tr>'
	   +'<th><img src="http://socdnw.speedgabia.com/template/asset/images/reservation/setting_txt5.gif" alt="차종"></th>'
	   +'<td><input id="input_car_class" type="text" class="input socar" style="width: 169px;" value="전체차종">'
	   +'<em style="display: none;"></em></td>'
	   +'</tr>'
	   +'</tbody>'
	   +'</table>'
	   +'</div>'
	   +'<p class="button">'
	   +'<input style="padding-top: 12px; outline: none;" id="btn_search_socar" type="image" src="http://socdnw.speedgabia.com/template/asset/images/reservation/btn_setting_socar.gif"'
	   +'alt="쏘카찾기" onclick="return false;">'
	   +'</p>'
	   +'<!-- 왕복 지역 -->'
	   +'<div id="socarzone" class="option-layer">'
	   +'<div class="search">'
	   +'<label for="input_loc" class="i_label"'
	   +'style="position: absolute; visibility: visible;">지역명,'
	   +'쏘카존</label> <input type="text" id="input_loc" class="input i_text"'
	   +'style="width: 225px" value=""><input id="btn_search_loc" type="image" class="submit" src="http://socdnw.speedgabia.com/template/asset/images/reservation/btn_location_search.gif"'
	   +'alt="검색">'
	   +'</div>'
	   +'<h4>'
	   +'<a><span>최근 이용한 쏘카존</span></a>'
	   +'</h4>'
	   +'<div id="recently_list_wrapper" class="result">'
	   +'<ul id="recently_list">'
	   +'<!-- <li><a href="#">강남역 교보빌딩 주차장</a></li> -->'
	   +'</ul>'
	   +'<!-- <p>최근 이용한 쏘카존이 없습니다.</p> -->'
	   +'</div>'
	   +'<div id="autoComplete">'
	   +'<ul id="ul_search_result">'
	   +'<!-- <li class="exact"><a href="#"><em>구로</em> 디지털단지역 공영주차장</a></li> -->'
	   +'</ul>'
	   +'</div>'
	   +'</div>'
	   +'<!-- //왕복 지역 -->'
	   +'<!-- 편도 노선 -->'
	   +'<div id="oneway_list" class="option-layer">'
	   +'<h4>'
	   +'<a><span>편도 노선선택</span></a>'
	   +'</h4>'
	   +'<div class="list">'
	   +'<ul id="ul_oneway_search_result">'
	   +'<!--  <li class="car2"><a href="#"><img src="http://socdnw.speedgabia.com/template/asset/images/reservation/car_title2.png" alt="쏘나타 하이브리드" /></a></li> -->'
	   +'</ul>'
	   +'</div>'
	   +'</div>'
	   +'<!-- 편도 노선 -->'
	   +'<!-- 차종 -->'
	   +'<div id="socar" class="option-layer">'
	   +'<h4>'
	   +'<a><span>차종선택</span></a>'
	   +'</h4>'
	   +'<div class="list">'
	   +'<ul id="ul_car_search_result">'
	   +'<!-- <li class="car2"><a href="#"><img src="http://socdnw.speedgabia.com/template/asset/images/reservation/car_title2.png" alt="쏘나타 하이브리드" /></a></li> -->'
	   +'</ul>'
	   +'</div>'
	   +'</div>'
	   +'<!-- //차종 -->'
	   +'</fieldset>'
	   +'</form>'
	   +'</div>'
	   +'</div>'
	   +'<div class="setting-show">'
	   +'<a href="#"><img src="http://socdnw.speedgabia.com/template/asset/images/reservation/btn_plus.png"'
	   +'alt="실시간 예약 펼치기"></a>'
	   +'</div>'
	   +'</div>'
	   +'<!-- 끝 -->'
	   +'<div id="search_result_table" class="list">'
	   +'<form name="socar" method="post" action="">'
	   +'<fieldset style="border: none;">'
	   +'<div class="list-header">'
	   +'<p class="select">'
	   +'<select>'
	   +'<option selected="selected">전체 쏘카보기</option>'
	   +'</select>'
	   +'</p>'
	   +'<br>'
	   +'<table cellspacing="0">'
	   +'<tbody>'
	   +'<tr>'
	   +'<th style="width: 14%"><a href="#">쏘카존</a></th>'
	   +'<th style="width: 48%">차량</th>'
	   +'<th style="width: 18%"><a href="#">대여요금</a></th>'
	   +'<th style="width: 10%">주행요금</th>'
	   +'<th style="width: 10%">&nbsp;</th>'
	   +'</tr>'
	   +'</tbody>'
	   +'</table>'
	   +'</div>'
	   +'<div class="section">'
	   +'<div class="arti" style="width: 13%">'
	   +'<span class="zone_info_popup" value="227">숙명여대</span> <em'
	   +'style="display: none;">227</em>'
	   +'</div>'
	   +'<div class="carInfo" style="widows: 47%">'
	   +'<p class="thumb">'
	   +'<a href="#" class="carDetail"><img src="resources/img/booking/car6_new3.png"></a>'
	   +'</p>'
	   +'<div class="desc">'
	   +'<span>스파크 <strong>숙자</strong></span> <em style="display: none;">664</em>'
	   +'<div class="spec">'
	   +'유종 : <em>휘발유</em><br> 옵션 : 오토변속기어, 내비게이션, 블랙박스'
	   +'</div>'
	   +'</div>'
	   +'</div>'
	   +'<div class="price price_info" style="width: 19%">'
	   +'<dl>'
	   +'<dt>기준 대여요금</dt>'
	   +'<dd id="price-r2">'
	   +'<strike>3,600원</strike>'
	   +'</dd>'
	   +'<dt>SO회원 할인가</dt>'
	   +'<dd>'
	   +'<strong id="price-s2">1,800원</strong>'
	   +'</dd>'
	   +'<dt style="display: none;">프로모션 할인가</dt>'
	   +'<dd style="display: none;">'
	   +'<strong id="price-p2">1,800원</strong>'
	   +'</dd>'
	   +'</dl>'
	   +'</div>'
	   +'<div class="oil" style="width: 10%">160원/km</div>'
	   +'<div class="rvBtn" style="width: 9%">'
	   +'<a id="btn_reserve" class="btn_reserve" title="" href="#"><img src="resources/img/booking/btn_list_reservation.gif" alt="예약"></a>'
	   +'<em style="display: none;">227</em> <em style="display: none;">664</em>'
	   +'</div>'
	   +'</div>'
	   +'<div class="section">'
	   +'<div class="arti" style="width: 13%">'
	   +'<span class="zone_info_popup" value="227">숙명여대</span> <em'
	   +'style="display: none;">227</em>'
	   +'</div>'
	   +'<div class="carInfo" style="widows: 47%">'
	   +'<p class="thumb">'
	   +'<a href="#" class="carDetail"><img src="resources/img/booking/car6_new3.png"></a>'
	   +'</p>'
	   +'<div class="desc">'
	   +'<span>스파크 <strong>숙자</strong></span><em style="display: none;">664</em>'
	   +'<div class="spec">'
	   +'유종 : <em>휘발유</em><br> 옵션 : 오토변속기어, 내비게이션, 블랙박스'
	   +'</div>'
	   +'</div>'
	   +'</div>'
	   +'<div class="price price_info" style="width: 19%">'
	   +'<dl>'
	   +'<dt>기준 대여요금</dt>'
	   +'<dd id="price-r2">'
	   +'<strike>3,600원</strike>'
	   +'</dd>'
	   +'<dt>SO회원 할인가</dt>'
	   +'<dd>'
	   +'<strong id="price-s2">1,800원</strong>'
	   +'</dd>'
	   +'<dt style="display: none;">프로모션 할인가</dt>'
	   +'<dd style="display: none;">'
	   +'<strong id="price-p2">1,800원</strong>'
	   +'</dd>'
	   +'</dl>'
	   +'</div>'
	   +'<div class="oil" style="width: 10%">160원/km</div>'
	   +'<div class="rvBtn" style="width: 9%">'
	   +'<a id="btn_reserve" class="btn_reserve" title="" href="#"><img src="resources/img/booking/btn_list_reservation.gif" alt="예약"></a>'
	   +'<em style="display: none;">227</em> <em style="display: none;">664</em>'
	   +'</div>'
	   +'</div>'
	   +'</fieldset>'
	   +'</form>'
	   +'</div>'
	   +'</div>'
	   +'</div>';
var CONFIRM_FORM =
	'<div id="container" class="box" style="height: 1200px">'
	+'<div id="content">'
	+'<div id="confirm_box" >'
	+'<h2><img style="margin-left: 100px" src="resources/img/booking/payment_h2.gif" alt="쏘카 예약 확인/결제"></h2>'
	+'<div id="section_confirm_box" >'
	+'<div class="group" >'
	+'<table cellspacing="0">'
	+'<h3><img src="resources/img/booking/payment_h3_1.gif" alt="예약내역"></h3>'
	+'<tbody>'
	+'<tr>'
	+'<th><img src="resources/img/booking/payment_txt1.gif" alt="차량"></th>'
	+'<td>미니5도어 <strong>카랑이</strong></td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/booking/payment_txt2.gif" alt="일정"></th>'
	+'<td>왕복 / 2016.10.09 일 20:20 - 2016.10.09 일 20:50</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/booking/payment_txt3.gif" alt="이용시간"></th>'
	+'<td>총 0시간 30분</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/booking/payment_txt4.gif" alt="쏘카존"></th>'
	+'<td>숙명여대 </td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/booking/payment_txt5.gif" alt="위치"></th>'
	+'<td>서울시 용산구 청파동2가 53-12</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'</div>'
	+'<div class="group gd" id="group_gb">'
	+'<h3><img src="resources/img/booking/payment_h3_2.gif" alt="결제 내역"></h3>'
	+'<table cellspacing="0">'
	+'<tbody>'
	+'<tr>'
	+'<th><img src="resources/img/booking/payment_txt6.gif" alt="대여요금"></th>'
	+'<td>'
	+'<strike>11,000원</strike> → <strong>4,520</strong>원&nbsp;(58.9%↓)'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/booking/text_discount.png" alt="할인"></th>'
	+'<td>'
	+'<input type="radio" name="discount" value="coupon" checked=""> 쿠폰'
	+'<input type="radio" name="discount" value=""> 미적용'
	+'<div class="discount-options" id="discount-option-coupon">'
	+'<select id="selbox_coupon" style="width:218px;">'
	+'<option value="" selected="selected">쿠폰선택</option>'
	+'<option value="" class="">가을에는 BMW - 최대 12시간 예약가능</option>'
	+'</select>'
	+'</div>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/booking/payment_txt8_n.gif" alt="주행요금"></th>'
	+'<td>220원 /1km당 <span>※ 반납 후 주행거리에 따라 부과</span></td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/booking/payment_card.gif" alt="결제카드"></th>'
	+'<td>'
	+'<select style="width: 218px" id="selbox_card">'
	+'<option value="201482" selected="selected">신한카드 (2014.10.16)</option>'
	+'<option value="99720">비씨 / 체크카드 (2014.05.28)</option>'
	+'</select>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/booking/payment_txt13.gif" alt="회송비" style="display: none;"></th>'
	+'<td><em style="display: none;">0원</em></td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<table cellspacing="0" class="price">'
	+'<tbody><tr>'
	+'<th><img src="resources/img/booking/payment_txt9.gif" alt="결제요금"></th>'
	+'<td>'
	+'<strong class="total_price">5,470</strong>'
	+'<img src="resources/img/booking/payment_txt10.gif" alt="원">'
	+'</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'</div>'
	+'</div>'
	+'<ul class="tip" id="confirm_tip">'
	+'<li>1. 쏘카 이용 시, 반드시 이용규칙을 준수해 주세요.</li>'
	+'<li>2. 대여요금은 차량 대여 시작 수 분 전에 결제되며, 결제가 완료되지 않으면 차량 이용에 제한이 있을 수 있습니다.</li>'
	+'<li>3. 주행요금은 차량 반납 후 실이용 주행거리에 따라 추가 결제됩니다.주행요금 계산기로 예상 비용을 미리 확인해보세요.</li>'
	+'<li>4. 요금은 등록한 결제카드로 청구합니다. 단, 보유 크레딧이 있으면 크레딧으로 결제 후 부족 금액만 결제카드로 청구합니다.</li>'
	+'<li>5. 예약 완료 후에는 반납연장만 가능합니다. 대여기간 수정, 지역 및 차종 변경은 취소 후 새로 예약해주세요.</li>'
	+'<li>6. 대여 시작 <em>3시간 이내에 예약 취소</em> 시 예약 <em>대여요금과 대여보험료 각각 10%</em>에 해당하는 위약금이 부과됩니다.</li>'
	+'<li>7. 예약 관련 안내메시지는 SMS, PUSH, 모바일메신저를 통해 안내드립니다.</li>'
	+'<li>8. 탄력 요금제에 따라 대여요금이 달라질 수 있으며, 할인율(%) 쿠폰 사용시는 기준요금 대비 할인율이 적용될 수 있습니다. </li>'
	+'</ul>'
	+'<div class="confirm" style="margin-top: 70px;">'
	+'<form name="reservation" onsubmit="return false;">'
	+'<fieldset style="text-align: center;">'
	+'<label for="confirm">'
	+'<div style="margin-bottom: 10px;">'
	+'<input type="checkbox" id="js-reserve-confirm">'
	+'<strong style="font-size:15px;">'
	 +'위 예약내역 및 결제내역을 확인하였으며,자동차대여약관이용약관, 개인정보 수집 및 이용에 동의합니다.'
	+'</strong>'
	+'</div>'
	+'<div>'
	+'<input type="checkbox" id="js-nosmoke-confirm">'
	+'<strong style="font-size:15px;">'
	+'쏘카 이용 시 금연할 것을 서약합니다. (흡연 시 벌금 <strong style="color: #FF4265; font-size: 15px;">30만원</strong> 부과 및 즉시 탈퇴)'
	+'</strong>'
	+'</div>'
	+'</label>'
	+'<br>'
	+'<br>'
	+'<input id="btn_reserve_complete" type="image" src="resources/img/booking/btn_reservation.png" alt="쏘카 예약하기">'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var RESULT_FORM =
	   '<div class="complete">'
	   +'<div id="container">'
	   +'<div id="content">'
	   +'<div class="result_box box">'
	   +'<h2><img src="resources/img/booking/complete_h2.gif" alt="예약이 완료되었습니다."></h2>'
	   +'<p class="txt1"><img src="resources/img/booking/complete_txt1.gif" alt="쏘카를 이용해주셔서 감사합니다. 차량 이용시 꼭! 안전 운전 해주세요."></p>'
	   +'<p class="txt2"><img src="resources/img/booking/complete_txt2.gif" alt="차량 반납은 반드시 대여한 쏘카존으로 하셔야 합니다. 다음 사용자를 위해 반납시간을 꼭 지켜주세요. 차량 반납 전에는 연료가 50%이상 남아있는지 확인해주세요."></p>'
	   +'<div class="result_btn">'
	   +'<a id="booking_result_go_main"><img src="resources/img/booking/btn_home.gif" alt="메인으로"></a>'
	   +'<a id="booking_result_go_history"><img src="resources/img/booking/btn_check.gif" alt="예약확인"></a>'
	   +'</div>'
	   +'<div class="group">'
	   +'<table cellspacing="0">'
	   +'<tbody><tr>'
	   +'<th><img src="resources/img/booking/payment_txt1.gif" alt="차량"></th>'
	   +'<td><strong>미니5도어</strong> (20호6163)</td>'
	   +'</tr>'
	   +'<tr>'
	   +'<th><img src="resources/img/booking/payment_txt2.gif" alt="일정"></th>'
	   +'<td>왕복 / 2016.10.20 목 10:20 - 2016.10.20 목 10:50</td>'
	   +'</tr>'
	   +'<tr>'
	   +'<th><img src="resources/img/booking/payment_txt3.gif" alt="이용시간"></th>'
	   +'<td>총 0시간 30분</td>'
	   +'</tr>'
	   +'<tr>'
	   +'<th><img src="resources/img/booking/payment_txt4.gif" alt="쏘카존"></th>'
	   +'<td>숙명여대</td>'
	   +'</tr>'
	   +'<tr>'
	   +'<th><img src="resources/img/booking/payment_txt5.gif" alt="위치"></th>'
	   +'<td>서울시 용산구 청파동2가 53-12</td>'
	   +'</tr>'
	   +'</tbody></table>'
	   +'<p></p>'
	   +'<br><a href="http://goo.gl/pXeXHY"><img src="resources/img/booking/pc_appdown_new_160511.jpg" style="width:100%"></a>'
	   +'</div>'
	   +'</div>'
	   +'</div>'
	   +'</div>'
	   +'</div>';