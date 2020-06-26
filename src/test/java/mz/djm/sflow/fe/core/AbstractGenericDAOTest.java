package mz.djm.sflow.fe.core;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.test.AbstractDependencyInjectionSpringContextTests;

import mz.djm.sflow.fe.controller.AbstractGenericTransactionalSpringContextTest;

/**
 * 
 * @author Danilo Jo
 * 
 * Integration Test
 */

/*
 * It’s important to mention that integration tests are still intended to be run
 * outside of the application server.
 * 
 * Even though the full Spring ApplicationContext is constructed, the test should
 * still run without being deployed.
 * 
 * Both unit tests and integration tests must still run as quickly
 * as possible, and testing outside the application server is the only way to run the tests and get
 * immediate feedback.
 * 
 */

public class AbstractGenericDAOTest extends AbstractGenericTransactionalSpringContextTest{

	
	@Override
	protected void onSetUpBeforeTransaction() throws Exception {
		
		super.onSetUpBeforeTransaction();
	
	}
	
	@Override
	protected void onTearDownAfterTransaction() throws Exception {
	
		super.onTearDownAfterTransaction();
	
	}

}
