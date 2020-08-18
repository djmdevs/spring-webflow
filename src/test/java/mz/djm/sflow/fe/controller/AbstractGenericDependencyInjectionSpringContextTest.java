package mz.djm.sflow.fe.controller;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.test.AbstractDependencyInjectionSpringContextTests;

public abstract class AbstractGenericDependencyInjectionSpringContextTest extends AbstractDependencyInjectionSpringContextTests {



	//get generic configurations and customize
	@Override
	protected String[] getConfigLocations() {
		
		return super.getConfigLocations();
	}
	
	/*
	 * @Test public void test() { fail("Not yet implemented"); }
	 */

}
