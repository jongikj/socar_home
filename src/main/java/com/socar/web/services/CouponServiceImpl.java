package com.socar.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.socar.web.domains.Command;
import com.socar.web.domains.CouponDTO;
import com.socar.web.domains.Retval;

@Service
@Lazy
@Transactional
public class CouponServiceImpl implements CouponService{

	@Override
	public Retval regist(CouponDTO param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Retval update(CouponDTO param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Retval delete(CouponDTO param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Retval count() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CouponDTO> list(Command command) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CouponDTO> find(Command command) {
		// TODO Auto-generated method stub
		return null;
	}

}
