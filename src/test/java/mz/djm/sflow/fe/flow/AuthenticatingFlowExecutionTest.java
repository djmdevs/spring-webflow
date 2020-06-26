package mz.djm.sflow.fe.flow;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.binding.mapping.Mapper;
import org.springframework.binding.mapping.MappingResults;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.webflow.config.FlowDefinitionResource;
import org.springframework.webflow.config.FlowDefinitionResourceFactory;
import org.springframework.webflow.core.collection.AttributeMap;
import org.springframework.webflow.core.collection.LocalAttributeMap;
import org.springframework.webflow.core.collection.MutableAttributeMap;
import org.springframework.webflow.engine.Flow;
import org.springframework.webflow.test.MockExternalContext;

import mz.djm.sflow.fe.action.AuthenticationAction;
import mz.djm.sflow.fe.action.IAuthAction;
import mz.djm.sflow.fe.entity.UserEntity;

/**
 * 
 * @author Danilo Jo
 *
 */

/**
 * Equality: Two states are equal if they have the same id and are part of the
 * same flow.
 * 
 * @see org.springframework.webflow.engine.TransitionableState
 * @see org.springframework.webflow.engine.ActionState
 * @see org.springframework.webflow.engine.ViewState
 * @see org.springframework.webflow.engine.SubflowState
 * @see org.springframework.webflow.engine.EndState
 * @see org.springframework.webflow.engine.DecisionState
 */
public class AuthenticatingFlowExecutionTest extends AbstractGenericXmlFlowExecutionTests {

	private static final Logger logger = LoggerFactory.getLogger(AuthenticatingFlowExecutionTest.class);
	
	
	//@Autowired
	private IAuthAction authAction; 
	
	@BeforeClass
	public void setUp() throws Exception {
	
		//mock object
		authAction = new AuthenticationAction();
	}


	/*
	 * step1 - getting resource flow
	 * 
	 * read page 64 
	 */
	@Override
	protected FlowDefinitionResource getResource(FlowDefinitionResourceFactory resourceFactory){
		
		//first get resource file
		Resource res = new ClassPathResource("authenticating-flow-test.xml");
		
		//get the path
		String filePath = "";
		try {
		
			filePath = res.getFile().getPath();
		
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		
		//than set resource path
		return resourceFactory.createFileResource(filePath);

	}
	
	

	/* 
	 * step2 - testing flow startup
	 * 
	 * read page 258 , 266
	 */
	@Test
	public void testStartAuthenticationFlow() {
	
		//create user
		UserEntity user = this.testCreateUser("danilo.jo");
	
		//add parameters values
		MutableAttributeMap<Object> input = new LocalAttributeMap<>();
		input.put("userId", user.getId());
		input.put("msg"   , "User Successful Login");
		input.put("authenticationAction", authAction);
		
		//mock context
		MockExternalContext context = new MockExternalContext();
		context.setCurrentUser(user.getUsername());
		
		assertNotNull(context);
		
		//set action into scope NOT ALLOWED
		///this.getFlowScope().put("authenticationAction",authAction);
		
		//startFlow
		this.startFlow(input, context);
		
		//test
		assertCurrentStateEquals("step0"); //Ok
		//assertTrue(getRequiredFlowAttribute("booking") instanceof Booking);
		
				
	}
	
	/*
	 * step3 - testing flow event handling
	 */
	@Test
	public void testOnPressButtonLogin(){
		
		//1 - set the current state, to jump to specificy flow state
		this.setCurrentState("step1");
		
		//adding objects into a flow scope, for now add user
		this.getFlowScope().put("userSession", this.testCreateUser("danilo.jo"));
		//this.getFlowScope().put("msg", "User Successful Login");
		
		//2 - registrying flow definition
		//this.getFlowDefinitionRegistry().registerFlowDefinition(this.createMockAuthenticationSubFlow());
		
		//mocking resume object from step1 to step3
		MockExternalContext context = new MockExternalContext();
		context.setEventId("step0");
		
		//resume FLow - used when resume is necessary not now
		//this.resumeFlow(context);
		
		//3 - assert state
		assertCurrentStateEquals("step1");
		
		// - verify flow ends on-userAuthorized
		/*
		 * assertFlowExecutionEnded(); 
		 */
		//assertFlowExecutionOutcomeEquals("finish");
		
		logger.debug("D");
	}


	/*
	 * step4 - Mocking a subflow
	 */
	private Flow createMockAuthenticationSubFlow() {

		//set flow
		Flow mockLoginFlow = new Flow("login");
		
		mockLoginFlow.setInputMapper(new Mapper() {
				
				@Override
				public MappingResults map(Object source, Object target) {
					//assert that 1L was passed in as input
					assertEquals(1L, ((AttributeMap) source).get("userId"));
					return null;
				}
			 });
		
		//immediately return the loginConfirmed outcome so the caller can respond
		//new EndState(null,null);
		
			 
		return mockLoginFlow;
	}
	
	/**
	 * Create an object
	 * @return
	 */
	private UserEntity testCreateUser(String account) {
		
		return new UserEntity(1L,account);
	
	}
	
	/**
	 * 
	 * @throws IOException
	 */
	@Test(expected = FileNotFoundException.class)
	public void testResourceFileExistence() throws IOException {
		
		Resource res = new ClassPathResource("authenticating-flow-test.xml");
		
		File f = res.getFile();
		
		//validate
		assertEquals("/home/jo/git/spring-webflow/bin/test/authenticating-flow-test.xml", f.getPath());
	}

}
