package com.socar.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.socar.web.controllers.MemberController;
import com.socar.web.domains.Command;
import com.socar.web.domains.MemberDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.MemberMapper;

@Service
@Lazy
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired SqlSession sqlSession;
	@Autowired Command command;
	@Autowired MemberDTO member;
	@Autowired MemberMapper mamberMapper; 
	
	@Override
	public Retval regist(MemberDTO param) {
		// id, pw, name, phone, address, licenseType, licenseNum, expireDate, issueDate, birth, gender
		System.out.println("id	"+param.getId());
		System.out.println("pw	"+param.getPw());
		System.out.println("name	"+param.getName());
		System.out.println("phone	"+param.getPhone());
		System.out.println("address	"+param.getAddress());
		System.out.println("licensetype	"+param.getLicenseType());
		System.out.println("licenseNum	"+param.getLicenseNum());
		System.out.println("issueDate	"+param.getLicenseEnd());
		System.out.println("expireDate	"+param.getLicenseStart());
		System.out.println("birth	"+param.getBirth());
		System.out.println("gender	"+param.getGender());
		return null;
	}

	@Override
	@Transactional  // 쿼리를 동시 2개 이상 사용할 곳에다가만 사용하면 됨.
	public Retval update(MemberDTO member) {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return null;
	}

	@Override
	public Retval delete(MemberDTO member) {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return null;
	}

	@Override
	public List<MemberDTO> find(Command command) {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return mapper.find(command);
	}

	@Override
	public List<MemberDTO> list() {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return mapper.list();
	}

	@Override
	public Retval count() {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return mapper.count();
	}
}