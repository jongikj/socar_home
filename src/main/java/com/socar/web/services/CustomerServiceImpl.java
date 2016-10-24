package com.socar.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.socar.web.controllers.CustomerController;
import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.CustomerMapper;

@Service
@Lazy
public class CustomerServiceImpl implements CustomerService{
	private static final Logger logger = LoggerFactory.getLogger(CustomerServiceImpl.class);
	@Autowired private SqlSession sqlSession;
	@Autowired private CustomerDTO customer;
	@Autowired private Retval retval;
	@Autowired private Command command;
	
	@Override
	public Retval regist(CustomerDTO param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Retval update(CustomerDTO param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Retval delete(CustomerDTO param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Retval count() {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.count();
	}

	@Override
	public List<CustomerDTO> list(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.list(command);
	}

	@Override
	public List<CustomerDTO> find(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.find(command);
	}

}
