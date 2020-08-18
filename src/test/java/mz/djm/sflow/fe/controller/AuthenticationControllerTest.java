package mz.djm.sflow.fe.controller;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * 
 * @author Danilo Jo
 *
 */

/*
 * 	If you find you need to write tests that test the interaction between components, you are
 *	writing what is called an integration test. We will discuss integration tests throughout the rest
 *	of the chapter.
 *
 *	integration tests: tests written with the same testing framework as your unit tests,
 *	but created specifically to test the interaction between the components of your system. Inte-
 * 	gration tests look a lot like unit tests, but they differ on their scope and intention
 */

/*
 * 	Unit tests are excellent for the components of the system that comprise the business
 *	logic. However, there is a lot of code in the system that isn’t necessarily business logic, usually
 *	in the form of database interaction code (the DAOs). Testing these components can quickly
 *	break the rules that we try to follow for unit tests.
 */

/*
 * 	A unit test shouldn’t interact
 *	with external systems such as the database, but how are you supposed to test your DAO
 *	classes?
 */

/*
 * To help with database integration tests, Spring provides the handy
 * AbstractTransactionalSpringContextTests class - which is injected with an instance of a
 * PlatformTransactionManager during initialization. By default, this test class will begin a trans-
 * action before every test method and then roll it back during the teardown phase. If you do
 * wish to commit the transaction after your test run, you may call setComplete() before your
 * tests completes.
 */
public class AuthenticationControllerTest extends AbstractGenericTransactionalSpringContextTest {

	//private static final Log logger = LogFactory.getLog(FlowHandlerMapping.class);
	private static final Logger logger = LoggerFactory.getLogger(AuthenticationControllerTest.class);
	
	@Override
	protected void onSetUp() throws Exception {
		
		/*
		 * ignoring the fact that no transaction manager existes
		 * this.setDependencyCheck(false);
		 */
	}
	
	@Autowired
	private AuthenticationController authController;
	
	@Test
	public void testDoGet() throws Exception {
	
		//set requestMethod must be set to POST
		
		//assert ModelMap object, if not null
		
		//test msg variable if not null(Scen1)
	
		//test msg variable if null(Scen2)
		
		//assert not empty msgObject
	}
	
	@Test
	public void testDoPost() {
		
		
	}


}
