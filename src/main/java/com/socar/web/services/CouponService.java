package com.socar.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.socar.web.domains.Command;
import com.socar.web.domains.CouponDTO;
import com.socar.web.domains.Retval;

@Component
@Lazy
public interface CouponService {
	// CREATE, UPDATE, DELETE
	public Retval regist(CouponDTO param);
	public Retval update(CouponDTO param);
	public Retval delete(CouponDTO param);
	// SELECT
	public Retval count();
	public List<CouponDTO> list(Command command);
	public List<CouponDTO> find(Command command);
}
