package com.socar.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;

@Component
@Lazy
public interface CustomerService {
	// CREATE, UPDATE, DELETE
	public Retval regist(CustomerDTO param);
	public Retval update(CustomerDTO param);
	public Retval delete(CustomerDTO param);
	// SELECT
	public Retval count();
	public List<CustomerDTO> list(Command command);
	public List<CustomerDTO> find(Command command);
}
