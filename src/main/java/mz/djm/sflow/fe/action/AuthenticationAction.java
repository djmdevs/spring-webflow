package mz.djm.sflow.fe.action;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.webflow.execution.RequestContext;

import mz.djm.sflow.fe.entity.UserEntity;

/**
 * 
 * @author Danilo Jo
 *
 * uc_0013 - Creating webflow action
 */

/*
 * Use Action Implementations when needed.
 * 
 * While writing action code as POJO logic is the most common, there are several
 * other action implementation options. Sometimes you need to write action code
 * that needs access to the flow context. You can always invoke a POJO and pass
 * it the flowRequestContext as an EL variable. Alternatively, you may implement
 * the "Action 	 - call in .xml <evaluate expression="customAction" />" interface 
 * 
 * or extend from the 
 * "MultiAction" - call in .xml <evaluate expression="multiAction.actionMethod1" /> 
 * base class. These options
 * provide stronger type safety when you have a natural coupling between your
 * action code and Spring Web Flow APIs. Examples of each of these approaches
 * are shown below
 */
public class AuthenticationAction implements IAuthAction {

	private static final Logger logger = LoggerFactory.getLogger(AuthenticationAction.class);
	
	
	@Override
	public String step0(RequestContext context) {
		
		//get user from scope
		UserEntity user = (UserEntity) context.getFlashScope().get("userSession");
		//check
		assertNotNull(user);
		
		//log
		logger.debug("User flashScope is "+user.getUsername());
		
		//redirect to next state
		return "step1";
	}
	
	
	@Override
	public boolean checkAuthorizationState(String msg, RequestContext context) {

		try {
			// not empty
			boolean successState = !msg.isEmpty();

			//check
			assertTrue(successState);
			
			return successState;

		} catch (NullPointerException nex) {

			return false;
		}

	}

}
