package mz.djm.sflow.fe.controller;

import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.AbstractTransactionalSpringContextTests;

/**
 * 
 * @author Danilo Jo
 * 
 * Generec SpringContext
 *
 */

/*
 * If your application requires the application server to run, it’s possible
 * that it is not taking advantage of the configuration options provided by
 * Spring. 
 * 
 * As mentioned, even if you are using the server’s connection pool
 * during deployments, you can use Spring to create a connection pool for test
 * runs.
 */

public abstract class AbstractGenericTransactionalSpringContextTest extends AbstractTransactionalSpringContextTests{

	//declaration 
	protected MockHttpServletRequest  mockHttpRequest;
	protected MockHttpServletResponse mockHttpResponse;
	
	
	/**
	 * 
	 * 
	 */
	@Override
	protected void onSetUp() throws Exception {
		
		//initialize mocks
		this.mockHttpRequest  = new MockHttpServletRequest();
		this.mockHttpResponse = new MockHttpServletResponse();
		
	}
	
	/**
	 * 
	 * 
	 */
	@Override
	protected void onSetUpBeforeTransaction() throws Exception {
		
		super.onSetUpBeforeTransaction();
	
	}
	
	/**
	 * 
	 * Define generic configuration *.xml files 
	 */
	@Override
	protected String[] getConfigLocations() {
		
		return new String[]{"classpath:spring-context-test.xml","classpath:dispatcher-servlet-test.xml"};
		
	}
}

