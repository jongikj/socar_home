package com.socar.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.socar.web.domains.CouponDTO;
import com.socar.web.domains.Retval;

@Controller
@Lazy
@RequestMapping("/coupon")
public class CouponController {
	private static final Logger logger = LoggerFactory.getLogger(CouponController.class);
	@Autowired Retval retval;
	@Autowired CouponDTO coupon;
	
	@RequestMapping("/coupon")
	public @ResponseBody Retval goCoupon(){
		logger.info("GO TO {}", "coupon" );
		return retval;
	}
	
	@RequestMapping("/getCoupon")
	public @ResponseBody CouponDTO getCoupon(){
		logger.info("GO TO {}","getCoupon");
		return coupon;
	}
	
	@RequestMapping("/couponDetail")
	public @ResponseBody CouponDTO getCouponDetail(){
		logger.info("GO TO {}","getCouponDetail");
		return coupon;
	} 
}
