package com.socar.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller // has a 관계 
@Lazy
@RequestMapping("/admin")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@RequestMapping("/main")
	public String goMain(){
		logger.info("AdminController ! goMain()");
		return "admin:admin/notice.tiles";
	}
	@RequestMapping("/logined/header")
	public String loginedHeader(){
		return "admin/header.jsp";
	}
	@RequestMapping("/notice")
	public String goNotice(){
		logger.info("AdminController ! goNotice()");
		return "admin:admin/notice.tiles";
	}
	@RequestMapping("/notice_write")
	public String goNoticeWrite(){
		logger.info("AdminController ! gogoNoticeWrite()");
		return "admin:admin/notice_write.tiles";
	}
	
	@RequestMapping("/inquiry_list")
	public String goInquiryList(){
		logger.info("AdminController ! goInquiryList()");
		return "admin:admin/inquiry_list.tiles";
	}
	@RequestMapping("/answer")
	public String goAnswer(){
		logger.info("AdminController ! goAnswer()");
		return "admin:admin/answer.tiles";
	}	
	@RequestMapping("/car_list")
	public String goCarList(){
		logger.info("AdminController ! goCarList()");
		return "admin:admin/car_list.tiles";
	}
	@RequestMapping("/car_update")
	public String goCarUpdate(){
		logger.info("AdminController ! goCarUpdate()");
		return "admin:admin/car_update.tiles";
	}
	@RequestMapping("/car_regist")
	public String goCarRegist(){
		logger.info("AdminController ! goCarRegist()");
		return "admin:admin/car_regist.tiles";
	}
	@RequestMapping("/coupon_list")
	public String goCouponList(){
		logger.info("AdminController ! goCouponList()");
		return "admin:admin/coupon_list.tiles"; 
	}
	@RequestMapping("/coupon_detail")
	public String goCouponDetail(){
		logger.info("AdminController ! goCouponDetail()");
		return "admin:admin/coupon_detail.tiles"; 
	}
	@RequestMapping("/coupon_regist")
	public String goCouponRegist(){
		logger.info("AdminController ! goCouponRegist()");
		return "admin:admin/coupon_regist.tiles"; 
	}
	@RequestMapping("/notice_content")
	public String gonotice_content(){
		logger.info("AdminController ! gonotice_content()");
		return "admin:admin/notice_content.tiles"; 
	}
	
}
